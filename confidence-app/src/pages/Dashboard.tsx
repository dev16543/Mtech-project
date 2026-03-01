import { Link } from 'react-router-dom'
import './Dashboard.css'

// Hardcoded previous score and tips for demo
const PREVIOUS_SCORE = 68
const TIPS = [
  'Practice accepting compliments with a simple "Thank you" without deflecting.',
  'After a setback, write down one thing you learned and one small next step.',
  'Start meetings or conversations by stating one clear point to build speaking confidence.',
  'When deciding, set a time limit (e.g. 10 minutes) to avoid overthinking.',
  'Ask one person for specific feedback this week and note what you will try differently.',
]

export default function Dashboard() {
  return (
    <div className="dashboard page">
      <div className="container">
        <h1>Dashboard</h1>
        <p className="dashboard-intro">Your central place to start assessments and view progress.</p>

        <section className="dashboard-section card">
          <h2>Start Assessment</h2>
          <p>Complete the scenario-based assessment (Stage 1) and optionally the video assessment (Stage 2) to get your confidence score and personalized plan.</p>
          <div className="dashboard-actions">
            <Link to="/assessment" className="btn btn-primary">Start Scenario Assessment</Link>
            <Link to="/video-assessment" className="btn btn-secondary">Video Assessment (Optional)</Link>
          </div>
        </section>

        <section className="dashboard-section card">
          <h2>Previous Score</h2>
          <p className="score-demo">Last overall confidence score (demo): <strong>{PREVIOUS_SCORE}%</strong></p>
          <p className="text-muted">Take the assessment again to see an updated score and pillar breakdown.</p>
          <Link to="/report" className="link">View sample report</Link>
        </section>

        <section className="dashboard-section card">
          <h2>Tips &amp; Articles</h2>
          <ul className="tips-list">
            {TIPS.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
          <Link to="/action-plan" className="link">View full action plan</Link>
        </section>
      </div>
    </div>
  )
}
