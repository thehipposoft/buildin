"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
    Search,
    TrendingUp,
    Tag,
    Filter,
    Bookmark,
    ChevronDown
} from "lucide-react";
import { PROJECTS, FILTER_OPTIONS } from "./constants";
import Link from "next/link";

interface MarketplaceProps {
    initialSearchQuery?: string;
    initialFilters?: {
        ubicacion?: string | null;
        estado?: string | null;
        roi?: string | null;
        plazo?: string | null;
    };
}

export default function Marketplace({ initialSearchQuery = "", initialFilters = {} }: MarketplaceProps = {}) {
    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
    const [selectedFilters, setSelectedFilters] = useState<{
        ubicacion: string | null;
        estado: string | null;
        roi: string | null;
        plazo: string | null;
    }>({
        ubicacion: initialFilters.ubicacion || null,
        estado: initialFilters.estado || null,
        roi: initialFilters.roi || null,
        plazo: initialFilters.plazo || null,
    });

    const [bookmarkedIds, setBookmarkedIds] = useState<Set<number>>(new Set());

    const handleBookmarkClick = (id: number) => {
        setBookmarkedIds((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
};
    // Update filters when initial values change
    useEffect(() => {
        setSearchQuery(initialSearchQuery);
        setSelectedFilters({
            ubicacion: initialFilters.ubicacion || null,
            estado: initialFilters.estado || null,
            roi: initialFilters.roi || null,
            plazo: initialFilters.plazo || null,
        });
    }, [initialSearchQuery, initialFilters]);

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
                !project.nombre.toLowerCase().includes(searchQuery.toLowerCase()) &&
                !project.ubicacion.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }

            // Category Filters
            if (selectedFilters.ubicacion && project.ubicacionType !== selectedFilters.ubicacion) return false;

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
                if (project.valorRoi < filterRoi) return false;
            }

            // Plazo Logic
            if (selectedFilters.plazo) {
                const filterMonths = parseInt(selectedFilters.plazo.split(" ")[0]);
                if (project.plazo !== filterMonths) return false;
            }

            return true;
        });
    }, [searchQuery, selectedFilters]);

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            <main className="mx-auto max-w-7xl px-4 pt-2 pb-6 md:px-6">
                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar Proyectos"
                        className="w-full rounded-md bg-[#F3F4F6] py-3 pl-10 pr-4 text-sm text-black shadow-sm focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filters */}
                <div className="mb-8 bg-white border border-border-color rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base font-inter text-black">Filtros Aplicados</h2>
                        <Filter className="h-4 w-4 text-core-blue" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {/* Ubicacion */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "ubicacion" ? null : "ubicacion")}
                                className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${selectedFilters.ubicacion
                                    ? "bg-core-blue text-white"
                                    : "bg-gris-ui text-core-blue"
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
                                    ? "bg-core-blue text-white"
                                    : "bg-gris-ui text-core-blue"
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
                                    ? "bg-core-blue text-white"
                                    : "bg-gris-ui text-core-blue"
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
                <h2 className="mb-4 text-xl font-bold text-black">Resultados de búsqueda</h2>

                {/*Filtered Project List */}
                <div className="flex flex-col gap-4">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md border border-gray-100 flex">
                            {/* Close Button */}
                       
                          {/*   <button className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-gray-500 backdrop-blur-xs hover:bg-white hover:text-gray-700">
                                <X className="h-4 w-4" />
                            </button> */}

                            {/* Image - Left Side */}
                            <Link href={`/proyectos/${project.id}`}  className="relative w-40 shrink-0 overflow-hidden">
                                <Image
                                    src={project.imagenVertical}
                                    alt={project.nombre}
                                    fill
                                    className="object-cover"
                                />
                            </Link>

                            {/* Content - Right Side */}
                            <div  className="flex-1 px-4 pt-16 pb-4 gap-4 flex flex-col relative">
                            <Link href={`/proyectos/${project.id}`}>
                                <div className="flex flex-col items-center absolute right-2 top-2">
                                    <Image src={project.logo} alt={project.desarrollador} width={45} height={45} className="z-20 rounded-full " />
                                    <Image src={"/assets/images/stars.png"} alt="rating" width={45} height={45} className="" />
                                </div>
                                <h3 className="mb-1 text-lg font-semibold text-dark-text font-manrope">{project.nombre}</h3>
                                <div className=" flex items-start gap-1.5 text-xs text-light-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" fill="none" className="mt-0.5 shrink-0"><path fill="#0F6EEF" d="M10.714 5.798a4.69 4.69 0 0 0-4.452-4.452L6.03 1.34a4.69 4.69 0 0 0-4.69 4.69c0 1.447.815 3.006 1.875 4.398 1.023 1.345 2.198 2.433 2.815 2.969.617-.536 1.792-1.624 2.815-2.969 1.06-1.392 1.875-2.951 1.875-4.398l-.006-.232Zm1.346.232c0 1.899-1.04 3.754-2.148 5.21-.983 1.29-2.084 2.352-2.773 2.967l-.268.235a1.34 1.34 0 0 1-.732.293l-.109.005a1.34 1.34 0 0 1-.716-.207l-.09-.062-.035-.029c-.64-.552-1.918-1.727-3.041-3.203C1.04 9.784 0 7.93 0 6.03a6.03 6.03 0 1 1 12.06 0Z" /><path fill="#555D6D" d="M7.372 6.04a1.34 1.34 0 1 0-2.68 0 1.34 1.34 0 0 0 2.68 0Zm1.34 0a2.68 2.68 0 1 1-5.36 0 2.68 2.68 0 0 1 5.36 0Z" /></svg>
                                    <span className="line-clamp-1 font-inter font-medium">{project.ubicacion}</span>
                                </div>

                                <div className="mb-3 space-y-1.5">
                                    <div className="flex items-center gap-2 text-sm">
                                        <TrendingUp className="h-4 w-4 text-blue-accent" />
                                        <span className="font-medium text-dark-text font-inter">ROI: {project.roi}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Tag className="h-4 w-4 text-blue-accent" />
                                        <span className="text-dark-text font-medium font-inter">Ticket mínimo: <span className="font-semibold text-dark-text">${project.inversionMinima.toLocaleString()}</span></span>
                                    </div>
                                </div>

                                {/* Status Badge */}
                                <div className="mb-3">
                                    <span className="inline-block rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-light-text font-inter">
                                        Estado: {project.status}
                                    </span>
                                </div>

                                <div>
                                    <p className="text-sm text-light-text">Desarrolla : {project.desarrollador}</p>
                                </div>

                                {/* Financing Progress */}
                                {/* <div className="mb-4 mt-auto">
                                    <div className="mb-1.5 flex items-center justify-between text-sm">
                                        <span className="font-medium text-dark-text font-inter">Financiado</span>
                                        <span className="font-bold text-dark-text font-manrope">{project.porcentajeFinanciacion}%</span>
                                    </div>
                                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full bg-blue-accent"
                                            style={{ width: `${project.porcentajeFinanciacion}%` }}
                                        />
                                    </div>
                                </div> */}
                                </Link>
                                <div className="flex items-center justify-end gap-2">
                                    <button onClick={() => handleBookmarkClick(index)} className={`${bookmarkedIds.has(index) ? "bg-core-blue text-white" : "bg-white text-core-blue"} relative flex h-10 w-10 items-center justify-center rounded-xl border border-core-blue text-core-blue transition-colors hover:bg-core-blue`}>
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
