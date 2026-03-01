import { Link } from 'react-router-dom'
import './VideoAssessment.css'

export default function VideoAssessment() {
  return (
    <div className="video-assessment page">
      <div className="container">
        <h1>Stage 2: AI Video Assessment (Optional)</h1>
        <p className="intro">
          In the full system, you would record short video responses to 5–7 questions. Our AI would analyze eye contact, posture, vocal tone, and speech to complement your scenario-based score. This is a frontend-only prototype — no recording or backend.
        </p>

        <div className="video-placeholder card">
          <div className="placeholder-icon">📹</div>
          <h2>Video recording (simulated)</h2>
          <p>Camera and microphone access would be requested here. After recording, videos would be uploaded for secure AI processing.</p>
          <p className="text-muted">Pipeline: Video → Frames → Facial &amp; Pose Analysis → Audio → Speech Analysis → NLP → Pillar Scores</p>
          <div className="video-actions">
            <Link to="/report" className="btn btn-primary">View sample report instead</Link>
            <Link to="/dashboard" className="btn btn-secondary">Back to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
