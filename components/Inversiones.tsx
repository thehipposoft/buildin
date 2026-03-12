"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Bell, Bookmark, Settings, Headphones, Briefcase } from "lucide-react";

// ── Types ─────────────────────────────────────────────────────────────────────

type EstadoProyecto = "En Construcción" | "Financiado" | "En Evaluación" | "Completado";

interface InversionItem {
    id: string;
    nombre: string;
    monto: number;
    estado: EstadoProyecto;
    progreso: number; // 0-100
}

// ── Static mock data ──────────────────────────────────────────────────────────

const INVERSIONES: InversionItem[] = [
    {
        id: "1",
        nombre: "Decó Polo",
        monto: 10000,
        estado: "En Construcción",
        progreso: 75,
    },
    {
        id: "2",
        nombre: "Mirabilia Hype",
        monto: 25000,
        estado: "Financiado",
        progreso: 100,
    },
    {
        id: "3",
        nombre: "Open Buenavista",
        monto: 5000,
        estado: "En Evaluación",
        progreso: 20,
    },
    {
        id: "4",
        nombre: "Nómada Parque",
        monto: 5230,
        estado: "En Construcción",
        progreso: 40,
    },
    {
        id: "5",
        nombre: "One Residential Tower",
        monto: 2050,
        estado: "En Construcción",
        progreso: 60,
    },
];

const TOTAL_INVERTIDO = INVERSIONES.reduce((acc, i) => acc + i.monto, 0);

// ── Estado badge ──────────────────────────────────────────────────────────────


function EstadoBadge({ estado }: { estado: EstadoProyecto }) {
    return (
        <span
            className={`inline-block rounded-full px-3 py-0.5 text-xs text-dark-text font-semibold font-inter bg-gris-ui`}
        >
            {estado}
        </span>
    );
}

// ── Progress bar ──────────────────────────────────────────────────────────────

function ProgressBar({ value }: { value: number }) {
    const clamped = Math.min(100, Math.max(0, value));
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-blue-100 overflow-hidden">
                <div
                    className="h-full rounded-full bg-blue-accent transition-all duration-500"
                    style={{ width: `${clamped}%` }}
                />
            </div>
            <span className="font-inter text-xs font-semibold text-light-text w-8 text-right">
                {clamped}%
            </span>
        </div>
    );
}

// ── Investment card ───────────────────────────────────────────────────────────

function InversionCard({ item }: { item: InversionItem }) {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push(`/proyectos/${item.id}`)}
            className="w-full text-left rounded-2xl border border-gray-100 bg-white px-4 py-4 shadow-sm hover:shadow-md active:scale-[0.99] transition-all space-y-3"
        >
            <div className="flex items-start justify-between gap-2">
                <span className="font-manrope font-bold text-dark-text text-sm leading-snug">
                    {item.nombre}
                </span>
                <span className="font-manrope font-bold text-dark-text text-sm whitespace-nowrap">
                    ${item.monto.toLocaleString("es-AR")}
                </span>
            </div>
            <EstadoBadge estado={item.estado} />
            <ProgressBar value={item.progreso} />
        </button>
    );
}

// ── Bottom Navigation ─────────────────────────────────────────────────────────

function BottomNav({ active }: { active: string }) {
    const router = useRouter();

    const items = [
        { key: "guardados", label: "Guardados", icon: Bookmark, path: "/guardados" },
        { key: "explorar", label: "Explorar", icon: null, path: "/" },
        { key: "inversiones", label: "Inversiones", icon: Briefcase, path: "/portafolio" },
        { key: "configuracion", label: "Configuración", icon: Settings, path: "/configuracion" },
        { key: "soporte", label: "Soporte", icon: Headphones, path: "/soporte" },
    ];

    return (
        <nav className="sticky bottom-0 left-0 right-0 z-20 flex items-end justify-around border-t border-gray-200 bg-white py-2">
            {items.map((item) => {
                const isActive = item.key === active;

                if (item.key === "explorar") {
                    return (
                        <button
                            key={item.key}
                            onClick={() => router.push(item.path)}
                            className="flex flex-col items-center gap-1 relative -top-6"
                        >
                            <Image
                                src="/assets/images/logo/buildin_icon_blue.png"
                                width={56}
                                height={56}
                                alt="Explorar"
                                className="rounded-full bg-white border-t-2 border-gray-200"
                            />
                            <span className={`text-[10px] font-bold ${isActive ? "text-blue-accent" : "text-light-text"}`}>
                                Explorar
                            </span>
                        </button>
                    );
                }

                const Icon = item.icon!;
                return (
                    <button
                        key={item.key}
                        onClick={() => router.push(item.path)}
                        className={`flex flex-col items-center gap-1 p-1 transition-colors ${isActive ? "text-blue-accent" : "text-light-text"
                            }`}
                    >
                        <Icon
                            className={`h-6 w-6 ${isActive ? "stroke-blue-accent" : "stroke-light-text"}`}
                            strokeWidth={2}
                        />
                        <span className={`text-[10px] font-bold ${isActive ? "text-blue-accent" : "text-light-text"}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function Inversiones() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl font-sans">

            <main className="flex-1 overflow-y-auto pb-24">

                {/* Hero summary card */}
                <div className="mx-4 mt-5 rounded-2xl bg-blue-accent p-5 shadow-lg shadow-blue-200">
                    {/* Total invertido */}
                    <p className="font-inter text-sm text-blue-100 mb-1">Total Invertido</p>
                    <p className="font-manrope font-bold text-white text-3xl tracking-tight">
                        ${TOTAL_INVERTIDO.toLocaleString("es-AR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        })}{" "}
                        <span className="text-xl font-semibold text-blue-100">Usd.</span>
                    </p>

                    <div className="mt-4 border-t border-white/20 pt-4 flex items-end justify-between">
                        <div>
                            <p className="font-inter text-xs text-blue-100 mb-1">Proyectos Activos</p>
                            <p className="font-manrope font-bold text-white text-2xl">
                                {INVERSIONES.length}
                            </p>
                        </div>
                        <button
                            onClick={() => router.push("/")}
                            className="rounded-full bg-white px-4 py-2 font-inter text-xs font-semibold text-blue-accent hover:bg-blue-50 active:scale-95 transition-all shadow"
                        >
                            Explorar más
                        </button>
                    </div>
                </div>

                {/* Investment list */}
                <section className="px-4 mt-6">
                    <h2 className="font-manrope font-medium text-dark-text text-lg mb-4">
                        Tus Inversiones
                    </h2>

                    <div className="space-y-3">
                        {INVERSIONES.map((inv) => (
                            <InversionCard key={inv.id} item={inv} />
                        ))}
                    </div>
                </section>
            </main>

            {/* ── Bottom nav ── */}
            {/*  <BottomNav active="inversiones" /> */}
        </div>
    );
}
