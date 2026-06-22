export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-blue-600 to-blue-700 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>

          <div className="w-16 h-1 bg-white rounded mt-3 mx-auto"></div>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            I’m open to teaching roles, software development opportunities,
            and collaborative projects in education and technology.
          </p>

        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* EMAIL */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition">
            <h3 className="font-semibold mb-2">Email</h3>

            <a
              href="mailto:franchoal1919@gmail.com"
              className="text-blue-100 hover:text-white transition"
            >
              franchoal1919@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition">
            <h3 className="font-semibold mb-2">Phone</h3>

            <div className="flex flex-col gap-1">
              <a
                href="tel:+2348053455147"
                className="text-blue-100 hover:text-white transition"
              >
                +234 805 345 5147
              </a>

              <a
                href="tel:+2347068380641"
                className="text-blue-100 hover:text-white transition"
              >
                +234 706 838 0641
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition">
            <h3 className="font-semibold mb-2">LinkedIn</h3>

            <a
              href="https://www.linkedin.com/in/franklin-agbaje/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition"
            >
              View Profile
            </a>
          </div>

          {/* GITHUB */}
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/15 transition">
            <h3 className="font-semibold mb-2">GitHub</h3>

            <a
              href="https://github.com/franchoal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition"
            >
              View Repositories
            </a>
          </div>

        </div>

        {/* CTA BUTTONS (NEW PROFESSIONAL ADDITION) */}
        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="mailto:franchoal1919@gmail.com"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center"
          >
            Send Email
          </a>

          <a
            href="tel:+2348053455147"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition text-center"
          >
            Call Me
          </a>

        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center text-blue-100 text-sm">
          Available for teaching roles, internships, and full-stack opportunities.
        </div>

      </div>
    </section>
  );
}