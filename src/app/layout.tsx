import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { BottomNav } from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Académie du Génie", template: "%s · Académie du Génie" },
  description:
    "Ton école en ligne personnelle : cours, vidéos et évaluations notées sur 20 dans toutes les matières.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1115" },
  ],
};

/** Applique le thème avant l'affichage pour éviter un flash. */
const themeScript = `(function(){try{var t=localStorage.getItem('academie-du-genie:theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-dvh font-sans" style={{ fontFamily: "var(--font-inter), var(--font-sans)" }}>
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl px-4 pb-28 pt-4 sm:pb-12 sm:pt-6">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
