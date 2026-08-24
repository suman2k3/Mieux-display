import React from "react";
import makeInIndiaImg from "@/assets/make-in-india-logo.png";

export function HeaderBadges({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 border-l ${dark ? "border-white/15" : "border-slate-200"} pl-2.5 sm:pl-3.5 ml-2 sm:ml-3`}>
      {/* 1. We are Make in India */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className={`text-[10px] sm:text-[11px] font-bold ${dark ? "text-slate-300" : "text-slate-500"} whitespace-nowrap hidden xl:inline`}>
          We are
        </span>
        <div className="flex items-center px-2 sm:px-2.5 py-0.5 rounded-lg bg-white shadow-sm border border-slate-200 transition-all hover:scale-105">
          <img
            src={makeInIndiaImg}
            alt="Make in India"
            className="h-7 sm:h-[38px] w-auto max-w-[120px] sm:max-w-[175px] object-contain"
          />
        </div>
      </div>

      {/* 2. Available on GeM */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className={`text-[10px] sm:text-[11px] font-bold ${dark ? "text-slate-300" : "text-slate-500"} whitespace-nowrap hidden xl:inline`}>
          Available on
        </span>
        <div className="flex items-center px-2 sm:px-2.5 py-0.5 rounded-lg bg-white shadow-sm border border-slate-200 transition-all hover:scale-105">
          <svg viewBox="0 0 115 32" className="h-7 sm:h-[38px] w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
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
