import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/patient_portal'

// For query purposes
const queryClient = postgres(connectionString)
export const db = drizzle(queryClient, { schema })

// Mock data for demo mode
export const mockData = {
  patient: {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    age: 34,
    conditions: ['Generalized Anxiety Disorder', 'Mild Depression'],
    treatmentDuration: '12 weeks',
  },
  assessments: [
    {
      id: '1',
      type: 'PHQ-9',
      date: new Date('2024-01-15'),
      score: 14,
      severity: 'Moderate Depression',
      responses: {
        q1: 2, q2: 2, q3: 2, q4: 1, q5: 1, q6: 2, q7: 2, q8: 1, q9: 1
      }
    },
    {
      id: '2',
      type: 'PHQ-9',
      date: new Date('2024-02-15'),
      score: 9,
      severity: 'Mild Depression',
      responses: {
        q1: 1, q2: 1, q3: 2, q4: 1, q5: 0, q6: 1, q7: 1, q8: 1, q9: 1
      }
    },
    {
      id: '3',
      type: 'PHQ-9',
      date: new Date('2024-03-15'),
      score: 4,
      severity: 'Minimal Depression',
      responses: {
        q1: 1, q2: 0, q3: 2, q4: 1, q5: 0, q6: 0, q7: 0, q8: 0, q9: 0
      }
    },
    {
      id: '4',
      type: 'GAD-7',
      date: new Date('2024-01-15'),
      score: 16,
      severity: 'Severe Anxiety',
      responses: {
        q1: 3, q2: 2, q3: 3, q4: 2, q5: 2, q6: 2, q7: 2
      }
    },
    {
      id: '5',
      type: 'GAD-7',
      date: new Date('2024-02-15'),
      score: 11,
      severity: 'Moderate Anxiety',
      responses: {
        q1: 2, q2: 2, q3: 2, q4: 1, q5: 1, q6: 2, q7: 1
      }
    },
    {
      id: '6',
      type: 'GAD-7',
      date: new Date('2024-03-15'),
      score: 6,
      severity: 'Mild Anxiety',
      responses: {
        q1: 1, q2: 1, q3: 1, q4: 1, q5: 1, q6: 1, q7: 0
      }
    }
  ],
  appointments: {
    next: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    last: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
  goals: [
    {
      id: '1',
      title: 'Reduce PHQ-9 Score Below 5',
      progress: 80,
      target: 5,
      current: 4,
      completed: true
    },
    {
      id: '2',
      title: 'Practice Mindfulness Daily',
      progress: 65,
      target: 30,
      current: 19.5,
      completed: false
    },
    {
      id: '3',
      title: 'Complete CBT Modules',
      progress: 75,
      target: 8,
      current: 6,
      completed: false
    }
  ],
  homework: [
    {
      id: '1',
      title: 'Complete PHQ-9 Assessment',
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      status: 'pending'
    },
    {
      id: '2',
      title: 'Mood Journal Entry',
      dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      status: 'pending'
    }
  ]
}