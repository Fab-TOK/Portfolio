"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react"

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const texts = ["Fabrice TOKOUDAGBA", "Data Scientist"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentText = texts[textIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((textIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, textIndex, texts])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 data-grid-bg floating-particles"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Profile Image with animation */}

<div className="mb-8 relative">
  <div className="w-40 h-40 mx-auto relative">
    
    {/* Blob 1 - Plus grand que la photo, centré */}
    <div className="absolute -inset-4 flex items-center justify-center">
      <div className="w-48 h-48 bg-gradient-to-br from-indigo-500/40 to-cyan-500/40 animate-blob-morph-1"></div>
    </div>
    
    {/* Blob 2 - Plus grand que la photo, centré */}
    <div className="absolute -inset-4 flex items-center justify-center">
      <div className="w-44 h-44 bg-gradient-to-br from-purple-500/35 to-pink-500/35 animate-blob-morph-2"></div>
    </div>
    
    {/* Photo de profil au-dessus - immobile */}
    <img
      src="/photo.jpg?height=150&width=150"
      alt="Fabrice Tokoudagba"
      className="w-36 h-36 rounded-full mx-auto border-0 border-slate-900 shadow-2xl relative z-10 object-cover"
      style={{ top: "8px", left: "8px" }}
    />
  </div>
</div>

          {/* Typewriter Animation */}
          <div className="mb-6 h-20 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100">
              Salut, je suis{" "}
              <span className="gradient-text inline-block min-w-[300px] text-left">
                {displayText}
                <span className="animate-cursor">|</span>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformant les données en insights précieux pour éclairer les décisions stratégiques
          </p>

          {/* CTA Buttons with gradients */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projets")}
              className="group relative bg-gradient-to-r from-indigo-500 to-cyan-400 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                Voir mes projets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <a 
              href="CV Fabrice TOKOUDAGBA.pdf"
              download
              className="group border-2 border-indigo-500/50 hover:border-indigo-400 text-slate-100 hover:text-indigo-400 px-8 py-3 rounded-full font-medium transition-all hover:bg-indigo-500/10 flex items-center gap-2">
              <Download size={20} />
              Télécharger CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-110 p-3 rounded-full hover:bg-indigo-500/10"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/fabrice-tokoudagba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-110 p-3 rounded-full hover:bg-indigo-500/10"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:tomfabrice03@gmail.com"
              className="text-slate-400 hover:text-indigo-400 transition-all transform hover:scale-110 p-3 rounded-full hover:bg-indigo-500/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-slate-500 hover:text-indigo-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero