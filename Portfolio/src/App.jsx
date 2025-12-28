import { Routes, Route, Link, useLocation } from "react-router-dom"
import { useState } from "react"
import {
  FaUser,
  FaProjectDiagram,
  FaPrint,
  FaStar,
  FaBookOpen,
  FaBars,
  FaTimes
} from "react-icons/fa"
import {AnimatePresence, motion} from "framer-motion"
import Skills from "../src/pages/skills"
import Home from "../src/pages/home"
import Projects from "../src/pages/projects"
import Achievements from "../src/pages/achievements"

export default function App() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-black border-b border-[#30363d]">
        <div className="flex items-center justify-between px-4 sm:px-6 py-4">

          <Link
            to="/"
            className="text-xl sm:text-2xl font-semibold flex items-center gap-2 hover:text-[#f8a02e]"
          >
          
            Sahil Jain
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= NAV ================= */}
        <nav
          className={`
            ${open ? "block" : "hidden"}
            sm:flex sm:items-center sm:gap-6
            px-4 sm:px-6 py-3
            bg-black text-sm sm:text-base
          `}
        >
          <Nav to="/" icon={<FaBookOpen />} onClick={() => setOpen(false)}>
            Overview
          </Nav>

          <Nav to="/projects" icon={<FaProjectDiagram />} onClick={() => setOpen(false)}>
            Projects
          </Nav>

          <Nav to="/skills" icon={<FaPrint />} onClick={() => setOpen(false)}>
            Skills
          </Nav>

          <Nav to="/achievements" icon={<FaStar />} onClick={() => setOpen(false)}>
            Achievements
          </Nav>
        </nav>
      </header>

      {/* ================= ROUTES ================= */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/skills" element={<Page><Skills /></Page>} />
          <Route path="/achievements" element={<Page><Achievements /></Page>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

function Nav({ to, icon, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        flex items-center gap-3
        px-3 py-2 rounded-md
        hover:bg-[#161b22]
        hover:text-[#f8a02e]
        transition
      "
    >
      <span className="text-lg">{icon}</span>
      <span className="sm:inline">{children}</span>
    </Link>
  )
}
