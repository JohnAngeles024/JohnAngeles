export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16">

      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center">

        {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "Shopify", "WordPress"].map(skill => (
          <div key={skill} className="p-4 border rounded-lg">
            {skill}
          </div>
        ))}

      </div>

    </section>
  )
}