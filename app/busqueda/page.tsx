"use client"
import Marketplace from '@/components/Marketplace'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

export default function BusquedaPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BusquedaContent />
        </Suspense>
    )
}

function BusquedaContent() {
    const searchParams = useSearchParams();

    // Extract search query and filters from URL
    const searchQuery = searchParams.get('q') || '';
    const filters = {
        ubicacion: searchParams.get('ubicacion') || null,
        estado: searchParams.get('estado') || null,
        roi: searchParams.get('roi') || null,
        plazo: searchParams.get('plazo') || null,
    };

    return (
        <div>
           <header className="sticky top-0 z-50 bg-bg-ui">
                <div className="px-4 py-4 md:px-6">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <Link href={"/"} className="flex items-center gap-2">
                            <Image src={"/assets/images/logo/logo_blue.png"} alt="Building Logo" width={180} height={65} />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 relative rounded-full overflow-hidden border border-gray-200">
                                <Image src="/avatar-example.png" className="object-cover" fill alt="User" />
                            </div>
                            <div className='w-px h-12 bg-gray-300' />
                            <div className="relative">
                                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-red-500 text-[8px] text-white">2</span>
                                <Image src={"/assets/images/svg/campana.svg"} alt="Campana" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        <div className='bg-bg-ui'>
            <Marketplace
                initialSearchQuery={searchQuery}
                initialFilters={filters}
            />
        </div>
        </div>
    )
}
