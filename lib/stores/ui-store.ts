import { create } from 'zustand'

interface UIState {
  isSidebarOpen: boolean
  isLoading: boolean
  notifications: Array<{
    id: string
    type: 'success' | 'error' | 'info' | 'warning'
    message: string
    timestamp: Date
  }>
  toggleSidebar: () => void
  setLoading: (loading: boolean) => void
  addNotification: (notification: Omit<UIState['notifications'][0], 'id' | 'timestamp'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  isLoading: false,
  notifications: [],
  
  toggleSidebar: () => set((state) => ({ 
    isSidebarOpen: !state.isSidebarOpen 
  })),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  addNotification: (notification) => set((state) => ({
    notifications: [
      ...state.notifications,
      {
        ...notification,
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date()
      }
    ]
  })),
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
  
  clearNotifications: () => set({ notifications: [] })
}))