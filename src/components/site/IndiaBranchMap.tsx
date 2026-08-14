import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Navigation, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/site/motion-primitives";
import { demoBranches, type BranchLocation } from "@/data/branchData";
import IndiaMap from "@svg-maps/india";

export function IndiaBranchMap({ branches = demoBranches }: { branches?: BranchLocation[] }) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("noida-hq");
  const [hoveredBranchId, setHoveredBranchId] = useState<string | null>(null);

  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) || branches[0];

  return (
    <section className="relative w-full overflow-hidden bg-[#050505] text-[#F5F5F5] py-24 lg:py-32 border-b border-[#27272A] isolate">
      {/* Background Tech Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.06),transparent)] pointer-events-none"
        aria-hidden
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Centered Heading */}
        <SectionHeading
          dark
          eyebrow="OUR PRESENCE"
          title="Engineering support across India"
          subtitle="Explore our existing branch and service locations across India."
        />

        {/* Full-Width Map & Side Info Panel Layout */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 items-center">
          {/* Left / Center: Official India Map Visual via @svg-maps/india (8 cols desktop) */}
          <div className="lg:col-span-8 relative flex justify-center items-center py-4">
            <div className="relative w-full max-w-[700px] aspect-[612/696] flex items-center justify-center">
              {/* OFFICIAL @svg-maps/india GEOMETRY SVG */}
              <svg
                viewBox={IndiaMap.viewBox}
                className="w-full h-full filter drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Render Official State and Union Territory Paths */}
                {IndiaMap.locations.map((loc) => (
                  <path
                    key={loc.id}
                    id={loc.id}
                    d={loc.path}
                    fill="#151518"
                    stroke="rgba(255, 255, 255, 0.10)"
                    strokeWidth="1"
                    strokeLinejoin="round"
                    className="transition-colors duration-300 hover:fill-[#1D1D21]"
                  />
                ))}

                {/* Render Branch Pins / Markers inside the SAME SVG coordinate space */}
                {branches.map((b) => {
                  const isSelected = b.id === selectedBranchId;
                  const isHovered = b.id === hoveredBranchId;

                  const cx = b.svgX;
                  const cy = b.svgY;

                  return (
                    <g
                      key={b.id}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => setSelectedBranchId(b.id)}
                      onMouseEnter={() => setHoveredBranchId(b.id)}
                      onMouseLeave={() => setHoveredBranchId(null)}
                    >
                      {/* Pulse effect */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 18 : 12}
                        className={`${
                          isSelected ? "fill-[#FF6B00]/50 animate-ping" : "fill-[#9B1B9E]/30"
                        }`}
                      />

                      {/* Outer Glow Ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 10 : 7}
                        fill={isSelected ? "#FF6B00" : "#9B1B9E"}
                        opacity={isSelected ? 0.95 : 0.8}
                      />

                      {/* Center Point */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? 5 : 3.5}
                        fill="#FFFFFF"
                      />

                      {/* Tooltip on Hover */}
                      <AnimatePresence>
                        {isHovered && !isSelected && (
                          <g transform={`translate(${cx}, ${cy - 24})`}>
                            <rect
                              x="-65"
                              y="-28"
                              width="130"
                              height="26"
                              rx="6"
                              fill="#151518"
                              stroke="#27272A"
                              strokeWidth="1"
                            />
                            <text
                              x="0"
                              y="-11"
                              textAnchor="middle"
                              fill="#F5F5F5"
                              fontSize="10"
                              fontWeight="bold"
                              fontFamily="sans-serif"
                            >
                              {b.city} • {b.state}
                            </text>
                          </g>
                        )}
                      </AnimatePresence>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Selected Branch Side Location Panel (4 cols desktop) */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBranch.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-[#27272A] bg-[#151518] p-8 shadow-2xl backdrop-blur-md relative overflow-hidden text-[#F5F5F5]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-[#FF6B00] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    ACTIVE LOCATION
                  </span>
                  <span className="rounded-full bg-[#0D0D0F] px-3 py-1 text-[10px] font-semibold text-[#A1A1AA] border border-[#27272A]">
                    {selectedBranch.state}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white">
                  {selectedBranch.city}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#9B1B9E]">
                  {selectedBranch.title}
                </p>

                <div className="mt-6 space-y-4 border-t border-[#27272A] pt-5">
                  <div className="flex items-start gap-3 text-xs text-[#A1A1AA]">
                    <MapPin className="h-4 w-4 shrink-0 text-[#FF6B00] mt-0.5" />
                    <span>{selectedBranch.address}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                    <Phone className="h-4 w-4 shrink-0 text-[#9B1B9E]" />
                    <span>Phone: {selectedBranch.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#A1A1AA]">
                    <Mail className="h-4 w-4 shrink-0 text-[#9B1B9E]" />
                    <span>Email: {selectedBranch.email}</span>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="mt-8 pt-4 border-t border-[#27272A]">
                  <a
                    href={selectedBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-6 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                    <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-70" />
                  </a>
                </div>

                {/* Quick Switch Location Pills */}
                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717A] block mb-2">
                    Switch Location
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto no-scrollbar pt-1">
                    {branches.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBranchId(b.id)}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                          b.id === selectedBranchId
                            ? "bg-[#9B1B9E] text-white font-bold"
                            : "bg-[#0D0D0F] text-[#A1A1AA] hover:bg-[#1D1D21] hover:text-white border border-[#27272A]"
                        }`}
                      >
                        {b.city}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
