"use client"

import { useLanguage } from "@/lib/language-context"

export function WorldCoverage() {
  const { t } = useLanguage()
  const cities = ["Paris", "Tokyo", "New York", "Barcelona", "Marrakech", "Sydney"]

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-balance">
            {t(
              "De Paris a Tokyo, de New York a Marrakech.",
              "From Paris to Tokyo, from New York to Marrakech."
            )}{" "}
            <span className="text-coral">
              {t(
                "wayer. connait chaque ville, chaque lieu.",
                "wayer. knows every city, every place."
              )}
            </span>{" "}
            {t("Partout. Toujours.", "Everywhere. Always.")}
          </h2>

          {/* City Pills */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12">
            {cities.map((city, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/10 text-white rounded-full font-medium text-sm md:text-base hover:bg-coral/20 transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
