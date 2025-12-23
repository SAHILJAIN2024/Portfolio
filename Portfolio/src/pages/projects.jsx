export default function Projects() {
  const projects = [
    "HealthBro AI",
    "CRX Carbon Exchange",
    "Voice → SOAP",
    "ERC-1155 GitHub dApp"
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <button
            key={i}
            className="border border-[#30363d] rounded-md p-4 text-left hover:border-[#58a6ff] transition"
          >
            📦 {p}
          </button>
        ))}
      </div>
    </div>
  )
}
