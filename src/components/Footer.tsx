"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"

const Footer: React.FC = () => {
  const [backgroundElements, setBackgroundElements] = useState<
    Array<{
      left: string
      top: string
      animationDelay: string
      animationDuration: string
    }>
  >([])

  // Générer les éléments d'arrière-plan après l'hydratation
  useEffect(() => {
    const elements = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 3}s`,
    }))
    setBackgroundElements(elements)
  }, [])

  const socialLinks = [
    { icon: <Github size={24} />, label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/fabrice-tokoudagba", label: "LinkedIn" },
    { icon: <Twitter size={24} />, href: "https://x.com/Fabrice_TOK", label: "Twitter" },
    { icon: <Mail size={24} />, href: "mailto:tomfabrice03@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-10 animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.animationDelay,
              animationDuration: element.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-8 gap-8">
          {/* Brand Section */}
          <div className="flex-1">
            <div className="font-bold text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Fabrice TOKOUDAGBA
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Data Scientist passionné, transformant les données en insights précieux pour créer de la valeur et
              optimiser les performances business.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mr-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-full text-slate-300 hover:text-white hover:bg-cyan-600/50 hover:border-cyan-400/50 transition-all transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-slate-400 mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start space-x-1">
                <span>© {new Date().getFullYear()} Conçu par Fabrice TOKOUDAGBA.</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <a className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 z-50 backdrop-blur-sm border border-cyan-500/30"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer
