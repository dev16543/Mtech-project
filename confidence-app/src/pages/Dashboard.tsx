import { Link } from 'react-router-dom'
import { getDashboardTips, getStoredAssessmentReport } from '../data/reportData'
import './Dashboard.css'

export default function Dashboard() {
  const latestReport = getStoredAssessmentReport()
  const tips = getDashboardTips(latestReport)

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
          {latestReport ? (
            <>
              <p className="score-demo">Last overall confidence score: <strong>{latestReport.overallScore}%</strong></p>
              <p className="text-muted">Your latest report is based on the choices from your most recent scenario assessment.</p>
              <Link to="/report" className="link">View latest report</Link>
            </>
          ) : (
            <>
              <p className="score-demo">No completed assessment yet.</p>
              <p className="text-muted">Take the scenario assessment to generate your first confidence report.</p>
              <Link to="/assessment" className="link">Start assessment</Link>
            </>
          )}
        </section>

        <section className="dashboard-section card">
          <h2>Tips &amp; Articles</h2>
          <ul className="tips-list">
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
          <Link to="/action-plan" className="link">View full action plan</Link>
        </section>
      </div>
    </div>
  )
}
