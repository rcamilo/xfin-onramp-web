"use client";

import React, { useState } from "react";

interface Hub {
  id: string;
  city: string;
  country: string;
  role: string;
  flag: string;
  x: number;
  y: number;
  isPrimary?: boolean;
}

const HUBS: Hub[] = [
  {
    id: "sp",
    city: "São Paulo",
    country: "Brasil",
    role: "Pix Gateway (Origem)",
    flag: "🇧🇷",
    x: 290,
    y: 245,
    isPrimary: true,
  },
  {
    id: "ny",
    city: "Nova York",
    country: "EUA",
    role: "USDC Base Hub",
    flag: "🇺🇸",
    x: 245,
    y: 110,
    isPrimary: true,
  },
  {
    id: "ldn",
    city: "Londres",
    country: "Reino Unido",
    role: "Cross-Border Liquidity",
    flag: "🇬🇧",
    x: 412,
    y: 95,
  },
  {
    id: "fra",
    city: "Frankfurt",
    country: "Alemanha",
    role: "EU Financial Core",
    flag: "🇩🇪",
    x: 438,
    y: 102,
  },
  {
    id: "sin",
    city: "Singapura",
    country: "Singapura",
    role: "APAC Routing",
    flag: "🇸🇬",
    x: 635,
    y: 215,
  },
  {
    id: "tyo",
    city: "Tóquio",
    country: "Japão",
    role: "Treasury Node",
    flag: "🇯🇵",
    x: 710,
    y: 118,
  },
];

export const GlobalFlowMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<Hub | null>(null);

  return (
    <div className="w-full max-w-[620px] mb-6 rounded-2xl border border-ink-200/90 bg-white/95 p-3 sm:p-4 shadow-pop relative overflow-hidden backdrop-blur-sm group transition-all duration-300 hover:border-brand/40 hover:shadow-lift">
      {/* Background Decorative Mesh Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-accent-green"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-15 bg-brand"
      />

      {/* Header Bar - Fully Responsive for Mobile & Desktop */}
      <div className="flex items-center justify-between gap-2 border-b border-ink-200/70 pb-2.5 mb-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span className="text-[11px] font-bold tracking-tight text-ink-900 uppercase">
            Rede Global XFIN
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
            Base L2
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-ink-500">
          <span className="text-brand font-bold">⚡ SLA:</span>
          <span className="text-ink-900 font-bold">14.8s</span>
          <span className="text-ink-300 hidden sm:inline">•</span>
          <span className="text-ink-700 hidden sm:inline">6 Hubs On-Chain</span>
        </div>
      </div>

      {/* SVG Canvas with Clean Minimalist Continents & Flow Arcs */}
      <div className="relative w-full aspect-[800/320] min-h-[150px] overflow-hidden rounded-xl bg-surface-offwhite border border-ink-200/60 touch-pan-y">
        <svg
          viewBox="0 0 800 320"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Tech Dots Grid */}
            <pattern
              id="flow-grid-dots"
              x="0"
              y="0"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="0.75" fill="#059669" fillOpacity="0.08" />
            </pattern>

            {/* Glowing filter */}
            <filter id="emerald-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient for Primary Pix -> USDC Arc */}
            <linearGradient id="arcPixToNy" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D084" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.95" />
            </linearGradient>

            {/* Gradient for Transatlantic Arc */}
            <linearGradient id="arcTransatlantic" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#00D084" stopOpacity="0.95" />
            </linearGradient>

            {/* Gradient for Euro-Asian Arc */}
            <linearGradient id="arcEuroAsia" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background Grid Pattern */}
          <rect width="800" height="320" fill="url(#flow-grid-dots)" />

          {/* Minimalist World Continents Geometry - Light, Clean and Sophisticated */}
          <g fill="#edf6f1" stroke="#c8e4d4" strokeWidth="1" pointerEvents="none">
            {/* North America */}
            <path d="M 120 50 Q 180 40 250 48 Q 280 70 270 100 Q 285 115 255 135 Q 235 145 220 170 Q 200 175 190 150 Q 150 145 130 110 Q 110 80 120 50 Z" />
            {/* Central America link */}
            <path d="M 220 170 Q 230 195 245 205 Q 235 210 225 190 Z" />
            {/* South America */}
            <path d="M 250 205 Q 285 210 320 230 Q 330 260 305 295 Q 285 315 270 310 Q 255 280 255 240 Q 240 220 250 205 Z" />
            {/* Europe */}
            <path d="M 390 60 Q 440 50 470 65 Q 480 90 460 115 Q 430 120 400 115 Q 385 95 390 60 Z" />
            {/* Africa */}
            <path d="M 395 130 Q 450 125 470 155 Q 485 200 460 250 Q 430 275 410 250 Q 385 200 395 130 Z" />
            {/* Asia */}
            <path d="M 480 60 Q 560 40 680 50 Q 740 75 750 115 Q 730 145 680 160 Q 640 190 610 210 Q 570 180 540 170 Q 490 140 480 60 Z" />
            {/* Japan / East Islands */}
            <path d="M 725 105 Q 735 115 725 135 Q 715 125 725 105 Z" />
            {/* Southeast Asia Islands */}
            <path d="M 640 230 Q 665 240 650 260 Q 630 250 640 230 Z" />
            {/* Oceania / Australia */}
            <path d="M 660 255 Q 730 245 745 275 Q 730 305 680 300 Q 650 280 660 255 Z" />
          </g>

          {/* Blockchain Connectivity Routes (Curved Bézier Arcs) */}
          <g fill="none">
            {/* Route 1: São Paulo (290, 245) -> Nova York (245, 110) [PRIMARY ONRAMP] */}
            <path
              id="route-sp-ny"
              d="M 290 245 Q 230 180 245 110"
              stroke="#059669"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
            />
            {/* Animated Laser Beam SP -> NY */}
            <path
              d="M 290 245 Q 230 180 245 110"
              stroke="url(#arcPixToNy)"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="blockchain-flow-fast"
              filter="url(#emerald-glow)"
            />

            {/* Route 2: São Paulo (290, 245) -> Londres (412, 95) [CROSS-BORDER] */}
            <path
              id="route-sp-ldn"
              d="M 290 245 Q 360 160 412 95"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
            {/* Animated Laser Beam SP -> LDN */}
            <path
              d="M 290 245 Q 360 160 412 95"
              stroke="url(#arcTransatlantic)"
              strokeWidth="2"
              strokeLinecap="round"
              className="blockchain-flow-medium"
            />

            {/* Route 3: Nova York (245, 110) -> Londres (412, 95) [USDC INTER-BANK] */}
            <path
              id="route-ny-ldn"
              d="M 245 110 Q 330 65 412 95"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <path
              d="M 245 110 Q 330 65 412 95"
              stroke="url(#arcTransatlantic)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="blockchain-flow-fast-reverse"
            />

            {/* Route 4: Londres (412, 95) -> Frankfurt (438, 102) */}
            <path
              d="M 412 95 Q 425 90 438 102"
              stroke="#00D084"
              strokeWidth="2"
              strokeOpacity="0.7"
            />

            {/* Route 5: Frankfurt (438, 102) -> Singapura (635, 215) */}
            <path
              id="route-fra-sin"
              d="M 438 102 Q 545 130 635 215"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
            <path
              d="M 438 102 Q 545 130 635 215"
              stroke="url(#arcEuroAsia)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="blockchain-flow-slow"
            />

            {/* Route 6: Singapura (635, 215) -> Tóquio (710, 118) */}
            <path
              id="route-sin-tyo"
              d="M 635 215 Q 685 170 710 118"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <path
              d="M 635 215 Q 685 170 710 118"
              stroke="url(#arcEuroAsia)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="blockchain-flow-medium"
            />
          </g>

          {/* Hub Nodes on the Map */}
          {HUBS.map((hub) => {
            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setActiveHub(hub)}
                onMouseLeave={() => setActiveHub(null)}
                onClick={() => setActiveHub(hub)}
              >
                {/* Ping Radar for Primary Gateways (São Paulo & Nova York) */}
                {hub.isPrimary && (
                  <>
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="12"
                      fill="none"
                      stroke="#00D084"
                      strokeWidth="1"
                      className="animate-ping opacity-60 origin-center pointer-events-none"
                      style={{ transformOrigin: `${hub.x}px ${hub.y}px`, animationDuration: hub.id === "sp" ? "2.2s" : "3s" }}
                    />
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="7"
                      fill="none"
                      stroke="#059669"
                      strokeWidth="1.2"
                      className="opacity-40 pointer-events-none"
                    />
                  </>
                )}

                {/* Hub Solid Dot */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r={hub.isPrimary ? 5 : 3.5}
                  fill={hub.isPrimary ? "#00D084" : "#059669"}
                  stroke="#ffffff"
                  strokeWidth={hub.isPrimary ? 1.5 : 1}
                  filter={hub.isPrimary ? "url(#emerald-glow)" : undefined}
                />

                {/* Badges for Main Hubs with Clean Padding */}
                {hub.id === "sp" && (
                  <g transform={`translate(${hub.x + 8}, ${hub.y - 4})`} className="pointer-events-none">
                    <rect
                      x="0"
                      y="-12"
                      width="88"
                      height="20"
                      rx="6"
                      fill="#022c22"
                      className="shadow-sm"
                    />
                    <text
                      x="6"
                      y="2"
                      fill="#00D084"
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      SP · Pix In
                    </text>
                  </g>
                )}

                {hub.id === "ny" && (
                  <g transform={`translate(${hub.x - 96}, ${hub.y - 4})`} className="pointer-events-none">
                    <rect
                      x="0"
                      y="-12"
                      width="92"
                      height="20"
                      rx="6"
                      fill="#022c22"
                      className="shadow-sm"
                    />
                    <text
                      x="6"
                      y="2"
                      fill="#34D399"
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      NY · Base USDC
                    </text>
                  </g>
                )}

                {/* Secondary Hub City Name Labels */}
                {!hub.isPrimary && (
                  <text
                    x={hub.x + 6}
                    y={hub.y + 3}
                    fill="#1c382e"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    className="opacity-75 hover:opacity-100 transition-opacity select-none pointer-events-none"
                  >
                    {hub.city}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer Info Ribbon - 100% Mobile Fluid and Clean */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 text-[11px] text-ink-700 pt-2 border-t border-ink-200/60">
        <div className="flex items-center gap-1.5 font-medium truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green shrink-0"></span>
          <span className="truncate">
            {activeHub ? (
              <strong className="text-brand font-bold">
                {activeHub.flag} {activeHub.city}: {activeHub.role}
              </strong>
            ) : (
              <>
                Fluxo On-Chain: <strong className="text-ink-900 font-semibold">Pix BRL</strong> → <strong className="text-brand font-semibold">Base USDC</strong>
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] shrink-0">
          <span className="bg-brand/10 text-brand border border-brand/20 font-bold px-2 py-0.5 rounded-full">
            Zero Slippage
          </span>
          <span className="bg-ink-100 text-ink-700 font-semibold px-2 py-0.5 rounded-full">
            15s Finality
          </span>
        </div>
      </div>
    </div>
  );
};
