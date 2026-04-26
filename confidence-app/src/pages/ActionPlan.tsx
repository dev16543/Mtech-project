import { Link } from 'react-router-dom'
import { getStoredAssessmentReport, getPersonalizedActionPlan } from '../data/reportData'
import './ActionPlan.css'

export default function ActionPlan() {
  const latestReport = getStoredAssessmentReport()
  const sections = latestReport ? getPersonalizedActionPlan(latestReport) : []

  return (
    <div className="action-plan page">
      <div className="container">
        <h1>Personalized Action Plan</h1>
        <p className="intro">
          {latestReport
            ? 'These recommendations are based on your latest scores. Lower-scoring pillars are shown first so your highest-impact work is easy to spot.'
            : 'Complete an assessment first to unlock a score-based action plan with targeted next steps.'}
        </p>

        {latestReport ? (
          sections.map((section) => (
            <section key={section.pillarIndex} className="plan-section card">
              <div className="plan-heading">
                <div>
                  <h2>{section.pillarName}</h2>
                  <p className="plan-focus">{section.focusLabel}</p>
                </div>
                <div className="score-chip">{section.pillarScore}%</div>
              </div>
              <ul className="exercise-list">
                {section.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </section>
          ))
        ) : (
          <section className="plan-section card">
            <h2>No assessment data yet</h2>
            <p className="empty-state">Run the scenario or video assessment to generate a personalized plan instead of the same generic list.</p>
          </section>
        )}

        <div className="plan-actions">
          <Link to="/report" className="btn btn-secondary">Back to Report</Link>
          <Link to="/dashboard" className="btn btn-primary">Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
