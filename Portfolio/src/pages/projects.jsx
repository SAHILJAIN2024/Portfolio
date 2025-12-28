import { useEffect, useState } from "react"
import {motion} from "framer-motion"
export default function Projects() {
  const projects = [
    {
      title: "CRX Carbon Exchange",
      images: ["/carboncredit.png", "/carboncredit2.png", "/carboncredit1.png"],
      description:
        "Blockchain-based carbon credit exchange enabling transparent issuance, tracking, and batch minting of carbon credits.",
      tech: ["Solidity", "ERC-20", "ERC-1155", "The Graph", "Ethereum", "Next.js", "Pinata", "Node.js"],
      repo: "https://github.com/SAHILJAIN2024/Blockchain_Based_Carbon_Credit_System_CRX",
      live: "https://drive.google.com/file/d/1x-EvcS4SbVKfnJvY-RTElLyNjDVV9PGE/view"
    },
    {
      title: "CODEBLOCK : ERC-1155 GitHub dApp",
      images: ["/codeblock.png", "/codeblock2.png", "/codeblock1.png"],
      description:
        "Decentralized GitHub-like platform using ERC-1155 where repositories, contributions, and developer badges live fully on-chain.",
      tech: ["Solidity", "ERC-1155", "The Graph", "Next.js"],
      repo: "https://github.com/SAHILJAIN2024/code_block_frontend",
      live: "https://drive.google.com/file/d/1iN5ednkWQDwAYPRFUpnOXl3SMnfnxGsq/view"
    },
    {
      title: "CredPass : Decentralised Credential Wallet",
      images: ["/credpass.png", "/credpass2.png", "/credpass1.png"],
      description:
        "Privacy-preserving decentralized credential wallet for issuing, storing, and verifying digital credentials.",
      tech: ["Solidity", "ERC-1155", "ERC-20", "FastAPI", "Next.js", "Pinata"],
      repo: "https://github.com/SAHILJAIN2024/CREDPASS-Decentralized-and-privacy-preserving-skills-passport",
      live: "https://drive.google.com/file/d/1U0HZ2AtFZ4pCG5AUObBbTxwCUFGiSkN-/view"
    },
    {
      title: "HealthBro AI",
      images: ["/healthbro.png", "/healthbro2.png", "/healthbro1.png"],
      description:
        "AI-powered healthcare assistant featuring symptom analysis, risk prediction, voice-to-SOAP clinical notes, and emergency alerts.",
      tech: ["Next.js", "Node.js", "Express", "FastAPI", "Firebase", "MongoDB", "AI/ML"],
      repo: "https://github.com/SAHILJAIN2024/HealthBro_AI_Powered_HealthCare_Assistant_Cyfuture_AI_Hackathon",
      live: "https://drive.google.com/file/d/1SUvwRHvwBuVvsxRTaSdrO5cPHFl6c5IW/view"
    }
  ]

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-4 lg:sticky lg:top-8">
          <img
            src="/avatar.jpeg"
            className="w-90 h-90 mx-auto lg:mx-0 rounded-full border border-[#30363d]"
            alt="Sahil Jain"
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

        {/* ================= MAIN ================= */}
        <main className="lg:col-span-3 space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold">📦 Projects</h1>
            <p className="text-[#8b949e] text-base sm:text-lg">
              A selection of real-world systems I designed and built end-to-end
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

/* ================= PROJECT CARD ================= */

function ProjectCard({ title, images, description, tech, repo, live }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117] hover:border-[#58a6ff] transition">

      {/* IMAGE */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={images[current]}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-700"
        />

        <div className="absolute bottom-2 right-2 flex gap-1">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === current ? "bg-white" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>

        <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map(t => (
            <span
              key={t}
              className="text-xs sm:text-sm px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 text-sm font-medium">
          <a href={repo} target="_blank" className="text-[#58a6ff] hover:underline">
            GitHub Repo →
          </a>
          <a href={live} target="_blank" className="text-[#58a6ff] hover:underline">
            Demo →
          </a>
        </div>
      </div>
    </div>
  )
}
