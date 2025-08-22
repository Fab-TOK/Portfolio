"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Code, Database, BarChart3, Brain, Cloud, Users, MessageSquare, Lightbulb, TrendingUp, Cpu } from "lucide-react"

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [bubbles, setBubbles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    // Observer pour animer les barres
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  // ✅ Générer les bulles aléatoires côté client uniquement
  useEffect(() => {
    const generated = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 3}s`,
    }))
    setBubbles(generated)
  }, [])

  const technicalSkills = [
    { name: "Python", icon: <Code className="w-6 h-6" />, level: 95 },
    { name: "R", icon: <BarChart3 className="w-6 h-6" />, level: 90 },
    { name: "SQL", icon: <Database className="w-6 h-6" />, level: 92 },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" />, level: 88 },
    { name: "Deep Learning", icon: <Cpu className="w-6 h-6" />, level: 85 },
    { name: "Tableau", icon: <TrendingUp className="w-6 h-6" />, level: 87 },
    { name: "Power BI", icon: <BarChart3 className="w-6 h-6" />, level: 83 },
    { name: "Spark", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "Cloud (AWS/Azure)", icon: <Cloud className="w-6 h-6" />, level: 78 },
  ]

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Travail en équipe", icon: <Users className="w-6 h-6" /> },
    { name: "Vulgarisation", icon: <Lightbulb className="w-6 h-6" /> },
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* ✅ Background avec positions fixes générées après mount */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={style}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Mes Compétences
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour transformer les données en valeur
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Compétences Techniques</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="text-cyan-400 group-hover:text-purple-400 mr-3 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="ml-auto text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Compétences Transversales</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="text-cyan-400 group-hover:text-purple-400 mb-4 flex justify-center transition-colors duration-300 transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-gray-300">Projets ML</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-300">Années d'Expérience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-gray-300">Précision Modèles</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
