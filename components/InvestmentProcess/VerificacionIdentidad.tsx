"use client";

import React from "react";
import { ArrowLeft, Tag, IdCard, Check, ShieldCheck } from "lucide-react";
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

// ── Main component ────────────────────────────────────────────────────────────

interface VerificacionIdentidadProps {
    onBack?: () => void;
    onVerify?: () => void;
    onSkip?: () => void;
}

export default function VerificacionIdentidad({
    onBack,
    onVerify,
    onSkip,
}: VerificacionIdentidadProps) {
    const router = useRouter();

    function handleBack() {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    }

    function handleVerify() {
        if (onVerify) {
            onVerify();
        } else {
            router.push("/proyectos/1/invertir/confirmacion");
        }
    }

    function handleSkip() {
        if (onSkip) {
            onSkip();
        } else {
            router.push("/proyectos/1/invertir/confirmacion");
        }
    }

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
                    Verificación de Identidad
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
                                className={`font-inter text-sm transition-colors text-gray-300`}
                            >
                                Monto de Inversion
                            </span>
                        </div>
                </div>
                            <div className="px-6">
                        <div className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors border-blue-accent bg-blue-50 text-blue-accent`}
                            >
                                <IdCard className="h-4 w-4" />
                            </div>
                            <span
                                className={`font-inter text-sm transition-colors font-semibold text-blue-accent`}
                            >
                                Verificacion de Identidad
                            </span>
                        </div>
                </div>
                <div className=" px-6">
                        <div  className="flex items-center gap-3">
                            <div
                                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors border-gray-100 bg-gray-100 text-gray-400`}
                            >
                                <Check className="h-4 w-4" />
                            </div>
                            <span
                                className={`font-inter text-sm transition-colors font-semibold text-gray-400`}
                            >
                                Confirmacion
                            </span>
                        </div>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {/* Title */}
                <h2 className="font-manrope font-bold text-dark-text text-2xl text-center leading-snug">
                    Verificación de Identidad
                    <br />
                    Requerida
                </h2>

                {/* Security info card */}
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                    <div className="flex items-center gap-2 mb-3">
                        <ShieldCheck className="h-5 w-5 text-blue-accent shrink-0" />
                        <span className="font-manrope font-semibold text-dark-text text-sm">
                            Tu seguridad es nuestra prioridad
                        </span>
                    </div>
                    <p className="font-inter text-sm text-light-text leading-relaxed text-justify">
                        Para proteger tu inversión y cumplir con las regulaciones,
                        necesitamos verificar tu identidad. Este proceso es gestionado
                        por un socio regulado y BuildIn nunca almacena tus documentos
                        personales.
                    </p>
                </div>
            </div>

            {/* ── Footer CTAs ── */}
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
                <button
                    className="w-full rounded-2xl py-4 font-manrope font-semibold text-white text-base bg-blue-accent shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all"
                >
                    Iniciar verificación
                </button>
                <button
                    onClick={handleSkip}
                    className="w-full rounded-2xl py-4 font-manrope font-semibold text-dark-text text-base border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all"
                >
                    Hacerlo después
                </button>
            </div>
        </div>
    );
}
