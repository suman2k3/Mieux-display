import { PageHero } from "@/components/site/PageHero";
import { company } from "@/data/site";

export function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" subtitle="Last updated 1 January 2026." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Website content</h2>
            <p className="mt-3">
              Specifications, images and availability shown on this site are indicative and may change
              without notice. Nothing on this website constitutes a binding offer.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Quotations</h2>
            <p className="mt-3">
              Written quotations issued by {company.name} are valid for 30 days and are subject to site
              survey, structural feasibility and applicable taxes.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Warranty and service</h2>
            <p className="mt-3">
              Warranty periods vary by product family and are stated on each quotation. Annual
              maintenance contracts define response times and spare-part coverage.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">Intellectual property</h2>
            <p className="mt-3">
              All trademarks, layouts and imagery on this site belong to {company.name} or its partners
              and may not be reproduced without written permission.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
