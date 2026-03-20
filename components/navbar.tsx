"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#how-it-works", label: t("Comment ca marche", "How it works") },
    { href: "#app", label: t("L'app", "The app") },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-[var(--font-heading)] text-2xl font-bold text-coral">
            wayer.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-coral transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
            >
              {lang}
            </button>
            <Button className="bg-coral hover:bg-coral/90 text-white font-semibold px-6">
              {t("Telecharger", "Download")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-coral transition-colors font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
                <button
                  onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-1 rounded border border-border"
                >
                  {lang}
                </button>
                <Button className="bg-coral hover:bg-coral/90 text-white font-semibold flex-1">
                  {t("Telecharger", "Download")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
