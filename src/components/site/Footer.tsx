import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { company, products, solutions } from "@/data/site";
import logoImg from "@/assets/mieux-logo.png";

const socials = [
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4V9z",
  },
  {
    label: "Facebook",
    path: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V9.9H7.4V13h2.7v8h3.4z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.62 2.16 15.24 2.16 12s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.21 8.8 2.2 12 2.2zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6zm5.3-9.8a1.19 1.19 0 1 0 0 2.38 1.19 1.19 0 0 0 0-2.38z",
  },
  {
    label: "YouTube",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-ink text-on-dark-muted">
      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1: LOGO, DESCR, COMPACT NEWSLETTER, SOCIALS */}
          <div>
            <div className="inline-block rounded-2xl bg-white p-3.5 shadow-md">
              <img src={logoImg} alt="MIEUX DISPLAY" className="h-14 w-auto sm:h-16 object-contain" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Enterprise LED, interactive and digital signage solutions — engineered, installed and
              supported across India.
            </p>

            {/* COMPACT NEWSLETTER OPTION BELOW LOGO */}
            <div className="mt-5 max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wider text-on-dark mb-2">
                Subscribe to Newsletter
              </p>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-4 w-4" /> Subscribed to updates!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-xs text-white placeholder-slate-400 focus:border-[#0057FF] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-[#0057FF] px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ path, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:border-primary hover:text-on-dark"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-dark">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Solutions", to: "/solutions" },
                { label: "Products", to: "/products" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-on-dark">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/privacy" className="transition-colors hover:text-on-dark">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-on-dark">Terms of Use</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-dark">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="transition-colors hover:text-on-dark">
                    {p.name}
                  </Link>
                </li>
              ))}
              {solutions.slice(0, 2).map((s) => (
                <li key={s.slug}>
                  <Link to={`/solutions/${s.slug}`} className="transition-colors hover:text-on-dark">
                    {s.title} Solutions
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-on-dark">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-on-dark">{company.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${company.email}`} className="hover:text-on-dark">{company.email}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs sm:px-6">
          © 2026 {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
