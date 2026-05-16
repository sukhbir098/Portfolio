"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .03 5.37.03 12c0 2.12.55 4.18 1.6 6L0 24l6.2-1.63A11.94 11.94 0 0 0 12.03 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.51-8.52zM12.03 21.8c-1.9 0-3.75-.5-5.37-1.44l-.38-.22-3.68.97.98-3.6-.25-.37a9.8 9.8 0 0 1-1.5-5.14c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.02 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.43-4.42 9.85-9.85 9.85zm5.4-7.35c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.48-.88-.78-1.48-1.74-1.65-2.04-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35z" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10" />

      <div className="container mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              amazing
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Open for freelance & full-time opportunities.
            Let’s create something impactful together 🚀
          </p>

          {/* EMAIL BUTTON */}
          <a
            href={`mailto:sukhbirmundlia90@gmail.com?subject=Opportunity&body=Hi Sukhbir,%0A%0AWe have great opportunity for you. Please connect with us.`}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-black bg-white hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mt-16">
            {[
              {
                icon: <LinkedinIcon />,
                href: "https://www.linkedin.com/in/sachin-kumar-a31b393a2",
                label: "LinkedIn"
              },

              {
                icon: <InstagramIcon />,
                href: "https://www.instagram.com/sachin_mundlia_01?igsh=dnNramNseXd1aGRo", // 👈 change this
                label: "Instagram"
              },

              {
                icon: <WhatsAppIcon />,
                href: "https://wa.me/917496011732?text=Hi%20I%20want%20to%20connect", // 👈 put your number
                label: "WhatsApp"
              }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-500/20 transition-all duration-300 text-gray-400 hover:text-white backdrop-blur-md border border-white/10"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="absolute bottom-0 w-full py-6 text-center text-gray-500 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Sukhbir. All rights reserved.
      </footer>
    </section>
  );
}