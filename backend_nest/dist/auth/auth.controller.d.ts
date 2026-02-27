import { AuthService } from "./auth.service";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            name: string;
            phone: string;
            roles: string[];
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): unknown;
    updateUser(id: number, updateData: Partial<RegisterDto>): Promise<{
        message: string;
        user: {
            id: number;
            email: string;
            phone: string;
            roles: string[];
        };
    }>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
