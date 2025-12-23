import { Routes, Route, Link } from "react-router-dom"
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaSyncAlt
} from "react-icons/fa"
import Skills from "../src/pages/skills"
import Home from "../src/pages/home"
import About from "../src/pages/about"
import Projects from "../src/pages/projects"
import RepoPage from "../src/pages/repoPage"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">

      {/* Header */}
      <header className="border-b border-[#30363d] px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-semibold hover:text-[#58a6ff] flex items-center gap-2"
        >
          <FaUser />
          Sahil Jain
        </Link>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-1 bg-[#21262d] text-sm rounded hover:bg-[#30363d] flex items-center gap-2"
        >
          <FaSyncAlt size={12} />
          Refresh
        </button>
      </header>

      {/* GitHub-style nav */}
      <nav className="border-b border-[#30363d] px-6 py-3 flex gap-6 text-sm">
        <Nav to="/" icon={<FaHome />}>Home</Nav>
        <Nav to="/about" icon={<FaUser />}>About</Nav>
        <Nav to="/projects" icon={<FaProjectDiagram />}>Projects</Nav>
        <Nav to="/skills" icon={<FaProjectDiagram />}>Skills</Nav>

      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:name" element={<RepoPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

/* ---------------- NAV ITEM ---------------- */

function Nav({ to, icon, children }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-1 rounded
                 hover:bg-[#21262d] hover:text-[#58a6ff] transition"
    >
      {icon}
      {children}
    </Link>
  )
}
