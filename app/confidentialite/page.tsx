import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Politique de confidentialité — wayer.",
  description: "Politique de confidentialité de l'application wayer.",
}

export default function ConfidentialitePage() {
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
          Politique de confidentialité
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Dernière mise à jour : mars 2026
        </p>

        {/* Highlight box */}
        <div className="bg-coral/5 border-l-4 border-coral p-4 rounded-r-lg mb-10 text-foreground/80">
          Wayer respecte votre vie privée. Nous collectons uniquement les données nécessaires au bon fonctionnement de l&apos;application et ne les revendons jamais à des tiers.
        </div>

        {/* Content */}
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              1. Qui sommes-nous ?
            </h2>
            <p>
              Wayer est une application mobile de découverte et de planification de voyages, éditée par Alexis Dardaine. Pour nous contacter : <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              2. Données collectées
            </h2>
            <p className="mb-3">Nous collectons les données suivantes :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Données de compte :</strong> adresse email, méthode d&apos;authentification (email, Google, Apple), pseudo choisi dans l&apos;application.</li>
              <li><strong>Données de voyage :</strong> villes recherchées, lieux likés, itinéraires créés, notes et dates de voyage.</li>
              <li><strong>Données de réservation :</strong> statut de réservation des activités (réservé / non réservé), billets uploadés (photos ou fichiers) stockés dans votre espace personnel.</li>
              <li><strong>Données de localisation :</strong> votre position GPS, uniquement lorsque vous utilisez la fonctionnalité de recherche par proximité et avec votre accord explicite. Nous ne stockons pas votre position en continu.</li>
              <li><strong>Données techniques :</strong> logs d&apos;utilisation anonymisés, version de l&apos;application, type d&apos;appareil (à des fins de débogage).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              3. Comment nous utilisons vos données
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Afficher des recommandations personnalisées de lieux et activités</li>
              <li>Sauvegarder vos voyages et itinéraires entre vos appareils</li>
              <li>Vous permettre de partager un itinéraire avec des amis</li>
              <li>Améliorer les algorithmes de suggestion (de manière agrégée et anonyme)</li>
              <li>Vous envoyer des notifications si vous les avez activées</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              4. Partage de vos données
            </h2>
            <p className="mb-3">Nous ne vendons jamais vos données personnelles. Nous faisons appel aux prestataires suivants :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Supabase</strong> (base de données et authentification) — hébergé en Europe</li>
              <li><strong>Anthropic Claude</strong> (intelligence artificielle pour les suggestions) — les requêtes ne contiennent pas de données personnelles identifiables</li>
              <li><strong>RevenueCat</strong> (gestion des abonnements in-app) — conformément à leurs règles de confidentialité</li>
              <li><strong>Partenaires affiliés</strong> (Viator, GetYourGuide, Tiqets, Ticketmaster, Trip.com) — les liens vers ces services ouvrent dans votre navigateur externe. Ces partenaires ont leurs propres politiques de confidentialité.</li>
              <li><strong>Google Places API</strong> (recherche de lieux) — données de localisation transmises uniquement lors des recherches</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              5. Vos droits (RGPD)
            </h2>
            <p className="mb-3">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Droit d&apos;accès :</strong> vous pouvez demander une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> vous pouvez corriger vos informations</li>
              <li><strong>Droit à l&apos;effacement :</strong> vous pouvez supprimer votre compte directement depuis l&apos;application (Profil → Supprimer mon compte), ce qui supprime toutes vos données</li>
              <li><strong>Droit à la portabilité :</strong> vous pouvez demander l&apos;export de vos données</li>
              <li><strong>Droit d&apos;opposition :</strong> vous pouvez désactiver les notifications à tout moment depuis les réglages de votre appareil</li>
            </ul>
            <p className="mt-3">Pour exercer ces droits : <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a></p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              6. Conservation des données
            </h2>
            <p>
              Vos données sont conservées tant que votre compte est actif. En cas de suppression du compte, toutes vos données personnelles sont supprimées dans un délai de 30 jours. Les données de cache anonymisées (sans identifiant personnel) peuvent être conservées plus longtemps à des fins d&apos;amélioration du service.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              7. Sécurité
            </h2>
            <p>
              Vos données sont chiffrées en transit (HTTPS/TLS) et au repos. L&apos;accès à la base de données est protégé par des politiques de sécurité au niveau des lignes (Row Level Security). Vos billets uploadés sont stockés dans un espace personnel privé.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              8. Enfants
            </h2>
            <p>
              Wayer n&apos;est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment de données personnelles d&apos;enfants de moins de 13 ans.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              9. Modifications
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique. En cas de changement substantiel, vous serez informé via l&apos;application. La date de mise à jour est indiquée en haut de ce document.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              10. Contact
            </h2>
            <p>
              Pour toute question relative à cette politique de confidentialité :<br />
              <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a><br />
              <a href="https://wayer.fr" className="text-coral hover:underline">wayer.fr</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Wayer · <Link href="/cgu" className="text-coral hover:underline">Conditions d&apos;utilisation</Link> · <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">Contact</a>
        </footer>
      </div>
    </div>
  )
}
