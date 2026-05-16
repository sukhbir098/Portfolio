"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    role: "Senior Mobile Engineer",
    company: "TechNova Solutions",
    description: "Leading a team of 5 mobile developers. Architected a cross-platform fintech app using React Native, reducing load times by 40% and increasing user retention.",
  },
  {
    year: "2022 - 2024",
    role: "iOS Developer",
    company: "AppCraft Studios",
    description: "Developed and maintained 3 native iOS applications using Swift and SwiftUI. Implemented complex animations and integrated real-time video streaming.",
  },
  {
    year: "2020 - 2022",
    role: "Mobile App Developer",
    company: "Digital Frontier",
    description: "Built native Android applications using Kotlin. Collaborated closely with UI/UX designers to translate Figma designs into pixel-perfect interfaces.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A timeline of my professional experience in mobile development.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#050505] bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl group-hover:border-indigo-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl">{exp.role}</h3>
                  <span className="text-indigo-400 text-sm font-medium">{exp.year}</span>
                </div>
                <div className="text-gray-300 font-medium mb-4">{exp.company}</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
