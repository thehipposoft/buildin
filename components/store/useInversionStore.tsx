import { create } from 'zustand'

interface InversionState {
    projectId: string | null
    monto: number
    setMonto: (monto: number) => void
    setProjectId: (id: string) => void
    reset: () => void
}

export const useInversionStore = create<InversionState>((set) => ({
    projectId: null,
    monto: 0,
    setMonto: (monto) => set({ monto }),
    setProjectId: (id) => set({ projectId: id }),
    reset: () => set({ projectId: null, monto: 0 }),
}))