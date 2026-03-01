import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SCENARIO_QUESTIONS, PILLARS } from '../data/questions'
import './ScenarioAssessment.css'

export default function ScenarioAssessment() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'low' | 'moderate' | 'high'>>({})

  const q = SCENARIO_QUESTIONS[current]
  const total = SCENARIO_QUESTIONS.length
  const progress = ((current + 1) / total) * 100

  const handleOption = (value: 'low' | 'moderate' | 'high') => {
    const next = { ...answers, [q.id]: value }
    setAnswers(next)
    if (current + 1 < total) {
      setCurrent(current + 1)
    } else {
      // Done: go to report (hardcoded frontend uses reportData for display)
      navigate('/report')
    }
  }

  return (
    <div className="scenario-assessment page">
      <div className="container">
        <div className="assessment-header">
          <h1>Stage 1: Scenario-Based Assessment</h1>
          <p>Answer how you would react in each situation. There are no wrong answers.</p>
          <div className="progress-wrap">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
            <span className="progress-text">Question {current + 1} of {total}</span>
          </div>
        </div>

        <div className="question-card card">
          <span className="pillar-tag">Pillar: {PILLARS[q.pillar]}</span>
          <h2 className="scenario-text">{q.scenario}</h2>
          <div className="options">
            {q.options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`option-btn ${answers[q.id] === opt.value ? 'selected' : ''}`}
                onClick={() => handleOption(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <div className="question-nav">
            {current > 0 && (
              <button type="button" className="btn btn-secondary" onClick={() => setCurrent(current - 1)}>
                Previous
              </button>
            )}
          </div>
        </div>

        <p className="back-link">
          <Link to="/dashboard">Back to Dashboard</Link>
        </p>
      </div>
    </div>
  )
}
