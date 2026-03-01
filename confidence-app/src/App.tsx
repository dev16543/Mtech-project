import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ScenarioAssessment from './pages/ScenarioAssessment'
import VideoAssessment from './pages/VideoAssessment'
import Report from './pages/Report'
import ActionPlan from './pages/ActionPlan'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth()
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <>{children}</>
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="assessment" element={<ProtectedRoute><ScenarioAssessment /></ProtectedRoute>} />
          <Route path="video-assessment" element={<ProtectedRoute><VideoAssessment /></ProtectedRoute>} />
          <Route path="report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          <Route path="action-plan" element={<ProtectedRoute><ActionPlan /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
