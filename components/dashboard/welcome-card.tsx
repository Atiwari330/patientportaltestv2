'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useSession } from 'next-auth/react'
import { format } from 'date-fns'
import { Sparkles } from 'lucide-react'

export function WelcomeCard() {
  const { data: session } = useSession()
  const timeOfDay = new Date().getHours() < 12 ? 'morning' : 
                    new Date().getHours() < 17 ? 'afternoon' : 'evening'

  return (
    <Card className="bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Good {timeOfDay}, {session?.user?.name?.split(' ')[0] || 'there'}!
            </h2>
            <p className="text-gray-600">
              {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary-500" />
                You've completed 3 assessments this week
              </p>
              <p className="text-sm text-gray-700">
                Your next appointment is in 3 days
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-3xl">😊</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}