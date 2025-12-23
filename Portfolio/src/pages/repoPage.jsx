import { useParams, Link } from "react-router-dom"
import { reposData } from "../pages/home"

export default function RepoPage() {
  const { name } = useParams()
  const repo = reposData.find(r => r.name === name)

  if (!repo) return <p className="p-6">Repo not found</p>

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Link to="/" className="text-[#58a6ff] text-sm">← Back</Link>
      <h1 className="text-2xl font-bold mt-4">{repo.name}</h1>
      <p className="text-[#8b949e]">{repo.desc}</p>
    </div>
  )
}
