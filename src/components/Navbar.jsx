import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <h1 className="font-bold text-xl">Franklin</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a className="hover:text-blue-600 transition" href="#about">About</a>
          <a className="hover:text-blue-600 transition" href="#projects">Projects</a>
          <a className="hover:text-blue-600 transition" href="#ai">AI Skills</a>
          <a className="hover:text-blue-600 transition" href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-4 px-6 pb-4">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#ai" onClick={() => setOpen(false)}>AI Skills</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}