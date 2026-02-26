export type Project = {
    id: string;
    nombre: string;
    image: string; // URL string for now, will use placeholders
    logo: string; // Developer logo
    desarrollador: string,
    ubicacion: string;
    ubicacionType: "CABA" | "Interior" | "Otro";
    roi: string;
    valorRoi: number; // For filtering if needed
    minTicket: number;
    inversionMinima: number; // New field as requested
    status: "En Construcción" | "Obra - Avanzado" | "Obra - Comienzo" | "Terminado" | "Planificación" | "Pre-venta" | "Construcción";
    porcentajeFinanciacion: number;
    plazo: number;
    tags?: string[]; // New field for "Pre-venta" etc
    risk?: "Bajo" | "Medio" | "Alto"; // New field for "Riesgo: Bajo"
    proyectosCompletados: number;
    montoGestionado: string;
    stars: number;
    resumen: string;
}