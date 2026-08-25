import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ArrowRight,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  Search,
  Filter,
} from "lucide-react";
import { Reveal } from "@/components/site/motion-primitives";
import { img } from "@/data/site";
import { OTPVerificationModal } from "@/components/site/OTPVerificationModal";

import brochureIfpPSeries from "@/assets/brochure-ifp-pseries.jpg";
import brochureIfp55 from "@/assets/brochure-ifp-55.png";
import brochureIfp65 from "@/assets/brochure-ifp-65.png";
import brochureIfp75 from "@/assets/brochure-ifp-75.png";
import brochureIfp86 from "@/assets/brochure-ifp-86.png";
import brochureIfp98 from "@/assets/brochure-ifp-98.png";
import brochureIfp105 from "@/assets/brochure-ifp-105.png";
import brochureIfp65w from "@/assets/brochure-ifp-65w.png";
import brochureIfp75w from "@/assets/brochure-ifp-75w.png";
import brochureIfp86w from "@/assets/brochure-ifp-86w.png";
import brochureOneView from "@/assets/brochure-oneview.jpg";
import brochurePixvue from "@/assets/brochure-pixvue.jpg";
import brochureOptiview from "@/assets/brochure-optiview.jpg";
import brochureAFrameStandee from "@/assets/brochure-aframe-standee.jpg";
import brochureMiniPodium from "@/assets/brochure-mini-podium.jpg";
import brochureUltraPodium from "@/assets/brochure-ultra-podium.jpg";
import brochureCommercialDisplay from "@/assets/brochure-commercial-display.jpg";
import brochureFhdPtz from "@/assets/brochure-fhd-ptz.jpg";
import brochure4kPtz from "@/assets/brochure-4k-ptz.jpg";
import brochureOps from "@/assets/brochure-ops.jpg";
import brochureMieuxShiksha from "@/assets/brochure-mieux-shiksha.jpg";
import brochureKiosk21 from "@/assets/brochure-kiosk-21.jpg";
import brochureKiosk3243 from "@/assets/brochure-kiosk-32-43.jpg";
import brochureKiosk55 from "@/assets/brochure-kiosk-55.jpg";

export interface CatalogueDocument {
  id: string;
  title: string;
  category: string;
  image: string;
  documentName: string;
  documentUrl: string;
  fileSize: string;
  pages: string;
}

const catalogueCategories = [
  "All Catalogues",
  "Interactive Panels",
  "Indoor LED Wall",
  "Digital Standee",
  "Digital Podium",
  "Digital Kiosk",
  "Commercial Display",
  "PTZ Camera",
  "OPS",
  "Shiksha Software",
  "Accessories",
];

const catalogueDocuments: CatalogueDocument[] = [
  {
    id: "cat-ifp-65p",
    title: 'MX65P P Series Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "Mieux Interactive Flat Panel P Series (MX65P) Catalogue.pdf",
    documentUrl: "/documents/mx65p-pseries-ifp-catalogue.pdf",
    fileSize: "4.8 MB",
    pages: "12 Pages",
  },
  {
    id: "cat-ifp-55",
    title: '55" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "55 Inch Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/55-ifp-catalogue.pdf",
    fileSize: "3.8 MB",
    pages: "8 Pages",
  },
  {
    id: "cat-ifp-65",
    title: '65" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "65 Inch Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/65-ifp-catalogue.pdf",
    fileSize: "4.2 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-ifp-75",
    title: '75" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "75 Inch Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/75-ifp-catalogue.pdf",
    fileSize: "4.5 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-ifp-86",
    title: '86" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "86 Inch Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/86-ifp-catalogue.pdf",
    fileSize: "4.9 MB",
    pages: "12 Pages",
  },
  {
    id: "cat-ifp-98",
    title: '98" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "98 Inch Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/98-ifp-catalogue.pdf",
    fileSize: "5.2 MB",
    pages: "12 Pages",
  },
  {
    id: "cat-ifp-105",
    title: '105" Interactive Flat Panel',
    category: "Interactive Panels",
    image: brochureIfpPSeries,
    documentName: "105 Inch Ultra-Wide Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/105-ifp-catalogue.pdf",
    fileSize: "5.8 MB",
    pages: "14 Pages",
  },
  {
    id: "cat-ifp-65w",
    title: "65W W-Series Interactive Flat Panel",
    category: "Interactive Panels",
    image: brochureIfp65w,
    documentName: "65W W-Series Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/65w-wseries-ifp-catalogue.pdf",
    fileSize: "4.4 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-ifp-75w",
    title: "MX75W W-Series Interactive Flat Panel",
    category: "Interactive Panels",
    image: brochureIfp75w,
    documentName: "MX75W W-Series Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/mx75w-wseries-ifp-catalogue.pdf",
    fileSize: "4.7 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-ifp-86w",
    title: "MX86W W-Series Interactive Flat Panel",
    category: "Interactive Panels",
    image: brochureIfp86w,
    documentName: "MX86W W-Series Interactive Flat Panel Catalogue.pdf",
    documentUrl: "/documents/mx86w-wseries-ifp-catalogue.pdf",
    fileSize: "5.0 MB",
    pages: "12 Pages",
  },
  {
    id: "cat-led-oneview",
    title: "OneView Series",
    category: "Indoor LED Wall",
    image: brochureOneView,
    documentName: "OneView Integrated LED Video Wall Solution.pdf",
    documentUrl: "/documents/oneview-led-catalogue.pdf",
    fileSize: "5.6 MB",
    pages: "12 Pages",
  },
  {
    id: "cat-led-pixvue",
    title: "PIXVUE Series",
    category: "Indoor LED Wall",
    image: brochurePixvue,
    documentName: "PIXVUE COB Flip-Chip Technology LED Wall.pdf",
    documentUrl: "/documents/pixvue-led-catalogue.pdf",
    fileSize: "6.2 MB",
    pages: "16 Pages",
  },
  {
    id: "cat-led-optiview",
    title: "OPTIVIEW Series",
    category: "Indoor LED Wall",
    image: brochureOptiview,
    documentName: "OPTIVIEW Series Ultra-Slim LED Wall.pdf",
    documentUrl: "/documents/optiview-led-catalogue.pdf",
    fileSize: "4.8 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-commercial-display",
    title: "Commercial Display",
    category: "Commercial Display",
    image: brochureCommercialDisplay,
    documentName: 'Commercial Display (32" | 43") Technical Brochure.pdf',
    documentUrl: "/documents/commercial-display-brochure.pdf",
    fileSize: "3.5 MB",
    pages: "10 Pages",
  },
  {
    id: "cat-digital-standee",
    title: "A-Frame Standee",
    category: "Digital Standee",
    image: brochureAFrameStandee,
    documentName: "Platinum A-Frame Digital Standee Catalogue (MX32AP | MX43AP).pdf",
    documentUrl: "/documents/a-frame-standee-catalogue.pdf",
    fileSize: "3.4 MB",
    pages: "8 Pages",
  },
  {
    id: "cat-mini-podium",
    title: "Mini Podium",
    category: "Digital Podium",
    image: brochureUltraPodium,
    documentName: "Interactive Digital Mini Podium Specification Sheet (MX-27SDL).pdf",
    documentUrl: "/documents/mini-podium-spec.pdf",
    fileSize: "2.9 MB",
    pages: "6 Pages",
  },
  {
    id: "cat-ultra-podium",
    title: "Ultra Podium",
    category: "Digital Podium",
    image: brochureMiniPodium,
    documentName: "Interactive Digital Ultra Podium Specification Sheet (MX-Series).pdf",
    documentUrl: "/documents/ultra-podium-spec.pdf",
    fileSize: "3.2 MB",
    pages: "6 Pages",
  },
  {
    id: "cat-kiosk-21",
    title: "21.5 inch V Stand Digital Kiosk (MX22K)",
    category: "Digital Kiosk",
    image: brochureKiosk21,
    documentName: "21.5 inch V Stand Digital Kiosk (MX22K) Catalogue.pdf",
    documentUrl: "/documents/21.5-vstand-kiosk-catalogue.pdf",
    fileSize: "3.2 MB",
    pages: "6 Pages",
  },
  {
    id: "cat-kiosk-32-43",
    title: "32 & 43 inch K Stand Digital Kiosk",
    category: "Digital Kiosk",
    image: brochureKiosk3243,
    documentName: "32 & 43 inch K Stand Digital Kiosk (MX32K/MX43K) Catalogue.pdf",
    documentUrl: "/documents/32-43-kstand-kiosk-catalogue.pdf",
    fileSize: "4.0 MB",
    pages: "8 Pages",
  },
  {
    id: "cat-kiosk-55",
    title: "55 inch K stand Digital Kiosk (MX55K)",
    category: "Digital Kiosk",
    image: brochureKiosk55,
    documentName: "55 inch K Stand Digital Kiosk (MX55K) Catalogue.pdf",
    documentUrl: "/documents/55-kstand-kiosk-catalogue.pdf",
    fileSize: "4.5 MB",
    pages: "8 Pages",
  },
  {
    id: "cat-fhd-ptz-camera",
    title: "Full HD PTZ Camera",
    category: "PTZ Camera",
    image: brochureFhdPtz,
    documentName: "MXFHD10 Full HD PTZ Camera Datasheet.pdf",
    documentUrl: "/documents/fhd-ptz-camera-datasheet.pdf",
    fileSize: "1.8 MB",
    pages: "4 Pages",
  },
  {
    id: "cat-4k-ptz-camera",
    title: "4K UHD PTZ Camera",
    category: "PTZ Camera",
    image: brochure4kPtz,
    documentName: "MXC2020AT 4K UHD PTZ AI Camera Datasheet.pdf",
    documentUrl: "/documents/4k-ptz-camera-datasheet.pdf",
    fileSize: "2.4 MB",
    pages: "6 Pages",
  },
  {
    id: "cat-ops",
    title: "Open Pluggable Specification (OPS)",
    category: "OPS",
    image: brochureOps,
    documentName: "OPS (Open Pluggable Specification) MX-200S Datasheet.pdf",
    documentUrl: "/documents/ops-module-datasheet.pdf",
    fileSize: "1.5 MB",
    pages: "4 Pages",
  },
  {
    id: "cat-shiksha",
    title: "Mieux Shiksha",
    category: "Shiksha Software",
    image: brochureMieuxShiksha,
    documentName: "Mieux Shiksha Digital Learning Ecosystem Brochure.pdf",
    documentUrl: "/documents/shiksha-guide.pdf",
    fileSize: "5.4 MB",
    pages: "14 Pages",
  },
  {
    id: "cat-accessories",
    title: "Accessories & Mounting Systems",
    category: "Accessories",
    image: img.ptzCamera,
    documentName: "Display Mounts & Accessories Guide.pdf",
    documentUrl: "/documents/accessories-guide.pdf",
    fileSize: "2.2 MB",
    pages: "6 Pages",
  },
];

export function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Catalogues");
  const [selectedDocument, setSelectedDocument] = useState<CatalogueDocument | null>(null);
  const [otpModalOpen, setOtpModalOpen] = useState(false);

  const filteredDocuments = useMemo(() => {
    if (selectedCategory === "All Catalogues") return catalogueDocuments;
    return catalogueDocuments.filter((doc) => {
      if (selectedCategory === "Indoor LED Wall" || selectedCategory === "Indoor LED") {
        return doc.category === "Indoor LED Wall" || doc.category === "Indoor LED";
      }
      return doc.category === selectedCategory;
    });
  }, [selectedCategory]);

  const handleViewCatalogue = (doc: CatalogueDocument) => {
    setSelectedDocument(doc);
    setOtpModalOpen(true);
  };

  return (
    <div className="bg-[#F8F9FA] text-[#0D0D0F] min-h-screen antialiased selection:bg-[#9B1B9E] selection:text-white">
      {/* ─── 1. CLEAN CATALOGUE HERO (LIGHT / OFF-WHITE THEME) ─── */}
      <section className="relative overflow-hidden bg-white border-b border-[#E4E4E7] py-10 sm:py-14 lg:py-18">
        {/* Subtle purple background aura */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(155,27,158,0.06),transparent)] pointer-events-none"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9B1B9E] mb-3">
              <FileText className="h-3.5 w-3.5 shrink-0" />
              PRODUCT CATALOGUE
            </span>

            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0D0D0F] tracking-tight leading-tight">
              Explore Our <span className="text-[#9B1B9E]">Catalogue</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-[#52525B] leading-relaxed font-medium max-w-2xl mx-auto">
              Browse our product brochures and technical catalogues to find the right display solution for your requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── 2. CATEGORY NAVIGATION (PILL FILTERS) ─── */}
      <section className="sticky top-[56px] sm:top-[64px] lg:top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-[#E4E4E7] py-3 sm:py-3.5 shadow-sm">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {catalogueCategories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full px-4 sm:px-4.5 py-2 text-xs font-bold transition-all duration-200 cursor-pointer min-h-[38px] ${
                    isActive
                      ? "bg-[#9B1B9E] text-white shadow-md scale-[1.02]"
                      : "border border-[#E4E4E7] bg-white text-[#52525B] hover:border-[#9B1B9E] hover:text-[#9B1B9E]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. CATALOGUE BROCHURE GRID ─── */}
      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1536px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <span className="text-xs font-bold text-[#71717A] uppercase tracking-wider">
              Showing {filteredDocuments.length} Catalogue{filteredDocuments.length === 1 ? "" : "s"}
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-[#A1A1AA] hidden xs:inline">
              PDF Digital Downloads Available
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-7">
            <AnimatePresence mode="popLayout">
              {filteredDocuments.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: Math.min(idx, 6) * 0.04 }}
                  className="group flex flex-col justify-between overflow-hidden rounded-[20px] sm:rounded-[22px] border border-[#E4E4E7] bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#9B1B9E] hover:shadow-xl h-full"
                >
                  <div>
                    {/* Brochure Image Preview Box — FIT TO FRAME */}
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#F8F9FA] border border-[#E4E4E7] p-2 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:bg-slate-50 transition-colors">
                      <img
                        src={doc.image}
                        alt={doc.title}
                        loading="lazy"
                        className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                      {/* PDF Tag Overlay */}
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 rounded-full bg-white/90 border border-[#E4E4E7] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#9B1B9E] backdrop-blur flex items-center gap-1 shadow-sm">
                        <FileText className="h-3 w-3 text-[#FF6B00]" />
                        <span>{doc.fileSize}</span>
                      </div>

                      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 rounded-full bg-slate-900/80 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-semibold text-white backdrop-blur">
                        {doc.pages}
                      </div>
                    </div>

                    {/* Category Label */}
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#9B1B9E] block mb-1 truncate">
                      {doc.category}
                    </span>

                    {/* Document Title */}
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-[#0D0D0F] leading-snug group-hover:text-[#9B1B9E] transition-colors">
                      {doc.title}
                    </h3>
                  </div>

                  {/* Action Button — Opens Brochure Modal / Download */}
                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-[#E4E4E7] flex items-center justify-between">
                    <button
                      onClick={() => handleViewCatalogue(doc)}
                      className="w-full inline-flex items-center justify-between rounded-xl bg-[#9B1B9E] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#B52CB8] group/btn cursor-pointer min-h-[42px]"
                    >
                      <span className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        <span>View Catalogue</span>
                      </span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* OTP Verification Modal for Viewing / Downloading Catalogue */}
      {selectedDocument && (
        <OTPVerificationModal
          isOpen={otpModalOpen}
          onClose={() => {
            setOtpModalOpen(false);
            setSelectedDocument(null);
          }}
          documentName={selectedDocument.documentName}
          documentUrl={selectedDocument.documentUrl}
        />
      )}
    </div>
  );
}
