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
    <footer className="bg-[#F7F7F5] text-[#0D0D0F] border-t border-[#E4E4E7]">
      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* COLUMN 1: LOGO & DESCR */}
          <div className="lg:col-span-1">
            <div className="inline-block rounded-2xl bg-white p-3 shadow-md border border-[#E4E4E7]">
              <img src={logoImg} alt="MIEUX DISPLAY" className="h-12 w-auto object-contain" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#52525B] font-medium">
              Enterprise LED, interactive and digital signage solutions — engineered, installed and supported across India.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-5 flex gap-2">
              {socials.map(({ path, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-lg border border-[#E4E4E7] bg-white text-[#52525B] shadow-sm transition-all hover:border-[#9B1B9E] hover:text-[#9B1B9E] hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D0D0F]">Company</h3>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              {[
                { label: "About Us", to: "/about" },
                { label: "Careers", to: "/about" },
                { label: "Blog", to: "/about" },
                { label: "Media", to: "/gallery" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors text-[#52525B] hover:text-[#9B1B9E]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SOLUTIONS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D0D0F]">Solutions</h3>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link to="/solutions" className="transition-colors text-[#52525B] hover:text-[#9B1B9E]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: PRODUCTS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D0D0F]">Products</h3>
            <ul className="mt-4 space-y-2.5 text-xs font-medium">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="transition-colors text-[#52525B] hover:text-[#9B1B9E]">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: CONTACT US */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D0D0F]">Contact Us</h3>
            <ul className="mt-4 space-y-3 text-xs font-medium">
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-[#52525B] hover:text-[#0D0D0F]">{company.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                <a href={`mailto:${company.email}`} className="text-[#52525B] hover:text-[#0D0D0F] truncate">{company.email}</a>
              </li>
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9B1B9E]" />
                <span className="text-[#52525B]">{company.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E4E4E7] bg-[#EAEAEA]/50">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#71717A] sm:px-6 gap-2">
          <span>© 2026 {company.name}. All Rights Reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#0D0D0F] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#0D0D0F] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
