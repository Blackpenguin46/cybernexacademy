import type React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import CertificationsCareers from "./pages/CertificationsCareers"
import ToolsUtilities from "./pages/ToolsUtilities"
import Community from "./pages/Community"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/certifications-careers" element={<CertificationsCareers />} />
              <Route path="/tools-utilities" element={<ToolsUtilities />} />
              <Route path="/community" element={<Community />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App

