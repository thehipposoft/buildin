import React from "react";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 bg-white px-4 py-4 shadow-sm md:px-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-core-blue)] text-white font-bold">
                        B
                    </div>
                    <span className="text-xl font-bold text-[var(--color-core-blue)] tracking-tight">buildin</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                        {/* Placeholder Avatar */}
                        <div className="bg-gray-300 h-full w-full"></div>
                    </div>
                    <div className="relative">
                        <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">2</span>
                        <span className="text-gray-600">🔔</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
