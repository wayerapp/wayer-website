"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WaitlistCTA() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  return (
    <section
      id="waitlist"
      className="py-20 md:py-32 bg-gradient-to-r from-coral to-coral-light"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("Sois le premier a explorer", "Be the first to explore")}
          </h2>
          <p className="text-white/90 text-lg mb-10">
            {t("Rejoins la liste d'attente et obtiens un acces anticipe a wayer.", "Join the waitlist and get early access to wayer.")}
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t("Entre ton email", "Enter your email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-14 bg-white/20 border-white/30 text-white placeholder:text-white/60 rounded-xl focus:bg-white/30"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="h-14 px-8 bg-white text-coral hover:bg-white/90 font-semibold rounded-xl whitespace-nowrap"
              >
                {isLoading ? t("Inscription...", "Joining...") : t("Rejoindre la waitlist", "Join the waitlist")}
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-white bg-white/20 rounded-xl px-6 py-4 max-w-md mx-auto">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">{t("Tu es sur la liste ! On te recontacte bientot.", "You're on the list! We'll be in touch soon.")}</span>
            </div>
          )}

          <p className="flex items-center justify-center gap-2 text-white/80 text-sm mt-6">
            <Lock className="w-4 h-4" />
            {t("Pas de spam. Juste wayer.", "No spam. Just wayer.")}
          </p>
        </div>
      </div>
    </section>
  )
}
