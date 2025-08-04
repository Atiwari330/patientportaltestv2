'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, CheckSquare } from 'lucide-react'
import { mockData } from '@/lib/db'
import Link from 'next/link'
import { format } from 'date-fns'

export function ActionItems() {
  const pendingAssessments = ['PHQ-9', 'GAD-7']
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Action Items</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Pending Assessments */}
        {pendingAssessments.length > 0 && (
          <div className="p-3 bg-primary-50 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Complete assessments
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {pendingAssessments.join(', ')} due soon
                </p>
                <Link href="/dashboard/assessments" className="mt-2 inline-block">
                  <Button size="sm" variant="default">
                    Start Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Homework */}
        {mockData.homework.map((item) => (
          <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-gray-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {item.title}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Due {format(item.dueDate, 'MMM d')}
                </p>
              </div>
              <CheckSquare className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}