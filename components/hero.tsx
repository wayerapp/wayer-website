"use client"

import { Apple, Play, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen pt-20 md:pt-0 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight text-balance">
                {t("Decouvre ta prochaine aventure.", "Discover your next adventure.")}{" "}
                <span className="text-coral">{t("Un swipe a la fois.", "One swipe at a time.")}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                {t(
                  "wayer. utilise l'IA pour generer les meilleurs endroits a visiter dans n'importe quelle ville du monde. Swipe, sauvegarde, et laisse-nous construire ton itineraire parfait.",
                  "wayer. uses AI to generate the best places to visit in any city worldwide. Swipe, save, and let us build your perfect itinerary."
                )}
              </p>
            </div>

            {/* CTA - Lancer l'app web */}
            <a
              href="https://app.wayer.fr"
              className="inline-flex items-center gap-3 bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-coral/25"
            >
              <Globe className="w-6 h-6" />
              {t("Lancer l'app gratuitement", "Open the app for free")}
            </a>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                disabled
                className="relative flex items-center gap-3 bg-dark/10 text-dark/50 px-6 py-4 rounded-xl cursor-not-allowed"
              >
                <Apple className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-xs block">{t("Telecharger sur", "Download on the")}</span>
                  <span className="text-lg font-semibold">App Store</span>
                </div>
                <span className="absolute -top-2 -right-2 bg-coral text-white text-xs px-2 py-1 rounded-full font-medium">
                  {t("Bientot", "Coming soon")}
                </span>
              </button>
              <button
                disabled
                className="relative flex items-center gap-3 bg-dark/10 text-dark/50 px-6 py-4 rounded-xl cursor-not-allowed"
              >
                <Play className="w-8 h-8" />
                <div className="text-left">
                  <span className="text-xs block">{t("Disponible sur", "Get it on")}</span>
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
                <span className="absolute -top-2 -right-2 bg-coral text-white text-xs px-2 py-1 rounded-full font-medium">
                  {t("Bientot", "Coming soon")}
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-black rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10" />
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3718-Ix6tCCcPXVhwUQ1Roo3BdPNZF3oLAu.jpg"
                    alt="wayer app - Swipe screen showing Jardin des Plantes"
                    fill
                    className="object-cover object-top"
                    priority
                    loading="eager"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-coral/10 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 -left-10 w-72 h-72 bg-coral-light/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
