"use client"

import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  const links = [
    { label: t("Comment ca marche", "How it works"), href: "#how-it-works" },
    { label: t("L'app", "The app"), href: "#app" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <footer className="bg-dark py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="font-[var(--font-heading)] text-2xl font-bold text-coral">
              wayer.
            </a>
            <p className="text-white/60 mt-2">{t("Ton guide de voyage intelligent", "Your intelligent travel guide")}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <a
            href="mailto:contact@wayer.fr"
            className="flex items-center gap-2 text-white/70 hover:text-coral transition-colors"
          >
            <Mail className="w-5 h-5" />
            contact@wayer.fr
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} wayer. {t("Tous droits reserves.", "All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  )
}
