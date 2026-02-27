"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
        credentials: true,
    });
    app.useStaticAssets((0, path_1.join)(__dirname, "..", "uploads"), {
        prefix: "/uploads/",
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Интернет-магазин API")
        .setDescription("API для системы электронной торговли — дипломный проект")
        .setVersion("1.0")
        .addTag("🛍️ Shop API", "Основной функционал магазина")
        .addTag("👤 Users", "Управление пользователями")
        .addTag("📦 Products", "Каталог товаров")
        .addTag("🛒 Cart", "Корзина покупок")
        .addTag("📋 Orders", "Заказы")
        .addTag("⭐ Reviews", "Отзывы")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "JWT",
        description: "Введите JWT токен",
        in: "header",
    }, "JWT-auth")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(3333);
    console.log("🚀 Server running on http://localhost:3333");
    console.log("🚀 swager http://localhost:3333/api");
}
bootstrap().catch((err) => {
    console.error("❌ Error during app startup:", err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map