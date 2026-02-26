import BottomNavigation from '@/components/BottomNavigation'
import DetalleProyecto from '@/components/DetalleProyecto'
import React from 'react'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Esperamos a que el ID esté disponible
  return (
    <div>
      <DetalleProyecto projectId={id} />
      <BottomNavigation />
    </div>
  )
}