import { JwtService } from "@nestjs/jwt";
import { Repository } from "typeorm";
import { User } from "../users/users.entity";
import { Role } from "../roles/role.entity";
import { RolesService } from "../roles/roles.service";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
export declare class AuthService {
    private jwtService;
    private usersRepo;
    private rolesService;
    constructor(jwtService: JwtService, usersRepo: Repository<User>, rolesService: RolesService);
    register(registerDto: RegisterDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        cartItems: import("../cart/entities/cart.entity").Cart[];
        addresses: import("../addresses/entities/address.entity").Address[];
        orders: import("../orders/entities/order.entity").Order[];
        reviews: import("../reviews/entities/review.entity").Review[];
        roles: Role[];
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    updateUser(id: number, updateData: Partial<RegisterDto>): Promise<User>;
    deleteUser(id: number): Promise<void>;
}
