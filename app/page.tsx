"use client"

import { useState, useEffect } from "react"
import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import About from "../src/components/About"
import Skills from "../src/components/Skills"
import Projets from "../src/components/Projets"
import Education from "../src/components/Education"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projets", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 data-grid-bg floating-particles">
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projets />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
