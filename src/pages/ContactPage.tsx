import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion-primitives";
import { company, products } from "@/data/site";

export function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Get Quote"
        title="Tell us about your space"
        subtitle="Share the room, the viewing distance and your timeline. We will respond with a recommendation and a fixed quote within one business day."
      />

      <section className="bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_360px]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  <h2 className="mt-5 font-display text-2xl font-semibold text-navy">Request received</h2>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    Thank you — our solutions team will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-5 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field label="Full name" name="name" placeholder="Your name" />
                  <Field label="Company" name="company" placeholder="Company name" />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                  <Field label="Phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                  <label className="sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Product of interest
                    </span>
                    <select
                      name="product"
                      className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary"
                    >
                      <option>Not sure yet</option>
                      {products.map((p) => (
                        <option key={p.slug}>{p.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="sm:col-span-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Project details
                    </span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Room size, viewing distance, indoor or outdoor, timeline…"
                      className="mt-2 w-full rounded-xl border border-input bg-background p-4 text-sm outline-none focus:border-primary"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:col-span-2 sm:w-fit"
                  >
                    Send request <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-[var(--gradient-dark)] p-8 text-on-dark">
              <h2 className="font-display text-xl font-semibold">Talk to us directly</h2>
              <ul className="mt-7 space-y-6 text-sm">
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent">{company.phone}</a>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a>
                </li>
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-on-dark-muted">{company.address}</span>
                </li>
              </ul>
              <p className="mt-8 border-t border-white/10 pt-6 text-xs text-on-dark-muted">
                Support hours: Monday to Saturday, 9:00 – 19:00 IST. AMC clients get 24x7 escalation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <label>
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}
