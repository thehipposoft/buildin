'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
/* import { useInversion } from '@/context/InversionContext'
import StepIndicator from './StepIndicator' */
import { ArrowLeft } from 'lucide-react'

const MONTOS_RAPIDOS = [100, 250, 500]

const COMISION_BUILDIN = 0.01   // 1%
const COMISION_SOCIO   = 0.005  // 0.5%
const ROI_ESTIMADO     = '12-15%'

export default function PasoMonto() {
  /* const { setMonto: guardarMonto } = useInversion() */
  const router  = useRouter()
  const { id }  = useParams<{ id: string }>()

  const [monto,    setMonto]    = useState<string>('')
  const [aceptado, setAceptado] = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  const montoNum       = parseFloat(monto) || 0
  const comisionBuildn = montoNum * COMISION_BUILDIN
  const comisionSocio  = montoNum * COMISION_SOCIO
  const totalPagar     = montoNum + comisionBuildn + comisionSocio

  function handleMontoRapido(valor: number) {
    setMonto(String(valor))
    setError(null)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (montoNum <= 0) {
      setError('Ingresa un monto válido.')
      return
    }
    if (!aceptado) {
      setError('Debes aceptar los términos y condiciones.')
      return
    }
    /* guardarMonto(montoNum) */
    router.push(`/proyectos/${id}/invertir/identidad`)
  }

  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-dark-text font-medium mb-4 hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={18} />
        <span>Monto de Inversión</span>
      </button>

      <hr className="border-gray-200 mb-6" />

      {/* Step indicator */}
      {/* <StepIndicator pasoActual={0} /> */}

      <hr className="border-gray-200 my-6" />

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">

        {/* Input monto */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-dark-text">
            Monto de Inversión
          </label>
          <input
            type="number"
            min={0}
            placeholder="Ej: $100"
            value={monto}
            onChange={(e) => { setMonto(e.target.value); setError(null) }}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-right
                       text-dark-text placeholder:text-light-text text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-accent focus:border-transparent"
          />
          <p className="text-xs text-light-text">Ingresa el monto que deseas invertir.</p>
        </div>

        {/* Montos rápidos */}
        <div className="flex gap-3">
          {MONTOS_RAPIDOS.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => handleMontoRapido(v)}
              className={`flex-1 py-2 rounded-full border text-sm font-medium transition-all
                ${monto === String(v)
                  ? 'border-blue-accent text-blue-accent bg-blue-50'
                  : 'border-gray-300 text-dark-text hover:border-blue-accent hover:text-blue-accent'
                }`}
            >
              ${v}
            </button>
          ))}
        </div>

        {/* Resumen */}
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3 border border-gray-100">
          <p className="font-semibold text-sm text-dark-text">Resumen de Inversión</p>

          <ResumenFila label="ROI Estimado"      valor={ROI_ESTIMADO}                    destacado />
          <ResumenFila label="Comisión BuildIn"  valor={montoNum ? `$${comisionBuildn.toFixed(2)}` : '$0'} />
          <ResumenFila label="Comisión del Socio" valor={montoNum ? `$${comisionSocio.toFixed(2)}` : '$0'} />

          <hr className="border-gray-200" />

          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-dark-text">Total a Pagar</span>
            <span className="text-sm font-bold text-blue-accent">
              {montoNum ? `$${totalPagar.toFixed(2)}` : '$0'}
            </span>
          </div>
        </div>

        {/* Términos */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={aceptado}
            onChange={(e) => { setAceptado(e.target.checked); setError(null) }}
            className="mt-0.5 w-4 h-4 accent-blue-accent shrink-0"
          />
          <span className="text-xs text-light-text leading-relaxed">
            Al Continuar acepto los{' '}
            <a href="#" className="text-blue-accent underline">términos y condiciones</a>
            {' '}y{' '}
            <a href="#" className="text-blue-accent underline">entiendo los riesgos asociados a la inversión</a>.
          </span>
        </label>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}

        {/* CTA */}
        <button
          type="submit"
          className="w-full bg-blue-accent text-white font-semibold py-4 rounded-xl
                     hover:brightness-110 active:scale-[0.98] transition-all mt-auto"
        >
          Continuar
        </button>

      </form>
    </div>
  )
}

/* ---- Sub-componente fila resumen ---- */
function ResumenFila({
  label,
  valor,
  destacado = false,
}: {
  label: string
  valor: string
  destacado?: boolean
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-light-text">{label}</span>
      <span className={`text-sm font-medium ${destacado ? 'text-dark-text' : 'text-dark-text'}`}>
        {valor}
      </span>
    </div>
  )
}