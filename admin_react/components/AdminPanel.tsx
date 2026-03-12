"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Admin,
  BooleanField,
  Button,
  Create,
  Datagrid,
  DateField,
  DeleteButton,
  Edit,
  EditButton,
  FunctionField,
  ImageField,
  ImageInput,
  List,
  Login,
  NumberField,
  NumberInput,
  ReferenceInput,
  Resource,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  Title,
  required,
  useDataProvider,
  useGetIdentity,
  useNotify,
  useRecordContext,
  useRefresh,
  useUpdate,
} from "react-admin";
import { useFormContext, useWatch } from "react-hook-form";
import { authProvider } from "../lib/authProvider";
import { dataProvider } from "../lib/dataProvider";
import { i18nProvider } from "../lib/i18nProvider";

const TRANSLIT_MAP: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};

const ORDER_STATUS_LABELS: Record<string, string> = {
  pending: "Новый",
  processing: "Принят в работу",
  shipped: "Отправлен",
  delivered: "Доставлен",
  cancelled: "Отменен",
};

const PAYMENT_METHOD_LABELS: Record<string, string> = {
  card: "Карта",
  cash: "Наличные",
  sbp: "СБП",
};

const toLatinSlug = (value: string): string => {
  const translit = value
    .toLowerCase()
    .split("")
    .map((ch) => TRANSLIT_MAP[ch] ?? ch)
    .join("");

  return translit
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const AutoSlugSync = () => {
  const { setValue, getValues } = useFormContext();
  const title = useWatch({ name: "title" }) as string | undefined;
  const prevAutoSlugRef = useRef("");

  useEffect(() => {
    const currentTitle = (title ?? "").trim();
    if (!currentTitle) return;

    const autoSlug = toLatinSlug(currentTitle);
    const currentSlug = String(getValues("slug") ?? "");

    if (!currentSlug || currentSlug === prevAutoSlugRef.current) {
      setValue("slug", autoSlug, { shouldDirty: true, shouldValidate: true });
    }

    prevAutoSlugRef.current = autoSlug;
  }, [title, getValues, setValue]);

  return null;
};

const ProductRestoreButton = () => {
  const record = useRecordContext<Record<string, unknown>>();
  const [update, { isPending }] = useUpdate();
  const notify = useNotify();
  const refresh = useRefresh();

  if (!record || record.isActive) return null;

  const handleRestore = () => {
    update(
      "products",
      {
        id: record.id as number | string,
        data: { restore: true },
        previousData: record,
      },
      {
        onSuccess: () => {
          notify("Товар восстановлен", { type: "success" });
          refresh();
        },
        onError: (error) => {
          notify(error?.message || "Не удалось восстановить товар", {
            type: "error",
          });
        },
      },
    );
  };

  return <Button label="Восстановить" onClick={handleRestore} disabled={isPending} />;
};

const ProductList = () => (
  <List>
    <Datagrid rowClick={false}>
      <NumberField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <TextField source="category.title" label="Категория" />
      <NumberField source="price" label="Цена" />
      <NumberField source="stock" label="Остаток" />
      <BooleanField source="isActive" label="Активен" />
      <TextField source="slug" label="Слаг" />
      <EditButton label="Редактировать" />
      <ProductRestoreButton />
      <DeleteButton label="Удалить" />
    </Datagrid>
  </List>
);

const ProductCreate = () => (
  <Create title="Создать товар">
    <SimpleForm>
      <TextInput source="title" label="Название" validate={required()} />
      <AutoSlugSync />
      <TextInput source="slug" label="Слаг" />
      <NumberInput source="price" label="Цена" validate={required()} />
      <NumberInput source="discontPrice" label="Цена со скидкой" />
      <TextInput source="description" label="Описание" multiline />
      <NumberInput source="stock" label="Остаток" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput label="Категория" optionText="title" validate={required()} />
      </ReferenceInput>
      <ImageInput label="Главное изображение" source="image" accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
      <ImageInput label="Галерея" source="gallery" multiple accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

const ProductGalleryActions = (props: { record?: Record<string, unknown> }) => {
  const record = useRecordContext<Record<string, unknown>>(props);
  const provider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  if (!record) return null;

  const imageId = record.id as number | string | undefined;
  const imageUrl = String(record.imageUrl ?? "");

  if (!imageId || !imageUrl) return null;

  const handleDelete = async () => {
    try {
      await provider.delete("product-images", {
        id: imageId,
        previousData: record,
      });
      notify("Фото галереи удалено", { type: "success" });
      refresh();
    } catch (error) {
      notify(error instanceof Error ? error.message : "Не удалось удалить фото", {
        type: "error",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 12,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        padding: 12,
      }}
    >
      <Image
        src={imageUrl}
        alt={String(record.altText ?? "gallery")}
        width={72}
        height={72}
        unoptimized
        style={{ width: 72, height: 72, objectFit: "cover", borderRadius: 6 }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, color: "#6b7280" }}>ID: {String(imageId)}</div>
        <div style={{ fontSize: 12, color: "#6b7280" }}>
          {record.isPrimary ? "Главное фото" : "Дополнительное фото"}
        </div>
      </div>
      <Button label="Удалить" onClick={handleDelete} />
    </div>
  );
};

const ProductGallerySection = () => {
  const record = useRecordContext<Record<string, unknown>>();
  const images = Array.isArray(record?.images)
    ? (record.images as Array<Record<string, unknown>>)
    : [];

  if (images.length === 0) {
    return (
      <div style={{ marginTop: 8, marginBottom: 16, color: "#6b7280" }}>
        Дополнительных фото пока нет
      </div>
    );
  }

  return (
    <div style={{ marginTop: 8, marginBottom: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Текущая галерея</div>
      {images.map((image) => (
        <ProductGalleryActions key={String(image.id ?? image.imageUrl ?? "")} record={image} />
      ))}
    </div>
  );
};

const ProductEdit = () => (
  <Edit title="Редактировать товар">
    <SimpleForm>
      <TextInput source="id" label="ID" disabled />
      <TextInput source="title" label="Название" validate={required()} />
      <AutoSlugSync />
      <TextInput source="slug" label="Слаг" />
      <NumberInput source="price" label="Цена" />
      <NumberInput source="discontPrice" label="Цена со скидкой" />
      <TextInput source="description" label="Описание" multiline />
      <NumberInput source="stock" label="Остаток" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput label="Категория" optionText="title" validate={required()} />
      </ReferenceInput>
      <ImageInput label="Главное изображение" source="image" accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
      <ProductGallerySection />
      <ImageInput label="Добавить в галерею" source="gallery" multiple accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

const CategoryList = () => (
  <List>
    <Datagrid rowClick={false}>
      <NumberField source="id" label="ID" />
      <TextField source="title" label="Название" />
      <TextField source="slug" label="Слаг" />
      <TextField source="image" label="Изображение" />
      <EditButton label="Редактировать" />
      <DeleteButton label="Удалить" />
    </Datagrid>
  </List>
);

const CategoryCreate = () => (
  <Create title="Создать категорию">
    <SimpleForm>
      <TextInput source="title" label="Название" validate={required()} />
      <AutoSlugSync />
      <TextInput source="slug" label="Слаг" />
      <ImageInput label="Изображение" source="image" accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

const CategoryEdit = () => (
  <Edit title="Редактировать категорию">
    <SimpleForm>
      <TextInput source="id" label="ID" disabled />
      <TextInput source="title" label="Название" validate={required()} />
      <AutoSlugSync />
      <TextInput source="slug" label="Слаг" />
      <ImageInput label="Изображение" source="image" accept={{ "image/*": [] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

const roleChoices = [
  { id: "user", name: "Пользователь" },
  { id: "manager", name: "Менеджер" },
  { id: "admin", name: "Администратор" },
];

const UserList = () => (
  <List>
    <Datagrid rowClick={false}>
      <NumberField source="id" label="ID" />
      <TextField source="email" label="Эл. почта" />
      <TextField source="name" label="Имя" />
      <TextField source="phone" label="Телефон" />
      <BooleanField source="isActive" label="Активен" />
      <TextField source="rolesText" label="Роли" />
      <EditButton label="Редактировать" />
      <DeleteButton label="Удалить" />
    </Datagrid>
  </List>
);

const UserCreate = () => (
  <Create title="Создать пользователя">
    <SimpleForm>
      <TextInput source="email" label="Эл. почта" validate={required()} />
      <TextInput source="name" label="Имя" validate={required()} />
      <TextInput source="phone" label="Телефон" />
      <TextInput source="password" label="Пароль" type="password" validate={required()} />
      <SelectArrayInput
        source="roles"
        label="Роли"
        choices={roleChoices}
        validate={required()}
        defaultValue={["user"]}
      />
    </SimpleForm>
  </Create>
);

const UserEdit = () => (
  <Edit title="Редактировать пользователя">
    <SimpleForm>
      <TextInput source="id" label="ID" disabled />
      <TextInput source="email" label="Эл. почта" validate={required()} />
      <TextInput source="name" label="Имя" validate={required()} />
      <TextInput source="phone" label="Телефон" />
      <TextInput source="password" type="password" label="Новый пароль" />
      <SelectArrayInput source="roles" label="Роли" choices={roleChoices} validate={required()} />
    </SimpleForm>
  </Edit>
);

const OrderStatusActions = () => {
  const record = useRecordContext<Record<string, unknown>>();
  const [update, { isPending }] = useUpdate();
  const notify = useNotify();
  const refresh = useRefresh();

  if (!record) return null;

  const status = String(record.status ?? "");
  const id = record.id as number | string;

  const updateStatus = (
    nextStatus: "processing" | "shipped" | "delivered" | "cancelled",
  ) => {
    update(
      "orders",
      {
        id,
        data: { status: nextStatus },
        previousData: record,
      },
      {
        onSuccess: () => {
          notify(`Статус заказа обновлен: ${ORDER_STATUS_LABELS[nextStatus] ?? nextStatus}`, {
            type: "success",
          });
          refresh();
        },
        onError: (error) => {
          notify(error?.message || "Не удалось обновить заказ", { type: "error" });
        },
      },
    );
  };

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Button
        label="Принять в работу"
        onClick={() => updateStatus("processing")}
        disabled={isPending || status !== "pending"}
      />
      <Button
        label="Отправить"
        onClick={() => updateStatus("shipped")}
        disabled={isPending || status !== "processing"}
      />
      <Button
        label="Доставлен"
        onClick={() => updateStatus("delivered")}
        disabled={isPending || status !== "shipped"}
      />
      <Button
        label="Отменить"
        onClick={() => updateStatus("cancelled")}
        disabled={isPending || status === "cancelled" || status === "delivered"}
      />
    </div>
  );
};

const OrderList = () => (
  <List>
    <Datagrid rowClick={false}>
      <NumberField source="id" label="ID" />
      <TextField source="orderNumber" label="Заказ №" />
      <FunctionField
        label="Покупатель"
        render={(record: Record<string, unknown>) => {
          const user = (record.user as Record<string, unknown> | undefined) ?? {};
          const name = String(user.name ?? "-");
          const email = String(user.email ?? "-");
          const phone = String(user.phone ?? "-");
          return (
            <div style={{ lineHeight: 1.3 }}>
              <div>
                <strong>{name}</strong>
              </div>
              <div>{email}</div>
              <div>{phone}</div>
            </div>
          );
        }}
      />
      <FunctionField
        label="Адрес"
        render={(record: Record<string, unknown>) => {
          const address = (record.address as Record<string, unknown> | undefined) ?? {};
          if (!address.id) return "-";
          const city = String(address.city ?? "");
          const street = String(address.street ?? "");
          const building = String(address.building ?? "");
          const apartment = String(address.apartment ?? "");
          const postalCode = String(address.postalCode ?? "");
          return [city, street, building, apartment, postalCode]
            .filter((part) => part && part !== "null" && part !== "undefined")
            .join(", ");
        }}
      />
      <FunctionField
        label="Позиции"
        render={(record: Record<string, unknown>) => {
          const items = Array.isArray(record.orderItems)
            ? (record.orderItems as Array<Record<string, unknown>>)
            : [];
          if (items.length === 0) return "-";
          return (
            <div style={{ lineHeight: 1.3 }}>
              {items.map((item) => {
                const name = String(item.productName ?? "Товар");
                const qty = Number(item.quantity ?? 0);
                const price = Number(item.price ?? 0);
                const total = Number(item.total ?? 0);
                return (
                  <div key={String(item.id ?? `${name}-${qty}-${total}`)}>
                    {name} x{qty} {price} = {total}
                  </div>
                );
              })}
            </div>
          );
        }}
      />
      <NumberField source="totalAmount" label="Сумма" />
      <FunctionField
        label="Оплата"
        render={(record: Record<string, unknown>) => {
          const payment = String(record.paymentMethod ?? "");
          return PAYMENT_METHOD_LABELS[payment] ?? payment;
        }}
      />
      <FunctionField
        label="Статус"
        render={(record: Record<string, unknown>) => {
          const status = String(record.status ?? "");
          return ORDER_STATUS_LABELS[status] ?? status;
        }}
      />
      <DateField source="createdAt" label="Создан" showTime />
      <OrderStatusActions />
    </Datagrid>
  </List>
);

const DashboardPage = () => {
  const { data: identity } = useGetIdentity();
  return (
    <div style={{ padding: 24 }}>
      <Title title="Панель управления" />
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Панель управления</h1>
      <p style={{ margin: 0 }}>Вы вошли как {identity?.fullName ?? "пользователь"}.</p>
    </div>
  );
};

export default function AdminPanel() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      i18nProvider={i18nProvider}
      loginPage={Login}
      requireAuth
      dashboard={DashboardPage}
    >
      {(permissions) => {
        const roles = Array.isArray(permissions) ? permissions : [];
        const isAdmin = roles.includes("admin");

        return (
          <>
            <Resource
              name="products"
              list={ProductList}
              create={ProductCreate}
              edit={ProductEdit}
              options={{ label: "Товары" }}
            />
            <Resource
              name="categories"
              list={CategoryList}
              create={CategoryCreate}
              edit={CategoryEdit}
              options={{ label: "Категории" }}
            />
            {isAdmin ? (
              <>
                <Resource name="orders" list={OrderList} options={{ label: "Заказы" }} />
                <Resource
                  name="users"
                  list={UserList}
                  create={UserCreate}
                  edit={UserEdit}
                  options={{ label: "Пользователи" }}
                />
              </>
            ) : null}
          </>
        );
      }}
    </Admin>
  );
}
