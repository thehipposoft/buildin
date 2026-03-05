"use client";

import React from "react";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { useRouter } from "next/navigation";

// ── Main component ────────────────────────────────────────────────────────────

interface PagoExitosoProps {
    onBack?: () => void;
    onViewPortfolio?: () => void;
    onGoHome?: () => void;
}

export default function PagoExitoso({
    onBack,
    onViewPortfolio,
    onGoHome,
}: PagoExitosoProps) {
    const router = useRouter();

    function handleBack() {
        if (onBack) {
            onBack();
        } else {
            router.back();
        }
    }

    function handleViewPortfolio() {
        if (onViewPortfolio) {
            onViewPortfolio();
        } else {
            router.push("/inversiones");
        }
    }

    function handleGoHome() {
        if (onGoHome) {
            onGoHome();
        } else {
            router.push("/");
        }
    }

    return (
        <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto shadow-2xl font-sans">
            {/* ── Body ── */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 gap-6">

                {/* Success icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-blue-accent bg-white shadow-md shadow-blue-100">
                    <Check className="h-10 w-10 text-blue-accent stroke-[2.5]" />
                </div>

                {/* Title */}
                <div className="text-center">
                    <h2 className="font-manrope font-bold text-dark-text text-2xl leading-snug">
                        ¡Pago Exitoso!
                    </h2>
                    <p className="font-manrope font-bold text-dark-text text-2xl leading-snug">
                        Ya sos parte del proyecto
                    </p>
                </div>

                {/* Illustration */}
                <div className="w-full flex items-center justify-center">
                    <Image
                        src="/assets/images/pago-exitoso.png"
                        alt="Persona revisando su inversión desde el teléfono"
                        width={300}
                        height={300}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Description */}
                <p className="font-inter text-sm text-light-text leading-relaxed text-center max-w-xs">
                    Tu inversión se realizó con éxito. Ahora podés seguir cada avance
                    desde tu cuenta.
                </p>
            </div>

            {/* ── Footer CTAs ── */}
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex flex-col gap-3">
                <button
                    onClick={handleViewPortfolio}
                    className="w-full rounded-2xl py-4 font-manrope font-semibold text-white text-base bg-blue-accent shadow-lg shadow-blue-200 hover:bg-blue-600 active:scale-95 transition-all"
                >
                    Ver mi portafolio de inversiones
                </button>
                <button
                    onClick={handleGoHome}
                    className="w-full rounded-2xl py-4 font-manrope font-semibold text-dark-text text-base border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 transition-all"
                >
                    Ir al Inicio
                </button>
            </div>
        </div>
    );
}
