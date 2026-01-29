(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Marketplace/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FILTER_OPTIONS",
    ()=>FILTER_OPTIONS,
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: "1",
        name: "Grand View Residences",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        location: "M. T. Alvear 1888, Recoleta, Argentina",
        locationType: "CABA",
        roi: "12-15% Anual",
        roiValue: 15,
        minTicket: 150000,
        status: "Obra - Avanzado",
        financedPercentage: 80,
        termMonths: 24,
        tags: [
            "Pre-venta"
        ],
        risk: "Bajo"
    },
    {
        id: "2",
        name: "Torre Madero Center",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
        location: "Juana Manso 555, Capital Federal, Argentina",
        locationType: "CABA",
        roi: "12-10% Anual",
        roiValue: 12,
        minTicket: 120000,
        status: "Obra - Comienzo",
        financedPercentage: 20,
        termMonths: 18,
        tags: [
            "Pozo"
        ],
        risk: "Medio"
    },
    {
        id: "3",
        name: "Horizonte Norte",
        image: "https://images.unsplash.com/photo-1570129477492-45f003fdd66b?q=80&w=2670&auto=format&fit=crop",
        location: "Av. Libertador 2400, Olivos, Buenos Aires",
        locationType: "Interior",
        roi: "10-12% Anual",
        roiValue: 12,
        minTicket: 100000,
        status: "Terminado",
        financedPercentage: 100,
        termMonths: 12,
        tags: [
            "Terminado",
            "Rentabilidad"
        ],
        risk: "Bajo"
    },
    {
        id: "4",
        name: "Edificio Park View",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2670&auto=format&fit=crop",
        location: "Calle 50 y 12, La Plata, Buenos Aires",
        locationType: "Interior",
        roi: "15-18% Anual",
        roiValue: 18,
        minTicket: 80000,
        status: "Obra - Avanzado",
        financedPercentage: 60,
        termMonths: 24,
        tags: [
            "Pre-venta"
        ],
        risk: "Medio"
    }
];
const FILTER_OPTIONS = {
    ubicacion: [
        "CABA",
        "Interior",
        "Otro"
    ],
    estado: [
        "Obra - Avanzado",
        "Obra - Comienzo",
        "Terminado"
    ],
    roi: [
        "25%",
        "50%",
        "13%"
    ],
    plazo: [
        "12 meses",
        "18 meses",
        "24 meses"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BottomNavigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
;
;
function BottomNavigation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-gray-200 bg-white py-2 pb-safe",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
                label: "Explorar",
                active: true
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"],
                label: "Guardados"
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                label: "Inversiones"
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                label: "Configuración"
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
                label: "Soporte"
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BottomNavigation.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = BottomNavigation;
function NavItem({ icon: Icon, label, active = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `flex flex-col items-center gap-1 p-2 ${active ? 'text-[var(--color-core-blue)]' : 'text-gray-400'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: `h-6 w-6 ${active ? 'fill-current' : ''}`,
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BottomNavigation.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_c1 = NavItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "BottomNavigation");
__turbopack_context__.k.register(_c1, "NavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Marketplace/MarketplaceHorizontal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MarketplaceHorizontal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Marketplace/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BottomNavigation.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MarketplaceHorizontal() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const sections = [
        {
            title: "Proyectos de Inversión",
            data: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"]
        },
        {
            title: "Proyectos Tendencia",
            data: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"]
            ].reverse()
        },
        {
            title: "Porque te interesa",
            data: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].slice(0, 2)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen md:max-w-7xl md:mx-auto bg-gray-50 pb-24 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-4 py-3 shadow-sm md:px-6 top-[72px] z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Buscar Proyectos",
                            className: "w-full rounded-lg bg-gray-100 py-2.5 pl-9 pr-4 text-sm text-[var(--color-black)] placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-[var(--color-blue-accent)]",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                            lineNumber: 29,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col gap-8 py-6",
                children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "px-4 text-xl font-bold text-[var(--color-black)] md:px-6",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto px-4 pb-4 md:px-6 scrollbar-hide snap-x gap-4",
                                children: section.data.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: project
                                    }, project.id, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 41,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_s(MarketplaceHorizontal, "4/Qdl0R3tQNJqUS4eMrvY/uMU/4=");
_c = MarketplaceHorizontal;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-none w-[280px] snap-center rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-core-blue)] shadow-sm hover:bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                    className: "h-4 w-4 fill-none"
                }, void 0, false, {
                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-40 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: project.image,
                    alt: project.name,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-[var(--color-black)] leading-tight",
                                children: project.name
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 mt-1 text-gray-500 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: project.location
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            project.tags?.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded-full bg-purple-50 text-[10px] font-medium text-[var(--color-violet-accent)]",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)),
                            project.risk && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-medium text-[var(--color-blue-accent)]",
                                children: [
                                    "Riesgo: ",
                                    project.risk
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 96,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 font-medium",
                                        children: "Financiado:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-black)] font-bold",
                                        children: [
                                            project.financedPercentage,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 106,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 104,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 w-full bg-gray-100 rounded-full overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-[var(--color-blue-accent)] rounded-full",
                                    style: {
                                        width: `${project.financedPercentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-1 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500",
                                        children: "ROI objetivo:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-[var(--color-black)]",
                                        children: project.roi
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 120,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500",
                                        children: "Plazo:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 123,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-bold text-[var(--color-black)]",
                                        children: [
                                            project.termMonths,
                                            " meses"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_c1 = ProjectCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarketplaceHorizontal");
__turbopack_context__.k.register(_c1, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Marketplace/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Marketplace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Marketplace/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Marketplace() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFilters, setSelectedFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ubicacion: null,
        estado: null,
        roi: null,
        plazo: null
    });
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFilter = (category, value)=>{
        setSelectedFilters((prev)=>({
                ...prev,
                [category]: prev[category] === value ? null : value
            }));
        setActiveDropdown(null);
    };
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Marketplace.useMemo[filteredProjects]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROJECTS"].filter({
                "Marketplace.useMemo[filteredProjects]": (project)=>{
                    // Search Filter
                    if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase()) && !project.location.toLowerCase().includes(searchQuery.toLowerCase())) {
                        return false;
                    }
                    // Category Filters
                    if (selectedFilters.ubicacion && project.locationType !== selectedFilters.ubicacion) return false;
                    // Strict status matching or mapping? Assuming exact match for now based on options
                    if (selectedFilters.estado) {
                        // The mock data provided has statuses that might not exactly match the filter display text logic
                        // But let's assume direct string matching for simplicity or partial match
                        if (!project.status.includes(selectedFilters.estado.split(" - ")[0])) return true; // Loose matching for demo purposes if exact match fails
                        if (project.status !== selectedFilters.estado) return false;
                    }
                    // ROI Logic - complex because "13%" string vs number. 
                    // For this demo, let's implement a simple logic: if filter is 13%, show projects with ROI >= 13%
                    if (selectedFilters.roi) {
                        const filterRoi = parseInt(selectedFilters.roi.replace("%", ""));
                        if (project.roiValue < filterRoi) return false;
                    }
                    // Plazo Logic
                    if (selectedFilters.plazo) {
                        const filterMonths = parseInt(selectedFilters.plazo.split(" ")[0]);
                        if (project.termMonths !== filterMonths) return false;
                    }
                    return true;
                }
            }["Marketplace.useMemo[filteredProjects]"]);
        }
    }["Marketplace.useMemo[filteredProjects]"], [
        searchQuery,
        selectedFilters
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 pb-20 font-sans",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-7xl px-4 py-6 md:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/components/Marketplace/index.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Buscar Proyectos",
                            className: "w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-[var(--color-black)] shadow-sm focus:border-[var(--color-blue-accent)] focus:outline-hidden focus:ring-1 focus:ring-[var(--color-blue-accent)]",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Marketplace/index.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Marketplace/index.tsx",
                    lineNumber: 84,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-semibold text-[var(--color-black)]",
                                    children: "Filtros Aplicados"
                                }, void 0, false, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                    className: "h-4 w-4 text-[var(--color-core-blue)]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Marketplace/index.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveDropdown(activeDropdown === "ubicacion" ? null : "ubicacion"),
                                            className: `flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.ubicacion ? "bg-[var(--color-core-blue)] text-white" : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"}`,
                                            children: [
                                                selectedFilters.ubicacion || "Ubicación",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 105,
                                            columnNumber: 29
                                        }, this),
                                        activeDropdown === "ubicacion" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].ubicacion.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleFilter("ubicacion", opt),
                                                    className: "block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50",
                                                    children: opt
                                                }, opt, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 116,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveDropdown(activeDropdown === "estado" ? null : "estado"),
                                            className: `flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.estado ? "bg-[var(--color-core-blue)] text-white" : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"}`,
                                            children: [
                                                selectedFilters.estado ? `Estado: ${selectedFilters.estado.split("-")[0]}` : "Estado",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 132,
                                            columnNumber: 29
                                        }, this),
                                        activeDropdown === "estado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full mt-1 z-20 w-40 rounded-lg border border-gray-100 bg-white py-1 shadow-lg",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].estado.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleFilter("estado", opt),
                                                    className: "block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50",
                                                    children: opt
                                                }, opt, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 143,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 131,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveDropdown(activeDropdown === "roi" ? null : "roi"),
                                            className: `flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.roi ? "bg-[var(--color-core-blue)] text-white" : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"}`,
                                            children: [
                                                selectedFilters.roi ? `ROI ${selectedFilters.roi}` : "ROI",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this),
                                        activeDropdown === "roi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].roi.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleFilter("roi", opt),
                                                    className: "block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50",
                                                    children: opt
                                                }, opt, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 170,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveDropdown(activeDropdown === "plazo" ? null : "plazo"),
                                            className: `flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.plazo ? "bg-[var(--color-core-blue)] text-white" : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"}`,
                                            children: [
                                                selectedFilters.plazo || "Plazo",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, this),
                                        activeDropdown === "plazo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].plazo.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleFilter("plazo", opt),
                                                    className: "block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50",
                                                    children: opt
                                                }, opt, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 197,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 185,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Marketplace/index.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Marketplace/index.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-xl font-bold text-[var(--color-black)]",
                    children: "Resultados de búsqueda"
                }, void 0, false, {
                    fileName: "[project]/components/Marketplace/index.tsx",
                    lineNumber: 214,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                    children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative overflow-hidden rounded-2xl bg-white shadow-xs transition-shadow hover:shadow-md border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-xs hover:bg-white hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/index.tsx",
                                        lineNumber: 222,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 221,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48 w-full overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.name,
                                            fill: true,
                                            className: "object-cover transition-transform duration-300 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 227,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-black)] shadow-xs backdrop-blur-xs hover:bg-white",
                                            children: "Ver más"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 233,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 226,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-1 text-base font-bold text-[var(--color-black)]",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 240,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex items-start gap-1.5 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "mt-0.5 h-3 w-3 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "line-clamp-2",
                                                    children: project.location
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 241,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-3.5 w-3.5 text-[var(--color-blue-accent)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 248,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-[var(--color-black)]",
                                                            children: [
                                                                "ROI: ",
                                                                project.roi
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                            className: "h-3.5 w-3.5 text-[var(--color-blue-accent)]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: [
                                                                "Ticket mínimo: ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold text-[var(--color-black)]",
                                                                    children: [
                                                                        "$",
                                                                        project.minTicket.toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                                    lineNumber: 253,
                                                                    columnNumber: 88
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 246,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-block rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600",
                                                children: [
                                                    "Estado: ",
                                                    project.status
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Marketplace/index.tsx",
                                                lineNumber: 259,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 258,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-1 flex items-center justify-between text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-[var(--color-black)]",
                                                            children: "Financiado"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 267,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-[var(--color-black)]",
                                                            children: [
                                                                project.financedPercentage,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Marketplace/index.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-1.5 w-full overflow-hidden rounded-full bg-gray-100",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-full rounded-full bg-[var(--color-blue-accent)]",
                                                        style: {
                                                            width: `${project.financedPercentage}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Marketplace/index.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 265,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex-1 rounded-lg bg-[var(--color-core-blue)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900",
                                                    children: "Invertir"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-core-blue)] text-[var(--color-core-blue)] transition-colors hover:bg-blue-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Marketplace/index.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Marketplace/index.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Marketplace/index.tsx",
                                            lineNumber: 279,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Marketplace/index.tsx",
                                    lineNumber: 239,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/components/Marketplace/index.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Marketplace/index.tsx",
                    lineNumber: 217,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Marketplace/index.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Marketplace/index.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(Marketplace, "yLDZDiCn0PSaXs2y6MfCBSYGobQ=");
_c = Marketplace;
var _c;
__turbopack_context__.k.register(_c, "Marketplace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_2f849003._.js.map