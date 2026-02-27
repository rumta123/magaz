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
        const roles = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getUser()?.roles ?? [];
        if (!token) {
            throw new Error("Unauthorized");
        }
        if (!hasAdminAccess(roles)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].clearAuth();
            throw new Error("Access denied");
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
const http = async (path, options = {})=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authStore"].getToken();
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {},
            ...options.headers ?? {}
        }
    });
    if (!response.ok) {
        const error = new Error("API error");
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
            const data = await http(`/products?page=${page}&limit=${perPage}`);
            return {
                data: data.products,
                total: data.pagination.total
            };
        }
        if (resource === "categories") {
            const data = await http("/categories/all");
            return {
                data,
                total: data.length
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    getOne: async (resource, params)=>{
        if (resource === "products") {
            const data = await http(`/products/${params.id}`);
            return {
                data
            };
        }
        if (resource === "categories") {
            const data = await http(`/categories/${params.id}`);
            return {
                data: data.category ?? data
            };
        }
        throw new Error(`Unsupported resource: ${resource}`);
    },
    getMany: async ()=>({
            data: []
        }),
    getManyReference: async ()=>({
            data: [],
            total: 0
        }),
    update: async ()=>{
        throw new Error("Update not implemented");
    },
    updateMany: async ()=>({
            data: []
        }),
    create: async ()=>{
        throw new Error("Create not implemented");
    },
    delete: async ()=>{
        throw new Error("Delete not implemented");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/dist/Admin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/Datagrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/NumberField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/Resource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/authProvider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$dataProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/dataProvider.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const ProductList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "price"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "stock"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ProductList;
const CategoryList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "image"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CategoryList;
function AdminPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Admin"], {
        dataProvider: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$dataProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataProvider"],
        authProvider: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authProvider"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                name: "products",
                list: ProductList
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                name: "categories",
                list: CategoryList
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c2 = AdminPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ProductList");
__turbopack_context__.k.register(_c1, "CategoryList");
__turbopack_context__.k.register(_c2, "AdminPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=admin_react_736eafa7._.js.map