export default function AISection() {
  return (
    <section
      id="ai"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER (CENTERED FIX) */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            AI & Digital Skills
          </h2>

          {/* underline centered */}
          <div className="w-16 h-1 bg-purple-600 rounded mt-3 mx-auto"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Leveraging modern AI tools and digital systems to improve learning,
            content creation, and productivity workflows.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-1 w-12 bg-purple-600 rounded mb-4"></div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition">
              Prompt Engineering
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Crafting optimized prompts for AI systems to generate accurate,
              structured, and high-quality outputs for education and software tasks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-1 w-12 bg-purple-600 rounded mb-4"></div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition">
              AI Video Generation (Veo Tools)
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Creating educational and visual content using AI-powered video tools
              for teaching, communication, and digital storytelling.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-1 w-12 bg-purple-600 rounded mb-4"></div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition">
              AI-Assisted Learning Content
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Designing structured learning materials and coding tutorials
              enhanced with AI tools for better student understanding.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="h-1 w-12 bg-purple-600 rounded mb-4"></div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition">
              Digital Productivity Systems
            </h3>

            <p className="text-gray-600 text-sm leading-6">
              Using AI tools to automate workflows, improve efficiency, and
              optimize learning and development processes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}