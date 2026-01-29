"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
    Search,
    MapPin,
    TrendingUp,
    Tag,
    Filter,
    Bookmark,
    X,
    ChevronDown
} from "lucide-react";
import { PROJECTS, FILTER_OPTIONS, Project } from "./constants";

export default function Marketplace() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState<{
        ubicacion: string | null;
        estado: string | null;
        roi: string | null;
        plazo: string | null;
    }>({
        ubicacion: null,
        estado: null,
        roi: null,
        plazo: null,
    });

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleFilter = (category: keyof typeof selectedFilters, value: string) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [category]: prev[category] === value ? null : value,
        }));
        setActiveDropdown(null);
    };

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter((project) => {
            // Search Filter
            if (
                searchQuery &&
                !project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !project.location.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
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
        });
    }, [searchQuery, selectedFilters]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            <main className="mx-auto max-w-7xl px-4 py-6 md:px-6">
                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar Proyectos"
                        className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-[var(--color-black)] shadow-sm focus:border-[var(--color-blue-accent)] focus:outline-hidden focus:ring-1 focus:ring-[var(--color-blue-accent)]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filters */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-[var(--color-black)]">Filtros Aplicados</h2>
                        <Filter className="h-4 w-4 text-[var(--color-core-blue)]" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {/* Ubicacion */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "ubicacion" ? null : "ubicacion")}
                                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.ubicacion
                                    ? "bg-[var(--color-core-blue)] text-white"
                                    : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"
                                    }`}
                            >
                                {selectedFilters.ubicacion || "Ubicación"}
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {activeDropdown === "ubicacion" && (
                                <div className="absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                                    {FILTER_OPTIONS.ubicacion.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => toggleFilter("ubicacion", opt)}
                                            className="block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Estado */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "estado" ? null : "estado")}
                                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.estado
                                    ? "bg-[var(--color-core-blue)] text-white"
                                    : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"
                                    }`}
                            >
                                {selectedFilters.estado ? `Estado: ${selectedFilters.estado.split("-")[0]}` : "Estado"}
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {activeDropdown === "estado" && (
                                <div className="absolute top-full mt-1 z-20 w-40 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                                    {FILTER_OPTIONS.estado.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => toggleFilter("estado", opt)}
                                            className="block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* ROI */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "roi" ? null : "roi")}
                                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.roi
                                    ? "bg-[var(--color-core-blue)] text-white"
                                    : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"
                                    }`}
                            >
                                {selectedFilters.roi ? `ROI ${selectedFilters.roi}` : "ROI"}
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {activeDropdown === "roi" && (
                                <div className="absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                                    {FILTER_OPTIONS.roi.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => toggleFilter("roi", opt)}
                                            className="block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Plazo */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "plazo" ? null : "plazo")}
                                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.plazo
                                    ? "bg-[var(--color-core-blue)] text-white"
                                    : "bg-[var(--color-gris-ui)] text-[var(--color-core-blue)]"
                                    }`}
                            >
                                {selectedFilters.plazo || "Plazo"}
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {activeDropdown === "plazo" && (
                                <div className="absolute top-full mt-1 z-20 w-32 rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                                    {FILTER_OPTIONS.plazo.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => toggleFilter("plazo", opt)}
                                            className="block w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-gray-50"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Results Header */}
                <h2 className="mb-4 text-xl font-bold text-[var(--color-black)]">Resultados de búsqueda</h2>

                {/* Project Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-white shadow-xs transition-shadow hover:shadow-md border border-gray-100">
                            {/* Close Button */}
                            <button className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-xs hover:bg-white hover:text-gray-700">
                                <X className="h-4 w-4" />
                            </button>

                            {/* Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <button className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-black)] shadow-xs backdrop-blur-xs hover:bg-white">
                                    Ver más
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="mb-1 text-base font-bold text-[var(--color-black)]">{project.name}</h3>
                                <div className="mb-3 flex items-start gap-1.5 text-xs text-gray-500">
                                    <MapPin className="mt-0.5 h-3 w-3 shrink-0" />
                                    <span className="line-clamp-2">{project.location}</span>
                                </div>

                                <div className="mb-3 space-y-1.5">
                                    <div className="flex items-center gap-2 text-xs">
                                        <TrendingUp className="h-3.5 w-3.5 text-[var(--color-blue-accent)]" />
                                        <span className="font-semibold text-[var(--color-black)]">ROI: {project.roi}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs">
                                        <Tag className="h-3.5 w-3.5 text-[var(--color-blue-accent)]" />
                                        <span className="text-gray-600">Ticket mínimo: <span className="font-semibold text-[var(--color-black)]">${project.minTicket.toLocaleString()}</span></span>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="mb-3">
                                    <span className="inline-block rounded-md bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600">
                                        Estado: {project.status}
                                    </span>
                                </div>

                                {/* Financing Progress */}
                                <div className="mb-4">
                                    <div className="mb-1 flex items-center justify-between text-xs">
                                        <span className="font-medium text-[var(--color-black)]">Financiado</span>
                                        <span className="font-bold text-[var(--color-black)]">{project.financedPercentage}%</span>
                                    </div>
                                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full bg-[var(--color-blue-accent)]"
                                            style={{ width: `${project.financedPercentage}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <button className="flex-1 rounded-lg bg-[var(--color-core-blue)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900">
                                        Invertir
                                    </button>
                                    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-core-blue)] text-[var(--color-core-blue)] transition-colors hover:bg-blue-50">
                                        <Bookmark className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
