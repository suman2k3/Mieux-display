import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X, ChevronRight, LifeBuoy } from "lucide-react";
import { company, solutions } from "@/data/site";
import { ProductsMegaMenu } from "./ProductsMegaMenu";

import logoImg from "@/assets/mieux-logo.png";

const topLinks = ["Education", "Defence", "Corporate"];
const navItems = [
  { label: "Solutions", to: "/solutions", mega: "solutions" as const },
  { label: "Products", to: "/products", mega: "products" as const },
  { label: "About Us", to: "/about", mega: null },
  { label: "Contact", to: "/contact", mega: null },
];

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center py-1" aria-label={`${company.short} home`}>
      <img
        src={logoImg}
        alt="MIEUX Display"
        className="h-16 w-auto max-w-[220px] sm:h-20 sm:max-w-[280px] object-contain drop-shadow-sm"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"solutions" | "products" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* TOP STRIP */}
      <div className="bg-ink text-on-dark-muted">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6">
          <nav className="flex items-center gap-3 sm:gap-4">
            {topLinks.map((t, i) => (
              <span key={t} className="flex items-center gap-3 sm:gap-4">
                {i > 0 && <span className="h-3 w-px bg-white/15" aria-hidden />}
                <Link
                  to={`/solutions/${t.toLowerCase()}`}
                  className="nav-underline tracking-wide transition-colors hover:text-on-dark"
                >
                  {t}
                </Link>
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden items-center gap-1.5 transition-colors hover:text-on-dark sm:flex">
              <LifeBuoy className="h-3.5 w-3.5" /> Support
            </Link>
            <a href={`mailto:${company.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-on-dark md:flex">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-on-dark">
              <Phone className="h-3.5 w-3.5" /> {company.phone}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div
        onMouseLeave={() => setOpenMega(null)}
        className={`relative border-b bg-background/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-soft" : "shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.label} onMouseEnter={() => setOpenMega(item.mega)}>
                <NavLink
                  to={item.to}
                  end
                  onClick={() => {
                    if (item.mega) {
                      setOpenMega((curr) => (curr === item.mega ? null : item.mega));
                    }
                  }}
                  className={({ isActive }) => {
                    const isItemActive = item.mega
                      ? openMega === item.mega
                      : isActive;
                    return `nav-underline py-2 text-sm font-semibold transition-colors ${
                      isItemActive
                        ? "text-primary font-bold active"
                        : "text-[#071D35] hover:text-primary"
                    }`;
                  }}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
            >
              Get Quote
            </Link>
            <button
              className="grid h-11 w-11 place-items-center rounded-xl border lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* MEGA MENUS */}
        <AnimatePresence>
          {openMega === "products" && (
            <ProductsMegaMenu onClose={() => setOpenMega(null)} />
          )}

          {openMega === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 hidden border-b border-border bg-background shadow-lift lg:block"
            >
              <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_280px]">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {solutions.map((entry) => (
                    <Link
                      key={entry.slug}
                      to={`/solutions/${entry.slug}`}
                      onClick={() => setOpenMega(null)}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                      {entry.title}
                      <ChevronRight className="h-4 w-4 -translate-x-1 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
                <div className="rounded-2xl bg-[var(--gradient-dark)] p-6 text-on-dark">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-dark-muted">
                    Need help choosing?
                  </p>
                  <p className="mt-3 font-display text-lg font-semibold">
                    Free site survey and pixel-pitch recommendation.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setOpenMega(null)}
                    className="mt-5 inline-flex rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground"
                  >
                    Talk to an expert
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b bg-background lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-secondary text-[#071D35]"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
