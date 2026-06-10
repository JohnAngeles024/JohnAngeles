export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-4xl">
        
        <p className="text-sm md:text-base text-gray-500">
          Front-End Developer
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Hi, I'm John Angeles
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-lg">
          I build responsive websites using React, Tailwind CSS, and modern JavaScript.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a className="bg-black text-white px-5 py-3 rounded-lg text-center">
            View Projects
          </a>

          <a className="border border-black px-5 py-3 rounded-lg text-center">
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}