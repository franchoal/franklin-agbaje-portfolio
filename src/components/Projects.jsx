import churchImg from "../assets/projects/church.jpg";
import microfinanceImg from "../assets/projects/microfinance.png";
import ecommerceImg from "../assets/projects/ecommerce.jpg";

export default function Projects() {
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

          {/* PROJECT 1 */}
          <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* IMAGE */}
            <img
              src={churchImg}
              alt="Church Management Website"
              className="w-full h-120 object-cover object-top"
            />

            <div className="p-6">

              <div className="h-1 w-12 bg-blue-600 rounded mb-4"></div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition">
                Church Management Website
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-4">
                A responsive platform designed to improve church communication,
                event updates, member engagement, and digital administration.
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  Django
                </span>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="border border-gray-300 text-sm px-4 py-2 rounded-lg hover:border-gray-500 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <img
              src={microfinanceImg}
              alt="Microfinance System"
              className="w-full h-70 object-cover object-top"
            />

            <div className="p-6">

              <div className="h-1 w-12 bg-green-600 rounded mb-4"></div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition">
                Microfinance Management System
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-4">
                A financial management system for tracking customers, loans,
                repayments, and automated transaction records.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
                  Python
                </span>
                <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">
                  Django
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="border border-gray-300 text-sm px-4 py-2 rounded-lg hover:border-gray-500 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            <img
              src={ecommerceImg}
              alt="E-Commerce Platform"
              className="w-full h-80 object-cover object-top"
            />

            <div className="p-6">

              <div className="h-1 w-12 bg-purple-600 rounded mb-4"></div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                E-Commerce Platform
              </h3>

              <p className="text-gray-600 text-sm leading-6 mb-4">
                A full-stack e-commerce system with product management,
                shopping cart functionality, and order processing workflows.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
                  React
                </span>
                <span className="text-xs bg-purple-50 text-purple-600 px-3 py-1 rounded-full">
                  API
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="border border-gray-300 text-sm px-4 py-2 rounded-lg hover:border-gray-500 transition"
                >
                  GitHub
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}