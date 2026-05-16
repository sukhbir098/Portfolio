"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"/><path d="M12 18v4"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Let's build something <span className="text-gradient">amazing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            I'm currently available for freelance work and open to full-time opportunities. 
            If you have a project that needs some creative mobile magic, I'd love to hear about it.
          </p>

          <a 
            href="mailto:hello@sukhbir.dev"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-bold transition-all duration-300 transform hover:scale-105 mb-16"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-6">
            {[
              { icon: <GithubIcon />, href: "#", label: "GitHub" },
              { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
              { icon: <TwitterIcon />, href: "#", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <footer className="absolute bottom-0 w-full py-6 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Sukhbir. All rights reserved.</p>
      </footer>
    </section>
  );
}
