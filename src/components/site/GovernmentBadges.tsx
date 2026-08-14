import React from "react";
import makeInIndiaImg from "@/assets/make-in-india-logo.png";

export function HeaderBadges() {
  return (
    <div className="hidden md:flex items-center gap-3 border-l border-white/15 pl-4 ml-2">
      {/* 1. We are Make in India */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-slate-300 whitespace-nowrap">
          We are
        </span>
        <div className="flex items-center px-2 py-1 rounded-lg bg-white shadow-sm border border-white/20 transition-all hover:scale-105">
          <img
            src={makeInIndiaImg}
            alt="Make in India"
            className="h-5 w-auto max-w-[95px] object-contain"
          />
        </div>
      </div>

      {/* 2. Available on GeM */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-slate-300 whitespace-nowrap">
          Available on
        </span>
        <div className="flex items-center px-2 py-1 rounded-lg bg-white shadow-sm border border-white/20 transition-all hover:scale-105">
          <svg viewBox="0 0 115 32" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* GeM 4-Point Star Emblem */}
            <g transform="translate(1, 1)">
              <path d="M12 2 L16 12 L12 10 L8 12 Z" fill="#2A9D8F" />
              <path d="M22 12 L14 16 L16 12 L14 8 Z" fill="#0057FF" />
              <path d="M12 22 L8 14 L12 16 L16 14 Z" fill="#E63946" />
              <path d="M2 12 L10 8 L8 12 L10 16 Z" fill="#F4A261" />
            </g>
            <text x="28" y="19" fill="#071D35" fontSize="14" fontWeight="900" fontFamily="sans-serif">
              GeM
            </text>
            <text x="28" y="26" fill="#475569" fontSize="4.2" fontWeight="700" fontFamily="sans-serif">
              Government e Marketplace
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
