import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import {
  getStoredAssessmentReport,
  getCategory,
  CATEGORY_LABELS,
} from '../data/reportData'
import './Report.css'

export default function Report() {
  const report = useMemo(() => getStoredAssessmentReport(), [])

  if (!report) {
    return (
      <div className="report page">
        <div className="container">
          <h1>Your Confidence Report</h1>
          <p className="report-intro">Complete the scenario assessment to generate your personalized report.</p>

          <div className="report-actions">
            <Link to="/assessment" className="btn btn-primary">Start assessment</Link>
            <Link to="/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    )
  }

  const category = getCategory(report.overallScore)
  const introText = report.source === 'video'
    ? 'Generated from your latest video assessment demo. This mock result reflects simulated analysis of camera presence, vocal delivery, and response style.'
    : 'Generated from your latest scenario-based assessment. Complete the optional video stage later if you want to extend the evaluation.'

  return (
    <div className="report page">
      <div className="container">
        <h1>Your Confidence Report</h1>
        <p className="report-intro">{introText}</p>

        <section className="report-section card overall-section">
          <h2>Overall confidence score</h2>
          <div className="score-circle">
            <span className="score-value">{report.overallScore}</span>
            <span className="score-unit">%</span>
          </div>
          <p className="category-label">{CATEGORY_LABELS[category]}</p>
          <p className="category-desc">The score is for self-awareness and growth guidance only, not a clinical diagnosis.</p>
        </section>

        <section className="report-section card">
          <h2>Pillar-wise breakdown</h2>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart
                data={report.pillarScores}
                layout="vertical"
                margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
              >
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="name" width={140} tick={{ fontSize: 11 }} />
                <Tooltip formatter={(v: number | undefined) => [v != null ? `${v}%` : '', 'Score']} />
                <Bar dataKey="score" radius={[0, 4, 4, 0]}>
                  {report.pillarScores.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="report-section card two-col">
          <div>
            <h2>Key strengths</h2>
            <ul>
              {report.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Areas to focus on</h2>
            <ul>
              {report.areas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <div className="report-actions">
          <Link to="/action-plan" className="btn btn-primary">View personalized action plan</Link>
          <Link to="/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
