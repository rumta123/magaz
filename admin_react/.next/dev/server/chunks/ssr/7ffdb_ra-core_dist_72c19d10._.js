module.exports = [
"[project]/admin_react/node_modules/ra-core/dist/store/localStorageStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStorage",
    ()=>getStorage,
    "localStorageStore",
    ()=>localStorageStore
]);
const RA_STORE = 'RaStore';
// localStorage isn't available in incognito mode. We need to detect it
const testLocalStorage = ()=>{
    // eslint-disable-next-line eqeqeq
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    //TURBOPACK unreachable
    ;
};
const localStorageAvailable = testLocalStorage();
const localStorageStore = (version = '1', appKey = '')=>{
    const prefix = `${RA_STORE}${appKey}`;
    const prefixLength = prefix.length;
    const subscriptions = {};
    const publish = (key, value)=>{
        Object.keys(subscriptions).forEach((id)=>{
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                subscriptions[id].callback(value);
            }
        });
    };
    // Whenever the local storage changes in another document, look for matching subscribers.
    // This allows to synchronize state across tabs
    const onLocalStorageChange = (event)=>{
        if (event.key?.substring(0, prefixLength) !== prefix) {
            return;
        }
        const key = event.key.substring(prefixLength + 1);
        const value = event.newValue ? tryParse(event.newValue) : undefined;
        Object.keys(subscriptions).forEach((id)=>{
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                if (value === null) {
                    // an event with a null value is sent when the key is deleted.
                    // to enable default value, we need to call setValue(undefined) instead of setValue(null)
                    subscriptions[id].callback(undefined);
                } else {
                    subscriptions[id].callback(value == null ? undefined : value);
                }
            }
        });
    };
    return {
        setup: ()=>{
            if (localStorageAvailable) {
                const storedVersion = getStorage().getItem(`${prefix}.version`);
                if (storedVersion && storedVersion !== version) {
                    const storage = getStorage();
                    Object.keys(storage).forEach((key)=>{
                        if (key.startsWith(prefix)) {
                            storage.removeItem(key);
                        }
                    });
                }
                getStorage().setItem(`${prefix}.version`, version);
                window.addEventListener('storage', onLocalStorageChange);
            }
        },
        teardown: ()=>{
            if (localStorageAvailable) {
                window.removeEventListener('storage', onLocalStorageChange);
            }
        },
        getItem (key, defaultValue) {
            const valueFromStorage = getStorage().getItem(`${prefix}.${key}`);
            return valueFromStorage == null ? defaultValue : tryParse(valueFromStorage);
        },
        setItem (key, value) {
            if (value === undefined) {
                getStorage().removeItem(`${prefix}.${key}`);
            } else {
                getStorage().setItem(`${prefix}.${key}`, JSON.stringify(value));
            }
            publish(key, value);
        },
        removeItem (key) {
            getStorage().removeItem(`${prefix}.${key}`);
            publish(key, undefined);
        },
        removeItems (keyPrefix) {
            const storage = getStorage();
            Object.keys(storage).forEach((key)=>{
                if (key.startsWith(`${prefix}.${keyPrefix}`)) {
                    storage.removeItem(key);
                    const publishKey = key.substring(prefixLength + 1);
                    publish(publishKey, undefined);
                }
            });
        },
        reset () {
            const storage = getStorage();
            Object.keys(storage).forEach((key)=>{
                if (key.startsWith(prefix)) {
                    storage.removeItem(key);
                    const publishKey = key.substring(prefixLength + 1);
                    publish(publishKey, undefined);
                }
            });
        },
        subscribe: (key, callback)=>{
            const id = Math.random().toString();
            subscriptions[id] = {
                key,
                callback
            };
            return ()=>{
                delete subscriptions[id];
            };
        },
        listItems: (keyPrefix)=>{
            const storage = getStorage();
            const fullPrefix = `${prefix}.${keyPrefix != null ? keyPrefix : ''}`;
            return Object.entries(storage).reduce((acc, [key, value])=>{
                if (// version is considered internal
                key !== `${prefix}.version` && key.startsWith(fullPrefix)) {
                    acc[key.substring(prefix.length + 1)] = tryParse(value);
                }
                return acc;
            }, {});
        }
    };
};
const tryParse = (value)=>{
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};
class LocalStorageShim {
    constructor(){
        this.valuesMap = new Map();
    }
    getItem(key) {
        if (this.valuesMap.has(key)) {
            return String(this.valuesMap.get(key));
        }
        return null;
    }
    setItem(key, value) {
        this.valuesMap.set(key, value);
    }
    removeItem(key) {
        this.valuesMap.delete(key);
    }
    removeItems(keyPrefix) {
        this.valuesMap.forEach((value, key)=>{
            if (key.startsWith(keyPrefix)) {
                this.valuesMap.delete(key);
            }
        });
    }
    clear() {
        this.valuesMap.clear();
    }
    key(i) {
        if (arguments.length === 0) {
            throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."); // this is a TypeError implemented on Chrome, Firefox throws Not enough arguments to Storage.key.
        }
        const arr = Array.from(this.valuesMap.keys());
        return arr[i];
    }
    get length() {
        return this.valuesMap.size;
    }
}
const memoryStorage = new LocalStorageShim();
const getStorage = ()=>{
    return localStorageAvailable ? window.localStorage : memoryStorage;
}; //# sourceMappingURL=localStorageStore.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = (condition, message)=>{
    if (condition && ("TURBOPACK compile-time value", "development") !== 'production') {
        console.warn(message);
    }
};
 //# sourceMappingURL=warning.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/AuthContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthContext",
    ()=>AuthContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const AuthContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
AuthContext.displayName = 'AuthContext'; //# sourceMappingURL=AuthContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "defaultAuthParams",
    ()=>defaultAuthParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/AuthContext.js [app-ssr] (ecmascript)");
;
;
const defaultAuthParams = {
    loginUrl: '/login',
    afterLoginUrl: '/'
};
/**
 * Get the authProvider stored in the context
 */ const useAuthProvider = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthContext"]);
const __TURBOPACK__default__export__ = useAuthProvider;
 //# sourceMappingURL=useAuthProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/memoryStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Store using memory
 *
 * @example
 *
 * import { memoryStore } from 'react-admin';
 *
 * const App = () => (
 *    <Admin store={memoryStore()}>
 *       ...
 *   </Admin>
 * );
 */ __turbopack_context__.s([
    "memoryStore",
    ()=>memoryStore
]);
const memoryStore = (initialStorage = {})=>{
    // Use a flat Map to store key-value pairs directly without treating dots as nested paths
    let storage = new Map(Object.entries(initialStorage ?? {}));
    const subscriptions = {};
    let initialized = false;
    let itemsToSetAfterInitialization = {};
    const publish = (key, value)=>{
        Object.keys(subscriptions).forEach((id)=>{
            if (!subscriptions[id]) return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                subscriptions[id].callback(value);
            }
        });
    };
    return {
        setup: ()=>{
            storage = new Map(Object.entries(initialStorage));
            // Because children might call setItem before the store is initialized,
            // we store those calls parameters and apply them once the store is ready
            if (Object.keys(itemsToSetAfterInitialization).length > 0) {
                const items = Object.entries(itemsToSetAfterInitialization);
                for (const [key, value] of items){
                    storage.set(key, value);
                    publish(key, value);
                }
                itemsToSetAfterInitialization = {};
            }
            initialized = true;
        },
        teardown: ()=>{
            storage.clear();
        },
        getItem (key, defaultValue) {
            return storage.has(key) ? storage.get(key) : defaultValue;
        },
        setItem (key, value) {
            // Because children might call setItem before the store is initialized,
            // we store those calls parameters and apply them once the store is ready
            if (!initialized) {
                itemsToSetAfterInitialization[key] = value;
                return;
            }
            storage.set(key, value);
            publish(key, value);
        },
        removeItem (key) {
            storage.delete(key);
            publish(key, undefined);
        },
        removeItems (keyPrefix) {
            const keysToDelete = [];
            storage.forEach((_, key)=>{
                if (key.startsWith(keyPrefix)) {
                    keysToDelete.push(key);
                }
            });
            keysToDelete.forEach((key)=>{
                storage.delete(key);
                publish(key, undefined);
            });
        },
        reset () {
            const keysToDelete = [];
            storage.forEach((_, key)=>{
                keysToDelete.push(key);
            });
            storage.clear();
            keysToDelete.forEach((key)=>{
                publish(key, undefined);
            });
        },
        subscribe: (key, callback)=>{
            const id = Math.random().toString();
            subscriptions[id] = {
                key,
                callback
            };
            return ()=>{
                delete subscriptions[id];
            };
        },
        listItems: (keyPrefix)=>{
            return Array.from(storage.entries()).reduce((acc, [key, value])=>{
                if (keyPrefix != null && !key.startsWith(keyPrefix)) {
                    return acc;
                }
                acc[key] = value;
                return acc;
            }, {});
        }
    };
}; //# sourceMappingURL=memoryStore.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/StoreContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreContext",
    ()=>StoreContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$memoryStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/memoryStore.js [app-ssr] (ecmascript)");
;
;
const defaultStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$memoryStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoryStore"])();
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultStore); //# sourceMappingURL=StoreContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/useStoreContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStoreContext",
    ()=>useStoreContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/StoreContext.js [app-ssr] (ecmascript)");
;
;
const useStoreContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreContext"]); //# sourceMappingURL=useStoreContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/useResetStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetStore",
    ()=>useResetStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStoreContext.js [app-ssr] (ecmascript)");
;
const useResetStore = ()=>{
    const { reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreContext"])();
    return reset;
}; //# sourceMappingURL=useResetStore.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/BasenameContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasenameContext",
    ()=>BasenameContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const BasenameContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(''); //# sourceMappingURL=BasenameContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBasename",
    ()=>useBasename
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/BasenameContext.js [app-ssr] (ecmascript)");
;
;
const useBasename = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasenameContext"]); //# sourceMappingURL=useBasename.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/adapters/reactRouterProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reactRouterProvider",
    ()=>reactRouterProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
;
;
;
const routerProviderFuture = {
    v7_startTransition: false,
    v7_relativeSplatPath: false
};
/**
 * Hook to check if navigation blocking is supported.
 * In react-router, blocking requires a data router.
 */ const useCanBlock = ()=>{
    const dataRouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_DataRouterContext"]);
    const dataRouterStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UNSAFE_DataRouterStateContext"]);
    return !!(dataRouterContext && dataRouterStateContext);
};
/**
 * Wrapper around react-router's useNavigate that returns a stable function reference.
 *
 * react-router's useNavigate forces rerenders on every navigation, even if we don't use the result.
 * @see https://github.com/remix-run/react-router/issues/7634
 *
 * This wrapper uses a ref to return a stable function reference, avoiding unnecessary rerenders
 * in components that use navigate but don't need to rerender on navigation.
 */ const useNavigate = ()=>{
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const navigateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(navigate);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        navigateRef.current = navigate;
    }, [
        navigate
    ]);
    // Return a stable function that always calls the latest navigate
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((...args)=>{
        return navigateRef.current(...args);
    }, []);
};
/**
 * Internal router component that creates a HashRouter.
 * Only used when not already inside a router context.
 */ const InternalRouter = ({ children, basename })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createHashRouter"])([
        {
            path: '*',
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children)
        }
    ], {
        basename,
        future: {
            v7_fetcherPersist: false,
            v7_normalizeFormMethod: false,
            v7_partialHydration: false,
            v7_relativeSplatPath: false,
            v7_skipActionErrorRevalidation: false
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterProvider"], {
        router: router,
        future: routerProviderFuture
    });
};
/**
 * RouterWrapper component for react-router.
 * Creates a HashRouter if not already inside a router context.
 */ const RouterWrapper = ({ basename, children })=>{
    const isInRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInRouterContext"])();
    if (isInRouter) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](InternalRouter, {
        basename: basename
    }, children);
};
const reactRouterProvider = {
    // Hooks
    useNavigate,
    useLocation: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"],
    useParams: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"],
    useBlocker: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlocker"],
    useMatch: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMatch"],
    useInRouterContext: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInRouterContext"],
    useCanBlock,
    // Components
    Link: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"],
    Navigate: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigate"],
    Route: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"],
    Routes: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"],
    Outlet: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Outlet"],
    // Router creation
    RouterWrapper,
    // Utilities
    matchPath: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["matchPath"]
}; //# sourceMappingURL=reactRouterProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouterProviderContext",
    ()=>RouterProviderContext,
    "useRouterProvider",
    ()=>useRouterProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$adapters$2f$reactRouterProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/adapters/reactRouterProvider.js [app-ssr] (ecmascript)");
;
;
const RouterProviderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$adapters$2f$reactRouterProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactRouterProvider"]);
RouterProviderContext.displayName = 'RouterProviderContext';
const useRouterProvider = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(RouterProviderContext);
}; //# sourceMappingURL=RouterProviderContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocation",
    ()=>useLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
const useLocation = ()=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return provider.useLocation();
}; //# sourceMappingURL=useLocation.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavigate",
    ()=>useNavigate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
const useNavigate = ()=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return provider.useNavigate();
}; //# sourceMappingURL=useNavigate.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeDoubleSlashes",
    ()=>removeDoubleSlashes,
    "useCreatePath",
    ()=>useCreatePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
;
;
const useCreatePath = ()=>{
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ resource, id, type })=>{
        if ([
            'list',
            'create',
            'edit',
            'show'
        ].includes(type) && !resource) {
            throw new Error('Cannot create a link without a resource. You must provide the resource name.');
        }
        switch(type){
            case 'list':
                return removeDoubleSlashes(`${basename}/${resource}`);
            case 'create':
                return removeDoubleSlashes(`${basename}/${resource}/create`);
            case 'edit':
                {
                    if (id == null) {
                        // maybe the id isn't defined yet
                        // instead of throwing an error, fallback to list link
                        return removeDoubleSlashes(`${basename}/${resource}`);
                    }
                    return removeDoubleSlashes(`${basename}/${resource}/${encodeURIComponent(id)}`);
                }
            case 'show':
                {
                    if (id == null) {
                        // maybe the id isn't defined yet
                        // instead of throwing an error, fallback to list link
                        return removeDoubleSlashes(`${basename}/${resource}`);
                    }
                    return removeDoubleSlashes(`${basename}/${resource}/${encodeURIComponent(id)}/show`);
                }
            default:
                return type;
        }
    }, [
        basename
    ]);
};
const removeDoubleSlashes = (path)=>path.replace('//', '/'); //# sourceMappingURL=useCreatePath.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useResetStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useResetStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
/**
 * Get a callback for calling the authProvider.logout() method,
 * redirect to the login page, and clear the store.
 *
 * @see useAuthProvider
 *
 * @returns {Function} logout callback
 *
 * @example
 *
 * import { useLogout } from 'react-admin';
 *
 * const LogoutButton = () => {
 *     const logout = useLogout();
 *     const handleClick = () => logout();
 *     return <button onClick={handleClick}>Logout</button>;
 * }
 */ const useLogout = ()=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const resetStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useResetStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResetStore"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const locationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(location);
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    const loginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDoubleSlashes"])(`${basename}/${__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAuthParams"].loginUrl}`);
    /*
     * We need the current location to pass in the router state
     * so that the login hook knows where to redirect to as next route after login.
     *
     * But if we used the location from useLocation as a dependency of the logout
     * function, it would be rebuilt each time the user changes location.
     * Consequently, that would force a rerender of all components using this hook
     * upon navigation (CoreAdminRouter for example).
     *
     * To avoid that, we store the location in a ref.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        locationRef.current = location;
    }, [
        location
    ]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params = {}, redirectFromCaller, redirectToCurrentLocationAfterLogin = true)=>{
        if (authProvider) {
            return authProvider.logout(params).then((redirectFromLogout)=>{
                if (redirectFromLogout === false || redirectFromCaller === false) {
                    resetStore();
                    queryClient.clear();
                    // do not redirect
                    return;
                }
                const finalRedirectTo = redirectFromCaller || redirectFromLogout || loginUrl;
                if (finalRedirectTo?.startsWith('http')) {
                    // absolute link (e.g. https://my.oidc.server/login)
                    resetStore();
                    queryClient.clear();
                    window.location.href = finalRedirectTo;
                    return finalRedirectTo;
                }
                // redirectTo is an internal location that may contain a query string, e.g. '/login?foo=bar'
                // we must split it to pass a structured location to navigate()
                const redirectToParts = finalRedirectTo.split('?');
                const newLocation = {
                    pathname: redirectToParts[0]
                };
                let newLocationOptions = {};
                if (redirectToCurrentLocationAfterLogin && locationRef.current && locationRef.current.pathname) {
                    newLocationOptions = {
                        state: {
                            nextPathname: locationRef.current.pathname,
                            nextSearch: locationRef.current.search
                        }
                    };
                }
                if (redirectToParts[1]) {
                    newLocation.search = redirectToParts[1];
                }
                // We need to navigate and reset the store after a litte delay to avoid a race condition
                // between the store reset and the navigation.
                //
                // This would only happen when the `authProvider.getPermissions` method returns
                // a resolved promise with no delay: If the store was reset before the navigation,
                // the `usePermissions` query would reset, causing the `CoreAdminRoutes` component to
                // rerender the `LogoutOnMount` component leading to an infinite loop.
                setTimeout(()=>{
                    navigate(newLocation, newLocationOptions);
                    resetStore();
                    queryClient.clear();
                }, 0);
                return redirectFromLogout;
            });
        } else {
            navigate({
                pathname: loginUrl
            }, {
                state: {
                    nextPathname: locationRef.current && locationRef.current.pathname
                }
            });
            resetStore();
            queryClient.clear();
            return Promise.resolve();
        }
    }, [
        authProvider,
        resetStore,
        loginUrl,
        queryClient,
        navigate
    ]);
    return logout;
};
const __TURBOPACK__default__export__ = useLogout;
 //# sourceMappingURL=useLogout.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/AddNotificationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddNotificationContext",
    ()=>AddNotificationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const AddNotificationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(()=>{}); //# sourceMappingURL=AddNotificationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/useAddNotificationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddNotificationContext",
    ()=>useAddNotificationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$AddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/AddNotificationContext.js [app-ssr] (ecmascript)");
;
;
const useAddNotificationContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$AddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddNotificationContext"]); //# sourceMappingURL=useAddNotificationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotify",
    ()=>useNotify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useAddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useAddNotificationContext.js [app-ssr] (ecmascript)");
;
;
const useNotify = ()=>{
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useAddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAddNotificationContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, options = {})=>{
        const { type: messageType = 'info', ...notificationOptions } = options;
        addNotification({
            message,
            type: messageType,
            notificationOptions
        });
    }, [
        addNotification
    ]);
}; //# sourceMappingURL=useNotify.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEvent",
    ()=>useEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
// allow the hook to work in SSR
const useLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const useEvent = (fn)=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](()=>{
        throw new Error('Cannot call an event handler while rendering.');
    });
    useLayoutEffect(()=>{
        ref.current = fn;
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>ref.current(...args), []);
}; //# sourceMappingURL=useEvent.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const emptyParams = {};
/**
 * Hook for getting the authentication status
 *
 * Calls the authProvider.checkAuth() method asynchronously.
 *
 * The return value updates according to the authProvider request state:
 *
 * - isPending: true just after mount, while the authProvider is being called. false once the authProvider has answered.
 * - authenticated: true while loading. then true or false depending on the authProvider response.
 *
 * To avoid rendering a component and force waiting for the authProvider response, use the useAuthState() hook
 * instead of the useAuthenticated() hook.
 *
 * You can render different content depending on the authenticated status.
 *
 * @see useAuthenticated()
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @param {Boolean} logoutOnFailure: Optional. Whether the user should be logged out if the authProvider fails to authenticate them. False by default.
 *
 * @returns The current auth check state. Destructure as { authenticated, error, isPending }.
 *
 * @example
 * import { useAuthState, Loading } from 'react-admin';
 *
 * const MyPage = () => {
 *     const { isPending, authenticated } = useAuthState();
 *     if (isPending) {
 *         return <Loading />;
 *     }
 *     if (authenticated) {
 *        return <AuthenticatedContent />;
 *     }
 *     return <AnonymousContent />;
 * };
 */ const useAuthState = (params = emptyParams, logoutOnFailure = false, queryOptions = emptyParams)=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const { onSuccess, onError, onSettled, ...options } = queryOptions;
    const queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'checkAuth',
            params
        ],
        queryFn: async ({ signal })=>{
            // The authProvider is optional in react-admin
            if (!authProvider) {
                return true;
            }
            try {
                await authProvider.checkAuth({
                    ...params,
                    signal
                });
                return true;
            } catch (error) {
                // This is necessary because react-query requires the error to be defined
                if (error != null) {
                    throw error;
                }
                throw new Error();
            }
        },
        retry: false,
        ...options
    });
    const onSuccessEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSuccess ?? noop);
    const onSettledEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSettled ?? noop);
    const onErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onError ?? ((error)=>{
        if (!logoutOnFailure) return;
        const loginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDoubleSlashes"])(`${basename}/${__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAuthParams"].loginUrl}`);
        logout({}, error && error.redirectTo != null ? error.redirectTo : loginUrl);
        const shouldSkipNotify = error && error.message === false;
        !shouldSkipNotify && notify(getErrorMessage(error, 'ra.auth.auth_check_error'), {
            type: 'error'
        });
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.data === undefined || queryResult.isFetching) return;
        if (queryOptions.enabled === false) return;
        onSuccessEvent(queryResult.data);
    }, [
        onSuccessEvent,
        queryResult.data,
        queryResult.isFetching,
        queryOptions.enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.error == null || queryResult.isFetching) return;
        if (queryOptions.enabled === false) return;
        onErrorEvent(queryResult.error);
    }, [
        onErrorEvent,
        queryResult.error,
        queryResult.isFetching,
        queryOptions.enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.status === 'pending' || queryResult.isFetching) return;
        if (queryOptions.enabled === false) return;
        onSettledEvent(queryResult.data, queryResult.error);
    }, [
        onSettledEvent,
        queryResult.data,
        queryResult.error,
        queryResult.status,
        queryResult.isFetching,
        queryOptions.enabled
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            ...queryResult,
            authenticated: queryResult.error ? false : queryResult.data
        };
    }, [
        queryResult
    ]);
    return authProvider != null ? result : noAuthProviderQueryResult;
};
const __TURBOPACK__default__export__ = useAuthState;
const getErrorMessage = (error, defaultMessage)=>typeof error === 'string' ? error : typeof error === 'undefined' || !error.message ? defaultMessage : error.message;
const noop = ()=>{};
const noAuthProviderQueryResult = {
    authenticated: true,
    data: true,
    dataUpdatedAt: 0,
    error: null,
    errorUpdatedAt: 0,
    errorUpdateCount: 0,
    failureCount: 0,
    failureReason: null,
    fetchStatus: 'idle',
    isError: false,
    isInitialLoading: false,
    isLoading: false,
    isLoadingError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isPaused: false,
    isPlaceholderData: false,
    isPending: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    status: 'success',
    refetch: ()=>Promise.resolve(noAuthProviderQueryResult)
}; //# sourceMappingURL=useAuthState.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useAuthenticated.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthenticated",
    ()=>useAuthenticated
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-ssr] (ecmascript)");
;
const useAuthenticated = ({ params, logoutOnFailure = true, ...options } = {})=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(params ?? emptyParams, logoutOnFailure, options);
};
const emptyParams = {}; //# sourceMappingURL=useAuthenticated.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useLogoutIfAccessDenied.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
;
;
;
;
;
let timer;
/**
 * Returns a callback used to call the authProvider.checkError() method
 * and an error from the dataProvider. If the authProvider rejects the call,
 * the hook logs the user out and shows a logged out notification.
 *
 * Used in the useDataProvider hook to check for access denied responses
 * (e.g. 401 or 403 responses) and trigger a logout.
 *
 * @see useLogout
 * @see useDataProvider
 *
 * @returns {Function} logoutIfAccessDenied callback
 *
 * @example
 *
 * import { useLogoutIfAccessDenied, useNotify, DataProviderContext } from 'react-admin';
 *
 * const FetchRestrictedResource = () => {
 *     const dataProvider = useContext(DataProviderContext);
 *     const logoutIfAccessDenied = useLogoutIfAccessDenied();
 *     const notify = useNotify()
 *     useEffect(() => {
 *         dataProvider.getOne('secret', { id: 123 })
 *             .catch(error => {
 *                  logoutIfAccessDenied(error);
 *                  notify('server error',  { type: 'error' });
 *              })
 *     }, []);
 *     // ...
 * }
 */ const useLogoutIfAccessDenied = ()=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const handleRedirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((url)=>{
        if (url.startsWith('http')) {
            window.location.href = url;
        } else {
            navigate(url);
        }
    }, [
        navigate
    ]);
    const logoutIfAccessDenied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (errorFromCheckAuth)=>{
        if (!authProvider) {
            return logoutIfAccessDeniedWithoutProvider();
        }
        try {
            await authProvider.checkError(errorFromCheckAuth);
            return false;
        } catch (errorFromCheckError) {
            const logoutUser = errorFromCheckError?.logoutUser ?? true;
            // manual debounce
            if (timer) {
                return true; // side effects already triggered in this tick, exit
            }
            timer = setTimeout(()=>{
                timer = undefined;
            }, 0);
            const redirectTo = errorFromCheckError && errorFromCheckError.redirectTo != null ? errorFromCheckError.redirectTo : errorFromCheckAuth && errorFromCheckAuth.redirectTo ? errorFromCheckAuth.redirectTo : undefined;
            const shouldNotify = !(errorFromCheckError && errorFromCheckError.message === false || errorFromCheckAuth && errorFromCheckAuth.message === false || redirectTo?.startsWith('http'));
            if (shouldNotify) {
                try {
                    // notify only if not yet logged out
                    await authProvider.checkAuth({});
                    if (logoutUser) {
                        notify(getErrorMessage(errorFromCheckError, 'ra.notification.logged_out'), {
                            type: 'error'
                        });
                    } else {
                        notify(getErrorMessage(errorFromCheckError, 'ra.notification.not_authorized'), {
                            type: 'error'
                        });
                    }
                } catch  {
                // ignore
                }
            }
            if (logoutUser) {
                logout({}, redirectTo);
            } else if (redirectTo) {
                handleRedirect(redirectTo);
            }
            return true;
        }
    }, [
        authProvider,
        logout,
        notify,
        handleRedirect
    ]);
    return logoutIfAccessDenied;
};
const logoutIfAccessDeniedWithoutProvider = async ()=>false;
const getErrorMessage = (error, defaultMessage)=>typeof error === 'string' ? error : typeof error === 'undefined' || !error.message ? defaultMessage : error.message;
const __TURBOPACK__default__export__ = useLogoutIfAccessDenied;
 //# sourceMappingURL=useLogoutIfAccessDenied.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/usePermissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogoutIfAccessDenied$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogoutIfAccessDenied.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
const emptyParams = {};
/**
 * Hook for getting user permissions
 *
 * Calls the authProvider.getPermissions() method using react-query.
 * If the authProvider returns a rejected promise, returns empty permissions.
 *
 * The return value updates according to the request state:
 *
 * - start: { isPending: true }
 * - success: { permissions: [any], isPending: false }
 * - error: { error: [error from provider], isPending: false }
 *
 * Useful to enable features based on user permissions
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { permissions, error, isPending, refetch }.
 *
 * @example
 *     import { usePermissions } from 'react-admin';
 *
 *     const PostDetail = () => {
 *         const { isPending, permissions } = usePermissions();
 *         if (!isPending && permissions == 'editor') {
 *             return <PostEdit />
 *         } else {
 *             return <PostShow />
 *         }
 *     };
 */ const usePermissions = (params = emptyParams, queryParams = {
    staleTime: 5 * 60 * 1000
})=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const logoutIfAccessDenied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogoutIfAccessDenied$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { onSuccess, onError, onSettled, ...queryOptions } = queryParams ?? {};
    const queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'getPermissions',
            params
        ],
        queryFn: async ({ signal })=>{
            if (!authProvider || !authProvider.getPermissions) {
                return [];
            }
            const permissions = await authProvider.getPermissions({
                ...params,
                signal
            });
            return permissions ?? null;
        },
        ...queryOptions
    });
    const onSuccessEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSuccess ?? noop);
    const onSettledEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSettled ?? noop);
    const onErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onError ?? ((error)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            console.error(error);
        }
        logoutIfAccessDenied(error);
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.data === undefined || queryResult.isFetching) return;
        onSuccessEvent(queryResult.data);
    }, [
        onSuccessEvent,
        queryResult.data,
        queryResult.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.error == null || queryResult.isFetching) return;
        onErrorEvent(queryResult.error);
    }, [
        onErrorEvent,
        queryResult.error,
        queryResult.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.status === 'pending' || queryResult.isFetching) return;
        onSettledEvent(queryResult.data, queryResult.error);
    }, [
        onSettledEvent,
        queryResult.data,
        queryResult.error,
        queryResult.status,
        queryResult.isFetching
    ]);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...queryResult,
            permissions: queryResult.data
        }), [
        queryResult
    ]);
    return !authProvider || !authProvider.getPermissions ? fakeQueryResult : result;
};
const __TURBOPACK__default__export__ = usePermissions;
const noop = ()=>{};
const fakeQueryResult = {
    permissions: undefined,
    data: undefined,
    dataUpdatedAt: 0,
    error: null,
    errorUpdatedAt: 0,
    errorUpdateCount: 0,
    failureCount: 0,
    failureReason: null,
    fetchStatus: 'idle',
    isError: false,
    isInitialLoading: false,
    isLoading: false,
    isLoadingError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isPaused: false,
    isPlaceholderData: false,
    isPending: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    status: 'success',
    refetch: ()=>Promise.resolve(fakeQueryResult)
}; //# sourceMappingURL=usePermissions.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/WithPermissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthenticated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/usePermissions.js [app-ssr] (ecmascript)");
;
;
;
;
;
const isEmptyChildren = (children)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) === 0;
/**
 * After checking that the user is authenticated,
 * retrieves the user's permissions for a specific context.
 *
 * Useful for Route components ; used internally by Resource.
 * Use it to decorate your custom page components to require
 * a custom role. It will pass the permissions as a prop to your
 * component.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { Admin, CustomRoutes, WithPermissions } from 'react-admin';
 *
 *     const Foo = ({ permissions }) => (
 *         {permissions === 'admin' ? <p>Sensitive data</p> : null}
 *         <p>Not sensitive data</p>
 *     );
 *
 *     const customRoutes = [
 *         <Route path="/foo" element={
 *             <WithPermissions
 *                  authParams={{ foo: 'bar' }}
 *                  component={({ permissions, ...props }) => <Foo permissions={permissions} {...props} />}
 *              />
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin>
 *             <CustomRoutes>{customRoutes}</CustomRoutes>
 *         </Admin>
 *     );
 */ const WithPermissions = (props)=>{
    const { authParams, children, render, component, loading: Loading = null, staticContext, ...rest } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(render && children && !isEmptyChildren(children) || render && component || component && children && !isEmptyChildren(children), 'You should only use one of the `component`, `render` and `children` props in <WithPermissions>');
    const { isPending: isAuthenticationPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthenticated"])(authParams);
    const { permissions, isPending: isPendingPermissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(authParams, {
        enabled: !isAuthenticationPending
    });
    // We must check both pending states here as if the authProvider does not implement getPermissions, isPendingPermissions will always be false
    if (isAuthenticationPending || isPendingPermissions) {
        return Loading ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Loading, null) : null;
    }
    if (component) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(component, {
            permissions,
            ...rest
        });
    }
    // @deprecated
    if (render) {
        return render({
            permissions,
            ...rest
        });
    }
    // @deprecated
    if (children) {
        return children({
            permissions,
            ...rest
        });
    }
};
const __TURBOPACK__default__export__ = WithPermissions;
 //# sourceMappingURL=WithPermissions.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/WithPermissions.js [app-ssr] (ecmascript) <export default as WithPermissions>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WithPermissions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$WithPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$WithPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/WithPermissions.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/LogoutOnMount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoutOnMount",
    ()=>LogoutOnMount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
;
;
const LogoutOnMount = ()=>{
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        logout();
    }, [
        logout
    ]);
    return null;
}; //# sourceMappingURL=LogoutOnMount.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-ssr] (ecmascript) <export default as useAuthState>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useScrollToTop.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollToTop",
    ()=>useScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
;
;
const useScrollToTop = ()=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (location.state?._scrollToTop && ("TURBOPACK compile-time value", "undefined") != 'undefined' && typeof window.scrollTo === 'function') //TURBOPACK unreachable
        ;
    }, [
        location
    ]);
}; //# sourceMappingURL=useScrollToTop.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/ResourceDefinitionContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceDefinitionContext",
    ()=>ResourceDefinitionContext,
    "ResourceDefinitionContextProvider",
    ()=>ResourceDefinitionContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)");
;
;
;
const ResourceDefinitionContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    definitions: {},
    register: ()=>{},
    unregister: ()=>{}
});
const ResourceDefinitionContextProvider = ({ definitions: defaultDefinitions = {}, children })=>{
    const [definitions, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultDefinitions);
    const register = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((config)=>{
        setState((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(prev[config.name], config) ? prev : {
                ...prev,
                [config.name]: config
            });
    }, []);
    const unregister = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((config)=>{
        setState((prev)=>{
            const { [config.name]: _, ...rest } = prev;
            return rest;
        });
    }, []);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            definitions,
            register,
            unregister
        }), [
        definitions
    ] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ResourceDefinitionContext.Provider, {
        value: contextValue
    }, children);
}; //# sourceMappingURL=ResourceDefinitionContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitionContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceDefinitionContext",
    ()=>useResourceDefinitionContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceDefinitionContext.js [app-ssr] (ecmascript)");
;
;
const useResourceDefinitionContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceDefinitionContext"]); //# sourceMappingURL=useResourceDefinitionContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useConfigureAdminRouterFromChildren.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConfigureAdminRouterFromChildren",
    ()=>useConfigureAdminRouterFromChildren
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/usePermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitionContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
const useConfigureAdminRouterFromChildren = (children)=>{
    const { permissions, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    // Whenever children are updated, update our custom routes and resources
    const [routesAndResources, status] = useRoutesAndResourcesFromChildren(children, permissions, isPending);
    // Whenever the resources change, we must ensure they're all registered
    useRegisterResources(routesAndResources.resources, permissions);
    return {
        customRoutesWithLayout: routesAndResources.customRoutesWithLayout,
        customRoutesWithoutLayout: routesAndResources.customRoutesWithoutLayout,
        status,
        resources: routesAndResources.resources
    };
};
/**
 * A hook that determine the routes and resources from React nodes and permissions.
 * Returns a tuple with the routes and resources as a single object, and the status.
 * @param children React nodes to inspect
 * @param permissions The permissions
 */ const useRoutesAndResourcesFromChildren = (children, permissions, isLoading)=>{
    // Gather custom routes and resources that were declared as direct children of CoreAdminRouter
    // e.g. Not returned from the child function (if any)
    // We need to know right away whether some resources were declared to correctly
    // initialize the status at the next stop
    const doLogout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [routesAndResources, setRoutesAndResources, mergeRoutesAndResources] = useRoutesAndResourcesState(getRoutesAndResourceFromNodes(children));
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getStatus({
            children,
            ...routesAndResources
        }));
    if (!status) {
        throw new Error('Status should be defined');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resolveChildFunction = async (childFunc)=>{
            try {
                const childrenFuncResult = childFunc(permissions);
                if (childrenFuncResult?.then) {
                    childrenFuncResult.then((resolvedChildren)=>{
                        mergeRoutesAndResources(getRoutesAndResourceFromNodes(resolvedChildren));
                        setStatus('ready');
                    });
                } else {
                    mergeRoutesAndResources(getRoutesAndResourceFromNodes(childrenFuncResult));
                    setStatus('ready');
                }
            } catch (error) {
                console.error(error);
                doLogout();
            }
        };
        const updateFromChildren = async ()=>{
            const functionChild = getSingleChildFunction(children);
            const newRoutesAndResources = getRoutesAndResourceFromNodes(children);
            setRoutesAndResources(newRoutesAndResources);
            setStatus(functionChild ? 'loading' : newRoutesAndResources.resources.length > 0 || newRoutesAndResources.customRoutesWithLayout.length > 0 || newRoutesAndResources.customRoutesWithoutLayout.length > 0 ? 'ready' : 'empty');
            if (functionChild) {
                resolveChildFunction(functionChild);
            }
        };
        if (!isLoading) {
            updateFromChildren();
        }
    }, [
        children,
        doLogout,
        isLoading,
        mergeRoutesAndResources,
        permissions,
        setRoutesAndResources,
        setStatus
    ]);
    return [
        routesAndResources,
        status
    ];
};
/*
 * A hook that store the routes and resources just like setState but also provides an additional function
 * to merge new routes and resources with the existing ones.
 */ const useRoutesAndResourcesState = (initialState)=>{
    const [routesAndResources, setRoutesAndResources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const mergeRoutesAndResources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newRoutesAndResources)=>{
        setRoutesAndResources((previous)=>({
                customRoutesWithLayout: previous.customRoutesWithLayout.concat(newRoutesAndResources.customRoutesWithLayout),
                customRoutesWithoutLayout: previous.customRoutesWithoutLayout.concat(newRoutesAndResources.customRoutesWithoutLayout),
                resources: previous.resources.concat(newRoutesAndResources.resources)
            }));
    }, []);
    return [
        routesAndResources,
        setRoutesAndResources,
        mergeRoutesAndResources
    ];
};
/**
 * A hook that register resources and unregister them when the calling component is unmounted.
 * @param resources: An array of Resource elements
 * @param permissions: The permissions
 */ const useRegisterResources = (resources, permissions)=>{
    const { register, unregister } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitionContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resources.forEach((resource)=>{
            if (typeof resource.type.registerResource === 'function') {
                const definition = resource.type.registerResource(resource.props, permissions);
                register(definition);
            } else {
                throw new Error('When using a custom Resource element, it must have a static registerResource method accepting its props and returning a ResourceDefinition');
            }
        });
        return ()=>{
            resources.forEach((resource)=>{
                if (typeof resource.type.registerResource === 'function') {
                    const definition = resource.type.registerResource(resource.props, permissions);
                    unregister(definition);
                } else {
                    throw new Error('When using a custom Resource element, it must have a static registerResource method accepting its props and returning a ResourceDefinition');
                }
            });
        };
    }, [
        permissions,
        register,
        resources,
        unregister
    ]);
};
const getStatus = ({ children, resources, customRoutesWithLayout, customRoutesWithoutLayout })=>{
    return getSingleChildFunction(children) ? 'loading' : resources.length > 0 || customRoutesWithLayout.length > 0 || customRoutesWithoutLayout.length > 0 ? 'ready' : 'empty';
};
/**
 * Inspect the children of a CoreAdminRouter to see if one of them is a function.
 * Throws an error if there are more than one function child.
 * Returns the function child if one was provided, or null otherwise.
 */ const getSingleChildFunction = (children)=>{
    const childrenArray = Array.isArray(children) ? children : [
        children
    ];
    const functionChildren = childrenArray.filter((child)=>typeof child === 'function');
    if (functionChildren.length > 1) {
        throw new Error('You can only provide one function child to AdminRouter');
    }
    if (functionChildren.length === 0) {
        return null;
    }
    return functionChildren[0];
};
/**
 * Inspect the children and return an object with the following keys:
 * - customRoutesWithLayout: an array of the custom routes to render inside the layout
 * - customRoutesWithoutLayout: an array of custom routes to render outside the layout
 * - resources: an array of resources elements
 */ const getRoutesAndResourceFromNodes = (children)=>{
    const customRoutesWithLayout = [];
    const customRoutesWithoutLayout = [];
    const resources = [];
    if (typeof children === 'function') {
        return {
            customRoutesWithLayout: [],
            customRoutesWithoutLayout: [],
            resources: []
        };
    }
    // @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].forEach(children, (element)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](element)) {
            // Ignore non-elements. This allows people to more easily inline
            // conditionals in their route config.
            return;
        }
        if (element.type === __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"]) {
            const customRoutesFromFragment = getRoutesAndResourceFromNodes(element.props.children);
            customRoutesWithLayout.push(...customRoutesFromFragment.customRoutesWithLayout);
            customRoutesWithoutLayout.push(...customRoutesFromFragment.customRoutesWithoutLayout);
            resources.push(...customRoutesFromFragment.resources);
        }
        if (element.type.raName === 'CustomRoutes') {
            const customRoutesElement = element;
            if (customRoutesElement.props.noLayout) {
                customRoutesWithoutLayout.push(customRoutesElement.props.children);
            } else {
                customRoutesWithLayout.push(customRoutesElement.props.children);
            }
        } else if (element.type.raName === 'Resource') {
            resources.push(element);
        }
    });
    return {
        customRoutesWithLayout,
        customRoutesWithoutLayout,
        resources
    };
}; //# sourceMappingURL=useConfigureAdminRouterFromChildren.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/HasDashboardContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HasDashboardContext",
    ()=>HasDashboardContext,
    "HasDashboardContextProvider",
    ()=>HasDashboardContextProvider,
    "useHasDashboard",
    ()=>useHasDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const HasDashboardContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(false);
const HasDashboardContextProvider = HasDashboardContext.Provider;
const useHasDashboard = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(HasDashboardContext); //# sourceMappingURL=HasDashboardContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/record/RecordContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecordContext",
    ()=>RecordContext,
    "RecordContextProvider",
    ()=>RecordContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const RecordContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
RecordContext.displayName = 'RecordContext';
const RecordContextProvider = ({ children, value })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RecordContext.Provider, {
        value: value
    }, children); //# sourceMappingURL=RecordContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecordContext",
    ()=>useRecordContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/RecordContext.js [app-ssr] (ecmascript)");
;
;
const useRecordContext = (props)=>{
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecordContext"]);
    return props && props.record || context;
}; //# sourceMappingURL=useRecordContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccessResources.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanAccessResources",
    ()=>useCanAccessResources
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
;
;
;
;
const useCanAccessResources = (params)=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(params);
    const { action, resources, ...options } = params;
    const queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'canAccess',
            resources,
            action,
            record
        ],
        queryFn: async ({ signal })=>{
            const queries = await Promise.all(resources.map(async (resource)=>{
                if (!authProvider || !authProvider.canAccess) {
                    return {
                        canAccess: true,
                        resource
                    };
                }
                const canAccess = await authProvider.canAccess({
                    resource,
                    action,
                    record,
                    signal: authProvider.supportAbortSignal ? signal : undefined
                });
                return {
                    canAccess,
                    resource
                };
            }));
            const result = queries.reduce((acc, { resource, canAccess })=>{
                acc[resource] = canAccess;
                return acc;
            }, {});
            return result;
        },
        ...options
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            canAccess: queryResult.data,
            ...queryResult
        };
    }, [
        queryResult
    ]);
    const resultWithoutAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            canAccess: resources.reduce((acc, resource)=>{
                acc[resource] = true;
                return acc;
            }, {}),
            isPending: false,
            isError: false,
            error: null
        };
    }, [
        resources
    ]);
    return !authProvider || !authProvider.canAccess ? resultWithoutAuthProvider : result;
}; //# sourceMappingURL=useCanAccessResources.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceDefinitions",
    ()=>useResourceDefinitions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitionContext.js [app-ssr] (ecmascript)");
;
const useResourceDefinitions = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitionContext"])().definitions; //# sourceMappingURL=useResourceDefinitions.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useFirstResourceWithListAccess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFirstResourceWithListAccess",
    ()=>useFirstResourceWithListAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccessResources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccessResources.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthenticated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-ssr] (ecmascript)");
;
;
;
const useFirstResourceWithListAccess = ()=>{
    const { isPending: isPendingAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthenticated"])();
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    const resourcesNames = Object.keys(resources).filter((resource)=>resources[resource].hasList);
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccessResources$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanAccessResources"])({
        action: 'list',
        resources: resourcesNames,
        enabled: !isPendingAuthenticated
    });
    const firstResourceWithListAccess = resourcesNames.find((resource)=>canAccess && canAccess[resource] === true);
    return {
        resource: firstResourceWithListAccess,
        isPending
    };
}; //# sourceMappingURL=useFirstResourceWithListAccess.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/Navigate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigate",
    ()=>Navigate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
;
const Navigate = (props)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](provider.Navigate, {
        ...props
    });
}; //# sourceMappingURL=Navigate.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/NavigateToFirstResource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigateToFirstResource",
    ()=>NavigateToFirstResource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useFirstResourceWithListAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useFirstResourceWithListAccess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$Navigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/Navigate.js [app-ssr] (ecmascript)");
;
;
;
const NavigateToFirstResource = ({ loading: LoadingPage })=>{
    const { resource, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useFirstResourceWithListAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFirstResourceWithListAccess"])();
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreatePath"])();
    if (isPending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LoadingPage, null);
    }
    if (resource) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$Navigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigate"], {
            to: createPath({
                resource,
                type: 'list'
            }),
            replace: true
        });
    }
}; //# sourceMappingURL=NavigateToFirstResource.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminRoutes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreAdminRoutes",
    ()=>CoreAdminRoutes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$WithPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WithPermissions$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/WithPermissions.js [app-ssr] (ecmascript) <export default as WithPermissions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$LogoutOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/LogoutOnMount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthState$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-ssr] (ecmascript) <export default as useAuthState>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useScrollToTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useScrollToTop.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useConfigureAdminRouterFromChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useConfigureAdminRouterFromChildren.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$HasDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/HasDashboardContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$NavigateToFirstResource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/NavigateToFirstResource.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const CoreAdminRoutes = (props)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useScrollToTop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollToTop"])();
    const { Route, Routes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    const { customRoutesWithLayout, customRoutesWithoutLayout, status, resources } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useConfigureAdminRouterFromChildren$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConfigureAdminRouterFromChildren"])(props.children);
    const { layout: Layout, catchAll: CatchAll, dashboard, loading: LoadingPage, requireAuth, ready: Ready, authenticationError: AuthenticationError = Noop, accessDenied: AccessDenied = Noop } = props;
    const { authenticated, isPending: isPendingAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthState$3e$__["useAuthState"])(undefined, // do not log the user out on failure to allow access to custom routes with no layout
    false, {
        enabled: requireAuth
    });
    if (status === 'empty') {
        if (!Ready) {
            throw new Error('The admin is empty. Please provide an empty component, or pass Resource or CustomRoutes as children.');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Ready, null);
    }
    // Note: custom routes with no layout are always rendered, regardless of the auth status
    if (status === 'loading' || requireAuth && isPendingAuthenticated) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, customRoutesWithoutLayout, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "*",
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
                style: {
                    height: '100vh'
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](LoadingPage, null))
        }));
    }
    if (requireAuth && (isPendingAuthenticated || !authenticated)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, customRoutesWithoutLayout, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "*",
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$LogoutOnMount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogoutOnMount"], null)
        }));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, customRoutesWithoutLayout, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "/*",
        element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$HasDashboardContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HasDashboardContextProvider"], {
            value: !!dashboard
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Layout, null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, customRoutesWithLayout, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].map(resources, (resource)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
                key: resource.props.name,
                path: `${resource.props.name}/*`,
                element: resource
            })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "/",
            element: dashboard ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$WithPermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__WithPermissions$3e$__["WithPermissions"], {
                authParams: defaultAuthParams,
                component: dashboard,
                loading: LoadingPage
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$NavigateToFirstResource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigateToFirstResource"], {
                loading: LoadingPage
            })
        }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "/authentication-error",
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](AuthenticationError, null)
        }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "/access-denied",
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](AccessDenied, null)
        }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
            path: "*",
            element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](CatchAll, null)
        }))))
    }));
};
// FIXME in v6: make dashboard anonymous by default to remove this hack
const defaultAuthParams = {
    params: {
        route: 'dashboard'
    }
};
const Noop = ()=>null; //# sourceMappingURL=CoreAdminRoutes.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useResetErrorBoundaryOnLocationChange.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResetErrorBoundaryOnLocationChange",
    ()=>useResetErrorBoundaryOnLocationChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
;
;
const useResetErrorBoundaryOnLocationChange = (resetErrorBoundary)=>{
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const originalPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname !== originalPathname.current) {
            resetErrorBoundary();
        }
    }, [
        pathname,
        resetErrorBoundary
    ]);
}; //# sourceMappingURL=useResetErrorBoundaryOnLocationChange.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/Ready.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const styles = {
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Roboto", sans-serif'
    },
    main: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #00023b 0%, #00023b 50%, #313264 100%)',
        color: 'white',
        fontSize: '1.5em',
        fontWeight: 'bold'
    },
    secondary: {
        height: '20vh',
        background: '#e8e8e8',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    link: {
        textAlign: 'center',
        width: 150,
        display: 'block',
        textDecoration: 'none',
        color: 'black',
        opacity: 0.7
    },
    linkHovered: {
        opacity: 1
    },
    image: {
        display: 'block',
        margin: 'auto',
        width: 50
    },
    logo: {
        height: 100
    }
};
const Button = ({ img, label, href })=>{
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("a", {
        href: href,
        style: hovered ? {
            ...styles.link,
            ...styles.linkHovered
        } : styles.link,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("img", {
        src: img,
        alt: label,
        style: styles.image
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("br", null), label));
};
const __TURBOPACK__default__export__ = ()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: styles.root
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: styles.main
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("img", {
        style: styles.logo,
        src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTMxIDEzMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTMxIDEzMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyMjI0NTg7fQoJLnN0MXtmaWxsOiM1MTUzN0Q7fQoJLnN0MntmaWxsOiNBM0E0Qjk7fQoJLnN0M3tmaWxsOiMwMDAyM0I7fQoJLnN0NHtmaWxsOiNGRkZGRkY7fQoJLnN0NXtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KPC9zdHlsZT4KPHRpdGxlPkxvZ29fc29tYnJlX2FpPC90aXRsZT4KPGcgaWQ9IlJlY3RhbmdsZV81NiI+Cgk8Zz4KCQk8cmVjdCB4PSIxOS4xIiB5PSIxOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC41IC0wLjg2NiAwLjg2NiAwLjUgLTIzLjkyMjYgODkuNTQ2KSIgY2xhc3M9InN0MCIgd2lkdGg9IjkyLjkiIGhlaWdodD0iOTIuOSIvPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik04MywxMzAuM0wwLjgsODIuOUw0OC4yLDAuN2w4Mi4yLDQ3LjVMODMsMTMwLjN6IE0zLjUsODIuMWw3OC43LDQ1LjVsNDUuNS03OC43TDQ5LDMuNEwzLjUsODIuMXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjdGFuZ2xlXzU2LTIiPgoJPGc+CgkJPHJlY3QgeD0iMTkiIHk9IjE5LjEiIHRyYW5zZm9ybT0ibWF0cml4KDAuODY2IC0wLjUgMC41IDAuODY2IC0yMy45Nzc3IDQxLjUyNykiIGNsYXNzPSJzdDAiIHdpZHRoPSI5Mi45IiBoZWlnaHQ9IjkyLjkiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDcuOSwxMzFMMCw0OEw4My4xLDBsNDgsODMuMUw0Ny45LDEzMXogTTQuMSw0OS4xbDQ1LDc3LjlsNzcuOS00NUw4Miw0LjFMNC4xLDQ5LjF6Ii8+Cgk8L2c+CjwvZz4KPGcgaWQ9IlJlY3RhbmdsZV81Ni0zIj4KCTxnPgoJCTxyZWN0IHg9IjE5LjEiIHk9IjE5IiBjbGFzcz0ic3QzIiB3aWR0aD0iOTIuOSIgaGVpZ2h0PSI5Mi45Ii8+CgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTExNC41LDExNC41SDE2LjZWMTYuNWg5Ny45VjExNC41eiBNMjEuNiwxMDkuNWg4Ny45VjIxLjVIMjEuNlYxMDkuNXoiLz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmEiPgoJPGcgY2xhc3M9InN0NSI+CgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTU5LDg2LjdsLTYuNy0xOS4yaC0xLjJIMzguOXYxOS4yaC01LjZWMzguNWgxOC41YzMuNiwwLDYuMywwLjYsOC4xLDEuOGMxLjgsMS4yLDMsMi44LDMuNSw0LjgKCQkJYzAuNSwyLDAuOCw0LjYsMC44LDcuOGMwLDMuNS0wLjQsNi40LTEuMyw4LjdjLTAuOCwyLjMtMi42LDMuOS01LjMsNC44TDY1LDg2LjdINTl6IE01NS43LDYxLjZjMS4yLTAuNywyLTEuNywyLjQtMwoJCQljMC40LTEuMywwLjYtMy4yLDAuNi01LjZjMC0yLjUtMC4yLTQuMy0wLjUtNS42Yy0wLjMtMS4zLTEuMS0yLjItMi4zLTIuOWMtMS4yLTAuNy0zLTEtNS41LTFIMzguOXYxOS4xSDUwCgkJCUM1Mi41LDYyLjYsNTQuNCw2Mi4zLDU1LjcsNjEuNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNNzQuMyw4NWMtMS42LTEuNS0yLjUtNC4yLTIuNS04LjJjMC0yLjcsMC4zLTQuOCwwLjktNi4zYzAuNi0xLjUsMS42LTIuNiwzLTMuM2MxLjQtMC43LDMuNC0xLDYtMQoJCQljMS4zLDAsNS4xLDAuMSwxMS40LDAuM3YtMi40YzAtMi45LTAuMi01LTAuNy02LjJjLTAuNS0xLjItMS4zLTItMi42LTIuNGMtMS4yLTAuMy0zLjMtMC41LTYuMy0wLjVjLTEuMywwLTMsMC4xLTQuOSwwLjIKCQkJYy0yLDAuMS0zLjYsMC4zLTQuOCwwLjV2LTQuM2MzLjMtMC43LDcuMS0xLDExLjQtMWMzLjcsMCw2LjUsMC40LDguNCwxLjJjMS44LDAuOCwzLjEsMi4yLDMuOCw0LjFjMC43LDEuOSwxLDQuNywxLDguNHYyMi41aC00LjgKCQkJbC0wLjMtNWgtMC4zYy0wLjgsMi4yLTIuMiwzLjctNC4xLDQuNGMtMS45LDAuNy00LjEsMS4xLTYuNiwxLjFDNzguNiw4Ny4yLDc2LDg2LjUsNzQuMyw4NXogTTg5LjEsODJjMS4yLTAuNCwyLjItMS4yLDIuOC0yLjQKCQkJYzAuOS0xLjgsMS4zLTQuMywxLjMtNy4zdi0yaC0xMGMtMS43LDAtMywwLjItMy44LDAuNWMtMC44LDAuMy0xLjQsMC45LTEuNywxLjhjLTAuMywwLjktMC41LDIuMi0wLjUsNGMwLDEuOCwwLjIsMy4xLDAuNiwzLjkKCQkJYzAuNCwwLjgsMS4xLDEuNCwyLDEuOGMxLDAuMywyLjUsMC41LDQuNSwwLjVDODYuMiw4Mi42LDg3LjgsODIuNCw4OS4xLDgyeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=",
        alt: "react-admin logo"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("h1", null, "Welcome to React-admin"), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", null, "Your application is properly configured.", __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("br", null), "Now you can add a <Resource> as child of <Admin>.")), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        style: styles.secondary
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Button, {
        href: "https://marmelab.com/react-admin/documentation.html",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJCb3VuZGluZ19Cb3giPgoJPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGcgaWQ9IkZsYXQiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV8yIj4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMSw1Yy0xLjExLTAuMzUtMi4zMy0wLjUtMy41LTAuNWMtMS45NSwwLTQuMDUsMC40LTUuNSwxLjVjLTEuNDUtMS4xLTMuNTUtMS41LTUuNS0xLjVTMi40NSw0LjksMSw2djE0LjY1CgkJCWMwLDAuMjUsMC4yNSwwLjUsMC41LDAuNWMwLjEsMCwwLjE1LTAuMDUsMC4yNS0wLjA1QzMuMSwyMC40NSw1LjA1LDIwLDYuNSwyMGMxLjk1LDAsNC4wNSwwLjQsNS41LDEuNWMxLjM1LTAuODUsMy44LTEuNSw1LjUtMS41CgkJCWMxLjY1LDAsMy4zNSwwLjMsNC43NSwxLjA1YzAuMSwwLjA1LDAuMTUsMC4wNSwwLjI1LDAuMDVjMC4yNSwwLDAuNS0wLjI1LDAuNS0wLjVWNkMyMi40LDUuNTUsMjEuNzUsNS4yNSwyMSw1eiBNMywxOC41VjcKCQkJYzEuMS0wLjM1LDIuMy0wLjUsMy41LTAuNWMxLjM0LDAsMy4xMywwLjQxLDQuNSwwLjk5djExLjVDOS42MywxOC40MSw3Ljg0LDE4LDYuNSwxOEM1LjMsMTgsNC4xLDE4LjE1LDMsMTguNXogTTIxLDE4LjUKCQkJYy0xLjEtMC4zNS0yLjMtMC41LTMuNS0wLjVjLTEuMzQsMC0zLjEzLDAuNDEtNC41LDAuOTlWNy40OWMxLjM3LTAuNTksMy4xNi0wLjk5LDQuNS0wLjk5YzEuMiwwLDIuNCwwLjE1LDMuNSwwLjVWMTguNXoiLz4KCQk8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik0xMSw3LjQ5QzkuNjMsNi45MSw3Ljg0LDYuNSw2LjUsNi41QzUuMyw2LjUsNC4xLDYuNjUsMyw3djExLjVDNC4xLDE4LjE1LDUuMywxOCw2LjUsMTgKCQkJYzEuMzQsMCwzLjEzLDAuNDEsNC41LDAuOTlWNy40OXoiLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNy41LDEwLjVjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNlY5LjI0QzE5LjIxLDkuMDksMTguMzYsOSwxNy41LDljLTEuMjgsMC0yLjQ2LDAuMTYtMy41LDAuNDd2MS41NwoJCQlDMTQuOTksMTAuNjksMTYuMTgsMTAuNSwxNy41LDEwLjV6Ii8+CgkJPHBhdGggZD0iTTE3LjUsMTMuMTZjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNlYxMS45Yy0wLjc5LTAuMTUtMS42NC0wLjI0LTIuNS0wLjI0Yy0xLjI4LDAtMi40NiwwLjE2LTMuNSwwLjQ3djEuNTcKCQkJQzE0Ljk5LDEzLjM2LDE2LjE4LDEzLjE2LDE3LjUsMTMuMTZ6Ii8+CgkJPHBhdGggZD0iTTE3LjUsMTUuODNjMC44OCwwLDEuNzMsMC4wOSwyLjUsMC4yNnYtMS41MmMtMC43OS0wLjE1LTEuNjQtMC4yNC0yLjUtMC4yNGMtMS4yOCwwLTIuNDYsMC4xNi0zLjUsMC40N3YxLjU3CgkJCUMxNC45OSwxNi4wMiwxNi4xOCwxNS44MywxNy41LDE1LjgzeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=",
        label: "Documentation"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Button, {
        href: "https://github.com/marmelab/react-admin/tree/master/examples",
        img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHoiLz48L3N2Zz4=",
        label: "Examples"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Button, {
        href: "https://stackoverflow.com/questions/tagged/react-admin",
        img: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyNHB4IgoJIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJCb3VuZGluZ19Cb3giPgoJPHJlY3QgZmlsbD0ibm9uZSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ii8+CjwvZz4KPGcgaWQ9IkZsYXQiPgoJPGcgaWQ9InVpX3g1Rl9zcGVjX3g1Rl9oZWFkZXJfY29weV8yIj4KCTwvZz4KCTxnPgoJCTxjaXJjbGUgb3BhY2l0eT0iMC4zIiBjeD0iOSIgY3k9IjgiIHI9IjIiLz4KCQk8cGF0aCBvcGFjaXR5PSIwLjMiIGQ9Ik05LDE1Yy0yLjcsMC01LjgsMS4yOS02LDIuMDFMMywxOGgxMnYtMUMxNC44LDE2LjI5LDExLjcsMTUsOSwxNXoiLz4KCQk8cGF0aCBkPSJNMTYuNjcsMTMuMTNDMTguMDQsMTQuMDYsMTksMTUuMzIsMTksMTd2M2g0di0zQzIzLDE0LjgyLDE5LjQzLDEzLjUzLDE2LjY3LDEzLjEzeiIvPgoJCTxwYXRoIGQ9Ik0xNSwxMmMyLjIxLDAsNC0xLjc5LDQtNGMwLTIuMjEtMS43OS00LTQtNGMtMC40NywwLTAuOTEsMC4xLTEuMzMsMC4yNEMxNC41LDUuMjcsMTUsNi41OCwxNSw4cy0wLjUsMi43My0xLjMzLDMuNzYKCQkJQzE0LjA5LDExLjksMTQuNTMsMTIsMTUsMTJ6Ii8+CgkJPHBhdGggZD0iTTksMTJjMi4yMSwwLDQtMS43OSw0LTRjMC0yLjIxLTEuNzktNC00LTRTNSw1Ljc5LDUsOEM1LDEwLjIxLDYuNzksMTIsOSwxMnogTTksNmMxLjEsMCwyLDAuOSwyLDJjMCwxLjEtMC45LDItMiwyCgkJCVM3LDkuMSw3LDhDNyw2LjksNy45LDYsOSw2eiIvPgoJCTxwYXRoIGQ9Ik05LDEzYy0yLjY3LDAtOCwxLjM0LTgsNHYzaDE2di0zQzE3LDE0LjM0LDExLjY3LDEzLDksMTN6IE0xNSwxOEgzbDAtMC45OUMzLjIsMTYuMjksNi4zLDE1LDksMTVzNS44LDEuMjksNiwyVjE4eiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=",
        label: "Community"
    })));
 //# sourceMappingURL=Ready.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/Ready.js [app-ssr] (ecmascript) <export default as Ready>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Ready",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$Ready$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$Ready$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/Ready.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/core/DefaultTitleContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultTitleContext",
    ()=>DefaultTitleContext,
    "DefaultTitleContextProvider",
    ()=>DefaultTitleContextProvider,
    "useDefaultTitle",
    ()=>useDefaultTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DefaultTitleContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])('React Admin');
const DefaultTitleContextProvider = DefaultTitleContext.Provider;
const useDefaultTitle = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DefaultTitleContext); //# sourceMappingURL=DefaultTitleContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminUI.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreAdminUI",
    ()=>CoreAdminUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminRoutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminRoutes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useResetErrorBoundaryOnLocationChange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useResetErrorBoundaryOnLocationChange.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$Ready$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ready$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/Ready.js [app-ssr] (ecmascript) <export default as Ready>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/DefaultTitleContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const DefaultLayout = ({ children })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, children);
const DefaultError = ({ error, errorInfo, resetErrorBoundary })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useResetErrorBoundaryOnLocationChange$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResetErrorBoundaryOnLocationChange"])(resetErrorBoundary);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("h1", null, "Error"), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("pre", null, error.message, errorInfo?.componentStack));
};
const CoreAdminUI = (props)=>{
    const [errorInfo, setErrorInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const { Route, Routes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    const { authCallbackPage: LoginCallbackPage = false, catchAll = Noop, children, dashboard, disableTelemetry = false, error: ErrorComponent = DefaultError, layout = DefaultLayout, loading = Noop, loginPage: LoginPage = false, ready = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$Ready$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ready$3e$__["Ready"], requireAuth = false, title = 'React Admin', authenticationError = Noop, accessDenied = Noop } = props;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const img = undefined;
    }, [
        disableTelemetry
    ]);
    const handleError = (error, info)=>setErrorInfo(info);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DefaultTitleContextProvider"], {
        value: title
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        onError: handleError,
        fallbackRender: ({ error, resetErrorBoundary })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
                style: {
                    minHeight: '100vh'
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ErrorComponent, {
                error: error,
                errorInfo: errorInfo,
                resetErrorBoundary: resetErrorBoundary
            }))
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, LoginPage !== false && LoginPage !== true ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "/login",
        element: createOrGetElement(LoginPage)
    }) : null, LoginCallbackPage !== false && LoginCallbackPage !== true ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "/auth-callback",
        element: createOrGetElement(LoginCallbackPage)
    }) : null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "/*",
        element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminRoutes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CoreAdminRoutes"], {
            catchAll: catchAll,
            dashboard: dashboard,
            layout: layout,
            loading: loading,
            requireAuth: requireAuth,
            ready: ready,
            authenticationError: authenticationError,
            accessDenied: accessDenied
        }, children)
    }))));
};
const createOrGetElement = (el)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(el) ? el : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(el);
const Noop = ()=>null; //# sourceMappingURL=CoreAdminUI.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/substituteTokens.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Replace tokens by their value in the given string
 *
 * @param {string} template The template with interpolation tokens, e.g. 'Hello, %{name}'
 * @param {object} data The data to interpolate, e.g. { name: 'John' }
 * @returns {string} The interpolated string, e.g. 'Hello, John'
 */ __turbopack_context__.s([
    "substituteTokens",
    ()=>substituteTokens
]);
const substituteTokens = (template, data)=>template && data ? String.prototype.replace.call(template, defaultTokenRegex, function(expression, argument) {
        if (!data.hasOwnProperty(argument) || data[argument] == null) {
            return expression;
        }
        return data[argument];
    }) : template;
// tokens are like 'Hello, %{name}'
const defaultTokenRegex = /%\{(.*?)\}/g; //# sourceMappingURL=substituteTokens.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/I18nContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContext",
    ()=>I18nContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$substituteTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/substituteTokens.js [app-ssr] (ecmascript)");
;
;
const defaultI18nProvider = {
    translate: (key, options)=>options?._ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$substituteTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substituteTokens"])(options._, options) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$substituteTokens$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["substituteTokens"])(key, options),
    changeLocale: ()=>Promise.resolve(),
    getLocale: ()=>'en'
};
const I18nContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(defaultI18nProvider);
I18nContext.displayName = 'I18nContext'; //# sourceMappingURL=I18nContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useI18nProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useI18nProvider",
    ()=>useI18nProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/I18nContext.js [app-ssr] (ecmascript)");
;
;
const useI18nProvider = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"]); //# sourceMappingURL=useI18nProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useLocales.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocales",
    ()=>useLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useI18nProvider.js [app-ssr] (ecmascript)");
;
;
const useLocales = (options)=>{
    const i18nProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18nProvider"])();
    const locales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>i18nProvider?.getLocales ? i18nProvider?.getLocales() : [], [
        i18nProvider
    ]);
    return options?.locales ?? locales;
}; //# sourceMappingURL=useLocales.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslate",
    ()=>useTranslate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useI18nProvider.js [app-ssr] (ecmascript)");
;
;
const useTranslate = ()=>{
    const i18nProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18nProvider"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, options)=>i18nProvider.translate(key, options), // update the hook each time the locale changes
    [
        i18nProvider
    ]);
    return i18nProvider ? translate : identity;
};
const identity = (key)=>key; //# sourceMappingURL=useTranslate.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStoreContext.js [app-ssr] (ecmascript)");
;
;
;
;
function useStore(key, defaultValue) {
    const { getItem, setItem, subscribe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreContext"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getItem(key, defaultValue));
    // subscribe to changes on this key, and change the state when they happen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedValue = getItem(key, defaultValue);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value, storedValue)) {
            setValue(storedValue);
        }
        const unsubscribe = subscribe(key, (newValue)=>{
            setValue(typeof newValue === 'undefined' ? defaultValue : newValue);
        });
        return ()=>unsubscribe();
    }, [
        key,
        subscribe,
        defaultValue,
        getItem,
        value
    ]);
    const set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])((valueParam, runtimeDefaultValue)=>{
        const newValue = typeof valueParam === 'function' ? valueParam(value) : valueParam;
        // we only set the value in the Store;
        // the value in the local state will be updated
        // by the useEffect during the next render
        setItem(key, typeof newValue === 'undefined' ? typeof runtimeDefaultValue === 'undefined' ? defaultValue : runtimeDefaultValue : newValue);
    });
    return [
        value,
        set
    ];
}
;
 //# sourceMappingURL=useStore.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useLoading.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLoading",
    ()=>useLoading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
;
;
const useLoading = ()=>{
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const mountedRef = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const isFetchingRef = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(client.isFetching() > 0);
    const isMutatingRef = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(client.isMutating() > 0);
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(isFetchingRef.current || isMutatingRef.current);
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        mountedRef.current = true;
        const unsubscribeQueryCache = client.getQueryCache().subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(()=>{
            if (mountedRef.current) {
                isFetchingRef.current = client.isFetching() > 0;
                setIsLoading(isFetchingRef.current || isMutatingRef.current);
            }
        }));
        const unsubscribeMutationCache = client.getMutationCache().subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(()=>{
            if (mountedRef.current) {
                isMutatingRef.current = client.isMutating() > 0;
                setIsLoading(isFetchingRef.current || isMutatingRef.current);
            }
        }));
        return ()=>{
            mountedRef.current = false;
            unsubscribeQueryCache();
            unsubscribeMutationCache();
        };
    }, [
        client
    ]);
    return isLoading;
}; //# sourceMappingURL=useLoading.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useRefresh.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRefresh",
    ()=>useRefresh
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
;
;
const useRefresh = ()=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        queryClient.invalidateQueries();
    }, [
        queryClient
    ]);
}; //# sourceMappingURL=useRefresh.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript) <export default as useAuthProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useGetIdentity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useGetIdentity",
    ()=>useGetIdentity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
const defaultIdentity = {
    id: ''
};
const defaultQueryParams = {
    staleTime: 5 * 60 * 1000
};
const useGetIdentity = (options = defaultQueryParams)=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { onSuccess, onError, onSettled, ...queryOptions } = options;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'getIdentity'
        ],
        queryFn: async ({ signal })=>{
            if (authProvider && typeof authProvider.getIdentity === 'function') {
                return authProvider.getIdentity({
                    signal
                });
            } else {
                return defaultIdentity;
            }
        },
        ...queryOptions
    });
    const onSuccessEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSuccess ?? noop);
    const onErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onError ?? noop);
    const onSettledEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSettled ?? noop);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.data === undefined || result.isFetching) return;
        onSuccessEvent(result.data);
    }, [
        onSuccessEvent,
        result.data,
        result.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.error == null || result.isFetching) return;
        onErrorEvent(result.error);
    }, [
        onErrorEvent,
        result.error,
        result.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.status === 'pending' || result.isFetching) return;
        onSettledEvent(result.data, result.error);
    }, [
        onSettledEvent,
        result.data,
        result.error,
        result.status,
        result.isFetching
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ...result,
            identity: result.data
        }), [
        result
    ]);
};
const __TURBOPACK__default__export__ = useGetIdentity;
const noop = ()=>{}; //# sourceMappingURL=useGetIdentity.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/UserMenuContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenuContext",
    ()=>UserMenuContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const UserMenuContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined); //# sourceMappingURL=UserMenuContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/UserMenuContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenuContextProvider",
    ()=>UserMenuContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$UserMenuContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/UserMenuContext.js [app-ssr] (ecmascript)");
;
;
const UserMenuContextProvider = ({ children, value })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$UserMenuContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserMenuContext"].Provider, {
        value: value
    }, children); //# sourceMappingURL=UserMenuContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript) <export default as useLogout>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogout",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useLocaleState.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocaleState",
    ()=>useLocaleState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useI18nProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
;
;
;
const useLocaleState = ()=>{
    const i18nProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useI18nProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18nProvider"])();
    const defaultLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>i18nProvider.getLocale(), [
        i18nProvider
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('locale', defaultLocale);
}; //# sourceMappingURL=useLocaleState.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useLocale.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocaleState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useLocaleState.js [app-ssr] (ecmascript)");
;
const useLocale = ()=>{
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocaleState$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocaleState"])();
    return locale;
}; //# sourceMappingURL=useLocale.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkBase",
    ()=>LinkBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
;
;
const LinkBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](provider.Link, {
        ref: ref,
        ...props
    });
});
LinkBase.displayName = 'LinkBase'; //# sourceMappingURL=LinkBase.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useMatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMatch",
    ()=>useMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
const useMatch = (pattern)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return provider.useMatch(pattern);
}; //# sourceMappingURL=useMatch.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetResourceLabel",
    ()=>useGetResourceLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/inflection/lib/inflection.js [app-ssr] (ecmascript)");
;
;
;
const useGetResourceLabel = ()=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    const definitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    return (resource, count = 2)=>{
        const resourceDefinition = definitions[resource];
        const label = translate(`resources.${resource}.name`, {
            smart_count: count,
            _: resourceDefinition && resourceDefinition.options && resourceDefinition.options.label ? translate(resourceDefinition.options.label, {
                smart_count: count,
                _: resourceDefinition.options.label
            }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["inflect"])(resource, count))
        });
        return label;
    };
}; //# sourceMappingURL=useGetResourceLabel.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/ResourceContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceContext",
    ()=>ResourceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ResourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined); //# sourceMappingURL=ResourceContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceContext",
    ()=>useResourceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceContext.js [app-ssr] (ecmascript)");
;
;
const useResourceContext = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceContext"]);
    return props && props.resource || context;
}; //# sourceMappingURL=useResourceContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanAccess",
    ()=>useCanAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
const useCanAccess = (params)=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(params);
    if (!resource) {
        throw new Error('useCanAccess must be used inside a <Resource> component or provide a resource prop');
    }
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(params);
    const { record: _record, ...restParams } = params;
    const authProviderHasCanAccess = !!authProvider?.canAccess;
    const queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'canAccess',
            {
                ...restParams,
                recordId: record?.id,
                resource
            }
        ],
        queryFn: async ({ signal })=>{
            if (!authProvider || !authProvider.canAccess) {
                return true;
            }
            return authProvider.canAccess({
                ...params,
                record,
                resource,
                signal: authProvider.supportAbortSignal ? signal : undefined
            });
        },
        enabled: authProviderHasCanAccess,
        ...params
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Don't check for the authProvider or authProvider.canAccess method in the useMemo
        // to avoid unnecessary re-renders
        return {
            ...queryResult,
            canAccess: queryResult.data
        };
    }, [
        queryResult
    ]);
    return authProviderHasCanAccess ? result : emptyQueryObserverResult;
};
const emptyQueryObserverResult = {
    canAccess: true,
    data: true,
    dataUpdatedAt: 0,
    error: null,
    errorUpdatedAt: 0,
    errorUpdateCount: 0,
    failureCount: 0,
    failureReason: null,
    fetchStatus: 'idle',
    isError: false,
    isInitialLoading: false,
    isLoading: false,
    isLoadingError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isPaused: false,
    isPlaceholderData: false,
    isPending: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    status: 'success',
    refetch: ()=>Promise.resolve(emptyQueryObserverResult)
}; //# sourceMappingURL=useCanAccess.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-ssr] (ecmascript) <export default as warning>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "warning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/PreferenceKeyContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreferenceKeyContext",
    ()=>PreferenceKeyContext,
    "PreferenceKeyContextProvider",
    ()=>PreferenceKeyContextProvider,
    "usePreferenceKey",
    ()=>usePreferenceKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const PreferenceKeyContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])('');
const PreferenceKeyContextProvider = ({ value = '', children })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PreferenceKeyContext.Provider, {
        value: value
    }, children);
const usePreferenceKey = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PreferenceKeyContext);
}; //# sourceMappingURL=PreferenceKeyContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/usePreference.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreference",
    ()=>usePreference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferenceKeyContext.js [app-ssr] (ecmascript)");
;
;
function usePreference(key = '', defaultValue = undefined) {
    const preferenceKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferenceKey"])();
    if (!preferenceKey) {
        throw new Error("usePreference cannot be used outside of a Configurable component. Did you forget to wrap your component with <Configurable>? If you don't want to use Configurable, you can use the useStore hook instead.");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(preferenceKey && key ? `${preferenceKey}.${key}` : preferenceKey ?? key, defaultValue);
}
;
 //# sourceMappingURL=usePreference.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferenceInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreferenceInput",
    ()=>usePreferenceInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreference.js [app-ssr] (ecmascript)");
;
;
const usePreferenceInput = (key, defaultValue)=>{
    const [valueFromStore, setValueFromStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreference$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreference"])(key, defaultValue);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(valueFromStore);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setValue(valueFromStore || defaultValue);
    }, [
        valueFromStore,
        defaultValue
    ]);
    const onChange = (event)=>{
        setValue(event.target.value === '' ? defaultValue : event.target.value);
    };
    const onBlur = ()=>{
        setValueFromStore(value);
    };
    const onKeyDown = (event)=>{
        if (event.key === 'Enter') {
            setValueFromStore(value);
            const form = event.target.form;
            if (form) {
                const index = [
                    ...form
                ].indexOf(event.target);
                form.elements[index + 1]?.focus();
            }
            event.preventDefault();
        }
    };
    return {
        value,
        onChange,
        onBlur,
        onKeyDown
    };
}; //# sourceMappingURL=usePreferenceInput.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/PreferencesEditorContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreferencesEditorContext",
    ()=>PreferencesEditorContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const PreferencesEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined); //# sourceMappingURL=PreferencesEditorContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferencesEditor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePreferencesEditor",
    ()=>usePreferencesEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferencesEditorContext.js [app-ssr] (ecmascript)");
;
;
const usePreferencesEditor = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreferencesEditorContext"]);
    if (!context) {
        throw new Error('usePreferencesEditor must be used within a PreferencesEditorContextProvider');
    }
    return context;
}; //# sourceMappingURL=usePreferencesEditor.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/store/useRemoveItemsFromStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRemoveItemsFromStore",
    ()=>useRemoveItemsFromStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStoreContext.js [app-ssr] (ecmascript)");
;
;
const useRemoveItemsFromStore = (hookTimeKeyPrefix)=>{
    const { removeItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((keyPrefix)=>{
        if (typeof keyPrefix === 'undefined' && typeof hookTimeKeyPrefix === 'undefined') {
            throw new Error('You must provide a key to remove an item from the store');
        }
        // @ts-ignore
        return removeItems(keyPrefix ?? hookTimeKeyPrefix);
    }, [
        removeItems,
        hookTimeKeyPrefix
    ]);
}; //# sourceMappingURL=useRemoveItemsFromStore.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/useSetInspectorTitle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSetInspectorTitle",
    ()=>useSetInspectorTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferencesEditor.js [app-ssr] (ecmascript)");
;
;
const useSetInspectorTitle = (title, options)=>{
    const preferencesEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePreferencesEditor"])();
    if (!preferencesEditorContext) {
        throw new Error('useSetInspectorTitle cannot be called outside of a PreferencesEditorContext');
    }
    const { setTitle } = preferencesEditorContext;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTitle(title, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        title,
        JSON.stringify(options),
        setTitle
    ]);
}; //# sourceMappingURL=useSetInspectorTitle.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeepCompareEffect",
    ()=>useDeepCompareEffect,
    "useIsMounted",
    ()=>useIsMounted,
    "usePrevious",
    ()=>usePrevious,
    "useSafeSetState",
    ()=>useSafeSetState,
    "useTimeout",
    ()=>useTimeout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)");
;
;
function useSafeSetState(initialState) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mountedRef.current = true;
        return ()=>{
            mountedRef.current = false;
        };
    }, []);
    const safeSetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((args)=>{
        if (mountedRef.current) {
            return setState(args);
        }
    }, [
        mountedRef,
        setState
    ]);
    return [
        state,
        safeSetState
    ];
}
function usePrevious(value) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ref.current = value;
    });
    return ref.current;
}
function useDeepCompareEffect(callback, inputs) {
    const cleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(previousInputs, inputs)) {
            cleanupRef.current = callback();
        }
        return cleanupRef.current;
    });
    const previousInputs = usePrevious(inputs);
}
function useTimeout(ms = 0, key = '') {
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setReady(false);
        const timer = setTimeout(()=>{
            setReady(true);
        }, ms);
        return ()=>{
            clearTimeout(timer);
        };
    }, [
        key,
        ms,
        setReady
    ]);
    return ready;
}
function useIsMounted() {
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isMounted.current = true;
        return ()=>{
            isMounted.current = false;
        };
    }, []);
    return isMounted;
} //# sourceMappingURL=hooks.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/CloseNotificationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseNotificationContext",
    ()=>CloseNotificationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const CloseNotificationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null); //# sourceMappingURL=CloseNotificationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undoableEventEmitter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
;
const __TURBOPACK__default__export__ = new __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]();
 //# sourceMappingURL=undoableEventEmitter.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undoableEventEmitter.js [app-ssr] (ecmascript) <export default as undoableEventEmitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "undoableEventEmitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undoableEventEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undoableEventEmitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undoableEventEmitter.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/NotificationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationContext",
    ()=>NotificationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const NotificationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    notifications: [],
    addNotification: ()=>{},
    takeNotification: ()=>{},
    resetNotifications: ()=>{},
    setNotifications: ()=>{}
}); //# sourceMappingURL=NotificationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/useNotificationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotificationContext",
    ()=>useNotificationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/NotificationContext.js [app-ssr] (ecmascript)");
;
;
const useNotificationContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationContext"]); //# sourceMappingURL=useNotificationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/TakeUndoableMutationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TakeUndoableMutationContext",
    ()=>TakeUndoableMutationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const TakeUndoableMutationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(()=>{}); //# sourceMappingURL=TakeUndoableMutationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/useTakeUndoableMutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTakeUndoableMutation",
    ()=>useTakeUndoableMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$TakeUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/TakeUndoableMutationContext.js [app-ssr] (ecmascript)");
;
;
const useTakeUndoableMutation = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$TakeUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TakeUndoableMutationContext"]); //# sourceMappingURL=useTakeUndoableMutation.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useCheckAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheckAuth",
    ()=>useCheckAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const useCheckAuth = ()=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    const loginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDoubleSlashes"])(`${basename}/${__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAuthParams"].loginUrl}`);
    const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (params = {}, logoutOnFailure = true, redirectTo = loginUrl)=>{
        // The authProvider is optional in react-admin
        if (!authProvider) {
            return checkAuthWithoutAuthProvider();
        }
        try {
            return await authProvider.checkAuth(params);
        } catch (error) {
            if (logoutOnFailure) {
                logout({}, error && error.redirectTo != null ? error.redirectTo : redirectTo);
                const shouldSkipNotify = error && error.message === false;
                !shouldSkipNotify && notify(getErrorMessage(error, 'ra.auth.auth_check_error'), {
                    type: 'error'
                });
            }
            throw error;
        }
    }, [
        authProvider,
        logout,
        notify,
        loginUrl
    ]);
    return checkAuth;
};
const checkAuthWithoutAuthProvider = async ()=>undefined;
const getErrorMessage = (error, defaultMessage)=>typeof error === 'string' ? error : typeof error === 'undefined' || !error.message ? defaultMessage : error.message; //# sourceMappingURL=useCheckAuth.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormGroupsContext",
    ()=>FormGroupsContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FormGroupsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
FormGroupsContext.displayName = 'FormGroupsContext'; //# sourceMappingURL=FormGroupsContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormGroupsProvider",
    ()=>FormGroupsProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsContext.js [app-ssr] (ecmascript)");
;
;
;
const FormGroupsProvider = ({ children })=>{
    const formGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const subscribers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const formContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            /**
         * Register a subscriber function for the specified group. The subscriber
         * will be called whenever the group content changes (fields added or removed).
         */ subscribe: (group, subscriber)=>{
                if (!subscribers.current[group]) {
                    subscribers.current[group] = [];
                }
                subscribers.current[group].push(subscriber);
                return ()=>{
                    subscribers.current[group] = subscribers.current[group].filter((s)=>s !== subscriber);
                };
            },
            getGroupFields: (name)=>formGroups.current[name] || [],
            registerGroup: (name)=>{
                formGroups.current[name] = formGroups.current[name] || [];
            },
            unregisterGroup: (name)=>{
                delete formGroups[name];
            },
            registerField: (source, group)=>{
                if (group != null) {
                    if (!(formGroups.current[group] || []).includes(source)) {
                        formGroups.current[group] = [
                            ...formGroups.current[group] || [],
                            source
                        ];
                        // Notify subscribers that the group fields have changed
                        if (subscribers.current[group]) {
                            subscribers.current[group].forEach((subscriber)=>subscriber());
                        }
                    }
                }
            },
            unregisterField: (source, group)=>{
                if (group != null) {
                    if (!formGroups.current[group]) {
                        console.warn(`Invalid form group ${group}`);
                    } else {
                        const fields = new Set(formGroups.current[group]);
                        fields.delete(source);
                        formGroups.current[group] = Array.from(fields);
                        // Notify subscribers that the group fields have changed
                        if (subscribers.current[group]) {
                            subscribers.current[group].forEach((subscriber)=>subscriber());
                        }
                    }
                }
            }
        }), []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormGroupsContext"].Provider, {
        value: formContextValue
    }, children);
}; //# sourceMappingURL=FormGroupsProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/record/OptionalRecordContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionalRecordContextProvider",
    ()=>OptionalRecordContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/RecordContext.js [app-ssr] (ecmascript)");
;
;
const OptionalRecordContextProvider = ({ value, children })=>value ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RecordContextProvider"], {
        value: value
    }, children) : children; //# sourceMappingURL=OptionalRecordContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/SourceContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SourceContext",
    ()=>SourceContext,
    "SourceContextProvider",
    ()=>SourceContextProvider,
    "useOptionalSourceContext",
    ()=>useOptionalSourceContext,
    "useSourceContext",
    ()=>useSourceContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const SourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
SourceContext.displayName = 'SourceContext';
const defaultContextValue = {
    getSource: (source)=>source,
    getLabel: (source)=>source
};
const SourceContextProvider = SourceContext.Provider;
const useSourceContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SourceContext);
    if (!context) {
        return defaultContextValue;
    }
    return context;
};
const useOptionalSourceContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SourceContext); //# sourceMappingURL=SourceContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useCanBlock.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanBlock",
    ()=>useCanBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
const useCanBlock = ()=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return provider.useCanBlock();
}; //# sourceMappingURL=useCanBlock.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useBlocker.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBlocker",
    ()=>useBlocker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
const useBlocker = (shouldBlock)=>{
    const provider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return provider.useBlocker(shouldBlock);
}; //# sourceMappingURL=useBlocker.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/useWarnWhenUnsavedChanges.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWarnWhenUnsavedChanges",
    ()=>useWarnWhenUnsavedChanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBlocker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBlocker.js [app-ssr] (ecmascript)");
;
;
;
;
const useWarnWhenUnsavedChanges = (enable, formRootPathname, control)=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { isSubmitSuccessful, dirtyFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormState"])(control ? {
        control
    } : undefined);
    const isDirty = Object.keys(dirtyFields).length > 0;
    const [shouldNotify, setShouldNotify] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shouldNotBlock = !enable || !isDirty || isSubmitSuccessful;
    const blocker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBlocker$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlocker"])(({ currentLocation, nextLocation })=>{
        if (shouldNotBlock) return false;
        // Also check if the new location is inside the form
        const initialLocation = formRootPathname || currentLocation.pathname;
        const newLocationIsInsideCurrentLocation = nextLocation.pathname.startsWith(initialLocation);
        const newLocationIsShowView = nextLocation.pathname.startsWith(`${initialLocation}/show`);
        const newLocationIsInsideForm = newLocationIsInsideCurrentLocation && !newLocationIsShowView;
        if (newLocationIsInsideForm) return false;
        return true;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (blocker.state === 'blocked') {
            // Corner case: the blocker might be triggered by a redirect in the onSuccess side effect,
            // happening during the same tick the form is reset after a successful save.
            // In that case, the blocker will block but shouldNotBlock will be true one tick after.
            // If we are in that case, we can proceed immediately.
            if (shouldNotBlock) {
                blocker.proceed();
                return;
            }
            setShouldNotify(true);
        }
    // This effect should only run when the blocker state changes, not when shouldNotBlock changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        blocker.state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (shouldNotify) {
            const shouldProceed = window.confirm(translate('ra.message.unsaved_changes'));
            if (shouldProceed) {
                blocker.proceed && blocker.proceed();
            } else {
                blocker.reset && blocker.reset();
            }
        }
        setShouldNotify(false);
    // Can't use blocker in the dependency array because it is not stable across rerenders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        shouldNotify,
        translate
    ]);
    // This effect handles document navigation, e.g. closing the tab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const beforeunload = (e)=>{
            // Invoking event.preventDefault() will trigger a warning dialog when the user closes or navigates the tab
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#examples
            e.preventDefault();
            // Included for legacy support, e.g. Chrome/Edge < 119
            e.returnValue = true;
        };
        if (shouldNotBlock) {
            return;
        }
        window.addEventListener('beforeunload', beforeunload);
        return ()=>{
            window.removeEventListener('beforeunload', beforeunload);
        };
    }, [
        shouldNotBlock
    ]);
}; //# sourceMappingURL=useWarnWhenUnsavedChanges.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/WarnWhenUnsavedChanges.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WarnWhenUnsavedChanges",
    ()=>WarnWhenUnsavedChanges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useWarnWhenUnsavedChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useWarnWhenUnsavedChanges.js [app-ssr] (ecmascript)");
;
const WarnWhenUnsavedChanges = ({ enable = true, formRootPathName, formControl })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useWarnWhenUnsavedChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWarnWhenUnsavedChanges"])(enable, formRootPathName, formControl);
    return null;
}; //# sourceMappingURL=WarnWhenUnsavedChanges.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/SaveContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveContext",
    ()=>SaveContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const SaveContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({}); //# sourceMappingURL=SaveContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/useSaveContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaveContext",
    ()=>useSaveContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$SaveContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/SaveContext.js [app-ssr] (ecmascript)");
;
;
const useSaveContext = (_props)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$SaveContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SaveContext"]);
}; //# sourceMappingURL=useSaveContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/getFormInitialValues.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getFormInitialValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/merge.js [app-ssr] (ecmascript)");
;
function getFormInitialValues(defaultValues, record) {
    const finalInitialValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, getValues(defaultValues, record), record);
    return finalInitialValues;
}
function getValues(values, record) {
    if (typeof values === 'object') {
        return values;
    }
    if (typeof values === 'function') {
        return values(record);
    }
    return {};
} //# sourceMappingURL=getFormInitialValues.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/validation/getSimpleValidationResolver.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Convert a simple validation function that returns an object matching the form shape with errors
 * to a validation resolver compatible with react-hook-form.
 *
 * @example
 * const validate = (values: { username: string }) => {
 *     if (values.username == null || values.username.trim() === '') {
 *         return { username: 'Required' };
 *     }
 * };
 *
 * const validationResolver = getSimpleValidationResolver(validate);
 *
 * const UserForm = () => (
 *     <Form
 *         defaultValues={{ username: 'John' }}
 *         validationResolver={validationResolver}
 *     >
 *         <TextField source="username" />
 *     </Form>
 * );
 */ __turbopack_context__.s([
    "getSimpleValidationResolver",
    ()=>getSimpleValidationResolver
]);
const getSimpleValidationResolver = (validate)=>async (data)=>{
        const errors = await validate(data);
        // If there are no errors, early return the form values
        if (!errors || isEmptyObject(errors)) {
            return {
                values: data,
                errors: {}
            };
        }
        // Else, we return an error object shaped like errors but having for each leaf
        // `type: 'manual'` and a `message` prop like react-hook-form expects it
        const transformedErrors = transformErrorFields(errors);
        // Sometimes we still need to transform the error object to realize there are actually
        // no errors in it.
        //   e.g. with an ArrayInput we can get something like: `{backlinks: [{}, {}]}`
        // If, after transformation, there are no errors, we return the form values
        if (!transformedErrors || isEmptyObject(transformedErrors)) {
            return {
                values: data,
                errors: {}
            };
        }
        // Else return the errors and no values
        return {
            values: {},
            errors: transformedErrors
        };
    };
const transformErrorFields = (error)=>{
    return Object.keys(error).reduce((acc, field)=>{
        // Handle arrays
        if (Array.isArray(error[field])) {
            let arrayHasErrors = false;
            const transformedArrayErrors = error[field].map((item)=>{
                if (!isEmptyObject(item)) {
                    arrayHasErrors = true;
                }
                return transformErrorFields(item);
            });
            if (!arrayHasErrors) {
                return acc;
            }
            return {
                ...acc,
                [field]: transformedArrayErrors
            };
        }
        // Handle objects
        if (isEmptyObject(error[field])) {
            return acc;
        }
        if (typeof error[field] === 'object' && !isRaTranslationObj(error[field])) {
            return {
                ...acc,
                [field]: transformErrorFields(error[field])
            };
        }
        // Handle leaf (either primary type or RaTranslationObj)
        return {
            ...acc,
            [field]: addTypeAndMessage(error[field])
        };
    }, {});
};
const addTypeAndMessage = (error)=>({
        type: 'manual',
        message: isRaTranslationObj(error) ? error : {
            message: error
        }
    });
const isRaTranslationObj = (obj)=>Object.keys(obj).includes('message') && Object.keys(obj).includes('args');
const isEmptyObject = (obj)=>obj == null || Object.getOwnPropertyNames(obj).length === 0; //# sourceMappingURL=getSimpleValidationResolver.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/validation/setSubmissionErrors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This internal function is used to convert an object matching the form shape with errors to a
 * format compatible with react-hook-form. It's used to handle submission errors. Only useful when
 * you are implementing a custom form without leveraging our Form component.
 *
 * @example
 * const MyForm = () => {
 *     const { register, handleSubmit, setError } = useForm();
 *     const onSubmit = data => {
 *         return saveAsync(data).catch(error => setSubmissionErrors(error.body.details));
 *     };
 *
 *     return (
 *         <form onSubmit={handleSubmit(onSubmit)}>
 *             ...
 *         </form>
 *     );
 * };
 */ __turbopack_context__.s([
    "setSubmissionErrors",
    ()=>setSubmissionErrors
]);
const setSubmissionErrors = (errors, setError)=>{
    const setErrorFromObject = (errors, rootPath)=>{
        Object.entries(errors).forEach(([name, error])=>{
            if (typeof error === 'object') {
                setErrorFromObject(error, `${rootPath}${name}.`);
                return;
            }
            setError(`${rootPath}${name}`, {
                type: 'server',
                message: error.toString()
            });
        });
    };
    setErrorFromObject(errors, '');
}; //# sourceMappingURL=setSubmissionErrors.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/validation/useNotifyIsFormInvalid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNotifyIsFormInvalid",
    ()=>useNotifyIsFormInvalid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
;
;
;
const useNotifyIsFormInvalid = (control, enabled = true)=>{
    const { submitCount, errors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormState"])(control ? {
        control
    } : undefined);
    const submitCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(submitCount);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Checking the submit count allows us to only display the notification after users
        // tried to submit
        if (submitCount > submitCountRef.current && enabled) {
            submitCountRef.current = submitCount;
            if (Object.keys(errors).length > 0) {
                const serverError = typeof errors.root?.serverError?.message === 'string' ? errors.root.serverError.message : undefined;
                notify(serverError || 'ra.message.invalid_form', {
                    type: 'error'
                });
            }
        }
    }, [
        errors,
        submitCount,
        notify,
        enabled
    ]);
}; //# sourceMappingURL=useNotifyIsFormInvalid.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/sanitizeEmptyValues.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Remove empty strings from form state
 *
 * @example
 * sanitizeEmptyValues({ foo: '', bar: 'baz' }) // { bar: 'baz' }
 */ __turbopack_context__.s([
    "sanitizeEmptyValues",
    ()=>sanitizeEmptyValues
]);
const sanitizeEmptyValues = (values, record = {})=>{
    const sanitizedValues = {};
    Object.keys(values).forEach((key)=>{
        if (values[key] == null || values[key] === '') {
            if (record.hasOwnProperty(key)) {
                // user has emptied a field, make the value null
                sanitizedValues[key] = null;
            } else {
            // user has emptied a field, but the initial value was undefined
            // so we don't include it in the sanitized values
            }
        } else {
            // this is a non-empty value, so we include it in the sanitized values
            sanitizedValues[key] = values[key];
        }
    });
    return sanitizedValues;
}; //# sourceMappingURL=sanitizeEmptyValues.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/useRecordFromLocation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRecordFromLocation",
    ()=>getRecordFromLocation,
    "useRecordFromLocation",
    ()=>useRecordFromLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/query-string/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
;
;
;
;
const useRecordFromLocation = (props = {})=>{
    const { searchSource, stateSource } = props;
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const [recordFromLocation, setRecordFromLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getRecordFromLocation(location, {
            stateSource,
            searchSource
        }));
    // To avoid having the form resets when the location changes but the final record is the same
    // This is needed for forms such as TabbedForm or WizardForm that may change the location for their sections
    const previousRecordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(recordFromLocation);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newRecordFromLocation = getRecordFromLocation(location, {
            stateSource,
            searchSource
        });
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(newRecordFromLocation, previousRecordRef.current)) {
            previousRecordRef.current = newRecordFromLocation;
            setRecordFromLocation(newRecordFromLocation);
        }
    }, [
        location,
        stateSource,
        searchSource
    ]);
    return recordFromLocation;
};
const getRecordFromLocation = ({ state, search }, { searchSource = 'source', stateSource = 'record' } = {})=>{
    if (state && state[stateSource]) {
        return state[stateSource];
    }
    if (search) {
        try {
            const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(search);
            const source = searchParams[searchSource];
            if (source) {
                if (Array.isArray(source)) {
                    console.error(`Failed to parse location ${searchSource} parameter '${search}'. To pre-fill some fields in the Create form, pass a stringified ${searchSource} parameter (e.g. '?${searchSource}={"title":"foo"}')`);
                    return null;
                }
                return JSON.parse(source);
            }
        } catch (e) {
            console.error(`Failed to parse location ${searchSource} parameter '${search}'. To pre-fill some fields in the Create form, pass a stringified ${searchSource} parameter (e.g. '?${searchSource}={"title":"foo"}')`);
        }
    }
    return null;
}; //# sourceMappingURL=useRecordFromLocation.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/useAugmentedForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAugmentedForm",
    ()=>useAugmentedForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/merge.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/useSaveContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$getFormInitialValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/getFormInitialValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$getSimpleValidationResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/getSimpleValidationResolver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$setSubmissionErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/setSubmissionErrors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$useNotifyIsFormInvalid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/useNotifyIsFormInvalid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$sanitizeEmptyValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/sanitizeEmptyValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useRecordFromLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useRecordFromLocation.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const useAugmentedForm = (props)=>{
    const { criteriaMode = 'firstError', defaultValues, formRootPathname, resolver, resetOptions, reValidateMode = 'onChange', onSubmit, sanitizeEmptyValues, validate, disableInvalidFormNotification, ...rest } = props;
    const saveContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSaveContext"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const defaultValuesIncludingRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$getFormInitialValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(defaultValues, record), // eslint-disable-next-line
    [
        // eslint-disable-next-line
        JSON.stringify({
            defaultValues: typeof defaultValues === 'function' ? 'function' : defaultValues,
            record
        })
    ]);
    const finalResolver = resolver ? resolver : validate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$getSimpleValidationResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSimpleValidationResolver"])(validate) : undefined;
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        criteriaMode,
        defaultValues: defaultValuesIncludingRecord,
        reValidateMode,
        resolver: finalResolver,
        ...rest
    });
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(form);
    const { reset, formState } = form;
    const { isReady } = formState;
    const previousRecordId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(record?.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const recordIdChanged = record?.id !== previousRecordId.current;
        previousRecordId.current = record?.id;
        reset(defaultValuesIncludingRecord, recordIdChanged ? undefined : resetOptions);
    }, [
        defaultValuesIncludingRecord,
        reset,
        resetOptions,
        record?.id
    ]);
    // notify on invalid form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$useNotifyIsFormInvalid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotifyIsFormInvalid"])(form.control, !disableInvalidFormNotification);
    const recordFromLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useRecordFromLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordFromLocation"])();
    const recordFromLocationApplied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isReady) return;
        if (recordFromLocation && !recordFromLocationApplied.current) {
            reset((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, defaultValuesIncludingRecord, recordFromLocation), {
                keepDefaultValues: true
            });
            recordFromLocationApplied.current = true;
        }
    }, [
        defaultValuesIncludingRecord,
        recordFromLocation,
        reset,
        isReady
    ]);
    // submit callbacks
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (values, event)=>{
        let errors;
        const finalValues = sanitizeEmptyValues ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$sanitizeEmptyValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizeEmptyValues"])(values, record) : values;
        if (onSubmit) {
            errors = await onSubmit(finalValues, event);
        }
        if (onSubmit == null && saveContext?.save) {
            errors = await saveContext.save(finalValues, event);
        }
        if (errors != null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$setSubmissionErrors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSubmissionErrors"])(errors, formRef.current.setError);
        }
    }, [
        onSubmit,
        saveContext,
        sanitizeEmptyValues,
        record
    ]);
    const formHandleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (!event.defaultPrevented) {
            // Prevent outer forms to receive the event
            event.stopPropagation();
            form.handleSubmit(handleSubmit)(event);
        }
        return;
    }, [
        form,
        handleSubmit
    ]);
    return {
        form,
        handleSubmit,
        formHandleSubmit
    };
}; //# sourceMappingURL=useAugmentedForm.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/Form.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$OptionalRecordContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/OptionalRecordContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/SourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCanBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCanBlock.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$WarnWhenUnsavedChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/WarnWhenUnsavedChanges.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useAugmentedForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useAugmentedForm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function Form(props) {
    const { children, id, className, noValidate = false, formRootPathname, warnWhenUnsavedChanges, WarnWhenUnsavedChangesComponent = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$WarnWhenUnsavedChanges$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WarnWhenUnsavedChanges"] } = props;
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { form, formHandleSubmit } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useAugmentedForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAugmentedForm"])(props);
    const sourceContext = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            getSource: (source)=>source,
            getLabel: (source)=>`resources.${resource}.fields.${source}`
        }), [
        resource
    ]);
    const canBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCanBlock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanBlock"])();
    if (warnWhenUnsavedChanges && !canBlock && ("TURBOPACK compile-time value", "development") === 'development') {
        console.error('Cannot use the warnWhenUnsavedChanges feature outside of a DataRouter. ' + 'The warnWhenUnsavedChanges feature is disabled. ' + 'Remove the warnWhenUnsavedChanges prop or convert your custom router to a Data Router.');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$OptionalRecordContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalRecordContextProvider"], {
        value: record
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SourceContextProvider"], {
        value: sourceContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...form
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormGroupsProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("form", {
        onSubmit: formHandleSubmit,
        noValidate: noValidate,
        id: id,
        className: className
    }, children), warnWhenUnsavedChanges && canBlock && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](WarnWhenUnsavedChangesComponent, {
        enable: true,
        formRootPathName: formRootPathname,
        formControl: form.control
    })))));
} //# sourceMappingURL=Form.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/validation/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "choices",
    ()=>choices,
    "combine2Validators",
    ()=>combine2Validators,
    "composeSyncValidators",
    ()=>composeSyncValidators,
    "composeValidators",
    ()=>composeValidators,
    "email",
    ()=>email,
    "isEmpty",
    ()=>isEmpty,
    "isRequired",
    ()=>isRequired,
    "maxLength",
    ()=>maxLength,
    "maxValue",
    ()=>maxValue,
    "minLength",
    ()=>minLength,
    "minValue",
    ()=>minValue,
    "number",
    ()=>number,
    "regex",
    ()=>regex,
    "required",
    ()=>required
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/memoize.js [app-ssr] (ecmascript)");
;
/* @link http://stackoverflow.com/questions/46155/validate-email-address-in-javascript */ const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
const isEmpty = (value)=>typeof value === 'undefined' || value === null || value === '' || Array.isArray(value) && value.length === 0;
// type predicate, see https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function isValidationErrorMessageWithArgs(error) {
    return error ? error.hasOwnProperty('message') : false;
}
const getMessage = (message, messageArgs, value, values)=>typeof message === 'function' ? message({
        args: messageArgs,
        value,
        values
    }) : messageArgs ? {
        message,
        args: messageArgs
    } : message;
// If we define validation functions directly in JSX, it will
// result in a new function at every render, and then trigger infinite re-render.
// Hence, we memoize every built-in validator to prevent a "Maximum call stack" error.
const memoize = (fn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(fn, (...args)=>JSON.stringify(args));
const isFunction = (value)=>typeof value === 'function';
const combine2Validators = (validator1, validator2)=>{
    return (value, values, meta)=>{
        const result1 = validator1(value, values, meta);
        if (!result1) {
            return validator2(value, values, meta);
        }
        if (typeof result1 === 'string' || isValidationErrorMessageWithArgs(result1)) {
            return result1;
        }
        return result1.then((resolvedResult1)=>{
            if (!resolvedResult1) {
                return validator2(value, values, meta);
            }
            return resolvedResult1;
        });
    };
};
const composeValidators = (...validators)=>{
    const allValidators = (Array.isArray(validators[0]) ? validators[0] : validators).filter(isFunction);
    return allValidators.reduce(combine2Validators, ()=>null);
};
const composeSyncValidators = (...validators)=>(value, values, meta)=>{
        const allValidators = (Array.isArray(validators[0]) ? validators[0] : validators).filter(isFunction);
        for (const validator of allValidators){
            const error = validator(value, values, meta);
            if (error) {
                return error;
            }
        }
    };
const required = memoize((message = 'ra.validation.required')=>Object.assign((value, values)=>isEmpty(value) ? getMessage(message, undefined, value, values) : undefined, {
        isRequired: true
    }));
const minLength = memoize((min, message = 'ra.validation.minLength')=>(value, values)=>!isEmpty(value) && value.length < min ? getMessage(message, {
            min
        }, value, values) : undefined);
const maxLength = memoize((max, message = 'ra.validation.maxLength')=>(value, values)=>!isEmpty(value) && value.length > max ? getMessage(message, {
            max
        }, value, values) : undefined);
const minValue = memoize((min, message = 'ra.validation.minValue')=>(value, values)=>!isEmpty(value) && value < min ? getMessage(message, {
            min
        }, value, values) : undefined);
const maxValue = memoize((max, message = 'ra.validation.maxValue')=>(value, values)=>!isEmpty(value) && value > max ? getMessage(message, {
            max
        }, value, values) : undefined);
const number = memoize((message = 'ra.validation.number')=>(value, values)=>!isEmpty(value) && isNaN(Number(value)) ? getMessage(message, undefined, value, values) : undefined);
const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$memoize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((pattern, message = 'ra.validation.regex')=>(value, values)=>!isEmpty(value) && typeof value === 'string' && !pattern.test(value) ? getMessage(message, {
            pattern
        }, value, values) : undefined, (pattern, message)=>{
    return pattern.toString() + message;
});
const email = memoize((message = 'ra.validation.email')=>regex(EMAIL_REGEX, message));
const oneOfTypeMessage = ({ args })=>({
        message: 'ra.validation.oneOf',
        args
    });
const choices = memoize((list, message = oneOfTypeMessage)=>(value, values)=>!isEmpty(value) && list.indexOf(value) === -1 ? getMessage(message, {
            list
        }, value, values) : undefined);
const isRequired = (validate)=>{
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return !!validate.find((it)=>it.isRequired);
    }
    return false;
}; //# sourceMappingURL=validate.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useLogin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotificationContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from 'react-admin';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */ const useLogin = ()=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const locationState = location.state;
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    const { resetNotifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotificationContext"])();
    const nextPathName = locationState && locationState.nextPathname;
    const nextSearch = locationState && locationState.nextSearch;
    const afterLoginUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeDoubleSlashes"])(`${basename}/${__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAuthParams"].afterLoginUrl}`);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params = {}, pathName)=>{
        if (authProvider) {
            return authProvider.login(params).then((ret)=>{
                resetNotifications();
                queryClient.invalidateQueries({
                    queryKey: [
                        'auth',
                        'getPermissions'
                    ]
                });
                if (ret && ret.hasOwnProperty('redirectTo')) {
                    if (ret) {
                        navigate(ret.redirectTo);
                    }
                } else {
                    const redirectUrl = pathName ? pathName : nextPathName + nextSearch || afterLoginUrl;
                    navigate(redirectUrl);
                }
                return ret;
            });
        } else {
            resetNotifications();
            navigate(afterLoginUrl);
            return Promise.resolve();
        }
    }, [
        authProvider,
        queryClient,
        navigate,
        nextPathName,
        nextSearch,
        resetNotifications,
        afterLoginUrl
    ]);
    return login;
};
const __TURBOPACK__default__export__ = useLogin;
 //# sourceMappingURL=useLogin.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useLogin.js [app-ssr] (ecmascript) <export default as useLogin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLogin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogin.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormGroupContext",
    ()=>FormGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FormGroupContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null); //# sourceMappingURL=FormGroupContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/groups/useFormGroupContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormGroupContext",
    ()=>useFormGroupContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupContext.js [app-ssr] (ecmascript)");
;
;
const useFormGroupContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormGroupContext"]);
    return context;
}; //# sourceMappingURL=useFormGroupContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/groups/useFormGroups.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormGroups",
    ()=>useFormGroups
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsContext.js [app-ssr] (ecmascript)");
;
;
const useFormGroups = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormGroupsContext"]);
    return context;
}; //# sourceMappingURL=useFormGroups.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useWrappedSource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWrappedSource",
    ()=>useWrappedSource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/SourceContext.js [app-ssr] (ecmascript)");
;
const useWrappedSource = (source)=>{
    const sourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSourceContext"])();
    return sourceContext.getSource(source);
}; //# sourceMappingURL=useWrappedSource.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/useApplyInputDefaultValues.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplyInputDefaultValues",
    ()=>useApplyInputDefaultValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useWrappedSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useWrappedSource.js [app-ssr] (ecmascript)");
;
;
;
;
;
const useApplyInputDefaultValues = ({ inputProps, isArrayInput, fieldArrayInputControl })=>{
    const { defaultValue, source, disabled } = inputProps;
    const finalSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useWrappedSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWrappedSource"])(source);
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(inputProps);
    const { getValues, resetField, reset, subscribe } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormContext"])();
    const recordValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(record, finalSource);
    const formValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getValues(), finalSource);
    const isDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return subscribe({
            // Even though we only need dirtyFields, we subscribe to values as well to
            // ensure we properly receive dirtyFields updates for newly added items in an ArrayInput
            formState: {
                values: true,
                dirtyFields: true
            },
            callback: ({ dirtyFields })=>{
                isDirty.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(dirtyFields ?? {}, finalSource, false);
            }
        });
    }, [
        finalSource,
        subscribe
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (defaultValue == null || formValue != null || // When the input is disabled, its value may always be undefined, no matter the default value.
        // This prevents from trying to reset the value indefinitely.
        disabled || // We check strictly for undefined to avoid setting default value
        // when the field is null
        recordValue !== undefined || isDirty.current === true) {
            return;
        }
        // Side note: For Array Input but checked for all to avoid possible regression
        // Since we use get(record, source), if source is like foo.23.bar,
        // this effect will run. However we only want to set the default value
        // for the subfield bar if the record actually has a value for foo.23
        const pathContainsIndex = finalSource.split('.').some((pathPart)=>numericRegex.test(pathPart));
        if (pathContainsIndex) {
            const parentPath = finalSource.split('.').slice(0, -1).join('.');
            const parentValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(getValues(), parentPath);
            if (parentValue == null) {
                // the parent is undefined, so we don't want to set the default value
                return;
            }
        }
        if (isArrayInput) {
            if (!fieldArrayInputControl) {
                throw new Error('useApplyInputDefaultValues: No fieldArrayInputControl passed in props for array input usage');
            }
            // We need to update inputs nested in array using react hook forms
            // own array controller rather then the generic reset to prevent control losing
            // context of the nested inputs
            fieldArrayInputControl.replace(defaultValue);
            // resets the form so that control no longer sees the form as dirty after
            // defaults applied
            reset({}, {
                keepValues: true
            });
            return;
        }
        resetField(finalSource, {
            defaultValue
        });
    });
};
const numericRegex = /^\d+$/; //# sourceMappingURL=useApplyInputDefaultValues.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInput",
    ()=>useInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/validate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$useFormGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/useFormGroupContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$useFormGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/useFormGroups.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useApplyInputDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useApplyInputDefaultValues.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useWrappedSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useWrappedSource.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
// replace null or undefined values by empty string to avoid controlled/uncontrolled input warning
const defaultFormat = (value)=>value == null ? '' : value;
// parse empty string into null as it's more suitable for a majority of backends
const defaultParse = (value)=>value === '' ? null : value;
const useInput = (props)=>{
    const { defaultValue, format = defaultFormat, id, isRequired: isRequiredOption, name, onBlur: initialOnBlur, onChange: initialOnChange, parse: parseProp = defaultParse, source, validate, ...options } = props;
    const finalSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useWrappedSource$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWrappedSource"])(source);
    const finalName = name || finalSource;
    const formGroupName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$useFormGroupContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormGroupContext"])();
    const formGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$useFormGroups$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFormGroups"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])();
    // @ts-ignore
    const parse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(parseProp);
    const defaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    if (!finalName && ("TURBOPACK compile-time value", "development") === 'development') {
        console.warn('Input components require either a source or a name prop.');
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!formGroups || formGroupName == null) {
            return;
        }
        formGroups.registerField(finalSource, formGroupName);
        return ()=>{
            formGroups.unregisterField(finalSource, formGroupName);
        };
    }, [
        formGroups,
        formGroupName,
        finalSource
    ]);
    const sanitizedValidate = Array.isArray(validate) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeValidators"])(validate) : validate;
    // Fetch the defaultValue from the record if available or apply the provided defaultValue.
    // This ensures dynamically added inputs have their value set correctly (ArrayInput for example).
    // We don't do this for the form level defaultValues so that it works as it should in react-hook-form
    // (i.e. field level defaultValue override form level defaultValues for this field).
    const { field: controllerField, fieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useController"])({
        name: finalName,
        defaultValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(record, finalSource, defaultValue),
        rules: {
            validate: async (value, values)=>{
                if (!sanitizedValidate) return true;
                const error = await sanitizedValidate(value, values, {
                    ...props,
                    finalSource
                });
                if (!error) return true;
                // react-hook-form expects errors to be plain strings but our validators can return objects
                // that have message and args.
                // To avoid double translation for users that validate with a schema instead of our validators
                // we use a special format for our validators errors.
                // The ValidationError component will check for this format and extract the message and args
                // to translate.
                return `@@react-admin@@${JSON.stringify(error)}`;
            }
        },
        ...options
    });
    // Because our forms may receive an asynchronously loaded record for instance,
    // they may reset their default values which would override the input default value.
    // This hook ensures that the input default value is applied when a new record is loaded but has
    // no value for the input.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useApplyInputDefaultValues$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApplyInputDefaultValues"])({
        inputProps: props
    });
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])((...event)=>{
        controllerField.onBlur();
        if (initialOnBlur) {
            initialOnBlur(...event);
        }
    });
    const onChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])((...event)=>{
        const eventOrValue = props.type === 'checkbox' && event[0]?.target?.value === 'on' ? event[0].target.checked : event[0]?.target?.value ?? event[0];
        controllerField.onChange(parse ? parse(eventOrValue) : eventOrValue);
        if (initialOnChange) {
            initialOnChange(...event);
        }
    });
    const field = {
        ...controllerField,
        value: format ? format(controllerField.value) : controllerField.value,
        onBlur,
        onChange
    };
    return {
        id: id || defaultId,
        field,
        fieldState,
        formState,
        isRequired: isRequiredOption || (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRequired"])(validate)
    };
}; //# sourceMappingURL=useInput.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/getFieldLabelTranslationArgs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getFieldLabelTranslationArgs",
    ()=>getFieldLabelTranslationArgs,
    "getResourceFieldLabelKey",
    ()=>getResourceFieldLabelKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/inflection/lib/inflection.js [app-ssr] (ecmascript)");
;
const getFieldLabelTranslationArgs = (options)=>{
    if (!options) return [
        ''
    ];
    const { label, defaultLabel, resource, resourceFromContext, source } = options;
    if (typeof label !== 'undefined') return [
        label,
        {
            _: label
        }
    ];
    if (typeof source === 'undefined') return [
        ''
    ];
    const { sourceWithoutDigits, sourceSuffix } = getSourceParts(source);
    const defaultLabelTranslation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transform"])(sourceSuffix.replace(/\./g, ' '), [
        'underscore',
        'humanize'
    ]);
    if (resource) {
        return [
            getResourceFieldLabelKey(resource, sourceWithoutDigits),
            {
                _: defaultLabelTranslation
            }
        ];
    }
    if (defaultLabel) {
        return [
            defaultLabel,
            {
                _: defaultLabelTranslation
            }
        ];
    }
    return [
        getResourceFieldLabelKey(resourceFromContext || 'undefined', sourceWithoutDigits),
        {
            _: defaultLabelTranslation
        }
    ];
};
const __TURBOPACK__default__export__ = getFieldLabelTranslationArgs;
const getResourceFieldLabelKey = (resource, source)=>`resources.${resource}.fields.${source}`;
/**
 * Uses the source string to guess a translation message and a default label.
 *
 * @example
 * getSourceParts('pictures') // { sourceWithoutDigits: 'pictures', sourceSuffix: 'pictures' }
 * getSourceParts('pictures.url') // { sourceWithoutDigits: 'pictures.url', sourceSuffix: 'pictures.url' }
 * getSourceParts('pictures.0.url') // { sourceWithoutDigits: 'pictures.url', sourceSuffix: 'url' }
 * getSourceParts('pictures.12.urls.5.protocol') // { sourceWithoutDigits: 'pictures.urls.protocol', sourceSuffix: 'protocol' }
 */ const getSourceParts = (source)=>{
    // remove digits, e.g. 'book.authors.2.categories.3.identifier.name' => 'book.authors.categories.identifier.name'
    const sourceWithoutDigits = source.replace(/\.\d+\./g, '.');
    // get final part, e.g. 'book.authors.2.categories.3.identifier.name' => 'identifier.name'
    // we're not using a regexp here to avoid code scanning alert "Polynomial regular expression used on uncontrolled data"
    const parts = source.split('.');
    let lastPartWithDigits;
    parts.forEach((part, index)=>{
        if (onlyDigits(part)) {
            lastPartWithDigits = index;
        }
    });
    const sourceSuffix = lastPartWithDigits != null ? parts.slice(lastPartWithDigits + 1).join('.') : source;
    return {
        sourceWithoutDigits,
        sourceSuffix
    };
};
// 48 and 57 are the char codes for "0" and "9", respectively
const onlyDigits = (s)=>{
    for(let i = s.length - 1; i >= 0; i--){
        const d = s.charCodeAt(i);
        if (d < 48 || d > 57) return false;
    }
    return true;
}; //# sourceMappingURL=getFieldLabelTranslationArgs.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslateLabel.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTranslateLabel",
    ()=>useTranslateLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$getFieldLabelTranslationArgs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/getFieldLabelTranslationArgs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/SourceContext.js [app-ssr] (ecmascript)");
;
;
;
;
const useTranslateLabel = ()=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    const resourceFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])();
    const sourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useOptionalSourceContext"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(({ source, label, resource })=>{
        if (label === false || label === '') {
            return null;
        }
        if (label && typeof label !== 'string') {
            return label;
        }
        return translate(...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$getFieldLabelTranslationArgs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFieldLabelTranslationArgs"])({
            label: label,
            defaultLabel: source ? sourceContext?.getLabel(source) : undefined,
            resource,
            resourceFromContext,
            source
        }));
    }, [
        resourceFromContext,
        translate,
        sourceContext
    ]);
}; //# sourceMappingURL=useTranslateLabel.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldTitle",
    ()=>FieldTitle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslateLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslateLabel.js [app-ssr] (ecmascript)");
;
;
;
const FieldTitle = (props)=>{
    const { source, label, resource, isRequired } = props;
    const translateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslateLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslateLabel"])();
    if (label === true) {
        throw new Error('Label parameter must be a string, a ReactElement or false');
    }
    if (label === false || label === '') {
        return null;
    }
    if (label != null && typeof label !== 'string') {
        return label;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", null, translateLabel({
        label,
        resource,
        source
    }), isRequired && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("span", {
        "aria-hidden": "true"
    }, "\u2009*"));
};
// What? TypeScript loses the displayName if we don't set it explicitly
FieldTitle.displayName = 'FieldTitle';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(FieldTitle);
 //# sourceMappingURL=FieldTitle.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-ssr] (ecmascript) <export default as FieldTitle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldTitle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/form/validation/ValidationError.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValidationError",
    ()=>ValidationError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
;
;
const ValidationErrorSpecialFormatPrefix = '@@react-admin@@';
const ValidationError = (props)=>{
    const { error } = props;
    let errorMessage = error;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    // react-hook-form expects errors to be plain strings but our validators can return objects
    // that have message and args.
    // To avoid double translation for users that validate with a schema instead of our validators
    // we use a special format for our validators errors.
    // The useInput hook handle the special formatting
    if (typeof error === 'string' && error.startsWith(ValidationErrorSpecialFormatPrefix)) {
        errorMessage = JSON.parse(error.substring(ValidationErrorSpecialFormatPrefix.length));
    }
    if (errorMessage.message) {
        const { message, args } = errorMessage;
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, translate(message, {
            _: message,
            ...args
        }));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, translate(errorMessage, {
        _: errorMessage
    }));
}; //# sourceMappingURL=ValidationError.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeInputRestProps",
    ()=>sanitizeInputRestProps
]);
const sanitizeInputRestProps = ({ afterSubmit, allowNull, alwaysOn, beforeSubmit, component, data, defaultValue, error, format, formatOnBlur, initializeForm, input, isEqual, isRequired, label, limitChoicesToValue, locale, meta, multiple, name, options, optionText, optionValue, parse, record, ref, refetch, render, resource, setFilter, setPagination, setSort, shouldUnregister, source, submitError, subscription, textAlign, translate, translateChoice, validate, validateFields, value, ...rest })=>rest; //# sourceMappingURL=sanitizeInputRestProps.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useRedirect.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRedirect",
    ()=>useRedirect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
;
;
;
;
const useRedirect = ()=>{
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreatePath"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((redirectTo, resource = '', id, data, state = {})=>{
        if (!redirectTo) {
            return;
        } else if (typeof redirectTo === 'function') {
            const target = redirectTo(resource, id, data);
            const absoluteTarget = typeof target === 'string' ? `${basename}${target.startsWith('/') ? '' : '/'}${target}` : {
                pathname: `${basename}${target.pathname?.startsWith('/') ? '' : '/'}${target.pathname}`,
                ...target
            };
            navigate(absoluteTarget, {
                state: {
                    _scrollToTop: true,
                    ...state
                }
            });
            return;
        } else if (typeof redirectTo === 'string' && redirectTo.startsWith('http') && window) {
            // redirection to an absolute url
            // history doesn't handle that case, so we handle it by hand
            window.location.href = redirectTo;
            return;
        } else {
            // redirection to an internal link
            navigate(createPath({
                resource,
                id,
                type: redirectTo
            }), {
                state: // We force the scrollToTop except when navigating to a list
                // where this is already done by <RestoreScrollPosition> in <Resource>
                redirectTo === 'list' ? state : {
                    _scrollToTop: true,
                    ...state
                }
            });
            return;
        }
    }, [
        navigate,
        basename,
        createPath
    ]);
}; //# sourceMappingURL=useRedirect.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useHandleAuthCallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviousLocationStorageKey",
    ()=>PreviousLocationStorageKey,
    "useHandleAuthCallback",
    ()=>useHandleAuthCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useRedirect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
const useHandleAuthCallback = (options)=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const redirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRedirect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRedirect"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const locationState = location.state;
    const nextPathName = locationState && locationState.nextPathname;
    const nextSearch = locationState && locationState.nextSearch;
    const defaultRedirectUrl = nextPathName ? nextPathName + nextSearch : '/';
    const { onSuccess, onError, onSettled, ...queryOptions } = options ?? {};
    let handleCallbackPromise;
    const queryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'auth',
            'handleCallback'
        ],
        queryFn: ({ signal })=>{
            if (!handleCallbackPromise) {
                handleCallbackPromise = authProvider && typeof authProvider.handleCallback === 'function' ? authProvider.handleCallback({
                    signal
                }).then((result)=>result ?? null) : Promise.resolve();
            }
            return handleCallbackPromise;
        },
        retry: false,
        ...queryOptions
    });
    const onSuccessEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSuccess ?? ((data)=>{
        // AuthProviders relying on a third party services redirect back to the app can't
        // use the location state to store the path on which the user was before the login.
        // So we support a fallback on the localStorage.
        const previousLocation = localStorage.getItem(PreviousLocationStorageKey);
        const redirectTo = data?.redirectTo ?? previousLocation;
        if (redirectTo === false) {
            return;
        }
        redirect(redirectTo ?? defaultRedirectUrl);
    }));
    const onErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onError ?? noop);
    const onSettledEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSettled ?? noop);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.error == null || queryResult.isFetching) return;
        onErrorEvent(queryResult.error);
    }, [
        onErrorEvent,
        queryResult.error,
        queryResult.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.data === undefined || queryResult.isFetching) return;
        onSuccessEvent(queryResult.data);
    }, [
        onSuccessEvent,
        queryResult.data,
        queryResult.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (queryResult.status === 'pending' || queryResult.isFetching) return;
        onSettledEvent(queryResult.data, queryResult.error);
    }, [
        onSettledEvent,
        queryResult.data,
        queryResult.error,
        queryResult.status,
        queryResult.isFetching
    ]);
    return queryResult;
};
const PreviousLocationStorageKey = '@react-admin/nextPathname';
const noop = ()=>{}; //# sourceMappingURL=useHandleAuthCallback.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/BasenameContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BasenameContextProvider",
    ()=>BasenameContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/BasenameContext.js [app-ssr] (ecmascript)");
;
;
const BasenameContextProvider = ({ children, basename })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasenameContext"].Provider, {
        value: basename
    }, children); //# sourceMappingURL=BasenameContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/AdminRouter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminRouter",
    ()=>AdminRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/BasenameContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
;
;
const AdminRouter = ({ basename = '', children })=>{
    const { RouterWrapper, useInRouterContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    const isInRouter = useInRouterContext();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$BasenameContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BasenameContextProvider"], {
        basename: isInRouter ? basename : ''
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RouterWrapper, {
        basename: basename
    }, children));
}; //# sourceMappingURL=AdminRouter.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AUTH_CHECK",
    ()=>AUTH_CHECK,
    "AUTH_ERROR",
    ()=>AUTH_ERROR,
    "AUTH_GET_PERMISSIONS",
    ()=>AUTH_GET_PERMISSIONS,
    "AUTH_LOGIN",
    ()=>AUTH_LOGIN,
    "AUTH_LOGOUT",
    ()=>AUTH_LOGOUT
]);
const AUTH_LOGIN = 'AUTH_LOGIN';
const AUTH_CHECK = 'AUTH_CHECK';
const AUTH_ERROR = 'AUTH_ERROR';
const AUTH_LOGOUT = 'AUTH_LOGOUT';
const AUTH_GET_PERMISSIONS = 'AUTH_GET_PERMISSIONS'; //# sourceMappingURL=types.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/convertLegacyAuthProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/types.js [app-ssr] (ecmascript)");
;
const __TURBOPACK__default__export__ = (legacyAuthProvider)=>{
    const authProvider = (...args)=>legacyAuthProvider.apply(null, args);
    authProvider.login = (params)=>legacyAuthProvider(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_LOGIN"], params);
    authProvider.logout = (params)=>legacyAuthProvider(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_LOGOUT"], params);
    authProvider.checkAuth = (params)=>legacyAuthProvider(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_CHECK"], params);
    authProvider.checkError = (error)=>legacyAuthProvider(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ERROR"], error);
    authProvider.getPermissions = (params)=>legacyAuthProvider(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_GET_PERMISSIONS"], params);
    return authProvider;
};
 //# sourceMappingURL=convertLegacyAuthProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/convertLegacyAuthProvider.js [app-ssr] (ecmascript) <export default as convertLegacyAuthProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertLegacyAuthProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$convertLegacyAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$convertLegacyAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/convertLegacyAuthProvider.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/DataProviderContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DataProviderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
DataProviderContext.displayName = 'DataProviderContext';
const __TURBOPACK__default__export__ = DataProviderContext;
 //# sourceMappingURL=DataProviderContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/DataProviderContext.js [app-ssr] (ecmascript) <export default as DataProviderContext>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProviderContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/DataProviderContext.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/AddUndoableMutationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddUndoableMutationContext",
    ()=>AddUndoableMutationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const AddUndoableMutationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(()=>{}); //# sourceMappingURL=AddUndoableMutationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/UndoableMutationsContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UndoableMutationsContextProvider",
    ()=>UndoableMutationsContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$AddUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/AddUndoableMutationContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$TakeUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/TakeUndoableMutationContext.js [app-ssr] (ecmascript)");
;
;
;
;
const UndoableMutationsContextProvider = ({ children })=>{
    const [mutations, setMutations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /**
     * Add a new mutation (pushes a new mutation to the queue).
     *
     * Used by optimistic data provider hooks, e.g., useDelete
     */ const addMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((mutation)=>{
        setMutations((mutations)=>[
                ...mutations,
                mutation
            ]);
    }, []);
    /**
     * Get the next mutation to execute (shifts the first mutation from the queue) and returns it.
     *
     * Used by the Notification component to process or undo the mutation
     */ const takeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (mutations.length === 0) return;
        const [mutation, ...rest] = mutations;
        setMutations(rest);
        return mutation;
    }, [
        mutations
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$TakeUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TakeUndoableMutationContext"].Provider, {
        value: takeMutation
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$AddUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddUndoableMutationContext"].Provider, {
        value: addMutation
    }, children));
}; //# sourceMappingURL=UndoableMutationsContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/dataFetchActions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CREATE",
    ()=>CREATE,
    "DATAPROVIDER_MUTATIONS",
    ()=>DATAPROVIDER_MUTATIONS,
    "DELETE",
    ()=>DELETE,
    "DELETE_MANY",
    ()=>DELETE_MANY,
    "GET_LIST",
    ()=>GET_LIST,
    "GET_MANY",
    ()=>GET_MANY,
    "GET_MANY_REFERENCE",
    ()=>GET_MANY_REFERENCE,
    "GET_ONE",
    ()=>GET_ONE,
    "UPDATE",
    ()=>UPDATE,
    "UPDATE_MANY",
    ()=>UPDATE_MANY,
    "fetchActionsWithArrayOfIdentifiedRecordsResponse",
    ()=>fetchActionsWithArrayOfIdentifiedRecordsResponse,
    "fetchActionsWithArrayOfRecordsResponse",
    ()=>fetchActionsWithArrayOfRecordsResponse,
    "fetchActionsWithRecordResponse",
    ()=>fetchActionsWithRecordResponse,
    "fetchActionsWithTotalResponse",
    ()=>fetchActionsWithTotalResponse,
    "reactAdminFetchActions",
    ()=>reactAdminFetchActions,
    "sanitizeFetchType",
    ()=>sanitizeFetchType
]);
const GET_LIST = 'GET_LIST';
const GET_ONE = 'GET_ONE';
const GET_MANY = 'GET_MANY';
const GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const UPDATE_MANY = 'UPDATE_MANY';
const DELETE = 'DELETE';
const DELETE_MANY = 'DELETE_MANY';
const fetchActionsWithRecordResponse = [
    'getOne',
    'create',
    'update'
];
const fetchActionsWithArrayOfIdentifiedRecordsResponse = [
    'getList',
    'getMany',
    'getManyReference'
];
const fetchActionsWithArrayOfRecordsResponse = [
    ...fetchActionsWithArrayOfIdentifiedRecordsResponse,
    'updateMany',
    'deleteMany'
];
const fetchActionsWithTotalResponse = [
    'getList',
    'getManyReference'
];
const reactAdminFetchActions = [
    ...fetchActionsWithRecordResponse,
    ...fetchActionsWithArrayOfRecordsResponse
];
const DATAPROVIDER_MUTATIONS = [
    'create',
    'delete',
    'update',
    'updateMany',
    'deleteMany'
];
const sanitizeFetchType = (fetchType)=>{
    switch(fetchType){
        case GET_LIST:
            return 'getList';
        case GET_ONE:
            return 'getOne';
        case GET_MANY:
            return 'getMany';
        case GET_MANY_REFERENCE:
            return 'getManyReference';
        case CREATE:
            return 'create';
        case UPDATE:
            return 'update';
        case UPDATE_MANY:
            return 'updateMany';
        case DELETE:
            return 'delete';
        case DELETE_MANY:
            return 'deleteMany';
        default:
            return fetchType;
    }
}; //# sourceMappingURL=dataFetchActions.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/defaultDataProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// avoids adding a context in tests
__turbopack_context__.s([
    "defaultDataProvider",
    ()=>defaultDataProvider
]);
const defaultDataProvider = {
    create: ()=>Promise.resolve({
            data: null
        }),
    delete: ()=>Promise.resolve({
            data: null
        }),
    deleteMany: ()=>Promise.resolve({
            data: []
        }),
    getList: ()=>Promise.resolve({
            data: [],
            total: 0
        }),
    getMany: ()=>Promise.resolve({
            data: []
        }),
    getManyReference: ()=>Promise.resolve({
            data: [],
            total: 0
        }),
    getOne: ()=>Promise.resolve({
            data: null
        }),
    update: ()=>Promise.resolve({
            data: null
        }),
    updateMany: ()=>Promise.resolve({
            data: []
        })
}; //# sourceMappingURL=defaultDataProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/convertLegacyDataProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/dataFetchActions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/defaultDataProvider.js [app-ssr] (ecmascript)");
;
;
const fetchMap = {
    create: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CREATE"],
    delete: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DELETE"],
    deleteMany: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DELETE_MANY"],
    getList: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET_LIST"],
    getMany: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET_MANY"],
    getManyReference: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET_MANY_REFERENCE"],
    getOne: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GET_ONE"],
    update: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UPDATE"],
    updateMany: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UPDATE_MANY"]
};
/**
 * Turn a function-based dataProvider to an object-based one
 *
 * Allows using legacy dataProviders transparently.
 *
 * @param {Function} legacyDataProvider A legacy dataProvider (type, resource, params) => Promise<any>
 *
 * @returns {Object} A dataProvider that react-admin can use
 */ const convertLegacyDataProvider = (legacyDataProvider)=>{
    const proxy = new Proxy(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDataProvider"], {
        get (_, name) {
            return (resource, params)=>{
                if (Object.keys(fetchMap).includes(name.toString())) {
                    const fetchType = fetchMap[name.toString()];
                    return legacyDataProvider(fetchType, resource, params);
                }
                return legacyDataProvider(name.toString(), resource, params);
            };
        },
        apply (_, __, args) {
            return legacyDataProvider.apply(legacyDataProvider, args);
        }
    });
    return proxy;
};
const __TURBOPACK__default__export__ = convertLegacyDataProvider;
 //# sourceMappingURL=convertLegacyDataProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/convertLegacyDataProvider.js [app-ssr] (ecmascript) <export default as convertLegacyDataProvider>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertLegacyDataProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$convertLegacyDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$convertLegacyDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/convertLegacyDataProvider.js [app-ssr] (ecmascript)");
}),
"[project]/admin_react/node_modules/ra-core/dist/store/StoreContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoreContextProvider",
    ()=>StoreContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/StoreContext.js [app-ssr] (ecmascript)");
;
;
;
const StoreContextProvider = ({ value: Store, children })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        Store.setup();
        return ()=>{
            Store.teardown();
        };
    }, [
        Store
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreContext"].Provider, {
        value: Store
    }, children);
}; //# sourceMappingURL=StoreContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/preferences/PreferencesEditorContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreferencesEditorContextProvider",
    ()=>PreferencesEditorContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferencesEditorContext.js [app-ssr] (ecmascript)");
;
;
;
const PreferencesEditorContextProvider = ({ children })=>{
    const [isEnabled, setIsEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editor, setEditor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [preferenceKey, setPreferenceKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [path, setPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [title, setTitleString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [titleOptions, setTitleOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    const enable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsEnabled(true), []);
    const disable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsEnabled(false);
        setEditor(null);
    }, []);
    const setTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((title, titleOptions)=>{
        setTitleString(title);
        setTitleOptions(titleOptions);
    }, []);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            editor,
            setEditor,
            preferenceKey,
            setPreferenceKey,
            title,
            titleOptions,
            setTitle,
            isEnabled,
            disable,
            enable,
            path,
            setPath
        };
    }, [
        disable,
        enable,
        editor,
        preferenceKey,
        isEnabled,
        path,
        setPath,
        title,
        titleOptions,
        setTitle
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreferencesEditorContext"].Provider, {
        value: context
    }, children);
}; //# sourceMappingURL=PreferencesEditorContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/I18nContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nContextProvider",
    ()=>I18nContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/I18nContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
;
;
;
;
;
const I18nContextProvider = ({ value = defaulti18nContext, children })=>{
    const [locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])('locale');
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // to avoid blinking effect, delay first render if the user has a non-default locale
    const [isInitialized, setInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(locale === value.getLocale());
    // watch store for locale changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (locale && value.getLocale() !== locale) {
            new Promise((resolve)=>{
                // so we systematically return a Promise for the messages
                // i18nProvider may return a Promise for language changes,
                resolve(value.changeLocale(locale));
            }).then(()=>{
                // Force full page re-render.
                // This is slow on locale change, but it's a good way
                // to avoid having one subscription to the locale
                // for each call to translate()
                setKey((key)=>key + 1);
                setInitialized(true);
            }).catch((error)=>{
                setInitialized(true);
                notify('ra.notification.i18n_error', {
                    type: 'error'
                });
                console.error(error);
            });
        } else {
            setInitialized(true);
        }
    }, [
        value,
        locale,
        notify
    ]);
    return isInitialized ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContext"].Provider, {
        value: value,
        key: key
    }, children) : null;
};
const defaulti18nContext = {
    translate: (x)=>x,
    changeLocale: ()=>Promise.resolve(),
    getLocale: ()=>'en'
}; //# sourceMappingURL=I18nContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/notification/NotificationContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationContextProvider",
    ()=>NotificationContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/NotificationContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$AddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/AddNotificationContext.js [app-ssr] (ecmascript)");
;
;
;
;
const NotificationContextProvider = ({ children })=>{
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((notification)=>{
        setNotifications((notifications)=>[
                ...notifications,
                notification
            ]);
    }, []);
    const takeNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (notifications.length === 0) return;
        const [notification, ...rest] = notifications;
        setNotifications(rest);
        return notification;
    }, [
        notifications
    ]);
    const resetNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifications([]);
    }, []);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            notifications,
            addNotification,
            takeNotification,
            resetNotifications,
            setNotifications
        }), [
        notifications
    ] // eslint-disable-line react-hooks/exhaustive-deps
    );
    // we separate the addNotification context to avoid rerendering all components
    // that depend on useNotify when a notification is dispatched
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationContext"].Provider, {
        value: contextValue
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$AddNotificationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddNotificationContext"].Provider, {
        value: addNotification
    }, children));
}; //# sourceMappingURL=NotificationContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreAdminContext",
    ()=>CoreAdminContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$AdminRouter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/AdminRouter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$adapters$2f$reactRouterProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/adapters/reactRouterProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/AuthContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$convertLegacyAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__convertLegacyAuthProvider$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/convertLegacyAuthProvider.js [app-ssr] (ecmascript) <export default as convertLegacyAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DataProviderContext$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/DataProviderContext.js [app-ssr] (ecmascript) <export default as DataProviderContext>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$UndoableMutationsContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/UndoableMutationsContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$convertLegacyDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__convertLegacyDataProvider$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/convertLegacyDataProvider.js [app-ssr] (ecmascript) <export default as convertLegacyDataProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/defaultDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/StoreContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$memoryStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/memoryStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferencesEditorContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/I18nContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceDefinitionContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/NotificationContextProvider.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const defaultStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$memoryStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memoryStore"])();
const CoreAdminContext = (props)=>{
    const { authProvider, basename, dataProvider = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDataProvider"], i18nProvider, store = defaultStore, children, queryClient, routerProvider = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$adapters$2f$reactRouterProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactRouterProvider"] } = props;
    if (!dataProvider) {
        throw new Error(`Missing dataProvider prop.
React-admin requires a valid dataProvider function to work.`);
    }
    const finalQueryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>queryClient || new __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"](), [
        queryClient
    ]);
    const finalAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>authProvider instanceof Function ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$convertLegacyAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__convertLegacyAuthProvider$3e$__["convertLegacyAuthProvider"])(authProvider) : authProvider, [
        authProvider
    ]);
    const finalDataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>dataProvider instanceof Function ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$convertLegacyDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__convertLegacyDataProvider$3e$__["convertLegacyDataProvider"])(dataProvider) : dataProvider, [
        dataProvider
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouterProviderContext"].Provider, {
        value: routerProvider
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$AuthContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthContext"].Provider, {
        value: finalAuthProvider
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DataProviderContext$3e$__["DataProviderContext"].Provider, {
        value: finalDataProvider
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$StoreContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoreContextProvider"], {
        value: store
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferencesEditorContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PreferencesEditorContextProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: finalQueryClient
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$AdminRouter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminRouter"], {
        basename: basename
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$I18nContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I18nContextProvider"], {
        value: i18nProvider
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$NotificationContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotificationContextProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$UndoableMutationsContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UndoableMutationsContextProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceDefinitionContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceDefinitionContextProvider"], null, children)))))))))));
}; //# sourceMappingURL=CoreAdminContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useRequireAccess.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequireAccess",
    ()=>useRequireAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
;
;
;
const useRequireAccess = (params)=>{
    const { canAccess, data, error, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanAccess"])(params);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBasename"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (rest.isPending) return;
        if (canAccess === false) {
            navigate(`${basename}/access-denied`);
        }
    }, [
        basename,
        canAccess,
        navigate,
        rest.isPending
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (error) {
            navigate(`${basename}/authentication-error`);
        }
    }, [
        basename,
        navigate,
        error
    ]);
    return rest;
}; //# sourceMappingURL=useRequireAccess.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/validateResponseFormat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/dataFetchActions.js [app-ssr] (ecmascript)");
;
function validateResponseFormat(response, type, logger = console.error) {
    if (!response) {
        logger(`The dataProvider returned an empty response for '${type}'.`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (!response.hasOwnProperty('data')) {
        logger(`The response to '${type}' must be like { data: ... }, but the received response does not have a 'data' key. The dataProvider is probably wrong for '${type}'.`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchActionsWithArrayOfRecordsResponse"].includes(type) && !Array.isArray(response.data)) {
        logger(`The response to '${type}' must be like { data : [...] }, but the received data is not an array. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchActionsWithArrayOfIdentifiedRecordsResponse"].includes(type) && Array.isArray(response.data) && response.data.length > 0 && !response.data[0].hasOwnProperty('id')) {
        logger(`The response to '${type}' must be like { data : [{ id: 123, ...}, ...] }, but the received data items do not have an 'id' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchActionsWithRecordResponse"].includes(type) && !response.data.hasOwnProperty('id')) {
        logger(`The response to '${type}' must be like { data: { id: 123, ... } }, but the received data does not have an 'id' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchActionsWithTotalResponse"].includes(type) && !response.hasOwnProperty('total') && !response.hasOwnProperty('pageInfo')) {
        logger(`The response to '${type}' must be like { data: [...], total: 123 } or { data: [...], pageInfo: {...} }, but the received response has neither a 'total' nor a 'pageInfo' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
}
const __TURBOPACK__default__export__ = validateResponseFormat;
 //# sourceMappingURL=validateResponseFormat.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/populateQueryCache.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Populate react-query's query cache with a data dictionary
 *
 * @example
 * const data = {
 *    posts: [{ id: 1, title: 'Hello, world' }, { id: 2, title: 'FooBar' }],
 *    comments: [{ id: 1, post_id: 1, body: 'Nice post!' }],
 * };
 * populateQueryCache({ data, queryClient });
 * // setQueryData(['posts', 'getOne', { id: '1' }], { id: 1, title: 'Hello, world' });
 * // setQueryData(['posts', 'getOne', { id: '2' }], { id: 2, title: 'FooBar' });
 * // setQueryData(['posts', 'getMany', { ids: ['1', '2'] }], [{ id: 1, title: 'Hello, world' }, { id: 2, title: 'FooBar' }]);
 * // setQueryData(['comments', 'getOne', { id: '1' }], { id: 1, post_id: 1, body: 'Nice post!' });
 * // setQueryData(['comments', 'getMany', { ids: ['1'] }], [{ id: 1, post_id: 1, body: 'Nice post!' });
 */ __turbopack_context__.s([
    "populateQueryCache",
    ()=>populateQueryCache
]);
const populateQueryCache = ({ data, queryClient, staleTime = 1000 })=>{
    // setQueryData doesn't accept a stale time option
    // So we set an updatedAt in the future to make sure the data isn't considered stale
    const updatedAt = Date.now() + staleTime;
    Object.keys(data).forEach((resource)=>{
        data[resource].forEach((record)=>{
            if (!record || record.id == null) return;
            queryClient.setQueryData([
                resource,
                'getOne',
                {
                    id: String(record.id)
                }
            ], record, {
                updatedAt
            });
        });
        const recordIds = data[resource].map((record)=>String(record.id));
        queryClient.setQueryData([
            resource,
            'getMany',
            {
                ids: recordIds
            }
        ], data[resource], {
            updatedAt
        });
    });
}; //# sourceMappingURL=populateQueryCache.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDataProvider",
    ()=>useDataProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/DataProviderContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/defaultDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$validateResponseFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/validateResponseFormat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogoutIfAccessDenied$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogoutIfAccessDenied.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/dataFetchActions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$populateQueryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/populateQueryCache.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Hook for getting a dataProvider
 *
 * Gets a dataProvider object, which behaves just like the real dataProvider
 * (same methods returning a Promise). But it's actually a Proxy object,
 * which validates the response format, and logs the user out upon error
 * if authProvider.checkError() rejects.
 *
 * @return dataProvider
 *
 * @example Basic usage
 *
 * import * as React from 'react';
 * import { useState } from 'react';
 * import { useDataProvider } from 'react-admin';
 *
 * const PostList = () => {
 *      const [posts, setPosts] = useState([])
 *      const dataProvider = useDataProvider();
 *      useEffect(() => {
 *          dataProvider.getList('posts', { filter: { status: 'pending' }})
 *            .then(({ data }) => setPosts(data));
 *      }, [])
 *
 *      return (
 *          <Fragment>
 *              {posts.map((post, key) => <PostDetail post={post} key={key} />)}
 *          </Fragment>
 *     );
 * }
 *
 * @example Handling all states (loading, error, success)
 *
 * import { useState, useEffect } from 'react';
 * import { useDataProvider } from 'react-admin';
 *
 * const UserProfile = ({ userId }) => {
 *     const dataProvider = useDataProvider();
 *     const [user, setUser] = useState();
 *     const [loading, setLoading] = useState(true);
 *     const [error, setError] = useState();
 *     useEffect(() => {
 *         dataProvider.getOne('users', { id: userId })
 *             .then(({ data }) => {
 *                 setUser(data);
 *                 setLoading(false);
 *             })
 *             .catch(error => {
 *                 setError(error);
 *                 setLoading(false);
 *             })
 *     }, []);
 *
 *     if (loading) return <Loading />;
 *     if (error) return <Error />
 *     if (!user) return null;
 *
 *     return (
 *         <ul>
 *             <li>Name: {user.name}</li>
 *             <li>Email: {user.email}</li>
 *         </ul>
 *     )
 * }
 */ const arrayReturnTypes = [
    'getList',
    'getMany',
    'getManyReference'
];
const useDataProvider = ()=>{
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$DataProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]) || __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$defaultDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultDataProvider"];
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const logoutIfAccessDenied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogoutIfAccessDenied$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const dataProviderProxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return new Proxy(dataProvider, {
            get: (_, name)=>{
                if (typeof name === 'symbol' || name === 'then') {
                    return;
                }
                if (name === 'supportAbortSignal') {
                    return dataProvider.supportAbortSignal;
                }
                return (...args)=>{
                    const type = name.toString();
                    if (typeof dataProvider[type] !== 'function') {
                        throw new Error(`Unknown dataProvider function: ${type}`);
                    }
                    try {
                        return dataProvider[type].apply(dataProvider, args).then((response)=>{
                            if (("TURBOPACK compile-time value", "development") === 'development' && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$dataFetchActions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reactAdminFetchActions"].includes(type)) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$validateResponseFormat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(response, type);
                            }
                            if (response?.meta?.prefetched) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$populateQueryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["populateQueryCache"])({
                                    data: response?.meta.prefetched,
                                    queryClient
                                });
                            }
                            return response;
                        }).catch((error)=>{
                            if (("TURBOPACK compile-time value", "development") !== 'production' && // do not log AbortErrors
                            !isAbortError(error)) {
                                console.error(error);
                            }
                            return logoutIfAccessDenied(error).then((loggedOut)=>{
                                if (loggedOut) return {
                                    data: arrayReturnTypes.includes(type) ? [] : {}
                                };
                                throw error;
                            });
                        });
                    } catch (e) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            console.error(e);
                        }
                        throw new Error('The dataProvider threw an error. It should return a rejected Promise instead.');
                    }
                };
            }
        });
    }, [
        dataProvider,
        logoutIfAccessDenied,
        queryClient
    ]);
    return dataProviderProxy;
};
const isAbortError = (error)=>error instanceof DOMException && error.name === 'AbortError'; //# sourceMappingURL=useDataProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useGetList.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetList",
    ()=>useGetList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
const MAX_DATA_LENGTH_TO_CACHE = 100;
const useGetList = (resource, params = {}, options = {})=>{
    const { pagination = {
        page: 1,
        perPage: 25
    }, sort = {
        field: 'id',
        order: 'DESC'
    }, filter = {}, meta } = params;
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDataProvider"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { onError = noop, onSuccess = noop, onSettled = noop, ...queryOptions } = options;
    const onSuccessEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSuccess);
    const onErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onError);
    const onSettledEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onSettled);
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            resource,
            'getList',
            {
                pagination,
                sort,
                filter,
                meta
            }
        ],
        queryFn: (queryParams)=>dataProvider.getList(resource, {
                pagination,
                sort,
                filter,
                meta,
                signal: dataProvider.supportAbortSignal === true ? queryParams.signal : undefined
            }).then(({ data, total, pageInfo, meta })=>({
                    data,
                    total,
                    pageInfo,
                    meta
                })),
        ...queryOptions
    });
    const metaValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(meta);
    const resourceValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(resource);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        metaValue.current = meta;
    }, [
        meta
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        resourceValue.current = resource;
    }, [
        resource
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.data === undefined || result.error != null || result.isFetching) return;
        // optimistically populate the getOne cache
        if (result.data?.data && result.data.data.length <= MAX_DATA_LENGTH_TO_CACHE) {
            result.data.data.forEach((record)=>{
                queryClient.setQueryData([
                    resourceValue.current,
                    'getOne',
                    {
                        id: String(record.id),
                        meta: metaValue.current
                    }
                ], (oldRecord)=>oldRecord ?? record);
            });
        }
        onSuccessEvent(result.data);
    }, [
        onSuccessEvent,
        queryClient,
        result.data,
        result.error,
        result.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.error == null || result.isFetching) return;
        onErrorEvent(result.error);
    }, [
        onErrorEvent,
        result.error,
        result.isFetching
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (result.status === 'pending' || result.isFetching) return;
        onSettledEvent(result.data, result.error);
    }, [
        onSettledEvent,
        result.data,
        result.error,
        result.status,
        result.isFetching
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>result.data ? {
            ...result,
            ...result.data
        } : result, [
        result
    ]);
};
const noop = ()=>undefined; //# sourceMappingURL=useGetList.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useRecordSelection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecordSelection",
    ()=>useRecordSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStoreContext.js [app-ssr] (ecmascript)");
;
;
const useRecordSelection = (args)=>{
    const { resource = '', storeKey, disableSyncWithStore } = args;
    const finalStoreKey = `${storeKey || resource}.selectedIds`;
    const [localSelectionStore, setLocalSelectionStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultIds);
    // As we can't conditionally call a hook, if the disableSyncWithStore is true,
    // we'll ignore the useStore values later on and won't call set functions either.
    const [selectionStore, setSelectionStore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(finalStoreKey, defaultIds);
    const [storeKeys, setStoreKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${resource}.selectedIds.storeKeys`, defaultStoreKeys);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function addStoreKeyToStore() {
        if (!disableSyncWithStore && storeKey) {
            setStoreKeys((storeKeys)=>{
                if (!storeKeys.includes(finalStoreKey)) {
                    return [
                        ...storeKeys,
                        finalStoreKey
                    ];
                } else {
                    return storeKeys;
                }
            });
        }
    }, [
        disableSyncWithStore,
        finalStoreKey,
        setStoreKeys,
        storeKey
    ]);
    const { getItem, setItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStoreContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStoreContext"])();
    const ids = disableSyncWithStore ? localSelectionStore : selectionStore;
    const setStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>disableSyncWithStore ? setLocalSelectionStore : setSelectionStore, [
        disableSyncWithStore,
        setSelectionStore
    ]);
    const selectionModifiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            select: (idsToSelect)=>{
                if (!idsToSelect) return;
                setStore(idsToSelect);
            },
            unselect (idsToRemove, fromAllStoreKeys) {
                if (!idsToRemove || idsToRemove.length === 0) return;
                setStore((ids)=>ids.filter((id)=>!idsToRemove.includes(id)));
                if (!disableSyncWithStore && fromAllStoreKeys) {
                    storeKeys.filter((storeKey)=>storeKey !== finalStoreKey).forEach((storeKey)=>{
                        const ids = getItem(storeKey);
                        if (ids) {
                            setItem(storeKey, ids.filter((id)=>!idsToRemove.includes(id)));
                        }
                    });
                }
            },
            toggle: (id)=>{
                if (typeof id === 'undefined') return;
                setStore((ids)=>{
                    if (!Array.isArray(ids)) return [
                        ...ids
                    ];
                    const index = ids.indexOf(id);
                    const hasId = index > -1;
                    return hasId ? [
                        ...ids.slice(0, index),
                        ...ids.slice(index + 1)
                    ] : [
                        ...ids,
                        id
                    ];
                });
            },
            clearSelection: (fromAllStoreKeys)=>{
                setStore(defaultIds);
                if (!disableSyncWithStore && fromAllStoreKeys) {
                    storeKeys.filter((storeKey)=>storeKey !== finalStoreKey).forEach((storeKey)=>{
                        const ids = getItem(storeKey);
                        if (ids) {
                            setItem(storeKey, defaultIds);
                        }
                    });
                }
            }
        }), [
        disableSyncWithStore,
        finalStoreKey,
        getItem,
        setItem,
        setStore,
        storeKeys
    ]);
    return [
        ids,
        selectionModifiers
    ];
};
const defaultIds = [];
const defaultStoreKeys = []; //# sourceMappingURL=useRecordSelection.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/shallowEqual.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shallowEqual",
    ()=>shallowEqual
]);
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
const shallowEqual = (objA, objB)=>{
    if (is(objA, objB)) return true;
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}; //# sourceMappingURL=shallowEqual.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/removeEmpty.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$shallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/shallowEqual.js [app-ssr] (ecmascript)");
;
const isObject = (obj)=>obj && Object.prototype.toString.call(obj) === '[object Object]';
const isEmpty = (obj)=>obj instanceof Date ? false : obj === '' || obj === null || obj === undefined || (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$shallowEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shallowEqual"])(obj, {});
const removeEmpty = (object)=>Object.keys(object).reduce((acc, key)=>{
        let child = object[key];
        if (isObject(object[key])) {
            child = removeEmpty(object[key]);
        }
        return isEmpty(child) ? acc : {
            ...acc,
            [key]: child
        };
    }, {});
const __TURBOPACK__default__export__ = removeEmpty;
 //# sourceMappingURL=removeEmpty.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/removeKey.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const removeKey = (target, path)=>Object.keys(target).reduce((acc, key)=>{
        if (key !== path) {
            return Object.assign({}, acc, {
                [key]: target[key]
            });
        }
        return acc;
    }, {});
const deepRemoveKey = (target, path)=>{
    const paths = path.split('.');
    if (paths.length === 1) {
        return removeKey(target, path);
    }
    const deepKey = paths[0];
    if (target[deepKey] === undefined) {
        return target;
    }
    const deep = deepRemoveKey(target[deepKey], paths.slice(1).join('.'));
    if (Object.keys(deep).length === 0) {
        return removeKey(target, deepKey);
    }
    return Object.assign({}, target, {
        [deepKey]: deep
    });
};
const __TURBOPACK__default__export__ = deepRemoveKey;
 //# sourceMappingURL=removeKey.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/queryReducer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIDE_FILTER",
    ()=>HIDE_FILTER,
    "SET_FILTER",
    ()=>SET_FILTER,
    "SET_PAGE",
    ()=>SET_PAGE,
    "SET_PER_PAGE",
    ()=>SET_PER_PAGE,
    "SET_SORT",
    ()=>SET_SORT,
    "SHOW_FILTER",
    ()=>SHOW_FILTER,
    "SORT_ASC",
    ()=>SORT_ASC,
    "SORT_DESC",
    ()=>SORT_DESC,
    "default",
    ()=>__TURBOPACK__default__export__,
    "queryReducer",
    ()=>queryReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/removeEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/removeKey.js [app-ssr] (ecmascript)");
;
;
;
const SET_SORT = 'SET_SORT';
const SORT_ASC = 'ASC';
const SORT_DESC = 'DESC';
const SET_PAGE = 'SET_PAGE';
const SET_PER_PAGE = 'SET_PER_PAGE';
const SET_FILTER = 'SET_FILTER';
const SHOW_FILTER = 'SHOW_FILTER';
const HIDE_FILTER = 'HIDE_FILTER';
const oppositeOrder = (direction)=>direction === SORT_DESC ? SORT_ASC : SORT_DESC;
const queryReducer = (previousState, action)=>{
    switch(action.type){
        case SET_SORT:
            if (action.payload.field === previousState.sort) {
                return {
                    ...previousState,
                    order: action.payload.order ?? oppositeOrder(previousState.order),
                    page: 1
                };
            }
            return {
                ...previousState,
                sort: action.payload.field,
                order: action.payload.order || SORT_ASC,
                page: 1
            };
        case SET_PAGE:
            return {
                ...previousState,
                page: action.payload
            };
        case SET_PER_PAGE:
            return {
                ...previousState,
                page: 1,
                perPage: action.payload
            };
        case SET_FILTER:
            {
                return {
                    ...previousState,
                    page: 1,
                    filter: action.payload.filter,
                    displayedFilters: action.payload.displayedFilters ? action.payload.displayedFilters : previousState.displayedFilters
                };
            }
        case SHOW_FILTER:
            {
                if (previousState.displayedFilters && previousState.displayedFilters[action.payload.filterName]) {
                    // the filter is already shown
                    return previousState;
                }
                return {
                    ...previousState,
                    filter: typeof action.payload.defaultValue !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(previousState.filter, action.payload.filterName, action.payload.defaultValue) : previousState.filter,
                    // we don't use lodash.set() for displayed filters
                    // to avoid problems with compound filter names (e.g. 'author.name')
                    displayedFilters: {
                        ...previousState.displayedFilters,
                        [action.payload.filterName]: true
                    }
                };
            }
        case HIDE_FILTER:
            {
                return {
                    ...previousState,
                    filter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeKey$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(previousState.filter, action.payload)),
                    // we don't use lodash.set() for displayed filters
                    // to avoid problems with compound filter names (e.g. 'author.name')
                    displayedFilters: previousState.displayedFilters ? Object.keys(previousState.displayedFilters).reduce((filters, filter)=>{
                        return filter !== action.payload ? {
                            ...filters,
                            [filter]: true
                        } : filters;
                    }, {}) : previousState.displayedFilters
                };
            }
        default:
            return previousState;
    }
};
const __TURBOPACK__default__export__ = queryReducer;
 //# sourceMappingURL=queryReducer.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useListParams.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNumberOrDefault",
    ()=>getNumberOrDefault,
    "getQuery",
    ()=>getQuery,
    "hasCustomParams",
    ()=>hasCustomParams,
    "parseQueryFromLocation",
    ()=>parseQueryFromLocation,
    "useListParams",
    ()=>useListParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/query-string/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/queryReducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/removeEmpty.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const useListParams = ({ debounce = 500, disableSyncWithLocation = false, filterDefaultValues, perPage = 10, resource, sort = defaultSort, storeKey = disableSyncWithLocation ? false : `${resource}.listParams` })=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const [localParams, setLocalParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultParams);
    // As we can't conditionally call a hook, if the storeKey is false,
    // we'll ignore the params variable later on and won't call setParams either.
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(storeKey || `${resource}.listParams`, defaultParams);
    const tempParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const isMounted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMounted"])();
    const requestSignature = [
        location.search,
        resource,
        storeKey,
        JSON.stringify(!storeKey ? localParams : params),
        JSON.stringify(filterDefaultValues),
        JSON.stringify(sort),
        perPage,
        disableSyncWithLocation
    ];
    const queryFromLocation = disableSyncWithLocation ? {} : parseQueryFromLocation(location);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getQuery({
            queryFromLocation,
            params: !storeKey ? localParams : params,
            filterDefaultValues,
            sort,
            perPage
        }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    // if the location includes params (for example from a link like
    // the categories products on the demo), we need to persist them in the
    // store as well so that we don't lose them after a redirection back
    // to the list
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Object.keys(queryFromLocation).length > 0) {
            setParams(query);
        }
    }, [
        location.search
    ]); // eslint-disable-line
    const changeParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((action)=>{
        // do not change params if the component is already unmounted
        // this is necessary because changeParams can be debounced, and therefore
        // executed after the component is unmounted
        if (!isMounted.current) return;
        if (!tempParams.current) {
            // no other changeParams action dispatched this tick
            tempParams.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(query, action);
            // schedule side effects for next tick
            setTimeout(()=>{
                if (!tempParams.current) {
                    // the side effects were already processed by another changeParams
                    return;
                }
                if (disableSyncWithLocation && !storeKey) {
                    setLocalParams(tempParams.current);
                } else if (disableSyncWithLocation && !!storeKey) {
                    setParams(tempParams.current);
                } else {
                    // the useEffect above will apply the changes to the params in the store
                    navigate({
                        search: `?${(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringify"])({
                            ...tempParams.current,
                            filter: JSON.stringify(tempParams.current.filter),
                            displayedFilters: JSON.stringify(tempParams.current.displayedFilters)
                        })}`
                    }, {
                        state: {
                            _scrollToTop: action.type === __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_PAGE"]
                        }
                    });
                }
                tempParams.current = undefined;
            }, 0);
        } else {
            // side effects already scheduled, just change the params
            tempParams.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(tempParams.current, action);
        }
    }, [
        ...requestSignature,
        navigate
    ] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const setSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((sort)=>changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_SORT"],
            payload: sort
        }), [
        changeParams
    ]);
    const setPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newPage)=>changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_PAGE"],
            payload: newPage
        }), [
        changeParams
    ]);
    const setPerPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newPerPage)=>changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_PER_PAGE"],
            payload: newPerPage
        }), [
        changeParams
    ]);
    const filterValues = query.filter || emptyObject;
    const displayedFilterValues = query.displayedFilters || emptyObject;
    const debouncedSetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((filter, displayedFilters)=>{
        changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_FILTER"],
            payload: {
                filter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filter),
                displayedFilters
            }
        });
    }, debounce);
    const setFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filter, displayedFilters = undefined, debounce = false)=>debounce ? debouncedSetFilters(filter, displayedFilters) : changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SET_FILTER"],
            payload: {
                filter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$removeEmpty$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filter),
                displayedFilters
            }
        }), [
        changeParams
    ] // eslint-disable-line react-hooks/exhaustive-deps
    );
    const hideFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filterName)=>{
        changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HIDE_FILTER"],
            payload: filterName
        });
    }, [
        changeParams
    ]);
    const showFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((filterName, defaultValue)=>{
        changeParams({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHOW_FILTER"],
            payload: {
                filterName,
                defaultValue
            }
        });
    }, [
        changeParams
    ]);
    return [
        {
            filterValues,
            requestSignature,
            ...query,
            displayedFilters: displayedFilterValues
        },
        {
            changeParams,
            setPage,
            setPerPage,
            setSort,
            setFilters,
            hideFilter,
            showFilter
        }
    ];
};
const parseObject = (query, field)=>{
    if (query[field] && typeof query[field] === 'string') {
        try {
            query[field] = JSON.parse(query[field]);
        } catch (err) {
            delete query[field];
        }
    }
};
const parseQueryFromLocation = ({ search })=>{
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(search);
    parseObject(query, 'filter');
    parseObject(query, 'displayedFilters');
    return query;
};
const hasCustomParams = (params)=>{
    return params && params.filter && (Object.keys(params.filter).length > 0 || params.order != null || params.page !== 1 || params.perPage != null || params.sort != null);
};
const getQuery = ({ queryFromLocation, params, filterDefaultValues, sort, perPage })=>{
    const query = Object.keys(queryFromLocation).length > 0 ? queryFromLocation : hasCustomParams(params) ? {
        ...params
    } : {
        filter: filterDefaultValues || {}
    };
    if (!query.sort) {
        query.sort = sort.field;
        query.order = sort.order;
    }
    if (query.perPage == null) {
        query.perPage = perPage;
    }
    if (query.page == null) {
        query.page = 1;
    }
    return {
        ...query,
        page: getNumberOrDefault(query.page, 1),
        perPage: getNumberOrDefault(query.perPage, 10)
    };
};
const getNumberOrDefault = (possibleNumber, defaultValue)=>{
    if (typeof possibleNumber === 'undefined') {
        return defaultValue;
    }
    const parsedNumber = typeof possibleNumber === 'string' ? parseInt(possibleNumber, 10) : possibleNumber;
    return isNaN(parsedNumber) ? defaultValue : parsedNumber;
};
const emptyObject = {};
const defaultSort = {
    field: 'id',
    order: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_ASC"]
};
const defaultParams = {}; //# sourceMappingURL=useListParams.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useSelectAll.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSelectAll",
    ()=>useSelectAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useRecordSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useRecordSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
const useSelectAll = (params)=>{
    const { sort, filter, storeKey, disableSyncWithStore } = params;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(params);
    if (!resource) {
        throw new Error('useSelectAll should be used inside a ResourceContextProvider or passed a resource prop');
    }
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDataProvider"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [, { select }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useRecordSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordSelection"])({
        resource,
        storeKey,
        disableSyncWithStore
    });
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const handleSelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(async ({ queryOptions = {}, limit = 250 } = {})=>{
        const { meta, onSuccess, onError, ...otherQueryOptions } = queryOptions;
        try {
            const results = await queryClient.fetchQuery({
                queryKey: [
                    resource,
                    'getList',
                    {
                        pagination: {
                            page: 1,
                            perPage: limit
                        },
                        sort,
                        filter,
                        meta
                    }
                ],
                queryFn: ()=>dataProvider.getList(resource, {
                        pagination: {
                            page: 1,
                            perPage: limit
                        },
                        sort,
                        filter,
                        meta
                    }),
                ...otherQueryOptions
            });
            const allIds = results.data?.map(({ id })=>id) || [];
            select(allIds);
            if (allIds.length === limit) {
                notify('ra.message.select_all_limit_reached', {
                    messageArgs: {
                        max: limit
                    },
                    type: 'warning'
                });
            }
            if (onSuccess) {
                onSuccess(results);
            }
            return results.data;
        } catch (error) {
            if (onError) {
                onError(error);
            } else {
                notify('ra.notification.http_error', {
                    type: 'warning'
                });
            }
        }
    });
    return handleSelectAll;
}; //# sourceMappingURL=useSelectAll.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/export/downloadCSV.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadCSV",
    ()=>downloadCSV
]);
const downloadCSV = (csv, filename = 'export')=>{
    const fakeLink = document.createElement('a');
    fakeLink.style.display = 'none';
    document.body.appendChild(fakeLink);
    const blob = new Blob([
        csv
    ], {
        type: 'text/csv;charset=utf-8'
    });
    // @ts-ignore
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // Manage IE11+ & Edge
        // @ts-ignore
        window.navigator.msSaveOrOpenBlob(blob, `${filename}.csv`);
    } else {
        fakeLink.setAttribute('href', URL.createObjectURL(blob));
        fakeLink.setAttribute('download', `${filename}.csv`);
        fakeLink.click();
    }
}; //# sourceMappingURL=downloadCSV.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/export/defaultExporter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultExporter",
    ()=>defaultExporter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$jsonexport$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/jsonexport/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$downloadCSV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/export/downloadCSV.js [app-ssr] (ecmascript)");
;
;
const defaultExporter = (data, _, __, resource)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$jsonexport$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(data, (err, csv)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$downloadCSV$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadCSV"])(csv, resource)); //# sourceMappingURL=defaultExporter.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_MAX_RESULTS",
    ()=>DEFAULT_MAX_RESULTS,
    "getListControllerProps",
    ()=>getListControllerProps,
    "injectedProps",
    ()=>injectedProps,
    "sanitizeListRestProps",
    ()=>sanitizeListRestProps,
    "useListController",
    ()=>useListController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthenticated.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useRequireAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useRequireAccess.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useGetList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useGetList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useRecordSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useRecordSelection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListParams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSelectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useSelectAll.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$defaultExporter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/export/defaultExporter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/queryReducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
const useListController = (props = {})=>{
    const { debounce = 500, disableAuthentication = false, disableSyncWithLocation = false, exporter = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$defaultExporter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultExporter"], filter, filterDefaultValues, perPage = 10, queryOptions = {}, sort = defaultSort, storeKey } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { meta, ...otherQueryOptions } = queryOptions;
    if (!resource) {
        throw new Error(`useListController requires a non-empty resource prop or context`);
    }
    if (filter && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(filter) || Array.isArray(filter) && filter.some(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"]))) {
        throw new Error('useListController received a React element as `filter` props. If you intended to set the list filter elements, use the `filters` (with an s) prop instead. The `filter` prop is internal and should not be set by the developer.');
    }
    const { isPending: isPendingAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthenticated"])({
        enabled: !disableAuthentication
    });
    const { isPending: isPendingCanAccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useRequireAccess$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRequireAccess"])({
        action: 'list',
        resource,
        enabled: !disableAuthentication && !isPendingAuthenticated
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDataProvider"])();
    const [query, queryModifiers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListParams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListParams"])({
        debounce,
        disableSyncWithLocation,
        filterDefaultValues,
        perPage,
        resource,
        sort,
        storeKey
    });
    const [selectedIds, selectionModifiers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useRecordSelection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordSelection"])({
        resource,
        disableSyncWithStore: storeKey === false,
        storeKey: storeKey === false ? undefined : storeKey
    });
    const onUnselectItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((fromAllStoreKeys)=>{
        return selectionModifiers.unselect(selectedIds, fromAllStoreKeys);
    }, [
        selectedIds,
        selectionModifiers
    ]);
    const { data, pageInfo, total, meta: responseMeta, error, isLoading, isFetching, isPending, refetch, isPaused, isPlaceholderData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useGetList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetList"])(resource, {
        pagination: {
            page: query.page,
            perPage: query.perPage
        },
        sort: {
            field: query.sort,
            order: query.order
        },
        filter: {
            ...query.filter,
            ...filter
        },
        meta
    }, {
        enabled: !isPendingAuthenticated && !isPendingCanAccess || disableAuthentication,
        placeholderData: (previousData)=>previousData,
        retry: false,
        onError: (error)=>notify(error?.message || 'ra.notification.http_error', {
                type: 'error',
                messageArgs: {
                    _: error?.message
                }
            }),
        ...otherQueryOptions
    });
    // change page if there is no data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (query.page <= 0 || !isFetching && query.page > 1 && (data == null || data?.length === 0)) {
            // Query for a page that doesn't exist, set page to 1
            queryModifiers.setPage(1);
            return;
        }
        if (total == null) {
            return;
        }
        const totalPages = Math.ceil(total / query.perPage) || 1;
        if (!isFetching && query.page > totalPages) {
            // Query for a page out of bounds, set page to the last existing page
            // It occurs when deleting the last element of the last page
            queryModifiers.setPage(totalPages);
        }
    }, [
        isFetching,
        query.page,
        query.perPage,
        data,
        queryModifiers,
        total
    ]);
    const currentSort = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            field: query.sort,
            order: query.order
        }), [
        query.sort,
        query.order
    ]);
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const defaultTitle = translate(`resources.${resource}.page.list`, {
        _: translate('ra.page.list', {
            name: getResourceLabel(resource, 2)
        })
    });
    const onSelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSelectAll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectAll"])({
        resource,
        sort: {
            field: query.sort,
            order: query.order
        },
        filter: {
            ...query.filter,
            ...filter
        },
        disableSyncWithStore: storeKey === false,
        storeKey: storeKey === false ? undefined : storeKey
    });
    const getData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(async ({ maxResults, meta: metaOverride } = {})=>{
        if (total === 0) {
            return [];
        }
        const limit = maxResults ?? (total != null ? total : DEFAULT_MAX_RESULTS);
        const { data } = await dataProvider.getList(resource, {
            sort: currentSort,
            filter: filter ? {
                ...query.filterValues,
                ...filter
            } : query.filterValues,
            pagination: {
                page: 1,
                perPage: limit
            },
            meta: metaOverride ?? meta
        });
        return data;
    });
    return {
        sort: currentSort,
        data,
        meta: responseMeta,
        defaultTitle,
        displayedFilters: query.displayedFilters,
        error,
        exporter,
        filter,
        filterValues: query.filterValues,
        hideFilter: queryModifiers.hideFilter,
        isFetching,
        isLoading,
        isPaused,
        isPending,
        isPlaceholderData,
        onSelect: selectionModifiers.select,
        onSelectAll,
        onToggleItem: selectionModifiers.toggle,
        onUnselectItems,
        page: query.page,
        perPage: query.perPage,
        refetch,
        resource,
        selectedIds,
        setFilters: queryModifiers.setFilters,
        setPage: queryModifiers.setPage,
        setPerPage: queryModifiers.setPerPage,
        setSort: queryModifiers.setSort,
        showFilter: queryModifiers.showFilter,
        total,
        getData,
        hasNextPage: pageInfo ? pageInfo.hasNextPage : total != null ? query.page * query.perPage < total : undefined,
        hasPreviousPage: pageInfo ? pageInfo.hasPreviousPage : query.page > 1
    };
};
const defaultSort = {
    field: 'id',
    order: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$queryReducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_ASC"]
};
const DEFAULT_MAX_RESULTS = 1000;
const injectedProps = [
    'sort',
    'data',
    'defaultTitle',
    'displayedFilters',
    'error',
    'exporter',
    'getData',
    'filterValues',
    'hasNextPage',
    'hasPreviousPage',
    'hideFilter',
    'isFetching',
    'isLoading',
    'isPending',
    'onSelect',
    'onSelectAll',
    'onToggleItem',
    'onUnselectItems',
    'page',
    'perPage',
    'refetch',
    'refresh',
    'resource',
    'selectedIds',
    'setFilters',
    'setPage',
    'setPerPage',
    'setSort',
    'showFilter',
    'total',
    'totalPages'
];
const getListControllerProps = (props)=>injectedProps.reduce((acc, key)=>({
            ...acc,
            [key]: props[key]
        }), {});
const sanitizeListRestProps = (props)=>Object.keys(props).filter((propName)=>!injectedProps.includes(propName)).reduce((acc, key)=>({
            ...acc,
            [key]: props[key]
        }), {}); //# sourceMappingURL=useListController.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListContext",
    ()=>ListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const ListContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
ListContext.displayName = 'ListContext'; //# sourceMappingURL=ListContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContextWithProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListContextWithProps",
    ()=>useListContextWithProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContext.js [app-ssr] (ecmascript)");
;
;
;
const useListContextWithProps = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListContext"]);
    // Props take precedence over the context
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, props != null ? extractListContextProps(props) : {}, context), [
        context,
        props
    ]);
};
/**
 * Extract only the list controller props
 *
 * @param {Object} props Props passed to the useListContext hook
 *
 * @returns {ListControllerResult} List controller props
 */ const extractListContextProps = ({ sort, data, defaultTitle, displayedFilters, exporter, filterValues, hasCreate, hideFilter, isFetching, isLoading, isPending, onSelect, onSelectAll, onToggleItem, onUnselectItems, page, perPage, refetch, resource, selectedIds, setFilters, setPage, setPerPage, setSort, showFilter, total })=>({
        sort,
        data,
        defaultTitle,
        displayedFilters,
        exporter,
        filterValues,
        hasCreate,
        hideFilter,
        isFetching,
        isLoading,
        isPending,
        onSelect,
        onSelectAll,
        onToggleItem,
        onUnselectItems,
        page,
        perPage,
        refetch,
        resource,
        selectedIds,
        setFilters,
        setPage,
        setPerPage,
        setSort,
        showFilter,
        total
    }); //# sourceMappingURL=useListContextWithProps.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/ResourceContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceContextProvider",
    ()=>ResourceContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceContext.js [app-ssr] (ecmascript)");
;
;
const ResourceContextProvider = ({ children, value })=>value ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceContext"].Provider, {
        value: value
    }, children) : children; //# sourceMappingURL=ResourceContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/OptionalResourceContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionalResourceContextProvider",
    ()=>OptionalResourceContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceContextProvider.js [app-ssr] (ecmascript)");
;
;
const OptionalResourceContextProvider = ({ value, children })=>value ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceContextProvider"], {
        value: value
    }, children) : children; //# sourceMappingURL=OptionalResourceContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useExpanded.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useExpandAll",
    ()=>useExpandAll,
    "useExpanded",
    ()=>useExpanded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
;
;
const useExpanded = (resource, id, single = false)=>{
    const [expandedIds, setExpandedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${resource}.datagrid.expanded`, emptyArray);
    const expanded = Array.isArray(expandedIds) ? expandedIds.map((el)=>el == id).indexOf(true) !== -1 : false;
    const toggleExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setExpandedIds((ids)=>{
            if (!Array.isArray(ids)) {
                return [
                    id
                ];
            }
            const index = ids.findIndex((el)=>el == id); // eslint-disable-line eqeqeq
            return index > -1 ? single ? [] : [
                ...ids.slice(0, index),
                ...ids.slice(index + 1)
            ] : single ? [
                id
            ] : [
                ...ids,
                id
            ];
        });
    }, [
        setExpandedIds,
        id,
        single
    ]);
    return [
        expanded,
        toggleExpanded
    ];
};
const emptyArray = [];
const useExpandAll = (resource, ids)=>{
    const [expandedIds, setExpandedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${resource}.datagrid.expanded`, []);
    const isExpanded = Array.isArray(expandedIds) ? expandedIds.some((id)=>ids.some((id2)=>id2 == id)) : false;
    const toggleExpandedAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const unaffectedExpandedIds = expandedIds.filter(// eslint-disable-next-line eqeqeq
        (expanded_id)=>!ids.some((id)=>id == expanded_id));
        setExpandedIds(isExpanded ? unaffectedExpandedIds : unaffectedExpandedIds.concat(ids));
    }, [
        expandedIds,
        setExpandedIds,
        isExpanded,
        ids
    ]);
    return [
        isExpanded,
        toggleExpandedAll
    ];
}; //# sourceMappingURL=useExpanded.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccessCallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanAccessCallback",
    ()=>useCanAccessCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const useCanAccessCallback = (options = {})=>{
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const authProviderHasCanAccess = !!authProvider?.canAccess;
    const { mutateAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: async (params)=>{
            if (!authProvider || !authProvider.canAccess) {
                return true;
            }
            return authProvider.canAccess(params);
        },
        retry: false,
        ...options
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>authProviderHasCanAccess ? mutateAsync : ()=>true, [
        authProviderHasCanAccess,
        mutateAsync
    ]);
}; //# sourceMappingURL=useCanAccessCallback.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useGetPathForRecordCallback.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetPathForRecordCallback",
    ()=>useGetPathForRecordCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccessCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccessCallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-ssr] (ecmascript)");
;
;
;
;
;
const useGetPathForRecordCallback = (options = {})=>{
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(options);
    const resourceDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreatePath"])();
    const canAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccessCallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCanAccessCallback"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (params)=>{
        const { link, record } = params || {};
        const finalResource = params.resource ?? resource;
        if (!finalResource) {
            throw new Error('Cannot generate a link for a record without a resource. You must use useGetPathForRecordCallback within a ResourceContextProvider, or pass a resource parameter.');
        }
        const resourceDefinition = resourceDefinitions[finalResource] ?? {};
        if (record == null || link === false) {
            return false;
        }
        // When the link prop is not provided, we infer a default value and check whether users
        // can access it
        if (link == null) {
            // check if the user can access the show and edit pages in parallel
            const [canAccessShow, canAccessEdit] = await Promise.all([
                resourceDefinition.hasShow ? canAccess({
                    action: 'show',
                    resource: finalResource,
                    record
                }) : Promise.resolve(false),
                resourceDefinition.hasEdit ? canAccess({
                    action: 'edit',
                    resource: finalResource,
                    record
                }) : Promise.resolve(false)
            ]);
            if (canAccessShow) {
                return createPath({
                    resource: finalResource,
                    id: record.id,
                    type: 'show'
                });
            }
            if (canAccessEdit) {
                return createPath({
                    resource: finalResource,
                    id: record.id,
                    type: 'edit'
                });
            }
            return false;
        }
        const linkFunc = typeof link === 'function' ? link : ()=>link;
        const linkResult = linkFunc(record, finalResource);
        if (linkResult === false) {
            return false;
        }
        const linkResultIsPromise = isPromise(linkResult);
        if (linkResultIsPromise) {
            const resolvedLink = await linkResult;
            if (resolvedLink === false) {
                // already set to false by default
                return;
            }
            return createPath({
                resource: finalResource,
                id: record.id,
                type: resolvedLink
            });
        }
        return createPath({
            resource: finalResource,
            id: record.id,
            type: linkResult
        });
    }, [
        canAccess,
        createPath,
        resourceDefinitions,
        resource
    ]);
};
const isPromise = (value)=>value && typeof value.then === 'function'; //# sourceMappingURL=useGetPathForRecordCallback.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceDefinition",
    ()=>useResourceDefinition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/defaults.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
;
;
;
;
const useResourceDefinition = (props)=>{
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const resourceDefinitions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    const { hasCreate, hasEdit, hasList, hasShow, recordRepresentation } = props || {};
    const definition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({}, {
            hasCreate,
            hasEdit,
            hasList,
            hasShow,
            recordRepresentation
        }, resource ? resourceDefinitions[resource] : {});
    }, [
        resource,
        resourceDefinitions,
        hasCreate,
        hasEdit,
        hasList,
        hasShow,
        recordRepresentation
    ]);
    return definition;
}; //# sourceMappingURL=useResourceDefinition.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListContext",
    ()=>useListContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContext.js [app-ssr] (ecmascript)");
;
;
const useListContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListContext"]);
    if (!context) {
        throw new Error('useListContext must be used inside a ListContextProvider');
    }
    return context;
}; //# sourceMappingURL=useListContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/useAddUndoableMutation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddUndoableMutation",
    ()=>useAddUndoableMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$AddUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/AddUndoableMutationContext.js [app-ssr] (ecmascript)");
;
;
const useAddUndoableMutation = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$AddUndoableMutationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AddUndoableMutationContext"]); //# sourceMappingURL=useAddUndoableMutation.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useMutationWithMutationMode.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutationWithMutationMode",
    ()=>useMutationWithMutationMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$useAddUndoableMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/useAddUndoableMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
const useMutationWithMutationMode = (params = {}, options)=>{
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const addUndoableMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$useAddUndoableMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAddUndoableMutation"])();
    const { mutationKey, mutationMode = 'pessimistic', mutationFn, getMutateWithMiddlewares, updateCache, getQueryKeys, onUndo, ...mutationOptions } = options;
    if (mutationFn == null) {
        throw new Error('useMutationWithMutationMode mutation requires a mutationFn');
    }
    const mutationFnEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(mutationFn);
    const updateCacheEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(updateCache);
    const getQueryKeysEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(getQueryKeys);
    const getSnapshotEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(/**
     * Snapshot the previous values via queryClient.getQueriesData()
     *
     * The snapshotData ref will contain an array of tuples [query key, associated data]
     *
     * @example
     * [
     *   [['posts', 'getList'], { data: [{ id: 1, title: 'Hello' }], total: 1 }],
     *   [['posts', 'getMany'], [{ id: 1, title: 'Hello' }]],
     * ]
     *
     * @see https://tanstack.com/query/v5/docs/react/reference/QueryClient#queryclientgetqueriesdata
     */ (queryKeys)=>queryKeys.reduce((prev, queryKey)=>prev.concat(queryClient.getQueriesData({
                queryKey
            })), []));
    const onUndoEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(onUndo ?? noop);
    const getMutateWithMiddlewaresEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(getMutateWithMiddlewares ?? noop);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(mutationMode);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mode.current = mutationMode;
    }, [
        mutationMode
    ]);
    // This ref won't be updated when params change in an effect, only when the mutate callback is called (See L247)
    // This ensures that for undoable and optimistic mutations, the params are not changed by side effects (unselectAll for instance)
    // _after_ the mutate function has been called, while keeping the ability to change declaration time params _until_ the mutation is called.
    const paramsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(params);
    // Ref that stores the snapshot of the state before the mutation to allow reverting it
    const snapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Ref that stores the mutation with middlewares to avoid losing them if the calling component is unmounted
    const mutateWithMiddlewares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(mutationFnEvent);
    // We need to store the call-time onError and onSettled in refs to be able to call them in the useMutation hook even
    // when the calling component is unmounted
    const callTimeOnError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    const callTimeOnSettled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    // We don't need to keep a ref on the onSuccess callback as we call it ourselves for optimistic and
    // undoable mutations. There is a limitation though: if one of the side effects applied by the onSuccess callback
    // unmounts the component that called the useUpdate hook (redirect for instance), it must be the last one applied,
    // otherwise the other side effects may not applied.
    const hasCallTimeOnSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey,
        mutationFn: async (params)=>{
            if (params == null) {
                throw new Error('useMutationWithMutationMode mutation requires parameters');
            }
            return mutateWithMiddlewares.current(params)// Middlewares expect the data property of the dataProvider response
            .then(({ data })=>data);
        },
        ...mutationOptions,
        onMutate: async (...args)=>{
            if (mutationOptions.onMutate) {
                const userContext = await mutationOptions.onMutate(...args) || {};
                return {
                    snapshot: snapshot.current,
                    // @ts-ignore
                    ...userContext
                };
            } else {
                // Return a context object with the snapshot value
                return {
                    snapshot: snapshot.current
                };
            }
        },
        onError: (...args)=>{
            if (mode.current === 'optimistic' || mode.current === 'undoable') {
                const [, , onMutateResult] = args;
                // If the mutation fails, use the context returned from onMutate to rollback
                onMutateResult.snapshot.forEach(([key, value])=>{
                    queryClient.setQueryData(key, value);
                });
            }
            if (callTimeOnError.current) {
                return callTimeOnError.current(...args);
            }
            if (mutationOptions.onError) {
                return mutationOptions.onError(...args);
            }
        // call-time error callback is executed by react-query
        },
        onSuccess: (...args)=>{
            if (mode.current === 'pessimistic') {
                const [data, variables] = args;
                // update the getOne and getList query cache with the new result
                updateCacheEvent({
                    ...paramsRef.current,
                    ...variables
                }, {
                    mutationMode: mode.current
                }, data);
                if (mutationOptions.onSuccess && !hasCallTimeOnSuccess.current) {
                    mutationOptions.onSuccess(...args);
                }
            }
        },
        onSettled: (...args)=>{
            if (mode.current === 'optimistic' || mode.current === 'undoable') {
                const [, , variables] = args;
                // Always refetch after error or success:
                getQueryKeysEvent({
                    ...paramsRef.current,
                    ...variables
                }, {
                    mutationMode: mode.current
                }).forEach((queryKey)=>{
                    queryClient.invalidateQueries({
                        queryKey
                    });
                });
            }
            if (callTimeOnSettled.current) {
                return callTimeOnSettled.current(...args);
            }
            if (mutationOptions.onSettled) {
                return mutationOptions.onSettled(...args);
            }
        }
    });
    const mutate = async (callTimeParams = {}, callTimeOptions = {})=>{
        const { mutationMode, returnPromise = mutationOptions.returnPromise, onError, onSettled, onSuccess, ...otherCallTimeOptions } = callTimeOptions;
        // store the hook time params *at the moment of the call*
        // because they may change afterwards, which would break the undoable mode
        // as the previousData would be overwritten by the optimistic update
        paramsRef.current = params;
        // Store the mutation with middlewares to avoid losing them if the calling component is unmounted
        if (getMutateWithMiddlewares) {
            mutateWithMiddlewares.current = getMutateWithMiddlewaresEvent((params)=>{
                return mutationFnEvent(params);
            });
        } else {
            mutateWithMiddlewares.current = mutationFnEvent;
        }
        // We need to keep the onSuccess callback here and not in the useMutation for undoable mutations
        hasCallTimeOnSuccess.current = !!onSuccess;
        // We need to store the onError and onSettled callbacks here to be able to call them in the useMutation hook
        // so that they are called even when the calling component is unmounted
        callTimeOnError.current = onError;
        callTimeOnSettled.current = onSettled;
        if (mutationMode) {
            mode.current = mutationMode;
        }
        if (returnPromise && mode.current !== 'pessimistic') {
            console.warn('The returnPromise parameter can only be used if the mutationMode is set to pessimistic');
        }
        snapshot.current = getSnapshotEvent(getQueryKeysEvent({
            ...paramsRef.current,
            ...callTimeParams
        }, {
            mutationMode: mode.current
        }));
        if (mode.current === 'pessimistic') {
            if (returnPromise) {
                return mutation.mutateAsync({
                    ...paramsRef.current,
                    ...callTimeParams
                }, // We don't pass onError and onSettled here as we will call them in the useMutation hook side effects
                {
                    onSuccess,
                    ...otherCallTimeOptions
                });
            }
            return mutation.mutate({
                ...paramsRef.current,
                ...callTimeParams
            }, // We don't pass onError and onSettled here as we will call them in the useMutation hook side effects
            {
                onSuccess,
                ...otherCallTimeOptions
            });
        }
        // Cancel any outgoing re-fetches (so they don't overwrite our optimistic update)
        await Promise.all(snapshot.current.map(([queryKey])=>queryClient.cancelQueries({
                queryKey
            })));
        // Optimistically update to the new value
        const optimisticResult = updateCacheEvent({
            ...paramsRef.current,
            ...callTimeParams
        }, {
            mutationMode: mode.current
        }, undefined);
        // run the success callbacks during the next tick
        setTimeout(()=>{
            if (onSuccess) {
                onSuccess(optimisticResult, {
                    ...paramsRef.current,
                    ...callTimeParams
                }, {
                    snapshot: snapshot.current
                }, {
                    client: queryClient,
                    mutationKey,
                    meta: mutationOptions.meta
                });
            } else if (mutationOptions.onSuccess && !hasCallTimeOnSuccess.current) {
                mutationOptions.onSuccess(optimisticResult, {
                    ...paramsRef.current,
                    ...callTimeParams
                }, {
                    snapshot: snapshot.current
                }, {
                    client: queryClient,
                    mutationKey,
                    meta: mutationOptions.meta
                });
            }
        }, 0);
        if (mode.current === 'optimistic') {
            // call the mutate method without success side effects
            return mutation.mutate({
                ...paramsRef.current,
                ...callTimeParams
            });
        } else {
            // Undoable mutation: add the mutation to the undoable queue.
            // The Notification component will dequeue it when the user confirms or cancels the message.
            addUndoableMutation(({ isUndo })=>{
                if (isUndo) {
                    if (onUndo) {
                        onUndoEvent({
                            ...paramsRef.current,
                            ...callTimeParams
                        }, {
                            mutationMode: mode.current
                        });
                    }
                    // rollback
                    snapshot.current.forEach(([key, value])=>{
                        queryClient.setQueryData(key, value);
                    });
                } else {
                    // call the mutate method without success side effects
                    mutation.mutate({
                        ...paramsRef.current,
                        ...callTimeParams
                    });
                }
            });
        }
    };
    const mutationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isLoading: mutation.isPending,
            ...mutation
        }), [
        mutation
    ]);
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(mutate),
        mutationResult
    ];
};
const noop = ()=>{}; //# sourceMappingURL=useMutationWithMutationMode.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDeleteMany.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteMany",
    ()=>useDeleteMany
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useMutationWithMutationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useMutationWithMutationMode.js [app-ssr] (ecmascript)");
;
;
;
;
const useDeleteMany = (resource, params = {}, options = {})=>{
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDataProvider"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { mutationMode = 'pessimistic', onSettled, ...mutationOptions } = options;
    const [mutate, mutationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useMutationWithMutationMode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutationWithMutationMode"])({
        resource,
        ...params
    }, {
        ...mutationOptions,
        mutationKey: [
            resource,
            'deleteMany',
            params
        ],
        mutationMode,
        mutationFn: ({ resource, ...params })=>{
            if (resource == null) {
                throw new Error('useDeleteMany mutation requires a resource');
            }
            if (params.ids == null) {
                throw new Error('useDeleteMany mutation requires an array of ids');
            }
            return dataProvider.deleteMany(resource, params);
        },
        updateCache: ({ resource, ...params }, { mutationMode })=>{
            // hack: only way to tell react-query not to fetch this query for the next 5 seconds
            // because setQueryData doesn't accept a stale time option
            const now = Date.now();
            const updatedAt = mutationMode === 'undoable' ? now + 5 * 1000 : now;
            const updateColl = (old)=>{
                if (!old) return old;
                let newCollection = [
                    ...old
                ];
                params.ids?.forEach((id)=>{
                    const index = newCollection.findIndex(// eslint-disable-next-line eqeqeq
                    (record)=>record.id == id);
                    if (index === -1) {
                        return;
                    }
                    newCollection = [
                        ...newCollection.slice(0, index),
                        ...newCollection.slice(index + 1)
                    ];
                });
                return newCollection;
            };
            queryClient.setQueriesData({
                queryKey: [
                    resource,
                    'getList'
                ]
            }, (res)=>{
                if (!res || !res.data) return res;
                const newCollection = updateColl(res.data);
                const recordWasFound = newCollection.length < res.data.length;
                return recordWasFound ? {
                    ...res,
                    data: newCollection,
                    total: res.total ? res.total - (res.data.length - newCollection.length) : undefined
                } : res;
            }, {
                updatedAt
            });
            queryClient.setQueriesData({
                queryKey: [
                    resource,
                    'getInfiniteList'
                ]
            }, (res)=>{
                if (!res || !res.pages) return res;
                return {
                    ...res,
                    pages: res.pages.map((page)=>{
                        const newCollection = updateColl(page.data);
                        const recordWasFound = newCollection.length < page.data.length;
                        return recordWasFound ? {
                            ...page,
                            data: newCollection,
                            total: page.total ? page.total - (page.data.length - newCollection.length) : undefined
                        } : page;
                    })
                };
            }, {
                updatedAt
            });
            queryClient.setQueriesData({
                queryKey: [
                    resource,
                    'getMany'
                ]
            }, (coll)=>coll && coll.length > 0 ? updateColl(coll) : coll, {
                updatedAt
            });
            queryClient.setQueriesData({
                queryKey: [
                    resource,
                    'getManyReference'
                ]
            }, (res)=>{
                if (!res || !res.data) return res;
                const newCollection = updateColl(res.data);
                const recordWasFound = newCollection.length < res.data.length;
                if (!recordWasFound) {
                    return res;
                }
                if (res.total) {
                    return {
                        ...res,
                        data: newCollection,
                        total: res.total - (res.data.length - newCollection.length)
                    };
                }
                if (res.pageInfo) {
                    return {
                        ...res,
                        data: newCollection
                    };
                }
                throw new Error('Found getManyReference result in cache without total or pageInfo');
            }, {
                updatedAt
            });
            return params.ids;
        },
        getQueryKeys: ({ resource })=>{
            const queryKeys = [
                [
                    resource,
                    'getList'
                ],
                [
                    resource,
                    'getInfiniteList'
                ],
                [
                    resource,
                    'getMany'
                ],
                [
                    resource,
                    'getManyReference'
                ]
            ];
            return queryKeys;
        },
        onSettled: (...args)=>{
            const [, , , mutateResult] = args;
            // For deletion, we always refetch after error or success:
            mutateResult.snapshot.forEach(([queryKey])=>{
                queryClient.invalidateQueries({
                    queryKey
                });
            });
            onSettled?.(...args);
        }
    });
    const deleteMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])((callTimeResource = resource, callTimeParams = {}, callTimeOptions = {})=>{
        return mutate({
            resource: callTimeResource,
            ...callTimeParams
        }, callTimeOptions);
    });
    return [
        deleteMany,
        mutationResult
    ];
}; //# sourceMappingURL=useDeleteMany.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/button/useBulkDeleteController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBulkDeleteController",
    ()=>useBulkDeleteController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDeleteMany$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDeleteMany.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useRefresh.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const useBulkDeleteController = (props)=>{
    const { mutationMode = 'undoable', mutationOptions = {}, successMessage } = props;
    const { meta: mutationMeta, ...otherMutationOptions } = mutationOptions;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNotify"])();
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRefresh"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { selectedIds, onUnselectItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListContext"])();
    const [deleteMany, { isPending }] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDeleteMany$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDeleteMany"])(resource, undefined, {
        onSuccess: ()=>{
            notify(successMessage ?? `resources.${resource}.notifications.deleted`, {
                type: 'info',
                messageArgs: {
                    smart_count: selectedIds.length,
                    _: translate('ra.notification.deleted', {
                        smart_count: selectedIds.length
                    })
                },
                undoable: mutationMode === 'undoable'
            });
            onUnselectItems(true);
        },
        onError: (error)=>{
            notify(typeof error === 'string' ? error : error?.message || 'ra.notification.http_error', {
                type: 'error',
                messageArgs: {
                    _: typeof error === 'string' ? error : error?.message
                }
            });
            refresh();
        }
    });
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        deleteMany(resource, {
            ids: selectedIds,
            meta: mutationMeta
        }, {
            mutationMode,
            ...otherMutationOptions
        });
    }, [
        deleteMany,
        mutationMeta,
        mutationMode,
        otherMutationOptions,
        resource,
        selectedIds
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isPending,
            isLoading: isPending,
            handleDelete
        }), [
        isPending,
        handleDelete
    ]);
}; //# sourceMappingURL=useBulkDeleteController.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListFilterContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListFilterContext",
    ()=>ListFilterContext,
    "usePickFilterContext",
    ()=>usePickFilterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/pick.js [app-ssr] (ecmascript)");
;
;
const ListFilterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const usePickFilterContext = (context)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(context, [
            'displayedFilters',
            'filterValues',
            'hideFilter',
            'setFilters',
            'showFilter',
            'resource'
        ]), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        context.displayedFilters,
        context.filterValues,
        context.hideFilter,
        context.setFilters,
        context.showFilter
    ]);
ListFilterContext.displayName = 'ListFilterContext'; //# sourceMappingURL=ListFilterContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListSortContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListSortContext",
    ()=>ListSortContext,
    "usePickSortContext",
    ()=>usePickSortContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/pick.js [app-ssr] (ecmascript)");
;
;
const ListSortContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const usePickSortContext = (context)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(context, [
            'sort',
            'setSort',
            'resource'
        ]), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        context.sort,
        context.setSort
    ]);
ListSortContext.displayName = 'ListSortContext'; //# sourceMappingURL=ListSortContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListPaginationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListPaginationContext",
    ()=>ListPaginationContext,
    "usePickPaginationContext",
    ()=>usePickPaginationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/pick.js [app-ssr] (ecmascript)");
;
;
const ListPaginationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
ListPaginationContext.displayName = 'ListPaginationContext';
const usePickPaginationContext = (context)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$pick$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(context, [
            'isLoading',
            'isPending',
            'hasPreviousPage',
            'hasNextPage',
            'page',
            'perPage',
            'setPage',
            'setPerPage',
            'total',
            'resource'
        ]), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        context.isLoading,
        context.isPending,
        context.hasPreviousPage,
        context.hasNextPage,
        context.page,
        context.perPage,
        context.setPage,
        context.setPerPage,
        context.total
    ]); //# sourceMappingURL=ListPaginationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContextProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListContextProvider",
    ()=>ListContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListFilterContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListFilterContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListSortContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListSortContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListPaginationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListPaginationContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ListContextProvider = ({ value, children })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListContext"].Provider, {
        value: value
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListFilterContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListFilterContext"].Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListFilterContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickFilterContext"])(value)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListSortContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListSortContext"].Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListSortContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickSortContext"])(value)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListPaginationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListPaginationContext"].Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListPaginationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePickPaginationContext"])(value)
    }, children)))); //# sourceMappingURL=ListContextProvider.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/auth/useIsAuthPending.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsAuthPending",
    ()=>useIsAuthPending
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-ssr] (ecmascript)");
;
;
;
const useIsAuthPending = (params)=>{
    const { action, ...props } = params;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!authProvider) {
        return false;
    }
    const authQueryState = queryClient.getQueryState([
        'auth',
        'checkAuth',
        {}
    ]);
    const canAccessQueryState = queryClient.getQueryState([
        'auth',
        'canAccess',
        {
            action,
            resource
        }
    ]);
    if (authQueryState?.status === 'pending' || authProvider.canAccess && canAccessQueryState?.status === 'pending') {
        return true;
    }
    return false;
}; //# sourceMappingURL=useIsAuthPending.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/ListBase.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListBase",
    ()=>ListBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$OptionalResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/OptionalResourceContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useIsAuthPending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useIsAuthPending.js [app-ssr] (ecmascript)");
;
;
;
;
;
const ListBase = ({ children, emptyWhileLoading, authLoading, loading, offline, error, empty, render, ...props })=>{
    const controllerProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListController"])(props);
    const isAuthPending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useIsAuthPending$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsAuthPending"])({
        resource: controllerProps.resource,
        action: 'list'
    });
    if (!render && !children) {
        throw new Error("<ListBase> requires either a 'render' prop or 'children' prop");
    }
    const { isPaused, isPending, isPlaceholderData, error: errorState, data, total, hasPreviousPage, hasNextPage, filterValues } = controllerProps;
    const showAuthLoading = isAuthPending && !props.disableAuthentication && authLoading !== false && authLoading !== undefined;
    const showLoading = !isPaused && (!props.disableAuthentication && isAuthPending || isPending) && loading !== false && loading !== undefined;
    const showOffline = isPaused && // If isPending and isPaused are true, we are offline and couldn't even load the initial data
    // If isPaused and isPlaceholderData are true, we are offline and couldn't even load data with different parameters on the same useQuery observer
    (isPending || isPlaceholderData) && offline !== false && offline !== undefined;
    const showError = errorState && error !== false && error !== undefined;
    const showEmptyWhileLoading = isPending && !showOffline && emptyWhileLoading === true;
    const showEmpty = !errorState && // the list is not loading data for the first time
    !isPending && // the API returned no data (using either normal or partial pagination)
    (total === 0 || total == null && hasPreviousPage === false && hasNextPage === false && // @ts-ignore FIXME total may be undefined when using partial pagination but the ListControllerResult type is wrong about it
    data.length === 0) && // the user didn't set any filters
    !Object.keys(filterValues).length && // there is an empty page component
    empty !== undefined && empty !== false;
    return(// We pass props.resource here as we don't need to create a new ResourceContext if the props is not provided
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$OptionalResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionalResourceContextProvider"], {
        value: props.resource
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListContextProvider"], {
        value: controllerProps
    }, showAuthLoading ? authLoading : showLoading ? loading : showOffline ? offline : showError ? error : showEmptyWhileLoading ? null : showEmpty ? empty : render ? render(controllerProps) : children)));
}; //# sourceMappingURL=ListBase.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/FilterContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterContext",
    ()=>FilterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const FilterContext = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](undefined); //# sourceMappingURL=FilterContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/useDebouncedEvent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebouncedEvent",
    ()=>useDebouncedEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-ssr] (ecmascript)");
;
;
;
;
// allow the hook to work in SSR
const useLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"];
const useDebouncedEvent = (callback, delay)=>{
    // Create a ref that stores the debounced callback
    const debouncedCallbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(()=>{
        throw new Error('Cannot call an event handler while rendering.');
    });
    // Keep a stable ref to the callback (in case it's an inline function for instance)
    const stableCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEvent"])(callback);
    // Whenever callback or delay changes, we need to update the debounced callback
    useLayoutEffect(()=>{
        debouncedCallbackRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(stableCallback, delay);
    }, [
        stableCallback,
        delay
    ]);
    // The function returned by useCallback will invoke the debounced callback
    // Its dependencies array is empty, so it never changes across re-renders
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>debouncedCallbackRef.current(...args), []);
}; //# sourceMappingURL=useDebouncedEvent.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/form/FilterLiveForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterLiveForm",
    ()=>FilterLiveForm,
    "getFilterFormValues",
    ()=>getFilterFormValues
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/cloneDeep.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$mergeWith$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/mergeWith.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/set.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/SourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/groups/FormGroupsProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$getSimpleValidationResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/getSimpleValidationResolver.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useDebouncedEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useDebouncedEvent.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const FilterLiveForm = (props)=>{
    const { filterValues, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useListContext"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { debounce = 500, resolver, validate, children, formComponent: Component = HTMLForm, ...rest } = props;
    const finalResolver = resolver ? resolver : validate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$getSimpleValidationResolver$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSimpleValidationResolver"])(validate) : undefined;
    const formContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        mode: 'onChange',
        resolver: finalResolver,
        ...rest
    });
    const { handleSubmit, getValues, reset, watch, formState } = formContext;
    const { isValid } = formState;
    const hasJustBeenModifiedByUser = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](false);
    // Reapply filterValues when they change externally
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Unless users has just modified the form themselves in which case we want to avoid overriding it with
        // a previous value which was applied with a delay (debounce in List)
        if (hasJustBeenModifiedByUser.current) {
            hasJustBeenModifiedByUser.current = false;
            return;
        }
        const newValues = getFilterFormValues(getValues(), filterValues);
        const previousValues = getValues();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(newValues, previousValues)) {
            reset(newValues);
        }
    // The reference to the filterValues object is not updated when it changes,
    // so we must stringify it to compare it by value.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        JSON.stringify(filterValues),
        getValues,
        reset
    ]);
    const onSubmit = (values)=>{
        // Do not call setFilters if the form is invalid
        if (!isValid) {
            return;
        }
        setFilters(mergeObjNotArray(filterValues, values));
    };
    const debouncedOnSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useDebouncedEvent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebouncedEvent"])(onSubmit, debounce || 0);
    // Submit the form on values change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { unsubscribe } = watch((values, { name })=>{
            // Check that the name is present to avoid setting filters when
            // watch was triggered by a reset
            if (name) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(values, name) === '') {
                    const newValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(values);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$set$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(newValues, name, '');
                    hasJustBeenModifiedByUser.current = true;
                    debouncedOnSubmit(newValues);
                } else {
                    hasJustBeenModifiedByUser.current = true;
                    debouncedOnSubmit(values);
                }
            }
        });
        return ()=>unsubscribe();
    }, [
        watch,
        debouncedOnSubmit
    ]);
    const sourceContext = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            getSource: (source)=>source,
            getLabel: (source)=>`resources.${resource}.fields.${source}`
        }), [
        resource
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormProvider"], {
        ...formContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$groups$2f$FormGroupsProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormGroupsProvider"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$SourceContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SourceContextProvider"], {
        value: sourceContext
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Component, {
        onSubmit: handleSubmit(onSubmit)
    }, children))));
};
const HTMLForm = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("form", {
        ...props
    });
// Lodash merge customizer to merge objects but not arrays
const mergeCustomizer = (objValue, srcValue)=>{
    if (Array.isArray(srcValue)) {
        return srcValue;
    }
};
const mergeObjNotArray = (a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$mergeWith$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$cloneDeep$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(a), b, mergeCustomizer);
const getFilterFormValues = (formValues, filterValues)=>{
    return Object.keys(formValues).reduce((acc, key)=>{
        acc[key] = getInputValue(formValues, key, filterValues);
        return acc;
    }, {});
};
const getInputValue = (formValues, key, filterValues)=>{
    if (formValues[key] === undefined || formValues[key] === null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filterValues, key, '');
    }
    if (Array.isArray(formValues[key])) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filterValues, key, '');
    }
    if (formValues[key] instanceof Date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filterValues, key, '');
    }
    if (typeof formValues[key] === 'object') {
        const inputValues = Object.keys(formValues[key]).reduce((acc, innerKey)=>{
            const nestedInputValue = getInputValue(formValues[key], innerKey, (filterValues || {})[key] ?? {});
            acc[innerKey] = nestedInputValue;
            return acc;
        }, {});
        if (!Object.keys(inputValues).length) return '';
        return inputValues;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(filterValues, key, '');
}; //# sourceMappingURL=FilterLiveForm.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useFilterContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFilterContext",
    ()=>useFilterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$FilterContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/FilterContext.js [app-ssr] (ecmascript)");
;
;
const useFilterContext = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$FilterContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterContext"]);
}; //# sourceMappingURL=useFilterContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useListPaginationContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useListPaginationContext",
    ()=>useListPaginationContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListPaginationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListPaginationContext.js [app-ssr] (ecmascript)");
;
;
const useListPaginationContext = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListPaginationContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ListPaginationContext"]);
    if (!context) {
        throw new Error('useListPaginationContext must be used inside a ListPaginationContextProvider');
    }
    return context;
}; //# sourceMappingURL=useListPaginationContext.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useResourceTranslation",
    ()=>useResourceTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-ssr] (ecmascript)");
;
const useResourceTranslation = (params)=>{
    const { resourceI18nKey, baseI18nKey, userText, options } = params;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslate"])();
    if (userText !== undefined) {
        if (typeof userText !== 'string') {
            return userText;
        }
        return translate(userText, {
            _: userText,
            ...options
        });
    }
    if (!resourceI18nKey) {
        return translate(baseI18nKey, options);
    }
    return translate(resourceI18nKey, {
        ...options,
        _: translate(baseI18nKey, options)
    });
}; //# sourceMappingURL=useResourceTranslation.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/export/getRelatedIds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts, aggregates and deduplicates the ids of related records
 *
 * @example
 *     const books = [
 *         { id: 1, author_id: 123, title: 'Pride and Prejudice' },
 *         { id: 2, author_id: 123, title: 'Sense and Sensibility' },
 *         { id: 3, author_id: 456, title: 'War and Peace' },
 *     ];
 *     getRelatedIds(books, 'author_id'); => [123, 456]
 *
 * @example
 *     const books = [
 *         { id: 1, tag_ids: [1, 2], title: 'Pride and Prejudice' },
 *         { id: 2, tag_ids: [2, 3], title: 'Sense and Sensibility' },
 *         { id: 3, tag_ids: [4], title: 'War and Peace' },
 *     ];
 *     getRelatedIds(records, 'tag_ids'); => [1, 2, 3, 4]
 *
 * @param {Object[]} records An array of records
 * @param {string} field the identifier of the record field to use
 */ __turbopack_context__.s([
    "getRelatedIds",
    ()=>getRelatedIds
]);
const getRelatedIds = (records, field)=>Array.from(new Set(records.filter((record)=>record[field] != null).map((record)=>record[field]).reduce((ids, value)=>ids.concat(value), []))); //# sourceMappingURL=getRelatedIds.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/export/fetchRelatedRecords.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchRelatedRecords",
    ()=>fetchRelatedRecords
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$getRelatedIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/export/getRelatedIds.js [app-ssr] (ecmascript)");
;
const fetchRelatedRecords = (dataProvider)=>(data, field, resource)=>dataProvider.getMany(resource, {
            ids: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$getRelatedIds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelatedIds"])(data, field)
        }).then(({ data })=>data.reduce((acc, post)=>{
                acc[post.id] = post;
                return acc;
            }, {})); //# sourceMappingURL=fetchRelatedRecords.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/list/useSavedQueries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "areValidSavedQueries",
    ()=>areValidSavedQueries,
    "extractValidSavedQueries",
    ()=>extractValidSavedQueries,
    "isValidSavedQuery",
    ()=>isValidSavedQuery,
    "useSavedQueries",
    ()=>useSavedQueries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
;
const useSavedQueries = (resource)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(`${resource}.savedQueries`, []);
};
const extractValidSavedQueries = (savedQueries)=>{
    if (Array.isArray(savedQueries)) {
        return savedQueries.filter((query)=>isValidSavedQuery(query));
    }
    return [];
};
const areValidSavedQueries = (savedQueries)=>{
    if (Array.isArray(savedQueries) && savedQueries.every((query)=>isValidSavedQuery(query))) {
        return true;
    }
};
const isValidSavedQuery = (savedQuery)=>{
    if (savedQuery.label && typeof savedQuery.label === 'string' && savedQuery.value && typeof Array.isArray(savedQuery.value.displayedFilters) && typeof savedQuery.value.perPage === 'number' && typeof savedQuery.value.sort?.field === 'string' && typeof savedQuery.value.sort?.order === 'string' && typeof savedQuery.value.filter === 'object') {
        return true;
    }
    return false;
}; //# sourceMappingURL=useSavedQueries.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/useFieldValue.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFieldValue",
    ()=>useFieldValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-ssr] (ecmascript)");
;
;
const useFieldValue = (params)=>{
    const { defaultValue, source } = params;
    // We use the record from the RecordContext and do not rely on the SourceContext on purpose to
    // avoid having the wrong source targeting the record.
    // Indeed, some components may create a sub record context (SimpleFormIterator, TranslatableInputs, etc.). In this case,
    // it they used the SourceContext as well, they would have the wrong source.
    // Inputs needs the SourceContext as they rely on the Form value and you can't have nested forms.
    // Fields needs the RecordContext as they rely on the Record value and you can have nested RecordContext.
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRecordContext"])(params);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(record, source, defaultValue);
}; //# sourceMappingURL=useFieldValue.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/util/genericMemo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "genericMemo",
    ()=>genericMemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const genericMemo = (component)=>{
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(component);
    // We have to set the displayName on both the field implementation and the memoized version.
    // On the implementation so that the memoized version can pick them up and users may reference the defaultProps in their components.
    // On the memoized version so that components that inspect their children props may read them.
    // @ts-ignore
    result.displayName = component.displayName?.replace('Impl', '');
    return result;
}; //# sourceMappingURL=genericMemo.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/controller/field/sanitizeFieldRestProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeFieldRestProps",
    ()=>sanitizeFieldRestProps
]);
const sanitizeFieldRestProps = ({ cellClassName, className, emptyText, fullWidth, headerClassName, label, linkType, link, locale, record, refetch, resource, sortable, sortBy, sortByOrder, source, textAlign, translateChoice, ...props })=>props; //# sourceMappingURL=sanitizeFieldRestProps.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/useRestoreScrollPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRestoreScrollPosition",
    ()=>useRestoreScrollPosition,
    "useTrackScrollPosition",
    ()=>useTrackScrollPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/debounce.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-ssr] (ecmascript)");
;
;
;
;
const useRestoreScrollPosition = (storeKey, debounceMs = 250)=>{
    const [position, setPosition] = useTrackScrollPosition(storeKey, debounceMs);
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (position != null && location.state?._scrollToTop !== true) {
            setPosition(undefined);
            window.scrollTo(0, position);
        }
    // We only want to run this effect on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
const useTrackScrollPosition = (storeKey, debounceMs = 250)=>{
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])(storeKey);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
        const handleScroll = undefined;
    }, [
        debounceMs,
        setPosition
    ]);
    return [
        position,
        setPosition
    ];
}; //# sourceMappingURL=useRestoreScrollPosition.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/routing/RestoreScrollPosition.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RestoreScrollPosition",
    ()=>RestoreScrollPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRestoreScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useRestoreScrollPosition.js [app-ssr] (ecmascript)");
;
const RestoreScrollPosition = ({ children, storeKey, debounce = 250 })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRestoreScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRestoreScrollPosition"])(storeKey, debounce);
    return children;
}; //# sourceMappingURL=RestoreScrollPosition.js.map
}),
"[project]/admin_react/node_modules/ra-core/dist/core/Resource.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Resource",
    ()=>Resource
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/node_modules/react-is/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/ResourceContextProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RestoreScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RestoreScrollPosition.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/RouterProviderContext.js [app-ssr] (ecmascript)");
;
;
;
;
;
const Resource = (props)=>{
    const { create, edit, list, name, show } = props;
    const { Route, Routes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RouterProviderContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouterProvider"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$ResourceContextProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResourceContextProvider"], {
        value: name
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Routes, null, create && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "create/*",
        element: getElement(create)
    }), show && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: ":id/show/*",
        element: getElement(show)
    }), edit && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: ":id/*",
        element: getElement(edit)
    }), list && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Route, {
        path: "/*",
        element: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$RestoreScrollPosition$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RestoreScrollPosition"], {
            storeKey: `${name}.list.scrollPosition`
        }, getElement(list))
    }), props.children));
};
const getElement = (ElementOrComponent)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(ElementOrComponent)) {
        return ElementOrComponent;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElementType"])(ElementOrComponent)) {
        const Element = ElementOrComponent;
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Element, null);
    }
    return null;
};
Resource.raName = 'Resource';
Resource.registerResource = ({ create, edit, icon, list, name, options, show, recordRepresentation, hasCreate, hasEdit, hasShow })=>({
        name,
        options,
        hasList: !!list,
        hasCreate: !!create || !!hasCreate,
        hasEdit: !!edit || !!hasEdit,
        hasShow: !!show || !!hasShow,
        icon,
        recordRepresentation
    }); //# sourceMappingURL=Resource.js.map
}),
];

//# sourceMappingURL=7ffdb_ra-core_dist_72c19d10._.js.map