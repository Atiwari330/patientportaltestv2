import { create } from 'zustand'

interface AssessmentResponse {
  questionId: string
  value: number
}

interface AssessmentState {
  currentAssessment: string | null
  currentQuestion: number
  responses: Record<string, number>
  isSubmitting: boolean
  startAssessment: (type: string) => void
  setCurrentQuestion: (question: number) => void
  setResponse: (questionId: string, value: number) => void
  nextQuestion: () => void
  previousQuestion: () => void
  resetAssessment: () => void
  submitAssessment: () => Promise<void>
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  currentAssessment: null,
  currentQuestion: 0,
  responses: {},
  isSubmitting: false,
  
  startAssessment: (type) => set({ 
    currentAssessment: type, 
    currentQuestion: 0, 
    responses: {} 
  }),
  
  setCurrentQuestion: (question) => set({ currentQuestion: question }),
  
  setResponse: (questionId, value) => set((state) => ({
    responses: { ...state.responses, [questionId]: value }
  })),
  
  nextQuestion: () => set((state) => ({
    currentQuestion: state.currentQuestion + 1
  })),
  
  previousQuestion: () => set((state) => ({
    currentQuestion: Math.max(0, state.currentQuestion - 1)
  })),
  
  resetAssessment: () => set({
    currentAssessment: null,
    currentQuestion: 0,
    responses: {},
    isSubmitting: false
  }),
  
  submitAssessment: async () => {
    set({ isSubmitting: true })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // In real app, would save to database
    const { responses, currentAssessment } = get()
    console.log('Submitting assessment:', currentAssessment, responses)
    
    set({ isSubmitting: false })
    get().resetAssessment()
  }
}))