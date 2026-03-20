"use client"

import { useLanguage } from "@/lib/language-context"

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: "🔍",
      title: t("Choisis ta destination", "Choose your destination"),
      description: t(
        "Entre n'importe quelle ville ou planifie un road trip. wayer. les connait toutes.",
        "Enter any city or plan a road trip. wayer. knows them all."
      ),
    },
    {
      icon: "🔥",
      title: t("Swipe ce qui t'inspire", "Swipe what inspires you"),
      description: t(
        "A droite pour garder, a gauche pour passer. Construis ta liste personnalisee d'incontournables.",
        "Right to keep, left to skip. Build your personalized list of must-sees."
      ),
    },
    {
      icon: "🗺️",
      title: t("Ton itineraire se construit tout seul", "Your itinerary builds itself"),
      description: t(
        "Obtiens un planning jour par jour avec cartes, horaires et liens de reservation.",
        "Get a day-by-day plan with maps, timings, and booking links."
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {t("Comment ca marche", "How it works")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("Trois etapes simples pour ton voyage parfait", "Three simple steps to your perfect trip")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-coral/10 rounded-full flex items-center justify-center">
                <span className="text-coral font-bold text-sm">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-secondary rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-5xl">{step.icon}</span>
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-heading)] text-xl font-semibold text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
