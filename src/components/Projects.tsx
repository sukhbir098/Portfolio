"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Fintech Mobile Bank",
    category: "Finance / Cross-Platform",
    description: "A secure, high-performance banking application with real-time transactions, biometric authentication, and a stunning dark mode UI built entirely with Flutter.",
    image: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", // Placeholder for actual image
    tags: ["Flutter", "Dart", "Riverpod", "Firebase"],
  },
  {
    title: "HealthTrack Pro",
    category: "Health & Fitness / Mobile App",
    description: "Cross-platform fitness tracker with beautiful custom painted charts, workout routines, and seamless data synchronization.",
    image: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", // Placeholder
    tags: ["Flutter", "BLoC", "Hive"],
  },
  {
    title: "SmartHome Controller",
    category: "IoT / Cross-Platform",
    description: "Centralized control for smart home devices via MQTT, featuring real-time status updates and animated custom widgets.",
    image: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)", // Placeholder
    tags: ["Flutter", "Dart", "Provider", "MQTT"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
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
              A selection of my recent work in mobile application development, focusing on performance and user experience.
            </p>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 font-medium transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image Placeholder */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden glass-panel relative group">
                <div 
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: project.image }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Mock Device Frame Effect */}
                <div className="absolute inset-x-12 bottom-0 top-12 bg-[#0a0a0a] rounded-t-3xl border-t border-x border-white/10 shadow-2xl overflow-hidden">
                  <div className="w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-black to-black" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <span className="text-indigo-400 font-medium tracking-wider text-sm mb-4 uppercase">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-white hover:text-indigo-400 transition-colors font-medium w-fit">
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
