import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Conditions Générales d'Utilisation — wayer.",
  description: "Conditions générales d'utilisation de l'application wayer.",
}

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        {/* Back link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        {/* Logo */}
        <div className="font-[var(--font-heading)] text-3xl font-bold text-coral mb-2">
          wayer.
        </div>
        
        <h1 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-foreground mb-2">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Dernière mise à jour : mars 2026
        </p>

        {/* Content */}
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation de l&apos;application mobile Wayer, éditée par Alexis Dardaine. En utilisant Wayer, vous acceptez ces conditions dans leur intégralité.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              2. Description du service
            </h2>
            <p className="mb-3">Wayer est une application mobile de découverte et de planification de voyages. Elle permet de :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Découvrir des lieux touristiques, restaurants et activités dans une ville</li>
              <li>Créer et gérer des itinéraires de voyage sur plusieurs jours</li>
              <li>Accéder à des offres d&apos;activités via des partenaires affiliés (Viator, GetYourGuide, Tiqets, Ticketmaster, Trip.com)</li>
              <li>Partager des itinéraires avec des amis</li>
              <li>Gérer ses réservations et billets d&apos;entrée</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              3. Inscription et compte utilisateur
            </h2>
            <p className="mb-3">
              Certaines fonctionnalités nécessitent la création d&apos;un compte (via email, Google ou Apple Sign In). Vous êtes responsable de la confidentialité de vos identifiants. Vous vous engagez à fournir des informations exactes lors de l&apos;inscription.
            </p>
            <p>
              Vous pouvez supprimer votre compte à tout moment depuis la section &quot;Mon compte&quot; de l&apos;application. La suppression entraîne l&apos;effacement définitif de toutes vos données.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              4. Abonnements et achats
            </h2>
            <p className="mb-3">Wayer propose une version gratuite et une version Premium par abonnement. Les abonnements sont gérés via l&apos;App Store Apple ou Google Play Store selon votre plateforme.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Le prix et la durée de l&apos;abonnement sont indiqués avant toute confirmation d&apos;achat</li>
              <li>L&apos;abonnement se renouvelle automatiquement sauf résiliation au moins 24h avant la fin de la période en cours</li>
              <li>Vous pouvez gérer ou annuler votre abonnement depuis les réglages de votre App Store</li>
              <li>Les achats peuvent être restaurés depuis l&apos;application (Profil → &quot;Restaurer mes achats&quot;)</li>
              <li>Aucun remboursement ne peut être accordé directement par Wayer — les demandes de remboursement doivent être adressées à Apple ou Google selon votre plateforme</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              5. Liens affiliés et partenaires
            </h2>
            <p className="mb-3">
              Wayer affiche des liens vers des activités et expériences proposées par des partenaires tiers (Viator, GetYourGuide, Tiqets, Ticketmaster, Trip.com). Ces liens peuvent être des liens affiliés, ce qui signifie que Wayer peut percevoir une commission sur les achats effectués via ces liens, sans frais supplémentaires pour vous.
            </p>
            <p>
              Les transactions effectuées via ces partenaires sont soumises aux conditions générales de chaque partenaire. Wayer n&apos;est pas responsable des achats effectués sur ces plateformes tierces.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              6. Propriété intellectuelle
            </h2>
            <p className="mb-3">
              L&apos;application Wayer, son interface, ses algorithmes et son contenu original sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
            <p>
              Les informations sur les lieux touristiques sont générées par intelligence artificielle (Anthropic Claude) à titre indicatif. Elles peuvent contenir des inexactitudes. Nous vous encourageons à vérifier les informations pratiques (horaires, prix, accès) directement auprès des lieux visités.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              7. Limitations de responsabilité
            </h2>
            <p className="mb-3">Wayer est fourni &quot;tel quel&quot;. Nous ne pouvons garantir :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>L&apos;exactitude des prix d&apos;entrée, horaires et informations pratiques affichés (générés par IA)</li>
              <li>La disponibilité continue du service (maintenance, pannes)</li>
              <li>La qualité des activités réservées via nos partenaires affiliés</li>
            </ul>
            <p className="mt-3">
              Notre responsabilité est limitée au montant payé pour l&apos;abonnement Premium au cours des 12 derniers mois.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              8. Comportement utilisateur
            </h2>
            <p className="mb-3">Il est interdit d&apos;utiliser Wayer pour :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contourner les mécanismes de sécurité ou d&apos;authentification</li>
              <li>Tenter d&apos;accéder aux données d&apos;autres utilisateurs</li>
              <li>Envoyer des demandes d&apos;amitié abusives ou harceler d&apos;autres utilisateurs</li>
              <li>Utiliser l&apos;application à des fins commerciales non autorisées</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              9. Modifications du service
            </h2>
            <p>
              Nous nous réservons le droit de modifier, suspendre ou interrompre tout ou partie du service à tout moment. En cas de modification substantielle des CGU, vous serez informé via l&apos;application.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              10. Droit applicable
            </h2>
            <p>
              Ces CGU sont soumises au droit français. Tout litige sera soumis à la juridiction des tribunaux compétents.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              11. Contact
            </h2>
            <p>
              Pour toute question : <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Wayer · <Link href="/confidentialite" className="text-coral hover:underline">Politique de confidentialité</Link> · <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">Contact</a>
        </footer>
      </div>
    </div>
  )
}
