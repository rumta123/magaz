import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { User } from "./users.entity";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/role.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    private rolesService: RolesService,
  ) {}

  private toUserResponse(user: User) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      phone: user.phone,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      roles: user.roles?.map((role) => role.name) ?? [],
    };
  }

  private async resolveRoles(roleNames?: string[]): Promise<Role[]> {
    const names = roleNames && roleNames.length > 0 ? roleNames : ["user"];
    const roles: Role[] = [];

    for (const roleName of names) {
      let role = await this.rolesService.findByName(roleName);
      if (!role) {
        role = await this.rolesService.create(roleName);
      }
      roles.push(role);
    }

    return roles;
  }

  async create(email: string, password: string, phone: string, name: string) {
    const hash = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({ email, password: hash, phone, name });
    return this.usersRepo.save(user);
  }

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }

  async findAllForAdmin() {
    const users = await this.usersRepo.find({
      order: { createdAt: "DESC" },
      relations: ["roles"],
    });

    return users.map((user) => this.toUserResponse(user));
  }

  async findOneForAdmin(id: number) {
    const user = await this.usersRepo.findOne({
      where: { id },
      relations: ["roles"],
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    return this.toUserResponse(user);
  }

  async createByAdmin(dto: CreateUserDto) {
    const existing = await this.usersRepo.findOne({ where: { email: dto.email } });
    if (existing) {
      throw new ConflictException("User with this email already exists");
    }

    const roles = await this.resolveRoles(dto.roles);
    const hash = await bcrypt.hash(dto.password, 10);

    const user = this.usersRepo.create({
      email: dto.email,
      name: dto.name,
      phone: dto.phone,
      password: hash,
      roles,
    });

    const saved = await this.usersRepo.save(user);
    const withRoles = await this.usersRepo.findOne({
      where: { id: saved.id },
      relations: ["roles"],
    });

    if (!withRoles) {
      throw new NotFoundException("User not found after create");
    }

    return this.toUserResponse(withRoles);
  }

  async updateByAdmin(id: number, dto: UpdateUserDto) {
    const user = await this.usersRepo.findOne({
      where: { id },
      relations: ["roles"],
    });

    if (!user) {
      throw new NotFoundException("User not found");
    }

    if (dto.email && dto.email !== user.email) {
      const emailTaken = await this.usersRepo.findOne({ where: { email: dto.email } });
      if (emailTaken) {
        throw new ConflictException("User with this email already exists");
      }
      user.email = dto.email;
    }

    if (dto.name !== undefined) user.name = dto.name;
    if (dto.phone !== undefined) user.phone = dto.phone;

    if (dto.password) {
      user.password = await bcrypt.hash(dto.password, 10);
    }

    if (dto.roles) {
      user.roles = await this.resolveRoles(dto.roles);
    }

    const saved = await this.usersRepo.save(user);
    return this.toUserResponse(saved);
  }

  async removeByAdmin(id: number) {
    const user = await this.usersRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException("User not found");
    }

    await this.usersRepo.remove(user);
    return { id, deleted: true };
  }
}
