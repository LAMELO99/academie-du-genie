export const NAV_ITEMS = [
  { href: "/", label: "Accueil", icon: "🏠" },
  { href: "/matieres", label: "Matières", icon: "📚" },
  { href: "/defi", label: "Défi", icon: "🎯" },
  { href: "/bulletin", label: "Bulletin", icon: "📊" },
  { href: "/progression", label: "Badges", icon: "🏅" },
] as const;

export function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
