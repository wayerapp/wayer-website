"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQ() {
  const { t } = useLanguage()

  const faqs = [
    {
      question: t("wayer. est-il gratuit ?", "Is wayer. free to use?"),
      answer: t(
        "Oui ! wayer. propose un forfait gratuit genereux qui te permet d'explorer des villes et de creer des itineraires. Des fonctionnalites premium seront disponibles avec un abonnement pour les grands voyageurs.",
        "Yes! wayer. offers a generous free plan that lets you explore cities and create itineraries. Premium features will be available with a subscription for power travelers."
      ),
    },
    {
      question: t("Comment fonctionne l'IA ?", "How does the AI work?"),
      answer: t(
        "wayer. utilise Claude AI combine avec Google Places pour analyser des milliers de lieux, avis et donnees de voyage. Il apprend de tes swipes pour recommander des endroits qui correspondent a ton style de voyage unique.",
        "wayer. uses Claude AI combined with Google Places to analyze thousands of places, reviews, and travel data. It learns from your swipes to recommend places that match your unique travel style."
      ),
    },
    {
      question: t("Quelles villes sont disponibles ?", "Which cities are available?"),
      answer: t(
        "wayer. couvre toutes les villes du monde ! Des grandes metropoles comme New York et Tokyo aux perles cachees et petites villes. Si c'est sur la carte, wayer. la connait.",
        "wayer. covers every city in the world! From major metropolises like New York and Tokyo to hidden gems and small towns. If it's on the map, wayer. knows it."
      ),
    },
    {
      question: t("Puis-je planifier des road trips ?", "Can I plan road trips?"),
      answer: t(
        "Absolument ! wayer. dispose d'un mode road trip dedie qui t'aide a decouvrir des etapes le long de ton itineraire, planifier les temps de trajet et creer des aventures sur plusieurs jours.",
        "Absolutely! wayer. has a dedicated road trip mode that helps you discover stops along your route, plan driving times, and create multi-day adventures."
      ),
    },
    {
      question: t("Mes donnees sont-elles securisees ?", "Is my data secure?"),
      answer: t(
        "Ta vie privee est notre priorite. Toutes les donnees sont chiffrees, et nous ne vendons jamais tes informations. Tu peux supprimer ton compte et toutes les donnees associees a tout moment.",
        "Your privacy is our priority. All data is encrypted, and we never sell your information. You can delete your account and all associated data at any time."
      ),
    },
    {
      question: t("Quand wayer. sera-t-il lance ?", "When will wayer. launch?"),
      answer: t(
        "Nous travaillons dur pour te proposer wayer. bientot ! Inscris-toi sur la liste d'attente pour etre le premier informe du lancement et obtenir un acces anticipe exclusif.",
        "We're working hard to bring wayer. to you soon! Join our waitlist to be the first to know when we launch and get exclusive early access."
      ),
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            {t("Questions frequentes", "Frequently asked questions")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("Tout ce que tu dois savoir sur wayer.", "Everything you need to know about wayer.")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-[var(--font-heading)] font-semibold text-dark hover:text-coral py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
