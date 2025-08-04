import { create } from 'zustand'
import { mockData } from '@/lib/db'

interface PatientState {
  patient: typeof mockData.patient | null
  isLoading: boolean
  error: string | null
  setPatient: (patient: typeof mockData.patient) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

export const usePatientStore = create<PatientState>((set) => ({
  patient: null,
  isLoading: false,
  error: null,
  setPatient: (patient) => set({ patient }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set({ patient: null, isLoading: false, error: null }),
}))