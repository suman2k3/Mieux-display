import { PageHero } from "@/components/site/PageHero";
import { company } from "@/data/site";

export function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated 1 January 2026." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Information we collect</h2>
            <p className="mt-3">
              We collect the details you submit through our quote and contact forms — name, company,
              email, phone number and project description — along with basic analytics about how the
              site is used.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">How we use it</h2>
            <p className="mt-3">
              Your information is used solely to respond to enquiries, prepare quotations, arrange site
              surveys and provide after-sales support. We do not sell or rent personal data.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Retention and security</h2>
            <p className="mt-3">
              Enquiry records are retained for the duration of the commercial relationship and for as
              long as required by applicable law. Access is restricted to authorised personnel.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              For access, correction or deletion requests, write to {company.email} or {company.address}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
