'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Video } from 'lucide-react'
import { mockData } from '@/lib/db'
import { format } from 'date-fns'

export function NextAppointment() {
  const nextAppointment = mockData.appointments.next
  const daysUntil = Math.ceil((nextAppointment.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-primary-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold text-primary-600">
            {daysUntil} days
          </p>
          <p className="text-sm text-gray-600">
            {format(nextAppointment, 'EEEE, MMMM d')}
          </p>
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            {format(nextAppointment, 'h:mm a')}
          </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            With Dr. Emily Johnson
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Video className="h-4 w-4" />
            <span>Video Session</span>
          </div>
        </div>
        
        <div className="pt-2 space-y-2">
          <Button className="w-full" size="sm">
            Prepare for Session
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            Reschedule
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}