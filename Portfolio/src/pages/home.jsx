import { Link } from "react-router-dom"
import { useState } from "react"

const reposData = [
  {
    name: "healthbro-ai",
    desc: "AI Care Navigator with risk prediction & SOAP notes",
    tech: ["Next.js", "FastAPI", "ML"],
    type: "AI"
  },
  {
    name: "crx-carbon-exchange",
    desc: "Decentralized carbon credit exchange",
    tech: ["Solidity", "ERC-20", "ICP"],
    type: "Web3"
  },
  {
    name: "voice-to-soap",
    desc: "Voice → clinical SOAP notes using Whisper",
    tech: ["Whisper", "NLP", "FastAPI"],
    type: "AI"
  },
  {
    name: "erc1155-github-dapp",
    desc: "GitHub-like platform built on ERC-1155",
    tech: ["ERC-1155", "The Graph"],
    type: "Web3"
  }
]

export default function Home() {
  const [repos] = useState(reposData)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-20">

      {/* ================= TOP SECTION ================= */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* -------- LEFT SIDEBAR -------- */}
        <aside>
          <img
            src="/avatar.jpeg"
            className="w-32 h-32 rounded-full border border-[#30363d]"
          />
          <h1 className="text-xl font-bold mt-4">Sahil Jain</h1>
          <p className="text-[#8b949e]">
            Blockchain • Full-Stack • AI
          </p>
        </aside>

        {/* -------- RIGHT README -------- */}
        <div className="md:col-span-3 space-y-12">

          {/* INTRO */}
          <h2 className="text-2xl font-bold text-center">
            Hi 👋, I'm Sahil Jain <br />
            <span className="text-[#8b949e] text-lg">
              Blockchain & Full-Stack Developer | Web3 • AI • Decentralized Systems
            </span>
          </h2>

          {/* ABOUT + STATS */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            {/* ABOUT */}
            <div className="md:col-span-3 space-y-4">
              <h3 className="text-lg font-semibold">👨‍💻 About Me</h3>

              <p className="text-[#8b949e]">
                I build <strong>scalable, secure, and intelligent systems</strong> at the
                intersection of <strong>Blockchain, Web3, Full-Stack Development, and AI</strong>.
              </p>

              <ul className="list-disc ml-5 text-[#8b949e] space-y-1">
                <li>🔗 Ethereum, Smart Contracts & DApps</li>
                <li>🏗️ React / Next.js / Node.js full-stack systems</li>
                <li>🧠 AI-powered platforms (Healthcare, Risk Prediction)</li>
                <li>🌱 Learning Neural Networks & Generative AI</li>
                <li>🤝 Open to Web3, Blockchain & AI collaborations</li>
              </ul>
            </div>

            {/* GITHUB STATS */}
            <div className="md:col-span-2 flex justify-center">
              
            </div>
          </div>

          {/* TECH STACK */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center">
              🛠️ Tech Stack
            </h3>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                "javascript", "typescript", "react", "nextjs",
                "html5", "css3", "python",
                "solidity", "ipfs", "express",
                "nodejs", "mongodb", "bootstrap", "tailwindcss"
              ].map(skill => (
                <img
                  key={skill}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
                  className="h-10"
                />
              ))}
            </div>

            {/* CONTACT */}
            <div className="flex justify-center gap-6">
              <a href="mailto:jainsahil022@gmail.com">
                <img
                  src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&color=D14836&logoColor=white&style=for-the-badge"
                  className="h-9"
                />
              </a>
              <a href="https://www.linkedin.com/in/sahil-jain-610907211/">
                <img
                  src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&color=0077B5&logoColor=white&style=for-the-badge"
                  className="h-9"
                />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PINNED ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📌 Pinned</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.slice(0, 2).map(repo => (
            <Link
              key={repo.name}
              to={`/repo/${repo.name}`}
              className="border border-[#30363d] p-4 rounded-md hover:border-[#58a6ff]"
            >
              <h3 className="text-[#58a6ff] font-semibold">
                📦 {repo.name}
              </h3>
              <p className="text-sm text-[#8b949e] mt-2">{repo.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section>
        <h2 className="text-xl font-semibold mb-4">📂 Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repos.map(repo => (
            <Link
              key={repo.name}
              to={`/repo/${repo.name}`}
              className="border border-[#30363d] p-4 rounded-md hover:border-[#58a6ff]"
            >
              <h3 className="text-[#58a6ff] font-semibold">
                📦 {repo.name}
              </h3>
              <p className="text-sm text-[#8b949e] mt-2">{repo.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* SNAKE */}
      <img
        src="https://raw.githubusercontent.com/SAHILJAIN2024/SAHILJAIN2024/output/snake.svg"
        className="mx-auto"
      />
    </div>
  )
}
