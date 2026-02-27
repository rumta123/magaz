(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/admin_react/lib/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authStore",
    ()=>authStore,
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
"use client";
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        token: null,
        user: null,
        setAuth: (token, user)=>set({
                token,
                user
            }),
        clearAuth: ()=>set({
                token: null,
                user: null
            })
    }), {
    name: "admin-auth"
}));
const authStore = {
    getToken: ()=>useAuthStore.getState().token,
    getUser: ()=>useAuthStore.getState().user,
    setAuth: (token, user)=>useAuthStore.getState().setAuth(token, user),
    clearAuth: ()=>useAuthStore.getState().clearAuth()
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_react/lib/authProvider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authProvider",
    ()=>authProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/authStore.ts [app-client] (ecmascript)");
"use client";
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";
const ALLOWED_ROLES = new Set([
    "admin",
    "manager"
]);
const parseJwt = (token)=>{
    try {
        const payload = token.split(".")[1];
        if (!payload) return null;
        const decoded = JSON.parse(atob(payload));
        return {
            userId: decoded.sub,
            email: decoded.email,
            roles: decoded.roles
        };
    } catch  {
        return null;
    }
};
const fetchProfile = async (token)=>{
    try {
        const response = await fetch(`${API_URL}/auth/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch  {
        return null;
    }
};
const hasAdminAccess = (roles)=>{
    if (!roles || roles.length === 0) return false;
    return roles.some((role)=>ALLOWED_ROLES.has(role.toLowerCase()));
};
const authProvider = {
    login: async ({ username, password })=>{
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: username,
                password
            })
        });
        if (!response.ok) {
            throw new Error("Invalid email or password");
        }
        const data = await response.json();
        const profile = await fetchProfile(data.access_token);
        const fallback = parseJwt(data.access_token);
        const roles = profile?.roles ?? fallback?.roles ?? [];
        if (!hasAdminAccess(roles)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
            throw new Error("Access denied: admin or manager role required");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].setAuth(data.access_token, {
            id: profile?.userId ?? fallback?.userId ?? 0,
            email: profile?.email ?? fallback?.email ?? "",
            name: profile?.name,
            roles
        });
    },
    logout: async ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
    },
    checkAuth: async ()=>{
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getToken();
        if (!token) {
            throw new Error("Unauthorized");
        }
        const profile = await fetchProfile(token);
        if (!profile) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
            throw new Error("Session expired");
        }
        const roles = profile.roles ?? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getUser()?.roles ?? [];
        if (!hasAdminAccess(roles)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
            throw new Error("Access denied");
        }
        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getUser();
        if (!currentUser || currentUser.id !== profile.userId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].setAuth(token, {
                id: profile.userId,
                email: profile.email,
                name: profile.name,
                roles
            });
        }
    },
    checkError: async (error)=>{
        const status = error?.status ?? error?.response?.status;
        if (status === 401 || status === 403) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
            throw new Error("Session expired");
        }
    },
    getIdentity: async ()=>{
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getUser();
        if (!user) {
            throw new Error("User not found");
        }
        return {
            id: user.id,
            fullName: user.name ?? user.email,
            avatar: undefined
        };
    },
    getPermissions: async ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getUser()?.roles ?? [];
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_react/lib/dataProvider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dataProvider",
    ()=>dataProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/authStore.ts [app-client] (ecmascript)");
"use client";
;
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL ?? "http://localhost:3333";
const toNumber = (value)=>{
    if (value === null || value === undefined || value === "") return undefined;
    const n = Number(value);
    return Number.isNaN(n) ? undefined : n;
};
const appendIfDefined = (form, key, value)=>{
    if (value === null || value === undefined || value === "") return;
    form.append(key, String(value));
};
const buildProductFormData = (data)=>{
    const form = new FormData();
    appendIfDefined(form, "title", data.title);
    appendIfDefined(form, "slug", data.slug);
    appendIfDefined(form, "description", data.description);
    appendIfDefined(form, "price", toNumber(data.price));
    appendIfDefined(form, "discontPrice", toNumber(data.discontPrice));
    appendIfDefined(form, "stock", toNumber(data.stock));
    appendIfDefined(form, "categoryId", toNumber(data.categoryId));
    const imageField = data.image;
    const firstImage = Array.isArray(imageField) ? imageField[0] : imageField;
    const rawFile = firstImage instanceof File ? firstImage : typeof firstImage === "object" && firstImage ? firstImage.rawFile : undefined;
    if (rawFile) {
        form.append("image", rawFile);
    }
    return form;
};
const normalizeUser = (user)=>{
    const roles = Array.isArray(user.roles) ? user.roles.map((r)=>String(r)) : [];
    return {
        ...user,
        roles,
        rolesText: roles.join(", ")
    };
};
const extractFiles = (value)=>{
    if (!Array.isArray(value)) return [];
    return value.map((item)=>{
        if (item instanceof File) return item;
        if (item && typeof item === "object") {
            return item.rawFile;
        }
        return undefined;
    }).filter((file)=>file instanceof File);
};
const toPublicProductImageUrl = (value)=>{
    if (typeof value !== "string") return null;
    const raw = value.trim();
    if (!raw) return null;
    try {
        const url = new URL(raw);
        if (url.hostname === "localhost") {
            url.hostname = "127.0.0.1";
        }
        return url.toString();
    } catch  {
    // continue
    }
    if (raw.startsWith("/uploads/")) {
        const api = new URL(API_URL);
        return `${api.protocol}//127.0.0.1:${api.port}${raw}`;
    }
    return `${API_URL}/uploads/products/${raw}`;
};
const toPublicCategoryImageUrl = (value)=>{
    if (typeof value !== "string") return null;
    const raw = value.trim();
    if (!raw) return null;
    try {
        const url = new URL(raw);
        if (url.hostname === "localhost") {
            url.hostname = "127.0.0.1";
        }
        return url.toString();
    } catch  {
        return `${API_URL}/uploads/categories/${raw}`;
    }
};
const extractSingleFile = (value)=>{
    if (!value) return undefined;
    if (value instanceof File) return value;
    if (Array.isArray(value) && value.length > 0) {
        const first = value[0];
        if (first instanceof File) return first;
        if (first && typeof first === "object") {
            return first.rawFile;
        }
        return undefined;
    }
    if (typeof value === "object") {
        return value.rawFile;
    }
    return undefined;
};
const resolveCategoryImageUrl = async (imageValue)=>{
    const file = extractSingleFile(imageValue);
    if (file) {
        const form = new FormData();
        form.append("image", file);
        const uploaded = await http("/upload/category", {
            method: "POST",
            body: form
        });
        if (!uploaded.url) return undefined;
        return toPublicCategoryImageUrl(uploaded.url) ?? undefined;
    }
    if (typeof imageValue === "string") {
        return toPublicCategoryImageUrl(imageValue) ?? undefined;
    }
    if (Array.isArray(imageValue) && imageValue.length > 0) {
        const first = imageValue[0];
        if (first && typeof first === "object" && "src" in first) {
            const src = first.src;
            if (typeof src === "string") {
                return toPublicCategoryImageUrl(src) ?? undefined;
            }
        }
    }
    return undefined;
};
const uploadSingleImage = async (file)=>{
    const form = new FormData();
    form.append("image", file);
    const result = await http("/upload/single", {
        method: "POST",
        body: form
    });
    if (!result.url) return null;
    return normalizeUploadedUrl(result.url);
};
const attachGalleryImages = async (productId, files)=>{
    if (files.length === 0) return;
    for(let index = 0; index < files.length; index += 1){
        const file = files[index];
        const imageUrl = await uploadSingleImage(file);
        if (!imageUrl) continue;
        await http("/product-images", {
            method: "POST",
            body: JSON.stringify({
                productId,
                imageUrl,
                sortOrder: index,
                isPrimary: false
            })
        });
    }
};
const normalizeUploadedUrl = (raw)=>{
    const value = raw.trim();
    if (!value) return null;
    const toValidatorFriendlyUrl = (urlValue)=>{
        try {
            const parsed = new URL(urlValue);
            if (parsed.hostname === "localhost") {
                parsed.hostname = "127.0.0.1";
            }
            return parsed.toString();
        } catch  {
            return null;
        }
    };
    try {
        return toValidatorFriendlyUrl(value);
    } catch  {
    // continue with normalization
    }
    if (value.startsWith("//")) {
        return toValidatorFriendlyUrl(`http:${value}`);
    }
    if (value.startsWith("/")) {
        return toValidatorFriendlyUrl(new URL(value, API_URL).toString());
    }
    if (value.startsWith(":")) {
        try {
            const api = new URL(API_URL);
            return toValidatorFriendlyUrl(new URL(`${api.protocol}//${api.hostname}${value}`).toString());
        } catch  {
            return null;
        }
    }
    if (value.startsWith("localhost:") || value.startsWith("127.0.0.1:")) {
        return toValidatorFriendlyUrl(`http://${value}`);
    }
    return null;
};
const http = async (path, options = {})=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getToken();
    const headers = {
        ...token ? {
            Authorization: `Bearer ${token}`
        } : {}
    };
    if (!(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            ...headers,
            ...options.headers
        }
    });
    if (!response.ok) {
        let message = "API error";
        try {
            const body = await response.json();
            if (Array.isArray(body.message)) {
                message = body.message.join("; ");
            } else if (typeof body.message === "string") {
                message = body.message;
            } else if (typeof body.error === "string") {
                message = body.error;
            }
        } catch  {
            try {
                const text = await response.text();
                if (text) {
                    message = text;
                }
            } catch  {
            // no-op
            }
        }
        const error = new Error(message);
        error.status = response.status;
        throw error;
    }
    if (response.status === 204) return null;
    return response.json();
};
const rawDataProvider = {
    getList: async (resource, params)=>{
        if (resource === "products") {
            const page = params.pagination?.page ?? 1;
            const perPage = params.pagination?.perPage ?? 10;
            const all = await http("/products/all");
            const start = (page - 1) * perPage;
            const end = start + perPage;
            return {
                data: all.slice(start, end),
                total: all.length
            };
        }
        if (resource === "categories") {
            const data = await http("/categories/all");
            return {
                data,
                total: data.length
            };
        }
        if (resource === "users") {
            const data = await http("/users");
            const mapped = data.map(normalizeUser);
            const page = params.pagination?.page ?? 1;
            const perPage = params.pagination?.perPage ?? 10;
            const start = (page - 1) * perPage;
            const end = start + perPage;
            return {
                data: mapped.slice(start, end),
                total: mapped.length
            };
        }
        if (resource === "orders") {
            const data = await http("/orders");
            const page = params.pagination?.page ?? 1;
            const perPage = params.pagination?.perPage ?? 10;
            const start = (page - 1) * perPage;
            const end = start + perPage;
            return {
                data: data.slice(start, end),
                total: data.length
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    getOne: async (resource, params)=>{
        if (resource === "products") {
            const data = await http(`/products/${params.id}`);
            const imageUrl = toPublicProductImageUrl(data.image);
            return {
                data: {
                    ...data,
                    image: imageUrl ? [
                        {
                            src: imageUrl,
                            title: String(data.title ?? "")
                        }
                    ] : [],
                    categoryId: data.categoryId ?? data.category?.id ?? undefined
                }
            };
        }
        if (resource === "categories") {
            const data = await http(`/categories/${params.id}`);
            const category = data.category ?? data;
            const imageUrl = toPublicCategoryImageUrl(category.image);
            return {
                data: {
                    ...category,
                    image: imageUrl ? [
                        {
                            src: imageUrl,
                            title: String(category.title ?? "")
                        }
                    ] : []
                }
            };
        }
        if (resource === "users") {
            const data = await http(`/users/${params.id}`);
            return {
                data: normalizeUser(data)
            };
        }
        if (resource === "orders") {
            const data = await http(`/orders/${params.id}`);
            return {
                data
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    getMany: async (resource, params)=>{
        if (resource === "categories") {
            const data = await http("/categories/all");
            const ids = new Set((params.ids ?? []).map((id)=>Number(id)));
            return {
                data: data.filter((item)=>ids.has(Number(item.id)))
            };
        }
        if (resource === "users") {
            const data = await http("/users");
            const ids = new Set((params.ids ?? []).map((id)=>Number(id)));
            return {
                data: data.filter((item)=>ids.has(Number(item.id))).map(normalizeUser)
            };
        }
        return {
            data: []
        };
    },
    getManyReference: async ()=>({
            data: [],
            total: 0
        }),
    create: async (resource, params)=>{
        if (resource === "products") {
            const product = await http("/products", {
                method: "POST",
                body: buildProductFormData(params.data)
            });
            const galleryFiles = extractFiles(params.data.gallery);
            const productId = Number(product.id);
            await attachGalleryImages(productId, galleryFiles);
            return {
                data: product
            };
        }
        if (resource === "categories") {
            const imageUrl = await resolveCategoryImageUrl(params.data.image);
            const payload = {
                ...params.data
            };
            delete payload.image;
            if (imageUrl) {
                payload.image = imageUrl;
            }
            const data = await http("/categories", {
                method: "POST",
                body: JSON.stringify(payload)
            });
            return {
                data
            };
        }
        if (resource === "users") {
            const data = await http("/users", {
                method: "POST",
                body: JSON.stringify(params.data)
            });
            return {
                data: normalizeUser(data)
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    update: async (resource, params)=>{
        if (resource === "products") {
            const product = await http(`/products/${params.id}`, {
                method: "PATCH",
                body: buildProductFormData(params.data)
            });
            const galleryFiles = extractFiles(params.data.gallery);
            const productId = Number(params.id);
            await attachGalleryImages(productId, galleryFiles);
            return {
                data: product
            };
        }
        if (resource === "categories") {
            const imageUrl = await resolveCategoryImageUrl(params.data.image);
            const payload = {
                ...params.data
            };
            delete payload.image;
            if (imageUrl) {
                payload.image = imageUrl;
            }
            const data = await http(`/categories/${params.id}`, {
                method: "PATCH",
                body: JSON.stringify(payload)
            });
            return {
                data
            };
        }
        if (resource === "users") {
            const payload = {
                ...params.data
            };
            if (!payload.password) {
                delete payload.password;
            }
            const data = await http(`/users/${params.id}`, {
                method: "PATCH",
                body: JSON.stringify(payload)
            });
            return {
                data: normalizeUser(data)
            };
        }
        if (resource === "orders") {
            const nextStatus = String(params.data.status ?? "");
            if (nextStatus === "processing") {
                const data = await http(`/orders/${params.id}/confirm`, {
                    method: "PATCH"
                });
                return {
                    data
                };
            }
            if (nextStatus === "cancelled") {
                const data = await http(`/orders/${params.id}/cancel`, {
                    method: "PATCH"
                });
                return {
                    data
                };
            }
            throw new Error("Unsupported order status transition");
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    updateMany: async ()=>({
            data: []
        }),
    delete: async (resource, params)=>{
        if (resource === "products") {
            await http(`/products/${params.id}`, {
                method: "DELETE"
            });
            return {
                data: params.previousData ?? {
                    id: params.id
                }
            };
        }
        if (resource === "categories") {
            await http(`/categories/${params.id}`, {
                method: "DELETE"
            });
            return {
                data: params.previousData ?? {
                    id: params.id
                }
            };
        }
        if (resource === "users") {
            await http(`/users/${params.id}`, {
                method: "DELETE"
            });
            return {
                data: params.previousData ?? {
                    id: params.id
                }
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    deleteMany: async ()=>({
            data: []
        })
};
const dataProvider = rawDataProvider;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/dist/Admin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ArrayField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/ArrayField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$BooleanField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/BooleanField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/Datagrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$DateField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/DateField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/EditButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/FunctionField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/ImageField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ImageInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/Login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/NumberField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/NumberInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ReferenceInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/Resource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectArrayInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/SelectArrayInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/SelectInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/form/SimpleForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$SingleFieldList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/SingleFieldList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/TextInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/validate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useGetIdentity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useGetIdentity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useRefresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useUpdate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/authProvider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$dataProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/dataProvider.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/i18nProvider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TRANSLIT_MAP = {
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
    я: "ya"
};
const ORDER_STATUS_LABELS = {
    pending: "Ожидает",
    processing: "В обработке",
    delivered: "Доставлен",
    cancelled: "Отменен"
};
const PAYMENT_METHOD_LABELS = {
    card: "Карта",
    cash: "Наличные",
    sbp: "СБП"
};
const toLatinSlug = (value)=>{
    const translit = value.toLowerCase().split("").map((ch)=>TRANSLIT_MAP[ch] ?? ch).join("");
    return translit.replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
};
const AutoSlugSync = ()=>{
    _s();
    const { setValue, getValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        name: "title"
    });
    const prevAutoSlugRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutoSlugSync.useEffect": ()=>{
            const currentTitle = (title ?? "").trim();
            if (!currentTitle) return;
            const autoSlug = toLatinSlug(currentTitle);
            const currentSlug = String(getValues("slug") ?? "");
            if (!currentSlug || currentSlug === prevAutoSlugRef.current) {
                setValue("slug", autoSlug, {
                    shouldDirty: true,
                    shouldValidate: true
                });
            }
            prevAutoSlugRef.current = autoSlug;
        }
    }["AutoSlugSync.useEffect"], [
        title,
        getValues,
        setValue
    ]);
    return null;
};
_s(AutoSlugSync, "U5r7cO4OPr7fLmy1t96LUpJARjA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = AutoSlugSync;
const ProductList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id",
                    label: "ID"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title",
                    label: "Название"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 133,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "category.title",
                    label: "Категория"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "price",
                    label: "Цена"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 135,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "stock",
                    label: "Остаток"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 136,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$BooleanField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BooleanField"], {
                    source: "isActive",
                    label: "Активен"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 137,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 138,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditButton"], {
                    label: "Редактировать"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 139,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {
                    label: "Удалить"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 140,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 131,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ProductList;
const ProductCreate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Create"], {
        title: "Создать товар",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    label: "Название",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 148,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoSlugSync, {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 149,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 150,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "price",
                    label: "Цена",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 151,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "discontPrice",
                    label: "Цена со скидкой"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 152,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "description",
                    label: "Описание",
                    multiline: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 153,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "stock",
                    label: "Остаток"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 154,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceInput"], {
                    source: "categoryId",
                    reference: "categories",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectInput"], {
                        label: "Категория",
                        optionText: "title",
                        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 155,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Главное изображение",
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 158,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Галерея",
                    source: "gallery",
                    multiple: true,
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 161,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 147,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 146,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ProductCreate;
const ProductEdit = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
        title: "Редактировать товар",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "id",
                    label: "ID",
                    disabled: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 171,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    label: "Название",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 172,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoSlugSync, {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 173,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 174,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "price",
                    label: "Цена"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 175,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "discontPrice",
                    label: "Цена со скидкой"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 176,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "description",
                    label: "Описание",
                    multiline: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 177,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "stock",
                    label: "Остаток"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 178,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceInput"], {
                    source: "categoryId",
                    reference: "categories",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectInput"], {
                        label: "Категория",
                        optionText: "title",
                        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 179,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Главное изображение",
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 182,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ArrayField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrayField"], {
                    source: "images",
                    label: "Текущая галерея",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$SingleFieldList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SingleFieldList"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                            source: "imageUrl",
                            title: "altText"
                        }, void 0, false, {
                            fileName: "[project]/admin_react/components/AdminPanel.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 185,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Добавить в галерею",
                    source: "gallery",
                    multiple: true,
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 190,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 170,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 169,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = ProductEdit;
const CategoryList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id",
                    label: "ID"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 200,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title",
                    label: "Название"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 201,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 202,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "image",
                    label: "Изображение"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 203,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditButton"], {
                    label: "Редактировать"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 204,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {
                    label: "Удалить"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 205,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 199,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 198,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CategoryList;
const CategoryCreate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Create"], {
        title: "Создать категорию",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    label: "Название",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 213,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoSlugSync, {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 215,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Изображение",
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 216,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 212,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 211,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = CategoryCreate;
const CategoryEdit = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
        title: "Редактировать категорию",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "id",
                    label: "ID",
                    disabled: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 226,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    label: "Название",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 227,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AutoSlugSync, {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 228,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug",
                    label: "Слаг"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 229,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    label: "Изображение",
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 230,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 225,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 224,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = CategoryEdit;
const roleChoices = [
    {
        id: "user",
        name: "Пользователь"
    },
    {
        id: "manager",
        name: "Менеджер"
    },
    {
        id: "admin",
        name: "Администратор"
    }
];
const UserList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id",
                    label: "ID"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 246,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "email",
                    label: "Email"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 247,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "name",
                    label: "Имя"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 248,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "phone",
                    label: "Телефон"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 249,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$BooleanField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BooleanField"], {
                    source: "isActive",
                    label: "Активен"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 250,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "rolesText",
                    label: "Роли"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 251,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditButton"], {
                    label: "Редактировать"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 252,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {
                    label: "Удалить"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 253,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 245,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 244,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = UserList;
const UserCreate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Create"], {
        title: "Создать пользователя",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "email",
                    label: "Email",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 261,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "name",
                    label: "Имя",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 262,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "phone",
                    label: "Телефон"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 263,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "password",
                    label: "Пароль",
                    type: "password",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 264,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectArrayInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectArrayInput"], {
                    source: "roles",
                    label: "Роли",
                    choices: roleChoices,
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])(),
                    defaultValue: [
                        "user"
                    ]
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 265,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 260,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 259,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = UserCreate;
const UserEdit = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
        title: "Редактировать пользователя",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "id",
                    label: "ID",
                    disabled: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 279,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "email",
                    label: "Email",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 280,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "name",
                    label: "Имя",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 281,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "phone",
                    label: "Телефон"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 282,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "password",
                    type: "password",
                    label: "Новый пароль"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 283,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectArrayInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectArrayInput"], {
                    source: "roles",
                    label: "Роли",
                    choices: roleChoices,
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 284,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 278,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 277,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = UserEdit;
const OrderStatusActions = ()=>{
    _s1();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])();
    const [update, { isPending }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdate"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotify"])();
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    if (!record) return null;
    const status = String(record.status ?? "");
    const id = record.id;
    const updateStatus = (nextStatus)=>{
        update("orders", {
            id,
            data: {
                status: nextStatus
            },
            previousData: record
        }, {
            onSuccess: ()=>{
                notify(`Статус заказа обновлен: ${ORDER_STATUS_LABELS[nextStatus] ?? nextStatus}`, {
                    type: "success"
                });
                refresh();
            },
            onError: (error)=>{
                notify(error?.message || "Не удалось обновить заказ", {
                    type: "error"
                });
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            gap: 8
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                label: "Подтвердить",
                onClick: ()=>updateStatus("processing"),
                disabled: isPending || status === "cancelled" || status === "delivered"
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                label: "Отменить",
                onClick: ()=>updateStatus("cancelled"),
                disabled: isPending || status === "cancelled"
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 323,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(OrderStatusActions, "zJ/MfWkNsiW97pJKaWloY3EP7iE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useUpdate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotify"],
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"]
    ];
});
_c10 = OrderStatusActions;
const OrderList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id",
                    label: "ID"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 341,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "orderNumber",
                    label: "Заказ №"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 342,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionField"], {
                    label: "Покупатель",
                    render: (record)=>{
                        const user = record.user ?? {};
                        const name = String(user.name ?? "-");
                        const email = String(user.email ?? "-");
                        const phone = String(user.phone ?? "-");
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                lineHeight: 1.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                        lineNumber: 353,
                                        columnNumber: 17
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: phone
                                }, void 0, false, {
                                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                    lineNumber: 356,
                                    columnNumber: 15
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin_react/components/AdminPanel.tsx",
                            lineNumber: 351,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 343,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionField"], {
                    label: "Адрес",
                    render: (record)=>{
                        const address = record.address ?? {};
                        if (!address.id) return "-";
                        const city = String(address.city ?? "");
                        const street = String(address.street ?? "");
                        const building = String(address.building ?? "");
                        const apartment = String(address.apartment ?? "");
                        const postalCode = String(address.postalCode ?? "");
                        return [
                            city,
                            street,
                            building,
                            apartment,
                            postalCode
                        ].filter((part)=>part && part !== "null" && part !== "undefined").join(", ");
                    }
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 361,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionField"], {
                    label: "Позиции",
                    render: (record)=>{
                        const items = Array.isArray(record.orderItems) ? record.orderItems : [];
                        if (items.length === 0) return "-";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                lineHeight: 1.3
                            },
                            children: items.map((item)=>{
                                const name = String(item.productName ?? "Товар");
                                const qty = Number(item.quantity ?? 0);
                                const price = Number(item.price ?? 0);
                                const total = Number(item.total ?? 0);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        name,
                                        " x",
                                        qty,
                                        " @ ",
                                        price,
                                        " = ",
                                        total
                                    ]
                                }, String(item.id ?? `${name}-${qty}-${total}`), true, {
                                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                    lineNumber: 391,
                                    columnNumber: 19
                                }, void 0);
                            })
                        }, void 0, false, {
                            fileName: "[project]/admin_react/components/AdminPanel.tsx",
                            lineNumber: 384,
                            columnNumber: 13
                        }, void 0);
                    }
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 376,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "totalAmount",
                    label: "Сумма"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 400,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionField"], {
                    label: "Оплата",
                    render: (record)=>{
                        const payment = String(record.paymentMethod ?? "");
                        return PAYMENT_METHOD_LABELS[payment] ?? payment;
                    }
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 401,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$FunctionField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionField"], {
                    label: "Статус",
                    render: (record)=>{
                        const status = String(record.status ?? "");
                        return ORDER_STATUS_LABELS[status] ?? status;
                    }
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 408,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$DateField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateField"], {
                    source: "createdAt",
                    label: "Создан",
                    showTime: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 415,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderStatusActions, {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 416,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 340,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 339,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = OrderList;
const DashboardPage = ()=>{
    _s2();
    const { data: identity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useGetIdentity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetIdentity"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                title: "Панель управления"
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: 24,
                    fontWeight: 700,
                    marginBottom: 8
                },
                children: "Панель управления"
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    margin: 0
                },
                children: [
                    "Вы вошли как ",
                    identity?.fullName ?? "пользователь",
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 427,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 424,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(DashboardPage, "ftpUJnwaDzwzMbDou+hmwBoQiEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useGetIdentity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetIdentity"]
    ];
});
_c12 = DashboardPage;
function AdminPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Admin"], {
        dataProvider: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$dataProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataProvider"],
        authProvider: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authProvider"],
        i18nProvider: i18nProvider,
        loginPage: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Login"],
        requireAuth: true,
        dashboard: DashboardPage,
        children: (permissions)=>{
            const roles = Array.isArray(permissions) ? permissions : [];
            const isAdmin = roles.includes("admin");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                        name: "products",
                        list: ProductList,
                        create: ProductCreate,
                        edit: ProductEdit,
                        options: {
                            label: "Товары"
                        }
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                        name: "categories",
                        list: CategoryList,
                        create: CategoryCreate,
                        edit: CategoryEdit,
                        options: {
                            label: "Категории"
                        }
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 455,
                        columnNumber: 13
                    }, this),
                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                                name: "orders",
                                list: OrderList,
                                options: {
                                    label: "Заказы"
                                }
                            }, void 0, false, {
                                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                lineNumber: 464,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                                name: "users",
                                list: UserList,
                                create: UserCreate,
                                edit: UserEdit,
                                options: {
                                    label: "Пользователи"
                                }
                            }, void 0, false, {
                                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                                lineNumber: 465,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : null
                ]
            }, void 0, true);
        }
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_c13 = AdminPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "AutoSlugSync");
__turbopack_context__.k.register(_c1, "ProductList");
__turbopack_context__.k.register(_c2, "ProductCreate");
__turbopack_context__.k.register(_c3, "ProductEdit");
__turbopack_context__.k.register(_c4, "CategoryList");
__turbopack_context__.k.register(_c5, "CategoryCreate");
__turbopack_context__.k.register(_c6, "CategoryEdit");
__turbopack_context__.k.register(_c7, "UserList");
__turbopack_context__.k.register(_c8, "UserCreate");
__turbopack_context__.k.register(_c9, "UserEdit");
__turbopack_context__.k.register(_c10, "OrderStatusActions");
__turbopack_context__.k.register(_c11, "OrderList");
__turbopack_context__.k.register(_c12, "DashboardPage");
__turbopack_context__.k.register(_c13, "AdminPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=admin_react_a1d887d4._.js.map