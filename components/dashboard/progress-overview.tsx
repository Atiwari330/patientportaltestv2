'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { CheckCircle2, Circle } from 'lucide-react'
import { mockData } from '@/lib/db'

export function ProgressOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Treatment Goals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockData.goals.map((goal) => (
          <div key={goal.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {goal.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-success" />
                ) : (
                  <Circle className="h-4 w-4 text-gray-400" />
                )}
                <span className="text-sm font-medium">{goal.title}</span>
              </div>
              <span className="text-xs text-gray-500">{goal.progress}%</span>
            </div>
            <Progress value={goal.progress} className="h-2" />
            <p className="text-xs text-gray-500">
              {goal.current} / {goal.target} {goal.completed ? 'Completed!' : 'In Progress'}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}