"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  ArrowLeft,
  Maximize,
  BarChart3,
  Clock,
  DollarSign,
  AlertCircle,
  Target,
  FileText,
} from "lucide-react";
import { PROJECTS } from "./Marketplace/constants";
import { DESARROLLADORES } from "./Marketplace/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="6"
    fill="none"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
  >
    <path fill="#1E2229" d="M8.236.196a.67.67 0 1 1 .948.948l-4.02 4.02a.67.67 0 0 1-.948 0l-4.02-4.02-.046-.051A.67.67 0 0 1 1.093.15l.05.046L4.69 3.743 8.236.196Z" />
  </svg>
);

export default function DetalleProyecto({ projectId }: { projectId: string }) {
  const router = useRouter();
  console.log("projectId", projectId);
  // 1. Buscamos el proyecto usando la prop 'projectId'
  // Usamos String() en ambos lados para evitar errores de tipo
  const project = PROJECTS.find(p => String(p.id) === String(projectId));

  // 2. Si el proyecto no existe, mostramos un estado de error simple
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Proyecto no encontrado (ID: {projectId})</p>
      </div>
    );
  }

  // 3. Ahora que sabemos que existe el proyecto, buscamos al desarrollador
  const desarrollador = DESARROLLADORES.find(
    (dev) => dev.nombre === project.desarrollador
  );

  // State para secciones expandidas
  const [expandedSections, setExpandedSections] = useState({
    desarrollador: true,
    resumen: true,
    hitos: true,
    documentos: false,
    actualizaciones: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Si no hay desarrollador, mostramos un aviso pero permitimos ver el resto
  if (!desarrollador) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p>No se encontró la información del desarrollador para {project.nombre}</p>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24 font-sans max-w-md mx-auto relative shadow-2xl">
      {/* HEADER */}
      <div className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-xs">
        <Link href="/" className="flex items-center text-gray-700">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="text-dark-text font-manrope font-semibold">Detalle del Proyecto</span>
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

      {/* HERO IMAGE */}
      <div className="relative h-80 w-full">
        <Image
          src={project.image}
          alt={project.nombre}
          fill
          className="object-cover rounded-t-2xl"
        />
        <button className="absolute top-4 right-4 p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-colors">
          <Maximize className="h-5 w-5" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 px-10 bg-linear-to-l from-[#ebe8e82b] to-[#0f6cef6d] backdrop-blur-sm pt-12 pb-12">
          <h1 className="text-2xl font-semibold text-black mb-1 leading-tight">{project.nombre}</h1>
          <div className="flex items-center text-black/90 ">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span className="truncate mr-1">{project.ubicacion}</span>
            <button className="text-blue-accent font-semibold hover:text-blue-300 ml-1">Ver Mapa</button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative rounded-t-3xl bg-white px-10 pb-4">
        {/* METRICS CARD */}
        <div className="bg-gray-50 rounded-2xl p-6 -translate-y-8 shadow-sm border border-gray-100">
          <h3 className="font-manrope text-xl text-dark-text mb-4 px-2">Métricas Clave</h3>
          <div className="space-y-4 px-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-100 text-blue-600"><BarChart3 className="h-4 w-4" /></span>
                <span className="font-inter text-light-text text-sm">ROI Objetivo</span>
              </div>
              <span className="font-manrope text-dark-text font-semibold text-sm">{project.roi}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-100 text-blue-600"><Clock className="h-4 w-4" /></span>
                <span className="font-inter text-light-text text-sm">Plazo Estimado</span>
              </div>
              <span className="font-manrope text-dark-text font-semibold text-sm">{project.plazo} meses</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-100 text-blue-600"><DollarSign className="h-4 w-4" /></span>
                <span className="font-inter text-light-text text-sm">Inversión Mínima</span>
              </div>
              <span className="font-manrope text-dark-text font-semibold text-sm">{project.inversionMinima} USD</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded bg-blue-100 text-blue-600"><AlertCircle className="h-4 w-4" /></span>
                <span className="font-inter text-light-text text-sm">Riesgo</span>
              </div>
              <span className="font-manrope text-dark-text font-semibold text-sm">{project.risk || "Moderado"}</span>
            </div>
          </div>
        </div>

        {/* DEVELOPER SECTION */}
        <div className="border-b border-gray-100 py-4">
          <button onClick={() => toggleSection('desarrollador')} className="flex items-center justify-between w-full mb-2">
            <h3 className="text-lg font-manrope text-dark-text font-medium">Desarrollador</h3>
            <ArrowIcon isOpen={expandedSections.desarrollador} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.desarrollador ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="mt-2 text-sm text-gray-600">
              <div className="flex items-start gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
                  <Image src={desarrollador.logo} width={48} height={48} alt="Dev" className="object-cover h-full w-full" />
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {[1, 2, 3, 4].map(i => <span key={i} className="text-yellow-400 text-xs">★</span>)}
                  </div>
                  <p className="text-xs text-gray-500 mb-0.5">🏢 {desarrollador.proyectos} proyectos completados</p>
                  <p className="text-xs text-gray-500">📈 {desarrollador.montoGestionado}</p>
                </div>
              </div>
              <h4 className="text-lg font-manrope text-dark-text mb-2 font-medium">{desarrollador.nombre}</h4>
              <p className="leading-6 text-justify text-base font-inter text-light-text">{desarrollador.descripcion}</p>
            </div>
          </div>
        </div>

        {/* RESUMEN */}
        <div className="border-b border-gray-100 py-4">
          <button onClick={() => toggleSection('resumen')} className="flex items-center justify-between w-full mb-2">
            <h3 className="text-lg font-manrope text-dark-text font-medium">Resumen</h3>
            <ArrowIcon isOpen={expandedSections.resumen} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSections.resumen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <p className="leading-6 text-justify text-base font-inter text-light-text mt-2">{project.resumen}</p>
          </div>
        </div>
      </div>

      {/* FOOTER BUTTON */}
      <div className="p-4 bg-white border-t border-gray-100 md:max-w-md md:mx-auto z-50">
        <button
          onClick={() => router.push(`/proyectos/${projectId}/invertir/monto-inversion`)}
          className="w-full bg-blue-accent text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
        >
          Invertir
        </button>
      </div>
    </div>
  );
}