"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { BarChart3, Brain, Database, TrendingUp } from "lucide-react"

const About: React.FC = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analyse de Données",
      description: "Extraction d'insights précieux à partir de données complexes avec Python et R",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Développement de modèles prédictifs et d'algorithmes d'apprentissage automatique",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Big Data",
      description: "Traitement et analyse de volumes massifs de données avec Spark et les technologies cloud",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Visualisation",
      description: "Création de tableaux de bord interactifs avec Tableau, Power BI et D3.js",
    },
  ]

  // ✅ État pour stocker les bulles
  const [bubbles, setBubbles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 3}s`,
    }))
    setBubbles(generated)
  }, [])

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((style, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60 animate-float ${
              i % 3 === 0 ? "w-2 h-2" : i % 3 === 1 ? "w-1.5 h-1.5" : "w-1 h-1"
            }`}
            style={style}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">À propos de moi</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Découvrez mon parcours en Data Science</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="gradient-border">
              <img
                src="/photo-2.jpg?height=500&width=600"
                alt="Data Science Work"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-100 mb-6">
              Passionné par la science des données et l'intelligence artificielle
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Ingénieur en modélisation statistique avec plus de 5 ans d'expérience en Data Science, je me spécialise
              dans l'extraction d'insights précieux à partir de données complexes. Mon expertise couvre l'ensemble du
              pipeline de données, de la collecte au déploiement de modèles en production.
            </p>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Je maîtrise les technologies modernes de Machine Learning et Deep Learning, avec une forte expérience en
              Python, R, SQL et les plateformes cloud. Mon objectif est de transformer les données en solutions
              concrètes qui génèrent de la valeur business.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "R",
                "SQL",
                "Machine Learning",
                "TensorFlow",
                "PyTorch",
                "Tableau",
                "Power BI",
                "AWS",
                "Spark",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/30 backdrop-blur-sm"
            >
              <div className="text-indigo-400 mb-4 flex justify-center">{service.icon}</div>
              <h4 className="text-lg font-semibold text-slate-100 mb-3">{service.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
