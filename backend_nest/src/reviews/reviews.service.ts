import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Review } from "./entities/review.entity";
import { Product } from "../products/entities/product.entity";
import { User } from "../users/users.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { OrderItem } from "../order-items/entities/order-item.entity";
import { Order } from "../orders/entities/order.entity";

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepo: Repository<Review>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
  ) {}

  async canUserReviewProduct(userId: number, productId: number): Promise<boolean> {
    const purchase = await this.orderItemRepo
      .createQueryBuilder("oi")
      .innerJoin(Order, "o", "o.id = oi.orderId")
      .where("oi.productId = :productId", { productId })
      .andWhere("o.userId = :userId", { userId })
      .getOne();

    if (!purchase) {
      return false;
    }

    const existingReview = await this.reviewRepo.findOne({
      where: { userId, productId },
      select: ["id"],
    });

    return !existingReview;
  }

  async create(dto: CreateReviewDto): Promise<Review> {
    if (!dto.userId) {
      throw new BadRequestException("userId is required");
    }

    const product = await this.productRepo.findOne({
      where: { id: dto.productId, isActive: true },
    });
    if (!product) {
      throw new NotFoundException(`Товар с ID ${dto.productId} не найден`);
    }

    const user = await this.userRepo.findOneBy({ id: dto.userId });
    if (!user) {
      throw new NotFoundException(`Пользователь с ID ${dto.userId} не найден`);
    }

    const hasPurchased = await this.canUserReviewProduct(dto.userId, dto.productId);
    if (!hasPurchased) {
      throw new ForbiddenException("Оставить отзыв можно только после покупки этого товара");
    }

    const existing = await this.reviewRepo.findOne({
      where: { productId: dto.productId, userId: dto.userId },
    });
    if (existing) {
      throw new BadRequestException("Вы уже оставляли отзыв на этот товар");
    }

    const review = this.reviewRepo.create({
      ...dto,
      isApproved: true,
    });

    return this.reviewRepo.save(review);
  }

  async findByProduct(productId: number, onlyApproved: boolean = true): Promise<Review[]> {
    const where: any = { productId };
    if (onlyApproved) {
      where.isApproved = true;
    }

    return this.reviewRepo.find({
      where,
      relations: ["user"],
      select: {
        id: true,
        rating: true,
        comment: true,
        createdAt: true,
        isApproved: true,
        user: { id: true, name: true },
      },
      order: { createdAt: "DESC" },
    });
  }

  async findOne(id: number): Promise<Review> {
    const review = await this.reviewRepo.findOne({
      where: { id },
      relations: ["user", "product"],
    });

    if (!review) {
      throw new NotFoundException(`Отзыв с ID ${id} не найден`);
    }

    return review;
  }

  async findByUser(userId: number): Promise<Review[]> {
    return this.reviewRepo.find({
      where: { userId },
      relations: ["product"],
      order: { createdAt: "DESC" },
    });
  }

  async update(id: number, dto: UpdateReviewDto, userId?: number): Promise<Review> {
    const review = await this.findOne(id);

    if (userId && review.userId !== userId) {
      throw new ForbiddenException("Вы можете редактировать только свои отзывы");
    }

    await this.reviewRepo.update(id, dto);
    return this.findOne(id);
  }

  async approve(id: number): Promise<Review> {
    await this.reviewRepo.update(id, { isApproved: true });
    return this.findOne(id);
  }

  async reject(id: number): Promise<Review> {
    await this.reviewRepo.update(id, { isApproved: false });
    return this.findOne(id);
  }

  async remove(id: number, userId?: number): Promise<{ message: string }> {
    const review = await this.findOne(id);

    if (userId && review.userId !== userId) {
      throw new ForbiddenException("Вы можете удалять только свои отзывы");
    }

    await this.reviewRepo.remove(review);
    return { message: "Отзыв успешно удален" };
  }

  async getProductRating(
    productId: number,
  ): Promise<{ average: number; count: number; distribution: Record<number, number> }> {
    const reviews = await this.reviewRepo.find({
      where: { productId, isApproved: true },
      select: ["rating"],
    });

    if (reviews.length === 0) {
      return { average: 0, count: 0, distribution: {} };
    }

    const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let sum = 0;

    for (const review of reviews) {
      sum += review.rating;
      distribution[review.rating] = (distribution[review.rating] || 0) + 1;
    }

    return {
      average: Math.round((sum / reviews.length) * 10) / 10,
      count: reviews.length,
      distribution,
    };
  }

  async getPendingReviews(): Promise<Review[]> {
    return this.reviewRepo.find({
      where: { isApproved: false },
      relations: ["user", "product"],
      order: { createdAt: "ASC" },
    });
  }
}

