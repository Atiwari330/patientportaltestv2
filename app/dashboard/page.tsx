'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { WelcomeCard } from '@/components/dashboard/welcome-card'
import { AssessmentSummary } from '@/components/dashboard/assessment-summary'
import { ProgressOverview } from '@/components/dashboard/progress-overview'
import { ActionItems } from '@/components/dashboard/action-items'
import { NextAppointment } from '@/components/dashboard/next-appointment'
import { usePatientStore } from '@/lib/stores/patient-store'
import { mockData } from '@/lib/db'

export default function DashboardPage() {
  const { data: session } = useSession()
  const { setPatient } = usePatientStore()

  useEffect(() => {
    // In demo mode, load mock patient data
    if (session?.user) {
      setPatient(mockData.patient)
    }
  }, [session, setPatient])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Welcome Card - Full width on mobile, 2 cols on desktop */}
        <div className="md:col-span-2 lg:col-span-2">
          <WelcomeCard />
        </div>
        
        {/* Next Appointment - 1 col */}
        <div className="lg:col-span-1">
          <NextAppointment />
        </div>
        
        {/* Assessment Summary - 1 col */}
        <div className="lg:col-span-1">
          <AssessmentSummary />
        </div>
        
        {/* Progress Overview - 1 col */}
        <div className="lg:col-span-1">
          <ProgressOverview />
        </div>
        
        {/* Action Items - 1 col */}
        <div className="lg:col-span-1">
          <ActionItems />
        </div>
      </div>
    </div>
  )
}