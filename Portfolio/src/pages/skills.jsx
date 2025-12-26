export default function Skills() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-8">
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

        <main className="lg:col-span-3 space-y-16">

          <header className="space-y-2">
            <h1 className="text-4xl font-bold">🛠️ Skills</h1>
            <p className="text-[#8b949e]">
              Technologies, tools, and platforms I actively work with
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🔗 Blockchain & Web3</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "Solidity", icon: "solidity", level: 85 },
                { name: "Ethereum", icon: "ethereum", level: 80 },
                { name: "ERC-20 / ERC-1155", icon: "ethereum", level: 90 },
                { name: "IPFS", icon: "ipfs", level: 87 },
                { name: "The Graph", icon: "graphql", level: 90 },
              ].map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">🎨 Frontend</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
                { name: "React", icon: "react", level: 80 },
                { name: "Next.js", icon: "nextjs", level: 85 },
                { name: "JavaScript", icon: "javascript", level: 88 },
                { name: "TypeScript", icon: "typescript", level: 70 },
                { name: "Tailwind CSS", icon: "tailwindcss", level: 92 },
                { name: "Bootstrap", icon: "bootstrap", level: 75 }
              ].map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">⚙️ Backend</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 bg">
              {[
                { name: "Node.js", icon: "nodejs", level: 85 },
                { name: "Express", icon: "express", level: 80 },
                { name: "MongoDB", icon: "mongodb", level: 78 },
                { name: "Firebase", icon: "firebase", level: 65 },
                { name: "REST APIs", icon: "postman", level: 88 }
              ].map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}



function SkillCard({ name, icon, level }) {
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <div className="border border-[#30363d] rounded-md p-4 hover:border-[#58a6ff] transition space-y-3 bg-[#282a2e]">

      <div className="flex items-center justify-between">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
          className="h-10"
          alt={name}
        />

        <div className="relative h-12 w-12">
          <svg className="h-full w-full -rotate-90">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#30363d"
              strokeWidth="4"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="#58a6ff"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-700"
            />
          </svg>

          <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
            {level}%
          </span>
        </div>
      </div>

      <p className="text-sm font-medium">{name}</p>
    </div>
  )
}

