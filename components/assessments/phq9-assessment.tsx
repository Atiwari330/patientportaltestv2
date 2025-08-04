'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react'
import { PHQ9_QUESTIONS, RESPONSE_OPTIONS, calculatePHQ9Severity } from '@/lib/data/assessments'
import { useAssessmentStore } from '@/lib/stores/assessment-store'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export function PHQ9Assessment() {
  const router = useRouter()
  const {
    currentQuestion,
    responses,
    setResponse,
    nextQuestion,
    previousQuestion,
    resetAssessment,
    submitAssessment,
    isSubmitting
  } = useAssessmentStore()

  const [showResults, setShowResults] = useState(false)

  const currentQ = PHQ9_QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / PHQ9_QUESTIONS.length) * 100
  const isLastQuestion = currentQuestion === PHQ9_QUESTIONS.length - 1
  const canProceed = responses[currentQ.id] !== undefined

  const handleNext = () => {
    if (isLastQuestion) {
      calculateAndShowResults()
    } else {
      nextQuestion()
    }
  }

  const calculateAndShowResults = () => {
    const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0)
    setShowResults(true)
  }

  const handleSubmit = async () => {
    await submitAssessment()
    router.push('/dashboard')
  }

  if (showResults) {
    const totalScore = Object.values(responses).reduce((sum, val) => sum + val, 0)
    const { severity, description, color } = calculatePHQ9Severity(totalScore)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle>PHQ-9 Assessment Complete</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100">
                <span className="text-3xl font-bold text-primary-600">{totalScore}</span>
              </div>
              <h3 className={cn('text-xl font-semibold', color)}>{severity}</h3>
              <p className="text-gray-600">{description}</p>
            </div>

            {/* Question Summary */}
            <div className="space-y-2 pt-4 border-t">
              <h4 className="font-medium text-gray-900 mb-3">Your Responses</h4>
              {PHQ9_QUESTIONS.map((q) => (
                <div key={q.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{q.shortText}</span>
                  <span className="font-medium">
                    {RESPONSE_OPTIONS[responses[q.id]].label}
                  </span>
                </div>
              ))}
            </div>

            {/* High Risk Alert */}
            {responses.q9 > 0 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-red-900">
                      Important: You indicated thoughts of self-harm
                    </p>
                    <p className="text-sm text-red-700">
                      Please reach out to your provider or crisis support immediately.
                    </p>
                    <Button variant="destructive" size="sm" className="mt-2">
                      Get Crisis Support
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowResults(false)
                  resetAssessment()
                }}
                className="flex-1"
              >
                Retake Assessment
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1"
              >
                {isSubmitting ? 'Saving...' : 'Save & Return'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto"
    >
      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle>PHQ-9 Depression Screening</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetAssessment}
              >
                Exit
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Question {currentQuestion + 1} of {PHQ9_QUESTIONS.length}
                </span>
                <span className="text-gray-600">{Math.round(progress)}% complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Over the last 2 weeks, how often have you been bothered by:
                </h3>
                <p className="text-xl text-gray-800">{currentQ.text}</p>
                {currentQ.isHighRisk && (
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    If you're having these thoughts, please seek help immediately
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {RESPONSE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setResponse(currentQ.id, option.value)}
                    className={cn(
                      'w-full p-4 rounded-lg border-2 text-left transition-all',
                      responses[currentQ.id] === option.value
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{option.label}</p>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                      <div className={cn(
                        'w-5 h-5 rounded-full border-2',
                        responses[currentQ.id] === option.value
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      )}>
                        {responses[currentQ.id] === option.value && (
                          <div className="w-full h-full rounded-full bg-white scale-50" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed}
            >
              {isLastQuestion ? 'Complete' : 'Next'}
              {!isLastQuestion && <ChevronRight className="h-4 w-4 ml-1" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}