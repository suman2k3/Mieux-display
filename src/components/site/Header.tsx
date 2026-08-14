import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X, ChevronRight, LifeBuoy } from "lucide-react";
import { company, solutions } from "@/data/site";
import { HeaderBadges } from "./GovernmentBadges";
import logoImg from "@/assets/mieux-logo.png";

/* ─── Level 1 — Top Utility Bar Links ─── */
const utilityLinks = [
  { label: "Education & Corporate", to: "/solutions/education" },
  { label: "Government", to: "/solutions/government" },
  { label: "Retail", to: "/solutions/retail" },
];

/* ─── Level 2 — Main Navigation Items (Exact Order: Solutions, Products, About Us, Gallery, Contact) ─── */
const mainNavItems = [
  { label: "Solutions", to: "/solutions", mega: "solutions" as const },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center py-1" aria-label={`${company.short} home`}>
      <img
        src={logoImg}
        alt="MIEUX Display"
        className="h-11 w-auto max-w-[170px] sm:h-13 sm:max-w-[190px] object-contain drop-shadow-md transition-all brightness-110"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"solutions" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on body lock
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-[100]">
      {/* ─────────────────────────────────────────────── */}
      {/* LEVEL 1 — TOP UTILITY BAR (36px HEIGHT)        */}
      {/* ─────────────────────────────────────────────── */}
      <div className="bg-[#050505] text-[#A1A1AA] border-b border-[#27272A]">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[12px] sm:text-[13px] font-medium tracking-wide sm:px-6">
          <nav className="hidden items-center gap-5 sm:flex">
            {utilityLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                {i > 0 && <span className="h-3 w-px bg-[#27272A]" aria-hidden />}
                <Link
                  to={link.to}
                  className="nav-underline transition-colors hover:text-[#9B1B9E]"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-5 sm:gap-6 ml-auto text-xs sm:text-[13px]">
            <Link to="/contact" className="hidden items-center gap-1.5 transition-colors hover:text-white sm:flex">
              <LifeBuoy className="h-3.5 w-3.5 text-[#9B1B9E]" />
              <span>Support</span>
            </Link>
            <a href={`mailto:${company.email}`} className="hidden items-center gap-1.5 transition-colors hover:text-white md:flex">
              <Mail className="h-3.5 w-3.5 text-[#9B1B9E]" />
              <span>{company.email}</span>
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 transition-colors hover:text-white font-semibold text-white">
              <Phone className="h-3.5 w-3.5 text-[#FF7A00]" />
              <span>{company.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────── */}
      {/* LEVEL 2 — MAIN HEADER (64px HEIGHT)            */}
      {/* ─────────────────────────────────────────────── */}
      <div
        onMouseLeave={() => setOpenMega(null)}
        className={`relative bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#27272A] transition-all duration-300 text-[#F5F5F5] ${
          scrolled ? "shadow-2xl bg-[#050505]/98" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo + Government Credibility Badges */}
          <div className="flex items-center">
            <Logo />
            <HeaderBadges />
          </div>

          {/* Desktop main nav — centered (Solutions, Products, About Us, Gallery, Contact) */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {mainNavItems.map((item) => (
              <div key={item.label} onMouseEnter={() => setOpenMega(item.mega || null)}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => {
                    if (item.mega) {
                      setOpenMega((curr) => (curr === item.mega ? null : item.mega!));
                    }
                  }}
                  className={({ isActive }) => {
                    const isItemActive = item.mega ? openMega === item.mega : isActive;
                    return `nav-underline py-2 text-[14px] font-semibold transition-colors ${
                      isItemActive
                        ? "text-[#9B1B9E] font-bold active border-b-2 border-[#9B1B9E]"
                        : "text-[#F5F5F5] hover:text-[#B52CB8]"
                    }`;
                  }}
                >
                  {item.label}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-xl bg-[#9B1B9E] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B52CB8] sm:inline-flex"
            >
              Get Quote
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#27272A] bg-[#151518] text-[#F5F5F5] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ─── Solutions Mega Menu ─── */}
        <AnimatePresence>
          {openMega === "solutions" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 hidden border-b border-[#27272A] bg-[#0D0D0F] shadow-2xl lg:block text-[#F5F5F5]"
            >
              <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1fr_280px]">
                <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {solutions.map((entry) => (
                    <Link
                      key={entry.slug}
                      to={`/solutions/${entry.slug}`}
                      onClick={() => setOpenMega(null)}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-[#A1A1AA] hover:bg-[#151518] hover:text-[#F5F5F5]"
                    >
                      {entry.title}
                      <ChevronRight className="h-4 w-4 -translate-x-1 text-[#9B1B9E] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
                <div className="rounded-2xl border border-[#27272A] bg-[#151518] p-6 text-[#F5F5F5] shadow-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                    Need help choosing?
                  </p>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-[#F5F5F5]">
                    Free site survey and pixel-pitch recommendation.
                  </p>
                  <Link
                    to="/contact"
                    onClick={() => setOpenMega(null)}
                    className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#9B1B9E] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    Talk to an expert
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─────────────────────────────────────────────── */}
      {/* MOBILE DRAWER                                   */}
      {/* ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-[#27272A] bg-[#0D0D0F] lg:hidden max-h-[85vh] overflow-y-auto text-[#F5F5F5]"
          >
            <div className="space-y-1 px-4 py-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#27272A] mb-2">
                <HeaderBadges />
              </div>

              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold hover:bg-[#151518] text-[#F5F5F5] hover:text-[#B52CB8]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 block rounded-xl bg-[#9B1B9E] hover:bg-[#B52CB8] px-4 py-3 text-center text-sm font-bold text-white"
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
