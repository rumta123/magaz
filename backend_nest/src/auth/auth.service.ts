import {
  Injectable,
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "../users/users.entity";
import { Role } from "../roles/role.entity";
import { RolesService } from "../roles/roles.service";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
    private rolesService: RolesService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { email, password, phone, name, roles = ["user"] } = registerDto;

    // Проверяем существующего пользователя
    const existingUser = await this.usersRepo.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException("User with this email already exists");
    }

    // Находим или создаем роли
    const roleEntities: Role[] = [];
    for (const roleName of roles) {
      let role = await this.rolesService.findByName(roleName);
      if (!role) {
        role = await this.rolesService.create(roleName);
      }
      roleEntities.push(role);
    }

    // Хешируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаем пользователя
    const user = this.usersRepo.create({
      email,
      name,
      phone,
      password: hashedPassword,
      roles: roleEntities,
    });

    await this.usersRepo.save(user);

    // Загружаем пользователя с ролями
    const savedUser = await this.usersRepo.findOne({
      where: { id: user.id },
      relations: ["roles"],
    });

    // Проверяем, что пользователь был найден
    if (!savedUser) {
      throw new InternalServerErrorException("User registration failed");
    }

    // Создаем объект без пароля
    const { password: _, ...userWithoutPassword } = savedUser;
    void _; // явно игнорируем переменную
    return userWithoutPassword;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.usersRepo.findOne({
      where: { email },
      relations: ["roles"],
    });

    if (!user) {
      throw new ConflictException("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ConflictException("Invalid credentials");
    }

    const payload = {
      email: user.email,
      sub: user.id,
      roles: user.roles.map((role) => role.name),
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async updateUser(id: number, updateData: Partial<RegisterDto>) {
    const user = await this.usersRepo.findOne({
      where: { id },
      relations: ["roles"],
    });
    if (!user) {
      throw new ConflictException("User not found");
    }

    // Обновляем только переданные поля
    if (updateData.email) user.email = updateData.email;
    if (updateData.phone) user.phone = updateData.phone;
    if (updateData.name) user.name = updateData.name;
    if (updateData.password) {
      user.password = await bcrypt.hash(updateData.password, 10);
    }

    // Если указаны новые роли
    if (updateData.roles && updateData.roles.length > 0) {
      const roleEntities: Role[] = [];
      for (const roleName of updateData.roles) {
        let role = await this.rolesService.findByName(roleName);
        if (!role) role = await this.rolesService.create(roleName);
        roleEntities.push(role);
      }
      user.roles = roleEntities;
    }

    return this.usersRepo.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) {
      throw new ConflictException("User not found");
    }
    await this.usersRepo.remove(user);
  }
}
