"use client";

import type { DataProvider } from "react-admin";
import { authStore } from "./authStore";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";

// ==================== УТИЛИТЫ ====================

const toNumber = (value: unknown): number | undefined => {
  if (value === null || value === undefined || value === "") return undefined;
  const n = Number(value);
  return Number.isNaN(n) ? undefined : n;
};

const appendIfDefined = (form: FormData, key: string, value: unknown) => {
  if (value === null || value === undefined || value === "") return;
  form.append(key, String(value));
};

const extractFiles = (value: unknown): File[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (item instanceof File) return item;
      if (item && typeof item === "object") {
        return (item as { rawFile?: File }).rawFile;
      }
      return undefined;
    })
    .filter((file): file is File => file instanceof File);
};

const extractSingleFile = (value: unknown): File | undefined => {
  if (!value) return undefined;
  if (value instanceof File) return value;
  if (Array.isArray(value) && value.length > 0) {
    const first = value[0];
    if (first instanceof File) return first;
    if (first && typeof first === "object") {
      return (first as { rawFile?: File }).rawFile;
    }
  }
  if (typeof value === "object") {
    return (value as { rawFile?: File }).rawFile;
  }
  return undefined;
};

const normalizeUploadedUrl = (raw: string): string | null => {
  const value = raw.trim();
  if (!value) return null;

  try {
    const parsed = new URL(value);
    if (parsed.hostname === "localhost") {
      parsed.hostname = "127.0.0.1";
    }
    return parsed.toString();
  } catch {
    if (value.startsWith("/")) {
      try {
        return new URL(value, API_URL).toString();
      } catch {
        return null;
      }
    }
    return null;
  }
};

const uploadSingleImage = async (file: File): Promise<string | null> => {
  const form = new FormData();
  form.append("image", file);

  const result = (await http("/upload/single", {
    method: "POST",
    body: form,
  })) as { url?: string };

  if (!result.url) return null;
  return normalizeUploadedUrl(result.url);
};

// ==================== ФОРМАТТЕРЫ URL ====================

const toPublicProductImageUrl = (value: unknown): string | null => {
  if (typeof value !== "string") return null;
  const raw = value.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    if (url.hostname === "localhost") {
      url.hostname = "127.0.0.1";
    }
    return url.toString();
  } catch {
    // continue
  }

  if (raw.startsWith("/uploads/")) {
    const api = new URL(API_URL);
    return `${api.protocol}//127.0.0.1:${api.port}${raw}`;
  }

  return `${API_URL}/uploads/products/${raw}`;
};

const toPublicCategoryImageUrl = (value: unknown): string | null => {
  if (typeof value !== "string") return null;
  const raw = value.trim();
  if (!raw) return null;

  try {
    const url = new URL(raw);
    if (url.hostname === "localhost") {
      url.hostname = "127.0.0.1";
    }
    return url.toString();
  } catch {
    return `${API_URL}/uploads/categories/${raw}`;
  }
};

// ==================== ПОСТРОЕНИЕ FORM DATA ====================

const buildProductFormData = (data: Record<string, unknown>): FormData => {
  const form = new FormData();

  appendIfDefined(form, "title", data.title);
  appendIfDefined(form, "slug", data.slug);
  appendIfDefined(form, "description", data.description);
  appendIfDefined(form, "price", toNumber(data.price));
  appendIfDefined(form, "discontPrice", toNumber(data.discontPrice));
  appendIfDefined(form, "stock", toNumber(data.stock));
  appendIfDefined(form, "categoryId", toNumber(data.categoryId));

  const imageField = data.image as
    | Array<{ rawFile?: File } | string>
    | { rawFile?: File }
    | File
    | string
    | undefined;

  const firstImage = Array.isArray(imageField) ? imageField[0] : imageField;
  const rawFile =
    firstImage instanceof File
      ? firstImage
      : typeof firstImage === "object" && firstImage
        ? (firstImage as { rawFile?: File }).rawFile
        : undefined;

  if (rawFile) {
    form.append("image", rawFile);
  }

  return form;
};

// ==================== ЗАГРУЗКА ИЗОБРАЖЕНИЙ ====================

const resolveCategoryImageUrl = async (
  imageValue: unknown,
): Promise<string | undefined> => {
  const file = extractSingleFile(imageValue);
  if (file) {
    const form = new FormData();
    form.append("image", file);
    const uploaded = (await http("/upload/category", {
      method: "POST",
      body: form,
    })) as { url?: string };
    if (!uploaded.url) return undefined;
    return toPublicCategoryImageUrl(uploaded.url) ?? undefined;
  }

  if (typeof imageValue === "string") {
    return toPublicCategoryImageUrl(imageValue) ?? undefined;
  }

  if (Array.isArray(imageValue) && imageValue.length > 0) {
    const first = imageValue[0];
    if (first && typeof first === "object" && "src" in first) {
      const src = (first as { src?: unknown }).src;
      if (typeof src === "string") {
        return toPublicCategoryImageUrl(src) ?? undefined;
      }
    }
  }

  return undefined;
};

const attachGalleryImages = async (productId: number, files: File[]) => {
  if (files.length === 0) return;

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const imageUrl = await uploadSingleImage(file);
    if (!imageUrl) continue;

    await http("/product-images", {
      method: "POST",
      body: JSON.stringify({
        productId,
        imageUrl,
        sortOrder: index,
        isPrimary: false,
      }),
    });
  }
};

// ==================== НОРМАЛИЗАЦИЯ ДАННЫХ ====================

const normalizeUser = (user: Record<string, unknown>) => {
  const roles = Array.isArray(user.roles)
    ? user.roles.map((r) => String(r))
    : [];
  return {
    ...user,
    roles,
    rolesText: roles.join(", "),
  };
};

const normalizeProduct = (data: Record<string, unknown>) => {
  const imageUrl = toPublicProductImageUrl(data.image);
  const images = Array.isArray(data.images)
    ? data.images.map((item) => {
        const image = item as Record<string, unknown>;
        return {
          ...image,
          imageUrl: toPublicProductImageUrl(image.imageUrl) ?? String(image.imageUrl ?? ""),
        };
      })
    : [];

  return {
    ...data,
    image: imageUrl ? [{ src: imageUrl, title: String(data.title ?? "") }] : [],
    images,
    categoryId:
      (data.categoryId as number | string | undefined) ??
      (data.category as { id?: number | string } | undefined)?.id ??
      undefined,
  };
};

const normalizeCategory = (data: Record<string, unknown>) => {
  const imageUrl = toPublicCategoryImageUrl(data.image);
  return {
    ...data,
    image: imageUrl ? [{ src: imageUrl, title: String(data.title ?? "") }] : [],
  };
};

// ==================== HTTP КЛИЕНТ ====================

const http = async (
  path: string,
  options: RequestInit = {},
): Promise<unknown> => {
  const token = authStore.getToken();
  const headers: Record<string, string> = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  if (!(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers as Record<string, string> | undefined),
    },
  });

  if (!response.ok) {
    let message = "API error";
    try {
      const body = (await response.json()) as {
        message?: string | string[];
        error?: string;
      };
      if (Array.isArray(body.message)) {
        message = body.message.join("; ");
      } else if (typeof body.message === "string") {
        message = body.message;
      } else if (typeof body.error === "string") {
        message = body.error;
      }
    } catch {
      try {
        const text = await response.text();
        if (text) {
          message = text;
        }
      } catch {
        // no-op
      }
    }
    const error = new Error(message) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
};

// ==================== DATA PROVIDER ====================

const rawDataProvider = {
  // ===== GET LIST =====
  getList: async (
    resource: string,
    params: { pagination?: { page?: number; perPage?: number } },
  ) => {
    const page = params.pagination?.page ?? 1;
    const perPage = params.pagination?.perPage ?? 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;

    switch (resource) {
      case "products": {
        const all = (await http("/products/all")) as Record<string, unknown>[];
        return {
          data: all.slice(start, end),
          total: all.length,
        };
      }

      case "categories": {
        const data = (await http("/categories/all")) as Record<
          string,
          unknown
        >[];
        return {
          data,
          total: data.length,
        };
      }

      case "users": {
        const data = (await http("/users")) as Record<string, unknown>[];
        const mapped = data.map(normalizeUser);
        return {
          data: mapped.slice(start, end),
          total: mapped.length,
        };
      }

      case "orders": {
        const data = (await http("/orders")) as Record<string, unknown>[];
        return {
          data: data.slice(start, end),
          total: data.length,
        };
      }

      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
  },

  // ===== GET ONE =====
  getOne: async (resource: string, params: { id: number | string }) => {
    switch (resource) {
      case "products": {
        const data = (await http(`/products/${params.id}`)) as Record<
          string,
          unknown
        >;
        return { data: normalizeProduct(data) };
      }

      case "categories": {
        const data = (await http(`/categories/${params.id}`)) as {
          category?: Record<string, unknown>;
        };
        const category = (data.category ?? data) as Record<string, unknown>;
        return { data: normalizeCategory(category) };
      }

      case "users": {
        const data = (await http(`/users/${params.id}`)) as Record<
          string,
          unknown
        >;
        return { data: normalizeUser(data) };
      }

      case "orders": {
        const data = (await http(`/orders/${params.id}`)) as Record<
          string,
          unknown
        >;
        return { data };
      }

      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
  },

  // ===== GET MANY =====
  getMany: async (
    resource: string,
    params: { ids?: Array<number | string> },
  ) => {
    const ids = new Set((params.ids ?? []).map((id) => Number(id)));

    switch (resource) {
      case "categories": {
        const data = (await http("/categories/all")) as Array<
          Record<string, unknown>
        >;
        return {
          data: data.filter((item) => ids.has(Number(item.id))),
        };
      }

      case "users": {
        const data = (await http("/users")) as Array<Record<string, unknown>>;
        return {
          data: data
            .filter((item) => ids.has(Number(item.id)))
            .map(normalizeUser),
        };
      }

      default:
        return { data: [] };
    }
  },

  getManyReference: async () => ({ data: [], total: 0 }),

  // ===== CREATE =====
  // ===== CREATE =====
  create: async (
    resource: string,
    params: { data: Record<string, unknown> },
  ) => {
    // Для не-product ресурсов
    if (resource !== "products") {
      switch (resource) {
        case "categories": {
          const imageUrl = await resolveCategoryImageUrl(params.data.image);
          const payload: Record<string, unknown> = { ...params.data };
          delete payload.image;
          if (imageUrl) {
            payload.image = imageUrl;
          }

          const data = (await http("/categories", {
            method: "POST",
            body: JSON.stringify(payload),
          })) as Record<string, unknown>;

          return { data };
        }

        case "users": {
          const data = (await http("/users", {
            method: "POST",
            body: JSON.stringify(params.data),
          })) as Record<string, unknown>;

          return { data: normalizeUser(data) };
        }

        default:
          throw new Error(`Unsupported resource: ${resource}`);
      }
    }

    // ✅ products: без ретраев и без Date.now()
    const product = (await http("/products", {
      method: "POST",
      body: buildProductFormData(params.data),
    })) as Record<string, unknown>;

    const galleryFiles = extractFiles(params.data.gallery);
    const productId = Number(product.id);
    await attachGalleryImages(productId, galleryFiles);

    return { data: product };
  },

  // ===== UPDATE =====
  update: async (
    resource: string,
    params: { id: number | string; data: Record<string, unknown> },
  ) => {
    // Для не-product ресурсов
    if (resource !== "products") {
      switch (resource) {
        case "categories": {
          const imageUrl = await resolveCategoryImageUrl(params.data.image);
          const payload: Record<string, unknown> = { ...params.data };
          delete payload.image;
          if (imageUrl) {
            payload.image = imageUrl;
          }

          const data = (await http(`/categories/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
          })) as Record<string, unknown>;

          return { data };
        }

        case "users": {
          const payload = { ...params.data };
          if (!payload.password) {
            delete payload.password;
          }

          const data = (await http(`/users/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(payload),
          })) as Record<string, unknown>;

          return { data: normalizeUser(data) };
        }

        case "orders": {
          const nextStatus = String(params.data.status ?? "");

          if (nextStatus === "processing") {
            const data = (await http(`/orders/${params.id}/confirm`, {
              method: "PATCH",
            })) as Record<string, unknown>;
            return { data };
          }

          if (nextStatus === "shipped") {
            const data = (await http(`/orders/${params.id}/ship`, {
              method: "PATCH",
            })) as Record<string, unknown>;
            return { data };
          }

          if (nextStatus === "delivered") {
            const data = (await http(`/orders/${params.id}/deliver`, {
              method: "PATCH",
            })) as Record<string, unknown>;
            return { data };
          }

          if (nextStatus === "cancelled") {
            const data = (await http(`/orders/${params.id}/cancel`, {
              method: "PATCH",
            })) as Record<string, unknown>;
            return { data };
          }

          throw new Error("Unsupported order status transition");
        }

        default:
          throw new Error(`Unsupported resource: ${resource}`);
      }
    }

    // ✅ products: без проверки slug и без Date.now()
    if (params.data.restore === true) {
      const restored = (await http(`/products/${params.id}/restore`, {
        method: "PATCH",
      })) as Record<string, unknown>;
      return { data: restored };
    }

    const product = (await http(`/products/${params.id}`, {
      method: "PATCH",
      body: buildProductFormData(params.data),
    })) as Record<string, unknown>;

    const galleryFiles = extractFiles(params.data.gallery);
    await attachGalleryImages(Number(params.id), galleryFiles);

    return { data: product };
  },
  // ===== DELETE =====
  delete: async (
    resource: string,
    params: {
      id: number | string;
      previousData?: Record<string, unknown>;
    },
  ) => {
    switch (resource) {
      case "products":
      case "categories":
      case "users": {
        await http(`/${resource}/${params.id}`, { method: "DELETE" });
        return { data: params.previousData ?? { id: params.id } };
      }

      case "product-images": {
        await http(`/product-images/${params.id}`, { method: "DELETE" });
        return { data: params.previousData ?? { id: params.id } };
      }

      default:
        throw new Error(`Unsupported resource: ${resource}`);
    }
  },

  deleteMany: async () => ({ data: [] }),
};

export const dataProvider = rawDataProvider as unknown as DataProvider;
