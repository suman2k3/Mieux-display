import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Navigation, ExternalLink } from "lucide-react";
import { demoBranches, type BranchLocation } from "@/data/branchData";
import IndiaMap from "@svg-maps/india";

interface IndiaBranchMapProps {
  branches?: BranchLocation[];
  isLightSection?: boolean;
}

export function IndiaBranchMap({ branches = demoBranches, isLightSection = false }: IndiaBranchMapProps) {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("noida-hq");
  const [hoveredBranchId, setHoveredBranchId] = useState<string | null>(null);

  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) || branches[0];

  return (
    <section
      id="india-presence"
      className={`relative w-full overflow-hidden py-14 lg:py-20 border-b isolate ${
        isLightSection
          ? "bg-[#F7F7F5] text-[#0D0D0F] border-[#E4E4E7]"
          : "bg-[#050505] text-[#F5F5F5] border-[#27272A]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#9B1B9E]/30 bg-[#9B1B9E]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9B1B9E]">
            OUR PRESENCE
          </span>
          <h2
            className={`mt-2.5 text-3xl font-extrabold sm:text-4xl tracking-tight font-display ${
              isLightSection ? "text-[#0D0D0F]" : "text-white"
            }`}
          >
            Engineering support <span className="text-[#9B1B9E]">across India</span>
          </h2>
          <p
            className={`mt-1.5 text-xs sm:text-sm font-medium ${
              isLightSection ? "text-[#52525B]" : "text-[#A1A1AA]"
            }`}
          >
            Explore our branch locations and Pan-India service network spanning 25+ cities.
          </p>
        </div>

        {/* Full-Width Map & Side Info Panel Layout */}
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Left / Center: DARK MAP CANVAS CONTAINER (Keeps India map dark for strong contrast) */}
          <div className="lg:col-span-8 relative flex justify-center items-center rounded-[26px] bg-[#050505] border border-[#27272A] p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden">
            {/* Background Ambient Radial Glow inside Map Canvas */}
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(155,27,158,0.12),transparent)] pointer-events-none"
              aria-hidden
            />

            <div className="relative w-full max-w-[650px] aspect-[612/696] flex items-center justify-center z-10">
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
                    stroke="rgba(255, 255, 255, 0.12)"
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
                className={`rounded-[24px] p-6 sm:p-7 shadow-xl relative overflow-hidden flex flex-col justify-between ${
                  isLightSection
                    ? "border border-[#E4E4E7] bg-white text-[#0D0D0F]"
                    : "border border-[#27272A] bg-[#151518] text-[#F5F5F5]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-[#FF6B00] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      ACTIVE LOCATION
                    </span>
                    <span
                      className={`rounded-full px-3 py-0.5 text-[10px] font-semibold ${
                        isLightSection
                          ? "bg-slate-100 text-[#52525B] border border-[#E4E4E7]"
                          : "bg-[#0D0D0F] text-[#A1A1AA] border border-[#27272A]"
                      }`}
                    >
                      {selectedBranch.state}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-2xl font-extrabold ${
                      isLightSection ? "text-[#0D0D0F]" : "text-white"
                    }`}
                  >
                    {selectedBranch.city}
                  </h3>
                  <p className="mt-0.5 text-xs font-bold text-[#9B1B9E]">
                    {selectedBranch.title}
                  </p>

                  <div
                    className={`mt-5 space-y-3.5 border-t pt-4 text-xs font-medium ${
                      isLightSection ? "border-[#E4E4E7] text-[#52525B]" : "border-[#27272A] text-[#A1A1AA]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 shrink-0 text-[#FF6B00] mt-0.5" />
                      <span>{selectedBranch.address}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 shrink-0 text-[#9B1B9E]" />
                      <span>Phone: {selectedBranch.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 shrink-0 text-[#9B1B9E]" />
                      <span>Email: {selectedBranch.email}</span>
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div
                  className={`mt-6 pt-4 border-t ${
                    isLightSection ? "border-[#E4E4E7]" : "border-[#27272A]"
                  }`}
                >
                  <a
                    href={selectedBranch.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9B1B9E] px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#B52CB8] hover:-translate-y-0.5"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                    <ExternalLink className="h-3.5 w-3.5 ml-auto opacity-70" />
                  </a>
                </div>

                {/* Quick Switch Location Pills */}
                <div className="mt-5">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block mb-2 ${
                      isLightSection ? "text-[#71717A]" : "text-[#A1A1AA]"
                    }`}
                  >
                    Switch Location
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto no-scrollbar pt-0.5">
                    {branches.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setSelectedBranchId(b.id)}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                          b.id === selectedBranchId
                            ? "bg-[#9B1B9E] text-white font-bold"
                            : isLightSection
                            ? "bg-slate-100 text-[#52525B] hover:bg-[#9B1B9E] hover:text-white border border-[#E4E4E7]"
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
