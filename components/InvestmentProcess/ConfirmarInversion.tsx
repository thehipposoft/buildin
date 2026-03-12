"use client";

import React from "react";
import { ArrowLeft, Tag, IdCard, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "../Marketplace/constants";
import { useInversionStore } from "../store/useInversionStore";

const STEPS = [
    { icon: Tag, label: "Monto de Inversión" },
    { icon: IdCard, label: "Verificación de Identidad" },
    { icon: Check, label: "Confirmación" },
];


function SummaryRow({
    label,
    value,
    valueBold = false,
}: {
    label: string;
    value: string;
    valueBold?: boolean;
}) {
    return (
        <div className="flex items-center justify-between py-0.5">
            <span className="font-inter text-sm text-light-text">{label}</span>
            <span
                className={`font-inter text-sm ${valueBold ? "font-bold text-dark-text" : "font-semibold text-dark-text"
                    }`}
            >
                {value}
            </span>
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

interface ConfirmarInversionProps {
    onBack?: () => void;
    onConfirm?: () => void;
    /** Investment amount in USD, defaults to 10 000 for mockup */
    amount?: number;
    projectId?: string;
    projectName?: string;
}

export default function ConfirmarInversion({
    onBack,
    onConfirm,
}: ConfirmarInversionProps) {
    const router = useRouter();
    const { projectId, monto } = useInversionStore()
    const buildInFee = Math.round(monto * 0.01);
    const partnerFee = Math.round(monto * 0.005);
    const total = monto + buildInFee + partnerFee;

    function handleBack() {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    }

    function handleConfirm() {
        if (onConfirm) {
            onConfirm();
        } else {
            // TODO: navigate to success screen
            router.push(`/proyectos/${projectId}/invertir/pago-exitoso`);
        }
    }

    const project = PROJECTS.find(p => p.id === projectId)

    console.log("CURRENT", project)

    return (
        <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl font-sans">
            {/* ── Header ── */}
            <div className="sticky top-0 z-50 flex items-center bg-white px-6 pt-12 pb-6 border-b border-gray-100">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label="Volver"
                >
                    <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className="font-manrope font-semibold text-dark-text ml-3 text-base">
                    Confirmar Inversión
                </h1>
            </div>

            {/* ── Step indicator ── */}
            <div className="border-b border-gray-100 flex flex-col gap-2 px-4 py-5">
                <div className="px-6">
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors border-gray-200 bg-white text-gray-300`}
                            >
                                <Tag className="h-4 w-4" />
                            </div>
                            <span
                                className={`font-inter text-sm transition-colors text-gray-400`}
                            >
                                Monto de Inversion
                            </span>
                        </div>
                </div>
                            <div className="px-6">
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors border-gray-200 bg-white text-gray-300`}
                            >
                                <IdCard className="h-4 w-4" />
                            </div>
                            <span
                                className={`font-inter text-sm transition-colors text-gray-400`}
                            >
                                Verificacion de Identidad
                            </span>
                        </div>
                </div>
                <div className=" px-6">
                        <div  className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors border-blue-accent bg-blue-50 text-blue-accent`}
                            >
                                <Check className="h-4 w-4" />
                            </div>
                            <span
                                className={`font-inter text-sm transition-colors font-semibold text-blue-accent`}
                            >
                                Confirmacion
                            </span>
                        </div>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">

                {/* Section title */}
                <div>
                    <h2 className="font-manrope font-bold text-dark-text text-xl">
                        Resumen de Inversión
                    </h2>
                    <p className="font-manrope font-semibold text-dark-text text-sm mt-1">
                        Proyecto &lsquo;{project?.nombre}&rsquo;
                    </p>
                    <p className="font-inter text-sm text-light-text mt-0.5">
                        Revisa los detalles antes de confirmar.
                    </p>
                </div>

                {/* Summary card */}
                <div className="space-y-3">
                    {/* Monto */}
                    <SummaryRow
                        label="Monto de Inversión"
                        value={`$${monto.toLocaleString("es-AR")} USD`}
                        valueBold
                    />
                    <div className="border-t border-gray-200" />

                    {/* Comisión BuildIn */}
                    <SummaryRow
                        label="Comisión BuildIn"
                        value={`$${buildInFee.toLocaleString("es-AR")} USD (1%)`}
                    />
                    <div className="border-t border-gray-200" />

                    {/* Comisión Socio */}
                    <SummaryRow
                        label="Comisión Socio"
                        value={`$${partnerFee.toLocaleString("es-AR")} USD (0.5%)`}
                    />
                    <div className="border-t border-gray-200" />

                    {/* Método de Pago */}
                    <SummaryRow
                        label="Método de Pago"
                        value="Transferencia Bancaria"
                        valueBold
                    />
                    <div className="border-t border-gray-200" />

                    {/* Total */}
                    <div className="flex items-center justify-between pt-1">
                        <span className="font-manrope font-bold text-dark-text">
                            Total a Pagar
                        </span>
                        <span className="font-manrope font-bold text-blue-accent text-lg">
                            ${total.toLocaleString("en-US")} USD
                        </span>
                    </div>
                </div>

                {/* Legal note */}
                <p className="font-inter text-xs text-light-text leading-relaxed">
                    Al confirmar, aceptas los{" "}
                    <a
                        href="#"
                        className="text-blue-accent underline font-medium hover:text-blue-700 transition-colors"
                    >
                        Términos y Condiciones
                    </a>{" "}
                    de BuildIn y la inversión.
                </p>
            </div>

            {/* ── Footer CTA ── */}
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
                <button
                    onClick={handleConfirm}
                    className="w-full rounded-2xl py-4 font-manrope font-semibold text-white text-base bg-blue-accent shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all"
                >
                    Confirmar inversión
                </button>
            </div>
        </div>
    );
}
