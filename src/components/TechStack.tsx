"use client";

import { motion } from "framer-motion";
import { Smartphone, Code2, Database, Layout, GitBranch, Zap } from "lucide-react";

const skills = [
  {
    category: "Frameworks & UI",
    icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
    items: ["Flutter", "Material Design", "Cupertino", "Custom Painters"],
    colSpan: "md:col-span-2",
  },
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    items: ["Dart", "C++", "HTML/CSS"],
    colSpan: "md:col-span-1",
  },
  {
    category: "Backend & DB",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    items: ["Firebase", "Supabase", "SQLite", "Hive"],
    colSpan: "md:col-span-1",
  },
  {
    category: "State Management",
    icon: <Layout className="w-6 h-6 text-pink-400" />,
    items: ["BLoC", "Riverpod", "Provider", "GetX"],
    colSpan: "md:col-span-2",
  },
  {
    category: "Tools",
    icon: <GitBranch className="w-6 h-6 text-green-400" />,
    items: ["Git", "VS Code", "Android Studio", "Figma"],
    colSpan: "md:col-span-1",
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            The tools and technologies I use to build robust, scalable, and beautiful mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-3xl ${skill.colSpan} group hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-indigo-500/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
