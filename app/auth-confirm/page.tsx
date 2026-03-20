"use client"

import { useEffect } from "react"

export default function AuthConfirmPage() {
  useEffect(() => {
    // Recupere les parametres du fragment (#) ou query string (?)
    const hash = window.location.hash.substring(1)
    const query = window.location.search.substring(1)
    const params = hash || query

    // Construit le deep link wayer:// avec tous les parametres
    const deepLink = "wayer://auth/confirm?" + params

    // Met a jour le lien du bouton
    const deeplinkBtn = document.getElementById("deeplink") as HTMLAnchorElement
    if (deeplinkBtn) {
      deeplinkBtn.href = deepLink
    }

    // Redirige automatiquement apres 1 seconde
    const timer = setTimeout(() => {
      window.location.href = deepLink
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 py-10 max-w-md">
        <div className="font-[var(--font-heading)] text-5xl font-bold text-coral tracking-tight mb-6">
          wayer.
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-3">
          Email confirme
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Ton compte est active. Ouvre l&apos;app Wayer pour continuer.
        </p>
        <a
          id="deeplink"
          href="#"
          className="inline-block bg-coral hover:bg-coral/90 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors"
        >
          Ouvrir Wayer
        </a>
        <p className="text-xs text-muted-foreground/60 mt-4">
          Si l&apos;app ne s&apos;ouvre pas, assure-toi qu&apos;elle est installee sur ton appareil.
        </p>
      </div>
    </div>
  )
}
