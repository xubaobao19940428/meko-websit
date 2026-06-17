import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Navigate to="/about" replace />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/privacy" element={<Navigate to="/about" replace />} />
                    <Route path="/user-agreement" element={<Navigate to="/about" replace />} />
                    <Route path="/bind-account" element={<Navigate to="/about" replace />} />
                    <Route path="/child-safety" element={<Navigate to="/about" replace />} />
                    <Route path="/support" element={<Navigate to="/about" replace />} />
                </Route>

                <Route path="/deleteAccount" element={<Navigate to="/about" replace />} />
                <Route path="/404" element={<Navigate to="/about" replace />} />
                <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
        </Router>
    )
}

export default App
