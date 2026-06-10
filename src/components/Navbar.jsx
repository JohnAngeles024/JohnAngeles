import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
   <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <h1 className="font-bold">John Angeles</h1>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
           {open && (
        <nav className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm bg-white shadow-md">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}