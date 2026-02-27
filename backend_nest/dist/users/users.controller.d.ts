import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }[]>;
    getOne(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    create(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    update(id: number, dto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        roles: string[];
    }>;
    remove(id: number, req: {
        user?: {
            userId?: number;
        };
    }): Promise<{
        id: number;
        deleted: boolean;
    }>;
}
