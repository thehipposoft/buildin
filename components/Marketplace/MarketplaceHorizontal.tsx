"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Bookmark, MapPin } from "lucide-react";
import { PROJECTS, Project } from "./constants";
import Header from "../Header";
import BottomNavigation from "../BottomNavigation";

export default function MarketplaceHorizontal() {
    const [searchQuery, setSearchQuery] = useState("");

    const sections = [
        { title: "Proyectos de Inversión", data: PROJECTS },
        { title: "Proyectos Tendencia", data: [...PROJECTS].reverse() }, // Mock different data order
        { title: "Porque te interesa", data: PROJECTS.slice(0, 2) }, // Mock subset
    ];

    return (
        <div className="min-h-screen md:max-w-7xl md:mx-auto bg-gray-50 pb-24 font-sans">
            <div className="bg-white px-4 py-3 shadow-sm md:px-6 top-[72px] z-10">
                {/* 
                 The new Header is sticky top-0. 
                 If I want the search bar to also be sticky/integrated, I might need to adjust.
                 For now, I'll place it under Header.
               */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar Proyectos"
                        className="w-full rounded-lg bg-gray-100 py-2.5 pl-9 pr-4 text-sm text-[var(--color-black)] placeholder-gray-400 focus:outline-hidden focus:ring-1 focus:ring-[var(--color-blue-accent)]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <main className="flex flex-col gap-8 py-6">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h2 className="px-4 text-xl font-bold text-[var(--color-black)] md:px-6">{section.title}</h2>

                        {/* Horizontal Scroll Container */}
                        <div className="flex overflow-x-auto px-4 pb-4 md:px-6 scrollbar-hide snap-x gap-4">
                            {section.data.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                ))}
            </main>

            {/* Bottom Navigation */}
            <BottomNavigation />
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="relative flex-none w-[280px] snap-center rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
            {/* Bookmark Overlay */}
            <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-core-blue)] shadow-sm hover:bg-gray-50">
                <Bookmark className="h-4 w-4 fill-none" />
            </button>

            {/* Image */}
            <div className="relative h-40 w-full">
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2">
                <div>
                    <h3 className="text-base font-bold text-[var(--color-black)] leading-tight">{project.name}</h3>
                    <div className="flex items-center gap-1 mt-1 text-gray-500 text-xs">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate">{project.location}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2">
                    {project.tags?.map(tag => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-purple-50 text-[10px] font-medium text-[var(--color-violet-accent)]">
                            {tag}
                        </span>
                    ))}
                    {project.risk && (
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[10px] font-medium text-[var(--color-blue-accent)]">
                            Riesgo: {project.risk}
                        </span>
                    )}
                </div>

                {/* Financed */}
                <div className="mt-1">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500 font-medium">Financiado:</span>
                        <span className="text-[var(--color-black)] font-bold">{project.financedPercentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--color-blue-accent)] rounded-full"
                            style={{ width: `${project.financedPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mt-1 text-xs">
                    <div>
                        <div className="text-gray-500">ROI objetivo:</div>
                        <div className="font-bold text-[var(--color-black)]">{project.roi}</div>
                    </div>
                    <div>
                        <div className="text-gray-500">Plazo:</div>
                        <div className="font-bold text-[var(--color-black)]">{project.termMonths} meses</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
