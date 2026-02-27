"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = __importStar(require("bcrypt"));
const users_entity_1 = require("../users/users.entity");
const roles_service_1 = require("../roles/roles.service");
let AuthService = class AuthService {
    jwtService;
    usersRepo;
    rolesService;
    constructor(jwtService, usersRepo, rolesService) {
        this.jwtService = jwtService;
        this.usersRepo = usersRepo;
        this.rolesService = rolesService;
    }
    async register(registerDto) {
        const { email, password, phone, name, roles = ["user"] } = registerDto;
        const existingUser = await this.usersRepo.findOne({ where: { email } });
        if (existingUser) {
            throw new common_1.ConflictException("User with this email already exists");
        }
        const roleEntities = [];
        for (const roleName of roles) {
            let role = await this.rolesService.findByName(roleName);
            if (!role) {
                role = await this.rolesService.create(roleName);
            }
            roleEntities.push(role);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepo.create({
            email,
            name,
            phone,
            password: hashedPassword,
            roles: roleEntities,
        });
        await this.usersRepo.save(user);
        const savedUser = await this.usersRepo.findOne({
            where: { id: user.id },
            relations: ["roles"],
        });
        if (!savedUser) {
            throw new common_1.InternalServerErrorException("User registration failed");
        }
        const { password: _, ...userWithoutPassword } = savedUser;
        void _;
        return userWithoutPassword;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = await this.usersRepo.findOne({
            where: { email },
            relations: ["roles"],
        });
        if (!user) {
            throw new common_1.ConflictException("Invalid credentials");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.ConflictException("Invalid credentials");
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
    async updateUser(id, updateData) {
        const user = await this.usersRepo.findOne({
            where: { id },
            relations: ["roles"],
        });
        if (!user) {
            throw new common_1.ConflictException("User not found");
        }
        if (updateData.email)
            user.email = updateData.email;
        if (updateData.phone)
            user.phone = updateData.phone;
        if (updateData.name)
            user.name = updateData.name;
        if (updateData.password) {
            user.password = await bcrypt.hash(updateData.password, 10);
        }
        if (updateData.roles && updateData.roles.length > 0) {
            const roleEntities = [];
            for (const roleName of updateData.roles) {
                let role = await this.rolesService.findByName(roleName);
                if (!role)
                    role = await this.rolesService.create(roleName);
                roleEntities.push(role);
            }
            user.roles = roleEntities;
        }
        return this.usersRepo.save(user);
    }
    async deleteUser(id) {
        const user = await this.usersRepo.findOne({ where: { id } });
        if (!user) {
            throw new common_1.ConflictException("User not found");
        }
        await this.usersRepo.remove(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        roles_service_1.RolesService])
], AuthService);
//# sourceMappingURL=auth.service.js.map