(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/InvestmentProcess/MontoInversion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MontoInversion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/id-card.js [app-client] (ecmascript) <export default as IdCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/api-utils/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// ── Step indicator ────────────────────────────────────────────────────────────
const STEPS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
        label: "Monto de Inversión"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__["IdCard"],
        label: "Verificación de Identidad"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"],
        label: "Confirmación"
    }
];
function StepIndicator({ activeStep }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 px-4 py-5",
        children: STEPS.map((step, idx)=>{
            const Icon = step.icon;
            const isActive = idx === activeStep;
            const isPast = idx < activeStep;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${isActive ? "border-blue-accent bg-blue-50 text-blue-accent" : isPast ? "border-green-400 bg-green-50 text-green-500" : "border-gray-200 bg-white text-gray-300"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                            lineNumber: 33,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 25,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-inter text-sm transition-colors ${isActive ? "font-semibold text-blue-accent" : isPast ? "text-green-500" : "text-gray-400"}`,
                        children: step.label
                    }, void 0, false, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 24,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = StepIndicator;
// ── Quick-select amounts ──────────────────────────────────────────────────────
const QUICK_AMOUNTS = [
    100,
    250,
    500
];
// ── Fees (static in this mockup) ─────────────────────────────────────────────
const BUILDIN_FEE = 5;
const PARTNER_FEE = 2;
const ESTIMATED_ROI = "12-15%";
function MontoInversion({ onBack, onContinue }) {
    _s();
    const [rawValue, setRawValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [accepted, setAccepted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const numericAmount = parseFloat(rawValue) || 0;
    const total = numericAmount > 0 ? numericAmount + BUILDIN_FEE + PARTNER_FEE : 0;
    function handleQuickSelect(amount) {
        setRawValue(String(amount));
    }
    function handleInputChange(e) {
        // Allow only numbers and a single decimal point
        const val = e.target.value.replace(/[^0-9.]/g, "");
        const parts = val.split(".");
        const sanitized = parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : val;
        setRawValue(sanitized);
    }
    const canContinue = numericAmount > 0 && accepted;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 flex items-center bg-white px-6 pt-12 pb-6 border-b border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors",
                        "aria-label": "Volver",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 97,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-manrope font-semibold text-dark-text ml-3 text-base",
                        children: "Monto de Inversión"
                    }, void 0, false, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-100 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                    activeStep: 0
                }, void 0, false, {
                    fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-6 py-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "monto-inversion",
                                className: "block font-manrope font-semibold text-dark-text mb-2",
                                children: "Monto de Inversión"
                            }, void 0, false, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "monto-inversion",
                                    type: "text",
                                    inputMode: "decimal",
                                    value: rawValue,
                                    onChange: handleInputChange,
                                    placeholder: "Ej: $100",
                                    className: "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-right font-inter text-dark-text placeholder:text-gray-400 focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20 transition"
                                }, void 0, false, {
                                    fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 font-inter text-xs text-light-text",
                                children: "Ingresa el monto que deseas invertir."
                            }, void 0, false, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: QUICK_AMOUNTS.map((amount)=>{
                            const isSelected = numericAmount === amount;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleQuickSelect(amount),
                                className: `flex-1 rounded-xl border py-2.5 font-inter text-sm font-semibold transition-all ${isSelected ? "border-blue-accent bg-blue-accent text-white shadow-md shadow-blue-200" : "border-blue-accent text-blue-accent hover:bg-blue-50"}`,
                                children: [
                                    "$",
                                    amount
                                ]
                            }, amount, true, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 145,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl bg-gray-50 p-5 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-manrope font-bold text-dark-text text-base",
                                children: "Resumen de Inversión"
                            }, void 0, false, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                        label: "ROI Estimado",
                                        value: ESTIMATED_ROI
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 167,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                        label: "Comisión BuildIn",
                                        value: `$${BUILDIN_FEE}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SummaryRow, {
                                        label: "Comisión del Socio",
                                        value: `$${PARTNER_FEE}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-manrope font-bold text-dark-text",
                                                children: "Total a Pagar"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-manrope font-bold text-blue-accent text-lg",
                                                children: numericAmount > 0 ? `$${total}` : "$0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-start gap-3 cursor-pointer select-none group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mt-0.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "terminos",
                                        type: "checkbox",
                                        checked: accepted,
                                        onChange: (e)=>setAccepted(e.target.checked),
                                        className: "peer sr-only"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 186,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-5 w-5 rounded border-2 transition-colors flex items-center justify-center ${accepted ? "border-blue-accent bg-blue-accent" : "border-gray-300 bg-white group-hover:border-blue-accent/60"}`,
                                        children: accepted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-3 w-3 text-white stroke-[3]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                            lineNumber: 200,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 194,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-inter text-xs text-light-text leading-relaxed",
                                children: [
                                    "Al Continuar acepto los",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-blue-accent underline font-medium hover:text-blue-700 transition-colors",
                                        children: "términos y condiciones"
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 205,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    "y entiendo los",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-blue-accent underline font-medium hover:text-blue-700 transition-colors",
                                        children: "riesgos asociados a la inversión."
                                    }, void 0, false, {
                                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                        lineNumber: 212,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                                lineNumber: 203,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>canContinue && onContinue?.(numericAmount) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])('/proyectos/1/invertir/verificacion-identidad'),
                    disabled: !canContinue,
                    className: `w-full rounded-2xl py-4 font-manrope font-semibold text-white text-base transition-all ${canContinue ? "bg-blue-accent shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95" : "bg-blue-accent/40 cursor-not-allowed"}`,
                    children: "Continuar"
                }, void 0, false, {
                    fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                    lineNumber: 224,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
_s(MontoInversion, "h/EfWmG4Yl9EKoX8QHvIeJp4H2M=");
_c1 = MontoInversion;
// ── Helper ────────────────────────────────────────────────────────────────────
function SummaryRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-inter text-sm text-light-text",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 244,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-manrope text-sm font-semibold text-dark-text",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
                lineNumber: 245,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/InvestmentProcess/MontoInversion.tsx",
        lineNumber: 243,
        columnNumber: 9
    }, this);
}
_c2 = SummaryRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StepIndicator");
__turbopack_context__.k.register(_c1, "MontoInversion");
__turbopack_context__.k.register(_c2, "SummaryRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_InvestmentProcess_MontoInversion_tsx_194f2835._.js.map