"use client";

import Image from "next/image";
import { Search, Bookmark, MapPin } from "lucide-react";
import { PROJECTS } from "./constants";
import { Project } from "@/types";
import BottomNavigation from "../BottomNavigation";
import Link from "next/link";

export default function MarketplaceHorizontal() {

    const sections = [
        { title: "Proyectos de Inversión", data: PROJECTS },
        { title: "Proyectos Tendencia", data: [...PROJECTS].reverse() }, // Mock different data order
        { title: "Porque te interesa", data: PROJECTS.slice(0, 2) }, // Mock subset
    ];

    return (
        <div className="min-h-screen md:max-w-7xl md:mx-auto bg-gray-50 pb-24 font-sans">


            <main className="flex flex-col gap-8 py-6 pl-6">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-manrope font-semibold text-core-black md:px-6">{section.title}</h2>

                        {/* Horizontal Scroll Container */}
                        <div className="flex overflow-x-auto pb-4 md:px-6 scrollbar-hide gap-3">
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
        <Link href={`/proyectos/${project.id}`} className="relative flex-none w-11/12 md:w-2xs snap-center rounded-xl bg-white shadow-lg border border-gray-100 overflow-hidden last:mr-6">
            {/* Bookmark Overlay */}
            <button className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-core-blue shadow-sm hover:bg-gray-50">
                <Bookmark className="h-4 w-4 fill-none" />
            </button>

            {/* Image */}
            <div className="relative flex items-end h-48 w-full">
                <Image
                    src={project.image}
                    alt={project.nombre}
                    fill
                    className="object-cover"
                />
                {/*Tags*/}
                <div className="flex gap-2 p-2">
                    {
                        project.tags?.map((tag, index) => (
                            <div key={index} className="z-10 flex items-center gap-2 bg-gris-ui rounded-full px-4 py-1.5">
                                <span className="text-core-black font-inter font-medium text-xs">{tag}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center absolute right-4 -bottom-12 gap-2">
                    <Image src={project.logo} alt={project.desarrollador} width={85} height={85} className="z-20 rounded-full " />
                    <Image src={"/assets/images/stars.png"} alt="rating" width={85} height={85} className="" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-2">
                <div className="">
                    <h3 className="text-xl font-manrope font-semibold text-core-black leading-tight w-3/4">{project.nombre}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="min-w-3" width="13" height="15" fill="none"><path fill="#555D6D" d="M10.714 5.798a4.69 4.69 0 0 0-4.452-4.452L6.03 1.34a4.69 4.69 0 0 0-4.69 4.69c0 1.447.815 3.006 1.875 4.398 1.023 1.345 2.198 2.433 2.815 2.969.617-.536 1.792-1.624 2.815-2.969 1.06-1.392 1.875-2.951 1.875-4.398l-.006-.232Zm1.346.232c0 1.899-1.04 3.754-2.148 5.21-.983 1.29-2.084 2.352-2.773 2.967l-.268.235a1.34 1.34 0 0 1-.732.293l-.109.005a1.34 1.34 0 0 1-.716-.207l-.09-.062-.035-.029c-.64-.552-1.918-1.727-3.041-3.203C1.04 9.784 0 7.93 0 6.03a6.03 6.03 0 1 1 12.06 0Z" /><path fill="#555D6D" d="M7.372 6.04a1.34 1.34 0 1 0-2.68 0 1.34 1.34 0 0 0 2.68 0Zm1.34 0a2.68 2.68 0 1 1-5.36 0 2.68 2.68 0 0 1 5.36 0Z" /></svg>
                        <span className="text-light-text font-inter font-medium leading-4">{project.ubicacion}</span>
                    </div>
                </div>
                <div className="py-1">
                    <span className="text-light-text font-inter text-sm">Desarrolla: {project.desarrollador}</span>
                </div>
                <div className="flex gap-2">
                    <Image src="/assets/images/svg/maletin.svg" alt="" width={16} height={16} />
                    <span className="text-light-text font-inter text-sm">{project.proyectosCompletados} proyectos completados</span>
                </div>
                <div className="flex gap-2">
                    <Image src="/assets/images/svg/estadistica.svg" alt="" width={16} height={16} />
                    <span className="text-light-text font-inter text-sm">{project.montoGestionado}</span>
                </div>
                {/* Tags */}
                <div className="flex flex-col gap-2 pt-4">
                    <div className="flex items-center gap-2">
                        <Image src="/assets/images/svg/roi.svg" alt="" width={22} height={22} />
                        <span className="text-dark-text font-inter text-sm font-semibold">ROI Objetivo: </span>
                        <span className="text-dark-text font-inter text-sm">{project.roi}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/assets/images/svg/plazo.svg" alt="" width={20} height={20} />
                        <span className="text-dark-text font-inter text-sm font-semibold">Plazo: </span>
                        <span className="text-dark-text font-inter text-sm">{project.plazo} meses </span>
                    </div>
                </div>

                {/* Financed */}
                {/* <div className="mt-1">
                    <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500 font-medium">Financiado:</span>
                        <span className="text-core-black font-bold">{project.porcentajeFinanciacion}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-accent rounded-full"
                            style={{ width: `${project.porcentajeFinanciacion}%` }}
                        />
                    </div>
                </div> */}
            </div>
        </Link>
    )
}
