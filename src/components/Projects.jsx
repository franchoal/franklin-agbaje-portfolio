import churchImg from "../assets/projects/church.jpg";
import microfinanceImg from "../assets/projects/microfinance.png";
import ecommerceImg from "../assets/projects/ecommerce.jpg";

export default function Projects() {
  const projects = [
    {
      img: churchImg,
      title: "Church Management Website",
      desc: "A responsive platform designed to improve church communication, event updates, member engagement, and digital administration.",
      tech: ["React", "Django"],
      color: "blue",
      live: "https://your-church-project.vercel.app",
      github: "https://github.com/franchoal/church-management"
    },
    {
      img: microfinanceImg,
      title: "Microfinance Management System",
      desc: "A financial system for tracking customers, loans, repayments, and automated transaction records.",
      tech: ["Python", "Django"],
      color: "green",
      live: "https://your-microfinance-project.vercel.app",
      github: "https://github.com/franchoal/microfinance-system"
    },
    {
      img: ecommerceImg,
      title: "E-Commerce Platform",
      desc: "A full-stack system with product management, cart functionality, and order processing workflows.",
      tech: ["React", "API"],
      color: "purple",
      live: "https://your-ecommerce-project.vercel.app",
      github: "https://github.com/franchoal/ecommerce-app"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of real-world systems I’ve built for education, finance,
            and e-commerce solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div
                  className={`h-1 w-12 rounded mb-4 ${
                    project.color === "blue"
                      ? "bg-blue-600"
                      : project.color === "green"
                      ? "bg-green-600"
                      : "bg-purple-600"
                  }`}
                ></div>

                <h3
                  className={`text-xl font-semibold mb-2 transition ${
                    project.color === "blue"
                      ? "group-hover:text-blue-600"
                      : project.color === "green"
                      ? "group-hover:text-green-600"
                      : "group-hover:text-purple-600"
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 mb-4">
                  {project.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full ${
                        project.color === "blue"
                          ? "bg-blue-50 text-blue-600"
                          : project.color === "green"
                          ? "bg-green-50 text-green-600"
                          : "bg-purple-50 text-purple-600"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm px-4 py-2 rounded-lg text-white transition ${
                      project.color === "blue"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : project.color === "green"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-500 transition"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}