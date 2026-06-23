export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            About Me
          </h2>

          <div className="w-16 h-1 bg-blue-600 rounded mt-3 mx-auto"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Developer • Educator • Builder of Practical Digital Systems
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-8 md:p-12">

          <div className="text-center space-y-6">

            <p className="text-gray-600 leading-8 text-lg">
              I am a full-stack software developer and ICT educator focused on building
              practical, real-world digital solutions and training the next generation of
              developers through hands-on learning.
            </p>

            <p className="text-gray-600 leading-8 text-lg">
              My work combines <span className="text-blue-600 font-medium">React</span>,{" "}
              <span className="text-blue-600 font-medium">Django</span>, and modern
              AI-powered tools to build scalable systems, while simplifying complex
              concepts for learners and beginners in tech.
            </p>

            <p className="text-gray-600 leading-8 text-lg">
              I am passionate about using technology to solve real problems in education,
              finance, and community systems — with a strong focus on clarity, structure,
              and impact.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}