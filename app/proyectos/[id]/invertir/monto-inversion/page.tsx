import MontoInversion from '@/components/InvestmentProcess/MontoInversion'
import React from 'react'

interface Props {
  params: Promise<{ id: string }>
}

export default async function MontoInversionPage({ params }: Props) {
  const { id } = await params

  return (
    <div>
      <MontoInversion projectId={id} />
    </div>
  )
}
