export interface Project {
    id: string;
    name: string;
    image: string; // URL string for now, will use placeholders
    location: string;
    locationType: "CABA" | "Interior" | "Otro";
    roi: string;
    roiValue: number; // For filtering if needed
    minTicket: number;
    status: "En Construcción" | "Obra - Avanzado" | "Obra - Comienzo" | "Terminado";
    financedPercentage: number;
    termMonths: number;
    tags?: string[]; // New field for "Pre-venta" etc
    risk?: "Bajo" | "Medio" | "Alto"; // New field for "Riesgo: Bajo"
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        name: "Grand View Residences",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        location: "M. T. Alvear 1888, Recoleta, Argentina",
        locationType: "CABA",
        roi: "12-15% Anual",
        roiValue: 15,
        minTicket: 150000,
        status: "Obra - Avanzado",
        financedPercentage: 80,
        termMonths: 24,
        tags: ["Pre-venta"],
        risk: "Bajo",
    },
    {
        id: "2",
        name: "Torre Madero Center",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
        location: "Juana Manso 555, Capital Federal, Argentina",
        locationType: "CABA",
        roi: "12-10% Anual",
        roiValue: 12,
        minTicket: 120000,
        status: "Obra - Comienzo",
        financedPercentage: 20,
        termMonths: 18,
        tags: ["Pozo"],
        risk: "Medio",
    },
    {
        id: "3",
        name: "Horizonte Norte",
        image: "https://images.unsplash.com/photo-1570129477492-45f003fdd66b?q=80&w=2670&auto=format&fit=crop",
        location: "Av. Libertador 2400, Olivos, Buenos Aires",
        locationType: "Interior",
        roi: "10-12% Anual",
        roiValue: 12,
        minTicket: 100000,
        status: "Terminado",
        financedPercentage: 100,
        termMonths: 12,
        tags: ["Terminado", "Rentabilidad"],
        risk: "Bajo",
    },
    {
        id: "4",
        name: "Edificio Park View",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2670&auto=format&fit=crop",
        location: "Calle 50 y 12, La Plata, Buenos Aires",
        locationType: "Interior",
        roi: "15-18% Anual",
        roiValue: 18,
        minTicket: 80000,
        status: "Obra - Avanzado",
        financedPercentage: 60,
        termMonths: 24,
        tags: ["Pre-venta"],
        risk: "Medio",
    },
];

export const FILTER_OPTIONS = {
    ubicacion: ["CABA", "Interior", "Otro"],
    estado: ["Obra - Avanzado", "Obra - Comienzo", "Terminado"],
    roi: ["25%", "50%", "13%"], // As requested, though logic might need numeric parsing
    plazo: ["12 meses", "18 meses", "24 meses"],
};
