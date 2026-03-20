"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t(
        "wayer. a completement change ma facon de planifier mes voyages. Les suggestions de l'IA sont incroyablement precises !",
        "wayer. completely changed how I plan my trips. The AI suggestions are incredibly accurate!"
      ),
      author: "Marie L.",
      role: t("Passionnee de voyage", "Travel Enthusiast"),
    },
    {
      quote: t(
        "L'interface de swipe est tellement intuitive. J'ai decouvert des perles cachees que je n'aurais jamais trouvees autrement.",
        "The swipe interface is so intuitive. I discovered hidden gems I would have never found otherwise."
      ),
      author: "Thomas R.",
      role: "Digital Nomad",
    },
    {
      quote: t(
        "Creer un itineraire prenait des heures. Maintenant ca prend quelques secondes. Absolument revolutionnaire !",
        "Building an itinerary used to take hours. Now it takes seconds. Absolutely game-changing!"
      ),
      author: "Sofia K.",
      role: t("Aventuriere", "Adventure Seeker"),
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {t("Ce que disent les voyageurs", "What travelers say")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("Rejoins des milliers d'explorateurs satisfaits", "Join thousands of happy explorers")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-coral text-coral" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-[var(--font-heading)] font-semibold text-dark">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
