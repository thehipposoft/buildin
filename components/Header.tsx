"use client"
import Image from "next/image";
import React, { useState } from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { FILTER_OPTIONS } from "./Marketplace/constants";
import Link from "next/link";

interface HeaderTypes {
    showSearch?: boolean;
}

export default function Header({ showSearch = true }: HeaderTypes) {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
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

    const handleSearch = () => {
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

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
            <div className="px-4 py-4 md:px-6">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link href={"/"} className="flex items-center gap-2">
                        <Image src={"/assets/images/logo/logo_blue.png"} alt="Building Logo" width={180} height={65} />
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="h-12 w-12 relative rounded-full overflow-hidden border border-gray-200">
                            <Image src="/assets/images/avatar.png" className="object-cover" fill alt="User" />
                        </div>
                        <div className="relative">
                            <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">2</span>
                            <Image src={"/assets/images/svg/campana.svg"} alt="Campana" width={20} height={20} />
                        </div>
                    </div>
                </div>
                {showSearch && <div className="pb-2 pt-4 md:px-6 z-10">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="w-full text-left rounded-lg bg-gray-100 py-2.5 pl-9 pr-4 text-sm text-gray-400 hover:bg-gray-200 transition-colors"
                        >
                            Buscar Proyectos
                        </button>
                    </div>
                </div>
                }
            </div>

            {/* Search Menu Overlay */}
            <div
                className={`fixed inset-0 h-screen bg-white/95 backdrop-blur-md transition-all duration-500 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                style={{ zIndex: 100 }}
            >
                <div className="h-full overflow-y-auto">
                    <div className="max-w-7xl mx-auto py-12 px-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-manrope font-semibold text-dark-text">Buscar Proyectos</h2>
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="p-2 bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="h-6 w-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative mb-8">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por nombre o ubicación..."
                                className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-dark-text shadow-sm focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                            />
                        </div>

                        {/* Filters */}
                        <div className="mb-8">
                            <h3 className="text-lg font-manrope font-medium text-dark-text mb-4">Filtros</h3>

                            <div className="flex flex-wrap gap-3">
                                {/* Ubicacion */}
                                <div className="relative">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === "ubicacion" ? null : "ubicacion")}
                                        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.ubicacion
                                                ? "bg-core-blue text-white"
                                                : "bg-gris-ui text-core-blue"
                                            }`}
                                    >
                                        {selectedFilters.ubicacion || "Ubicación"}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    {activeDropdown === "ubicacion" && (
                                        <div className="absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                                            {FILTER_OPTIONS.ubicacion.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => toggleFilter("ubicacion", opt)}
                                                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter"
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
                                        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.estado
                                                ? "bg-core-blue text-white"
                                                : "bg-gris-ui text-core-blue"
                                            }`}
                                    >
                                        {selectedFilters.estado ? `${selectedFilters.estado.split("-")[0]}` : "Estado"}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    {activeDropdown === "estado" && (
                                        <div className="absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                                            {FILTER_OPTIONS.estado.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => toggleFilter("estado", opt)}
                                                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter"
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
                                        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.roi
                                                ? "bg-core-blue text-white"
                                                : "bg-gris-ui text-core-blue"
                                            }`}
                                    >
                                        {selectedFilters.roi ? `ROI ${selectedFilters.roi}` : "ROI"}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    {activeDropdown === "roi" && (
                                        <div className="absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                                            {FILTER_OPTIONS.roi.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => toggleFilter("roi", opt)}
                                                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter"
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
                                        className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${selectedFilters.plazo
                                                ? "bg-core-blue text-white"
                                                : "bg-gris-ui text-core-blue"
                                            }`}
                                    >
                                        {selectedFilters.plazo || "Plazo"}
                                        <ChevronDown className="h-4 w-4" />
                                    </button>
                                    {activeDropdown === "plazo" && (
                                        <div className="absolute top-full mt-2 z-20 w-48 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                                            {FILTER_OPTIONS.plazo.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => toggleFilter("plazo", opt)}
                                                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 font-inter"
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Clear Filters */}
                            {(selectedFilters.ubicacion || selectedFilters.estado || selectedFilters.roi || selectedFilters.plazo) && (
                                <button
                                    onClick={() => setSelectedFilters({ ubicacion: null, estado: null, roi: null, plazo: null })}
                                    className="mt-4 text-sm text-core-blue hover:text-blue-700 font-medium font-inter"
                                >
                                    Limpiar filtros
                                </button>
                            )}
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="w-full bg-core-blue text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-blue-900 transition-colors font-manrope text-lg"
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
