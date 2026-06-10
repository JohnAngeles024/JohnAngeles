import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50">

      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {projects.map((p, i) => (
          <div key={i} className="p-6 bg-white border rounded-lg shadow-sm">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}

      </div>

    </section>
  )
}