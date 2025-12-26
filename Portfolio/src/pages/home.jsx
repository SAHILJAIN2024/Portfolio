import { Link } from "react-router-dom"
import { useState } from "react"

const reposData = [
  {
    name: "healthbro-ai",
    desc: "AI Care Navigator with risk prediction & SOAP notes"
  },
  {
    name: "crx-carbon-exchange",
    desc: "Decentralized carbon credit exchange"
  }
]

export default function Home() {
  const [repos] = useState(reposData)

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <aside className="space-y-4 lg:sticky lg:top-8">
          <img
            src="/avatar.jpeg"
            className="w-90 h-90 mx-auto lg:mx-0 rounded-full border border-[#30363d]"
          />

          <div className="text-center lg:text-left">
            <h1 className="text-xl font-semibold">Sahil Jain</h1>
            <p className="text-[#8b949e] text-sm">SAHILJAIN2024 · he/him</p>
          </div>

          
          <div className="space-y-3 border-t border-[#30363d] pt-4">
  <h2 className="text-2xl font-semibold text-[#8b949e] tracking-widest">
    CONTACT
  </h2>

  <a
    href="mailto:jainsahil022@gmail.com"
    className="flex items-center gap-2 text-sm text-[#c9d1d9] hover:text-[#58a6ff] transition"
  >
    📧
    <span className="break-all">jainsahil022@gmail.com</span>
  </a>

  <a
    href="https://www.linkedin.com/in/sahil-jain-2024"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-[#c9d1d9] hover:text-[#58a6ff] transition"
  >
    🔗 LinkedIn
  </a>

  <a
    href="https://github.com/SAHILJAIN2024"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm text-[#c9d1d9] hover:text-[#58a6ff] transition"
  >
    💻 GitHub
  </a>

  <a
    href="https://drive.google.com/file/d/10ggBJ-mKLOBKIFzHkL4X3j9NGkHqwQ6g/view?usp=sharing"
    download
    className="
      mt-2 inline-flex items-center justify-center gap-2
      w-full rounded-md border border-[#30363d]
      py-2 text-sm font-medium
      text-[#c9d1d9]
      hover:bg-[#21262d] hover:border-[#58a6ff]
      transition
    "
  >
    📄 Download Resume
  </a>
</div>

        </aside>

        <main className="lg:col-span-3 border border-[#30363d] rounded-md p-4 sm:p-6 space-y-8 bg-[#0d1117]">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-tight">
  Hi 👋, I'm Sahil Jain
  <br />
  <span className="block mt-2 text-[#8b949e] text-lg sm:text-xl font-medium">
    Blockchain & Full-Stack Developer | Web3 • AI • Decentralized Systems
  </span>
</h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <div className="md:col-span-2 border border-[#30363d] rounded-md p-6 sm:p-7 space-y-5">
  <h3 className="text-xl font-semibold flex items-center gap-2">
    👨‍💻 About Me
  </h3>

  <p className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
    I am a <span className="font-semibold text-white">
      solution-oriented Blockchain and Full-Stack Developer
    </span>{" "}
    who designs and builds technology that solves
    <span className="font-semibold"> real-world problems at scale</span>.
    My focus lies in crafting systems that balance
    <span className="font-semibold">
      {" "}architecture, security, performance, and usability
    </span>.
  </p>

  <p className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
    A <span className="font-semibold text-white">4× Hackathon Winner</span> and
    frequent <span className="font-semibold text-white">Team Lead</span>,
    I have led teams from ideation to deployment — handling
    architecture decisions, task delegation, and final execution
    under tight deadlines.
  </p>

  <p className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
    My work spans{" "}
    <span className="font-semibold">
      Blockchain, Web3, Full-Stack Development, and AI-driven platforms
    </span>,
    including decentralized applications, healthcare risk prediction engines,
    and automated clinical documentation systems.
  </p>

  {/* Tech-style summary */}
  <div className="border-t border-[#30363d] pt-4 space-y-3">
    <p className="text-base sm:text-lg text-[#c9d1d9] leading-relaxed">
      I strategically distribute my expertise across domains to build
      <span className="font-semibold">
        {" "}scalable, secure, and high-impact solutions
      </span>,
      while consistently delivering results in competitive environments.
    </p>

    <ul className="grid grid-cols-2 gap-3 text-sm sm:text-base text-[#8b949e]">
      <li>🟢 Blockchain & Smart Contracts</li>
      <li>🔵 Full-Stack System Design</li>
      <li>🟣 AI & Data-Driven Solutions</li>
      <li>🟡 Leadership & Architecture</li>
    </ul>
  </div>
</div>


  <div className="border border-[#30363d] rounded-md p-6 flex flex-col items-center justify-center">
  <h3 className="text-lg font-semibold mb-4 text-pink-400 tracking-wide">
    Work Distribution
  </h3>

  <PieChart />

  <div className="mt-5 space-y-2 text-sm sm:text-base text-[#8b949e]">
    <Legend color="bg-green-500" label="Blockchain (35%)" />
    <Legend color="bg-blue-500" label="Full-Stack (30%)" />
    <Legend color="bg-yellow-400" label="Leadership (35%)" />
  </div>
</div>
          </div>


          <div className="border-t border-[#30363d] pt-6 space-y-4">
<h3 className="text-center text-xl font-semibold tracking-wide">
  🎓 Education
</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
    
    <div className="border border-[#30363d] rounded-md p-4">
      <h4 className="text-lg font-semibold text-[#e6edf3]">
  Bachelor of Technology (B.Tech)
</h4>
<p className="text-sm sm:text-base text-[#8b949e]">
  Computer Science & Engineering
</p>

      <p className="text-[#8b949e]">
        Madhav Institute of Technology & Science (MITS Gwalior)
      </p>
      <p className="text-[#8b949e]">
        2024 – 2028
      </p>
    </div>

    <div className="border border-[#30363d] rounded-md p-4">
      <h4 className="font-semibold text-[#c9d1d9]">
        Higher Secondary (12th)
      </h4>
      <p className="text-[#8b949e]">
        Science (PCM)
      </p>
      <p className="text-[#8b949e]">
        St. Teresa's Sr. Sec. School, Gwalior
      </p>
      <p className="text-[#8b949e]">
        2023 – 2024
      </p>
    </div>

  </div>
</div>

<div className="border-t border-[#30363d] pt-6">
  <ContributionGrid />
</div>
        </main>
      </div>
    </div>
  )
}

function Lang({ name, percent }) {
  return (
    <div className="flex justify-between text-[#8b949e]">
      <span>{name}</span>
      <span>{percent}</span>
    </div>
  )
}


function ContributionGrid() {
  const grid = [
    [1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1],
    [1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1],
    [1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1],
    [1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
    [1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1],
  ]

  return (
    <div className="space-y-4">

      {/* Title */}
      <h3 className="text-center text-base sm:text-lg font-semibold tracking-wide">
        Contributions
      </h3>

      {/* Grid Wrapper */}
      <div className="flex justify-center overflow-x-auto">
        <div className="inline-block">
          <div className="grid gap-[3px]">
            {grid.map((row, i) => (
              <div key={i} className="flex gap-[3px]">
                {row.map((cell, j) => (
                  <div
                    key={j}
                    className={`
                      rounded-sm
                      transition
                      ${
                        cell
                          ? "bg-green-500"
                          : "bg-[#161b22] border border-[#30363d]"
                      }
                      w-3 h-3
                      sm:w-4 sm:h-4
                      md:w-5 md:h-5
                      lg:w-6 lg:h-6
                    `}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-xs sm:text-sm text-[#8b949e]">
        Consistency over intensity 🚀
      </p>
    </div>
  )
}


function PieChart() {
  const radius = 14
  const circumference = 2 * Math.PI * radius

  return (
    <svg
      viewBox="0 0 32 32"
      className="w-40 h-40 -rotate-90"
    >
      {/* Background */}
      <circle
        cx="16"
        cy="16"
        r={radius}
        fill="transparent"
        stroke="#161b22"
        strokeWidth="4"
      />

      {/* Blockchain – 40% */}
      <circle
        cx="16"
        cy="16"
        r={radius}
        fill="transparent"
        stroke="#22c55e"
        strokeWidth="4"
        strokeDasharray={`${circumference * 0.35} ${circumference}`}
        strokeDashoffset="0"
        strokeLinecap="round"
      />

      {/* Full-Stack – 30% */}
      <circle
        cx="16"
        cy="16"
        r={radius}
        fill="transparent"
        stroke="#3b82f6"
        strokeWidth="4"
        strokeDasharray={`${circumference * 0.3} ${circumference}`}
        strokeDashoffset={-circumference * 0.4}
        strokeLinecap="round"
      />


      {/* Leadership – 10% */}
      <circle
        cx="16"
        cy="16"
        r={radius}
        fill="transparent"
        stroke="#facc15"
        strokeWidth="4"
        strokeDasharray={`${circumference * 0.35} ${circumference}`}
        strokeDashoffset={-circumference * 0.65}
        strokeLinecap="round"
      />
    </svg>
  )
}


function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-3 h-3 rounded-sm ${color}`} />
      <span>{label}</span>
    </div>
  )
}


