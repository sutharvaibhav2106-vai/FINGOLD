import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Nav } from "@/components/site/Nav";
import { Reveal } from "@/components/site/Reveal";
import goldBar from "@/assets/gold-bar-hero.jpg";
import {
  ShieldCheck,
  TrendingUp,
  PieChart,
  Droplets,
  Globe2,
  Anchor,
  Coins,
  Smartphone,
  LineChart,
  Landmark,
  Wallet,
  Factory,
  Activity,
  Lock,
  Tag,
  Zap,
  Settings2,
  BookOpen,
  Calculator,
  Target,
  Sparkles,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FINGOLD — Invest in Gold, Secure Your Future" },
      {
        name: "description",
        content:
          "Premium gold investment platform. Buy digital gold, ETFs, SGBs and physical gold. Simple, secure, and accessible wealth building with Fingold.",
      },
      { property: "og:title", content: "FINGOLD — Invest in Gold, Secure Your Future" },
      { property: "og:description", content: "Premium gold investment platform — buy, save, grow and redeem gold with confidence." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyGold = [
  { icon: ShieldCheck, title: "Protection Against Inflation", desc: "Gold has historically held value as currencies lose purchasing power." },
  { icon: TrendingUp, title: "Long-Term Wealth Preservation", desc: "An asset that compounds across generations and economic cycles." },
  { icon: PieChart, title: "Portfolio Diversification", desc: "Low correlation with stocks and bonds balances overall risk." },
  { icon: Droplets, title: "High Liquidity", desc: "Convert gold to cash anywhere in the world, anytime." },
  { icon: Globe2, title: "Global Acceptance & Value", desc: "Universally recognized — a borderless store of value." },
  { icon: Anchor, title: "Safe-Haven Asset", desc: "A trusted hedge during economic uncertainty and market shocks." },
];

const options = [
  {
    icon: Coins,
    title: "Physical Gold",
    includes: ["Gold Coins", "Gold Bars", "Gold Jewelry"],
    benefits: ["Tangible asset", "Long-term value storage", "Can be gifted or inherited"],
  },
  {
    icon: Smartphone,
    title: "Digital Gold",
    benefits: ["Start with small amounts", "Buy and sell anytime", "Secure storage", "Easy online transactions"],
  },
  {
    icon: LineChart,
    title: "Gold ETFs",
    benefits: ["High liquidity", "No storage concerns", "Transparent pricing", "Easy diversification"],
  },
  {
    icon: Landmark,
    title: "Sovereign Gold Bonds",
    benefits: ["Government-backed security", "Interest income", "No storage cost", "Long-term wealth creation"],
  },
  {
    icon: Wallet,
    title: "Gold Mutual Funds",
    benefits: ["Professional management", "No demat account required", "SIP investment option"],
  },
  {
    icon: Factory,
    title: "Gold Mining Stocks",
    benefits: ["Potential for higher returns", "Exposure to the gold industry"],
  },
  {
    icon: Activity,
    title: "Gold Futures & Options",
    benefits: ["Trading opportunities", "Portfolio hedging"],
    risk: "High",
  },
];

const whyChoose = [
  { icon: Lock, title: "Secure Investments", desc: "Bank-grade encryption and insured vault storage." },
  { icon: Tag, title: "Transparent Pricing", desc: "Live market rates with no hidden charges." },
  { icon: Zap, title: "Easy Transactions", desc: "Buy, sell and redeem in a few seconds." },
  { icon: Settings2, title: "Flexible Options", desc: "From ₹100 SIPs to bullion — choose your style." },
  { icon: BookOpen, title: "Expert Market Insights", desc: "Research-backed guidance from gold strategists." },
];

const tools = [
  { icon: Calculator, title: "Gold SIP Calculator", desc: "Project the value of monthly gold investments." },
  { icon: Coins, title: "Lump Sum Calculator", desc: "See how a one-time investment grows over time." },
  { icon: Target, title: "Goal-Based Planner", desc: "Map a wedding, home or retirement goal to gold." },
  { icon: TrendingUp, title: "Future Value Calculator", desc: "Forecast your gold portfolio's future worth." },
];

const learn = [
  { tag: "Beginner", title: "Beginner's Guide to Gold Investing", desc: "Everything you need to start your first gold investment." },
  { tag: "Compare", title: "Digital Gold vs Physical Gold", desc: "Which form of gold fits your goals best?" },
  { tag: "Markets", title: "Gold ETFs Explained", desc: "How exchange-traded gold works and why it matters." },
  { tag: "Bonds", title: "Sovereign Gold Bonds Guide", desc: "Earn interest while you own government-backed gold." },
  { tag: "Macro", title: "Gold and Inflation", desc: "Why gold shines when currencies weaken." },
  { tag: "Tax", title: "Gold Investment Taxation", desc: "A clear breakdown of taxes on every gold instrument." },
];

const faqs = [
  { q: "What is Digital Gold?", a: "Digital Gold allows you to buy and own gold online without physically storing it." },
  { q: "Can I start with a small amount?", a: "Yes, Fingold allows affordable investments starting from as little as ₹100." },
  { q: "Is gold a safe investment?", a: "Gold is considered a reliable long-term wealth preservation asset and a hedge in uncertain markets." },
  { q: "Can I sell my gold anytime?", a: "Most gold investment options on Fingold offer same-day liquidity at live market prices." },
];

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-noise">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(244,208,63,0.35), transparent 65%)" }} />
      <div className="pointer-events-none absolute top-[40%] -left-40 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent 65%)" }} />

      <Nav />

      <main className="pt-28">
        {/* HERO */}
        <section className="mx-auto max-w-7xl px-4 pt-10 pb-24 sm:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="space-y-7">
                <span className="glass-light inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
                  <Sparkles className="h-3.5 w-3.5" style={{ color: "var(--gold-deep)" }} />
                  Trusted Gold Investment Platform
                </span>
                <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  <span className="text-gold-gradient">FINGOLD</span>
                  <br />
                  Invest in Gold,
                  <br />
                  <span className="italic font-light">Secure Your Future</span>
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
                  At Fingold, we make gold investing simple, secure, and accessible for everyone.
                  Whether you're a first-time investor or an experienced wealth builder, Fingold
                  provides multiple ways to invest in gold and grow your financial future.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a href="#cta" className="btn-gold btn-gold-hover btn-shine inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                    Start Investing <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#options" className="glass-light inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5">
                    Explore Investment Options
                  </a>
                </div>
                <dl className="grid max-w-lg grid-cols-3 gap-6 pt-6">
                  {[
                    { v: "₹10Cr+", l: "Gold Investments" },
                    { v: "25,000+", l: "Investors" },
                    { v: "99.9%", l: "Secure" },
                  ].map((s) => (
                    <div key={s.l}>
                      <dt className="text-gold-gradient font-display text-2xl font-bold sm:text-3xl">{s.v}</dt>
                      <dd className="mt-1 text-xs text-foreground/60">{s.l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Floating gold bar + glass card */}
            <Reveal delay={150}>
              <div className="relative mx-auto aspect-square w-full max-w-[560px]">
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 60% 40%, rgba(244,208,63,0.45), transparent 60%)" }} />
                <img
                  src={goldBar}
                  alt="FINGOLD 999.9 fine gold investment bar"
                  width={1024}
                  height={1024}
                  className="float-y relative z-10 mx-auto w-[88%] drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 40px 60px rgba(180,130,30,0.45))" }}
                />
                <div className="glass-dark absolute bottom-0 left-0 right-4 z-20 p-6 sm:right-8 sm:p-7">
                  <span className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide" style={{ background: "var(--gradient-gold)", color: "#1B1B1B" }}>
                    Investment
                  </span>
                  <div className="mt-4 flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border" style={{ borderColor: "rgba(244,208,63,0.4)", background: "rgba(244,208,63,0.12)" }}>
                      <Coins className="h-6 w-6" style={{ color: "var(--gold-bright)" }} />
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white">Gold Bar</h3>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-white/85">
                    <li className="flex gap-2"><span style={{ color: "var(--gold-bright)" }}>•</span> A gold bar is a refined piece of metallic gold.</li>
                    <li className="flex gap-2"><span style={{ color: "var(--gold-bright)" }}>•</span> A popular choice for preserving and growing wealth.</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WELCOME */}
        <section className="mx-auto max-w-5xl px-4 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Welcome to <span className="text-gold-gradient">Fingold</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
              At Fingold, we make gold investing simple, secure, and accessible for everyone.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Buy.", "Save.", "Grow.", "Redeem."].map((w) => (
                <span key={w} className="glass-light rounded-2xl px-6 py-3 font-display text-xl font-semibold">
                  <span className="text-gold-gradient">{w}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* WHY INVEST IN GOLD */}
        <section id="why" className="mx-auto max-w-7xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="Fundamentals" title="Why Invest in Gold?" sub="Six reasons gold continues to anchor the world's wealthiest portfolios." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyGold.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="glass-light card-lift relative h-full rounded-3xl p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                    <c.icon className="h-6 w-6 text-[#1B1B1B]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INVESTMENT OPTIONS */}
        <section id="options" className="mx-auto max-w-7xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="Portfolio" title="Gold Investment Options" sub="Seven curated pathways to own gold — from bullion to bonds." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {options.map((o, i) => (
              <Reveal key={o.title} delay={i * 60}>
                <article className="glass-dark card-lift relative h-full p-7 text-white">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border" style={{ borderColor: "rgba(244,208,63,0.35)", background: "rgba(244,208,63,0.12)" }}>
                      <o.icon className="h-6 w-6" style={{ color: "var(--gold-bright)" }} />
                    </div>
                    {o.risk && (
                      <span className="rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide text-amber-200" style={{ borderColor: "rgba(244,208,63,0.4)" }}>
                        Risk: {o.risk}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{o.title}</h3>
                  {o.includes && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-wider text-white/50">Includes</p>
                      <p className="mt-1 text-sm text-white/80">{o.includes.join(" · ")}</p>
                    </div>
                  )}
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-white/50">Benefits</p>
                    <ul className="mt-2 space-y-1.5">
                      {o.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-white/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold-bright)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE FINGOLD */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="The Fingold Advantage" title="Why Choose Fingold?" sub="A wealth platform engineered for trust, clarity and control." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <article className="glass-light card-lift h-full rounded-3xl p-7">
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-gold)" }}>
                      <c.icon className="h-5 w-5 text-[#1B1B1B]" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="mx-auto max-w-7xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="Plan" title="Tools & Calculators" sub="A luxury-grade dashboard to model every gold scenario." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <article className="glass-light card-lift group h-full rounded-3xl p-7">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl transition-transform group-hover:scale-110" style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
                    <t.icon className="h-7 w-7 text-[#1B1B1B]" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{t.desc}</p>
                  <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--bronze)" }}>
                    Try now <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LEARN */}
        <section id="learn" className="mx-auto max-w-7xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="Knowledge" title="Learn With Fingold" sub="Master gold investing with deep-dive guides written by experts." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learn.map((l, i) => (
              <Reveal key={l.title} delay={i * 70}>
                <article className="glass-light card-lift h-full overflow-hidden rounded-3xl">
                  <div className="relative h-40 overflow-hidden" style={{ background: "var(--gradient-gold-shine)", backgroundSize: "200% auto", animation: "gold-shine 8s linear infinite" }}>
                    <div className="absolute inset-0 grid place-items-center">
                      <Coins className="h-16 w-16 text-[#1B1B1B]/30" />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur">
                      {l.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold">{l.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{l.desc}</p>
                    <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--bronze)" }}>
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
          <Reveal>
            <SectionHeader eyebrow="Answers" title="Frequently Asked Questions" sub="Quick answers to the questions investors ask most." />
          </Reveal>
          <Reveal delay={120}>
            <div className="glass-light mt-12 rounded-3xl px-6 py-2 sm:px-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border/40 last:border-0">
                    <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section id="cta" className="mx-auto max-w-6xl px-4 py-24">
          <Reveal>
            <div className="glass-dark relative overflow-hidden p-10 text-center text-white sm:p-16">
              <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(244,208,63,0.5), transparent 65%)" }} />
              <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.4), transparent 65%)" }} />
              <h2 className="relative font-display text-4xl font-bold sm:text-5xl">
                Start Your <span className="text-gold-gradient">Gold Investment</span> Journey Today
              </h2>
              <p className="relative mx-auto mt-6 max-w-xl font-display text-xl italic text-white/80">
                Invest Smart. Invest in Gold. Invest with Fingold.
              </p>
              <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                <a href="#" className="btn-gold btn-gold-hover btn-shine inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold">
                  Start Investing <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#footer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer id="footer" className="border-t border-border/40 pt-16 pb-10">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--gradient-gold)" }}>
                    <span className="font-display text-base font-bold text-[#1B1B1B]">F</span>
                  </span>
                  <span className="font-display text-2xl font-bold">
                    FIN<span className="text-gold-gradient">GOLD</span>
                  </span>
                </div>
                <p className="mt-4 max-w-sm font-display text-lg italic text-foreground/70">
                  Invest in Gold. Secure Your Future.
                </p>
                <div className="mt-6 space-y-3 text-sm text-foreground/70">
                  <a href="mailto:info@gallantventures.in" className="flex items-center gap-2 hover:text-foreground">
                    <Mail className="h-4 w-4" style={{ color: "var(--bronze)" }} />
                    info@gallantventures.in
                  </a>
                  <a href="tel:+919879150287" className="flex items-center gap-2 hover:text-foreground">
                    <Phone className="h-4 w-4" style={{ color: "var(--bronze)" }} />
                    +91 98791 50287
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">Quick Links</h4>
                <ul className="mt-5 space-y-2.5 text-sm text-foreground/70">
                  {["Home", "Investment Options", "Calculators", "Learning Center", "FAQ", "Contact"].map((l) => (
                    <li key={l}><a href="#" className="hover:text-foreground">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground/80">Follow</h4>
                <div className="mt-5 flex gap-3">
                  {[Linkedin, Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" aria-label="social" className="glass-light grid h-10 w-10 place-items-center rounded-full transition-transform hover:-translate-y-0.5">
                      <Icon className="h-4 w-4" style={{ color: "var(--bronze)" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-foreground/60 sm:flex-row">
              <p>© {new Date().getFullYear()} Fingold. All rights reserved.</p>
              <p>Crafted for those who plan in generations.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="glass-light inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-foreground/70">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
        {title.includes("Fingold") || title.includes("Gold") ? (
          <>
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gold-gradient">{title.split(" ").slice(-1)}</span>
          </>
        ) : (
          title
        )}
      </h2>
      <p className="mt-5 text-base text-foreground/65 sm:text-lg">{sub}</p>
    </div>
  );
}
