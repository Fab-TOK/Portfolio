"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Github, X, Database, Brain, BarChart3, Code, TrendingUp } from "lucide-react"

const Projets: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [bubbles, setBubbles] = useState<
    Array<{ left: string; top: string; size: string; delay: string; duration: string }>
  >([])

  // Générer les bulles après l'hydratation côté client
  useEffect(() => {
    const newBubbles = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.floor(Math.random() * 3)}`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 3}s`,
    }))
    setBubbles(newBubbles)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Prédiction des Prix Immobiliers",
      image: "/placeholder.svg?height=300&width=400",
      description: "Modèle de machine learning pour prédire les prix immobiliers",
      technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      context:
        "Développement d'un système de prédiction des prix immobiliers pour une agence immobilière souhaitant optimiser ses estimations.",
      approach:
        "Utilisation d'algorithmes de régression avancés (Random Forest, XGBoost) avec feature engineering sur des données géographiques et économiques.",
      results:
        "Précision de 92% sur les prédictions, réduction de 40% des erreurs d'estimation par rapport au système précédent.",
      github: "https://github.com/fabrice/real-estate-prediction",
    },
    {
      id: 2,
      title: "Analyse de Sentiment Client",
      image: "/placeholder.svg?height=300&width=400",
      description: "Système d'analyse de sentiment sur les avis clients",
      technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
      context:
        "Création d'un outil d'analyse automatique des avis clients pour une entreprise e-commerce afin d'améliorer la satisfaction client.",
      approach:
        "Développement d'un modèle NLP avec BERT fine-tuné sur des données d'avis clients, déployé via une API Flask.",
      results:
        "Classification avec 89% de précision, traitement de 10,000+ avis par heure, identification automatique des points d'amélioration.",
      github: "https://github.com/fabrice/sentiment-analysis",
    },
    {
      id: 3,
      title: "Dashboard Analytics Avancé",
      image: "/placeholder.svg?height=300&width=400",
      description: "Tableau de bord interactif pour l'analyse de données business",
      technologies: ["Python", "Streamlit", "Plotly", "PostgreSQL"],
      context:
        "Développement d'un dashboard complet pour visualiser et analyser les KPIs business d'une startup en croissance.",
      approach:
        "Architecture modulaire avec Streamlit pour l'interface, connexion temps réel à PostgreSQL, visualisations interactives avec Plotly.",
      results: "Réduction de 60% du temps d'analyse, adoption par 100% des équipes, insights automatisés quotidiens.",
      github: "https://github.com/fabrice/analytics-dashboard",
    },
    {
      id: 4,
      title: "Détection de Fraude Bancaire",
      image: "/placeholder.svg?height=300&width=400",
      description: "Système de détection de fraude en temps réel",
      technologies: ["Python", "Apache Kafka", "Redis", "Docker"],
      context:
        "Implémentation d'un système de détection de fraude en temps réel pour une fintech traitant des milliers de transactions par minute.",
      approach:
        "Architecture microservices avec streaming Kafka, modèles d'anomaly detection, cache Redis pour les scores de risque.",
      results: "Détection de 95% des fraudes, réduction de 70% des faux positifs, temps de réponse < 100ms.",
      github: "https://github.com/fabrice/fraud-detection",
    },
    {
      id: 5,
      title: "Optimisation Supply Chain",
      image: "/placeholder.svg?height=300&width=400",
      description: "Optimisation de la chaîne logistique par IA",
      technologies: ["Python", "OR-Tools", "NetworkX", "Dash"],
      context:
        "Optimisation des routes de livraison et gestion des stocks pour une entreprise de logistique avec 50+ entrepôts.",
      approach:
        "Algorithmes d'optimisation combinatoire avec OR-Tools, analyse de graphes pour les réseaux de distribution.",
      results:
        "Réduction de 25% des coûts logistiques, amélioration de 30% des délais de livraison, économie de 2M€/an.",
      github: "https://github.com/fabrice/supply-chain-optimization",
    },
  ]

  const openModal = (project: any) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="projets" className="py-20 bg-slate-800/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <div
            key={i}
            className={`absolute bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60 animate-float ${
              bubble.size === "0" ? "w-2 h-2" : bubble.size === "1" ? "w-1.5 h-1.5" : "w-1 h-1"
            }`}
            style={{
              left: bubble.left,
              top: bubble.top,
              animationDelay: bubble.delay,
              animationDuration: bubble.duration,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 pb-2">
            Mes Projets
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Découvrez mes réalisations en Data Science et Machine Learning
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 w-full max-w-sm sm:w-80"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    {project.id <= 3 ? (
                      <>
                        <Database className="w-5 h-5 text-cyan-400" />
                        <Brain className="w-5 h-5 text-indigo-400" />
                      </>
                    ) : (
                      <>
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                        <TrendingUp className="w-5 h-5 text-indigo-400" />
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-300 text-xs rounded-full border border-indigo-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 animate-in zoom-in-95 duration-300">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{selectedProject.title}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Contexte
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.context}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Approche / Méthodologie
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.approach}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-2 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Résultats
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.results}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-300 text-sm rounded-full border border-indigo-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-xl hover:from-indigo-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projets
