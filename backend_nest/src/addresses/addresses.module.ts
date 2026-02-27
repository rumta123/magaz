// src/addresses/addresses.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AddressesController } from "./addresses.controller";
import { AddressesService } from "./addresses.service";
import { Address } from "./entities/address.entity";
import { User } from "../users/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Address, User])],
  controllers: [AddressesController],
  providers: [AddressesService],
  exports: [AddressesService],
})
export class AddressesModule {}
