import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card mx-auto max-w-md space-y-3 p-6 text-center">
      <p className="text-5xl" aria-hidden>
        🧭
      </p>
      <h1 className="text-2xl font-bold">Page introuvable</h1>
      <p className="muted">Ce chapitre n&apos;existe pas (encore !).</p>
      <Link href="/matieres" className="btn btn-primary">
        Voir les matières
      </Link>
    </div>
  );
}
