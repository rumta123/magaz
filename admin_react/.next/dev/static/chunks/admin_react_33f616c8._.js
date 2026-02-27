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
"[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/dist/Admin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$BooleanField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/BooleanField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$BooleanInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/BooleanInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/Datagrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/EditButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/ImageField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ImageInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/NumberInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ReferenceInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/validate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/SelectInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/form/SimpleForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/List.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/NumberField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/Resource.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/TextInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/lib/authProvider.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/dataProvider'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "category.title",
                    label: "Category"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "price"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 34,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "stock"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 35,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$BooleanField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BooleanField"], {
                    source: "isActive",
                    label: "Active"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 36,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditButton"], {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 38,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 39,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ProductList;
const ProductCreate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Create"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 47,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 48,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "price",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 49,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "discontPrice"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 50,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "description",
                    multiline: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 51,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "stock"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$BooleanInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BooleanInput"], {
                    source: "isActive",
                    defaultValue: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 53,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceInput"], {
                    source: "categoryId",
                    reference: "categories",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectInput"], {
                        optionText: "title",
                        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 54,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 57,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 46,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = ProductCreate;
const ProductEdit = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "id",
                    disabled: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 67,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 68,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 69,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "price"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "discontPrice"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 71,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "description",
                    multiline: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 72,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$NumberInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                    source: "stock"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 73,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$BooleanInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BooleanInput"], {
                    source: "isActive"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 74,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ReferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceInput"], {
                    source: "categoryId",
                    reference: "categories",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$SelectInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectInput"], {
                        optionText: "title",
                        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 75,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ImageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageInput"], {
                    source: "image",
                    accept: {
                        "image/*": []
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$ImageField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageField"], {
                        source: "src",
                        title: "title"
                    }, void 0, false, {
                        fileName: "[project]/admin_react/components/AdminPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 78,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 66,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = ProductEdit;
const CategoryList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$List$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$Datagrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Datagrid"], {
            rowClick: false,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$NumberField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberField"], {
                    source: "id"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "title"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 89,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 90,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$field$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextField"], {
                    source: "image"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 91,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$EditButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditButton"], {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 92,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {}, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 93,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 87,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = CategoryList;
const CategoryCreate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Create"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 101,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 102,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "image"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 103,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 100,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CategoryCreate;
const CategoryEdit = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$SimpleForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleForm"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "id",
                    disabled: true
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 111,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "title",
                    validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 112,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "slug"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 113,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                    source: "image"
                }, void 0, false, {
                    fileName: "[project]/admin_react/components/AdminPanel.tsx",
                    lineNumber: 114,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/admin_react/components/AdminPanel.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 109,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = CategoryEdit;
function AdminPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$dist$2f$Admin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Admin"], {
        dataProvider: dataProvider,
        authProvider: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$lib$2f$authProvider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authProvider"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                name: "products",
                list: ProductList,
                create: ProductCreate,
                edit: ProductEdit
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Resource"], {
                name: "categories",
                list: CategoryList,
                create: CategoryCreate,
                edit: CategoryEdit
            }, void 0, false, {
                fileName: "[project]/admin_react/components/AdminPanel.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin_react/components/AdminPanel.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c6 = AdminPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "ProductList");
__turbopack_context__.k.register(_c1, "ProductCreate");
__turbopack_context__.k.register(_c2, "ProductEdit");
__turbopack_context__.k.register(_c3, "CategoryList");
__turbopack_context__.k.register(_c4, "CategoryCreate");
__turbopack_context__.k.register(_c5, "CategoryEdit");
__turbopack_context__.k.register(_c6, "AdminPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/admin_react/components/AdminPanel.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=admin_react_33f616c8._.js.map