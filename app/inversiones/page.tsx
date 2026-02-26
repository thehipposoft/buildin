import Header from '@/components/Header'
import Inversiones from '@/components/Inversiones'
import React from 'react'
import Image from 'next/image'

export default function InversionesPage() {
    return (
        <div>
            <Header showSearch={false} />
            <Inversiones />
            <nav className="fixed bottom-0 left-0 right-0 z-20 flex items-end justify-around border-t border-gray-200 bg-white py-2">
                <button className={`flex flex-col items-center gap-1 p-1`}>
                    <Image src={"/assets/images/svg/bookmark.svg"} width={24} height={24} alt="Soporte" />
                    <span className="text-[10px] text-light-text font-bold">Guardados</span>
                </button>
                <button className={`flex flex-col items-center gap-1 p-1`}>
                    <Image src={"/assets/images/logo/buildin_icon_blue.png"} width={24} height={24} alt="Soporte" />
                    <span className="text-[10px] text-light-text font-bold">Inversiones</span>
                </button>
                <button className={`flex flex-col items-center gap-1 relative -top-6 border-gray-200 `}>
                    <Image src={"/assets/images/svg/maletin2.svg"} width={100} height={100} alt="Buildin" className="rounded-full bg-white absolute -top-12 border-t-2 object-cover" />
                    <span className="text-xs text-core-blue font-bold">Explorar</span>
                </button>
                <button className={`flex flex-col items-center gap-1 p-1`}>
                    <Image src={"/assets/images/svg/settings.svg"} width={24} height={24} alt="Soporte" />
                    <span className="text-[10px] text-light-text font-bold">Configuracion</span>
                </button>
                <button className={`flex flex-col items-center gap-1 p-1`}>
                    <Image src={"/assets/images/svg/soporte.svg"} width={24} height={24} alt="Soporte" />
                    <span className="text-[10px] text-light-text font-bold">Soporte</span>
                </button>
            </nav>
        </div>
    )
}
