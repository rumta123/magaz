import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Request,
  HttpCode,
  HttpStatus,
  Put,
  Delete,
  Param,
} from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt.guard";
import { RegisterDto } from "../dto/register.dto";
import { LoginDto } from "../dto/login.dto";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles.guard";

@ApiTags("Auth")
@ApiBearerAuth("JWT-auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "Register a new user" })
  @ApiCreatedResponse({ description: "User registered successfully" })
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);

    return {
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        roles: user.roles.map((role) => role.name),
      },
    };
  }

  @Post("login")
  @ApiOperation({ summary: "Login and receive JWT token" })
  @ApiOkResponse({ description: "Returns JWT token" })
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("profile")
  @ApiOperation({ summary: "Get current user profile" })
  @ApiOkResponse({ description: "User profile returned" })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  getProfile(@Request() req) {
    return req.user as unknown;
  }

  // 🔹 PUT — обновление пользователя
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Put("update/:id")
  async updateUser(
    @Param("id") id: number,
    @Body() updateData: Partial<RegisterDto>,
  ) {
    const updatedUser = await this.authService.updateUser(id, updateData);
    return {
      message: "User updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        phone: updatedUser.phone,
        roles: updatedUser.roles.map((role) => role.name),
      },
    };
  }

  // 🔹 DELETE — удаление пользователя
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Delete("delete/:id")
  async deleteUser(@Param("id") id: number) {
    await this.authService.deleteUser(id);
    return { message: "User deleted successfully" };
  }
}
