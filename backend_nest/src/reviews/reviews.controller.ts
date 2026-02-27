import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { JwtAuthGuard } from "src/auth/jwt.guard";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { ApiTags, ApiBearerAuth } from "@nestjs/swagger";

@ApiTags("Reviews")
@ApiBearerAuth("JWT-auth")
@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get("product/:productId")
  async findByProduct(
    @Param("productId", ParseIntPipe) productId: number,
    @Query("approved") approved?: string,
  ) {
    const onlyApproved = approved !== "false";
    return this.reviewsService.findByProduct(productId, onlyApproved);
  }

  @UseGuards(JwtAuthGuard)
  @Get("can-review/:productId")
  async canReview(@Param("productId", ParseIntPipe) productId: number, @Req() req: any) {
    return {
      canReview: await this.reviewsService.canUserReviewProduct(req.user.userId, productId),
    };
  }

  @Get("product/:productId/rating")
  async getProductRating(@Param("productId", ParseIntPipe) productId: number) {
    return this.reviewsService.getProductRating(productId);
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.reviewsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async create(@Body() dto: CreateReviewDto, @Req() req: any) {
    return this.reviewsService.create({
      ...dto,
      userId: req.user.userId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateReviewDto,
    @Req() req: any,
  ) {
    return this.reviewsService.update(id, dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number, @Req() req: any) {
    return this.reviewsService.remove(id, req.user.userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Patch(":id/approve")
  async approve(@Param("id", ParseIntPipe) id: number) {
    return this.reviewsService.approve(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Patch(":id/reject")
  async reject(@Param("id", ParseIntPipe) id: number) {
    return this.reviewsService.reject(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Get("admin/pending")
  async getPendingReviews() {
    return this.reviewsService.getPendingReviews();
  }
}
