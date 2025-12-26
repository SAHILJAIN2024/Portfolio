export default function Achievements() {
  const achievements = [
    {
      title: "Top Performer – Blockchain & Cryptography Track",
      description:
        "Recognized as a TOP Performer in the Blockchain and Cryptography Track at Hacksagon 2k25 organized by ABVIIIT Gwalior.",
      date: "2025",
      organizer: "ABVIIIT Gwalior",
      type: "Blockchain",
      certificate: "https://drive.google.com/file/d/1fwdQF6CSDdKL9Y_SCGuJiyxMqHPA7ZrF/view?usp=sharing"
    },
    {
      title: "Winner – Web3 Track",
      description:
        "Winner in the Web3 Track at CodeSlayer 2k25 Hackathon organized by NIT Delhi for building a decentralized Web3 solution.",
      date: "2025",
      organizer: "NIT Delhi",
      type: "Web3",
      certificate: "https://drive.google.com/file/d/1ytL4ztTHbY2xB3OrUrVl29Qg261mh6cm/view?usp=sharing"
    },
    {
      title: "Runner-Up – Code Coalesces 2k25",
      description:
        "Secured Runner-Up position at Code Coalesces 2k25 hackathon organized by MITS Gwalior for innovative problem-solving and system design.",
      date: "2025",
      organizer: "MITS Gwalior",
      type: "Hackathon",
      certificate: "https://drive.google.com/file/d/1bbXHWDQdONod6fvyxVbXMmvpn8TGzYpn/view?usp=sharing"
    }
  ]

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

       
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

       
        <main className="lg:col-span-3 space-y-6">

          <header>
            <h1 className="text-2xl font-bold">🏆 Achievements</h1>
            <p className="text-[#8b949e]">
              Hackathons, competitions, and recognitions
            </p>
          </header>

          <div className="space-y-4">
            {achievements.map((a, index) => (
              <div
                key={index}
                className="border border-[#30363d] rounded-md p-5 hover:border-[#58a6ff] transition bg-[#0d1117]"
              >
                <h2 className="text-lg font-semibold">{a.title}</h2>

                <p className="text-sm text-[#8b949e] mt-1">
                  {a.organizer} · {a.date} · {a.type}
                </p>

                <p className="text-sm text-[#c9d1d9] mt-3">
                  {a.description}
                </p>

                <div className="mt-4">
                  <a
                    href={a.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#58a6ff] hover:underline"
                  >
                    📄 View Certificate →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  )
}
