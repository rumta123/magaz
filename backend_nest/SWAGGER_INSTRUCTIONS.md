# Swagger — инструкция и рекомендации для backend_nest

Эта инструкция объясняет, как работает Swagger в проекте `backend_nest`, как получить доступ к UI, и даёт хорошие практики по добавлению декораторов (`@ApiProperty`, `@ApiTags`, `@ApiBearerAuth`, `@ApiOperation`, `@ApiResponse` и т.д.) для понятной и полезной документации API.

---

## 1) Где уже настроено
- Основная инициализация Swagger находится в `src/main.ts` — там создаётся `DocumentBuilder`, добавляется `bearer` схема и запускается `SwaggerModule.setup('api', ...)`.
- В локальной сборке UI доступен по: `http://localhost:3000/api` (при дефолтном `listen(3000)`).

## 2) Быстрые команды
- Установить зависимости (если ещё не сделано):

```bash
npm install
# или (в папке backend_nest)
cd react_shop/backend_nest
npm install
```

- Запуск в разработке (с хот-риделоадом):

```bash
npm run start:dev
```

- Запуск в прод (сборка + запуск):

```bash
npm run build
npm run start:prod
```

После запуска открыть: `http://localhost:3000/api`

---

## 3) JWT и авторизация в Swagger
- В `src/main.ts` должна быть добавлена схема Bearer, например:

```ts
const config = new DocumentBuilder()
  .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT-auth')
  .build();
```

- В контроллерах, где требуется авторизация, добавьте на класс `@ApiBearerAuth('JWT-auth')` и/или на методы `@ApiUnauthorizedResponse({ description: 'Unauthorized' })`.
- В Swagger UI нажмите `Authorize`, вставьте `Bearer <token>` или просто `<token>` в поле (в зависимости от настройки), чтобы выполнять защищённые запросы.

Пример:

```ts
@ApiTags('Users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiOperation({ summary: 'Get current user' })
  @ApiOkResponse({ description: 'User profile', type: UserResponseDto })
  getProfile(@Request() req) { return req.user; }
}
```

---

## 4) Документирование DTO (хорошая практика)
- Используйте `@ApiProperty()` над каждым полем DTO, чтобы Swagger показывал пример, тип и описание.
- Примеры опций: `example`, `required`, `nullable`, `type`, `enum`.

Пример DTO:

```ts
export class CreateProductDto {
  @ApiProperty({ example: 'Nike Air Max' })
  title: string;

  @ApiProperty({ example: 199.99 })
  price: number;

  @ApiProperty({ example: 1 })
  categoryId: number;
}
```

- Для опциональных полей укажите `required: false`.
- Для массивов: `@ApiProperty({ type: [String], example: ['tag1','tag2'] })`.
- Для enum: `@ApiProperty({ enum: MyEnum })`.

---

## 5) Документирование контроллеров и ответов
- Добавляйте `@ApiTags('Категория')` на класс контроллера.
- Для метода используйте `@ApiOperation({ summary: 'Краткое описание' })`.
- Указывайте возможные ответы: `@ApiOkResponse({ type: ProductResponseDto })`, `@ApiCreatedResponse(...)`, `@ApiBadRequestResponse(...)`, `@ApiUnauthorizedResponse(...)`.

Пример метода с описанием ответа:

```ts
@Post()
@ApiOperation({ summary: 'Create product' })
@ApiCreatedResponse({ description: 'Product created', type: ProductResponseDto })
@ApiBadRequestResponse({ description: 'Validation failed' })
create(@Body() dto: CreateProductDto) { return this.service.create(dto); }
```

- Если метод возвращает массив: `@ApiOkResponse({ type: ProductResponseDto, isArray: true })`.

---

## 6) DTO для ответов
- Для структурированных ответов создавайте отдельные `*ResponseDto` и помечайте поля `@ApiProperty`. Это позволяет в `@ApiOkResponse({ type: ProductResponseDto })` показывать структуру ответа.

---

## 7) Подход к миграции существующего кода (пошагово)
1. Проверить `src/main.ts` — должна быть инициализация Swagger (DocumentBuilder + SwaggerModule.setup).
2. На уровне DTO: пройти по `src/**/dto/*.ts` и добавить `@ApiProperty` к каждому полю (примеры/required/nullable).
3. На уровне контроллеров: добавить `@ApiTags('...')` на класс, `@ApiBearerAuth('JWT-auth')` для защищённых контроллеров, `@ApiOperation` и `@ApiResponse`/`@ApiOkResponse` на методы.
4. Для методов, которые возвращают сущности — указывать `type` в ответе, например `@ApiOkResponse({ type: ProductResponseDto })`.
5. Запустить `npm run build` и проверить, что TypeScript компилируется.
6. Запустить приложение и проверить `http://localhost:3000/api`.

---

## 8) Примеры часто используемых случаев
- Массив сущностей:

```ts
@ApiOkResponse({ type: ProductResponseDto, isArray: true })
@Get()
findAll() { return this.service.findAll(); }
```

- Метод с авторизацией и возможными ответами:

```ts
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT-auth')
@ApiOperation({ summary: 'Update user' })
@ApiOkResponse({ type: UserResponseDto })
@ApiUnauthorizedResponse({ description: 'JWT token missing or invalid' })
@Patch(':id')
update(@Param('id') id: number, @Body() dto: UpdateUserDto) {}
```

- Привязка enum:

```ts
export enum Role { USER = 'user', ADMIN = 'admin' }

export class SomeDto {
  @ApiProperty({ enum: Role })
  role: Role;
}
```

---

## 9) Частые проблемы и советы
- Убедитесь, что `reflect-metadata` импортирован (обычно уже используется NestJS).
- Если DTO используют `class-transformer`/`class-validator`, включите глобальные пайпы: `app.useGlobalPipes(new ValidationPipe({ transform: true }))`.
- Если Swagger не показывает схему ответа — проверьте, что `type` в `@ApiOkResponse` указывает на класс (не на интерфейс).
- Если у вас `PartialType(CreateDto)` — `@nestjs/mapped-types` сохраняет метаданные, но при проблемах можно явно указать `@ApiProperty` в полях расширения.

---

## 10) Что я сделал у вас в проекте
- Я добавил инициализацию Swagger в `src/main.ts` (DocumentBuilder + bearer).
- Я прошёлся по большинству DTO и добавил `@ApiProperty` (примеры/required), и по контроллерам — `@ApiTags`, `@ApiBearerAuth`, `@ApiOperation` и простые `@ApiResponse`.

Файл с подробной инструкцией: [react_shop/backend_nest/SWAGGER_INSTRUCTIONS.md](react_shop/backend_nest/SWAGGER_INSTRUCTIONS.md)

---

## 11) Рекомендации по следующему шагу
- Пройти оставшиеся контроллеры и DTO, если какие-то ещё не помечены; особенно полезно — ответы контроллеров (`*ResponseDto`).
- Добавить `@ApiResponse({ status: 401, description: 'Unauthorized' })` для защищённых endpoint-ов.
- По желанию: включить автоматическую генерацию примеров OpenAPI/JSON и разместить файл `openapi.json` в CI.

---

Если хотите, могу:
- 1) прогнать весь `src/**/dto` и добавить `@ApiProperty` в оставшиеся файлы автоматически;
- 2) прописать `@ApiOkResponse({ type: X })` для всех контроллерных методов по проекту;
- 3) запустить сборку и проверить ошибки TypeScript.

Скажите, какой из пунктов сделать дальше.