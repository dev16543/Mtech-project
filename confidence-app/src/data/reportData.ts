import { PILLARS, SCENARIO_QUESTIONS, type AnswerValue, type PillarIndex } from './questions'

const STORAGE_KEY = 'confidence-app-latest-report'
const PILLAR_COLORS = ['#06b6d4', '#0891b2', '#0d9488', '#22d3ee', '#14b8a6'] as const
const ANSWER_WEIGHTS: Record<AnswerValue, number> = {
  low: 1,
  moderate: 2,
  high: 3,
}

export interface PillarScore {
  name: string
  score: number
  fill: string
}

export interface AssessmentReport {
  overallScore: number
  pillarScores: PillarScore[]
  strengths: string[]
  areas: string[]
  completedAt: string
  source: 'scenario' | 'video'
}

export interface ActionPlanSection {
  pillarIndex: PillarIndex
  pillarName: string
  pillarScore: number
  focusLabel: string
  tips: string[]
}

const PILLAR_FEEDBACK: Record<PillarIndex, {
  strength: string
  area: string
}> = {
  0: {
    strength: 'You show healthy self-worth and are more likely to value your own contribution.',
    area: 'Build self-worth by noticing strengths and accepting positive feedback more directly.',
  },
  1: {
    strength: 'You tend to recover from setbacks with steadiness and emotional control.',
    area: 'Practice calmer recovery after setbacks so stress does not define the situation.',
  },
  2: {
    strength: 'You communicate with more confidence and are willing to speak up when needed.',
    area: 'Strengthen your voice in social or high-pressure moments by practicing clear, direct communication.',
  },
  3: {
    strength: 'You make decisions with more ownership and can tolerate reasonable uncertainty.',
    area: 'Work on trusting your judgment when choices feel uncertain or carry some risk.',
  },
  4: {
    strength: 'You treat feedback and mistakes as part of learning and growth.',
    area: 'Lean further into a growth mindset by treating mistakes as information, not verdicts.',
  },
}

export const CATEGORY_LABELS: Record<'low' | 'moderate' | 'high', string> = {
  low: 'Low Confidence (0-40%)',
  moderate: 'Moderate Confidence (41-70%)',
  high: 'High Confidence (71-100%)',
}

export function getCategory(score: number): 'low' | 'moderate' | 'high' {
  if (score <= 40) return 'low'
  if (score <= 70) return 'moderate'
  return 'high'
}

const ACTION_PLAN_TIPS: Record<PillarIndex, Record<'low' | 'moderate' | 'high', string[]>> = {
  0: {
    low: [
      'Write down one strength or win at the end of each day, even if it feels small.',
      'When someone compliments you, reply with a plain "Thank you" and stop there.',
      'Before a difficult task, say one sentence about what you can do well.',
      'Replace one harsh self-judgment with a more balanced statement you would say to a friend.',
      'Keep a short list of past moments where your effort or ideas helped a group.',
    ],
    moderate: [
      'Choose one situation this week where you share your opinion without apologizing first.',
      'Notice one moment where you compare yourself to someone else and redirect to your own progress.',
      'Practice accepting praise without explaining it away.',
      'List three qualities you want to be known for and look for evidence of them in your day.',
      'Volunteer one idea in a group setting where you would usually stay quiet.',
    ],
    high: [
      'Take on one visible responsibility this week that lets you use your strengths.',
      'Help someone else notice their strengths while staying grounded in your own.',
      'Reflect on which environments bring out your strongest self and seek more of them.',
      'Set one stretch goal that matches your ability instead of playing small.',
      'Notice how confident self-talk affects your energy before a challenge.',
    ],
  },
  1: {
    low: [
      'After a setback, write one thing that happened, one feeling you had, and one next step.',
      'Practice three slow breaths before reacting when you feel embarrassed or stressed.',
      'Name one past challenge you recovered from and what helped you get through it.',
      'When you feel overwhelmed, break the problem into the smallest next action possible.',
      'Create a short calming routine you can repeat before difficult conversations.',
    ],
    moderate: [
      'When something goes wrong, wait five minutes before deciding what it means about you.',
      'Try journaling one lesson after a frustrating moment instead of replaying it all day.',
      'Ask yourself, "What would steady me right now?" after a stressful event.',
      'Practice recovering from small awkward moments by moving on without overexplaining.',
      'Choose one supportive person you can check in with when pressure spikes.',
    ],
    high: [
      'Use your calm moments to build a repeatable reset routine for busier days.',
      'Reflect on which coping habits actually help you recover fastest.',
      'Practice staying open during feedback even when you already feel composed.',
      'Support someone else through a setback while noticing what that teaches you about resilience.',
      'Stretch your comfort zone with one challenge that requires emotional steadiness.',
    ],
  },
  2: {
    low: [
      'Speak once in a meeting or conversation even if your point is brief.',
      'Practice introducing yourself out loud until it feels natural.',
      'Prepare one sentence you can use when you need to re-enter a conversation.',
      'Ask one simple follow-up question in a social setting instead of waiting silently.',
      'Rehearse a calm phrase for interruptions, such as "I would like to finish my thought."',
    ],
    moderate: [
      'Start one conversation this week instead of waiting for others to begin.',
      'Practice saying your point in one clear sentence before adding details.',
      'Notice when hesitation comes from fear of judgment and answer anyway.',
      'Try maintaining steady eye contact for one extra beat while speaking.',
      'Use one example from your own experience when sharing an idea.',
    ],
    high: [
      'Lead one small discussion or check-in to strengthen your communication range.',
      'Practice balancing confidence with curiosity by inviting others in after you speak.',
      'Refine your delivery by recording one short answer and replaying it once.',
      'Choose one situation where you deliberately speak earlier than usual.',
      'Help quieter people join a conversation while keeping your own presence strong.',
    ],
  },
  3: {
    low: [
      'Set a time limit for one decision today and commit when the timer ends.',
      'Write down the safest choice and the boldest choice, then compare actual risks.',
      'Practice making one low-stakes decision without asking for reassurance.',
      'After a decision, review what you learned instead of only whether it felt perfect.',
      'Take one small step toward a goal that feels slightly uncomfortable.',
    ],
    moderate: [
      'Use a quick pros-and-cons list when you catch yourself looping.',
      'Commit to one decision this week without reopening it afterward.',
      'Notice where you want certainty that no one really gets before acting.',
      'Try framing risk as a chance to gather information rather than prove yourself.',
      'Pick one stretch opportunity and define the first manageable step.',
    ],
    high: [
      'Take on one project that requires visible ownership and follow-through.',
      'Reflect on a recent good decision and what instincts supported it.',
      'Practice making decisions faster when the downside is small.',
      'Coach yourself through uncertainty by focusing on what you can influence.',
      'Choose one calculated risk that would meaningfully expand your experience.',
    ],
  },
  4: {
    low: [
      'Ask for one specific piece of feedback and write down one thing you will try.',
      'Reframe one recent mistake as data about what to improve next.',
      'Try a new skill for 15 minutes without judging your first attempt.',
      'List one thing a setback taught you before deciding how to respond.',
      'Notice where fear of being bad at something keeps you from beginning.',
    ],
    moderate: [
      'When you receive feedback, wait before defending yourself and pull out one useful point.',
      'Choose one skill you can improve through repetition and practice it twice this week.',
      'Write a short note about what changed the last time you improved at something hard.',
      'Treat one imperfect result as part of the process instead of a signal to stop.',
      'Borrow one learning habit from someone who is ahead of you.',
    ],
    high: [
      'Pick a new stretch skill and give it a small weekly practice slot.',
      'Look for feedback that sharpens your strengths, not just your weak spots.',
      'Share one lesson from a recent failure with someone else.',
      'Review your progress monthly so growth stays visible and motivating.',
      'Challenge yourself with a project that requires learning in public.',
    ],
  },
}

function createSeed(value: string) {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

function createRandom(seed: number) {
  let state = seed || 1

  return () => {
    state |= 0
    state = (state + 0x6d2b79f5) | 0
    let value = Math.imul(state ^ (state >>> 15), 1 | state)
    value ^= value + Math.imul(value ^ (value >>> 7), 61 | value)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function seededShuffle<T>(items: T[], seedKey: string) {
  const shuffled = [...items]
  const random = createRandom(createSeed(seedKey))

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }

  return shuffled
}

function getFocusLabel(score: number) {
  const category = getCategory(score)
  if (category === 'low') return 'Priority focus'
  if (category === 'moderate') return 'Build steadily'
  return 'Maintain and stretch'
}

function normalizeScore(totalWeight: number, answerCount: number) {
  if (answerCount === 0) return 0

  const min = answerCount * ANSWER_WEIGHTS.low
  const max = answerCount * ANSWER_WEIGHTS.high
  return Math.round(((totalWeight - min) / (max - min)) * 100)
}

export function calculateAssessmentReport(answers: Partial<Record<number, AnswerValue>>): AssessmentReport {
  const totals = PILLARS.map(() => 0)
  const counts = PILLARS.map(() => 0)

  SCENARIO_QUESTIONS.forEach((question) => {
    const answer = answers[question.id]
    if (!answer) return

    totals[question.pillar] += ANSWER_WEIGHTS[answer]
    counts[question.pillar] += 1
  })

  const pillarScores = PILLARS.map((name, index) => ({
    name,
    score: normalizeScore(totals[index], counts[index]),
    fill: PILLAR_COLORS[index],
  }))

  const answeredPillars = pillarScores
    .map((pillar, index) => ({ ...pillar, index: index as PillarIndex }))
    .filter((_, index) => counts[index] > 0)

  const overallScore = answeredPillars.length === 0
    ? 0
    : Math.round(answeredPillars.reduce((sum, pillar) => sum + pillar.score, 0) / answeredPillars.length)

  const strongest = [...answeredPillars]
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, Math.min(3, answeredPillars.length))

  const weakest = [...answeredPillars]
    .sort((a, b) => a.score - b.score || a.index - b.index)
    .slice(0, Math.min(3, answeredPillars.length))

  return {
    overallScore,
    pillarScores,
    strengths: strongest.map((pillar) => PILLAR_FEEDBACK[pillar.index].strength),
    areas: weakest.map((pillar) => PILLAR_FEEDBACK[pillar.index].area),
    completedAt: new Date().toISOString(),
    source: 'scenario',
  }
}

const VIDEO_STRENGTHS = [
  'Your on-camera presence comes across as steady and engaged.',
  'You appear comfortable organizing your thoughts before responding.',
  'Your tone suggests a calm, approachable communication style.',
  'You maintain a composed delivery even when reflecting on challenges.',
  'Your responses project a solid level of self-belief and readiness.',
]

const VIDEO_AREAS = [
  'Practice keeping answers concise so your strongest points land faster.',
  'Try a slightly more energetic speaking pace to sound more assertive.',
  'Maintain more consistent eye contact with the camera during key points.',
  'Use one or two concrete examples in each answer to sound more grounded.',
  'Pause briefly before answering difficult questions so your response feels deliberate.',
]

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandomItems(items: string[], count: number) {
  const pool = [...items]

  for (let index = pool.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]]
  }

  return pool.slice(0, Math.min(count, pool.length))
}

export function createMockVideoAssessmentReport(): AssessmentReport {
  const overallScore = getRandomInt(70, 80)
  const pillarScores = PILLARS.map((name, index) => ({
    name,
    score: clamp(overallScore + getRandomInt(-6, 6), 65, 85),
    fill: PILLAR_COLORS[index],
  }))

  return {
    overallScore,
    pillarScores,
    strengths: pickRandomItems(VIDEO_STRENGTHS, 3),
    areas: pickRandomItems(VIDEO_AREAS, 3),
    completedAt: new Date().toISOString(),
    source: 'video',
  }
}

export function getPersonalizedActionPlan(report: AssessmentReport): ActionPlanSection[] {
  return report.pillarScores
    .map((pillar, index) => {
      const pillarIndex = index as PillarIndex
      const category = getCategory(pillar.score)
      const tips = seededShuffle(
        ACTION_PLAN_TIPS[pillarIndex][category],
        `${report.completedAt}-${report.source}-${pillar.name}-${pillar.score}`,
      ).slice(0, 3)

      return {
        pillarIndex,
        pillarName: pillar.name,
        pillarScore: pillar.score,
        focusLabel: getFocusLabel(pillar.score),
        tips,
      }
    })
    .sort((a, b) => a.pillarScore - b.pillarScore || a.pillarIndex - b.pillarIndex)
}

export function getDashboardTips(report: AssessmentReport | null, count = 4) {
  if (!report) {
    return [
      'Complete an assessment to unlock score-based confidence tips.',
      'Notice one moment today where you handled something better than usual.',
      'Practice one short introduction out loud so speaking feels easier next time.',
      'Pick one small decision and make it without overthinking it.',
    ].slice(0, count)
  }

  return getPersonalizedActionPlan(report)
    .flatMap((section) => section.tips)
    .slice(0, count)
}

export function saveAssessmentReport(report: AssessmentReport) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(report))
}

export function getStoredAssessmentReport(): AssessmentReport | null {
  if (typeof window === 'undefined') return null

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return null

  try {
    const parsed = JSON.parse(raw) as AssessmentReport
    if (
      typeof parsed.overallScore !== 'number' ||
      !Array.isArray(parsed.pillarScores) ||
      !Array.isArray(parsed.strengths) ||
      !Array.isArray(parsed.areas) ||
      typeof parsed.completedAt !== 'string' ||
      (parsed.source !== 'scenario' && parsed.source !== 'video')
    ) {
      return null
    }

    return parsed
  } catch {
    return null
  }
}
