import { Link } from 'react-router-dom'
import './Landing.css'

const PILLARS = [
  { title: 'Self-Perception & Self-Worth', desc: 'Your internal sense of value and belief in your abilities.' },
  { title: 'Emotional Resilience', desc: 'The ability to manage stress and navigate setbacks.' },
  { title: 'Social Confidence & Communication', desc: 'Skill and comfort in social and professional interactions.' },
  { title: 'Decision-Making & Risk-Taking', desc: 'Confidence in your own judgment.' },
  { title: 'Personal Growth & Learning Mindset', desc: 'Openness to feedback and drive for self-improvement.' },
]

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="container">
          <h1>AI-Powered Real-Time Confidence Monitoring &amp; Enhancement</h1>
          <p className="hero-sub">
            Measure, understand, and improve your self-confidence with a scientifically-backed, two-stage assessment — scenario-based questions and optional AI-driven video analysis.
          </p>
          <div className="hero-cta">
            <Link to="/register" className="btn btn-primary btn-lg">Start Assessment</Link>
            <Link to="/login" className="btn btn-secondary btn-lg">Log In</Link>
          </div>
        </div>
      </section>

      <section className="section section-problem">
        <div className="container">
          <h2>Why This Matters</h2>
          <p className="section-intro">
            Self-confidence is the foundation that links potential to performance. Traditional assessments rely only on self-reporting and offer generic advice. Our system combines <strong>subjective answers</strong> with <strong>objective behavioral signals</strong> to deliver real-time, personalized, actionable feedback.
          </p>
          <ul className="bullet-list">
            <li>Psychology-based scenario questions</li>
            <li>Optional AI video analysis (eye contact, posture, speech)</li>
            <li>Numerical confidence score and pillar-wise breakdown</li>
            <li>Personalized improvement plan — not diagnosis, but growth guidance</li>
          </ul>
        </div>
      </section>

      <section className="section section-pillars">
        <div className="container">
          <h2>The Five Pillars of Confidence</h2>
          <p className="section-intro">Every assessment and recommendation is built around these five pillars.</p>
          <div className="pillar-grid">
            {PILLARS.map((p, i) => (
              <div key={i} className="pillar-card card">
                <span className="pillar-num">{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <h2>Ready to understand your confidence?</h2>
          <p>Create an account and complete the assessment. No credit card required.</p>
          <Link to="/register" className="btn btn-primary btn-lg">Get Started</Link>
        </div>
      </section>
    </div>
  )
}
