export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 transition-all duration-700"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER (CENTERED) */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            About Me
          </h2>

          <div className="w-16 h-1 bg-blue-600 rounded mt-3 mx-auto"></div>

        </div>

        {/* CONTENT */}
        <div className="text-center">

          <p className="text-gray-600 leading-8 text-lg max-w-3xl mx-auto">
            I am a software developer and ICT educator with experience in training
            students in programming and building full-stack applications.
            I focus on practical learning, real-world projects, and AI-driven digital skills.
          </p>

        </div>

      </div>
    </section>
  );
}