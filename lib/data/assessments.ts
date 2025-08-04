export const PHQ9_QUESTIONS = [
  {
    id: 'q1',
    text: 'Little interest or pleasure in doing things',
    shortText: 'Little interest',
  },
  {
    id: 'q2',
    text: 'Feeling down, depressed, or hopeless',
    shortText: 'Feeling down',
  },
  {
    id: 'q3',
    text: 'Trouble falling or staying asleep, or sleeping too much',
    shortText: 'Sleep problems',
  },
  {
    id: 'q4',
    text: 'Feeling tired or having little energy',
    shortText: 'Feeling tired',
  },
  {
    id: 'q5',
    text: 'Poor appetite or overeating',
    shortText: 'Appetite changes',
  },
  {
    id: 'q6',
    text: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down',
    shortText: 'Feeling bad about self',
  },
  {
    id: 'q7',
    text: 'Trouble concentrating on things, such as reading the newspaper or watching television',
    shortText: 'Trouble concentrating',
  },
  {
    id: 'q8',
    text: 'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
    shortText: 'Movement changes',
  },
  {
    id: 'q9',
    text: 'Thoughts that you would be better off dead or of hurting yourself in some way',
    shortText: 'Thoughts of self-harm',
    isHighRisk: true,
  },
]

export const GAD7_QUESTIONS = [
  {
    id: 'g1',
    text: 'Feeling nervous, anxious, or on edge',
    shortText: 'Feeling nervous',
  },
  {
    id: 'g2',
    text: 'Not being able to stop or control worrying',
    shortText: 'Can\'t stop worrying',
  },
  {
    id: 'g3',
    text: 'Worrying too much about different things',
    shortText: 'Worrying too much',
  },
  {
    id: 'g4',
    text: 'Trouble relaxing',
    shortText: 'Trouble relaxing',
  },
  {
    id: 'g5',
    text: 'Being so restless that it is hard to sit still',
    shortText: 'Restlessness',
  },
  {
    id: 'g6',
    text: 'Becoming easily annoyed or irritable',
    shortText: 'Easily annoyed',
  },
  {
    id: 'g7',
    text: 'Feeling afraid, as if something awful might happen',
    shortText: 'Feeling afraid',
  },
]

export const RESPONSE_OPTIONS = [
  { value: 0, label: 'Not at all', description: '0 days' },
  { value: 1, label: 'Several days', description: '1-6 days' },
  { value: 2, label: 'More than half the days', description: '7-11 days' },
  { value: 3, label: 'Nearly every day', description: '12-14 days' },
]

export function calculatePHQ9Severity(score: number): {
  severity: string
  description: string
  color: string
} {
  if (score >= 20) {
    return {
      severity: 'Severe Depression',
      description: 'Immediate professional support recommended',
      color: 'text-error',
    }
  } else if (score >= 15) {
    return {
      severity: 'Moderately Severe Depression',
      description: 'Professional support strongly recommended',
      color: 'text-orange-600',
    }
  } else if (score >= 10) {
    return {
      severity: 'Moderate Depression',
      description: 'Consider talking to a healthcare provider',
      color: 'text-warning',
    }
  } else if (score >= 5) {
    return {
      severity: 'Mild Depression',
      description: 'Monitor symptoms and consider support',
      color: 'text-blue-600',
    }
  } else {
    return {
      severity: 'Minimal Depression',
      description: 'Continue self-care and monitoring',
      color: 'text-success',
    }
  }
}

export function calculateGAD7Severity(score: number): {
  severity: string
  description: string
  color: string
} {
  if (score >= 15) {
    return {
      severity: 'Severe Anxiety',
      description: 'Professional support strongly recommended',
      color: 'text-error',
    }
  } else if (score >= 10) {
    return {
      severity: 'Moderate Anxiety',
      description: 'Consider talking to a healthcare provider',
      color: 'text-warning',
    }
  } else if (score >= 5) {
    return {
      severity: 'Mild Anxiety',
      description: 'Monitor symptoms and practice self-care',
      color: 'text-blue-600',
    }
  } else {
    return {
      severity: 'Minimal Anxiety',
      description: 'Continue healthy coping strategies',
      color: 'text-success',
    }
  }
}