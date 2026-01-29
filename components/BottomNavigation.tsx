import React from "react";
import {
    Compass,
    Bookmark,
    Briefcase,
    Settings,
    Headphones
} from "lucide-react";

export default function BottomNavigation() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-around border-t border-gray-200 bg-white py-2 pb-safe">
            <NavItem icon={Compass} label="Explorar" active />
            <NavItem icon={Bookmark} label="Guardados" />
            <NavItem icon={Briefcase} label="Inversiones" />
            <NavItem icon={Settings} label="Configuración" />
            <NavItem icon={Headphones} label="Soporte" />
        </nav>
    );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <button className={`flex flex-col items-center gap-1 p-2 ${active ? 'text-[var(--color-core-blue)]' : 'text-gray-400'}`}>
            <Icon className={`h-6 w-6 ${active ? 'fill-current' : ''}`} strokeWidth={2} />
            <span className="text-[10px] font-medium">{label}</span>
        </button>
    )
}
