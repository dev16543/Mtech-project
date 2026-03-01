import { PILLARS } from './questions'

// Hardcoded sample report for demo (no backend). AI-style cyan/teal palette.
export const SAMPLE_PILLAR_SCORES = [
  { name: PILLARS[0], score: 72, fill: '#06b6d4' },
  { name: PILLARS[1], score: 65, fill: '#0891b2' },
  { name: PILLARS[2], score: 58, fill: '#0d9488' },
  { name: PILLARS[3], score: 70, fill: '#22d3ee' },
  { name: PILLARS[4], score: 78, fill: '#14b8a6' },
]

export const SAMPLE_OVERALL_SCORE = 68

export const SAMPLE_STRENGTHS = [
  'You show a strong belief in your abilities in group and learning situations.',
  'You tend to view setbacks as learning opportunities.',
  'You are open to feedback and willing to try new skills.',
]

export const SAMPLE_AREAS = [
  'Social confidence in new or high-stakes situations (e.g. speaking up, networking).',
  'Emotional resilience when under pressure or after a setback.',
  'Decision-making confidence when the outcome is uncertain.',
]

export const CATEGORY_LABELS: Record<string, string> = {
  low: 'Low Confidence (0–40%)',
  moderate: 'Moderate Confidence (41–70%)',
  high: 'High Confidence (71–100%)',
}

export function getCategory(score: number): 'low' | 'moderate' | 'high' {
  if (score <= 40) return 'low'
  if (score <= 70) return 'moderate'
  return 'high'
}
