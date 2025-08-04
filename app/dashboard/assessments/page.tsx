'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { FileText, Clock, CheckCircle } from 'lucide-react'
import { PHQ9Assessment } from '@/components/assessments/phq9-assessment'
import { GAD7Assessment } from '@/components/assessments/gad7-assessment'
import { useAssessmentStore } from '@/lib/stores/assessment-store'

export default function AssessmentsPage() {
  const [activeTab, setActiveTab] = useState('available')
  const { currentAssessment, startAssessment } = useAssessmentStore()

  if (currentAssessment) {
    return currentAssessment === 'PHQ-9' ? <PHQ9Assessment /> : <GAD7Assessment />
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Assessments</h1>
        <p className="text-gray-600 mt-1">
          Regular assessments help track your progress and guide your treatment
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-lg p-1">
          <TabsTrigger 
            value="available" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded px-3 py-1.5 text-sm font-medium transition-all"
          >
            Available
          </TabsTrigger>
          <TabsTrigger 
            value="in-progress" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded px-3 py-1.5 text-sm font-medium transition-all"
          >
            In Progress
          </TabsTrigger>
          <TabsTrigger 
            value="completed" 
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded px-3 py-1.5 text-sm font-medium transition-all"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-4">
          {/* PHQ-9 Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>PHQ-9 Depression Screening</CardTitle>
                  <CardDescription>
                    Measures depression severity over the past 2 weeks
                  </CardDescription>
                </div>
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>5-10 minutes</span>
                </div>
                <Button onClick={() => startAssessment('PHQ-9')}>
                  Start Assessment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GAD-7 Card */}
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>GAD-7 Anxiety Screening</CardTitle>
                  <CardDescription>
                    Measures anxiety severity over the past 2 weeks
                  </CardDescription>
                </div>
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>3-5 minutes</span>
                </div>
                <Button onClick={() => startAssessment('GAD-7')}>
                  Start Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="in-progress">
          <Card>
            <CardContent className="py-8 text-center text-gray-500">
              <p>No assessments in progress</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardContent className="py-8 text-center text-gray-500">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-success" />
              <p>You've completed your recent assessments</p>
              <p className="text-sm mt-1">Check your progress page to see results</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}