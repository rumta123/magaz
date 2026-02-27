import { IsBoolean, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ImportLoadCategoriesDto {
  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: true, required: false })
  upsert?: boolean; // обновлять категории если уже есть

  @IsOptional()
  @IsBoolean()
  @ApiProperty({ example: false, required: false })
  skipIfExists?: boolean; // пропускать если title уже есть
}
