"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react"

const Contact: React.FC = () => {
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  // Générer les éléments d'arrière-plan après l'hydratation
  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${4 + Math.random() * 3}s`
    }));
    setBackgroundElements(elements);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setSubmitStatus("success")
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "tomfabrice03@gmail.com",
      link: "mailto:tomfabrice03@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      info: "+229 0166037189",
      link: "tel:+2290166037189",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      info: "Cotonou, Bénin",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-slate-800/50 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements.map((element, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-float"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons de vos idées et créons quelque chose d'exceptionnel ensemble.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Parlons de votre projet</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Je suis toujours ouvert aux nouvelles opportunités et aux projets passionnants. Que vous ayez une idée
              précise ou que vous souhaitiez simplement discuter, n'hésitez pas à me contacter.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center space-x-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors">{item.icon}</div>
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-gray-300">{item.info}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
              <h4 className="font-bold text-lg mb-2 text-cyan-300">Disponible pour des projets freelance</h4>
              <p className="text-slate-300 text-sm">
                Je suis actuellement disponible pour de nouveaux projets. Contactez-moi pour discuter de votre vision !
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="De quoi souhaitez-vous parler ?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-cyan-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Envoyer le message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg">
                  <CheckCircle size={20} />
                  <span>Message envoyé avec succès ! Je vous répondrai sous peu.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle size={20} />
                  <span>Erreur lors de l'envoi. Veuillez réessayer.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
