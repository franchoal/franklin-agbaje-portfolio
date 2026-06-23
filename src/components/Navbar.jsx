import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-gray-700 hover:text-blue-600 transition font-medium";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Franklin Agbaje Logo"
            className="h-10 w-10 object-cover rounded-full"
          />
          <h1 className="font-bold text-xl tracking-tight">
            Franklin Agbaje
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a className={linkClass} href="#about">About</a>
          <a className={linkClass} href="#projects">Projects</a>
          <a className={linkClass} href="#ai">AI Skills</a>
          <a className={linkClass} href="#contact">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col space-y-4 px-6 pb-4 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <a className={linkClass} href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a className={linkClass} href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
        <a className={linkClass} href="#ai" onClick={() => setOpen(false)}>
          AI Skills
        </a>
        <a className={linkClass} href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}