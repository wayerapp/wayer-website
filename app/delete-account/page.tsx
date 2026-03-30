import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Supprimer mon compte — wayer.",
  description: "Supprimer votre compte wayer et toutes vos données associées.",
}

export default function DeleteAccountPage() {
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
          Supprimer mon compte
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Dernière mise à jour : mars 2026
        </p>

        {/* Highlight box */}
        <div className="bg-coral/5 border-l-4 border-coral p-4 rounded-r-lg mb-10 text-foreground/80">
          Tu peux supprimer ton compte Wayer à tout moment, directement depuis l&apos;application ou en nous contactant par e-mail. Cette action est irréversible.
        </div>

        {/* Content */}
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              Depuis l&apos;application
            </h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Ouvre l&apos;application <strong>Wayer</strong></li>
              <li>Va dans l&apos;onglet <strong>Compte</strong> (icône profil en bas à droite)</li>
              <li>Fais défiler vers le bas et appuie sur <strong>« Supprimer mon compte »</strong></li>
              <li>Confirme la suppression — cette action est irréversible</li>
            </ol>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              Par e-mail
            </h2>
            <p className="mb-3">
              Si tu ne peux pas accéder à l&apos;application, tu peux demander la suppression de ton compte en envoyant un e-mail à :
            </p>
            <div className="bg-blue-500/5 border-l-4 border-blue-500 p-4 rounded-r-lg mb-3">
              📧 <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a><br />
              Objet : Suppression de compte<br />
              Inclus l&apos;adresse e-mail associée à ton compte Wayer.
            </div>
            <p>Nous traiterons ta demande dans un délai de 48 heures.</p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              Données supprimées
            </h2>
            <p className="mb-3">Lorsque ton compte est supprimé, les données suivantes sont définitivement effacées :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Ton profil (nom, e-mail, photo)</li>
              <li>Tes voyages et itinéraires</li>
              <li>Tes lieux sauvegardés et préférences</li>
              <li>Ta liste d&apos;amis et itinéraires partagés</li>
              <li>Ton historique d&apos;activité</li>
            </ul>
          </section>

          <section>
            <div className="bg-amber-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
              ⚠️ <strong>Abonnement Premium :</strong> la suppression de ton compte n&apos;annule pas automatiquement ton abonnement. Pense à résilier ton abonnement dans les paramètres de l&apos;App Store (Apple) ou du Google Play Store (Android) avant de supprimer ton compte.
            </div>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              Délai de suppression
            </h2>
            <p>
              La suppression est immédiate depuis l&apos;application. Les données sont effacées de nos serveurs dans un délai maximum de 30 jours.
            </p>
          </section>

          <section>
            <h2 className="font-[var(--font-heading)] text-lg font-bold text-foreground mb-3 pb-2 border-b-2 border-border">
              Contact
            </h2>
            <p>
              Pour toute question :<br />
              <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">contact@wayer.fr</a><br />
              <a href="https://wayer.fr" className="text-coral hover:underline">wayer.fr</a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Wayer · <Link href="/confidentialite" className="text-coral hover:underline">Confidentialité</Link> · <Link href="/cgu" className="text-coral hover:underline">CGU</Link> · <a href="mailto:contact@wayer.fr" className="text-coral hover:underline">Contact</a>
        </footer>
      </div>
    </div>
  )
}
