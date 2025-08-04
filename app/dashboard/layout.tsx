import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { PatientHeader } from '@/components/layout/patient-header'
import { Sidebar } from '@/components/layout/sidebar'
import { BottomNavigation } from '@/components/layout/bottom-navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      <Sidebar />
      
      <div className="md:pl-64 flex flex-col flex-1">
        <PatientHeader />
        
        <main className="flex-1 pb-16 md:pb-0">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
        
        <BottomNavigation />
      </div>
    </div>
  )
}