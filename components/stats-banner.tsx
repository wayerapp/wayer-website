"use client"

import { useLanguage } from "@/lib/language-context"

export function StatsBanner() {
  const { t } = useLanguage()

  const stats = [
    { icon: "🌍", label: t("Couverture mondiale", "Worldwide coverage") },
    { icon: "🏙️", label: t("Toutes les villes du monde", "Every city in the world") },
    { icon: "🏛️", label: t("Tous les lieux repertories", "Every place listed") },
    { icon: "🤖", label: t("Propulse par Claude AI", "Powered by Claude AI") },
    { icon: "⚡", label: t("Itineraire en 30 secondes", "Itinerary in 30 seconds") },
  ]

  return (
    <section className="bg-coral py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white"
            >
              <span className="text-2xl md:text-3xl">{stat.icon}</span>
              <span className="font-medium text-sm md:text-base whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
