import { Link } from 'react-router-dom'
import { PILLARS } from '../data/questions'
import './ActionPlan.css'

// Hardcoded exercises per pillar (from project doc concept)
const EXERCISES: Record<number, string[]> = {
  0: [
    'Each day, write down one thing you did well or one strength you showed.',
    'When someone gives you a compliment, say "Thank you" and avoid deflecting (e.g. "It was nothing").',
    'Before a challenging task, say one positive statement about your ability out loud.',
  ],
  1: [
    'After a setback, write one sentence: "One thing I learned is ___" and one small next step.',
    'Practice a short calming routine (e.g. 3 deep breaths) when you feel stressed.',
    'Recall one past difficulty you overcame and name what helped you get through it.',
  ],
  2: [
    'In one meeting or conversation this week, state one clear opinion or idea.',
    'Practice introducing yourself to one new person (in person or online).',
    'Rehearse a short answer to "Tell me about yourself" and say it out loud once.',
  ],
  3: [
    'Make one small decision without asking anyone (e.g. what to eat, what to work on first) and stick to it.',
    'Set a 10-minute timer for a decision you’re overthinking; choose by the end of the time.',
    'Write down one past decision that didn’t go well and one thing you’d do differently.',
  ],
  4: [
    'Ask one person for one specific piece of feedback and write down one change you’ll try.',
    'Try one new skill or hobby for 15 minutes without judging how good you are.',
    'Reframe one recent mistake in one sentence as a learning moment.',
  ],
}

export default function ActionPlan() {
  return (
    <div className="action-plan page">
      <div className="container">
        <h1>Personalized Action Plan</h1>
        <p className="intro">Targeted exercises and tips for each confidence pillar. Re-test in a few weeks or months to track progress.</p>

        {PILLARS.map((pillarName, index) => (
          <section key={index} className="plan-section card">
            <h2>{pillarName}</h2>
            <ul className="exercise-list">
              {(EXERCISES[index] ?? []).map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          </section>
        ))}

        <div className="plan-actions">
          <Link to="/report" className="btn btn-secondary">Back to Report</Link>
          <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
