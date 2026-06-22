import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          <p className="text-blue-600 font-medium mb-2">
            Full Stack Developer | ICT Educator | AI Enthusiast
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-blue-600">Franklin Agbaje</span>
          </h1>

          <p className="text-gray-600 mt-5 text-lg leading-8">
            I build full-stack web applications using React, Python, and Django.
            I also train students in programming and help them develop real-world
            digital skills with AI-powered learning methods.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">

          <div className="relative">

            {/* Glow background (fixed layering) */}
            <div className="absolute inset-0 scale-110 bg-blue-100 rounded-2xl blur-2xl opacity-50"></div>

            {/* Image */}
            <img
              src={profileImg}
              alt="Franklin Agbaje"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-white"
            />

          </div>

        </div>

      </div>
    </section>
  );
}