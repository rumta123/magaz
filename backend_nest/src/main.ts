import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Включаем CORS
  app.enableCors({
    origin: "*", // или ['http://localhost:4200'] для фронтенда
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });
  // 🔹 РАЗДАЧА СТАТИЧЕСКИХ ФАЙЛОВ (изображений)
  app.useStaticAssets(join(__dirname, "..", "uploads"), {
    prefix: "/uploads/",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // удаляет лишние поля
      forbidNonWhitelisted: true, // выбрасывает ошибку при лишних полях
      transform: true, // преобразует типы
    }),
  );
  // ✅ Конфигурация Swagger
  const config = new DocumentBuilder()
    .setTitle("Интернет-магазин API")
    .setDescription("API для системы электронной торговли — дипломный проект")
    .setVersion("1.0")
    .addTag("🛍️ Shop API", "Основной функционал магазина")
    .addTag("👤 Users", "Управление пользователями")
    .addTag("📦 Products", "Каталог товаров")
    .addTag("🛒 Cart", "Корзина покупок")
    .addTag("📋 Orders", "Заказы")
    .addTag("⭐ Reviews", "Отзывы")
    .addBearerAuth(
      // ✅ Документация для JWT авторизации
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "JWT",
        description: "Введите JWT токен",
        in: "header",
      },
      "JWT-auth", // Название схемы
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Сохранять токен при обновении страницы
    },
  });
  await app.listen(3333);
  console.log("🚀 Server running on http://localhost:3333");
  console.log("🚀 swager http://localhost:3333/api");
}

// ✅ Отлавливаем возможные ошибки запуска
bootstrap().catch((err) => {
  console.error("❌ Error during app startup:", err);
  process.exit(1);
});
