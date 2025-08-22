"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Award, GraduationCap } from "lucide-react"

const Education: React.FC = () => {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null)
  const [backgroundElements, setBackgroundElements] = useState<
    Array<{
      left: string
      top: string
      animationDelay: string
      animationDuration: string
    }>
  >([])

  const certifications = [
    {
      id: "aws-ml",
      title: "Professional DATA SCIENTIST",
      image:
        "Certification-1.jpg",
      issuer: "Datacamp",
      year: "2024",
    },
    {
      id: "google-data",
      title: "Data Analyst in Python",
      image:
        "Certification-2.jpg",
      issuer: "Datacamp",
      year: "2024",
    },
    {
      id: "tensorflow",
      title: "Learn the Python Programming Language",
      image:
        "Certification-3.jpg",
      issuer: "Udemy",
      year: "2024",
    },
    {
      id: "azure-ai",
      title: "Certification of Completion Benin Multimodal AI Hackathon",
      image:
        "Certification-4.png",
      issuer: "LabLabAi",
      year: "2024",
    },
  ]

  const openCertificationModal = (certificationId: string) => {
    setSelectedCertification(certificationId)
    document.body.style.overflow = "hidden"
  }

  const closeCertificationModal = () => {
    setSelectedCertification(null)
    document.body.style.overflow = "unset"
  }

  const selectedCert = certifications.find((cert) => cert.id === selectedCertification)

  // Générer les éléments d'arrière-plan après l'hydratation
  useEffect(() => {
    const elements = [...Array(10)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${5 + Math.random() * 3}s`,
    }))
    setBackgroundElements(elements)
  }, [])

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float"
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
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Éducation & Certifications
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Mon parcours académique et mes certifications professionnelles
          </p>
        </div>

        {/* Education */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <GraduationCap className="mr-3 text-cyan-400" size={28} />
            Diplômes académiques
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-cyan-400 mr-4">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ingénieur en Modélisation Statistique</h3>
                  <p className="text-gray-400 text-sm">
                    École Nationale de la Statistique et de l'Analyse de l'Information
                  </p>
                  <p className="text-cyan-300">2018 - 2023</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Formation spécialisée en statistiques appliquées, modélisation mathématique, et analyse de données.
                Projet de fin d'études sur la modélisation du langage des signes pour les sourds.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-purple-400 mr-4">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Master en IA et Big Data</h3>
                  <p className="text-gray-400 text-sm">Epitech Benin <br/>(En cours) </p>
                  <p className="text-purple-300">2024 - 2026</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Formation avancée en intelligence artificielle et traitement de données massives. Spécialisation en
                machine learning, deep learning, et architectures distribuées pour l'analyse de big data.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Award className="mr-3 text-cyan-400" size={28} />
            Certifications Professionnelles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openCertificationModal(cert.id)}
                className="group cursor-pointer bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Award size={32} className="mx-auto mb-2" />
                      <p className="text-sm">Cliquer pour agrandir</p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-cyan-300">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl max-w-3xl w-full border border-cyan-500/30 animate-modal-in">
            <div className="relative">
              <img
                src={selectedCert.image || "/placeholder.svg"}
                alt={selectedCert.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeCertificationModal}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full text-white hover:bg-slate-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 text-center">
              <div className="text-cyan-400 mb-4 flex justify-center">
                <Award size={48} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
              <p className="text-lg text-gray-300 mb-2">{selectedCert.issuer}</p>
              <p className="text-cyan-300 font-semibold">{selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Education
