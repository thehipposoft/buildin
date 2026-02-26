"use client";

import React, { useState } from "react";
import { ArrowLeft, Tag, IdCard, Check } from "lucide-react";
import { useRouter } from "next/navigation";

// ── Step indicator ────────────────────────────────────────────────────────────

const STEPS = [
    { icon: Tag, label: "Monto de Inversión" },
    { icon: IdCard, label: "Verificación de Identidad" },
    { icon: Check, label: "Confirmación" },
];

function StepIndicator({ activeStep }: { activeStep: number }) {
    return (
        <div className="flex flex-col gap-2 px-4 py-5">
            {STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;

                return (
                    <div key={idx} className="flex items-center gap-3">
                        <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${isActive
                                ? "border-blue-accent bg-blue-50 text-blue-accent"
                                : isPast
                                    ? "border-green-400 bg-green-50 text-green-500"
                                    : "border-gray-200 bg-white text-gray-300"
                                }`}
                        >
                            <Icon className="h-4 w-4" />
                        </div>
                        <span
                            className={`font-inter text-sm transition-colors ${isActive
                                ? "font-semibold text-blue-accent"
                                : isPast
                                    ? "text-green-500"
                                    : "text-gray-400"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

// ── Quick-select amounts ──────────────────────────────────────────────────────

const QUICK_AMOUNTS = [100, 250, 500];

// ── Fees (static in this mockup) ─────────────────────────────────────────────

const BUILDIN_FEE = 5;
const PARTNER_FEE = 2;
const ESTIMATED_ROI = "12-15%";

// ── Main component ────────────────────────────────────────────────────────────

interface MontoInversionProps {
    onBack?: () => void;
    onContinue?: (amount: number) => void;
}

export default function MontoInversion({
    onBack,
    onContinue,
}: MontoInversionProps) {
    const router = useRouter();
    const [rawValue, setRawValue] = useState<string>("");
    const [accepted, setAccepted] = useState(false);

    const numericAmount = parseFloat(rawValue) || 0;
    const total = numericAmount > 0 ? numericAmount + BUILDIN_FEE + PARTNER_FEE : 0;

    function handleQuickSelect(amount: number) {
        setRawValue(String(amount));
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        // Allow only numbers and a single decimal point
        const val = e.target.value.replace(/[^0-9.]/g, "");
        const parts = val.split(".");
        const sanitized = parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : val;
        setRawValue(sanitized);
    }

    const canContinue = numericAmount > 0 && accepted;

    return (
        <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl font-sans">
            {/* ── Header ── */}
            <div className="sticky top-0 z-50 flex items-center bg-white px-6 pt-12 pb-6 border-b border-gray-100">
                <button
                    onClick={() => router.push("/proyectos/1")}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="Volver"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className="font-manrope font-semibold text-dark-text ml-3 text-base">
                    Monto de Inversión
                </h1>
            </div>

            {/* ── Step indicator ── */}
            <div className="border-b border-gray-100 px-6">
                <StepIndicator activeStep={0} />
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {/* Amount input */}
                <div>
                    <label
                        htmlFor="monto-inversion"
                        className="block font-manrope font-semibold text-dark-text mb-2"
                    >
                        Monto de Inversión
                    </label>
                    <div className="relative">
                        <input
                            id="monto-inversion"
                            type="text"
                            inputMode="decimal"
                            value={rawValue}
                            onChange={handleInputChange}
                            placeholder="Ej: $100"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-right font-inter text-dark-text placeholder:text-gray-400 focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20 transition"
                        />
                    </div>
                    <p className="mt-2 font-inter text-xs text-light-text">
                        Ingresa el monto que deseas invertir.
                    </p>
                </div>

                {/* Quick-select buttons */}
                <div className="flex gap-3">
                    {QUICK_AMOUNTS.map((amount) => {
                        const isSelected = numericAmount === amount;
                        return (
                            <button
                                key={amount}
                                onClick={() => handleQuickSelect(amount)}
                                className={`flex-1 rounded-xl border py-2.5 font-inter text-sm font-semibold transition-all ${isSelected
                                    ? "border-blue-accent bg-blue-accent text-white shadow-md shadow-blue-200"
                                    : "border-blue-accent text-blue-accent hover:bg-blue-50"
                                    }`}
                            >
                                ${amount}
                            </button>
                        );
                    })}
                </div>

                {/* Investment summary */}
                <div className="rounded-2xl bg-gray-50 p-5 space-y-4">
                    <h2 className="font-manrope font-bold text-dark-text text-base">
                        Resumen de Inversión
                    </h2>

                    <div className="space-y-3">
                        <SummaryRow label="ROI Estimado" value={ESTIMATED_ROI} />
                        <div className="border-t border-gray-200" />
                        <SummaryRow label="Comisión BuildIn" value={`$${BUILDIN_FEE}`} />
                        <div className="border-t border-gray-200" />
                        <SummaryRow label="Comisión del Socio" value={`$${PARTNER_FEE}`} />
                        <div className="border-t border-gray-200" />
                        <div className="flex items-center justify-between">
                            <span className="font-manrope font-bold text-dark-text">
                                Total a Pagar
                            </span>
                            <span className="font-manrope font-bold text-blue-accent text-lg">
                                {numericAmount > 0 ? `$${total}` : "$0"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Terms & conditions */}
                <label className="flex items-start gap-3 cursor-pointer select-none group">
                    <div className="relative mt-0.5 shrink-0">
                        <input
                            id="terminos"
                            type="checkbox"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                            className="peer sr-only"
                        />
                        {/* Custom checkbox */}
                        <div
                            className={`h-5 w-5 rounded border-2 transition-colors flex items-center justify-center ${accepted
                                ? "border-blue-accent bg-blue-accent"
                                : "border-gray-300 bg-white group-hover:border-blue-accent/60"
                                }`}
                        >
                            {accepted && <Check className="h-3 w-3 text-white stroke-[3]" />}
                        </div>
                    </div>
                    <span className="font-inter text-xs text-light-text leading-relaxed">
                        Al Continuar acepto los{" "}
                        <a
                            href="#"
                            className="text-blue-accent underline font-medium hover:text-blue-700 transition-colors"
                        >
                            términos y condiciones
                        </a>{" "}
                        y entiendo los{" "}
                        <a
                            href="#"
                            className="text-blue-accent underline font-medium hover:text-blue-700 transition-colors"
                        >
                            riesgos asociados a la inversión.
                        </a>
                    </span>
                </label>
            </div>

            {/* ── Footer CTA ── */}
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                <button
                    onClick={() => { if (canContinue) { onContinue?.(numericAmount); router.push('/proyectos/1/invertir/verificacion-identidad'); } }}
                    disabled={!canContinue}
                    className={`w-full rounded-2xl py-4 font-manrope font-semibold text-white text-base transition-all ${canContinue
                        ? "bg-blue-accent shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95"
                        : "bg-blue-accent/40 cursor-not-allowed"
                        }`}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}

// ── Helper ────────────────────────────────────────────────────────────────────

function SummaryRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="font-inter text-sm text-light-text">{label}</span>
            <span className="font-manrope text-sm font-semibold text-dark-text">
                {value}
            </span>
        </div>
    );
}
