"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "KeshvaCredit App",
    category: "Fintech / Mobile App",
    description:
      "A modern loan and credit management mobile application with smooth multi-step forms, secure API integration, and seamless user experience.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    tags: ["Flutter", "Dart", "REST API", "Firebase"],
  },
  {
    title: "Covermantra App",
    category: "Insurance / Mobile App",
    description:
      "An insurance platform app providing policy browsing, comparisons, and user-friendly onboarding with clean UI and optimized performance.",
    image:
      "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?w=600",
    tags: ["Flutter", "BLoC", "API Integration"],
  },
  {
    title: "Zambivato Customer Panel",
    category: "Food Delivery / Mobile App",
    description:
      "A customer-facing food ordering app with real-time tracking, smooth navigation, and an intuitive UI.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    tags: ["Flutter", "Provider", "Firebase"],
  },
  {
    title: "Zambivato Rider Panel",
    category: "Delivery / Mobile App",
    description:
      "A delivery partner app for order management, live tracking, and efficient route handling.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600",
    tags: ["Flutter", "Dart", "Google Maps API"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              A selection of my recent work in mobile application development,
              focusing on performance and user experience.
            </p>
          </div>

          <button className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 font-medium transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-16 items-center`}
            >
              {/* LEFT SIDE IMAGE */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden relative group bg-[#0a0a0a]">

                {/* Device Frame */}
                <div className="absolute inset-x-12 bottom-0 top-12 bg-black rounded-t-3xl border-t border-x border-white/10 shadow-2xl overflow-hidden">

                  {/* REAL IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top rounded-t-3xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition duration-500" />
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-indigo-400 font-medium tracking-wider text-sm mb-4 uppercase">
                  {project.category}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-white/5 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium w-fit"
                >
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}