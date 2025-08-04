'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'
import { mockData } from '@/lib/db'

export function AssessmentSummary() {
  const latestPHQ9 = mockData.assessments.filter(a => a.type === 'PHQ-9').sort((a, b) => b.date.getTime() - a.date.getTime())[0]
  const previousPHQ9 = mockData.assessments.filter(a => a.type === 'PHQ-9').sort((a, b) => b.date.getTime() - a.date.getTime())[1]
  
  const latestGAD7 = mockData.assessments.filter(a => a.type === 'GAD-7').sort((a, b) => b.date.getTime() - a.date.getTime())[0]
  const previousGAD7 = mockData.assessments.filter(a => a.type === 'GAD-7').sort((a, b) => b.date.getTime() - a.date.getTime())[1]

  const phq9Trend = latestPHQ9.score - previousPHQ9.score
  const gad7Trend = latestGAD7.score - previousGAD7.score

  const getTrendIcon = (trend: number) => {
    if (trend < 0) return <TrendingDown className="h-4 w-4 text-success" />
    if (trend > 0) return <TrendingUp className="h-4 w-4 text-error" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Assessments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* PHQ-9 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">PHQ-9 Depression</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{latestPHQ9.score}/27</span>
              {getTrendIcon(phq9Trend)}
            </div>
          </div>
          <Progress value={(latestPHQ9.score / 27) * 100} className="h-2" />
          <p className="text-xs text-gray-500">{latestPHQ9.severity}</p>
        </div>

        {/* GAD-7 */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">GAD-7 Anxiety</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{latestGAD7.score}/21</span>
              {getTrendIcon(gad7Trend)}
            </div>
          </div>
          <Progress value={(latestGAD7.score / 21) * 100} className="h-2" />
          <p className="text-xs text-gray-500">{latestGAD7.severity}</p>
        </div>
        
        <div className="pt-2 border-t">
          <p className="text-xs text-gray-600 text-center">
            Great progress! Your scores have improved significantly.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}