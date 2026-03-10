(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Marketplace/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DESARROLLADORES",
    ()=>DESARROLLADORES,
    "FILTER_OPTIONS",
    ()=>FILTER_OPTIONS,
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: "1",
        nombre: "Decó Polo",
        image: "/assets/images/proyectos/deco-polo.png",
        imagenVertical: "/assets/images/proyectos/vertical-1.png",
        logo: "/assets/images/proyectos/abv.png",
        desarrollador: "ABV Arquitectura",
        ubicacion: "Palermo, Buenos Aires",
        ubicacionType: "CABA",
        roi: "12-15% Anual",
        valorRoi: 15,
        minTicket: 120000,
        inversionMinima: 100,
        status: "Pre-venta",
        porcentajeFinanciacion: 20,
        plazo: 36,
        tags: [
            "Pre-venta",
            "Riesgo: Bajo"
        ],
        risk: "Bajo",
        proyectosCompletados: 5,
        montoGestionado: "+ $50M gestionados.",
        stars: 4.5,
        resumen: "Decó Polo presenta una nueva experiencia high-end en Buenos Aires, generando un nuevo legado en la ciudad.La arquitectura, el diseño y la naturaleza se unen de manera armónica para crear un espacio con identidad propia. Geometrías, juegos entre rectas y curvas sutiles. Cada detalle refleja sofisticación y funcionalidad."
    },
    {
        id: "2",
        nombre: "Mirabilia Hype",
        image: "/assets/images/proyectos/mirabilia-hype.png",
        imagenVertical: "/assets/images/proyectos/vertical-2.png",
        logo: "/assets/images/proyectos/mirabilia.png",
        desarrollador: "Mirabilia",
        ubicacion: "Chacarita, CABA, Buenos Aires.",
        ubicacionType: "CABA",
        roi: "12-15% Anual",
        valorRoi: 15,
        minTicket: 150000,
        inversionMinima: 100,
        status: "Construcción",
        porcentajeFinanciacion: 80,
        plazo: 36,
        tags: [
            "Construcción",
            "Riesgo: Medio"
        ],
        risk: "Medio",
        proyectosCompletados: 17,
        montoGestionado: "+ $50M gestionados.",
        stars: 4.5,
        resumen: "Un nuevo complejo residencial que fusiona naturaleza y modernidad en un equilibrio perfecto. Mirabilia Hype ofrece amenities exclusivos: 4 piscinas climatizadas, un gimnasio equipado con la tecnología más avanzada, espacio polideportivo cubierto, sectores para la relajación y una renovada oferta gastronómica. Cuenta con 4.000m2 de pulmón verde, el complejo ofrece unidades de 1, 2, 3 y 4 dormitorios, con superficies que van desde los 55 m² hasta los 285 m², adaptándose a diferentes estilos de vida."
    },
    {
        id: "3",
        nombre: "Open Buenavista",
        image: "/assets/images/proyectos/open-buenavista.png",
        imagenVertical: "/assets/images/proyectos/vertical-3.png",
        logo: "/assets/images/proyectos/portland.png",
        desarrollador: "Portland",
        ubicacion: "Don Francisco y Av. Uruguay, San Fernando, Argentina.",
        ubicacionType: "Interior",
        roi: "12-15% Anual",
        valorRoi: 15,
        minTicket: 100000,
        inversionMinima: 100,
        status: "Planificación",
        porcentajeFinanciacion: 100,
        plazo: 36,
        tags: [
            "Planificación",
            "Riesgo: Bajo"
        ],
        risk: "Bajo",
        proyectosCompletados: 17,
        montoGestionado: "+ $50M gestionados.",
        stars: 4,
        resumen: "Ubicado en un punto estratégico de Acceso Norte y rodeado de comercios, deporte, gastronomía y servicios. OPEN Buenavista te permite moverte fácil, trabajar con comodidad y disfrutar cada momento con más libertad. Un proyecto de cuatro edificios, PB + 8 pisos, con unidades de categoría de 2, 3 y 4 ambientes. Superficies amplias y balcones aterrazados que amplían la experiencia de vivir adentro y afuera. OPEN propone un estilo de vida auténtico, flexible y lleno de posibilidades."
    },
    {
        id: "4",
        nombre: "Nómada Parque",
        image: "/assets/images/proyectos/nomada-parque.png",
        imagenVertical: "/assets/images/proyectos/vertical-4.png",
        logo: "/assets/images/proyectos/grupo-nomada.png",
        desarrollador: "Grupo Nómada",
        ubicacion: "Nuñez, CABA, Argentina",
        ubicacionType: "CABA",
        roi: "12-15% Anual",
        valorRoi: 15,
        minTicket: 80000,
        inversionMinima: 100,
        status: "Pre-venta",
        porcentajeFinanciacion: 60,
        plazo: 36,
        tags: [
            "Pre-venta",
            "Riesgo: Alto"
        ],
        risk: "Alto",
        proyectosCompletados: 13,
        montoGestionado: "+ $50M gestionados.",
        stars: 4,
        resumen: "Más de 20.000 m² destinados a la construcción de un novedoso proyecto en Parque de Innovación, en el barrio de Núñez, una de las zonas más distinguidas de la Ciudad Autónoma de Buenos Aires. Este desarrollo residencial presenta más de 750 m² dedicados a locales comerciales y gastronómicos, terraza con espejo de agua y vegetación, y más de 400 m² de amenities. ✓ Parking comercial✓ 3 subsuelos de cocheras✓ Propuesta de servicios y experiencias a través de nuestro programa ALDEA®"
    },
    {
        id: "5",
        nombre: "One Residential Tower",
        image: "/assets/images/proyectos/one-residential-tower.png",
        imagenVertical: "/assets/images/proyectos/vertical-5.png",
        logo: "/assets/images/proyectos/tsf.png",
        desarrollador: "TSF Desarrollos",
        ubicacion: "Avenida Maipú, Vicente López, CABA",
        ubicacionType: "CABA",
        roi: "12,5% Anual",
        valorRoi: 12.5,
        minTicket: 80000,
        inversionMinima: 100,
        status: "Pre-venta",
        porcentajeFinanciacion: 50,
        plazo: 36,
        tags: [
            "Pre-venta",
            "Riesgo: Alto"
        ],
        risk: "Alto",
        proyectosCompletados: 13,
        montoGestionado: "+ $50M gestionados.",
        stars: 4,
        resumen: "One Residential Tower es un excepcional desarrollo inmobiliario ubicado estraté-gicamente en un lote de 1200 m2 en el corredor de la avenida Maipú en Vicente López. Este proyecto se destaca por ofre-cer 90 unidades de 2 y 3 ambientes, que varían en tamaño de 55 a 93 m2. Cada unidad ha sido cuidadosamente diseñada para ofrecer una experiencia de vida premium. ONE Residential Tower se alza en Vicente López, rodeado de áreas verdes y a solo unas cuadras del Río de la Plata, con vistas panorámicas y la serenidad de este entorno único."
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
        "Terminado",
        "Planificación",
        "Pre-venta",
        "Construcción"
    ],
    roi: [
        "25%",
        "50%",
        "13%",
        "12-15%"
    ],
    plazo: [
        "12 meses",
        "18 meses",
        "24 meses",
        "36 meses"
    ]
};
const DESARROLLADORES = [
    {
        id: "1",
        nombre: "ABV Arquitectura",
        logo: "/assets/images/proyectos/abv.png",
        proyectos: 54,
        montoGestionado: "+ $50M gestionados.",
        rating: 4.5,
        descripcion: "ABV es una empresa de arquitectura con sede en Argentina y especializada en inversiones inmobiliarias. Cuenta con más de 35 años de trayectoria. Ha desarrollado más de 54 emprendimientos propios y para inversores en diversas escalas. Las inversiones inmobiliarias desarrolladas por el grupo han sido éxito de ventas y han representado importantes tasas de retorno para el inversor."
    },
    {
        id: "2",
        nombre: "Mirabilia",
        logo: "/assets/images/proyectos/mirabilia.png",
        proyectos: 17,
        montoGestionado: "+ $50M gestionados.",
        rating: 4.5,
        descripcion: "Somos arquitectos que desarrollamos nuestros productos de principio a fin, con la responsabilidad y el respeto que nos genera ser conscientes del impacto futuro de todo lo que hacemos hoy. Creemos que la buena arquitectura y el buen desarrollo logran productos que se valorizan con el tiempo, y a la vez revaloriza su entorno. Tenemos más de 38 años en el mercado. "
    },
    {
        id: "3",
        nombre: "Portland",
        logo: "/assets/images/proyectos/portland.png",
        proyectos: 17,
        montoGestionado: "+ $50M gestionados.",
        rating: 4.5,
        descripcion: "Más de 20 años de experiencia en el mercado de la construcción. Somos una empresa constructora y desarrolladora, innovadora y disruptiva. Nuestro equipo de profesionales lo acompañan en cada etapa del proceso y adaptan los recursos a la medida de sus necesidades. Desde la locación hasta la comercialización del proyecto. Ideamos tus espacios.Construimos el futuro. Creamos experiencias "
    },
    {
        id: "4",
        nombre: "Grupo Nómada",
        logo: "/assets/images/proyectos/grupo-nomada.png",
        proyectos: 17,
        montoGestionado: "+ $50M gestionados.",
        rating: 4.5,
        descripcion: "Desde hace más de una década, nos enfocamos en el desarrollo inmobiliario de edificios de alto impacto, dedicándonos a la creación de entornos distintivos que incluyen espacios corporativos, residenciales, hoteleros y comerciales en Argentina, España y Estados Unidos. Abarcamos todas las etapas del proceso: identificamos tierra, proyectamos, dirigimos, gestionamos y comercializamos cada una de nuestras obras, demostrando un fuerte compromiso con el diseño y la calidad constructiva."
    },
    {
        id: "5",
        nombre: "TSF Desarrollos",
        logo: "/assets/images/proyectos/tsf.png",
        proyectos: 13,
        montoGestionado: "+ $50M gestionados.",
        rating: 4.5,
        descripcion: "Realizamos desarrollos inmobiliarios de alta calidad constructiva para clientes que buscan un diferencial. Afianzamos el ejercicio de una práctica arquitectónica colaborativa, desarrollando un amplio abanico de proyectos. Combinando creatividad y profesionalidad, abarcamos los campos de la arquitectura, el urbanismo y el diseño de interiores, dominando todas las fases del proceso del proyecto, desde los estudios preliminares hasta la finalización y la supervisión de la obra."
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function BottomNavigation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 z-20 flex items-end justify-around border-t border-gray-200 bg-white py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex flex-col items-center gap-1 p-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/svg/bookmark.svg",
                        width: 24,
                        height: 24,
                        alt: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 8,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-light-text font-bold",
                        children: "Guardados"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex flex-col items-center gap-1 p-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/svg/maletin2.svg",
                        width: 24,
                        height: 24,
                        alt: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-light-text font-bold",
                        children: "Inversiones"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex flex-col items-center gap-1 relative -top-6 border-gray-200 `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/logo/buildin_icon_blue.png",
                        width: 100,
                        height: 100,
                        alt: "Buildin",
                        className: "rounded-full bg-white absolute -top-12 border-t-2"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-core-blue font-bold",
                        children: "Explorar"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex flex-col items-center gap-1 p-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/svg/settings.svg",
                        width: 24,
                        height: 24,
                        alt: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-light-text font-bold",
                        children: "Configuracion"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex flex-col items-center gap-1 p-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/svg/soporte.svg",
                        width: 24,
                        height: 24,
                        alt: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-light-text font-bold",
                        children: "Soporte"
                    }, void 0, false, {
                        fileName: "[project]/components/BottomNavigation.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BottomNavigation.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = BottomNavigation;
function NavItem({ icon: Icon, label, active = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `flex flex-col items-center gap-1 p-2 ${active ? 'text-(--color-core-blue)' : 'text-gray-400'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: `h-6 w-6 ${active ? 'fill-current' : ''}`,
                strokeWidth: 2
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/BottomNavigation.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BottomNavigation.tsx",
        lineNumber: 33,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-client] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Marketplace/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BottomNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function MarketplaceHorizontal() {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-col gap-8 py-6 pl-6",
                children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-manrope font-semibold text-core-black md:px-6",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex overflow-x-auto pb-4 md:px-6 scrollbar-hide gap-3",
                                children: section.data.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                        project: project
                                    }, project.id, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 30,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 28,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = MarketplaceHorizontal;
function ProjectCard({ project }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/proyectos/${project.id}`,
        className: "relative flex-none w-11/12 md:w-2xs snap-center rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden last:mr-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-core-blue shadow-sm hover:bg-gray-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                    className: "h-4 w-4 fill-none"
                }, void 0, false, {
                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-end h-48 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: project.image,
                        alt: project.nombre,
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 p-2",
                        children: project.tags?.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "z-10 flex items-center gap-2 bg-gris-ui rounded-full px-4 py-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-core-black font-inter font-medium text-xs",
                                    children: tag
                                }, void 0, false, {
                                    fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 63,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center absolute right-4 -bottom-12 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: project.logo,
                                alt: project.desarrollador,
                                width: 85,
                                height: 85,
                                className: "z-20 rounded-full "
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/stars.png",
                                alt: "rating",
                                width: 85,
                                height: 85,
                                className: ""
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 52,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-manrope font-semibold text-core-black leading-tight w-3/4",
                                children: project.nombre
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "13",
                                        height: "15",
                                        fill: "none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#555D6D",
                                                d: "M10.714 5.798a4.69 4.69 0 0 0-4.452-4.452L6.03 1.34a4.69 4.69 0 0 0-4.69 4.69c0 1.447.815 3.006 1.875 4.398 1.023 1.345 2.198 2.433 2.815 2.969.617-.536 1.792-1.624 2.815-2.969 1.06-1.392 1.875-2.951 1.875-4.398l-.006-.232Zm1.346.232c0 1.899-1.04 3.754-2.148 5.21-.983 1.29-2.084 2.352-2.773 2.967l-.268.235a1.34 1.34 0 0 1-.732.293l-.109.005a1.34 1.34 0 0 1-.716-.207l-.09-.062-.035-.029c-.64-.552-1.918-1.727-3.041-3.203C1.04 9.784 0 7.93 0 6.03a6.03 6.03 0 1 1 12.06 0Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 100
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#555D6D",
                                                d: "M7.372 6.04a1.34 1.34 0 1 0-2.68 0 1.34 1.34 0 0 0 2.68 0Zm1.34 0a2.68 2.68 0 1 1-5.36 0 2.68 2.68 0 0 1 5.36 0Z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                                lineNumber: 80,
                                                columnNumber: 600
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-light-text font-inter font-medium",
                                        children: project.ubicacion
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-light-text font-inter text-sm",
                            children: [
                                "Desarrolla: ",
                                project.desarrollador
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/svg/maletin.svg",
                                alt: "",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-light-text font-inter text-sm",
                                children: [
                                    project.proyectosCompletados,
                                    " proyectos completados"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 89,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/images/svg/estadistica.svg",
                                alt: "",
                                width: 16,
                                height: 16
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 92,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-light-text font-inter text-sm",
                                children: project.montoGestionado
                            }, void 0, false, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/images/svg/roi.svg",
                                        alt: "",
                                        width: 22,
                                        height: 22
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-dark-text font-inter text-sm font-semibold",
                                        children: "ROI Objetivo: "
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-dark-text font-inter text-sm",
                                        children: project.roi
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/images/svg/plazo.svg",
                                        alt: "",
                                        width: 20,
                                        height: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-dark-text font-inter text-sm font-semibold",
                                        children: "Plazo: "
                                    }, void 0, false, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-dark-text font-inter text-sm",
                                        children: [
                                            project.plazo,
                                            " meses "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                        lineNumber: 105,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                                lineNumber: 102,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Marketplace/MarketplaceHorizontal.tsx",
        lineNumber: 45,
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
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Marketplace/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header({ showSearch = true }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const handleSearch = ()=>{
        // Build query params
        const params = new URLSearchParams();
        if (searchQuery) params.set('q', searchQuery);
        if (selectedFilters.ubicacion) params.set('ubicacion', selectedFilters.ubicacion);
        if (selectedFilters.estado) params.set('estado', selectedFilters.estado);
        if (selectedFilters.roi) params.set('roi', selectedFilters.roi);
        if (selectedFilters.plazo) params.set('plazo', selectedFilters.plazo);
        // Navigate to search page
        router.push(`/busqueda?${params.toString()}`);
        setIsExpanded(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-4 md:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-7xl items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/images/logo/logo_blue.png",
                                    alt: "Building Logo",
                                    width: 180,
                                    height: 65
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-12 w-12 relative rounded-full overflow-hidden border border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/images/avatar.png",
                                            className: "object-cover",
                                            fill: true,
                                            alt: "User"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 61,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/assets/images/svg/campana.svg",
                                                alt: "Campana",
                                                width: 20,
                                                height: 20
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 65,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-2 pt-4 md:px-6 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsExpanded(true),
                                    className: "w-full text-left rounded-lg bg-gray-100 py-2.5 pl-9 pr-4 text-sm text-gray-400 hover:bg-gray-200 transition-colors",
                                    children: "Buscar Proyectos"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 69,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 h-screen bg-white/95 backdrop-blur-md transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`,
                style: {
                    zIndex: 100
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto py-12 px-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-manrope font-semibold text-dark-text",
                                        children: "Buscar Proyectos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsExpanded(false),
                                        className: "p-2 bg-gray-100 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-6 w-6 text-gray-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 98,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 104,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar por nombre o ubicación...",
                                        className: "w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-dark-text shadow-sm focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        autoFocus: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 103,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-manrope font-medium text-dark-text mb-4",
                                        children: "Filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 117,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveDropdown(activeDropdown === "ubicacion" ? null : "ubicacion"),
                                                        className: `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.ubicacion ? "bg-core-blue text-white" : "bg-gris-ui text-core-blue"}`,
                                                        children: [
                                                            selectedFilters.ubicacion || "Ubicación",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 37
                                                    }, this),
                                                    activeDropdown === "ubicacion" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].ubicacion.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFilter("ubicacion", opt),
                                                                className: "block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter",
                                                                children: opt
                                                            }, opt, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 121,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveDropdown(activeDropdown === "estado" ? null : "estado"),
                                                        className: `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.estado ? "bg-core-blue text-white" : "bg-gris-ui text-core-blue"}`,
                                                        children: [
                                                            selectedFilters.estado ? `${selectedFilters.estado.split("-")[0]}` : "Estado",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 37
                                                    }, this),
                                                    activeDropdown === "estado" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].estado.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFilter("estado", opt),
                                                                className: "block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter",
                                                                children: opt
                                                            }, opt, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 148,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveDropdown(activeDropdown === "roi" ? null : "roi"),
                                                        className: `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.roi ? "bg-core-blue text-white" : "bg-gris-ui text-core-blue"}`,
                                                        children: [
                                                            selectedFilters.roi ? `ROI ${selectedFilters.roi}` : "ROI",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 37
                                                    }, this),
                                                    activeDropdown === "roi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].roi.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFilter("roi", opt),
                                                                className: "block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter",
                                                                children: opt
                                                            }, opt, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 175,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveDropdown(activeDropdown === "plazo" ? null : "plazo"),
                                                        className: `flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.plazo ? "bg-core-blue text-white" : "bg-gris-ui text-core-blue"}`,
                                                        children: [
                                                            selectedFilters.plazo || "Plazo",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 37
                                                    }, this),
                                                    activeDropdown === "plazo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Marketplace$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILTER_OPTIONS"].plazo.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleFilter("plazo", opt),
                                                                className: "block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter",
                                                                children: opt
                                                            }, opt, false, {
                                                                fileName: "[project]/components/Header.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this),
                                    (selectedFilters.ubicacion || selectedFilters.estado || selectedFilters.roi || selectedFilters.plazo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedFilters({
                                                ubicacion: null,
                                                estado: null,
                                                roi: null,
                                                plazo: null
                                            }),
                                        className: "mt-4 text-sm text-core-blue hover:text-blue-700 font-medium font-inter",
                                        children: "Limpiar filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 231,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSearch,
                                className: "w-full bg-core-blue text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-colors font-manrope text-lg",
                                children: "Buscar"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 90,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
_s(Header, "d4bFls+VjaU8qLHmLl2RuVRwfVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_cc91131d._.js.map