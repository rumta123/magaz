(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/useSidebarState.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSidebarState",
    ()=>useSidebarState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
;
;
const useSidebarState = ()=>{
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "useSidebarState.useMediaQuery[isXSmall]": (theme)=>theme?.breakpoints.down('sm')
    }["useSidebarState.useMediaQuery[isXSmall]"], {
        noSsr: true
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('sidebar.open', isXSmall ? false : true);
}; //# sourceMappingURL=useSidebarState.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/SidebarToggleButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarToggleButton",
    ()=>SidebarToggleButton,
    "SidebarToggleButtonClasses",
    ()=>SidebarToggleButtonClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/useSidebarState.js [app-client] (ecmascript)");
;
;
;
;
;
;
const SidebarToggleButton = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { className } = props;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarState"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        className: className,
        title: translate(open ? 'ra.action.close_menu' : 'ra.action.open_menu', {
            _: 'Open/Close menu'
        }),
        enterDelay: 500
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledIconButton, {
        color: "inherit",
        onClick: ()=>setOpen(!open)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        classes: {
            root: open ? SidebarToggleButtonClasses.menuButtonIconOpen : SidebarToggleButtonClasses.menuButtonIconClosed
        }
    })));
};
const PREFIX = 'RaSidebarToggleButton';
const SidebarToggleButtonClasses = {
    menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
    menuButtonIconOpen: `${PREFIX}-menuButtonIconOpen`
};
const StyledIconButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${SidebarToggleButtonClasses.menuButtonIconClosed}`]: {
            transition: theme.transitions.create([
                'transform'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            transform: 'rotate(0deg)'
        },
        [`& .${SidebarToggleButtonClasses.menuButtonIconOpen}`]: {
            transition: theme.transitions.create([
                'transform'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            transform: 'rotate(180deg)'
        }
    })); //# sourceMappingURL=SidebarToggleButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/RefreshIconButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshIconButton",
    ()=>RefreshIconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Refresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useRefresh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
const RefreshIconButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function RefreshIconButton(props, ref) {
    const { label = 'ra.action.refresh', icon = defaultIcon, onClick, className, ...rest } = props;
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useRefresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RefreshIconButton.RefreshIconButton.useCallback[handleClick]": (event)=>{
            event.preventDefault();
            refresh();
            if (typeof onClick === 'function') {
                onClick(event);
            }
        }
    }["RefreshIconButton.RefreshIconButton.useCallback[handleClick]"], [
        refresh,
        onClick
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: label && translate(label, {
            _: 'Refresh'
        })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        "aria-label": label && translate(label, {
            _: 'Refresh'
        }),
        className: className,
        color: "inherit",
        onClick: handleClick,
        ...rest
    }, icon));
});
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Refresh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null); //# sourceMappingURL=RefreshIconButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/LoadingIndicator.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingIndicator",
    ()=>LoadingIndicator,
    "LoadingIndicatorClasses",
    ()=>LoadingIndicatorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useLoading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$RefreshIconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/RefreshIconButton.js [app-client] (ecmascript)");
;
;
;
;
;
;
const LoadingIndicator = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, onClick, sx, ...rest } = props;
    const loading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className,
        sx: sx
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$RefreshIconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIconButton"], {
        className: `${LoadingIndicatorClasses.loadedIcon} ${loading && LoadingIndicatorClasses.loadedLoading}`,
        onClick: onClick
    }), loading && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('app-loader', LoadingIndicatorClasses.loader),
        color: "inherit",
        size: theme.spacing(2),
        thickness: 6,
        ...rest
    }));
};
const PREFIX = 'RaLoadingIndicator';
const LoadingIndicatorClasses = {
    loader: `${PREFIX}-loader`,
    loadedLoading: `${PREFIX}-loadedLoading`,
    loadedIcon: `${PREFIX}-loadedIcon`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (_, styles)=>styles.root
})({
    position: 'relative',
    [`& .${LoadingIndicatorClasses.loadedIcon}`]: {
        [`&.${LoadingIndicatorClasses.loadedLoading}`]: {
            opacity: 0
        }
    },
    [`& .${LoadingIndicatorClasses.loader}`]: {
        position: 'absolute',
        top: '30%',
        left: '30%'
    }
}); //# sourceMappingURL=LoadingIndicator.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/Logout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logout",
    ()=>Logout,
    "LogoutClasses",
    ()=>LogoutClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PowerSettingsNew$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/PowerSettingsNew.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogout$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogout.js [app-client] (ecmascript) <export default as useLogout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthState$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthState.js [app-client] (ecmascript) <export default as useAuthState>");
;
;
;
;
;
;
;
const Logout = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Logout(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, redirectTo, icon, ...rest } = props;
    const { authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthState$3e$__["useAuthState"])();
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "Logout.Logout.useMediaQuery[isXSmall]": (theme)=>theme.breakpoints.down('sm')
    }["Logout.Logout.useMediaQuery[isXSmall]"]);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogout$3e$__["useLogout"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Logout.Logout.useCallback[handleClick]": ()=>logout(null, redirectTo, false)
    }["Logout.Logout.useCallback[handleClick]"], [
        redirectTo,
        logout
    ]);
    if (!authenticated) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledMenuItem, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('logout', className),
        onClick: handleClick,
        ref: ref,
        component: isXSmall ? 'span' : 'li',
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
        className: LogoutClasses.icon
    }, icon ? icon : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$PowerSettingsNew$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, translate('ra.auth.logout', {
        _: 'Logout'
    })));
});
const PREFIX = 'RaLogout';
const LogoutClasses = {
    icon: `${PREFIX}-icon`
};
const StyledMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    [`& .${LogoutClasses.icon}`]: {}
}); //# sourceMappingURL=Logout.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/UserMenu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserMenu",
    ()=>UserMenu,
    "UserMenuClasses",
    ()=>UserMenuClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/AccountCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthProvider$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthProvider.js [app-client] (ecmascript) <export default as useAuthProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useGetIdentity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useGetIdentity.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$UserMenuContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/UserMenuContextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/Logout.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const UserMenu = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { isPending, identity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useGetIdentity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetIdentity"])();
    const authProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useAuthProvider$3e$__["useAuthProvider"])();
    const isLargeEnough = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "UserMenu.useMediaQuery[isLargeEnough]": (theme)=>theme.breakpoints.up('sm')
    }["UserMenu.useMediaQuery[isLargeEnough]"]);
    const { children = authProvider ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logout"], null) : null, className, label = 'ra.auth.user_menu', icon = defaultIcon } = props;
    const handleMenu = (event)=>setAnchorEl(event.currentTarget);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserMenu.useCallback[handleClose]": ()=>setAnchorEl(null)
    }["UserMenu.useCallback[handleClose]"], []);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserMenu.useMemo[context]": ()=>({
                onClose: handleClose
            })
    }["UserMenu.useMemo[context]"], [
        handleClose
    ]);
    if (!children) return null;
    const open = Boolean(anchorEl);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, isLargeEnough && !isPending && identity?.fullName ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        "aria-label": label && translate(label, {
            _: label
        }),
        className: UserMenuClasses.userButton,
        color: "inherit",
        startIcon: identity.avatar ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
            className: UserMenuClasses.avatar,
            src: identity.avatar,
            alt: identity.fullName
        }) : icon,
        onClick: handleMenu,
        variant: "text"
    }, identity.fullName) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: label && translate(label, {
            _: 'Profile'
        })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        "aria-label": label && translate(label, {
            _: 'Profile'
        }),
        "aria-owns": open ? 'menu-appbar' : undefined,
        "aria-haspopup": true,
        color: "inherit",
        onClick: handleMenu
    }, !isPending && identity?.avatar ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
        className: UserMenuClasses.avatar,
        src: identity.avatar,
        alt: identity.fullName
    }) : icon)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$UserMenuContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMenuContextProvider"], {
        value: context
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
        id: "menu-appbar",
        disableScrollLock: true,
        anchorEl: anchorEl,
        anchorOrigin: AnchorOrigin,
        transformOrigin: TransformOrigin,
        open: open,
        onClose: handleClose
    }, children)));
};
const PREFIX = 'RaUserMenu';
const UserMenuClasses = {
    userButton: `${PREFIX}-userButton`,
    avatar: `${PREFIX}-avatar`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${UserMenuClasses.userButton}`]: {
            textTransform: 'none',
            marginInlineStart: theme.spacing(0.5)
        },
        [`& .${UserMenuClasses.avatar}`]: {
            width: theme.spacing(3),
            height: theme.spacing(3)
        }
    }));
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const AnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right'
};
const TransformOrigin = {
    vertical: 'top',
    horizontal: 'right'
}; //# sourceMappingURL=UserMenu.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/HideOnScroll.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HideOnScroll",
    ()=>HideOnScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Slide/Slide.js [app-client] (ecmascript)");
;
;
;
const HideOnScroll = (props)=>{
    const { children, className } = props;
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Slide$2f$Slide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        appear: false,
        direction: "down",
        in: !trigger,
        className: className
    }, children);
}; //# sourceMappingURL=HideOnScroll.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TitlePortal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TitlePortal",
    ()=>TitlePortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
;
;
const TitlePortal = (props)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "h6",
        color: "inherit",
        id: "react-admin-title",
        ...props,
        sx: [
            {
                flex: '1',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    }); //# sourceMappingURL=TitlePortal.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/LocalesMenuButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocalesMenuButton",
    ()=>LocalesMenuButton,
    "LocalesMenuButtonClasses",
    ()=>LocalesMenuButtonClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocaleState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useLocaleState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocales$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useLocales.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Translate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Translate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
;
;
;
;
;
;
const LocalesMenuButton = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { icon = DefaultIcon, languages: languagesProp } = props;
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocales$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocales"])({
        locales: languagesProp
    });
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocaleState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocaleState"])();
    const getNameForLocale = (locale)=>{
        const language = languages.find((language)=>language.locale === locale);
        return language ? language.name : '';
    };
    const changeLocale = (locale)=>()=>{
            setLocale(locale);
            setAnchorEl(null);
        };
    const handleLanguageClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleClose = ()=>{
        setAnchorEl(null);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        component: "span"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        color: "inherit",
        variant: "text",
        "aria-controls": "simple-menu",
        "aria-label": "",
        "aria-haspopup": "true",
        onClick: handleLanguageClick,
        startIcon: icon,
        endIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            fontSize: "small"
        })
    }, getNameForLocale(locale)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
        id: "simple-menu",
        anchorEl: anchorEl,
        keepMounted: true,
        open: Boolean(anchorEl),
        onClose: handleClose
    }, languages.map((language)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            key: language.locale,
            onClick: changeLocale(language.locale),
            selected: language.locale === locale
        }, language.name))));
};
const DefaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Translate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaLocalesMenuButton';
const LocalesMenuButtonClasses = {};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=LocalesMenuButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/ThemesContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemesContext",
    ()=>ThemesContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const ThemesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({}); //# sourceMappingURL=ThemesContext.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useThemesContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThemesContext",
    ()=>useThemesContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/ThemesContext.js [app-client] (ecmascript)");
;
;
const useThemesContext = (params)=>{
    const { lightTheme, darkTheme, defaultTheme } = params || {};
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemesContext"]);
    return {
        lightTheme: lightTheme || context.lightTheme,
        darkTheme: darkTheme || context.darkTheme,
        defaultTheme: defaultTheme ?? context.defaultTheme
    };
}; //# sourceMappingURL=useThemesContext.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useTheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useThemesContext.js [app-client] (ecmascript)");
;
;
;
const useTheme = (type)=>{
    const { darkTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemesContext"])();
    const prefersDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])('(prefers-color-scheme: dark)', {
        noSsr: true
    });
    const [theme, setter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('theme', type ?? (prefersDarkMode && darkTheme ? 'dark' : 'light'));
    // Ensure that even though the store has its value set to 'dark', we still use the light theme when no dark theme is available
    return [
        darkTheme != null ? theme : 'light',
        setter
    ];
}; //# sourceMappingURL=useTheme.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ToggleThemeButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToggleThemeButton",
    ()=>ToggleThemeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Brightness4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Brightness7.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useThemesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useTheme.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const ToggleThemeButton = ()=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: {},
        name: PREFIX
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { darkTheme, defaultTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemesContext"])();
    const prefersDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])('(prefers-color-scheme: dark)', {
        noSsr: true
    });
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])(defaultTheme || (prefersDarkMode && darkTheme ? 'dark' : 'light'));
    const handleTogglePaletteType = ()=>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    const toggleThemeTitle = translate('ra.action.toggle_theme', {
        _: 'Toggle Theme'
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: toggleThemeTitle,
        enterDelay: 300
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StyledIconButton, {
        color: "inherit",
        onClick: handleTogglePaletteType,
        "aria-label": toggleThemeTitle,
        ...props
    }, theme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Brightness4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)));
};
const PREFIX = 'RaToggleThemeButton';
const StyledIconButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=ToggleThemeButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AppBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppBar",
    ()=>AppBar,
    "AppBarClasses",
    ()=>AppBarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/AppBar/AppBar.js [app-client] (ecmascript) <export default as AppBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocales$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useLocales.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$SidebarToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/SidebarToggleButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$LoadingIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/LoadingIndicator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$UserMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/UserMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$HideOnScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/HideOnScroll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TitlePortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TitlePortal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$LocalesMenuButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/LocalesMenuButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useThemesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ToggleThemeButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ToggleThemeButton.js [app-client] (ecmascript)");
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
const AppBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { alwaysOn, children, className, color = 'secondary', toolbar = defaultToolbarElement, userMenu = DefaultUserMenu, container: Container = alwaysOn ? 'div' : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$HideOnScroll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HideOnScroll"], ...rest } = props;
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "AppBar.useMediaQuery[isXSmall]": (theme)=>theme.breakpoints.down('sm')
    }["AppBar.useMediaQuery[isXSmall]"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Container, {
        className: className
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledAppBar, {
        className: AppBarClasses.appBar,
        color: color,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
        disableGutters: true,
        variant: isXSmall ? 'regular' : 'dense',
        className: AppBarClasses.toolbar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$SidebarToggleButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarToggleButton"], {
        className: AppBarClasses.menuButton
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TitlePortal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TitlePortal"], {
        className: AppBarClasses.title
    }) : children, toolbar, typeof userMenu === 'boolean' ? userMenu === true ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$UserMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMenu"], null) : null : userMenu)));
});
const DefaultToolbar = ()=>{
    const locales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocales$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocales"])();
    const { darkTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemesContext"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, locales && locales.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$LocalesMenuButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LocalesMenuButton"], null) : null, darkTheme && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ToggleThemeButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleThemeButton"], null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$LoadingIndicator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingIndicator"], null));
};
const defaultToolbarElement = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DefaultToolbar, null);
const DefaultUserMenu = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$UserMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserMenu"], null);
const PREFIX = 'RaAppBar';
const AppBarClasses = {
    appBar: `${PREFIX}-appBar`,
    toolbar: `${PREFIX}-toolbar`,
    menuButton: `${PREFIX}-menuButton`,
    menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
    menuButtonIconOpen: `${PREFIX}-menuButtonIconOpen`,
    title: `${PREFIX}-title`
};
const StyledAppBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AppBar$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AppBar$3e$__["AppBar"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${AppBarClasses.toolbar}`]: {
            padding: `0 ${theme.spacing(1)}`,
            [theme.breakpoints.down('md')]: {
                minHeight: theme.spacing(6)
            }
        },
        [`& .${AppBarClasses.menuButton}`]: {
            marginRight: '0.2em'
        },
        [`& .${AppBarClasses.title}`]: {}
    })); //# sourceMappingURL=AppBar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLOSED_DRAWER_WIDTH",
    ()=>CLOSED_DRAWER_WIDTH,
    "DRAWER_WIDTH",
    ()=>DRAWER_WIDTH,
    "Sidebar",
    ()=>Sidebar,
    "SidebarClasses",
    ()=>SidebarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Drawer/Drawer.js [app-client] (ecmascript) <export default as Drawer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useScrollTrigger$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useScrollTrigger/useScrollTrigger.js [app-client] (ecmascript) <export default as useScrollTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useLocale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/useSidebarState.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Sidebar = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { appBarAlwaysOn, children, closedSize, size, ...rest } = props;
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "Sidebar.useMediaQuery[isXSmall]": (theme)=>theme.breakpoints.down('sm')
    }["Sidebar.useMediaQuery[isXSmall]"]);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])(); // force redraw on locale change
    const trigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useScrollTrigger$2f$useScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useScrollTrigger$3e$__["useScrollTrigger"])();
    const toggleSidebar = ()=>setOpen(!open);
    return isXSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledDrawer, {
        variant: "temporary",
        open: open,
        onClose: toggleSidebar,
        classes: SidebarClasses,
        ...rest
    }, children) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledDrawer, {
        variant: "permanent",
        open: open,
        onClose: toggleSidebar,
        classes: SidebarClasses,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(trigger && !appBarAlwaysOn ? SidebarClasses.appBarCollapsed : '', open ? OPEN_CLASS : CLOSED_CLASS),
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: SidebarClasses.fixed
    }, children));
};
const PREFIX = 'RaSidebar';
const SidebarClasses = {
    docked: `${PREFIX}-docked`,
    paper: `${PREFIX}-paper`,
    paperAnchorLeft: `${PREFIX}-paperAnchorLeft`,
    paperAnchorRight: `${PREFIX}-paperAnchorRight`,
    paperAnchorTop: `${PREFIX}-paperAnchorTop`,
    paperAnchorBottom: `${PREFIX}-paperAnchorBottom`,
    paperAnchorDockedLeft: `${PREFIX}-paperAnchorDockedLeft`,
    paperAnchorDockedTop: `${PREFIX}-paperAnchorDockedTop`,
    paperAnchorDockedRight: `${PREFIX}-paperAnchorDockedRight`,
    paperAnchorDockedBottom: `${PREFIX}-paperAnchorDockedBottom`,
    modal: `${PREFIX}-modal`,
    fixed: `${PREFIX}-fixed`,
    appBarCollapsed: `${PREFIX}-appBarCollapsed`
};
const OPEN_CLASS = `${PREFIX}-open`;
const CLOSED_CLASS = `${PREFIX}-closed`;
const StyledDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Drawer$2f$Drawer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drawer$3e$__["Drawer"], {
    name: PREFIX,
    slot: 'Root',
    overridesResolver: (props, styles)=>styles.root,
    shouldForwardProp: ()=>true
})(({ open, theme })=>({
        height: 'calc(100vh - 3em)',
        marginTop: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        [`&.${SidebarClasses.appBarCollapsed}`]: {
            // compensate the margin of the Layout appFrame instead of removing it in the Layout
            // because otherwise, the appFrame content without margin may revert the scrollTrigger,
            // leading to a visual jiggle
            marginTop: theme.spacing(-6),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(-7)
            },
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
        },
        [`& .${SidebarClasses.docked}`]: {},
        [`& .${SidebarClasses.paper}`]: {},
        [`& .${SidebarClasses.paperAnchorLeft}`]: {},
        [`& .${SidebarClasses.paperAnchorRight}`]: {},
        [`& .${SidebarClasses.paperAnchorTop}`]: {},
        [`& .${SidebarClasses.paperAnchorBottom}`]: {},
        [`& .${SidebarClasses.paperAnchorDockedLeft}`]: {},
        [`& .${SidebarClasses.paperAnchorDockedTop}`]: {},
        [`& .${SidebarClasses.paperAnchorDockedRight}`]: {},
        [`& .${SidebarClasses.paperAnchorDockedBottom}`]: {},
        [`& .${SidebarClasses.modal}`]: {},
        [`& .${SidebarClasses.fixed}`]: {
            position: 'fixed',
            height: 'calc(100vh - 3em)',
            overflowX: 'hidden',
            // hide scrollbar
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        [`& .MuiPaper-root`]: {
            position: 'relative',
            width: open ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme, 'sidebar.width', DRAWER_WIDTH) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme, 'sidebar.closedWidth', CLOSED_DRAWER_WIDTH),
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            backgroundColor: 'transparent',
            borderRight: 'none',
            [theme.breakpoints.only('xs')]: {
                marginTop: 0,
                height: '100vh',
                position: 'inherit',
                backgroundColor: (theme.vars || theme).palette.background.default
            },
            [theme.breakpoints.up('md')]: {
                border: 'none'
            },
            zIndex: 'inherit'
        }
    }));
const DRAWER_WIDTH = 240;
const CLOSED_DRAWER_WIDTH = 55; //# sourceMappingURL=Sidebar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/KeyboardShortcut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KeyboardShortcut",
    ()=>KeyboardShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const KeyboardShortcut = ({ className, keyboardShortcut, ...rest })=>{
    if (!keyboardShortcut) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(KeyboardShortcutClasses.root, className),
        ...rest
    }, keyboardShortcut.split('>').map((sequence, sequenceIndex, sequences)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            key: `${sequence}-${sequenceIndex}`
        }, sequence.split('+').map((key, keyIndex)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                key: `${key}-${keyIndex}`
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                component: "kbd",
                className: KeyboardShortcutClasses.kbd,
                key: key
            }, KeyMap[key] ? KeyMap[key] : key.toUpperCase()))), sequenceIndex < sequences.length - 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, "\u00A0") : null)));
};
const KeyMap = {
    meta: '⌘',
    mod: '⌘',
    ctrl: '⌃',
    shift: '⇧',
    alt: '⌥',
    enter: '⏎',
    esc: '⎋',
    escape: '⎋',
    backspace: '⌫',
    delete: '⌦',
    tab: '⇥',
    space: '␣',
    up: '↑',
    down: '↓',
    left: '←',
    right: '→',
    home: '↖',
    end: '↘',
    pageup: '⇞',
    pagedown: '⇟'
};
const PREFIX = 'RaKeyboardShortcut';
const KeyboardShortcutClasses = {
    root: `${PREFIX}-root`,
    kbd: `${PREFIX}-kbd`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div')(({ theme })=>({
        opacity: 0.7,
        [`& .${KeyboardShortcutClasses.kbd}`]: {
            padding: '4px 5px',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            margin: '0 1px',
            fontSize: '11px',
            lineHeight: '10px',
            color: theme.palette.text.primary,
            verticalAlign: 'middle',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 6,
            boxShadow: `inset 0 -1px 0 ${theme.palette.divider}`
        }
    })); //# sourceMappingURL=KeyboardShortcut.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/MenuItemLink.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuItemLink",
    ()=>MenuItemLink,
    "MenuItemLinkClasses",
    ()=>MenuItemLinkClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/utils/useForkRef.js [app-client] (ecmascript) <export default as useForkRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useMatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hotkeys$2d$hook$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hotkeys-hook/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/useSidebarState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$KeyboardShortcut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/KeyboardShortcut.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const MenuItemLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((inProps, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, primaryText, leftIcon, onClick, sidebarIsOpen, tooltipProps, children, keyboardShortcut, keyboardShortcutRepresentation, ...rest } = props;
    const isSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "MenuItemLink.useMediaQuery[isSmall]": (theme)=>theme.breakpoints.down('md')
    }["MenuItemLink.useMediaQuery[isSmall]"]);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBasename"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarState"])();
    const handleMenuTap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MenuItemLink.useCallback[handleMenuTap]": (e)=>{
            if (isSmall) {
                setOpen(false);
            }
            onClick && onClick(e);
        }
    }["MenuItemLink.useCallback[handleMenuTap]"], [
        setOpen,
        isSmall,
        onClick
    ]);
    const to = (typeof props.to === 'string' ? props.to : props.to.pathname) || '';
    const match = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatch"])({
        path: to,
        end: to === `${basename}/`
    });
    const itemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use a forked ref allows us to have a ref locally without losing the one passed by users
    const forkedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__["useForkRef"])(itemRef, ref);
    const handleShortcut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])({
        "MenuItemLink.useEvent[handleShortcut]": ()=>itemRef.current?.click()
    }["MenuItemLink.useEvent[handleShortcut]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hotkeys$2d$hook$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHotkeys"])(keyboardShortcut ?? [], handleShortcut, {
        enabled: keyboardShortcut != null
    });
    const renderMenuItem = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StyledMenuItem, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, MenuItemLinkClasses.root, {
                [MenuItemLinkClasses.active]: !!match
            }),
            // @ts-ignore
            component: LinkRef,
            ref: forkedRef,
            tabIndex: 0,
            ...rest,
            onClick: handleMenuTap
        }, leftIcon && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], {
            className: MenuItemLinkClasses.icon
        }, leftIcon), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
            variant: "inherit",
            noWrap: true,
            sx: {
                flexGrow: 1
            }
        }, children ? children : typeof primaryText === 'string' ? translate(primaryText, {
            _: primaryText
        }) : primaryText), keyboardShortcut ? keyboardShortcutRepresentation ?? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$KeyboardShortcut$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardShortcut"], {
            className: MenuItemLinkClasses.shortcut,
            keyboardShortcut: keyboardShortcut
        }) : null);
    };
    if (open) {
        return renderMenuItem();
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: typeof primaryText === 'string' ? translate(primaryText, {
            _: primaryText
        }) : primaryText,
        placement: "right",
        ...tooltipProps
    }, renderMenuItem());
});
const PREFIX = 'RaMenuItemLink';
const MenuItemLinkClasses = {
    root: `${PREFIX}-root`,
    active: `${PREFIX}-active`,
    icon: `${PREFIX}-icon`,
    shortcut: `${PREFIX}-shortcut`
};
const StyledMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        color: (theme.vars || theme).palette.text.secondary,
        [`& .${MenuItemLinkClasses.icon}`]: {
            color: (theme.vars || theme).palette.text.secondary
        },
        [`& .${MenuItemLinkClasses.shortcut}`]: {
            color: (theme.vars || theme).palette.text.secondary,
            fontSize: theme.typography.body2.fontSize,
            opacity: 0,
            display: 'none',
            transition: 'opacity 0.3s'
        },
        [`&:hover .${MenuItemLinkClasses.shortcut}`]: {
            opacity: 0.7,
            display: 'inline-flex'
        },
        [`&.${MenuItemLinkClasses.active}`]: {
            color: (theme.vars || theme).palette.text.primary
        },
        [`& .${MenuItemLinkClasses.icon}`]: {
            minWidth: theme.spacing(5)
        },
        [`.MuiList-dense > & > .${MenuItemLinkClasses.icon}`]: {
            minWidth: theme.spacing(3.5)
        }
    }));
const LinkRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"], {
        ref: ref,
        ...props
    })); //# sourceMappingURL=MenuItemLink.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/DashboardMenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DashboardMenuItem",
    ()=>DashboardMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Dashboard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useBasename.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/MenuItemLink.js [app-client] (ecmascript)");
;
;
;
;
const DashboardMenuItem = (props)=>{
    const basename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useBasename$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBasename"])();
    const { leftIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null), to = `${basename}/`, primaryText = 'ra.page.dashboard', ...rest } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemLink"], {
        leftIcon: leftIcon,
        to: to,
        primaryText: primaryText,
        ...rest
    });
}; //# sourceMappingURL=DashboardMenuItem.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/ResourceMenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceMenuItem",
    ()=>ResourceMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ViewList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/MenuItemLink.js [app-client] (ecmascript)");
;
;
;
;
;
const ResourceMenuItem = ({ name, ...rest })=>{
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    const { canAccess, error, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'list',
        resource: name
    });
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePath"])();
    if (!resources || !resources[name] || isPending || canAccess === false || error != null) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemLink"], {
        to: createPath({
            resource: name,
            type: 'list'
        }),
        state: {
            _scrollToTop: true
        },
        primaryText: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, getResourceLabel(name, 2)),
        leftIcon: resources[name].icon ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(resources[name].icon) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ViewList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        ...rest
    });
}; //# sourceMappingURL=ResourceMenuItem.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/ResourceMenuItems.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResourceMenuItems",
    ()=>ResourceMenuItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinitions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/ResourceMenuItem.js [app-client] (ecmascript)");
;
;
;
const ResourceMenuItems = ()=>{
    const resources = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinitions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinitions"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, Object.keys(resources).filter((name)=>resources[name].hasList).map((name)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMenuItem"], {
            key: name,
            name: name
        })));
}; //# sourceMappingURL=ResourceMenuItems.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>Menu,
    "MenuClasses",
    ()=>MenuClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuList$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuList/MenuList.js [app-client] (ecmascript) <export default as MenuList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/useSidebarState.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$DashboardMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/DashboardMenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/MenuItemLink.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/ResourceMenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/ResourceMenuItems.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$HasDashboardContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/HasDashboardContext.js [app-client] (ecmascript)");
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
const Menu = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { children, className, hasDashboard: hasDashboardProp, ...rest } = props;
    const hasDashboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$HasDashboardContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHasDashboard"])();
    const [open] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$useSidebarState$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebarState"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [MenuClasses.open]: open,
            [MenuClasses.closed]: !open
        }, className),
        ...rest
    }, hasDashboard && !children && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$DashboardMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardMenuItem"], null), children ?? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMenuItems"], null));
};
// re-export MenuItem components for convenience
Menu.Item = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$MenuItemLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItemLink"];
Menu.DashboardItem = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$DashboardMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DashboardMenuItem"];
Menu.ResourceItem = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMenuItem"];
Menu.ResourceItems = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$ResourceMenuItems$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResourceMenuItems"];
const PREFIX = 'RaMenu';
const MenuClasses = {
    open: `${PREFIX}-open`,
    closed: `${PREFIX}-closed`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuList$2f$MenuList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuList$3e$__["MenuList"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        [theme.breakpoints.only('xs')]: {
            marginTop: 0
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [`&.${MenuClasses.open}`]: {
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme, 'sidebar.width', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRAWER_WIDTH"])
        },
        [`&.${MenuClasses.closed}`]: {
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(theme, 'sidebar.closedWidth', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CLOSED_DRAWER_WIDTH"])
        }
    })); //# sourceMappingURL=Menu.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/PageTitle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTitle",
    ()=>PageTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
const PageTitle = ({ title, defaultTitle, className, ...rest })=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: className
    }, !title ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...rest
    }, defaultTitle) : typeof title === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        ...rest
    }, translate(title, {
        _: title
    })) : title);
}; //# sourceMappingURL=PageTitle.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/Configurable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Configurable",
    ()=>Configurable,
    "ConfigurableClasses",
    ()=>ConfigurableClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferencesEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferenceKeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Popover/Popover.js [app-client] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Settings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Configurable = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { children, editor, preferenceKey, openButtonLabel = 'ra.configurable.customize', sx } = props;
    const prefixedPreferenceKey = `preferences.${preferenceKey}`;
    const preferencesEditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferencesEditor"])();
    const hasPreferencesEditorContext = !!preferencesEditorContext;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { isEnabled, setEditor, preferenceKey: currentPreferenceKey, setPreferenceKey } = preferencesEditorContext || {};
    const isEditorOpen = prefixedPreferenceKey === currentPreferenceKey;
    const editorOpenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isEditorOpen);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCustomizeButtonVisible, setIsCustomizeButtonVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Configurable.useEffect": ()=>{
            editorOpenRef.current = isEditorOpen;
        }
    }["Configurable.useEffect"], [
        isEditorOpen
    ]);
    // on unmount, if selected, remove the editor
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Configurable.useEffect": ()=>{
            return ({
                "Configurable.useEffect": ()=>{
                    if (!editorOpenRef.current) return;
                    setPreferenceKey && setPreferenceKey(null);
                    setEditor && setEditor(null);
                }
            })["Configurable.useEffect"];
        }
    }["Configurable.useEffect"], [
        setEditor,
        setPreferenceKey
    ]);
    if (!hasPreferencesEditorContext) {
        return children;
    }
    const handleOpenEditor = ()=>{
        if (!setEditor) {
            throw new Error('Configurable must be used inside a PreferencesEditorContextProvider');
        }
        // include the editorKey as key to force destroy and mount
        // when switching between two identical editors with different editor keys
        // otherwise the editor will see an update and its useStore will return one tick later
        // which would forbid the usage of uncontrolled inputs in the editor
        setEditor((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(editor, {
            preferenceKey: prefixedPreferenceKey,
            key: prefixedPreferenceKey
        }));
        if (!setPreferenceKey) {
            throw new Error('Configurable must be used inside a PreferencesEditorContextProvider');
        }
        // as we modify the editor, isEditorOpen cannot compare the editor element
        // we'll compare the editor key instead
        setPreferenceKey(prefixedPreferenceKey);
    };
    const handleShowButton = ()=>{
        setIsCustomizeButtonVisible(true);
    };
    const handleHideButton = ()=>{
        setIsCustomizeButtonVisible(false);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreferenceKeyContextProvider"], {
        value: prefixedPreferenceKey
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ConfigurableClasses.root, isEnabled && ConfigurableClasses.editMode, isEditorOpen && ConfigurableClasses.editorActive),
        sx: sx,
        ref: wrapperRef,
        onMouseEnter: isEnabled ? handleShowButton : undefined,
        onMouseLeave: isEnabled ? handleHideButton : undefined
    }, children), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Popover$2f$Popover$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
        open: !!isEnabled && (isCustomizeButtonVisible || isEditorOpen),
        sx: {
            pointerEvents: 'none',
            '& .MuiPaper-root': {
                pointerEvents: 'auto',
                borderRadius: 10,
                padding: '2px',
                lineHeight: 0,
                backgroundColor: 'warning.light',
                color: 'warning.contrastText',
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        },
        anchorEl: wrapperRef.current,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        transformOrigin: {
            vertical: 'center',
            horizontal: 'center'
        },
        onClose: handleHideButton,
        PaperProps: {
            elevation: 1,
            onMouseEnter: handleShowButton,
            onMouseLeave: handleHideButton,
            title: translate(openButtonLabel),
            onClick: handleOpenEditor
        },
        disableAutoFocus: true,
        disableRestoreFocus: true,
        disableEnforceFocus: true,
        disableScrollLock: true,
        marginThreshold: 8
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        // @ts-ignore
        fontSize: "12px"
    })));
};
const PREFIX = 'RaConfigurable';
const ConfigurableClasses = {
    root: `${PREFIX}-root`,
    editMode: `${PREFIX}-editMode`,
    editorActive: `${PREFIX}-editorActive`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        position: 'relative',
        display: 'inline-block',
        [`&.${ConfigurableClasses.editMode}`]: {
            transition: theme.transitions.create('outline'),
            outline: `color-mix(in srgb, ${(theme.vars || theme).palette.warning.main}, transparent 30%) solid 2px`
        },
        [`&.${ConfigurableClasses.editMode}:hover `]: {
            outline: `color-mix(in srgb, ${(theme.vars || theme).palette.warning.main}, transparent 50%) solid 2px`
        },
        [`&.${ConfigurableClasses.editMode}.${ConfigurableClasses.editorActive} , &.${ConfigurableClasses.editMode}.${ConfigurableClasses.editorActive}:hover `]: {
            outline: `${(theme.vars || theme).palette.warning.main} solid 2px`
        }
    })); //# sourceMappingURL=Configurable.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/PageTitleConfigurable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTitleConfigurable",
    ()=>PageTitleConfigurable,
    "PageTitleEditor",
    ()=>PageTitleEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferenceInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$Configurable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/Configurable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/PageTitle.js [app-client] (ecmascript)");
;
;
;
;
;
const PageTitleEditor = ()=>{
    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferenceInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferenceInput"])('', '');
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("form", null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        label: "title",
        variant: "filled",
        size: "small",
        fullWidth: true,
        sx: {
            mb: 1
        },
        ...field
    }));
};
const PageTitleConfigurable = ({ preferenceKey, title, defaultTitle, ...props })=>{
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocation"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$Configurable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Configurable"], {
        editor: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PageTitleEditor, null),
        preferenceKey: preferenceKey || `${pathname}.title`,
        sx: {
            '&.RaConfigurable-editMode': {
                margin: '2px'
            }
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](PageTitleConfigurableInner, {
        title: title,
        defaultTitle: defaultTitle,
        ...props
    }));
};
const PageTitleConfigurableInner = ({ title, defaultTitle, ...props })=>{
    const [titleFromPreferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreference"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])();
    return typeof titleFromPreferences === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        className: props.className,
        ...props
    }, translate(titleFromPreferences, {
        ...record,
        _: titleFromPreferences
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
        title: title,
        defaultTitle: defaultTitle,
        ...props
    }));
}; //# sourceMappingURL=PageTitleConfigurable.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-client] (ecmascript) <export default as warning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/PageTitle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitleConfigurable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/PageTitleConfigurable.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Title = (props)=>{
    const { defaultTitle, title, preferenceKey, ...rest } = props;
    const [container, setContainer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Title.useState": ()=>typeof document !== 'undefined' ? document.getElementById('react-admin-title') : null
    }["Title.useState"]);
    // on first mount, we don't have the container yet, so we wait for it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Title.useEffect": ()=>{
            setContainer({
                "Title.useEffect": (container)=>{
                    const isInTheDom = typeof document !== 'undefined' && document.body.contains(container);
                    if (container && isInTheDom) return container;
                    return typeof document !== 'undefined' ? document.getElementById('react-admin-title') : null;
                }
            }["Title.useEffect"]);
        }
    }["Title.useEffect"], []);
    if (!container) return null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(!defaultTitle && !title, 'Missing title prop in <Title> element');
    const pageTitle = preferenceKey === false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitle"], {
        title: title,
        defaultTitle: defaultTitle,
        ...rest
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$PageTitleConfigurable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageTitleConfigurable"], {
        title: title,
        defaultTitle: defaultTitle,
        preferenceKey: preferenceKey,
        ...rest
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(pageTitle, container));
}; //# sourceMappingURL=Title.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Error.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Error",
    ()=>Error,
    "ErrorClasses",
    ()=>ErrorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Accordion/Accordion.js [app-client] (ecmascript) <export default as Accordion>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/AccordionDetails/AccordionDetails.js [app-client] (ecmascript) <export default as AccordionDetails>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/AccordionSummary/AccordionSummary.js [app-client] (ecmascript) <export default as AccordionSummary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Report$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Report.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/History.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/DefaultTitleContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useResetErrorBoundaryOnLocationChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useResetErrorBoundaryOnLocationChange.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const Error = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { error, errorComponent: ErrorComponent, errorInfo, resetErrorBoundary, className, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultTitle"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useResetErrorBoundaryOnLocationChange$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResetErrorBoundaryOnLocationChange"])(resetErrorBoundary);
    if (ErrorComponent) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ErrorComponent, {
            error: error,
            errorInfo: errorInfo,
            title: title
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, title && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        title: title
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h1", {
        className: ErrorClasses.title,
        role: "alert"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Report$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: ErrorClasses.icon
    }), translate('ra.page.error')), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, translate('ra.message.error')), ("TURBOPACK compile-time value", "development") !== 'production' && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Accordion$2f$Accordion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Accordion$3e$__["Accordion"], {
        className: ErrorClasses.panel
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionSummary$2f$AccordionSummary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionSummary$3e$__["AccordionSummary"], {
        expandIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        className: ErrorClasses.panelSummary
    }, translate(error.message, {
        _: error.message
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$AccordionDetails$2f$AccordionDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AccordionDetails$3e$__["AccordionDetails"], {
        className: ErrorClasses.panelDetails
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("p", null, translate(error.message, {
        _: error.message
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("p", null, errorInfo?.componentStack))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: ErrorClasses.advice
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        align: "center"
    }, "Need help with this error? Try the following:"), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        component: "div"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("ul", null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", null, "Check the", ' ', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        href: "https://marmelab.com/react-admin/documentation.html"
    }, "react-admin documentation")), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", null, "Search on", ' ', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        href: "https://stackoverflow.com/questions/tagged/react-admin"
    }, "StackOverflow"), ' ', "for community answers"), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", null, "Get help from the core team via", ' ', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("a", {
        href: "https://react-admin-ee.marmelab.com/#fromsww"
    }, "react-admin Enterprise Edition")))))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: ErrorClasses.toolbar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        variant: "contained",
        startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        onClick: goBack
    }, translate('ra.action.back')))));
};
const PREFIX = 'RaError';
const ErrorClasses = {
    container: `${PREFIX}-container`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    panel: `${PREFIX}-panel`,
    panelSummary: `${PREFIX}-panelSummary`,
    panelDetails: `${PREFIX}-panelDetails`,
    toolbar: `${PREFIX}-toolbar`,
    advice: `${PREFIX}-advice`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '1em'
        },
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        [`& .${ErrorClasses.title}`]: {
            display: 'flex',
            alignItems: 'center'
        },
        [`& .${ErrorClasses.icon}`]: {
            width: '2em',
            height: '2em',
            marginRight: '0.5em'
        },
        [`& .${ErrorClasses.panel}`]: {
            marginTop: '1em',
            maxWidth: '60em'
        },
        [`& .${ErrorClasses.panelSummary}`]: {
            userSelect: 'all'
        },
        [`& .${ErrorClasses.panelDetails}`]: {
            whiteSpace: 'pre-wrap'
        },
        [`& .${ErrorClasses.toolbar}`]: {
            marginTop: '2em'
        },
        [`& .${ErrorClasses.advice}`]: {
            marginTop: '2em'
        }
    }));
function goBack() {
    window.history.go(-1);
} //# sourceMappingURL=Error.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function Button(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { alignIcon = 'left', children, className, disabled, label, color = 'primary', size = 'small', to: locationDescriptor, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    let translatedLabel = label;
    if (typeof label === 'string') {
        translatedLabel = translate(label, {
            _: label
        });
    }
    const linkParams = getLinkParams(locationDescriptor);
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "Button.Button.useMediaQuery[isXSmall]": (theme)=>theme.breakpoints.down('sm')
    }["Button.Button.useMediaQuery[isXSmall]"]);
    return isXSmall ? label && !disabled ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: translatedLabel
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        ref: ref,
        "aria-label": typeof translatedLabel === 'string' ? translatedLabel : undefined,
        className: className,
        color: color,
        size: "large",
        ...linkParams,
        ...rest
    }, children)) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        ref: ref,
        className: className,
        color: color,
        disabled: disabled,
        size: "large",
        ...linkParams,
        ...rest
    }, children) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        ref: ref,
        className: className,
        color: color,
        size: size,
        "aria-label": typeof translatedLabel === 'string' ? translatedLabel : undefined,
        disabled: disabled,
        startIcon: alignIcon === 'left' && children ? children : undefined,
        endIcon: alignIcon === 'right' && children ? children : undefined,
        ...linkParams,
        ...rest
    }, translatedLabel);
});
const PREFIX = 'RaButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    '&.MuiButton-sizeSmall': {
        // fix for icon misalignment on small buttons, see https://github.com/mui/material-ui/pull/30240
        lineHeight: 1.5
    }
});
const getLinkParams = (locationDescriptor)=>{
    // eslint-disable-next-line eqeqeq
    if (locationDescriptor == undefined) {
        return undefined;
    }
    if (typeof locationDescriptor === 'string') {
        return {
            to: locationDescriptor
        };
    }
    const { redirect, replace, state, ...to } = locationDescriptor;
    return {
        to,
        redirect,
        replace,
        state
    };
}; //# sourceMappingURL=Button.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SkipNavigationButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkipNavigationButton",
    ()=>SkipNavigationButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
const SkipNavigationButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function SkipNavigationButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StyledButton, {
        ref: ref,
        onClick: skipToContent,
        className: 'skip-nav-button',
        label: "ra.navigation.skip_nav",
        variant: "contained",
        ...props
    });
});
const PREFIX = 'RaSkipNavigationButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        position: 'fixed',
        padding: theme.spacing(1),
        backgroundColor: (theme.vars || theme).palette.background.default,
        color: (theme.vars || theme).palette.primary.contrastText,
        transition: theme.transitions.create([
            'top',
            'opacity'
        ], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen
        }),
        left: theme.spacing(2),
        top: theme.spacing(-10),
        zIndex: 5000,
        '&:hover': {
            opacity: 0.8,
            backgroundColor: (theme.vars || theme).palette.background.default
        },
        '&:focus': {
            top: theme.spacing(2),
            transition: theme.transitions.create([
                'top',
                'opacity'
            ], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    }));
const skipToContent = ()=>{
    if (typeof document === 'undefined') return;
    const element = document.getElementById('main-content');
    if (!element) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('No element with id "main-content" was found. Ensure the element that contains your main content has an id of "main-content".');
        }
        return;
    }
    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.blur();
    element.removeAttribute('tabIndex');
}; //# sourceMappingURL=SkipNavigationButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/InspectorRoot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InspectorRoot",
    ()=>InspectorRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$useSetInspectorTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/useSetInspectorTitle.js [app-client] (ecmascript)");
;
;
;
const InspectorRoot = ()=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$useSetInspectorTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetInspectorTitle"])('ra.configurable.inspector.title', {
        _: 'Inspector'
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], null, translate('ra.configurable.inspector.content', {
        _: 'Hover the application UI elements to configure them'
    }));
}; //# sourceMappingURL=InspectorRoot.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/Inspector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Inspector",
    ()=>Inspector,
    "InspectorClasses",
    ()=>InspectorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/usePreferencesEditor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useRemoveItemsFromStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/store/useRemoveItemsFromStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/preferences/PreferenceKeyContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Paper/Paper.js [app-client] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CancelOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/CancelOutlined.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/DeleteOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useTheme.js [app-client] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$InspectorRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/InspectorRoot.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const Inspector = ()=>{
    const { isEnabled, disable, title, titleOptions, editor, preferenceKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$usePreferencesEditor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePreferencesEditor"])();
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const removeItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useRemoveItemsFromStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemoveItemsFromStore"])(preferenceKey);
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dialogPosition, setDialogPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$store$2f$useStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])('ra.inspector.position', {
        x: // We want it positioned to the far right of the screen
        document?.body.clientWidth - // So we remove its size (see the root css class)
        theme.breakpoints.values.sm / 2 - // And add a margin
        8,
        y: 8
    });
    // poor man's drag and drop
    // store click position relative to the dialog position
    const [clickPosition, setClickPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const handleDragStart = (e)=>{
        // exit if the user drags on anything but the title
        const draggedElement = document?.elementFromPoint(e.clientX, e.clientY);
        if (draggedElement?.id !== 'inspector-dialog-title') {
            return;
        }
        isDragging.current = true;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('inspector', '');
        setTimeout(()=>{
            e.target.classList.add('hide');
        }, 0);
        setClickPosition({
            x: e.clientX - dialogPosition.x,
            y: e.clientY - dialogPosition.y
        });
    };
    const handleDragEnd = (e)=>{
        if (isDragging.current && clickPosition) {
            setDialogPosition({
                x: e.clientX - clickPosition.x,
                y: e.clientY - clickPosition.y
            });
            e.target.classList.remove('hide');
            isDragging.current = false;
        }
    };
    // prevent "back to base" animation when the inspector is dropped
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Inspector.useEffect": ()=>{
            if (!isEnabled) return;
            const handleDragover = {
                "Inspector.useEffect.handleDragover": (e)=>{
                    if (e.dataTransfer.types.includes('inspector')) {
                        e.preventDefault();
                    }
                }
            }["Inspector.useEffect.handleDragover"];
            document?.addEventListener('dragover', handleDragover);
            return ({
                "Inspector.useEffect": ()=>{
                    document?.removeEventListener('dragover', handleDragover);
                }
            })["Inspector.useEffect"];
        }
    }["Inspector.useEffect"], [
        isEnabled
    ]);
    // make sure that the dialog is always visible, as the stored position may be outside the screen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Inspector.useEffect": ()=>{
            if (!isEnabled) return;
            const moveInspectorIfOutsideScreen = {
                "Inspector.useEffect.moveInspectorIfOutsideScreen": ()=>{
                    window?.requestAnimationFrame({
                        "Inspector.useEffect.moveInspectorIfOutsideScreen": ()=>{
                            setDialogPosition({
                                "Inspector.useEffect.moveInspectorIfOutsideScreen": (position)=>({
                                        x: Math.min(position.x, document?.body.clientWidth - theme.breakpoints.values.sm / 2 - 8),
                                        y: Math.min(position.y, window?.innerHeight - 50)
                                    })
                            }["Inspector.useEffect.moveInspectorIfOutsideScreen"]);
                        }
                    }["Inspector.useEffect.moveInspectorIfOutsideScreen"]);
                }
            }["Inspector.useEffect.moveInspectorIfOutsideScreen"];
            moveInspectorIfOutsideScreen();
            window?.addEventListener('resize', moveInspectorIfOutsideScreen);
            return ({
                "Inspector.useEffect": ()=>{
                    window?.removeEventListener('resize', moveInspectorIfOutsideScreen);
                }
            })["Inspector.useEffect"];
        }
    }["Inspector.useEffect"], [
        isEnabled,
        setDialogPosition,
        theme.breakpoints.values.sm
    ]);
    const handleReset = ()=>{
        removeItems();
        // force redraw of the form to use the default values
        setVersion((version)=>version + 1);
    };
    if (!isEnabled) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledPaper, {
        className: InspectorClasses.modal,
        elevation: 3,
        draggable: true,
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        sx: {
            left: dialogPosition.x,
            top: dialogPosition.y
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: InspectorClasses.title
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        id: "inspector-dialog-title",
        variant: "overline",
        component: "div",
        sx: {
            py: 1,
            px: 2,
            flex: '1'
        }
    }, title && translate(title, titleOptions)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        id: "inspector-toolbar"
    }), preferenceKey && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        "aria-label": translate('ra.action.remove'),
        onClick: handleReset,
        size: "small"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$DeleteOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "inherit"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        "aria-label": translate('ra.action.close'),
        onClick: disable,
        size: "small",
        sx: {
            mr: 1
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CancelOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "inherit"
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: InspectorClasses.content,
        key: version
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$preferences$2f$PreferenceKeyContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreferenceKeyContextProvider"], {
        value: preferenceKey
    }, editor || __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$InspectorRoot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InspectorRoot"], null))));
};
const PREFIX = 'RaInspector';
const InspectorClasses = {
    modal: `${PREFIX}-modal`,
    title: `${PREFIX}-title`,
    content: `${PREFIX}-content`
};
const StyledPaper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        position: 'fixed',
        zIndex: theme.zIndex.modal + 1,
        width: theme.breakpoints.values.sm / 2,
        transition: theme.transitions.create([
            'height',
            'width'
        ]),
        '&.hide': {
            display: 'none'
        },
        [`& .${InspectorClasses.title}`]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'move'
        },
        [`& .${InspectorClasses.content}`]: {
            overflowY: 'auto',
            maxHeight: '75vh',
            padding: theme.spacing(2),
            paddingTop: 0
        }
    }));
Inspector.displayName = 'Inspector'; //# sourceMappingURL=Inspector.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loading",
    ()=>Loading,
    "LoadingClasses",
    ()=>LoadingClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
const Loading = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, loadingPrimary = 'ra.page.loading', loadingSecondary = 'ra.message.loading', timeout = 1000, ...rest } = props;
    const oneSecondHasPassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])(timeout);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return oneSecondHasPassed ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: LoadingClasses.message
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: LoadingClasses.icon
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "h5",
        sx: {
            mt: 3,
            color: 'text.secondary'
        }
    }, translate(loadingPrimary, {
        _: loadingPrimary
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body2"
    }, translate(loadingSecondary, {
        _: loadingSecondary
    })))) : null;
};
const PREFIX = 'RaLoading';
const LoadingClasses = {
    root: `${PREFIX}-root`,
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        [`& .${LoadingClasses.message}`]: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            color: (theme.vars || theme).palette.text.disabled,
            paddingTop: '1em',
            paddingBottom: '1em'
        },
        [`& .${LoadingClasses.icon}`]: {
            width: '9em',
            height: '9em'
        }
    })); //# sourceMappingURL=Loading.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>Layout,
    "LayoutClasses",
    ()=>LayoutClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-error-boundary/dist/react-error-boundary.development.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AppBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Menu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SkipNavigationButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SkipNavigationButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$Inspector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/preferences/Inspector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
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
const Layout = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { appBar: AppBar = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AppBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppBar"], appBarAlwaysOn, children, className, error: errorComponent, menu: Menu = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu"], sidebar: Sidebar = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], ...rest } = props;
    const [errorInfo, setErrorInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const handleError = (error, info)=>{
        setErrorInfo(info);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Core, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('layout', className),
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SkipNavigationButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SkipNavigationButton"], null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: LayoutClasses.appFrame
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AppBar, {
        alwaysOn: appBarAlwaysOn
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("main", {
        className: LayoutClasses.contentWithSidebar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Sidebar, {
        appBarAlwaysOn: appBarAlwaysOn
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Menu, null)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: "main-content",
        className: LayoutClasses.content
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$error$2d$boundary$2f$dist$2f$react$2d$error$2d$boundary$2e$development$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        onError: handleError,
        fallbackRender: ({ error, resetErrorBoundary })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], {
                error: error,
                errorComponent: errorComponent,
                errorInfo: errorInfo,
                resetErrorBoundary: resetErrorBoundary
            })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null)
    }, children)))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$preferences$2f$Inspector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inspector"], null)));
};
const PREFIX = 'RaLayout';
const LayoutClasses = {
    appFrame: `${PREFIX}-appFrame`,
    contentWithSidebar: `${PREFIX}-contentWithSidebar`,
    content: `${PREFIX}-content`
};
const Core = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: (theme.vars || theme).palette.background.default,
        position: 'relative',
        minWidth: 'fit-content',
        width: '100%',
        [`& .${LayoutClasses.appFrame}`]: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            marginTop: theme.spacing(6),
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(7)
            }
        },
        [`& .${LayoutClasses.contentWithSidebar}`]: {
            display: 'flex',
            flexGrow: 1,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        [`& .${LayoutClasses.content}`]: {
            backgroundColor: (theme.vars || theme).palette.background.default,
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            flexBasis: 0,
            padding: 0,
            [theme.breakpoints.up('xs')]: {
                paddingRight: theme.spacing(1),
                paddingLeft: theme.spacing(1)
            }
        }
    })); //# sourceMappingURL=Layout.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AuthenticationError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthenticationError",
    ()=>AuthenticationError,
    "AuthenticationErrorClasses",
    ()=>AuthenticationErrorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/WarningAmber.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/DefaultTitleContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const AuthenticationError = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, icon = DEFAULT_ICON, textPrimary = 'ra.page.authentication_error', textSecondary = 'ra.message.authentication_error', ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultTitle"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(AuthenticationErrorClasses.root, className),
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        defaultTitle: title
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: AuthenticationErrorClasses.message
    }, icon, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "h5",
        sx: {
            mt: 3,
            color: 'text.secondary'
        }
    }, translate(textPrimary, {
        _: textPrimary
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body2"
    }, translate(textSecondary, {
        _: textSecondary
    }))));
};
const PREFIX = 'RaAuthenticationError';
const AuthenticationErrorClasses = {
    root: `${PREFIX}-root`,
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [`& .${AuthenticationErrorClasses.message}`]: {
        textAlign: 'center',
        paddingTop: '1em',
        paddingBottom: '1em',
        opacity: 0.5
    },
    [`& .${AuthenticationErrorClasses.icon}`]: {
        width: '9em',
        height: '9em'
    }
});
const DEFAULT_ICON = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$WarningAmber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    className: AuthenticationErrorClasses.icon
}); //# sourceMappingURL=AuthenticationError.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/LoadingPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingPage",
    ()=>LoadingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
;
;
const LoadingPage = ({ loadingPrimary = 'ra.page.loading', loadingSecondary = 'ra.message.loading', ...props })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], {
        loadingPrimary: loadingPrimary,
        loadingSecondary: loadingSecondary,
        ...props
    }); //# sourceMappingURL=LoadingPage.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/NotFound.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotFound",
    ()=>NotFound,
    "NotFoundClasses",
    ()=>NotFoundClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HotTub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/HotTub.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/History.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useAuthenticated.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/DefaultTitleContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const NotFound = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useAuthenticated$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthenticated"])();
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$DefaultTitleContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDefaultTitle"])();
    if (isPending) return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        ...sanitizeRestProps(props)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        defaultTitle: title
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: NotFoundClasses.message
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$HotTub$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: NotFoundClasses.icon
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h1", null, translate('ra.page.not_found')), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, translate('ra.message.not_found'), ".")), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: NotFoundClasses.toolbar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        variant: "contained",
        startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$History$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null),
        onClick: goBack
    }, translate('ra.action.back'))));
};
const sanitizeRestProps = ({ staticContext, history, location, match, ...rest })=>rest;
const PREFIX = 'RaNotFound';
const NotFoundClasses = {
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`,
    toolbar: `${PREFIX}-toolbar`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        },
        [theme.breakpoints.down('md')]: {
            height: '100vh',
            marginTop: '-3em'
        },
        [`& .${NotFoundClasses.icon}`]: {
            width: '9em',
            height: '9em'
        },
        [`& .${NotFoundClasses.message}`]: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em'
        },
        [`& .${NotFoundClasses.toolbar}`]: {
            textAlign: 'center',
            marginTop: '2em'
        }
    }));
function goBack() {
    window.history.go(-1);
} //# sourceMappingURL=NotFound.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Notification.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Notification",
    ()=>Notification,
    "NotificationClasses",
    ()=>NotificationClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Snackbar/Snackbar.js [app-client] (ecmascript) <export default as Snackbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$CloseNotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/CloseNotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undoableEventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__undoableEventEmitter$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undoableEventEmitter.js [app-client] (ecmascript) <export default as undoableEventEmitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotificationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$useTakeUndoableMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/undo/useTakeUndoableMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
const defaultAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
};
const Notification = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, type = 'info', autoHideDuration = 4000, multiLine = false, anchorOrigin = defaultAnchorOrigin, ...rest } = props;
    const { notifications, takeNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotificationContext"])();
    const takeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undo$2f$useTakeUndoableMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTakeUndoableMutation"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentNotification, setCurrentNotification] = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Notification.useEffect": ()=>{
            if (notifications.length && !currentNotification) {
                // Set a new snack when we don't have an active one
                const notification = takeNotification();
                if (notification) {
                    setCurrentNotification(notification);
                    setOpen(true);
                }
            }
            if (currentNotification) {
                const beforeunload = {
                    "Notification.useEffect.beforeunload": (e)=>{
                        e.preventDefault();
                        const confirmationMessage = '';
                        e.returnValue = confirmationMessage;
                        return confirmationMessage;
                    }
                }["Notification.useEffect.beforeunload"];
                if (currentNotification?.notificationOptions?.undoable) {
                    window.addEventListener('beforeunload', beforeunload);
                    return ({
                        "Notification.useEffect": ()=>{
                            window.removeEventListener('beforeunload', beforeunload);
                        }
                    })["Notification.useEffect"];
                }
            }
        }
    }["Notification.useEffect"], [
        notifications,
        currentNotification,
        open,
        takeNotification
    ]);
    const handleRequestClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Notification.useCallback[handleRequestClose]": ()=>{
            setOpen(false);
        }
    }["Notification.useCallback[handleRequestClose]"], [
        setOpen
    ]);
    const handleExited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Notification.useCallback[handleExited]": ()=>{
            if (currentNotification && currentNotification.notificationOptions?.undoable) {
                const mutation = takeMutation();
                if (mutation) {
                    mutation({
                        isUndo: false
                    });
                } else {
                    // FIXME kept for BC: remove in v6
                    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undoableEventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__undoableEventEmitter$3e$__["undoableEventEmitter"].emit('end', {
                        isUndo: false
                    });
                }
            }
            setCurrentNotification(undefined);
        }
    }["Notification.useCallback[handleExited]"], [
        currentNotification,
        takeMutation
    ]);
    const handleUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Notification.useCallback[handleUndo]": ()=>{
            const mutation = takeMutation();
            if (mutation) {
                mutation({
                    isUndo: true
                });
            } else {
                // FIXME kept for BC: remove in v6
                __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$undoableEventEmitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__undoableEventEmitter$3e$__["undoableEventEmitter"].emit('end', {
                    isUndo: true
                });
            }
            setOpen(false);
        }
    }["Notification.useCallback[handleUndo]"], [
        takeMutation
    ]);
    if (!currentNotification) return null;
    const { message, type: typeFromMessage, notificationOptions } = currentNotification;
    const { autoHideDuration: autoHideDurationFromMessage, messageArgs, multiLine: multilineFromMessage, undoable, ...options } = notificationOptions || {};
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$CloseNotificationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseNotificationContext"].Provider, {
        value: handleRequestClose
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledSnackbar, {
        className: className,
        open: open,
        message: message && typeof message === 'string' && translate(message, messageArgs),
        autoHideDuration: // Only apply the default autoHideDuration when autoHideDurationFromMessage is undefined
        // as 0 and null are valid values
        autoHideDurationFromMessage === undefined ? autoHideDuration : autoHideDurationFromMessage ?? undefined,
        disableWindowBlurListener: undoable,
        TransitionProps: {
            onExited: handleExited
        },
        onClose: handleRequestClose,
        ContentProps: {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(NotificationClasses[typeFromMessage || type], {
                [NotificationClasses.multiLine]: multilineFromMessage || multiLine
            })
        },
        action: undoable ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
            color: "primary",
            className: NotificationClasses.undo,
            size: "small",
            onClick: handleUndo
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, translate('ra.action.undo'))) : null,
        anchorOrigin: anchorOrigin,
        ...rest,
        ...options
    }, message && typeof message !== 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](message) ? // Wrap the element in a div to avoid forcing our users to wrap their component with forwardRef
    // which is required for animating the Snackbar
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, message) : undefined));
};
const PREFIX = 'RaNotification';
const NotificationClasses = {
    success: `${PREFIX}-success`,
    error: `${PREFIX}-error`,
    warning: `${PREFIX}-warning`,
    undo: `${PREFIX}-undo`,
    multiLine: `${PREFIX}-multiLine`
};
const StyledSnackbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Snackbar$2f$Snackbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Snackbar$3e$__["Snackbar"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme, type })=>({
        [`& .${NotificationClasses.success}`]: {
            backgroundColor: theme?.palette.success.main,
            color: theme?.palette.success.contrastText
        },
        [`& .${NotificationClasses.error}`]: {
            backgroundColor: theme?.palette.error.main,
            color: theme?.palette.error.contrastText
        },
        [`& .${NotificationClasses.warning}`]: {
            backgroundColor: theme?.palette.warning.main,
            color: theme?.palette.warning.contrastText
        },
        [`& .${NotificationClasses.undo}`]: {
            color: type === 'success' ? theme?.palette.success.contrastText : theme?.palette.primary.light
        },
        [`& .${NotificationClasses.multiLine}`]: {
            whiteSpace: 'pre-wrap'
        }
    })); //# sourceMappingURL=Notification.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AccessDenied.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDenied",
    ()=>AccessDenied,
    "AccessDeniedClasses",
    ()=>AccessDeniedClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
const AccessDenied = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, icon = DEFAULT_ICON, textPrimary = 'ra.page.access_denied', textSecondary = 'ra.message.access_denied', ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(AccessDeniedClasses.root, className),
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: AccessDeniedClasses.message
    }, icon, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "h5",
        sx: {
            mt: 3,
            color: 'text.secondary'
        }
    }, translate(textPrimary, {
        _: textPrimary
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body2"
    }, translate(textSecondary, {
        _: textSecondary
    }))));
};
const PREFIX = 'RaAccessDenied';
const AccessDeniedClasses = {
    root: `${PREFIX}-root`,
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    [`& .${AccessDeniedClasses.message}`]: {
        textAlign: 'center',
        paddingTop: '1em',
        paddingBottom: '1em',
        opacity: 0.5
    },
    [`& .${AccessDeniedClasses.icon}`]: {
        width: '9em',
        height: '9em'
    }
});
const DEFAULT_ICON = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    className: AccessDeniedClasses.icon
}); //# sourceMappingURL=AccessDenied.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ResettableTextField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResettableTextField",
    ()=>ResettableTextField,
    "ResettableTextFieldClasses",
    ()=>ResettableTextFieldClasses,
    "ResettableTextFieldStyles",
    ()=>ResettableTextFieldStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Clear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const ResettableTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((inProps, ref)=>{
    // This ensures we inherit the theme props from the TextField component (variant for instance)
    const textFieldProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: 'MuiTextField'
    });
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: textFieldProps,
        name: PREFIX
    });
    const { clearAlwaysVisible, InputProps, value, resettable, disabled, readOnly, variant, margin, className, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { onChange } = props;
    const handleClickClearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ResettableTextField.useCallback[handleClickClearButton]": (event)=>{
            event.preventDefault();
            onChange && onChange('');
        }
    }["ResettableTextField.useCallback[handleClickClearButton]"], [
        onChange
    ]);
    const { clearButton, clearIcon, inputAdornedEnd, selectAdornment, visibleClearIcon } = ResettableTextFieldClasses;
    const { endAdornment, ...InputPropsWithoutEndAdornment } = InputProps || {};
    if (clearAlwaysVisible && endAdornment) {
        throw new Error('ResettableTextField cannot display both an endAdornment and a clear button always visible');
    }
    const getEndAdornment = ()=>{
        if (!resettable) {
            return endAdornment;
        } else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                    position: "end",
                    className: props.select ? selectAdornment : undefined
                }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                    className: clearButton,
                    "aria-label": translate('ra.action.clear_input_value'),
                    title: translate('ra.action.clear_input_value'),
                    disabled: true,
                    size: "large"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clearIcon, visibleClearIcon)
                })));
            } else {
                if (endAdornment) {
                    return endAdornment;
                } else {
                    // show spacer
                    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                        position: "end",
                        className: props.select ? selectAdornment : undefined
                    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                        className: clearButton
                    }, "\u00A0"));
                }
            }
        } else {
            // show clear
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                position: "end",
                className: props.select ? selectAdornment : undefined
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                className: clearButton,
                "aria-label": translate('ra.action.clear_input_value'),
                title: translate('ra.action.clear_input_value'),
                onClick: handleClickClearButton,
                onMouseDown: handleMouseDownClearButton,
                disabled: disabled || readOnly,
                size: "large"
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(clearIcon, {
                    [visibleClearIcon]: clearAlwaysVisible || value
                })
            })));
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTextField, {
        value: value,
        InputProps: {
            readOnly: readOnly,
            classes: props.select && variant === 'filled' ? {
                adornedEnd: inputAdornedEnd
            } : {},
            endAdornment: getEndAdornment(),
            ...InputPropsWithoutEndAdornment
        },
        disabled: disabled || readOnly,
        variant: variant,
        margin: margin,
        className: className,
        ...rest,
        inputRef: ref
    });
});
ResettableTextField.displayName = 'ResettableTextField';
const handleMouseDownClearButton = (event)=>{
    event.preventDefault();
};
const PREFIX = 'RaResettableTextField';
const ResettableTextFieldClasses = {
    clearIcon: `${PREFIX}-clearIcon`,
    visibleClearIcon: `${PREFIX}-visibleClearIcon`,
    clearButton: `${PREFIX}-clearButton`,
    selectAdornment: `${PREFIX}-selectAdornment`,
    inputAdornedEnd: `${PREFIX}-inputAdornedEnd`
};
const ResettableTextFieldStyles = {
    [`& .${ResettableTextFieldClasses.clearIcon}`]: {
        height: 16,
        width: 0
    },
    [`& .${ResettableTextFieldClasses.visibleClearIcon}`]: {
        width: 16
    },
    [`& .${ResettableTextFieldClasses.clearButton}`]: {
        height: 24,
        width: 24,
        padding: 0
    },
    [`& .${ResettableTextFieldClasses.selectAdornment}`]: {
        position: 'absolute',
        right: 24
    },
    [`& .${ResettableTextFieldClasses.inputAdornedEnd}`]: {
        paddingRight: 0
    }
};
const StyledTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(ResettableTextFieldStyles); //# sourceMappingURL=ResettableTextField.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputHelperText",
    ()=>InputHelperText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$ValidationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/ValidationError.js [app-client] (ecmascript)");
;
;
;
const InputHelperText = (props)=>{
    const { helperText, error } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$ValidationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ValidationError"], {
            error: error
        });
    }
    if (helperText === false) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(helperText)) {
        return helperText;
    }
    if (typeof helperText === 'string' && helperText.length > 0) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, translate(helperText, {
            _: helperText
        }));
    }
    // Material UI's HelperText cannot reserve space unless we pass a single
    // space as child, which isn't possible when the child is a component.
    // Therefore, we must reserve the space ourselves by passing the same
    // markup as Material UI.
    // @see https://github.com/mui/material-ui/blob/62e439b7022d519ab638d65201e204b59b77f8da/packages/material-ui/src/FormHelperText/FormHelperText.js#L85-L90
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
        dangerouslySetInnerHTML: defaultInnerHTML
    });
};
const defaultInnerHTML = {
    __html: '&#8203;'
}; //# sourceMappingURL=InputHelperText.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/TextInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextInput",
    ()=>TextInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ResettableTextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const TextInput = (props)=>{
    const { className, defaultValue, label, format, helperText, onBlur, onChange, parse, resource, source, validate, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: props,
        name: PREFIX
    });
    const { field, fieldState: { error, invalid }, id, isRequired } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        defaultValue,
        format,
        parse,
        resource,
        source,
        type: 'text',
        validate,
        onBlur,
        onChange,
        ...rest
    });
    const renderHelperText = helperText !== false || invalid;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledResettableTextField, {
        id: id,
        ...field,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-input', `ra-input-${source}`, className),
        label: label !== '' && label !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
            label: label,
            source: source,
            resource: resource,
            isRequired: isRequired
        }) : null,
        error: invalid,
        helperText: renderHelperText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
            error: error?.message,
            helperText: helperText
        }) : null,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInputRestProps"])(rest)
    });
};
const PREFIX = 'RaTextInput';
const StyledResettableTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResettableTextField"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=TextInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/PasswordInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordInput",
    ()=>PasswordInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Visibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/VisibilityOff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/TextInput.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const PasswordInput = (props)=>{
    const { initiallyVisible = false, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: props,
        name: PREFIX
    });
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initiallyVisible);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const handleClick = ()=>{
        setVisible(!visible);
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTextInput, {
        type: visible ? 'text' : 'password',
        size: "small",
        InputProps: {
            endAdornment: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                position: "end"
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                "aria-label": translate(visible ? 'ra.input.password.toggle_visible' : 'ra.input.password.toggle_hidden'),
                onClick: handleClick,
                size: "small"
            }, visible ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fontSize: "small"
            }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                fontSize: "small"
            })))
        },
        ...rest
    });
};
const PREFIX = 'RaPasswordInput';
const StyledTextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=PasswordInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/LoginForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginForm",
    ()=>LoginForm,
    "LoginFormClasses",
    ()=>LoginFormClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/validate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogin$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useLogin.js [app-client] (ecmascript) <export default as useLogin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$PasswordInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/PasswordInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/TextInput.js [app-client] (ecmascript)");
;
;
;
;
;
const LoginForm = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { redirectTo, className, sx, children } = props;
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useLogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useLogin$3e$__["useLogin"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotify"])();
    const submit = (values)=>{
        setLoading(true);
        login(values, redirectTo).then(()=>{
            setLoading(false);
        }).catch((error)=>{
            setLoading(false);
            notify(typeof error === 'string' ? error : typeof error === 'undefined' || !error.message ? 'ra.auth.sign_in_error' : error.message, {
                type: 'error',
                messageArgs: {
                    _: typeof error === 'string' ? error : error && error.message ? error.message : undefined
                }
            });
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledForm, {
        onSubmit: submit,
        mode: "onChange",
        noValidate: true,
        className: className,
        sx: sx
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
        className: LoginFormClasses.content
    }, children || __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$TextInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
        autoFocus: true,
        source: "username",
        label: translate('ra.auth.username'),
        autoComplete: "username",
        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$PasswordInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordInput"], {
        source: "password",
        label: translate('ra.auth.password'),
        autoComplete: "current-password",
        validate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$validate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["required"])()
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        variant: "contained",
        type: "submit",
        color: "primary",
        disabled: loading,
        fullWidth: true,
        className: LoginFormClasses.button
    }, loading ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
        className: LoginFormClasses.icon,
        size: 19,
        thickness: 3
    }) : translate('ra.auth.sign_in'))));
};
const PREFIX = 'RaLoginForm';
const LoginFormClasses = {
    content: `${PREFIX}-content`,
    button: `${PREFIX}-button`,
    icon: `${PREFIX}-icon`
};
const StyledForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${LoginFormClasses.content}`]: {
            width: 300,
            paddingBottom: `${theme.spacing(2)}!important`
        },
        [`& .${LoginFormClasses.button}`]: {
            marginTop: theme.spacing(2)
        },
        [`& .${LoginFormClasses.icon}`]: {
            margin: theme.spacing(0.3)
        }
    })); //# sourceMappingURL=LoginForm.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/Login.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Login",
    ()=>Login,
    "LoginClasses",
    ()=>LoginClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Avatar/Avatar.js [app-client] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCheckAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCheckAuth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$LoginForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/LoginForm.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const Login = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { children = defaultLoginForm, backgroundImage, avatarIcon = defaultAvatarIcon, ...rest } = props;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let backgroundImageLoaded = false;
    const checkAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCheckAuth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCheckAuth"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            checkAuth({}, false).then({
                "Login.useEffect": ()=>{
                    // already authenticated, redirect to the home page
                    navigate('/');
                }
            }["Login.useEffect"]).catch({
                "Login.useEffect": ()=>{
                // not authenticated, stay on the login page
                }
            }["Login.useEffect"]);
        }
    }["Login.useEffect"], [
        checkAuth,
        navigate
    ]);
    const updateBackgroundImage = ()=>{
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };
    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = ()=>{
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Login.useEffect": ()=>{
            if (!backgroundImageLoaded) {
                lazyLoadBackgroundImage();
            }
        }
    }["Login.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        ...rest,
        ref: containerRef
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        className: LoginClasses.card
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: LoginClasses.avatar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Avatar$2f$Avatar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
        className: LoginClasses.icon
    }, avatarIcon)), children));
};
const defaultLoginForm = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$LoginForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginForm"], null);
const defaultAvatarIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaLogin';
const LoginClasses = {
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
        [`& .${LoginClasses.card}`]: {
            minWidth: 300,
            marginTop: '6em'
        },
        [`& .${LoginClasses.avatar}`]: {
            margin: '1em',
            display: 'flex',
            justifyContent: 'center'
        },
        [`& .${LoginClasses.icon}`]: {
            backgroundColor: (theme.vars || theme).palette.secondary[500]
        }
    })); //# sourceMappingURL=Login.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/AuthError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthError",
    ()=>AuthError,
    "AuthErrorClasses",
    ()=>AuthErrorClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Lock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
const AuthError = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, title = 'ra.page.error', message = 'ra.message.auth_error', ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: AuthErrorClasses.message
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("h1", null, translate(title, {
        _: title
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", null, translate(message, {
        _: message
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"],
        to: "/login",
        label: "ra.auth.sign_in"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null))));
};
const PREFIX = 'RaAuthError';
const AuthErrorClasses = {
    root: `${PREFIX}-root`,
    message: `${PREFIX}-message`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%'
        },
        [theme.breakpoints.down('xl')]: {
            height: '100vh',
            marginTop: '-3em'
        },
        [`& .${AuthErrorClasses.message}`]: {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em'
        }
    })); //# sourceMappingURL=AuthError.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/AuthCallback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthCallback",
    ()=>AuthCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useHandleAuthCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useHandleAuthCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$AuthError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/AuthError.js [app-client] (ecmascript)");
;
;
;
;
const AuthCallback = ()=>{
    const { error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useHandleAuthCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHandleAuthCallback"])();
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$AuthError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthError"], {
            message: error ? error.message : undefined
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null);
}; //# sourceMappingURL=AuthCallback.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/AdminUI.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminUI",
    ()=>AdminUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminUI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminUI.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [app-client] (ecmascript) <export default as CssBaseline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AuthenticationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AuthenticationError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$LoadingPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/LoadingPage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$NotFound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/NotFound.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Notification.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AccessDenied$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/AccessDenied.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/Login.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$AuthCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/auth/AuthCallback.js [app-client] (ecmascript)");
;
;
;
;
;
;
const AdminUI = ({ accessDenied = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AccessDenied$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccessDenied"], authCallbackPage = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$AuthCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthCallback"], authenticationError = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$AuthenticationError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthenticationError"], catchAll = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$NotFound$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotFound"], error = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Error"], layout = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layout"], loading = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$LoadingPage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingPage"], loginPage = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$auth$2f$Login$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Login"], notification = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Notification$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification"], ...props })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {
        enableColorScheme: true
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminUI$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreAdminUI"], {
        accessDenied: accessDenied,
        authCallbackPage: authCallbackPage,
        authenticationError: authenticationError,
        catchAll: catchAll,
        error: error,
        layout: layout,
        loading: loading,
        loginPage: loginPage,
        ...props
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(notification)); //# sourceMappingURL=AdminUI.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/ThemeProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/ThemeProvider.js [app-client] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/createTheme.js [app-client] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useTheme.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/useThemesContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ThemeProvider = ({ children })=>{
    const { lightTheme, darkTheme, defaultTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemesContext"])();
    const prefersDarkMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])('(prefers-color-scheme: dark)', {
        noSsr: true
    });
    const [mode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$useTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])(defaultTheme || (prefersDarkMode && darkTheme ? 'dark' : 'light'));
    const themeValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThemeProvider.useMemo[themeValue]": ()=>{
            try {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])(mode === 'dark' ? darkTheme : lightTheme);
            } catch (e) {
                console.warn('Failed to reuse custom theme from store', e);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])();
            }
        }
    }["ThemeProvider.useMemo[themeValue]"], [
        mode,
        lightTheme,
        darkTheme
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
        theme: themeValue
    }, children);
}; //# sourceMappingURL=ThemeProvider.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/defaultTheme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultDarkTheme",
    ()=>defaultDarkTheme,
    "defaultLightTheme",
    ()=>defaultLightTheme,
    "defaultTheme",
    ()=>defaultTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__grey$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/colors/grey.js [app-client] (ecmascript) <export default as grey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/utils/esm/deepmerge/deepmerge.js [app-client] (ecmascript) <export default as deepmerge>");
;
;
const defaultThemeInvariants = {
    typography: {
        h6: {
            fontWeight: 400
        }
    },
    sidebar: {
        width: 240,
        closedWidth: 50
    },
    components: {
        MuiAutocomplete: {
            defaultProps: {
                fullWidth: true
            },
            variants: [
                {
                    props: {},
                    style: ({ theme })=>({
                            [theme.breakpoints.down('sm')]: {
                                width: '100%'
                            }
                        })
                }
            ]
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
                margin: 'dense',
                size: 'small',
                fullWidth: true
            },
            variants: [
                {
                    props: {},
                    style: ({ theme })=>({
                            [theme.breakpoints.down('sm')]: {
                                width: '100%'
                            }
                        })
                }
            ]
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'filled',
                margin: 'dense',
                size: 'small',
                fullWidth: true
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    '&.MuiTableCell-paddingCheckbox': {
                        padding: `0 8px 0 8px`
                    }
                }
            }
        },
        RaSimpleFormIterator: {
            defaultProps: {
                fullWidth: true
            }
        },
        RaTranslatableInputs: {
            defaultProps: {
                fullWidth: true
            }
        }
    }
};
const defaultLightTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__["deepmerge"])(defaultThemeInvariants, {
    palette: {
        background: {
            default: '#fafafb'
        },
        secondary: {
            light: '#6ec6ff',
            main: '#2196f3',
            dark: '#0069c0',
            contrastText: '#fff'
        }
    },
    components: {
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    '&$disabled': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                    }
                }
            }
        },
        RaToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__grey$3e$__["grey"][300]
                }
            }
        }
    }
});
const defaultDarkTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$deepmerge$2f$deepmerge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__deepmerge$3e$__["deepmerge"])(defaultThemeInvariants, {
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9'
        },
        background: {
            default: '#313131'
        }
    },
    components: {
        RaToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$colors$2f$grey$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__grey$3e$__["grey"][800]
                }
            }
        }
    }
});
const defaultTheme = defaultLightTheme; //# sourceMappingURL=defaultTheme.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/AdminContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminContext",
    ()=>AdminContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/CoreAdminContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/ThemeProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/ThemesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/theme/defaultTheme.js [app-client] (ecmascript)");
;
;
;
const AdminContext = (props)=>{
    const { theme, lightTheme = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLightTheme"], darkTheme, defaultTheme, children, ...rest } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$CoreAdminContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CoreAdminContext"], {
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemesContext"].Provider, {
        value: {
            lightTheme: theme || lightTheme,
            darkTheme: theme && !darkTheme ? undefined : !darkTheme && darkTheme !== null ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$defaultTheme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDarkTheme"] : darkTheme ?? undefined,
            defaultTheme
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$theme$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], null, children)));
};
AdminContext.displayName = 'AdminContext'; //# sourceMappingURL=AdminContext.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/BooleanField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BooleanField",
    ()=>BooleanField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Done$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Done.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Clear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useFieldValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/genericMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/field/sanitizeFieldRestProps.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const BooleanFieldImpl = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, emptyText, valueLabelTrue, valueLabelFalse, TrueIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Done$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], FalseIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], looseValue = false, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldValue"])(props);
    const isTruthyValue = value === true || looseValue && value;
    let ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel = isTruthyValue ? 'ra.boolean.true' : 'ra.boolean.false';
    }
    if (looseValue || value === false || value === true) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTypography, {
            component: "span",
            variant: "body2",
            className: className,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeFieldRestProps"])(rest)
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
            title: translate(ariaLabel, {
                _: ariaLabel
            })
        }, isTruthyValue ? TrueIcon ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](TrueIcon, {
            "data-testid": "true",
            fontSize: "small",
            className: classes.trueIcon
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null) : FalseIcon ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FalseIcon, {
            "data-testid": "false",
            fontSize: "small",
            className: classes.falseIcon
        }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null)));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        component: "span",
        variant: "body2",
        className: className,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeFieldRestProps"])(rest)
    }, emptyText && translate(emptyText, {
        _: emptyText
    }));
};
BooleanFieldImpl.displayName = 'BooleanFieldImpl';
const BooleanField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genericMemo"])(BooleanFieldImpl);
const PREFIX = 'RaBooleanField';
const classes = {
    trueIcon: `${PREFIX}-trueIcon`,
    falseIcon: `${PREFIX}-falseIcon`
};
const StyledTypography = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'inline-flex',
    verticalAlign: 'middle',
    lineHeight: 0,
    [`& .${classes.trueIcon}`]: {},
    [`& .${classes.falseIcon}`]: {}
}); //# sourceMappingURL=BooleanField.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/BooleanInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BooleanInput",
    ()=>BooleanInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/FormControlLabel/FormControlLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormHelperText$2f$FormHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/FormHelperText/FormHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/FormGroup/FormGroup.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Switch/Switch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)");
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
const BooleanInput = (props)=>{
    const { className, row = false, defaultValue = false, format, label, fullWidth, helperText, onBlur, onChange, onFocus, readOnly, disabled, parse, resource, source, validate, options = defaultOptions, sx, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: props,
        name: PREFIX
    });
    const { id, field, isRequired, fieldState: { error, invalid } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        defaultValue,
        format,
        parse,
        resource,
        source,
        onBlur,
        onChange,
        type: 'checkbox',
        validate,
        disabled,
        readOnly,
        ...rest
    });
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BooleanInput.useCallback[handleChange]": (event)=>{
            field.onChange(event);
            // Ensure field is considered as touched
            field.onBlur();
        }
    }["BooleanInput.useCallback[handleChange]"], [
        field
    ]);
    const renderHelperText = helperText !== false || invalid;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledFormGroup, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-input', `ra-input-${source}`, className),
        row: row,
        sx: sx
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControlLabel$2f$FormControlLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        inputRef: field.ref,
        control: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Switch$2f$Switch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: id,
            name: field.name,
            onChange: handleChange,
            onFocus: onFocus,
            checked: Boolean(field.value),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInputRestProps"])(rest),
            ...options,
            disabled: disabled || readOnly,
            readOnly: readOnly
        }),
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
            label: label,
            source: source,
            resource: resource,
            isRequired: isRequired
        })
    }), renderHelperText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormHelperText$2f$FormHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        error: invalid
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
        error: error?.message,
        helperText: helperText
    })) : null);
};
const defaultOptions = {};
const PREFIX = 'RaBooleanInput';
const StyledFormGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormGroup$2f$FormGroup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=BooleanInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/CreateView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateClasses",
    ()=>CreateClasses,
    "CreateView",
    ()=>CreateView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$create$2f$useCreateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/create/useCreateContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
;
;
;
;
;
const CreateView = (props)=>{
    const { actions, aside, children, render, className, component: Content = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], title, ...rest } = props;
    const createContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$create$2f$useCreateContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateContext"])();
    const { resource, defaultTitle } = createContext;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('create-page', className),
        ...rest
    }, title !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        title: title,
        defaultTitle: defaultTitle,
        preferenceKey: `${resource}.create.title`
    }), actions, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CreateClasses.main, {
            [CreateClasses.noActions]: !actions
        })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Content, {
        className: CreateClasses.card
    }, render ? render(createContext) : children), aside));
};
const PREFIX = 'RaCreate';
const CreateClasses = {
    main: `${PREFIX}-main`,
    noActions: `${PREFIX}-noActions`,
    card: `${PREFIX}-card`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${CreateClasses.main}`]: {
            display: 'flex'
        },
        [`& .${CreateClasses.noActions}`]: {
            [theme.breakpoints.up('sm')]: {
                marginTop: '1em'
            }
        },
        [`& .${CreateClasses.card}`]: {
            flex: '1 1 auto'
        }
    })); //# sourceMappingURL=CreateView.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Create.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Create",
    ()=>Create
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$create$2f$CreateBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/create/CreateBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$CreateView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/CreateView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
;
;
;
;
;
const Create = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { resource, record, redirect, transform, mutationMode, mutationOptions, disableAuthentication, hasEdit, hasShow, loading, authLoading = loading ?? defaultAuthLoading, ...rest } = props;
    if (!props.render && !props.children) {
        throw new Error('<Create> requires either a `render` prop or `children` prop');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$create$2f$CreateBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateBase"], {
        resource: resource,
        record: record,
        redirect: redirect,
        transform: transform,
        mutationMode: mutationMode,
        mutationOptions: mutationOptions,
        disableAuthentication: disableAuthentication,
        hasEdit: hasEdit,
        hasShow: hasShow,
        authLoading: authLoading
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$CreateView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateView"], {
        ...rest
    }));
};
const defaultAuthLoading = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null);
const PREFIX = 'RaCreate'; // Types declared in CreateView.
 //# sourceMappingURL=Create.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridHeaderCell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatagridHeaderCell",
    ()=>DatagridHeaderCell,
    "DatagridHeaderCellClasses",
    ()=>DatagridHeaderCellClasses,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableSortLabel$2f$TableSortLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableSortLabel$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableSortLabel/TableSortLabel.js [app-client] (ecmascript) <export default as TableSortLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Tooltip/Tooltip.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslateLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslateLabel.js [app-client] (ecmascript)");
;
;
;
;
;
;
const oppositeOrder = {
    ASC: 'DESC',
    DESC: 'ASC'
};
const DatagridHeaderCell = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, field, sort, updateSort, isSorting, ...rest } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const translateLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslateLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslateLabel"])();
    const nextSortOrder = field ? sort && sort.field === (field.props.sortBy || field.props.source) ? oppositeOrder[sort.order] : field?.props.sortByOrder ?? 'ASC' : undefined;
    const fieldLabel = field ? translateLabel({
        label: typeof field.props.label === 'string' ? field.props.label : undefined,
        resource,
        source: field.props.source
    }) : undefined;
    const sortLabel = translate('ra.sort.sort_by', {
        field: fieldLabel,
        field_lower_first: typeof fieldLabel === 'string' ? fieldLabel.charAt(0).toLowerCase() + fieldLabel.slice(1) : undefined,
        order: translate(`ra.sort.${nextSortOrder}`),
        _: translate('ra.action.sort')
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTableCell, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, field?.props.headerClassName),
        align: field?.props.textAlign || field?.type.textAlign,
        variant: "head",
        ...rest
    }, updateSort && sort && field && field.props.sortable !== false && field.type.sortable !== false && (field.props.sortBy || field.props.source) ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
        title: sortLabel,
        placement: field.props.textAlign === 'right' || field.type.textAlign === 'right' ? 'bottom-end' : 'bottom-start',
        enterDelay: 300
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableSortLabel$2f$TableSortLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableSortLabel$3e$__["TableSortLabel"], {
        active: sort.field === (field.props.sortBy || field.props.source),
        direction: sort.order === 'ASC' ? 'asc' : 'desc',
        "data-field": field.props.sortBy || field.props.source,
        "data-order": field.props.sortByOrder || 'ASC',
        onClick: updateSort,
        classes: DatagridHeaderCellClasses
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
        label: field.props.label,
        source: field.props.source,
        resource: resource
    }))) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
        label: field?.props.label,
        source: field?.props.source,
        resource: resource
    }));
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(DatagridHeaderCell, (props, nextProps)=>props.updateSort === nextProps.updateSort && props.sort?.field === nextProps.sort?.field && props.sort?.order === nextProps.sort?.order && props.isSorting === nextProps.isSorting);
const PREFIX = 'RaDatagridHeaderCell';
const DatagridHeaderCellClasses = {
    icon: `${PREFIX}-icon`
};
// Remove the sort icons when not active
const StyledTableCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    [`& .MuiTableSortLabel-icon`]: {
        display: 'none'
    },
    [`& .Mui-active .MuiTableSortLabel-icon`]: {
        display: 'inline'
    }
}); //# sourceMappingURL=DatagridHeaderCell.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatagridClasses",
    ()=>DatagridClasses,
    "DatagridPrefix",
    ()=>DatagridPrefix,
    "DatagridRoot",
    ()=>DatagridRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
;
const DatagridPrefix = 'RaDatagrid';
const DatagridClasses = {
    root: `${DatagridPrefix}-root`,
    table: `${DatagridPrefix}-table`,
    tableWrapper: `${DatagridPrefix}-tableWrapper`,
    thead: `${DatagridPrefix}-thead`,
    tbody: `${DatagridPrefix}-tbody`,
    headerRow: `${DatagridPrefix}-headerRow`,
    headerCell: `${DatagridPrefix}-headerCell`,
    checkbox: `${DatagridPrefix}-checkbox`,
    row: `${DatagridPrefix}-row`,
    clickableRow: `${DatagridPrefix}-clickableRow`,
    rowEven: `${DatagridPrefix}-rowEven`,
    rowOdd: `${DatagridPrefix}-rowOdd`,
    rowCell: `${DatagridPrefix}-rowCell`,
    selectable: `${DatagridPrefix}-selectable`,
    expandHeader: `${DatagridPrefix}-expandHeader`,
    expandIconCell: `${DatagridPrefix}-expandIconCell`,
    expandIcon: `${DatagridPrefix}-expandIcon`,
    expandable: `${DatagridPrefix}-expandable`,
    expanded: `${DatagridPrefix}-expanded`,
    expandedPanel: `${DatagridPrefix}-expandedPanel`
};
const DatagridRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: DatagridPrefix,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${DatagridClasses.table}`]: {
            tableLayout: 'auto'
        },
        [`& .${DatagridClasses.tableWrapper}`]: {},
        [`& .${DatagridClasses.thead}`]: {},
        [`& .${DatagridClasses.tbody}`]: {},
        [`& .${DatagridClasses.headerRow}`]: {},
        [`& .${DatagridClasses.headerCell}`]: {
            position: 'sticky',
            top: 0,
            zIndex: 2,
            backgroundColor: (theme.vars || theme).palette.background.paper,
            '&:first-of-type': {
                borderTopLeftRadius: theme.shape.borderRadius
            },
            '&:last-child': {
                borderTopRightRadius: theme.shape.borderRadius
            }
        },
        [`& .${DatagridClasses.checkbox}`]: {},
        [`& .${DatagridClasses.row}`]: {},
        [`& .${DatagridClasses.clickableRow}`]: {
            cursor: 'pointer'
        },
        [`& .${DatagridClasses.rowEven}`]: {},
        [`& .${DatagridClasses.rowOdd}`]: {},
        [`& .${DatagridClasses.rowCell}`]: {},
        [`& .${DatagridClasses.expandHeader}`]: {
            padding: 0,
            width: theme.spacing(6)
        },
        [`& .${DatagridClasses.expandIconCell}`]: {
            width: theme.spacing(6)
        },
        [`& .${DatagridClasses.expandIcon}`]: {
            padding: theme.spacing(1),
            transform: 'rotate(-90deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            })
        },
        [`& .${DatagridClasses.expandIcon}.${DatagridClasses.expanded}`]: {
            transform: 'rotate(0deg)'
        },
        [`& .${DatagridClasses.expandedPanel}`]: {}
    })); //# sourceMappingURL=useDatagridStyles.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/ExpandAllButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useExpanded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useExpanded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
const ExpandAllButton = ({ ids, classes = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"] })=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])();
    const [expanded, toggleExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useExpanded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpandAll"])(resource || '', ids);
    if (!resource) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(classes.expandIcon, {
            [classes.expanded]: expanded
        }),
        "aria-label": translate(expanded ? 'ra.action.close' : 'ra.action.expand'),
        "aria-expanded": expanded,
        tabIndex: -1,
        "aria-hidden": "true",
        onClick: toggleExpanded,
        size: "small"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "inherit"
    }));
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ExpandAllButton);
 //# sourceMappingURL=ExpandAllButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const DatagridContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({});
DatagridContext.displayName = 'DatagridContext';
const __TURBOPACK__default__export__ = DatagridContext;
 //# sourceMappingURL=DatagridContext.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDatagridContext",
    ()=>useDatagridContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/defaults.js [app-client] (ecmascript)");
;
;
;
const useDatagridContext = (props)=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDatagridContext.useMemo": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, props != null ? {
                isRowExpandable: props.isRowExpandable
            } : {}, context)
    }["useDatagridContext.useMemo"], [
        context,
        props
    ]);
}; //# sourceMappingURL=useDatagridContext.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DatagridHeader",
    ()=>DatagridHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContextWithProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridHeaderCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridHeaderCell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$ExpandAllButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/ExpandAllButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const DatagridHeader = (props)=>{
    const { children, className, hasExpand = false, hasBulkActions = false, isRowSelectable } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { sort, data, onSelect, selectedIds, setSort } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContextWithProps"])(props);
    const { expandSingle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatagridContext"])();
    const updateSortCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatagridHeader.useCallback[updateSortCallback]": (event)=>{
            event.stopPropagation();
            if (!setSort) return;
            const newField = event.currentTarget.dataset.field;
            const newOrder = sort?.field === newField ? sort?.order === 'ASC' ? 'DESC' : 'ASC' : event.currentTarget.dataset.order;
            setSort({
                field: newField,
                order: newOrder
            });
        }
    }["DatagridHeader.useCallback[updateSortCallback]"], [
        sort?.field,
        sort?.order,
        setSort
    ]);
    const updateSort = setSort ? updateSortCallback : null;
    const handleSelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatagridHeader.useCallback[handleSelectAll]": (event)=>{
            if (!onSelect || !selectedIds || !data) return;
            onSelect(event.target.checked ? selectedIds.concat(data.filter({
                "DatagridHeader.useCallback[handleSelectAll]": (record)=>!selectedIds.includes(record.id) && (!isRowSelectable || isRowSelectable(record))
            }["DatagridHeader.useCallback[handleSelectAll]"]).map({
                "DatagridHeader.useCallback[handleSelectAll]": (record)=>record.id
            }["DatagridHeader.useCallback[handleSelectAll]"])) : selectedIds.filter({
                "DatagridHeader.useCallback[handleSelectAll]": (id)=>!data.some({
                        "DatagridHeader.useCallback[handleSelectAll]": (record)=>record.id === id
                    }["DatagridHeader.useCallback[handleSelectAll]"])
            }["DatagridHeader.useCallback[handleSelectAll]"]));
        }
    }["DatagridHeader.useCallback[handleSelectAll]"], [
        data,
        onSelect,
        isRowSelectable,
        selectedIds
    ]);
    const selectableIds = Array.isArray(data) ? isRowSelectable ? data.filter((record)=>isRowSelectable(record)).map((record)=>record.id) : data.map((record)=>record.id) : [];
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__["TableHead"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].thead)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].row, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].headerRow)
    }, hasExpand && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "none",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].headerCell, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandHeader)
    }, !expandSingle && data ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$ExpandAllButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ids: data.map((record)=>record.id)
    }) : null), hasBulkActions && selectedIds && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "checkbox",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].headerCell
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
        inputProps: {
            'aria-label': translate('ra.action.select_all', {
                _: 'Select all'
            })
        },
        className: "select-all",
        color: "primary",
        checked: selectedIds.length > 0 && selectableIds.length > 0 && selectableIds.every((id)=>selectedIds.includes(id)),
        onChange: handleSelectAll,
        onClick: (e)=>e.stopPropagation()
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].map(children, (field, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(field) ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridHeaderCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].headerCell, `column-${field.props.source}`),
            sort: sort,
            field: field,
            isSorting: sort?.field === (field.props.sortBy || field.props.source),
            key: field.props.source || index,
            updateSort: updateSort || undefined
        }) : null)));
};
DatagridHeader.displayName = 'DatagridHeader'; //# sourceMappingURL=DatagridHeader.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/Placeholder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Placeholder",
    ()=>Placeholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
;
;
const Placeholder = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        ...props
    }, "\u00A0");
};
const PREFIX = 'RaPlaceholder';
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        backgroundColor: (theme.vars || theme).palette.grey[300],
        display: 'flex'
    })); //# sourceMappingURL=Placeholder.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridLoading.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableHead/TableHead.js [app-client] (ecmascript) <export default as TableHead>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/Placeholder.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const times = (nbChildren, fn)=>Array.from({
        length: nbChildren
    }, (_, key)=>fn(key));
const DatagridLoading = ({ className, expand, hasBulkActions, nbChildren, nbFakeLines = 5, size })=>{
    const oneSecondHasPassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])(1000);
    if (!oneSecondHasPassed) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].root
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].table, className),
        size: size
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableHead$2f$TableHead$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableHead$3e$__["TableHead"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].row
    }, expand && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "none",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandHeader
    }), hasBulkActions && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "checkbox",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIconCell
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
        className: "select-all",
        color: "primary",
        checked: false
    })), times(nbChildren, (key)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
            variant: "head",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].headerCell,
            key: key
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Placeholder"], null))))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], null, times(nbFakeLines, (key1)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
            key: key1,
            style: {
                opacity: 1 / (key1 + 1)
            }
        }, expand && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
            padding: "none",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIconCell
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIcon,
            component: "div",
            "aria-hidden": "true",
            size: "large"
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null))), hasBulkActions && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
            padding: "checkbox",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIconCell
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
            className: "select-all",
            color: "primary",
            checked: false
        })), times(nbChildren, (key2)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].rowCell,
                key: key2
            }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$Placeholder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Placeholder"], null))))))));
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(DatagridLoading);
 //# sourceMappingURL=DatagridLoading.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridCell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
const DatagridCell = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ className, field, record, resource, ...rest }, ref)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, field.props.cellClassName),
        align: field.props.textAlign || field.type.textAlign,
        ref: ref,
        ...rest
    }, field));
// What? TypeScript loses the displayName if we don't set it explicitly
DatagridCell.displayName = 'DatagridCell';
const __TURBOPACK__default__export__ = DatagridCell;
 //# sourceMappingURL=DatagridCell.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/ExpandRowButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ExpandMore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
const ExpandRowButton = ({ expanded, expandContentId, ...props })=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "aria-label": translate(expanded ? 'ra.action.close' : 'ra.action.expand'),
        "aria-expanded": expanded,
        "aria-controls": expandContentId,
        tabIndex: -1,
        "aria-hidden": "true",
        component: "div",
        ...props,
        size: "small"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ExpandMore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "inherit"
    }));
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ExpandRowButton);
 //# sourceMappingURL=ExpandRowButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridRow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PureDatagridRow",
    ()=>PureDatagridRow,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableCell/TableCell.js [app-client] (ecmascript) <export default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableRow/TableRow.js [app-client] (ecmascript) <export default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Checkbox/Checkbox.js [app-client] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/shallowEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useExpanded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useExpanded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useGetPathForRecordCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useGetPathForRecordCallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridCell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$ExpandRowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/ExpandRowButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const computeNbColumns = (expand, children, hasBulkActions)=>expand ? 1 + // show expand button
    (hasBulkActions ? 1 : 0) + // checkbox column
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).filter((child)=>!!child).length // non-null children
     : 0; // we don't need to compute columns if there is no expand panel;
const DatagridRow = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { children, className, expand, hasBulkActions = false, hover = true, id, onToggleItem, record: recordOverride, rowClick, selected = false, style, selectable = true, ...rest } = props;
    if (typeof id === 'undefined') {
        throw new Error('DatagridRow expects an id prop');
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDatagridContext"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    if (!record) {
        throw new Error('DatagridRow can only be used within a RecordContext or be passed a record prop');
    }
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const resourceDefinition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinition"])(props);
    const hasDetailView = resourceDefinition.hasShow || resourceDefinition.hasEdit;
    if (!resource) {
        throw new Error('DatagridRow can only be used within a ResourceContext or be passed a resource prop');
    }
    const expandable = (!context || !context.isRowExpandable || context.isRowExpandable(record)) && expand;
    const [expanded, toggleExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useExpanded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpanded"])(resource, id, context && context.expandSingle);
    const [nbColumns, setNbColumns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DatagridRow.useState": ()=>computeNbColumns(expandable, children, hasBulkActions)
    }["DatagridRow.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DatagridRow.useEffect": ()=>{
            // Fields can be hidden dynamically based on permissions;
            // The expand panel must span over the remaining columns
            // So we must recompute the number of columns to span on
            const newNbColumns = computeNbColumns(expandable, children, hasBulkActions);
            if (newNbColumns !== nbColumns) {
                setNbColumns(newNbColumns);
            }
        }
    }["DatagridRow.useEffect"], [
        expandable,
        nbColumns,
        children,
        hasBulkActions
    ]);
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const handleToggleExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatagridRow.useCallback[handleToggleExpand]": (event)=>{
            toggleExpanded();
            event.stopPropagation();
        }
    }["DatagridRow.useCallback[handleToggleExpand]"], [
        toggleExpanded
    ]);
    const handleToggleSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatagridRow.useCallback[handleToggleSelection]": (event)=>{
            if (!selectable || !onToggleItem) return;
            onToggleItem(id, event);
            event.stopPropagation();
        }
    }["DatagridRow.useCallback[handleToggleSelection]"], [
        id,
        onToggleItem,
        selectable
    ]);
    const getPathForRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useGetPathForRecordCallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPathForRecordCallback"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DatagridRow.useCallback[handleClick]": async (event)=>{
            event.persist();
            const temporaryLink = typeof rowClick === 'function' ? rowClick(record.id, resource, record) : rowClick;
            const link = isPromise(temporaryLink) ? await temporaryLink : temporaryLink;
            if (link === 'expand') {
                handleToggleExpand(event);
                return;
            }
            if (link === 'toggleSelection') {
                handleToggleSelection(event);
                return;
            }
            const path = await getPathForRecord({
                record,
                resource,
                link
            });
            if (path === false || path == null) {
                return;
            }
            navigate(path, {
                state: {
                    _scrollToTop: true
                }
            });
        }
    }["DatagridRow.useCallback[handleClick]"], [
        record,
        resource,
        rowClick,
        navigate,
        handleToggleExpand,
        handleToggleSelection,
        getPathForRecord
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandable]: expandable,
            [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].selectable]: selectable,
            [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].clickableRow]: rowClick ?? hasDetailView
        }),
        key: id,
        style: style,
        hover: hover,
        onClick: handleClick,
        ...rest
    }, expand && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "none",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIconCell
    }, expandable && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$ExpandRowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandIcon, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expanded]: expanded
        }),
        expanded: expanded,
        onClick: handleToggleExpand,
        expandContentId: `${id}-expand`
    })), hasBulkActions && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        padding: "checkbox"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Checkbox$2f$Checkbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
        "aria-label": translate('ra.action.select_row', {
            _: 'Select this row'
        }),
        color: "primary",
        className: `select-item ${__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].checkbox}`,
        checked: selectable && selected,
        onClick: handleToggleSelection,
        disabled: !selectable
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (field, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(field) ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            key: `${id}-${field.props.source || index}`,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`column-${field.props.source}`, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].rowCell),
            record: record,
            field: field,
            resource
        }) : null)), expandable && expanded && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableRow$2f$TableRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableRow$3e$__["TableRow"], {
        key: `${id}-expand`,
        id: `${id}-expand`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].expandedPanel
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableCell$2f$TableCell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableCell$3e$__["TableCell"], {
        colSpan: nbColumns
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(expand) ? expand : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(expand))));
});
const areEqual = (prevProps, nextProps)=>{
    const { children: _1, expand: _2, ...prevPropsWithoutChildren } = prevProps;
    const { children: _3, expand: _4, ...nextPropsWithoutChildren } = nextProps;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$shallowEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqual"])(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
const PureDatagridRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(DatagridRow, areEqual);
PureDatagridRow.displayName = 'PureDatagridRow';
const isPromise = (value)=>value && typeof value.then === 'function';
const __TURBOPACK__default__export__ = DatagridRow;
 //# sourceMappingURL=DatagridRow.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridBody.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PureDatagridBody",
    ()=>PureDatagridBody,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TableBody/TableBody.js [app-client] (ecmascript) <export default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/RecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridRow.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const DatagridBody = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, className, data = defaultData, expand, hasBulkActions = false, hover, onToggleItem, resource, row = defaultChildren, rowClick, rowSx, rowStyle, selectedIds, isRowSelectable, ...rest }, ref)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TableBody$2f$TableBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TableBody$3e$__["TableBody"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('datagrid-body', className, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].tbody),
        ...rest
    }, data.map((record, rowIndex)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$RecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordContextProvider"], {
            value: record,
            key: record.id ?? `row${rowIndex}`
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(row, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].row, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].rowEven]: rowIndex % 2 === 0,
                [__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].rowOdd]: rowIndex % 2 !== 0
            }),
            expand,
            hasBulkActions: hasBulkActions && !!selectedIds,
            hover,
            id: record.id ?? `row${rowIndex}`,
            onToggleItem,
            resource,
            rowClick,
            selectable: !isRowSelectable || isRowSelectable(record),
            selected: selectedIds?.includes(record.id),
            sx: rowSx?.(record, rowIndex),
            style: rowStyle?.(record, rowIndex)
        }, children)))));
const defaultChildren = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const defaultData = [];
// trick Material UI Table into thinking this is one of the child type it supports
// @ts-ignore
DatagridBody.muiName = 'TableBody';
const PureDatagridBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((props)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](DatagridBody, {
        row: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridRow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureDatagridRow"], null),
        ...props
    }));
// trick Material UI Table into thinking this is one of the child type it supports
// @ts-ignore
PureDatagridBody.muiName = 'TableBody';
const __TURBOPACK__default__export__ = DatagridBody;
 //# sourceMappingURL=DatagridBody.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridContextProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridContext.js [app-client] (ecmascript)");
;
;
const DatagridContextProvider = ({ children, value })=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Provider, {
        value: value
    }, children);
const __TURBOPACK__default__export__ = DatagridContextProvider;
 //# sourceMappingURL=DatagridContextProvider.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TopToolbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopToolbar",
    ()=>TopToolbar,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
;
;
;
const TopToolbar = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const isXSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "TopToolbar.useMediaQuery[isXSmall]": (theme)=>theme.breakpoints.down('sm')
    }["TopToolbar.useMediaQuery[isXSmall]"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledToolbar, {
        disableGutters: true,
        variant: isXSmall ? 'regular' : 'dense',
        ...sanitizeToolbarRestProps(props)
    });
};
const __TURBOPACK__default__export__ = TopToolbar;
const PREFIX = 'RaTopToolbar';
const StyledToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        gap: theme.spacing(1),
        whiteSpace: 'nowrap',
        flex: '0 1 auto',
        padding: theme.spacing(0.5),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            flex: '0 1 100%'
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: (theme.vars || theme).palette.background.paper,
            padding: 0,
            paddingBottom: 0
        }
    }));
const sanitizeToolbarRestProps = ({ hasCreate, ...props })=>props; //# sourceMappingURL=TopToolbar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SelectAllButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectAllButton",
    ()=>SelectAllButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
const SelectAllButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function SelectAllButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { label = 'ra.action.select_all_button', limit = 250, onClick, queryOptions, ...rest } = props;
    const { total, selectedIds, onSelectAll, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectAllButton.SelectAllButton.useCallback[handleClick]": (event)=>{
            onSelectAll({
                limit,
                queryOptions
            });
            if (onClick) onClick(event);
        }
    }["SelectAllButton.SelectAllButton.useCallback[handleClick]"], [
        onClick,
        onSelectAll,
        queryOptions,
        limit
    ]);
    const areAllDataSelected = data && data.every((item)=>selectedIds.includes(item.id));
    if (total === selectedIds.length || selectedIds.length >= limit || !areAllDataSelected) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StyledButton, {
        ref: ref,
        label: label,
        onClick: handleClick,
        type: "button",
        ...rest
    });
});
const PREFIX = 'RaSelectAllButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(()=>({})); //# sourceMappingURL=SelectAllButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/BulkActionsToolbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkActionsToolbar",
    ()=>BulkActionsToolbar,
    "BulkActionsToolbarClasses",
    ()=>BulkActionsToolbarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/system/esm/colorManipulator/colorManipulator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Close.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TopToolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SelectAllButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SelectAllButton.js [app-client] (ecmascript)");
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
const defaultSelectAllButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SelectAllButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectAllButton"], null);
const BulkActionsToolbar = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { label = 'ra.action.bulk_actions', children, className, selectAllButton, ...rest } = props;
    const { selectedIds = [], onUnselectItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const handleUnselectAllClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BulkActionsToolbar.useCallback[handleUnselectAllClick]": ()=>{
            onUnselectItems();
        }
    }["BulkActionsToolbar.useCallback[handleUnselectAllClick]"], [
        onUnselectItems
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        "data-test": "bulk-actions-toolbar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(BulkActionsToolbarClasses.toolbar, {
            [BulkActionsToolbarClasses.collapsed]: selectedIds.length === 0
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeListRestProps"])(rest)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: BulkActionsToolbarClasses.title
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: BulkActionsToolbarClasses.icon,
        "aria-label": translate('ra.action.unselect'),
        title: translate('ra.action.unselect'),
        onClick: handleUnselectAllClick,
        color: "primary",
        size: "small"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        sx: {
            color: (theme)=>(theme.vars || theme).palette.text.primary
        },
        variant: "body1"
    }, translate(label, {
        _: label,
        smart_count: selectedIds.length
    })), selectAllButton !== false ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(selectAllButton) ? selectAllButton : defaultSelectAllButton : null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: BulkActionsToolbarClasses.topToolbar
    }, children)));
};
const PREFIX = 'RaBulkActionsToolbar';
const BulkActionsToolbarClasses = {
    toolbar: `${PREFIX}-toolbar`,
    topToolbar: `${PREFIX}-topToolbar`,
    buttons: `${PREFIX}-buttons`,
    collapsed: `${PREFIX}-collapsed`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        position: 'relative',
        [`& .${BulkActionsToolbarClasses.toolbar}`]: {
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 3,
            color: (theme.vars || theme).palette.primary.contrastText,
            justifyContent: 'space-between',
            backgroundColor: theme.vars ? theme.vars.palette.bulkActionsToolbarBackgroundColor : theme.palette.mode === 'light' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lighten"])(theme.palette.primary.light, 0.8) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$system$2f$esm$2f$colorManipulator$2f$colorManipulator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["darken"])(theme.palette.primary.dark, 0.5),
            minHeight: theme.spacing(6),
            height: theme.spacing(6),
            paddingRight: theme.spacing(2),
            transform: `translateY(${theme.spacing(-6)})`,
            transition: `${theme.transitions.create('height')}, ${theme.transitions.create('min-height')}, ${theme.transitions.create('transform')}`,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius
        },
        [`& .${BulkActionsToolbarClasses.topToolbar}`]: {
            padding: theme.spacing(0.5),
            minHeight: 'auto',
            [theme.breakpoints.down('sm')]: {
                backgroundColor: 'transparent'
            }
        },
        [`& .${BulkActionsToolbarClasses.buttons}`]: {},
        [`& .${BulkActionsToolbarClasses.collapsed}`]: {
            minHeight: 0,
            height: 0,
            transform: `translateY(0)`,
            overflowY: 'hidden'
        },
        [`& .${BulkActionsToolbarClasses.title}`]: {
            display: 'flex',
            flex: '0 0 auto',
            alignItems: 'center',
            gap: theme.spacing(1)
        },
        [`& .${BulkActionsToolbarClasses.icon}`]: {
            marginLeft: '-0.5em'
        }
    })); //# sourceMappingURL=BulkActionsToolbar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Confirm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Confirm",
    ()=>Confirm,
    "ConfirmClasses",
    ()=>ConfirmClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js [app-client] (ecmascript) <export default as DialogContentText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/CheckCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ErrorOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/ErrorOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const Confirm = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, isOpen = false, loading, title, content, cancel = 'ra.action.cancel', confirm = 'ra.action.confirm', confirmColor = 'primary', ConfirmIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], CancelIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ErrorOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], onClose, onConfirm, translateOptions = {}, titleTranslateOptions = translateOptions, contentTranslateOptions = translateOptions, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const handleConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Confirm.useCallback[handleConfirm]": (e)=>{
            e.stopPropagation();
            onConfirm(e);
        }
    }["Confirm.useCallback[handleConfirm]"], [
        onConfirm
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Confirm.useCallback[handleClick]": (e)=>{
            e.stopPropagation();
        }
    }["Confirm.useCallback[handleClick]"], []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledDialog, {
        className: className,
        open: isOpen,
        onClose: onClose,
        onClick: handleClick,
        "aria-labelledby": "alert-dialog-title",
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
        id: "alert-dialog-title"
    }, typeof title === 'string' ? translate(title, {
        _: title,
        ...titleTranslateOptions
    }) : title), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], null, typeof content === 'string' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__["DialogContentText"], null, translate(content, {
        _: content,
        ...contentTranslateOptions
    })) : content), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        disabled: loading,
        onClick: onClose,
        startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](CancelIcon, null)
    }, translate(cancel, {
        _: cancel
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        disabled: loading,
        onClick: handleConfirm,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-confirm', {
            [ConfirmClasses.confirmWarning]: confirmColor === 'warning',
            [ConfirmClasses.confirmPrimary]: confirmColor === 'primary'
        }),
        autoFocus: true,
        startIcon: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ConfirmIcon, null)
    }, translate(confirm, {
        _: confirm
    }))));
};
const PREFIX = 'RaConfirm';
const ConfirmClasses = {
    confirmPrimary: `${PREFIX}-confirmPrimary`,
    confirmWarning: `${PREFIX}-confirmWarning`
};
const StyledDialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${ConfirmClasses.confirmPrimary}`]: {
            color: (theme.vars || theme).palette.primary.main
        },
        [`& .${ConfirmClasses.confirmWarning}`]: {
            color: (theme.vars || theme).palette.error.main,
            '&:hover': {
                backgroundColor: `color-mix(in srgb, ${(theme.vars || theme).palette.error.main}, transparent 88%)`,
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent'
                }
            }
        }
    })); //# sourceMappingURL=Confirm.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteWithConfirmButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkDeleteWithConfirmButton",
    ()=>BulkDeleteWithConfirmButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useBulkDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/button/useBulkDeleteController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Confirm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/inflection/lib/inflection.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const BulkDeleteWithConfirmButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function BulkDeleteWithConfirmButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { confirmTitle = 'ra.message.bulk_delete_title', confirmContent = 'ra.message.bulk_delete_content', confirmColor = 'primary', icon = defaultIcon, label = 'ra.action.delete', mutationMode = 'pessimistic', mutationOptions, onClick, ...rest } = props;
    const { selectedIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const { handleDelete, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useBulkDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBulkDeleteController"])({
        mutationMode,
        ...rest,
        mutationOptions: {
            ...mutationOptions,
            onSettled (...args) {
                // In pessimistic mode, we wait for the mutation to be completed (either successfully or with an error) before closing
                if (mutationMode === 'pessimistic') {
                    setOpen(false);
                }
                mutationOptions?.onSettled?.(...args);
            }
        }
    });
    const [isOpen, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const handleClick = (e)=>{
        e.stopPropagation();
        setOpen(true);
    };
    const handleDialogClose = (e)=>{
        e.stopPropagation();
        setOpen(false);
    };
    const handleConfirm = (e)=>{
        e.stopPropagation();
        // We close the dialog immediately here for optimistic/undoable modes instead of in onSuccess/onError
        // to avoid reimplementing the default side effects
        if (mutationMode !== 'pessimistic') {
            setOpen(false);
        }
        handleDelete();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        ref: ref,
        onClick: handleClick,
        label: label,
        color: "error",
        ...sanitizeRestProps(rest)
    }, icon), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confirm"], {
        isOpen: isOpen,
        loading: isPending,
        title: confirmTitle,
        content: confirmContent,
        confirmColor: confirmColor,
        titleTranslateOptions: {
            smart_count: selectedIds.length,
            name: translate(`resources.${resource}.forcedCaseName`, {
                smart_count: selectedIds.length,
                _: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanize"])(translate(`resources.${resource}.name`, {
                    smart_count: selectedIds.length,
                    _: resource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inflect"])(resource, selectedIds.length) : undefined
                }), true)
            })
        },
        contentTranslateOptions: {
            smart_count: selectedIds.length,
            name: translate(`resources.${resource}.forcedCaseName`, {
                smart_count: selectedIds.length,
                _: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanize"])(translate(`resources.${resource}.name`, {
                    smart_count: selectedIds.length,
                    _: resource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inflect"])(resource, selectedIds.length) : undefined
                }), true)
            })
        },
        onConfirm: handleConfirm,
        onClose: handleDialogClose
    }));
});
const sanitizeRestProps = ({ classes, label, resource, successMessage, mutationOptions, ...rest })=>rest;
const PREFIX = 'RaBulkDeleteWithConfirmButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(()=>({}));
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null); //# sourceMappingURL=BulkDeleteWithConfirmButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteWithUndoButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkDeleteWithUndoButton",
    ()=>BulkDeleteWithUndoButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useBulkDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/button/useBulkDeleteController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
const BulkDeleteWithUndoButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function BulkDeleteWithUndoButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { label = 'ra.action.delete', icon = defaultIcon, onClick, ...rest } = props;
    const { handleDelete, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useBulkDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBulkDeleteController"])(rest);
    const handleClick = (e)=>{
        handleDelete();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        ref: ref,
        onClick: handleClick,
        label: label,
        disabled: isPending,
        color: "error",
        ...sanitizeRestProps(rest)
    }, icon);
});
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const sanitizeRestProps = ({ classes, label, resource, successMessage, ...rest })=>rest;
const PREFIX = 'RaBulkDeleteWithUndoButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(()=>({})); //# sourceMappingURL=BulkDeleteWithUndoButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulkDeleteButton",
    ()=>BulkDeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteWithConfirmButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteWithConfirmButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteWithUndoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteWithUndoButton.js [app-client] (ecmascript)");
;
;
;
;
;
const BulkDeleteButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function BulkDeleteButton(inProps, ref) {
    const { mutationMode = 'undoable', ...props } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        name: PREFIX,
        props: inProps
    });
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<BulkDeleteButton> components should be used inside a <Resource> component or provided with a resource prop.');
    }
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'delete',
        resource
    });
    if (!canAccess || isPending) {
        return null;
    }
    return mutationMode === 'undoable' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteWithUndoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkDeleteWithUndoButton"], {
        ref: ref,
        ...props
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteWithConfirmButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkDeleteWithConfirmButton"], {
        ref: ref,
        mutationMode: mutationMode,
        ...props
    });
});
const PREFIX = 'RaBulkDeleteButton'; //# sourceMappingURL=BulkDeleteButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListNoResults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListNoResults",
    ()=>ListNoResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContextWithProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
const ListNoResults = (props)=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { filterValues, setFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContextWithProps"])(props);
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    if (!resource) {
        throw new Error('<ListNoResults> must be used inside a <List> component');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body2"
    }, filterValues && setFilters && Object.keys(filterValues).length > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, translate('ra.navigation.no_filtered_results', {
        resource,
        name: getResourceLabel(resource, 0),
        _: 'No results found with the current filters.'
    }), ' ', __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: ()=>setFilters({}, []),
        label: translate('ra.navigation.clear_filters', {
            _: 'Clear filters'
        })
    })) : translate('ra.navigation.no_results', {
        resource,
        name: getResourceLabel(resource, 0),
        _: 'No results found.'
    })));
}; //# sourceMappingURL=ListNoResults.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/Datagrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Datagrid",
    ()=>Datagrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContextWithProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$OptionalResourceContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/OptionalResourceContextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Table/Table.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$union$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/union.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/difference.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridLoading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridBody.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/DatagridContextProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/datagrid/useDatagridStyles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$BulkActionsToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/BulkActionsToolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/BulkDeleteButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListNoResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListNoResults.js [app-client] (ecmascript)");
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
;
;
const defaultBulkActionButtons = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$BulkDeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkDeleteButton"], null);
const Datagrid = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((inProps, ref)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridPrefix"],
        props: inProps
    });
    const resourceFromContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { canAccess: canDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        resource: resourceFromContext,
        action: 'delete'
    });
    const { optimized = false, body = optimized ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PureDatagridBody"] : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridBody$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], header = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridHeader"], children, className, empty, expand, bulkActionsToolbar, bulkActionButtons = canDelete ? defaultBulkActionButtons : false, hover, isRowSelectable, isRowExpandable, resource, rowClick, rowSx, rowStyle, size = 'small', sx, expandSingle = false, ...rest } = props;
    const { sort, data, isPending, onSelect, onToggleItem, selectedIds, setSort, total } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContextWithProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContextWithProps"])(props);
    const hasBulkActions = !!bulkActionButtons !== false;
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Datagrid.useMemo[contextValue]": ()=>({
                isRowExpandable,
                expandSingle
            })
    }["Datagrid.useMemo[contextValue]"], [
        isRowExpandable,
        expandSingle
    ]);
    const lastSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Datagrid.useEffect": ()=>{
            if (!selectedIds || selectedIds.length === 0) {
                lastSelected.current = null;
            }
        }
    }["Datagrid.useEffect"], [
        JSON.stringify(selectedIds)
    ]); // eslint-disable-line react-hooks/exhaustive-deps
    // we manage row selection at the datagrid level to allow shift+click to select an array of rows
    const handleToggleItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Datagrid.useCallback[handleToggleItem]": (id, event)=>{
            if (!data) return;
            const ids = data.map({
                "Datagrid.useCallback[handleToggleItem].ids": (record)=>record.id
            }["Datagrid.useCallback[handleToggleItem].ids"]);
            const lastSelectedIndex = ids.indexOf(lastSelected.current);
            lastSelected.current = event.target.checked ? id : null;
            if (event.shiftKey && lastSelectedIndex !== -1) {
                const index = ids.indexOf(id);
                const idsBetweenSelections = ids.slice(Math.min(lastSelectedIndex, index), Math.max(lastSelectedIndex, index) + 1);
                const newSelectedIds = event.target.checked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$union$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selectedIds, idsBetweenSelections) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selectedIds, idsBetweenSelections);
                onSelect?.(isRowSelectable ? newSelectedIds.filter({
                    "Datagrid.useCallback[handleToggleItem]": (id)=>isRowSelectable(data.find({
                            "Datagrid.useCallback[handleToggleItem]": (record)=>record.id === id
                        }["Datagrid.useCallback[handleToggleItem]"]))
                }["Datagrid.useCallback[handleToggleItem]"]) : newSelectedIds);
            } else {
                onToggleItem?.(id);
            }
        }
    }["Datagrid.useCallback[handleToggleItem]"], [
        data,
        isRowSelectable,
        onSelect,
        onToggleItem,
        selectedIds
    ]);
    if (isPending === true) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridLoading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: className,
            expand: expand,
            hasBulkActions: hasBulkActions,
            nbChildren: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children),
            size: size
        });
    }
    /**
     * Once loaded, the data for the list may be empty. Instead of
     * displaying the table header with zero data rows,
     * the Datagrid displays the empty component.
     */ if (data == null || data.length === 0 || total === 0) {
        return empty === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListNoResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListNoResults"], {
            resource: resource
        }) : empty;
    }
    /**
     * After the initial load, if the data for the list isn't empty,
     * and even if the data is refreshing (e.g. after a filter change),
     * the datagrid displays the current data.
     */ return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$DatagridContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        value: contextValue
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$OptionalResourceContextProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionalResourceContextProvider"], {
        value: resource
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridRoot"], {
        sx: sx,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].root, className)
    }, bulkActionsToolbar ?? (bulkActionButtons !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$BulkActionsToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkActionsToolbar"], null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(bulkActionButtons) ? bulkActionButtons : defaultBulkActionButtons) : null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].tableWrapper
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Table$2f$Table$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$datagrid$2f$useDatagridStyles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DatagridClasses"].table,
        size: size,
        ...sanitizeRestProps(rest)
    }, createOrCloneElement(header, {
        children,
        sort,
        data,
        hasExpand: !!expand,
        hasBulkActions,
        isRowSelectable,
        onSelect,
        selectedIds,
        setSort
    }, children), createOrCloneElement(body, {
        expand,
        rowClick,
        data,
        hasBulkActions,
        hover,
        onToggleItem: handleToggleItem,
        resource,
        rowSx,
        rowStyle,
        selectedIds,
        isRowSelectable
    }, children))))));
});
const createOrCloneElement = (element, props, children)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(element) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(element, props, children) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(element, props, children);
const injectedProps = [
    'isRequired',
    'setFilter',
    'setPagination',
    'limitChoicesToValue',
    'translateChoice',
    // Datagrid may be used as an alternative to SelectInput
    'field',
    'fieldState',
    'formState'
];
const sanitizeRestProps = (props)=>Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeListRestProps"])(props)).filter((propName)=>!injectedProps.includes(propName) || propName === 'ref').reduce((acc, key)=>({
            ...acc,
            [key]: props[key]
        }), {});
Datagrid.displayName = 'Datagrid'; //# sourceMappingURL=Datagrid.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteWithUndoButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteWithUndoButton",
    ()=>DeleteWithUndoButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/button/useDeleteController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/inflection/lib/inflection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
;
;
;
;
;
;
;
const DeleteWithUndoButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DeleteWithUndoButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { label: labelProp, className, icon = defaultIcon, onClick, redirect = 'list', mutationOptions, color = 'error', successMessage, ...rest } = props;
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<DeleteWithUndoButton> components should be used inside a <Resource> component or provided with a resource prop. (The <Resource> component set the resource prop for all its children).');
    }
    const { isPending, handleDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteController"])({
        record,
        resource,
        redirect,
        mutationMode: 'undoable',
        mutationOptions,
        successMessage
    });
    const handleClick = (event)=>{
        event.stopPropagation();
        handleDelete();
        if (onClick) {
            onClick(event);
        }
    };
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])(resource);
    let recordRepresentation = getRecordRepresentation(record);
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 1,
        _: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanize"])(translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: resource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singularize"])(resource) : undefined
        }), true)
    });
    // We don't support React elements for this
    if (__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](recordRepresentation)) {
        recordRepresentation = `#${record?.id}`;
    }
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.action.delete`,
        baseI18nKey: 'ra.action.delete',
        options: {
            name: resourceName,
            recordRepresentation
        },
        userText: labelProp
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        ref: ref,
        onClick: handleClick,
        disabled: isPending,
        // avoid double translation
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, label),
        "aria-label": typeof label === 'string' ? label : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-delete-button', className),
        key: "button",
        color: color,
        ...rest
    }, icon);
});
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaDeleteWithUndoButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=DeleteWithUndoButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteWithConfirmButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteWithConfirmButton",
    ()=>DeleteWithConfirmButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Delete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/button/useDeleteController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useUnselect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useUnselect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRedirect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useRedirect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/inflection/lib/inflection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Confirm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const DeleteWithConfirmButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function DeleteWithConfirmButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, confirmTitle: confirmTitleProp, confirmContent: confirmContentProp, confirmColor = 'primary', icon = defaultIcon, label: labelProp, mutationMode = 'pessimistic', onClick, redirect: redirectTo = 'list', translateOptions = {}, titleTranslateOptions = translateOptions, contentTranslateOptions = translateOptions, mutationOptions, color = 'error', successMessage, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotify"])();
    const unselect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useUnselect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUnselect"])(resource);
    const redirect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useRedirect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRedirect"])();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    if (!resource) {
        throw new Error('<DeleteWithConfirmButton> components should be used inside a <Resource> component or provided with a resource prop. (The <Resource> component set the resource prop for all its children).');
    }
    const { onSuccess, onError, ...otherMutationOptions } = mutationOptions || {};
    const { isPending, handleDelete } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$button$2f$useDeleteController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteController"])({
        record,
        redirect: redirectTo,
        mutationMode,
        mutationOptions: {
            ...otherMutationOptions,
            onSuccess: {
                "DeleteWithConfirmButton.DeleteWithConfirmButton.useDeleteController": (...args)=>{
                    setOpen(false);
                    if (onSuccess) {
                        onSuccess(...args);
                    } else {
                        notify(successMessage ?? `resources.${resource}.notifications.deleted`, {
                            type: 'info',
                            messageArgs: {
                                smart_count: 1,
                                _: translate('ra.notification.deleted', {
                                    smart_count: 1
                                })
                            },
                            undoable: mutationMode === 'undoable'
                        });
                        record && unselect([
                            record.id
                        ]);
                        redirect(redirectTo, resource);
                    }
                }
            }["DeleteWithConfirmButton.DeleteWithConfirmButton.useDeleteController"],
            onError: {
                "DeleteWithConfirmButton.DeleteWithConfirmButton.useDeleteController": (...args)=>{
                    setOpen(false);
                    if (onError) {
                        onError(...args);
                    } else {
                        const [error] = args;
                        notify(typeof error === 'string' ? error : error?.message || 'ra.notification.http_error', {
                            type: 'error',
                            messageArgs: {
                                _: typeof error === 'string' ? error : error?.message ? error.message : undefined
                            }
                        });
                    }
                }
            }["DeleteWithConfirmButton.DeleteWithConfirmButton.useDeleteController"]
        },
        resource,
        successMessage
    });
    const handleDialogOpen = (event)=>{
        event.stopPropagation();
        setOpen(true);
    };
    const handleDialogClose = ()=>{
        setOpen(false);
    };
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])(resource);
    let recordRepresentation = getRecordRepresentation(record);
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 1,
        _: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanize"])(translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: resource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$inflection$2f$lib$2f$inflection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["singularize"])(resource) : undefined
        }), true)
    });
    // We don't support React elements for this
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(recordRepresentation)) {
        recordRepresentation = `#${record?.id}`;
    }
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.action.delete`,
        baseI18nKey: 'ra.action.delete',
        options: {
            name: resourceName,
            recordRepresentation
        },
        userText: labelProp
    });
    const confirmTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.message.delete_title`,
        baseI18nKey: 'ra.message.delete_title',
        options: {
            recordRepresentation,
            name: resourceName,
            id: record?.id,
            ...titleTranslateOptions
        },
        userText: confirmTitleProp
    });
    const confirmContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.message.delete_content`,
        baseI18nKey: 'ra.message.delete_content',
        options: {
            recordRepresentation,
            name: resourceName,
            id: record?.id,
            ...contentTranslateOptions
        },
        userText: confirmContentProp
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(StyledButton, {
        ref: ref,
        onClick: handleDialogOpen,
        // avoid double translation
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, label),
        "aria-label": typeof label === 'string' ? label : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-delete-button', className),
        key: "button",
        color: color,
        ...rest
    }, icon), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Confirm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Confirm"], {
        isOpen: open,
        loading: isPending,
        title: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, confirmTitle),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, confirmContent),
        confirmColor: confirmColor,
        onConfirm: handleDelete,
        onClose: handleDialogClose
    }));
});
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Delete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaDeleteWithConfirmButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=DeleteWithConfirmButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteButton",
    ()=>DeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/useSaveContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteWithUndoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteWithUndoButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteWithConfirmButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteWithConfirmButton.js [app-client] (ecmascript)");
;
;
;
;
;
const DeleteButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function DeleteButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        name: PREFIX,
        props: inProps
    });
    const { mutationMode, ...rest } = props;
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<DeleteButton> components should be used inside a <Resource> component or provided the resource prop.');
    }
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'delete',
        resource,
        record
    });
    const saveContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveContext"])(props);
    if (!record || record.id == null || !canAccess || isPending) {
        return null;
    }
    const finalMutationMode = mutationMode ? mutationMode : saveContext?.mutationMode ? saveContext.mutationMode : 'undoable';
    return finalMutationMode === 'undoable' ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteWithUndoButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteWithUndoButton"], {
        ref: ref,
        record: record,
        ...rest
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteWithConfirmButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteWithConfirmButton"], {
        // @ts-ignore I looked for the error for one hour without finding it
        mutationMode: finalMutationMode,
        ref: ref,
        record: record,
        ...rest
    });
});
const PREFIX = 'RaDeleteButton'; //# sourceMappingURL=DeleteButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ShowButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRedEye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/RemoveRedEye.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
/**
 * Opens the Show view of a given record
 *
 * @example // basic usage
 * import { ShowButton, useRecordContext } from 'react-admin';
 *
 * const CommentShowButton = () => {
 *     const record = useRecordContext();
 *     return (
 *         <ShowButton label="Show comment" record={record} />
 *     );
 * };
 */ const ShowButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function ShowButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { icon = defaultIcon, label: labelProp, record: recordProp, resource: resourceProp, scrollToTop = true, ...rest } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<ShowButton> components should be used inside a <Resource> component or provided the resource prop.');
    }
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePath"])();
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'show',
        resource,
        record
    });
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])();
    const recordRepresentationValue = getRecordRepresentation(record);
    const recordRepresentation = typeof recordRepresentationValue === 'string' ? recordRepresentationValue : recordRepresentationValue?.toString();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.action.show`,
        baseI18nKey: 'ra.action.show',
        options: {
            name: getResourceLabel(resource, 1),
            recordRepresentation
        },
        userText: labelProp
    });
    if (!record || !canAccess || isPending) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"],
        ref: ref,
        to: createPath({
            type: 'show',
            resource,
            id: record.id
        }),
        state: scrollStates[String(scrollToTop)],
        // avoid double translation
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, label),
        "aria-label": typeof label === 'string' ? label : undefined,
        onClick: stopPropagation,
        ...rest
    }, icon);
});
// avoids using useMemo to get a constant value for the link state
const scrollStates = {
    true: {
        _scrollToTop: true
    },
    false: {}
};
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveRedEye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = (e)=>e.stopPropagation();
const PureShowButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(ShowButton, (prevProps, nextProps)=>prevProps.resource === nextProps.resource && (prevProps.record && nextProps.record ? prevProps.record.id === nextProps.record.id : prevProps.record == nextProps.record) && // eslint-disable-line eqeqeq
    prevProps.label === nextProps.label && prevProps.disabled === nextProps.disabled);
const __TURBOPACK__default__export__ = PureShowButton;
const PREFIX = 'RaShowButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=ShowButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ShowButton.js [app-client] (ecmascript) <export default as ShowButton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShowButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ShowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ShowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ShowButton.js [app-client] (ecmascript)");
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/EditActions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditActions",
    ()=>EditActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ShowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShowButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ShowButton.js [app-client] (ecmascript) <export default as ShowButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TopToolbar.js [app-client] (ecmascript)");
;
;
;
;
const EditActions = (props)=>{
    const { hasShow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinition"])(props);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...sanitizeRestProps(props)
    }, hasShow && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ShowButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShowButton$3e$__["ShowButton"], null));
};
const sanitizeRestProps = ({ hasCreate, hasEdit, hasShow, hasList, resource, ...rest })=>rest; //# sourceMappingURL=EditActions.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/Offline.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Offline",
    ()=>Offline,
    "OfflineClasses",
    ()=>OfflineClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Alert/Alert.js [app-client] (ecmascript) <export default as Alert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
;
;
;
const Offline = (props)=>{
    const { icon, message: messageProp, variant = 'standard', ...rest } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        baseI18nKey: 'ra.notification.offline',
        resourceI18nKey: resource ? `resources.${resource}.notification.offline` : undefined,
        userText: messageProp,
        options: {
            name: resource ? getResourceLabel(resource, 0) : undefined,
            _: 'No connectivity. Could not fetch data.'
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(OfflineClasses.root, {
            [OfflineClasses.inline]: variant === 'inline'
        }),
        severity: "warning",
        variant: variant === 'inline' ? 'outlined' : variant,
        icon: variant === 'inline' ? false : icon,
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body2"
    }, message));
};
const PREFIX = 'RaOffline';
const OfflineClasses = {
    root: `${PREFIX}-root`,
    inline: `${PREFIX}-inline`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Alert$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Alert$3e$__["Alert"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(()=>({
        [`&.${OfflineClasses.inline}`]: {
            border: 'none',
            display: 'inline-flex',
            padding: 0,
            margin: 0
        }
    })); //# sourceMappingURL=Offline.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/EditView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditClasses",
    ()=>EditClasses,
    "EditView",
    ()=>EditView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$edit$2f$useEditContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/edit/useEditContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$EditActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/EditActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/Offline.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const defaultActions = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$EditActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditActions"], null);
const defaultOffline = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Offline"], null);
const EditView = (props)=>{
    const { actions, aside, children, render, className, component: Content = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], emptyWhileLoading = false, offline = defaultOffline, error, title, ...rest } = props;
    const { hasShow } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinition"])();
    const editContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$edit$2f$useEditContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditContext"])();
    const { resource, defaultTitle, record, isPaused, isPending, error: errorState } = editContext;
    const finalActions = typeof actions === 'undefined' && hasShow ? defaultActions : actions;
    const showOffline = isPaused && isPending && offline !== undefined && offline !== false;
    const showError = errorState && error !== false && error !== undefined;
    if (!record && isPending && emptyWhileLoading && !showOffline && !showError) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('edit-page', className),
        ...rest
    }, title !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        title: title,
        defaultTitle: defaultTitle,
        preferenceKey: `${resource}.edit.title`
    }), finalActions, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(EditClasses.main, {
            [EditClasses.noActions]: !finalActions
        })
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Content, {
        className: EditClasses.card
    }, showOffline ? offline : showError ? error : render ? render(editContext) : record ? children : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], null, "\u00A0")), aside));
};
const PREFIX = 'RaEdit';
const EditClasses = {
    main: `${PREFIX}-main`,
    noActions: `${PREFIX}-noActions`,
    card: `${PREFIX}-card`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    [`& .${EditClasses.main}`]: {
        display: 'flex',
        alignItems: 'flex-start'
    },
    [`& .${EditClasses.noActions}`]: {
        marginTop: '1em'
    },
    [`& .${EditClasses.card}`]: {
        flex: '1 1 auto'
    }
}); //# sourceMappingURL=EditView.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/Edit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Edit",
    ()=>Edit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$edit$2f$EditBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/edit/EditBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$EditView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/detail/EditView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
;
;
;
;
;
const Edit = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { resource, id, mutationMode, mutationOptions, queryOptions, redirect, transform, disableAuthentication, authLoading = defaultAuthLoading, loading, error, ...rest } = props;
    if (!props.render && !props.children) {
        throw new Error('<Edit> requires either a `render` prop or `children` prop');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$edit$2f$EditBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditBase"], {
        resource: resource,
        id: id,
        mutationMode: mutationMode,
        mutationOptions: mutationOptions,
        queryOptions: queryOptions,
        redirect: redirect,
        transform: transform,
        disableAuthentication: disableAuthentication,
        authLoading: authLoading,
        loading: loading,
        // Disable redirect on error as it is handled by EditView to display the error in the EditView container
        redirectOnError: error ? false : undefined,
        // Disable offline support from EditBase as it is handled by EditView to keep the EditView container
        offline: false
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$detail$2f$EditView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditView"], {
        error: error,
        ...rest
    }));
};
const defaultAuthLoading = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null);
const PREFIX = 'RaEdit'; // Types declared in EditView.
 //# sourceMappingURL=Edit.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/EditButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditButton",
    ()=>EditButton,
    "EditButtonClasses",
    ()=>EditButtonClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Create.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/record/useRecordContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
const EditButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function EditButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { icon = defaultIcon, label: labelProp, scrollToTop = true, className, ...rest } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<EditButton> components should be used inside a <Resource> component or provided with a resource prop. (The <Resource> component set the resource prop for all its children).');
    }
    const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$record$2f$useRecordContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordContext"])(props);
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePath"])();
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'edit',
        resource,
        record
    });
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])();
    const recordRepresentationValue = getRecordRepresentation(record);
    const recordRepresentation = typeof recordRepresentationValue === 'string' ? recordRepresentationValue : recordRepresentationValue?.toString();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.action.edit`,
        baseI18nKey: 'ra.action.edit',
        options: {
            name: getResourceLabel(resource, 1),
            recordRepresentation
        },
        userText: labelProp
    });
    if (!record || !canAccess || isPending) return null;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"],
        ref: ref,
        to: createPath({
            type: 'edit',
            resource,
            id: record.id
        }),
        state: scrollStates[String(scrollToTop)],
        // avoid double translation
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, label),
        "aria-label": typeof label === 'string' ? label : undefined,
        onClick: stopPropagation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(EditButtonClasses.root, className),
        ...rest
    }, icon);
});
// avoids using useMemo to get a constant value for the link state
const scrollStates = {
    true: {
        _scrollToTop: true
    },
    false: {}
};
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Create$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = (e)=>e.stopPropagation();
const PREFIX = 'RaEditButton';
const EditButtonClasses = {
    root: `${PREFIX}-root`
};
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (_props, styles)=>styles.root
})({}); //# sourceMappingURL=EditButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/NumberInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberInput",
    ()=>NumberInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const NumberInput = (props)=>{
    const { className, defaultValue = null, format = convertNumberToString, helperText, label, margin, onChange, onBlur, onFocus, parse, resource, source, step = 'any', min, max, validate, variant, inputProps: overrideInputProps, disabled, readOnly, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: props,
        name: PREFIX
    });
    const { field, fieldState: { error, invalid }, id, isRequired } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        defaultValue,
        onBlur,
        resource,
        source,
        validate,
        disabled,
        readOnly,
        ...rest
    });
    const { onBlur: onBlurFromField } = field;
    const inputProps = {
        ...overrideInputProps,
        step,
        min,
        max
    };
    // This is a controlled input that renders directly the string typed by the user.
    // This string is converted to a number on change, and stored in the form state,
    // but that number is not not displayed.
    // This is to allow transitory values like '1.0' that will lead to '1.02'
    // text typed by the user and displayed in the input, unparsed
    const [value, setValue] = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](format(field.value));
    const hasFocus = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
    // update the input text when the record changes
    __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "NumberInput.useEffect": ()=>{
            if (!hasFocus.current) {
                const stringValue = format(field.value);
                setValue({
                    "NumberInput.useEffect": (value)=>value !== stringValue ? stringValue : value
                }["NumberInput.useEffect"]);
            }
        }
    }["NumberInput.useEffect"], [
        field.value,
        format
    ]);
    // update the input text when the user types in the input
    const handleChange = (event)=>{
        if (onChange) {
            onChange(event);
        }
        if (typeof event.target === 'undefined' || typeof event.target.value === 'undefined') {
            return;
        }
        const target = event.target;
        setValue(target.value);
        const newValue = target.valueAsNumber !== undefined && target.valueAsNumber !== null && !isNaN(target.valueAsNumber) ? parse ? parse(target.valueAsNumber) : target.valueAsNumber : parse ? parse(target.value) : convertStringToNumber(target.value);
        field.onChange(newValue);
    };
    const handleFocus = (event)=>{
        if (onFocus) {
            onFocus(event);
        }
        hasFocus.current = true;
    };
    const handleBlur = (event)=>{
        if (onBlurFromField) {
            onBlurFromField(event);
        }
        hasFocus.current = false;
        const stringValue = format(field.value);
        setValue((value)=>value !== stringValue ? stringValue : value);
    };
    const renderHelperText = helperText !== false || invalid;
    const { ref, ...fieldWithoutRef } = field;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTextField, {
        id: id,
        ...fieldWithoutRef,
        inputRef: ref,
        // use the locally controlled state instead of the react-hook-form field state
        value: value,
        onChange: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-input', `ra-input-${source}`, className),
        type: "number",
        size: "small",
        variant: variant,
        error: invalid,
        disabled: disabled || readOnly,
        readOnly: readOnly,
        helperText: renderHelperText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
            error: error?.message,
            helperText: helperText
        }) : null,
        label: label !== '' && label !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
            label: label,
            source: source,
            resource: resource,
            isRequired: isRequired
        }) : null,
        margin: margin,
        inputProps: {
            ...inputProps,
            readOnly
        },
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInputRestProps"])(rest)
    });
};
const convertStringToNumber = (value)=>{
    if (value == null || value === '') {
        return null;
    }
    const float = parseFloat(value);
    return isNaN(float) ? 0 : float;
};
const convertNumberToString = (value)=>value == null || isNaN(value) ? '' : value.toString();
const PREFIX = 'RaNumberInput';
const StyledTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=NumberInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/AutocompleteInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutocompleteInput",
    ()=>AutocompleteInput,
    "AutocompleteInputClasses",
    ()=>AutocompleteInputClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/debounce.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Autocomplete/Autocomplete.js [app-client] (ecmascript) <locals> <export default as Autocomplete>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Chip/Chip.js [app-client] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useAutocomplete$2f$useAutocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useAutocomplete/useAutocomplete.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/utils/useForkRef.js [app-client] (ecmascript) <export default as useForkRef>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoicesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/choices/useChoicesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useSuggestions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useSuggestions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-client] (ecmascript) <export default as warning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$useSupportCreateSuggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/useSupportCreateSuggestion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/Offline.js [app-client] (ecmascript)");
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
const defaultFilterOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useAutocomplete$2f$useAutocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFilterOptions"])();
const AutocompleteInput = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { choices: choicesProp, className, clearOnBlur = true, clearText = 'ra.action.clear_input_value', closeText = 'ra.action.close', create, createLabel, createItemLabel = 'ra.action.create_item', createValue, createHintValue, debounce: debounceDelay = 250, defaultValue, emptyText, emptyValue = '', field: fieldOverride, format, helperText, id: idOverride, inputText, isFetching: isFetchingProp, isLoading: isLoadingProp, isPending: isPendingProp, isRequired: isRequiredOverride, label, limitChoicesToValue, loadingText = 'ra.message.loading', matchSuggestion, margin, fieldState: fieldStateOverride, filterToQuery: filterToQueryProp = DefaultFilterToQuery, formState: formStateOverride, multiple = false, noOptionsText, offline = defaultOffline, onBlur, onChange, onCreate, openText = 'ra.action.open', optionText, optionValue, parse, resource: resourceProp, shouldRenderSuggestions, setFilter, size, source: sourceProp, suggestionLimit = Infinity, TextFieldProps, translateChoice, validate, variant, onInputChange, disabled, readOnly, getOptionDisabled: getOptionDisabledProp, ...rest } = props;
    const filterToQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])(filterToQueryProp);
    const { allChoices, isPaused, isPending, isPlaceholderData, error: fetchError, resource, source, setFilters, isFromReference } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoicesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChoicesContext"])({
        choices: choicesProp,
        isFetching: isFetchingProp,
        isLoading: isLoadingProp,
        isPending: isPendingProp,
        resource: resourceProp,
        source: sourceProp
    });
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { id, field, isRequired, fieldState: { error, invalid } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        defaultValue,
        id: idOverride,
        field: fieldOverride,
        fieldState: fieldStateOverride,
        formState: formStateOverride,
        isRequired: isRequiredOverride,
        onBlur,
        onChange,
        parse,
        format,
        resource,
        source,
        validate,
        disabled,
        readOnly,
        ...rest
    });
    const finalChoices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AutocompleteInput.useMemo[finalChoices]": ()=>// eslint-disable-next-line eqeqeq
            emptyText == undefined || isRequired || multiple ? allChoices : [
                {
                    [optionValue || 'id']: emptyValue,
                    [typeof optionText === 'string' ? optionText : 'name']: translate(emptyText, {
                        _: emptyText
                    })
                }
            ].concat(allChoices || [])
    }["AutocompleteInput.useMemo[finalChoices]"], [
        allChoices,
        emptyValue,
        emptyText,
        isRequired,
        multiple,
        optionText,
        optionValue,
        translate
    ]);
    const selectedChoice = useSelectedChoice(field.value, {
        choices: finalChoices,
        // @ts-ignore
        multiple,
        optionValue
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            if (emptyValue == null) {
                throw new Error(`emptyValue being set to null or undefined is not supported. Use parse to turn the empty string into null.`);
            }
        }
    }["AutocompleteInput.useEffect"], [
        emptyValue
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            // eslint-disable-next-line eqeqeq
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(optionText) && emptyText != undefined) {
                throw new Error(`optionText of type React element is not supported when setting emptyText`);
            }
            // eslint-disable-next-line eqeqeq
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(optionText) && inputText == undefined) {
                throw new Error(`
If you provided a React element for the optionText prop, you must also provide the inputText prop (used for the text input)`);
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(optionText) && !isFromReference && // eslint-disable-next-line eqeqeq
            matchSuggestion == undefined) {
                throw new Error(`
If you provided a React element for the optionText prop, you must also provide the matchSuggestion prop (used to match the user input with a choice)`);
            }
        }
    }["AutocompleteInput.useEffect"], [
        optionText,
        inputText,
        matchSuggestion,
        emptyText,
        isFromReference
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(/* eslint-disable eqeqeq */ shouldRenderSuggestions != undefined && noOptionsText == undefined, `When providing a shouldRenderSuggestions function, we recommend you also provide the noOptionsText prop and set it to a text explaining users why no options are displayed. It supports translation keys.`);
        /* eslint-enable eqeqeq */ }
    }["AutocompleteInput.useEffect"], [
        shouldRenderSuggestions,
        noOptionsText
    ]);
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])(resource);
    const { getChoiceText, getChoiceValue, getSuggestions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useSuggestions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSuggestions"])({
        choices: finalChoices,
        limitChoicesToValue,
        matchSuggestion,
        optionText: optionText ?? (isFromReference ? getRecordRepresentation : undefined),
        optionValue,
        createValue,
        createHintValue,
        selectedItem: selectedChoice,
        suggestionLimit,
        translateChoice: translateChoice ?? !isFromReference
    });
    const [filterValue, setFilterValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])({
        "AutocompleteInput.useEvent[handleChange]": (newValue)=>{
            if (multiple) {
                if (Array.isArray(newValue)) {
                    field.onChange(newValue.map(getChoiceValue), newValue);
                } else {
                    field.onChange([
                        ...field.value ?? [],
                        getChoiceValue(newValue)
                    ], newValue);
                }
            } else {
                field.onChange(getChoiceValue(newValue) ?? emptyValue, newValue);
            }
        }
    }["AutocompleteInput.useEvent[handleChange]"]);
    // eslint-disable-next-line
    const debouncedSetFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$debounce$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "AutocompleteInput.useCallback[debouncedSetFilter]": (filter)=>{
            if (setFilter) {
                return setFilter(filter);
            }
            if (choicesProp) {
                return;
            }
            setFilters(filterToQuery(filter));
        }
    }["AutocompleteInput.useCallback[debouncedSetFilter]"], debounceDelay), [
        debounceDelay,
        setFilters,
        setFilter
    ]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    const currentValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(field.value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(currentValue.current, field.value)) {
                currentValue.current = field.value;
                debouncedSetFilter('');
            }
        }
    }["AutocompleteInput.useEffect"], [
        field.value
    ]); // eslint-disable-line
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, createId, getOptionDisabled: getOptionDisabledWithCreateSupport } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$useSupportCreateSuggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSupportCreateSuggestion"])({
        create,
        createLabel,
        createItemLabel,
        createValue,
        createHintValue,
        handleChange,
        filter: filterValue,
        onCreate,
        optionText
    });
    const getOptionDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[getOptionDisabled]": (option)=>{
            return getOptionDisabledWithCreateSupport(option) || getOptionDisabledProp && getOptionDisabledProp(option);
        }
    }["AutocompleteInput.useCallback[getOptionDisabled]"], [
        getOptionDisabledProp,
        getOptionDisabledWithCreateSupport
    ]);
    const getOptionLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[getOptionLabel]": (option, isListItem = false)=>{
            // eslint-disable-next-line eqeqeq
            if (option == undefined) {
                return '';
            }
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
                return option;
            }
            if (option?.id === createId) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option, typeof optionText === 'string' ? optionText : 'name');
            }
            if (!isListItem && option[optionValue || 'id'] === emptyValue) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(option, typeof optionText === 'string' ? optionText : 'name');
            }
            if (!isListItem && inputText !== undefined) {
                return inputText(option);
            }
            return getChoiceText(option);
        }
    }["AutocompleteInput.useCallback[getOptionLabel]"], [
        getChoiceText,
        inputText,
        createId,
        optionText,
        optionValue,
        emptyValue
    ]);
    const getOptionLabelString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[getOptionLabelString]": (option, isListItem = false)=>{
            const optionLabel = getOptionLabel(option, isListItem);
            // Can be a ReactNode when it's the create option.
            return typeof optionLabel === 'string' ? optionLabel : '';
        }
    }["AutocompleteInput.useCallback[getOptionLabelString]"], [
        getOptionLabel
    ]);
    const finalOnBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[finalOnBlur]": (event)=>{
            if (clearOnBlur && !multiple) {
                const optionLabel = getOptionLabel(selectedChoice);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(optionLabel, filterValue)) {
                    setFilterValue(optionLabel);
                    debouncedSetFilter('');
                }
            }
            field.onBlur(event);
        }
    }["AutocompleteInput.useCallback[finalOnBlur]"], [
        clearOnBlur,
        field,
        getOptionLabel,
        selectedChoice,
        filterValue,
        debouncedSetFilter,
        multiple
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AutocompleteInput.useEffect": ()=>{
            if (!multiple) {
                const optionLabel = getOptionLabel(selectedChoice);
                if (typeof optionLabel === 'string') {
                    setFilterValue(optionLabel);
                } else {
                    throw new Error('When optionText returns a React element, you must also provide the inputText prop');
                }
            }
        }
    }["AutocompleteInput.useEffect"], [
        getOptionLabel,
        multiple,
        selectedChoice
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEvent"])({
        "AutocompleteInput.useEvent[handleInputChange]": (event, newInputValue, reason)=>{
            if (event?.type === 'change' || !doesQueryMatchSelection(newInputValue)) {
                const createOptionLabel = typeof createItemLabel === 'string' ? translate(createItemLabel, {
                    item: filterValue,
                    _: createItemLabel
                }) : undefined;
                const isCreate = newInputValue === createOptionLabel;
                const valueToSet = isCreate ? filterValue : newInputValue;
                setFilterValue(valueToSet);
                debouncedSetFilter(newInputValue);
            }
            if (reason === 'clear') {
                setFilterValue('');
                debouncedSetFilter('');
            }
            onInputChange?.(event, newInputValue, reason);
        }
    }["AutocompleteInput.useEvent[handleInputChange]"]);
    const doesQueryMatchSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[doesQueryMatchSelection]": (filter)=>{
            let selectedItemTexts;
            if (multiple) {
                selectedItemTexts = selectedChoice.map({
                    "AutocompleteInput.useCallback[doesQueryMatchSelection]": (item)=>getOptionLabel(item)
                }["AutocompleteInput.useCallback[doesQueryMatchSelection]"]);
            } else {
                selectedItemTexts = [
                    getOptionLabel(selectedChoice)
                ];
            }
            return selectedItemTexts.includes(filter);
        }
    }["AutocompleteInput.useCallback[doesQueryMatchSelection]"], [
        getOptionLabel,
        multiple,
        selectedChoice
    ]);
    const doesQueryMatchSuggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[doesQueryMatchSuggestion]": (filter)=>{
            const hasOption = finalChoices ? finalChoices.some({
                "AutocompleteInput.useCallback[doesQueryMatchSuggestion]": (choice)=>getOptionLabel(choice) === filter
            }["AutocompleteInput.useCallback[doesQueryMatchSuggestion]"]) : false;
            return doesQueryMatchSelection(filter) || hasOption;
        }
    }["AutocompleteInput.useCallback[doesQueryMatchSuggestion]"], [
        finalChoices,
        getOptionLabel,
        doesQueryMatchSelection
    ]);
    const filterOptions = (options, params)=>{
        let filteredOptions = isFromReference || // When used inside a reference, AutocompleteInput shouldn't do the filtering as it's done by the reference input
        matchSuggestion || // When using element as optionText (and matchSuggestion), options are filtered by getSuggestions, so they shouldn't be filtered here
        limitChoicesToValue // When limiting choices to values (why? it's legacy!), options are also filtered by getSuggestions, so they shouldn't be filtered here
         ? options : defaultFilterOptions(options, params); // Otherwise, we let Material UI's Autocomplete do the filtering
        // add create option if necessary
        const { inputValue } = params;
        if (onCreate || create) {
            if (inputValue === '' && filterValue === '' && createLabel) {
                // create option with createLabel
                filteredOptions = filteredOptions.concat(getCreateItem(''));
            } else if (inputValue && filterValue && !doesQueryMatchSuggestion(filterValue)) {
                filteredOptions = filteredOptions.concat(// create option with createItemLabel
                getCreateItem(inputValue));
            }
        }
        return filteredOptions;
    };
    const handleAutocompleteChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AutocompleteInput.useCallback[handleAutocompleteChange]": (event, newValue, reason)=>{
            // This prevents auto-submitting a form inside a dialog passed to the `create` prop
            event.preventDefault();
            if (reason === 'createOption') {
                // When users press the enter key after typing a new value, we can handle it as if they clicked on the create option
                handleChangeWithCreateSupport(getCreateItem(Array.isArray(newValue) ? newValue[newValue.length - 1] : newValue));
                return;
            }
            handleChangeWithCreateSupport(newValue != null ? newValue : emptyValue);
        }
    }["AutocompleteInput.useCallback[handleAutocompleteChange]"], [
        emptyValue,
        getCreateItem,
        handleChangeWithCreateSupport
    ]);
    const oneSecondHasPassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])(1000, filterValue);
    const suggestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AutocompleteInput.useMemo[suggestions]": ()=>{
            if (!isFromReference && (matchSuggestion || limitChoicesToValue)) {
                return getSuggestions(filterValue);
            }
            return finalChoices?.slice(0, suggestionLimit) || [];
        }
    }["AutocompleteInput.useMemo[suggestions]"], [
        finalChoices,
        filterValue,
        getSuggestions,
        limitChoicesToValue,
        matchSuggestion,
        suggestionLimit,
        isFromReference
    ]);
    const isOptionEqualToValue = (option, value)=>{
        return String(getChoiceValue(option)) === String(getChoiceValue(value));
    };
    const renderHelperText = !!fetchError || helperText !== false || invalid;
    const handleInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$utils$2f$useForkRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForkRef$3e$__["useForkRef"])(field.ref, TextFieldProps?.inputRef);
    // isPending is true: there's no cached data and no query attempt was finished yet
    // isPaused is true: the query was paused (e.g. due to a network issue)
    // Both true: we're offline, have no data to show
    // If the component that provides the ChoicesContext does not handle this case, we should should render the offline element
    if (isPending && isPaused && offline !== false && offline !== undefined) {
        return offline;
    }
    const finalLoadingText = typeof loadingText === 'string' ? translate(loadingText, {
        _: loadingText
    }) : loadingText;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledAutocomplete, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-input', `ra-input-${source}`, className),
        clearText: translate(clearText, {
            _: clearText
        }),
        closeText: translate(closeText, {
            _: closeText
        }),
        loadingText: isPaused && isPlaceholderData ? offline !== false && offline !== undefined ? offline : finalLoadingText : finalLoadingText,
        openOnFocus: true,
        openText: translate(openText, {
            _: openText
        }),
        id: id,
        isOptionEqualToValue: isOptionEqualToValue,
        filterSelectedOptions: true,
        disabled: disabled || readOnly,
        renderInput: (params)=>{
            const mergedTextFieldProps = {
                readOnly,
                ...params.InputProps,
                ...TextFieldProps?.InputProps
            };
            // @ts-expect-error slotProps do not yet exist in MUI v5
            const mergedSlotProps = TextFieldProps?.slotProps ? {
                slotProps: {
                    // @ts-expect-error slotProps do not yet exist in MUI v5
                    ...TextFieldProps?.slotProps,
                    input: {
                        readOnly,
                        ...params.InputProps,
                        // @ts-expect-error slotProps do not yet exist in MUI v5
                        ...TextFieldProps?.slotProps?.input
                    }
                }
            } : undefined;
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                name: field.name,
                label: label !== '' && label !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
                    label: label,
                    source: source,
                    resource: resourceProp,
                    isRequired: isRequired
                }) : null,
                error: !!fetchError || invalid,
                helperText: renderHelperText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
                    error: error?.message || fetchError?.message,
                    helperText: helperText
                }) : null,
                margin: margin,
                variant: variant,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
                    [AutocompleteInputClasses.textField]: true,
                    [AutocompleteInputClasses.emptyLabel]: label === false || label === ''
                }),
                ...params,
                ...TextFieldProps,
                InputProps: mergedTextFieldProps,
                ...mergedSlotProps,
                size: size,
                inputRef: handleInputRef
            });
        },
        multiple: multiple,
        renderTags: (value, getTagProps)=>value.map((option, index)=>{
                // We have to extract the key because react 19 does not allow to spread the key prop
                const { key, ...tagProps } = getTagProps({
                    index
                });
                // @ts-expect-error slotProps do not yet exist in MUI v5
                const mergedSlotProps = props.slotProps?.chip ? props.slotProps.chip : props.ChipProps;
                return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(optionText) ? inputText ? inputText(option) : '' : getChoiceText(option),
                    size: "small",
                    key: key,
                    ...tagProps,
                    ...mergedSlotProps
                });
            }),
        noOptionsText: typeof noOptionsText === 'string' ? translate(noOptionsText, {
            _: noOptionsText
        }) : noOptionsText,
        selectOnFocus: true,
        clearOnBlur: clearOnBlur,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInputRestProps"])(rest),
        freeSolo: !!create || !!onCreate,
        handleHomeEndKeys: !!create || !!onCreate,
        filterOptions: filterOptions,
        options: isPaused && isPlaceholderData ? [] : shouldRenderSuggestions == undefined || // eslint-disable-line eqeqeq
        shouldRenderSuggestions(filterValue) ? suggestions : [],
        getOptionKey: (option)=>option?.id,
        getOptionLabel: getOptionLabelString,
        inputValue: filterValue,
        loading: isPending && (!finalChoices || finalChoices.length === 0) && oneSecondHasPassed || isPaused && isPlaceholderData,
        value: selectedChoice,
        onChange: handleAutocompleteChange,
        onBlur: finalOnBlur,
        onInputChange: handleInputChange,
        renderOption: (props, record)=>{
            // We have to extract the key because react 19 does not allow to spread the key prop
            const { key: ignoredKey, ...rest } = props;
            // We don't use MUI key which is generated from the option label because we may have options with the same label but with different values
            const key = getChoiceValue(record);
            const optionLabel = getOptionLabel(record, true);
            return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("li", {
                key: key,
                ...rest
            }, optionLabel === '' ? ' ' : optionLabel);
        },
        getOptionDisabled: getOptionDisabled
    }), createElement);
};
const PREFIX = 'RaAutocompleteInput';
const AutocompleteInputClasses = {
    textField: `${PREFIX}-textField`,
    emptyLabel: `${PREFIX}-emptyLabel`
};
const StyledAutocomplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Autocomplete$2f$Autocomplete$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Autocomplete$3e$__["Autocomplete"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [`& .${AutocompleteInputClasses.textField}`]: {
            minWidth: theme.spacing(20)
        },
        [`& .${AutocompleteInputClasses.emptyLabel} .MuiOutlinedInput-root legend`]: {
            width: 0
        }
    }));
/**
 * Returns the selected choice (or choices if multiple) by matching the input value with the choices.
 */ const useSelectedChoice = (value, { choices, multiple, optionValue })=>{
    const selectedChoiceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(getSelectedItems(choices, value, optionValue, multiple));
    const [selectedChoice, setSelectedChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSelectedChoice.useState": ()=>getSelectedItems(choices, value, optionValue, multiple)
    }["useSelectedChoice.useState"]);
    // As the selected choices are objects, we want to ensure we pass the same
    // reference to the Autocomplete as it would reset its filter value otherwise.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSelectedChoice.useEffect": ()=>{
            const newSelectedItems = getSelectedItems(choices, value, optionValue, multiple);
            if (!areSelectedItemsEqual(selectedChoiceRef.current, newSelectedItems, optionValue, multiple)) {
                selectedChoiceRef.current = newSelectedItems;
                setSelectedChoice(newSelectedItems);
            }
        }
    }["useSelectedChoice.useEffect"], [
        choices,
        value,
        multiple,
        optionValue
    ]);
    return selectedChoice || null;
};
const getSelectedItems = (choices = [], value, optionValue = 'id', multiple)=>{
    if (multiple) {
        return (Array.isArray(value ?? []) ? value : [
            value
        ]).map((item)=>choices.find((choice)=>String(item) === String((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(choice, optionValue)))).filter((item)=>!!item);
    }
    return choices.find((choice)=>String((0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(choice, optionValue)) === String(value)) || '';
};
const areSelectedItemsEqual = (selectedChoice, newSelectedChoice, optionValue = 'id', multiple)=>{
    if (multiple) {
        const selectedChoiceArray = selectedChoice ?? [];
        const newSelectedChoiceArray = newSelectedChoice ?? [];
        if (selectedChoiceArray.length !== newSelectedChoiceArray.length) {
            return false;
        }
        const equalityArray = selectedChoiceArray.map((choice)=>newSelectedChoiceArray.some((newChoice)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newChoice, optionValue) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(choice, optionValue)));
        return !equalityArray.some((item)=>item === false);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selectedChoice, optionValue) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(newSelectedChoice, optionValue);
};
const DefaultFilterToQuery = (searchText)=>({
        q: searchText
    });
const defaultOffline = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Offline"], {
    variant: "inline"
}); //# sourceMappingURL=AutocompleteInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ReferenceInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReferenceInput",
    ()=>ReferenceInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$ReferenceInputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/ReferenceInputBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/Offline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$AutocompleteInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/AutocompleteInput.js [app-client] (ecmascript)");
;
;
;
;
const ReferenceInput = (props)=>{
    const { children = defaultChildren, offline = defaultOffline, ...rest } = props;
    if (props.validate && ("TURBOPACK compile-time value", "development") !== 'production') {
        throw new Error('<ReferenceInput> does not accept a validate prop. Set the validate prop on the child instead.');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$ReferenceInputBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceInputBase"], {
        ...rest,
        offline: offline
    }, children);
};
const defaultChildren = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$AutocompleteInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutocompleteInput"], null);
const defaultOffline = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Offline"], {
    variant: "inline"
}); //# sourceMappingURL=ReferenceInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/LoadingInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingInput",
    ()=>LoadingInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/hooks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ResettableTextField.js [app-client] (ecmascript)");
;
;
;
;
;
const LoadingInput = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { fullWidth, label, helperText, margin, size, sx, timeout = 1000, variant } = props;
    const oneSecondHasPassed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$hooks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeout"])(timeout);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledResettableTextField, {
        sx: sx,
        label: label,
        helperText: helperText,
        fullWidth: fullWidth,
        variant: variant,
        margin: margin,
        size: size,
        disabled: true,
        onChange: ()=>{},
        InputProps: {
            endAdornment: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                position: "end"
            }, oneSecondHasPassed ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                color: "inherit",
                size: 20
            }) : // use an adornment of the same size to avoid visual jumps
            __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", {
                style: {
                    width: 20
                }
            }, "\u00A0"))
        }
    });
};
const PREFIX = 'RaLoadingInput';
// make it look just like a regular input, even though it's disabled
// because the loading indicator is enough
const StyledResettableTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResettableTextField"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        '& .MuiInputLabel-root.Mui-disabled': {
            color: (theme.vars || theme).palette.text.secondary
        },
        '& .MuiFilledInput-root.Mui-disabled': {
            background: (theme.vars || theme).palette.action.disabledBackground
        },
        '& .MuiFilledInput-root.Mui-disabled:before': {
            borderBottomStyle: 'solid'
        }
    })); //# sourceMappingURL=LoadingInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/SelectInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectInput",
    ()=>SelectInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoicesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/choices/useChoicesContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/choices/useChoices.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetRecordRepresentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$useSupportCreateSuggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/useSupportCreateSuggestion.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/ResettableTextField.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/InputHelperText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/input/sanitizeInputRestProps.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$LoadingInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/input/LoadingInput.js [app-client] (ecmascript)");
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
const SelectInput = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { choices: choicesProp, className, create, createLabel, createValue, createHintValue, defaultValue, disableValue = 'disabled', emptyText = '', emptyValue = '', format, filter, helperText, isFetching: isFetchingProp, isLoading: isLoadingProp, isPending: isPendingProp, label, margin = 'dense', onBlur, onChange, onCreate, optionText, optionValue, parse, resource: resourceProp, source: sourceProp, translateChoice, validate, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SelectInput.useEffect": ()=>{
            if (emptyValue == null) {
                throw new Error(`emptyValue being set to null or undefined is not supported. Use parse to turn the empty string into null.`);
            }
        }
    }["SelectInput.useEffect"], [
        emptyValue
    ]);
    const { allChoices, isPending, error: fetchError, source, resource, isFromReference } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoicesContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChoicesContext"])({
        choices: choicesProp,
        isLoading: isLoadingProp,
        isFetching: isFetchingProp,
        isPending: isPendingProp,
        resource: resourceProp,
        source: sourceProp
    });
    if (source === undefined) {
        throw new Error(`If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the source prop`);
    }
    if (!isPending && !fetchError && allChoices === undefined) {
        throw new Error(`If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the choices prop`);
    }
    const getRecordRepresentation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetRecordRepresentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetRecordRepresentation"])(resource);
    const { getChoiceText, getChoiceValue, getDisableValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$choices$2f$useChoices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChoices"])({
        optionText: optionText ?? (isFromReference ? getRecordRepresentation : undefined),
        optionValue,
        disableValue,
        translateChoice: translateChoice ?? !isFromReference,
        createValue,
        createHintValue
    });
    const { field, fieldState, id, isRequired } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInput"])({
        defaultValue,
        parse,
        format,
        onBlur,
        onChange,
        resource,
        source,
        validate,
        ...rest
    });
    const { error, invalid } = fieldState;
    const renderEmptyItemOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectInput.useCallback[renderEmptyItemOption]": ()=>{
            return typeof emptyText === 'string' ? emptyText === '' ? ' ' // em space, forces the display of an empty line of normal height
             : translate(emptyText, {
                _: emptyText
            }) : emptyText;
        }
    }["SelectInput.useCallback[renderEmptyItemOption]"], [
        emptyText,
        translate
    ]);
    const renderMenuItemOption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectInput.useCallback[renderMenuItemOption]": (choice)=>getChoiceText(choice)
    }["SelectInput.useCallback[renderMenuItemOption]"], [
        getChoiceText
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectInput.useCallback[handleChange]": async (eventOrChoice)=>{
            if (typeof eventOrChoice === 'string') {
                if (eventOrChoice === '') {
                    // called  by the reset button
                    field.onChange(emptyValue);
                }
            } else if (eventOrChoice?.target) {
                // We might receive an event from the mui component
                // In this case, it will be the choice id
                field.onChange(eventOrChoice);
            } else {
                // Or we might receive a choice directly, for instance a newly created one
                field.onChange(getChoiceValue(eventOrChoice));
            }
        }
    }["SelectInput.useCallback[handleChange]"], [
        field,
        getChoiceValue,
        emptyValue
    ]);
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$useSupportCreateSuggestion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSupportCreateSuggestion"])({
        create,
        createLabel,
        createValue,
        createHintValue,
        handleChange,
        onCreate,
        optionText
    });
    const createItem = create || onCreate ? getCreateItem() : null;
    const renderMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SelectInput.useCallback[renderMenuItem]": (choice)=>{
            return choice ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                key: getChoiceValue(choice),
                value: getChoiceValue(choice),
                disabled: getDisableValue(choice)
            }, renderMenuItemOption(!!createItem && choice?.id === createItem.id ? createItem : choice)) : null;
        }
    }["SelectInput.useCallback[renderMenuItem]"], [
        getChoiceValue,
        getDisableValue,
        renderMenuItemOption,
        createItem
    ]);
    if (isPending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$LoadingInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingInput"], {
            label: label !== '' && label !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
                label: label,
                source: source,
                resource: resourceProp,
                isRequired: isRequired
            }),
            sx: props.sx,
            helperText: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
                error: error?.message,
                helperText: helperText
            }),
            variant: props.variant,
            size: props.size,
            margin: props.margin,
            fullWidth: props.fullWidth
        });
    }
    let finalChoices = fetchError ? [] : allChoices;
    if (create || onCreate) {
        finalChoices = [
            ...finalChoices,
            createItem
        ];
    }
    const renderHelperText = !!fetchError || helperText !== false || invalid;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledResettableTextField, {
        id: id,
        ...field,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('ra-input', `ra-input-${source}`, className),
        onChange: handleChangeWithCreateSupport,
        select: true,
        label: label !== '' && label !== false ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
            label: label,
            source: source,
            resource: resourceProp,
            isRequired: isRequired
        }) : null,
        clearAlwaysVisible: true,
        error: !!fetchError || invalid,
        helperText: renderHelperText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$InputHelperText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputHelperText"], {
            error: error?.message || fetchError?.message,
            helperText: helperText
        }) : null,
        margin: margin,
        ...sanitizeRestProps(rest)
    }, !isRequired && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
        value: emptyValue,
        key: "null",
        "aria-label": translate('ra.action.clear_input_value'),
        title: translate('ra.action.clear_input_value')
    }, renderEmptyItemOption()), finalChoices.map(renderMenuItem)), createElement);
};
const sanitizeRestProps = ({ afterSubmit, allowNull, beforeSubmit, choices, className, crudGetMatching, crudGetOne, data, field, fieldState, formState, filter, filterToQuery, formatOnBlur, isEqual, limitChoicesToValue, multiple, name, pagination, perPage, ref, reference, refetch, render, setFilter, setPagination, setSort, shouldUnregister, sort, subscription, type, validateFields, validation, value, ...rest })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$input$2f$sanitizeInputRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeInputRestProps"])(rest);
const PREFIX = 'RaSelectInput';
const StyledResettableTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResettableTextField"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$input$2f$ResettableTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResettableTextFieldStyles"],
        minWidth: theme.spacing(20),
        '& .MuiFilledInput-root': {
            paddingRight: 0
        }
    })); //# sourceMappingURL=SelectInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SaveButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SaveButton",
    ()=>SaveButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Save.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/saveContext/useSaveContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/warning.js [app-client] (ecmascript) <export default as warning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$setSubmissionErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/validation/setSubmissionErrors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useRecordFromLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useRecordFromLocation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useFormIsDirty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/useFormIsDirty.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const SaveButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function SaveButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { color = 'primary', icon = defaultIcon, invalid, label = 'ra.action.save', onClick, mutationOptions, disabled: disabledProp, type = 'submit', transform, variant = 'contained', alwaysEnable = false, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const saveContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$saveContext$2f$useSaveContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveContext"])();
    const { isValidating, isSubmitting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormState"])();
    // useFormState().isDirty might differ from useFormState().dirtyFields (https://github.com/react-hook-form/react-hook-form/issues/4740)
    const isDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useFormIsDirty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormIsDirty"])();
    // Use form isDirty, isValidating and form context saving to enable or disable the save button
    // if alwaysEnable is undefined and the form wasn't prefilled
    const recordFromLocation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$useRecordFromLocation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordFromLocation"])();
    const disabled = valueOrDefault(alwaysEnable === false || alwaysEnable === undefined ? undefined : !alwaysEnable, disabledProp || !isDirty && recordFromLocation == null || isValidating || isSubmitting);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__warning$3e$__["warning"])(type === 'submit' && (mutationOptions && (mutationOptions.onSuccess || mutationOptions.onError) || transform), 'Cannot use <SaveButton mutationOptions> props on a button of type "submit". To override the default mutation options on a particular save button, set the <SaveButton type="button"> prop, or set mutationOptions in the main view component (<Create> or <Edit>).');
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SaveButton.SaveButton.useCallback[handleSubmit]": async (values)=>{
            let errors;
            if (saveContext?.save) {
                errors = await saveContext.save(values, {
                    ...mutationOptions,
                    transform
                });
            }
            if (errors != null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$validation$2f$setSubmissionErrors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSubmissionErrors"])(errors, form.setError);
            }
        }
    }["SaveButton.SaveButton.useCallback[handleSubmit]"], [
        form.setError,
        saveContext,
        mutationOptions,
        transform
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SaveButton.SaveButton.useCallback[handleClick]": async (event)=>{
            if (onClick) {
                onClick(event);
            }
            if (event.defaultPrevented) {
                return;
            }
            if (type === 'button') {
                // this button doesn't submit the form, so it doesn't trigger useIsFormInvalid in <FormContent>
                // therefore we need to check for errors manually
                event.stopPropagation();
                await form.handleSubmit(handleSubmit)(event);
            }
        }
    }["SaveButton.SaveButton.useCallback[handleClick]"], [
        onClick,
        type,
        form,
        handleSubmit
    ]);
    const displayedLabel = label && translate(label, {
        _: label
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        ref: ref,
        variant: variant,
        type: type,
        color: color,
        "aria-label": displayedLabel,
        disabled: disabled,
        onClick: handleClick,
        ...rest
    }, isSubmitting ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
        sx: circularProgressStyle,
        size: 14,
        thickness: 3,
        color: "inherit"
    }) : icon, displayedLabel);
});
const circularProgressStyle = {
    '&.MuiCircularProgress-root': {
        marginRight: '10px',
        marginLeft: '2px'
    }
};
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaSaveButton';
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        position: 'relative',
        [`& .MuiSvgIcon-root, & .MuiIcon-root, & .MuiCircularProgress-root`]: {
            marginRight: theme.spacing(1)
        },
        [`& .MuiSvgIcon-root, & .MuiIcon-root`]: {
            fontSize: 18
        }
    }));
const valueOrDefault = (value, defaultValue)=>typeof value === 'undefined' ? defaultValue : value; //# sourceMappingURL=SaveButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/form/Toolbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbar",
    ()=>Toolbar,
    "ToolbarClasses",
    ()=>ToolbarClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SaveButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/SaveButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/DeleteButton.js [app-client] (ecmascript)");
;
;
;
;
;
;
const Toolbar = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { children, className, resource, ...rest } = props;
    const isXs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "Toolbar.useMediaQuery[isXs]": (theme)=>theme.breakpoints.down('sm')
    }["Toolbar.useMediaQuery[isXs]"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledToolbar, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            [ToolbarClasses.mobileToolbar]: isXs,
            [ToolbarClasses.desktopToolbar]: !isXs
        }, className),
        role: "toolbar",
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: ToolbarClasses.defaultToolbar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$SaveButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SaveButton"], null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$DeleteButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteButton"], {
        resource: resource
    })) : children);
};
const PREFIX = 'RaToolbar';
const ToolbarClasses = {
    desktopToolbar: `${PREFIX}-desktopToolbar`,
    mobileToolbar: `${PREFIX}-mobileToolbar`,
    defaultToolbar: `${PREFIX}-defaultToolbar`
};
const StyledToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        backgroundColor: (theme.vars || theme).palette.background.paper,
        backgroundImage: theme.vars != null ? 'var(--Paper-overlay);' : 'none',
        [`&.${ToolbarClasses.desktopToolbar}`]: {},
        [`&.${ToolbarClasses.mobileToolbar}`]: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            width: '100%',
            boxSizing: 'border-box',
            flexShrink: 0,
            zIndex: 2
        },
        [`& .${ToolbarClasses.defaultToolbar}`]: {
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between'
        }
    })); //# sourceMappingURL=Toolbar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/form/SimpleForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimpleForm",
    ()=>SimpleForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/Form.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Stack/Stack.js [app-client] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/form/Toolbar.js [app-client] (ecmascript)");
;
;
;
;
;
const SimpleForm = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { children, className, component: Component = DefaultComponent, sx, toolbar = DefaultToolbar, ...rest } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$Form$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        ...rest
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Component, {
        className: className,
        sx: sx
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
        ...sanitizeRestProps(props),
        sx: {
            alignItems: 'flex-start'
        }
    }, children)), toolbar);
};
const PREFIX = 'RaSimpleForm';
const DefaultComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '5em'
        }
    }));
const DefaultToolbar = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$form$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbar"], null);
const sanitizeRestProps = ({ children, className, component, criteriaMode, defaultValues, delayError, onSubmit, record, resource, reValidateMode, sx, toolbar, validate, resetOptions, resolver, sanitizeEmptyValues, shouldFocusError, shouldUnregister, shouldUseNativeValidation, warnWhenUnsavedChanges, ...props })=>props; //# sourceMappingURL=SimpleForm.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterFormInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterFormInput",
    ()=>FilterFormInput,
    "FilterFormInputClasses",
    ()=>FilterFormInputClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveCircleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/RemoveCircleOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
;
const FilterFormInput = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { filterElement, handleHide, className } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        "data-source": filterElement.props.source,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('filter-field', className)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](filterElement, {
        resource,
        record: emptyRecord,
        size: filterElement.props.size ?? 'small',
        helperText: false,
        // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
        defaultValue: undefined
    }), !filterElement.props.alwaysOn && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('hide-filter', FilterFormInputClasses.hideButton),
        onClick: handleHide,
        "data-key": filterElement.props.source,
        title: translate('ra.action.remove_filter'),
        size: "small"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$RemoveCircleOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: FilterFormInputClasses.spacer
    }, "\u00A0"));
};
const PREFIX = 'RaFilterFormInput';
const FilterFormInputClasses = {
    spacer: `${PREFIX}-spacer`,
    hideButton: `${PREFIX}-hideButton`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [`& .${FilterFormInputClasses.spacer}`]: {
            width: theme.spacing(2)
        },
        [`& .${FilterFormInputClasses.hideButton}`]: {
            marginBottom: theme.spacing(1)
        }
    }));
const emptyRecord = {}; //# sourceMappingURL=FilterFormInput.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterForm",
    ()=>FilterForm,
    "FilterFormBase",
    ()=>FilterFormBase,
    "FilterFormClasses",
    ()=>FilterFormClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/get.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$FilterLiveForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/form/FilterLiveForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useFilterContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterFormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterFormInput.js [app-client] (ecmascript)");
;
;
;
;
;
;
const FilterForm = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { filters: filtersProps, ...rest } = props;
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterContext"])() || filtersProps;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$form$2f$FilterLiveForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterLiveForm"], {
        formComponent: StyledForm,
        ...sanitizeRestProps(rest)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](FilterFormBase, {
        filters: filters
    }));
};
const FilterFormBase = (props)=>{
    const { filters } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { displayedFilters = {}, filterValues, hideFilter } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilterFormBase.useEffect": ()=>{
            if (!filters) return;
            filters.forEach({
                "FilterFormBase.useEffect": (filter)=>{
                    if (filter.props.alwaysOn && filter.props.defaultValue) {
                        throw new Error('Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.');
                    }
                }
            }["FilterFormBase.useEffect"]);
        }
    }["FilterFormBase.useEffect"], [
        filters
    ]);
    const getShownFilters = ()=>{
        if (!filters) return [];
        const values = filterValues;
        return filters.filter((filterElement)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](filterElement)) {
                return false;
            }
            const filterValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$get$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(values, filterElement.props.source);
            return filterElement.props.alwaysOn || displayedFilters[filterElement.props.source] || !isEmptyValue(filterValue);
        });
    };
    const handleHide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterFormBase.useCallback[handleHide]": (event)=>hideFilter(event.currentTarget.dataset.key)
    }["FilterFormBase.useCallback[handleHide]"], [
        hideFilter
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, getShownFilters().map((filterElement)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterFormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterFormInput"], {
            key: filterElement.key || filterElement.props.source,
            filterElement: filterElement,
            handleHide: handleHide,
            resource: resource,
            className: FilterFormClasses.filterFormInput
        })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: FilterFormClasses.clearFix
    }));
};
const sanitizeRestProps = ({ hasCreate, resource, ...props })=>props;
const PREFIX = 'RaFilterForm';
const FilterFormClasses = {
    clearFix: `${PREFIX}-clearFix`,
    filterFormInput: `${PREFIX}-filterFormInput`
};
const StyledForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('form', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        flex: '0 1 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.up('sm')]: {
            minHeight: theme.spacing(8)
        },
        [theme.breakpoints.up('md')]: {
            flex: '0 1 100%'
        },
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        pointerEvents: 'none',
        padding: `0 0 ${theme.spacing(0.5)} 0`,
        '& .MuiFormHelperText-root': {
            display: 'none'
        },
        [`& .${FilterFormClasses.clearFix}`]: {
            clear: 'right'
        },
        [`& .${FilterFormClasses.filterFormInput} .MuiFormControl-root`]: {
            marginTop: `${theme.spacing(1)}`
        }
    }));
const isEmptyValue = (filterValue)=>{
    if (filterValue === '' || filterValue == null) return true;
    // If one of the value leaf is not empty
    // the value is considered not empty
    if (typeof filterValue === 'object') {
        return Object.keys(filterValue).every((key)=>isEmptyValue(filterValue[key]));
    }
    return false;
}; //# sourceMappingURL=FilterForm.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListToolbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListToolbar",
    ()=>ListToolbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$FilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/FilterContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterForm.js [app-client] (ecmascript)");
;
;
;
;
;
const ListToolbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { filters, actions, className, ...rest } = props;
    return Array.isArray(filters) ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$FilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterContext"].Provider, {
        value: filters
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterForm"], null), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null), actions)) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, filters && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](filters, {
        ...rest,
        context: 'form'
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("span", null), actions && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](actions, {
        ...rest,
        filters,
        ...actions.props
    }));
});
const PREFIX = 'RaListToolbar';
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap'
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: (theme.vars || theme).palette.background.paper,
            flexWrap: 'inherit',
            flexDirection: 'column-reverse'
        }
    })); //# sourceMappingURL=ListToolbar.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/pagination/PaginationActions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationActions",
    ()=>PaginationActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Pagination/Pagination.js [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
;
;
;
;
;
const PaginationActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { page, rowsPerPage, count, onPageChange, size = 'small', className, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const nbPages = Math.ceil(count / rowsPerPage) || 1;
    if (nbPages === 1) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
            className: className
        });
    }
    const getItemAriaLabel = (type, page, selected)=>{
        if (type === 'page') {
            return selected ? translate('ra.navigation.current_page', {
                page,
                _: `page ${page}`
            }) : translate('ra.navigation.page', {
                page,
                _: `Go to page ${page}`
            });
        }
        return translate(`ra.navigation.${type}`, {
            _: `Go to ${type} page`
        });
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"], {
        size: size,
        count: nbPages,
        // <TablePagination>, the parent, uses 0-based pagination
        // while <Pagination> uses 1-based pagination
        page: page + 1,
        onChange: (e, page)=>onPageChange(e, page - 1),
        ...sanitizeRestProps(rest),
        getItemAriaLabel: getItemAriaLabel
    }));
});
const PREFIX = 'RaPaginationActions';
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(()=>({
        flexShrink: 0,
        ml: 4
    }));
const sanitizeRestProps = ({ nextIconButtonProps, backIconButtonProps, slotProps, ...rest })=>rest; //# sourceMappingURL=PaginationActions.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/pagination/Pagination.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Pagination",
    ()=>Pagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TablePagination$2f$TablePagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TablePagination$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TablePagination/TablePagination.js [app-client] (ecmascript) <export default as TablePagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Toolbar/Toolbar.js [app-client] (ecmascript) <export default as Toolbar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListPaginationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListPaginationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$pagination$2f$PaginationActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/pagination/PaginationActions.js [app-client] (ecmascript)");
;
;
;
;
;
const Pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((props)=>{
    const { rowsPerPageOptions = DefaultRowsPerPageOptions, actions, limit = null, ...rest } = props;
    const { isPending, hasNextPage, page, perPage, total, setPage, setPerPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListPaginationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListPaginationContext"])();
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const isSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "Pagination.useMediaQuery[isSmall]": (theme)=>theme.breakpoints.down('md')
    }["Pagination.useMediaQuery[isSmall]"]);
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Pagination.useMemo[totalPages]": ()=>{
            return total != null ? Math.ceil(total / perPage) : undefined;
        }
    }["Pagination.useMemo[totalPages]"], [
        perPage,
        total
    ]);
    /**
     * Warning: Material UI's page is 0-based
     */ const handlePageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Pagination.useCallback[handlePageChange]": (event, page)=>{
            event && event.stopPropagation();
            if (page < 0 || totalPages && page > totalPages - 1) {
                throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                    page: page + 1
                }));
            }
            setPage(page + 1);
        }
    }["Pagination.useCallback[handlePageChange]"], [
        totalPages,
        setPage,
        translate
    ]);
    const handlePerPageChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Pagination.useCallback[handlePerPageChange]": (event)=>{
            setPerPage(event.target.value);
        }
    }["Pagination.useCallback[handlePerPageChange]"], [
        setPerPage
    ]);
    const labelDisplayedRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Pagination.useCallback[labelDisplayedRows]": ({ from, to, count })=>count === -1 && hasNextPage ? translate('ra.navigation.partial_page_range_info', {
                offsetBegin: from,
                offsetEnd: to,
                _: `%{from}-%{to} of more than %{to}`
            }) : translate('ra.navigation.page_range_info', {
                offsetBegin: from,
                offsetEnd: to,
                total: count === -1 ? to : count,
                _: `%{from}-%{to} of %{count === -1 ? to : count}`
            })
    }["Pagination.useCallback[labelDisplayedRows]"], [
        translate,
        hasNextPage
    ]);
    const labelItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Pagination.useCallback[labelItem]": (type)=>translate(`ra.navigation.${type}`, {
                _: `Go to ${type} page`
            })
    }["Pagination.useCallback[labelItem]"], [
        translate
    ]);
    if (isPending) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Toolbar$2f$Toolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Toolbar$3e$__["Toolbar"], {
            variant: "dense"
        });
    }
    // Avoid rendering TablePagination if "page" value is invalid
    if (total === 0 || page < 1 || total != null && page > totalPages) {
        if (limit != null && ("TURBOPACK compile-time value", "development") === 'development') {
            console.warn('The Pagination limit prop is deprecated. Empty state should be handled by the component displaying data (Datagrid, SimpleList).');
        }
        return null;
    }
    if (isSmall) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TablePagination$2f$TablePagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TablePagination$3e$__["TablePagination"], {
            count: total == null ? -1 : total,
            rowsPerPage: perPage,
            page: page - 1,
            onPageChange: handlePageChange,
            rowsPerPageOptions: emptyArray,
            component: "span",
            labelDisplayedRows: labelDisplayedRows,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeListRestProps"])(rest)
        });
    }
    const ActionsComponent = actions ? actions // overridden by caller
     : !isPending && total != null ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$pagination$2f$PaginationActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationActions"] // regular navigation
     : undefined; // partial navigation (uses default TablePaginationActions)
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TablePagination$2f$TablePagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TablePagination$3e$__["TablePagination"], {
        count: total == null ? -1 : total,
        rowsPerPage: perPage,
        page: page - 1,
        onPageChange: handlePageChange,
        onRowsPerPageChange: handlePerPageChange,
        // @ts-ignore
        ActionsComponent: ActionsComponent,
        nextIconButtonProps: {
            disabled: !hasNextPage
        },
        component: "span",
        labelRowsPerPage: translate('ra.navigation.page_rows_per_page'),
        labelDisplayedRows: labelDisplayedRows,
        getItemAriaLabel: labelItem,
        rowsPerPageOptions: rowsPerPageOptions,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeListRestProps"])(rest)
    });
});
const DefaultRowsPerPageOptions = [
    5,
    10,
    25,
    50
];
const emptyArray = []; //# sourceMappingURL=Pagination.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/CreateButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateButtonClasses",
    ()=>CreateButtonClasses,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Fab/Fab.js [app-client] (ecmascript) <export default as Fab>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/useMediaQuery/index.js [app-client] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useCreatePath.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/auth/useCanAccess.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useResourceTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/LinkBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Opens the Create view of a given resource
 *
 * Renders as a regular button on desktop, and a Floating Action Button
 * on mobile.
 *
 * @example // basic usage
 * import { CreateButton } from 'react-admin';
 *
 * const CommentCreateButton = () => (
 *     <CreateButton label="Create comment" />
 * );
 */ const CreateButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function CreateButton(inProps, ref) {
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, icon = defaultIcon, label: labelProp, resource: resourceProp, scrollToTop = true, variant, to: locationDescriptor, state: initialState = {}, ...rest } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    if (!resource) {
        throw new Error('<CreateButton> components should be used inside a <Resource> component or provided the resource prop.');
    }
    const { canAccess, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$auth$2f$useCanAccess$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanAccess"])({
        action: 'create',
        resource
    });
    const createPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useCreatePath$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreatePath"])();
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useResourceTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceTranslation"])({
        resourceI18nKey: `resources.${resource}.action.create`,
        baseI18nKey: 'ra.action.create',
        options: {
            name: getResourceLabel(resource, 1)
        },
        userText: labelProp
    });
    const isSmall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])({
        "CreateButton.CreateButton.useMediaQuery[isSmall]": (theme)=>theme.breakpoints.down('md')
    }["CreateButton.CreateButton.useMediaQuery[isSmall]"]);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, scrollStates.get(String(scrollToTop)), initialState);
    // Duplicated behavior of Button component (legacy use) which will be removed in v5.
    const linkParams = getLinkParams(locationDescriptor);
    if (!canAccess || isPending) {
        return null;
    }
    return isSmall ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledFab, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"],
        ref: ref,
        to: createPath({
            resource,
            type: 'create'
        }),
        state: state,
        // @ts-ignore FabProps ships its own runtime palette `FabPropsColorOverrides` provoking an overlap error with `ButtonProps`
        color: "primary",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CreateButtonClasses.floating, className),
        "aria-label": typeof label === 'string' ? label : undefined,
        ...rest,
        ...linkParams
    }, icon) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledButton, {
        component: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$LinkBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkBase"],
        ref: ref,
        to: createPath({
            resource,
            type: 'create'
        }),
        state: state,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CreateButtonClasses.root, className),
        // avoid double translation
        label: __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, label),
        "aria-label": typeof label === 'string' ? label : undefined,
        variant: variant,
        ...rest,
        ...linkParams
    }, icon);
});
// avoids using useMemo to get a constant value for the link state
const scrollStates = new Map([
    [
        'true',
        {
            _scrollToTop: true
        }
    ],
    [
        'false',
        {}
    ]
]);
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const PREFIX = 'RaCreateButton';
const CreateButtonClasses = {
    root: `${PREFIX}-root`,
    floating: `${PREFIX}-floating`
};
const StyledFab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Fab$2f$Fab$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fab$3e$__["Fab"], {
    name: PREFIX,
    overridesResolver: (_props, styles)=>styles.root
})(({ theme })=>({
        [`&.${CreateButtonClasses.floating}`]: {
            color: (theme.vars || theme).palette.primary.contrastText,
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 60,
            left: 'auto',
            position: 'fixed',
            zIndex: 1000
        }
    }));
const StyledButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
    name: PREFIX,
    overridesResolver: (_props, styles)=>styles.root
})({});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](CreateButton, (prevProps, nextProps)=>{
    return prevProps.resource === nextProps.resource && prevProps.label === nextProps.label && prevProps.translate === nextProps.translate && prevProps.disabled === nextProps.disabled && (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevProps.to, nextProps.to) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(prevProps.state, nextProps.state);
});
const getLinkParams = (locationDescriptor)=>{
    // eslint-disable-next-line
    if (locationDescriptor == undefined) {
        return undefined;
    }
    if (typeof locationDescriptor === 'string') {
        return {
            to: locationDescriptor
        };
    }
    const { redirect, replace, state, ...to } = locationDescriptor;
    return {
        to,
        redirect,
        replace,
        state
    };
}; //# sourceMappingURL=CreateButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/CreateButton.js [app-client] (ecmascript) <export default as CreateButton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/CreateButton.js [app-client] (ecmascript)");
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ExportButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportButton",
    ()=>ExportButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GetApp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/GetApp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$fetchRelatedRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/export/fetchRelatedRecords.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/dataProvider/useDataProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/notification/useNotify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
;
;
;
;
;
const ExportButton = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function ExportButton(props, ref) {
    const { maxResults = 1000, onClick, label = 'ra.action.export', icon = defaultIcon, exporter: customExporter, meta, ...rest } = props;
    const { filter, filterValues, resource, sort, exporter: exporterFromContext, total, getData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const exporter = customExporter || exporterFromContext;
    const dataProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$dataProvider$2f$useDataProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDataProvider"])();
    const notify = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$notification$2f$useNotify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotify"])();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExportButton.ExportButton.useCallback[handleClick]": (event)=>{
            const fetchData = getData ? getData({
                maxResults,
                meta
            }) : dataProvider.getList(resource, {
                sort,
                filter: filter ? {
                    ...filterValues,
                    ...filter
                } : filterValues,
                pagination: {
                    page: 1,
                    perPage: maxResults
                },
                meta
            }).then({
                "ExportButton.ExportButton.useCallback[handleClick]": ({ data })=>data
            }["ExportButton.ExportButton.useCallback[handleClick]"]);
            Promise.resolve(fetchData).then({
                "ExportButton.ExportButton.useCallback[handleClick]": (data)=>exporter && exporter(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$export$2f$fetchRelatedRecords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchRelatedRecords"])(dataProvider), dataProvider, resource)
            }["ExportButton.ExportButton.useCallback[handleClick]"]).catch({
                "ExportButton.ExportButton.useCallback[handleClick]": (error)=>{
                    console.error(error);
                    notify('ra.notification.http_error', {
                        type: 'error'
                    });
                }
            }["ExportButton.ExportButton.useCallback[handleClick]"]);
            if (typeof onClick === 'function') {
                onClick(event);
            }
        }
    }["ExportButton.ExportButton.useCallback[handleClick]"], [
        dataProvider,
        exporter,
        filter,
        filterValues,
        getData,
        maxResults,
        notify,
        onClick,
        resource,
        sort,
        meta
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ref: ref,
        onClick: handleClick,
        label: label,
        disabled: total === 0,
        ...sanitizeRestProps(rest)
    }, icon);
});
const defaultIcon = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$GetApp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null);
const sanitizeRestProps = ({ resource, ...rest })=>rest; //# sourceMappingURL=ExportButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterButtonMenuItem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterButtonMenuItem",
    ()=>FilterButtonMenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBoxOutlineBlank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/CheckBoxOutlineBlank.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/CheckBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/FieldTitle.js [app-client] (ecmascript) <export default as FieldTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
const FilterButtonMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { filter, onShow, onHide, autoFocus, displayed } = props;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const handleShow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButtonMenuItem.useCallback[handleShow]": ()=>{
            onShow({
                source: filter.props.source,
                defaultValue: filter.props.defaultValue
            });
        }
    }["FilterButtonMenuItem.useCallback[handleShow]"], [
        filter.props.defaultValue,
        filter.props.source,
        onShow
    ]);
    const handleHide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButtonMenuItem.useCallback[handleHide]": ()=>{
            onHide({
                source: filter.props.source
            });
        }
    }["FilterButtonMenuItem.useCallback[handleHide]"], [
        filter.props.source,
        onHide
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
        className: "new-filter-item",
        "data-key": filter.props.source,
        "data-default-value": filter.props.defaultValue,
        key: filter.props.source,
        onClick: displayed ? handleHide : handleShow,
        autoFocus: autoFocus,
        ref: ref,
        disabled: filter.props.disabled,
        role: "menuitemcheckbox",
        "aria-checked": displayed
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], null, displayed ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckBoxOutlineBlank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$FieldTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FieldTitle$3e$__["FieldTitle"], {
        label: filter.props.label,
        source: filter.props.source,
        resource: resource
    })));
}); //# sourceMappingURL=FilterButtonMenuItem.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/AddSavedQueryDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddSavedQueryDialog",
    ()=>AddSavedQueryDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useSavedQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
;
;
;
;
const AddSavedQueryDialog = ({ open, onClose })=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { resource, filterValues, displayedFilters, sort, perPage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const [savedQueries, setSavedQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedQueries"])(resource);
    // input state
    const [queryName, setQueryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleQueryNameChange = (event)=>{
        setQueryName(event.target.value);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        addQuery();
    };
    const addQuery = ()=>{
        const newSavedQuery = {
            label: queryName,
            value: {
                filter: filterValues,
                sort,
                perPage,
                displayedFilters
            }
        };
        const newSavedQueries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractValidSavedQueries"])(savedQueries);
        setSavedQueries(newSavedQueries.concat(newSavedQuery));
        setQueryName('');
        onClose();
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        "aria-labelledby": "form-dialog-title"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
        id: "form-dialog-title"
    }, translate('ra.saved_queries.new_dialog_title', {
        _: 'Save current query as'
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("form", {
        onSubmit: handleFormSubmit
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: translate('ra.saved_queries.query_name', {
            _: 'Query name'
        }),
        fullWidth: true,
        value: queryName,
        onChange: handleQueryNameChange
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        onClick: onClose
    }, translate('ra.action.cancel')), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        onClick: addQuery,
        color: "primary"
    }, translate('ra.action.save'))));
}; //# sourceMappingURL=AddSavedQueryDialog.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/RemoveSavedQueryDialog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveSavedQueryDialog",
    ()=>RemoveSavedQueryDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useSavedQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js [app-client] (ecmascript) <export default as DialogContentText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
;
;
;
;
const RemoveSavedQueryDialog = ({ open, onClose })=>{
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const { resource, filterValues, sort, perPage, displayedFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const [savedQueries, setSavedQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedQueries"])(resource);
    const removeQuery = ()=>{
        const savedQueryToRemove = {
            filter: filterValues,
            sort,
            perPage,
            displayedFilters
        };
        const newSavedQueries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractValidSavedQueries"])(savedQueries);
        const index = newSavedQueries.findIndex((savedFilter)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(savedFilter.value, savedQueryToRemove));
        setSavedQueries([
            ...newSavedQueries.slice(0, index),
            ...newSavedQueries.slice(index + 1)
        ]);
        onClose();
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
        open: open,
        onClose: onClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
        id: "alert-dialog-title"
    }, translate('ra.saved_queries.remove_dialog_title', {
        _: 'Remove saved query?'
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__["DialogContentText"], null, translate('ra.saved_queries.remove_message', {
        _: 'Are you sure you want to remove that item from your list of saved queries?'
    }))), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        onClick: onClose
    }, translate('ra.action.cancel')), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
        onClick: removeQuery,
        color: "primary",
        autoFocus: true
    }, translate('ra.action.confirm'))));
}; //# sourceMappingURL=RemoveSavedQueryDialog.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterButton.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterButton",
    ()=>FilterButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js [app-client] (ecmascript) <export default as ListItemIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/ListItemText/ListItemText.js [app-client] (ecmascript) <export default as ListItemText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Clear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkAdd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/BookmarkAdd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/BookmarkRemove.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/BookmarkBorder.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FilterList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/FilterList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/lodash/isEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useFilterContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useSavedQueries.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/routing/useNavigate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/query-string/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterButtonMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterButtonMenuItem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$AddSavedQueryDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/AddSavedQueryDialog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$RemoveSavedQueryDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/RemoveSavedQueryDialog.js [app-client] (ecmascript)");
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
;
;
const FilterButton = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { filters: filtersProp, className, disableSaveQuery, size, variant, ...rest } = props;
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterContext"])() || filtersProp;
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    if (!resource && !disableSaveQuery) {
        throw new Error('<FilterButton> must be called inside a ResourceContextProvider, or must provide a resource prop');
    }
    const [savedQueries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSavedQueries"])(resource || '');
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$routing$2f$useNavigate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigate"])();
    const { displayedFilters = {}, filterValues, perPage, setFilters, showFilter, hideFilter, sort } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const hasFilterValues = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(filterValues, {});
    const validSavedQueries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useSavedQueries$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractValidSavedQueries"])(savedQueries);
    const hasSavedCurrentQuery = validSavedQueries.some((savedQuery)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(savedQuery.value, {
            filter: filterValues,
            sort,
            perPage,
            displayedFilters
        }));
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const anchorEl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    if (filters === undefined) {
        throw new Error('The <FilterButton> component requires the <List filters> prop to be set');
    }
    const allTogglableFilters = filters.filter((filterElement)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](filterElement) && !filterElement.props.alwaysOn;
    });
    const handleClickButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButton.useCallback[handleClickButton]": (event)=>{
            // This prevents ghost click.
            event.preventDefault();
            setOpen(true);
            anchorEl.current = event.currentTarget;
        }
    }["FilterButton.useCallback[handleClickButton]"], [
        anchorEl,
        setOpen
    ]);
    const handleRequestClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButton.useCallback[handleRequestClose]": ()=>{
            setOpen(false);
        }
    }["FilterButton.useCallback[handleRequestClose]"], [
        setOpen
    ]);
    const handleShow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButton.useCallback[handleShow]": ({ source, defaultValue })=>{
            showFilter(source, defaultValue === '' ? undefined : defaultValue);
            // We have to fallback to imperative code because the new FilterFormInput
            // has no way of knowing it has just been displayed (and thus that it should focus its input)
            setTimeout({
                "FilterButton.useCallback[handleShow]": ()=>{
                    const inputElement = document.querySelector(`input[name='${source}']`);
                    if (inputElement) {
                        inputElement.focus();
                    }
                }
            }["FilterButton.useCallback[handleShow]"], 50);
            setOpen(false);
        }
    }["FilterButton.useCallback[handleShow]"], [
        showFilter,
        setOpen
    ]);
    const handleRemove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterButton.useCallback[handleRemove]": ({ source })=>{
            hideFilter(source);
            setOpen(false);
        }
    }["FilterButton.useCallback[handleRemove]"], [
        hideFilter,
        setOpen
    ]);
    // add query dialog state
    const [addSavedQueryDialogOpen, setAddSavedQueryDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hideAddSavedQueryDialog = ()=>{
        setAddSavedQueryDialogOpen(false);
    };
    const showAddSavedQueryDialog = ()=>{
        setOpen(false);
        setAddSavedQueryDialogOpen(true);
    };
    // remove query dialog state
    const [removeSavedQueryDialogOpen, setRemoveSavedQueryDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hideRemoveSavedQueryDialog = ()=>{
        setRemoveSavedQueryDialogOpen(false);
    };
    const showRemoveSavedQueryDialog = ()=>{
        setOpen(false);
        setRemoveSavedQueryDialogOpen(true);
    };
    if (allTogglableFilters.length === 0 && validSavedQueries.length === 0 && !hasFilterValues) {
        return null;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className,
        ...sanitizeRestProps(rest)
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: "add-filter",
        label: "ra.action.add_filter",
        "aria-haspopup": "true",
        onClick: handleClickButton,
        variant: variant,
        size: size
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$FilterList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], null)), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
        open: open,
        anchorEl: anchorEl.current,
        onClose: handleRequestClose
    }, allTogglableFilters.map((filterElement, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterButtonMenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterButtonMenuItem"], {
            key: filterElement.props.source,
            filter: filterElement,
            displayed: !!displayedFilters[filterElement.props.source],
            resource: resource,
            onShow: handleShow,
            onHide: handleRemove,
            autoFocus: index === 0
        })), (hasFilterValues || validSavedQueries.length > 0) && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], null), validSavedQueries.map((savedQuery, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$lodash$2f$isEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(savedQuery.value, {
            filter: filterValues,
            sort,
            perPage,
            displayedFilters
        }) ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            onClick: showRemoveSavedQueryDialog,
            key: index
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkRemove$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            fontSize: "small"
        })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, translate('ra.saved_queries.remove_label_with_name', {
            _: 'Remove query "%{name}"',
            name: savedQuery.label
        }))) : __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
            onClick: ()=>{
                navigate({
                    search: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
                        filter: JSON.stringify(savedQuery.value.filter),
                        sort: savedQuery.value.sort?.field,
                        order: savedQuery.value.sort?.order,
                        page: 1,
                        perPage: savedQuery.value.perPage,
                        displayedFilters: JSON.stringify(savedQuery.value.displayedFilters)
                    })
                });
                setOpen(false);
            },
            key: index
        }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkBorder$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            fontSize: "small"
        })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, savedQuery.label))), hasFilterValues && !hasSavedCurrentQuery && !disableSaveQuery && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
        onClick: showAddSavedQueryDialog
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$BookmarkAdd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, translate('ra.saved_queries.new_label', {
        _: 'Save current query...'
    }))), hasFilterValues && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
        onClick: ()=>{
            setFilters({}, {});
            setOpen(false);
        }
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemIcon$2f$ListItemIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemIcon$3e$__["ListItemIcon"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Clear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fontSize: "small"
    })), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$ListItemText$2f$ListItemText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListItemText$3e$__["ListItemText"], null, translate('ra.action.remove_all_filters', {
        _: 'Remove all filters'
    })))), !disableSaveQuery && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$AddSavedQueryDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddSavedQueryDialog"], {
        open: addSavedQueryDialogOpen,
        onClose: hideAddSavedQueryDialog
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$RemoveSavedQueryDialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveSavedQueryDialog"], {
        open: removeSavedQueryDialogOpen,
        onClose: hideRemoveSavedQueryDialog
    })));
};
/* eslint-disable @typescript-eslint/no-unused-vars */ const sanitizeRestProps = ({ displayedFilters = null, filterValues = null, showFilter = null, ...rest })=>rest;
const PREFIX = 'RaFilterButton';
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({
    display: 'inline-block'
}); //# sourceMappingURL=FilterButton.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListActions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListActions",
    ()=>ListActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useFilterContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/TopToolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreateButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/CreateButton.js [app-client] (ecmascript) <export default as CreateButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ExportButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/ExportButton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/filter/FilterButton.js [app-client] (ecmascript)");
;
;
;
;
;
;
const ListActions = (props)=>{
    const { className, filters: filtersProp, hasCreate: _, ...rest } = props;
    const { displayedFilters, filterValues, exporter, showFilter, total } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const { hasCreate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinition"])(props);
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useFilterContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFilterContext"])() || filtersProp;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ListActions.useMemo": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$TopToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: className,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeListRestProps"])(rest)
            }, filtersProp ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(filtersProp, {
                resource,
                showFilter,
                displayedFilters,
                filterValues,
                context: 'button'
            }) : filters && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$filter$2f$FilterButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterButton"], null), hasCreate && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreateButton$3e$__["CreateButton"], null), exporter !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$ExportButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportButton"], {
                disabled: total === 0,
                resource: resource
            }))
    }["ListActions.useMemo"], /* eslint-disable react-hooks/exhaustive-deps */ [
        resource,
        displayedFilters,
        filterValues,
        filtersProp,
        showFilter,
        filters,
        total,
        className,
        exporter,
        hasCreate
    ]);
}; //# sourceMappingURL=ListActions.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/Empty.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Empty",
    ()=>Empty,
    "EmptyClasses",
    ()=>EmptyClasses
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/icons-material/esm/Inbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceDefinition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useResourceContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/core/useGetResourceLabel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreateButton$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/button/CreateButton.js [app-client] (ecmascript) <export default as CreateButton>");
;
;
;
;
;
;
const Empty = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className } = props;
    const { hasCreate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceDefinition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceDefinition"])(props);
    const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useResourceContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResourceContext"])(props);
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const getResourceLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$core$2f$useGetResourceLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetResourceLabel"])();
    const resourceName = translate(`resources.${resource}.forcedCaseName`, {
        smart_count: 0,
        _: resource ? getResourceLabel(resource, 0) : undefined
    });
    const emptyMessage = translate('ra.page.empty', {
        name: resourceName
    });
    const inviteMessage = translate('ra.page.invite');
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: className
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: EmptyClasses.message
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Inbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: EmptyClasses.icon
    }), __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "h4",
        paragraph: true
    }, translate(`resources.${resource}.empty`, {
        _: emptyMessage
    })), hasCreate && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
        variant: "body1"
    }, translate(`resources.${resource}.invite`, {
        _: inviteMessage
    }))), hasCreate && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: EmptyClasses.toolbar
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$button$2f$CreateButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreateButton$3e$__["CreateButton"], {
        variant: "contained"
    })));
};
const PREFIX = 'RaEmpty';
const EmptyClasses = {
    message: `${PREFIX}-message`,
    icon: `${PREFIX}-icon`,
    toolbar: `${PREFIX}-toolbar`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('span', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        flex: 1,
        [`& .${EmptyClasses.message}`]: {
            textAlign: 'center',
            margin: '0 1em',
            color: (theme.vars || theme).palette.text.disabled
        },
        [`& .${EmptyClasses.icon}`]: {
            width: '9em',
            height: '9em'
        },
        [`& .${EmptyClasses.toolbar}`]: {
            textAlign: 'center',
            marginTop: '2em'
        }
    })); //# sourceMappingURL=Empty.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListClasses",
    ()=>ListClasses,
    "ListView",
    ()=>ListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/useListContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Title.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListToolbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/pagination/Pagination.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListActions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$Empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/Empty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/Offline.js [app-client] (ecmascript)");
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
const defaultActions = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListActions"], null);
const defaultPagination = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$pagination$2f$Pagination$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], null);
const defaultEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$Empty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], null);
const DefaultComponent = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const defaultOffline = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$Offline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Offline"], null);
const ListView = (props)=>{
    const { actions = defaultActions, aside, filters, emptyWhileLoading, pagination = defaultPagination, children, className, component: Content = DefaultComponent, title, empty = defaultEmpty, render, offline = defaultOffline, error, ...rest } = props;
    const listContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$useListContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useListContext"])();
    const { defaultTitle, data, error: errorState, isPaused, isPending, isPlaceholderData, filterValues, resource, total, hasNextPage, hasPreviousPage } = listContext;
    const showOffline = isPaused && (isPending || isPlaceholderData) && offline !== false && offline !== undefined;
    const showError = errorState && error !== false && error !== undefined;
    if (!children && !render || !data && isPending && !isPaused && emptyWhileLoading) {
        return null;
    }
    const renderList = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ListClasses.main, {
                [ListClasses.noActions]: !(filters || actions) || showOffline || showError
            })
        }, filters || actions ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListToolbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListToolbar"], {
            className: ListClasses.actions,
            filters: filters,
            actions: actions
        }) : null, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Content, {
            className: ListClasses.content
        }, showOffline ? offline : showError ? error : render ? render(listContext) : children), !errorState && pagination !== false && pagination);
    const renderEmpty = ()=>empty !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", {
            className: ListClasses.noResults
        }, empty);
    const shouldRenderEmptyPage = !errorState && // the list is not loading data for the first time
    !isPending && // the API returned no data (using either normal or partial pagination)
    (total === 0 || total == null && hasPreviousPage === false && hasNextPage === false && // @ts-ignore FIXME total may be undefined when using partial pagination but the ListControllerResult type is wrong about it
    data.length === 0) && // the user didn't set any filters
    !Object.keys(filterValues).length && // there is an empty page component
    empty !== false;
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Root, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('list-page', className),
        ...rest
    }, title !== false && __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Title$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        title: title,
        defaultTitle: defaultTitle,
        preferenceKey: `${resource}.list.title`
    }), shouldRenderEmptyPage ? renderEmpty() : renderList(), aside);
};
const PREFIX = 'RaList';
const ListClasses = {
    main: `${PREFIX}-main`,
    content: `${PREFIX}-content`,
    actions: `${PREFIX}-actions`,
    noActions: `${PREFIX}-noActions`,
    noResults: `${PREFIX}-noResults`
};
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])('div', {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})(({ theme })=>({
        display: 'flex',
        [`& .${ListClasses.main}`]: {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column'
        },
        [`& .${ListClasses.content}`]: {
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                boxShadow: 'none'
            },
            overflow: 'inherit'
        },
        [`& .${ListClasses.noActions}`]: {
            marginTop: '1em'
        },
        [`& .${ListClasses.actions}`]: {},
        [`& .${ListClasses.noResults}`]: {
            flex: 1
        }
    })); //# sourceMappingURL=ListView.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/List.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "List",
    ()=>List
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/list/ListBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/list/ListView.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/layout/Loading.js [app-client] (ecmascript)");
;
;
;
;
;
const List = (props)=>{
    const { debounce, disableAuthentication, disableSyncWithLocation, exporter, filter = defaultFilter, filterDefaultValues, authLoading = defaultAuthLoading, loading, perPage = 10, queryOptions, resource, sort, storeKey, render, ...rest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: props,
        name: PREFIX
    });
    if (!props.render && !props.children) {
        throw new Error('<List> requires either a `render` prop or `children` prop');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$list$2f$ListBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListBase"], {
        debounce: debounce,
        disableAuthentication: disableAuthentication,
        disableSyncWithLocation: disableSyncWithLocation,
        exporter: exporter,
        filter: filter,
        filterDefaultValues: filterDefaultValues,
        authLoading: authLoading,
        loading: loading,
        perPage: perPage,
        queryOptions: queryOptions,
        resource: resource,
        sort: sort,
        storeKey: storeKey,
        // Disable offline support from ListBase as it is handled by ListView to keep the ListView container
        offline: false
    }, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$list$2f$ListView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListView"], {
        ...rest,
        render: render
    }));
};
const defaultFilter = {};
const defaultAuthLoading = __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$react$2d$admin$2f$node_modules$2f$ra$2d$ui$2d$materialui$2f$dist$2f$layout$2f$Loading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading"], null);
const PREFIX = 'RaList'; // Types declared in ListView.
 //# sourceMappingURL=List.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/NumberField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberField",
    ()=>NumberField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useFieldValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/genericMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/field/sanitizeFieldRestProps.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Display a numeric value as a locale string.
 *
 * Uses Intl.NumberFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs number as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @example
 * <NumberField source="score" />
 * // renders the record { id: 1234, score: 567 } as
 * <span>567</span>
 *
 * <NumberField source="score" className="red" />
 * // renders the record { id: 1234, score: 567 } as
 * <span class="red">567</span>
 *
 * <NumberField source="share" options={{ style: 'percent' }} />
 * // renders the record { id: 1234, share: 0.2545 } as
 * <span>25%</span>
 *
 * <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>$25.99</span>
 *
 * <NumberField source="price" locales="fr-FR" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>25,99 $US</span>
 */ const NumberFieldImpl = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, emptyText, source, locales, options, textAlign, transform = defaultTransform, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    let value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldValue"])(props);
    if (value == null) {
        return emptyText ? __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            component: "span",
            variant: "body2",
            className: className,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeFieldRestProps"])(rest)
        }, emptyText && translate(emptyText, {
            _: emptyText
        })) : null;
    }
    if (transform) {
        value = transform(value);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTypography, {
        variant: "body2",
        component: "span",
        className: className,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeFieldRestProps"])(rest)
    }, hasNumberFormat && typeof value === 'number' ? value.toLocaleString(locales, options) : value);
};
const defaultTransform = (value)=>value && typeof value === 'string' && !isNaN(value) ? +value : value;
// what? TypeScript loses the displayName if we don't set it explicitly
NumberFieldImpl.displayName = 'NumberFieldImpl';
const NumberField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genericMemo"])(NumberFieldImpl);
// @ts-expect-error This is a hack that replaces react support for defaultProps. We currently need this for the Datagrid.
NumberField.textAlign = 'right';
const hasNumberFormat = !!(typeof Intl === 'object' && Intl && typeof Intl.NumberFormat === 'function');
const PREFIX = 'RaNumberField';
const StyledTypography = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=NumberField.js.map
}),
"[project]/admin_react/node_modules/react-admin/node_modules/ra-ui-materialui/dist/field/TextField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextField",
    ()=>TextField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__ = __turbopack_context__.i("[project]/admin_react/node_modules/@mui/material/esm/styles/useThemeProps.js [app-client] (ecmascript) <export default as useThemeProps>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/useFieldValue.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/i18n/useTranslate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/util/genericMemo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin_react/node_modules/ra-core/dist/controller/field/sanitizeFieldRestProps.js [app-client] (ecmascript)");
;
;
;
;
;
const TextFieldImpl = (inProps)=>{
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useThemeProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useThemeProps$3e$__["useThemeProps"])({
        props: inProps,
        name: PREFIX
    });
    const { className, emptyText, ...rest } = props;
    const translate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$i18n$2f$useTranslate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslate"])();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$useFieldValue$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldValue"])(props);
    return __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](StyledTypography, {
        component: "span",
        variant: "body2",
        className: className,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$controller$2f$field$2f$sanitizeFieldRestProps$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeFieldRestProps"])(rest)
    }, value != null && typeof value !== 'string' ? value.toString() : value || (emptyText ? translate(emptyText, {
        _: emptyText
    }) : null));
};
// what? TypeScript loses the displayName if we don't set it explicitly
TextFieldImpl.displayName = 'TextFieldImpl';
const TextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f$ra$2d$core$2f$dist$2f$util$2f$genericMemo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genericMemo"])(TextFieldImpl);
const PREFIX = 'RaTextField';
const StyledTypography = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin_react$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
    name: PREFIX,
    overridesResolver: (props, styles)=>styles.root
})({}); //# sourceMappingURL=TextField.js.map
}),
]);

//# sourceMappingURL=3e0bc_ra-ui-materialui_dist_378721b3._.js.map