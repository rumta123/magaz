import { Repository } from "typeorm";
import { Role } from "./role.entity";
export declare class RolesService {
    private rolesRepo;
    constructor(rolesRepo: Repository<Role>);
    create(name: string): Promise<Role>;
    findByName(name: string): Promise<Role | null>;
    findAll(): Promise<Role[]>;
}
