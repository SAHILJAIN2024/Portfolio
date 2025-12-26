import { Routes, Route, Link } from "react-router-dom"
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaSyncAlt,
  FaStar,
  FaCopy,
  FaPrint,
  FaRProject,
  FaBook,
  FaAddressBook,
  FaBookDead,
  FaBookOpen,
  FaStarHalf,
  FaStarOfLife,
  FaStarOfDavid
} from "react-icons/fa"
import Skills from "../src/pages/skills"
import Home from "../src/pages/home"
import Projects from "../src/pages/projects"
import Achievements from "../src/pages/achievements"
export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">

      <header className="px-6 py-4 flex justify-between items-center bg-black">
        <Link
          to="/"
          className="text-2xl font-semibold hover:text-[#58a6ff] flex items-center gap-2"
        >
          <FaUser />
          Sahil Jain
        </Link>

       
      </header>

      <nav className="border-b border-[#30363d] px-6 py-3 flex gap-6 text-xl bg-black">
        <Nav to="/" icon={<FaBookOpen />}>Overview</Nav>
        <Nav to="/projects" icon={<FaProjectDiagram />}>Projects</Nav>
        <Nav to="/skills" icon={<FaPrint />}>Skills Repositories</Nav>
        <Nav to="/achievements" icon={<FaStar />}>Achievements stars</Nav>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />

      </Routes>
    </div>
  )
}


function Nav({ to, icon, children }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-1 rounded
                 hover:bg-[#000000] hover:text-[#58a6ff] transition"
    >
      {icon}
      {children}
    </Link>
  )
}
