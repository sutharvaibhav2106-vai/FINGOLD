import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#why", label: "Why Gold" },
  { href: "/#options", label: "Investments" },
  { href: "/#tools", label: "Calculators" },
  { href: "/#learn", label: "Learn" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <nav className="glass-light flex items-center justify-between rounded-full px-5 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
              <span className="font-display text-sm font-bold text-[#1B1B1B]">F</span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              FIN<span className="text-gold-gradient">GOLD</span>
            </span>
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-foreground/70 transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#cta" className="btn-gold btn-gold-hover btn-shine rounded-full px-5 py-2.5 text-sm font-semibold">
            Start Investing
          </a>
        </nav>
      </div>
    </header>
  );
}
