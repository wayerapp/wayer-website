"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AppScreenshots() {
  const { t } = useLanguage()

  const screens = [
    { 
      title: t("Decouvrir", "Discover"), 
      description: t("Trouve des endroits incroyables", "Find amazing places"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3717-qWGSyNarQDiPwzxR73cnazrMvyBmF9.jpg"
    },
    { 
      title: "Swipe", 
      description: t("Like ce que tu aimes", "Like what you love"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3718-Ix6tCCcPXVhwUQ1Roo3BdPNZF3oLAu.jpg"
    },
    { 
      title: t("Ma Liste", "My List"), 
      description: t("Sauvegarde tes favoris", "Save your favorites"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3719-PWHFmzFM6zJIjf2cTcXffhd6N3XKR0.jpg"
    },
    { 
      title: t("Itineraire", "Itinerary"), 
      description: t("Planifie ton voyage", "Plan your trip"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3720-hZTp2IGMgkQIhWYfYpbzdH5H7aUbmm.jpg"
    },
  ]

  return (
    <section id="app" className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("L'application", "The app")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t("Une experience belle et intuitive concue pour les explorateurs", "A beautiful, intuitive experience designed for explorers")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {screens.map((screen, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* iPhone Mockup */}
              <div className="relative w-full max-w-[200px] md:max-w-[240px] aspect-[9/19] bg-black rounded-[2.5rem] p-2 shadow-2xl shadow-black/50">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                {/* Screen */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-white">
                  <Image
                    src={screen.image}
                    alt={`wayer app - ${screen.title} screen`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 200px, 240px"
                  />
                </div>
              </div>
              {/* Caption */}
              <p className="mt-4 font-[var(--font-heading)] text-white font-medium text-sm md:text-base">
                {screen.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
