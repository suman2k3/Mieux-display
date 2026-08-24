import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X, ChevronRight, ChevronDown, LifeBuoy } from "lucide-react";
import { company, products, solutions } from "@/data/site";
import { HeaderBadges } from "./GovernmentBadges";
import logoImg from "@/assets/mieux-logo.png";

/* ─── Level 1 — Top Utility Bar Links ─── */
const utilityLinks = [
  { label: "Education & Corporate", to: "/solutions" },
  { label: "Government", to: "/solutions" },
  { label: "Retail", to: "/solutions" },
];

/* ─── Level 2 — Main Navigation Items ─── */
const mainNavItems = [
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products", mega: "products" as const },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center py-0" aria-label={`${company.short} home`}>
      <img
        src={logoImg}
        alt="MIEUX Display"
        className="h-14 w-auto max-w-[260px] sm:h-[62px] sm:max-w-[340px] object-contain shrink-0 transition-transform duration-200 hover:scale-[1.02] drop-shadow-sm"
      />
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"products" | null>(null);
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
      {/* LEVEL 1 — TOP UTILITY BAR (HIDDEN ON MOBILE)    */}
      {/* ─────────────────────────────────────────────── */}
      <div className="hidden sm:block bg-[#050505] text-[#A1A1AA]">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-[12px] sm:text-[13px] font-medium tracking-wide sm:px-6">
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
      {/* LEVEL 2 — MAIN HEADER (WHITE BACKGROUND)        */}
      {/* ─────────────────────────────────────────────── */}
      <div
        onMouseLeave={() => setOpenMega(null)}
        className={`relative bg-white/95 backdrop-blur-md border-b border-[#E4E4E7] transition-all duration-300 text-[#0D0D0F] ${
          scrolled ? "shadow-md bg-white" : ""
        }`}
      >
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 py-1">
          <div className="flex items-center">
            <Logo />
            <HeaderBadges dark={false} />
          </div>

          {/* Desktop main nav — centered (Solutions, Products, Gallery, About Us, Contact) */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative" onMouseEnter={() => setOpenMega(item.mega || null)}>
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
                    return `nav-underline py-2 text-[14px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                      isItemActive
                        ? "text-[#9B1B9E] font-bold active border-b-2 border-[#9B1B9E]"
                        : "text-[#0D0D0F] hover:text-[#9B1B9E]"
                    }`;
                  }}
                >
                  <span>{item.label}</span>
                  {item.mega && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openMega === item.mega ? "rotate-180 text-[#9B1B9E]" : "opacity-60"
                      }`}
                    />
                  )}
                </NavLink>

                {/* ─── Products Vertical Dropdown Menu ─── */}
                {item.mega === "products" && (
                  <AnimatePresence>
                    {openMega === "products" && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 hidden w-72 overflow-hidden rounded-2xl border border-[#E4E4E7] bg-white p-2.5 shadow-2xl lg:block text-[#0D0D0F] z-50 mt-1"
                      >
                        <div className="flex flex-col space-y-0.5">
                          <div className="px-3.5 py-2 border-b border-[#E4E4E7] mb-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#9B1B9E]">
                              PRODUCT CATEGORIES
                            </span>
                          </div>

                          {products.map((entry) => (
                            <Link
                              key={entry.slug}
                              to={`/products/${entry.slug}`}
                              onClick={() => setOpenMega(null)}
                              className="group flex items-center justify-between rounded-xl px-3.5 py-2 text-xs font-bold transition-all text-[#0D0D0F] hover:bg-[#9B1B9E]/10 hover:text-[#9B1B9E]"
                            >
                              <span>{entry.name}</span>
                              <ChevronRight className="h-3.5 w-3.5 text-[#9B1B9E] opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                            </Link>
                          ))}

                          <div className="pt-2 border-t border-[#E4E4E7] mt-1">
                            <Link
                              to="/products"
                              onClick={() => setOpenMega(null)}
                              className="flex items-center justify-between rounded-xl bg-[#F8F9FA] px-3.5 py-2.5 text-xs font-extrabold text-[#FF6B00] hover:bg-[#9B1B9E] hover:text-white transition-all"
                            >
                              <span>View Full Catalog</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
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
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#E4E4E7] bg-slate-50 text-[#0D0D0F] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
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
            <div className="space-y-3 px-4 py-5">
              <div className="space-y-1">
                {mainNavItems.map((item) => (
                  <div key={item.label}>
                    {item.mega ? (
                      <div>
                        <button
                          onClick={() => setOpenMega((curr) => (curr === item.mega ? null : item.mega!))}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-bold text-[#F5F5F5] hover:bg-[#151518] hover:text-[#9B1B9E]"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-[#9B1B9E] transition-transform duration-200 ${
                              openMega === item.mega ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openMega === item.mega && (
                          <div className="ml-3 my-1.5 space-y-1 border-l-2 border-[#9B1B9E] pl-3">
                            {item.mega === "solutions"
                              ? solutions.map((s) => (
                                  <Link
                                    key={s.slug}
                                    to={`/solutions/${s.slug}`}
                                    onClick={() => {
                                      setOpenMega(null);
                                      setMobileOpen(false);
                                    }}
                                    className="block py-1.5 text-sm font-semibold text-[#A1A1AA] hover:text-white"
                                  >
                                    {s.title}
                                  </Link>
                                ))
                              : products.map((p) => (
                                  <Link
                                    key={p.slug}
                                    to={`/products/${p.slug}`}
                                    onClick={() => {
                                      setOpenMega(null);
                                      setMobileOpen(false);
                                    }}
                                    className="block py-1.5 text-sm font-semibold text-[#A1A1AA] hover:text-white"
                                  >
                                    {p.name}
                                  </Link>
                                ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-base font-bold hover:bg-[#151518] text-[#F5F5F5] hover:text-[#9B1B9E]"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Sector Quick Links inside Mobile Menu */}
              <div className="py-2.5 px-3 rounded-xl bg-[#151518] border border-[#27272A] flex items-center justify-around text-xs font-bold text-[#9B1B9E]">
                <Link
                  to="/solutions/education"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline transition-all hover:text-[#B52CB8]"
                >
                  Education
                </Link>
                <span className="text-[#27272A] font-normal">|</span>
                <Link
                  to="/solutions/retail"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline transition-all hover:text-[#B52CB8]"
                >
                  Retail
                </Link>
                <span className="text-[#27272A] font-normal">|</span>
                <Link
                  to="/solutions/government"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline transition-all hover:text-[#B52CB8]"
                >
                  Defence
                </Link>
              </div>

              {/* Contact & Utility Bar Info for Mobile */}
              <div className="pt-3 border-t border-[#27272A] space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#A1A1AA] px-3">
                  Direct Contact & Support
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2.5 rounded-xl border border-[#27272A] bg-[#151518] px-3.5 py-2.5 text-xs font-bold text-white hover:border-[#FF7A00]"
                  >
                    <Phone className="h-4 w-4 text-[#FF7A00]" />
                    <span>{company.phone}</span>
                  </a>
                  <a
                    href={`mailto:${company.email}`}
                    className="flex items-center gap-2.5 rounded-xl border border-[#27272A] bg-[#151518] px-3.5 py-2.5 text-xs font-semibold text-[#A1A1AA] hover:text-white hover:border-[#9B1B9E]"
                  >
                    <Mail className="h-4 w-4 text-[#9B1B9E]" />
                    <span className="truncate">{company.email}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 px-3 pt-1 text-xs text-[#A1A1AA]">
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 hover:text-white"
                  >
                    <LifeBuoy className="h-3.5 w-3.5 text-[#9B1B9E]" />
                    <span>Support Desk</span>
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-xl bg-[#9B1B9E] hover:bg-[#B52CB8] px-4 py-3 text-center text-sm font-bold text-white shadow-lg"
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
