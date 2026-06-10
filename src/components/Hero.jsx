export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 pt-20">
      <div className="max-w-3xl">

        <p className="text-gray-500">Front-End Developer</p>

        <h1 className="text-4xl md:text-6xl font-bold mt-2">
          Hi, I'm John Angeles
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          I build responsive web applications using React, Tailwind CSS, and modern JavaScript.
        </p>

        <div className="mt-6 flex gap-3 flex-col sm:flex-row">
          <a href="#projects" className="bg-black text-white px-5 py-3 rounded-lg text-center">
            View Projects
          </a>

          <a href="/resume.pdf" className="border border-black px-5 py-3 rounded-lg text-center">
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}