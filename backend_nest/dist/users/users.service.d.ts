import { Repository } from "typeorm";
import { User } from "./users.entity";
import { RolesService } from "../roles/roles.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private usersRepo;
    private rolesService;
    constructor(usersRepo: Repository<User>, rolesService: RolesService);
    private toUserResponse;
    private resolveRoles;
    create(email: string, password: string, phone: string, name: string): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findAllForAdmin(): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }[]>;
    findOneForAdmin(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    createByAdmin(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    updateByAdmin(id: number, dto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    removeByAdmin(id: number): Promise<{
        id: number;
        deleted: boolean;
    }>;
}
