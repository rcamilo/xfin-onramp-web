"use client";

import React, { useState } from "react";
import { WORLD_LAND_PATH, PRECISE_HUBS } from "./worldLandPath";
import { Zap, ShieldCheck, ArrowRight, ExternalLink } from "lucide-react";

interface Hub {
  id: string;
  name: string;
  coords: number[];
  x: number;
  y: number;
  role: string;
  flag: string;
  isPrimary?: boolean;
}

const HUBS: Hub[] = PRECISE_HUBS.map((h) => {
  if (h.id === "sp") {
    return {
      ...h,
      role: "Pix Gateway · Origem BRL",
      flag: "🇧🇷",
      isPrimary: true,
    };
  }
  if (h.id === "ny") {
    return {
      ...h,
      role: "Base USDC · Liquidação Solver",
      flag: "🇺🇸",
      isPrimary: true,
    };
  }
  if (h.id === "ldn") {
    return {
      ...h,
      role: "Cross-Border Liquidity",
      flag: "🇬🇧",
    };
  }
  if (h.id === "fra") {
    return {
      ...h,
      role: "EU Core Hub",
      flag: "🇩🇪",
    };
  }
  if (h.id === "sin") {
    return {
      ...h,
      role: "APAC Routing",
      flag: "🇸🇬",
    };
  }
  return {
    ...h,
    role: "Treasury Node",
    flag: "🇯🇵",
  };
});

export const GlobalFlowMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<Hub | null>(null);

  return (
    <div className="w-full max-w-[620px] mb-6 rounded-2xl border border-ink-200/90 bg-white/95 p-3.5 sm:p-4 shadow-pop relative overflow-hidden backdrop-blur-sm group transition-all duration-300 hover:border-brand/40 hover:shadow-lift">
      {/* Background Decorative Mesh Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl opacity-20 bg-accent-green"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-15 bg-brand"
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-ink-200/70 pb-2.5 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span className="text-[11px] font-bold tracking-tight text-ink-900 uppercase">
            Rede Global de Liquidação XFIN
          </span>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
            Base Mainnet
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-ink-500">
          <span className="text-brand font-bold">⚡ SLA:</span>
          <span className="text-ink-900 font-bold">14.8s</span>
          <span className="text-ink-300 hidden sm:inline">•</span>
          <span className="text-ink-700 hidden sm:inline">6 Hubs On-Chain</span>
        </div>
      </div>

      {/* SVG Canvas with Natural Earth Real Cartography & High-Fidelity Laser Arcs */}
      <div className="relative w-full aspect-[800/340] min-h-[160px] overflow-hidden rounded-xl bg-surface-offwhite/90 border border-ink-200/60 touch-pan-y">
        <svg
          viewBox="0 0 800 340"
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

            {/* Glowing filter for neon laser beams */}
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
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Background Grid Pattern */}
          <rect width="800" height="340" fill="url(#flow-grid-dots)" />

          {/* Real World Natural Earth Continents */}
          <path
            d={WORLD_LAND_PATH}
            fill="#eaf4ee"
            stroke="#b7ddc6"
            strokeWidth="0.8"
            className="transition-colors pointer-events-none"
          />

          {/* Blockchain Connectivity Routes (Curved Bézier Arcs with Real Coordinates) */}
          <g fill="none">
            {/* Route 1: São Paulo (311.3, 230.5) -> Nova York (267.1, 84.9) [PRIMARY ONRAMP] */}
            <path
              id="route-sp-ny"
              d="M 311.3 230.5 Q 260 160 267.1 84.9"
              stroke="#059669"
              strokeWidth="1.5"
              strokeOpacity="0.3"
              strokeDasharray="4 4"
            />
            {/* Animated Laser Beam SP -> NY */}
            <path
              d="M 311.3 230.5 Q 260 160 267.1 84.9"
              stroke="url(#arcPixToNy)"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="blockchain-flow-fast"
              filter="url(#emerald-glow)"
            />

            {/* Route 2: São Paulo (311.3, 230.5) -> Londres (399.8, 60.9) [CROSS-BORDER] */}
            <path
              id="route-sp-ldn"
              d="M 311.3 230.5 Q 380 145 399.8 60.9"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
            {/* Animated Laser Beam SP -> LDN */}
            <path
              d="M 311.3 230.5 Q 380 145 399.8 60.9"
              stroke="url(#arcTransatlantic)"
              strokeWidth="2"
              strokeLinecap="round"
              className="blockchain-flow-medium"
            />

            {/* Route 3: Nova York (267.1, 84.9) -> Londres (399.8, 60.9) [USDC INTER-BANK] */}
            <path
              id="route-ny-ldn"
              d="M 267.1 84.9 Q 330 35 399.8 60.9"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <path
              d="M 267.1 84.9 Q 330 35 399.8 60.9"
              stroke="url(#arcTransatlantic)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="blockchain-flow-fast-reverse"
            />

            {/* Route 4: Londres (399.8, 60.9) -> Frankfurt (414.8, 64.0) */}
            <path
              d="M 399.8 60.9 Q 407 55 414.8 64.0"
              stroke="#00D084"
              strokeWidth="2"
              strokeOpacity="0.8"
            />

            {/* Route 5: Frankfurt (414.8, 64.0) -> Singapura (602.7, 174.1) */}
            <path
              id="route-fra-sin"
              d="M 414.8 64.0 Q 510 95 602.7 174.1"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
            />
            <path
              d="M 414.8 64.0 Q 510 95 602.7 174.1"
              stroke="url(#arcEuroAsia)"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="blockchain-flow-slow"
            />

            {/* Route 6: Singapura (602.7, 174.1) -> Tóquio (656.1, 96.3) */}
            <path
              id="route-sin-tyo"
              d="M 602.7 174.1 Q 640 140 656.1 96.3"
              stroke="#059669"
              strokeWidth="1.2"
              strokeOpacity="0.25"
              strokeDasharray="3 3"
            />
            <path
              d="M 602.7 174.1 Q 640 140 656.1 96.3"
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
                      r="13"
                      fill="none"
                      stroke="#00D084"
                      strokeWidth="1"
                      className="animate-ping opacity-60 origin-center pointer-events-none"
                      style={{
                        transformOrigin: `${hub.x}px ${hub.y}px`,
                        animationDuration: hub.id === "sp" ? "2.2s" : "3s",
                      }}
                    />
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r="7.5"
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
                  <g
                    transform={`translate(${hub.x + 8}, ${hub.y - 6})`}
                    className="pointer-events-none"
                  >
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
                      x="7"
                      y="2"
                      fill="#00D084"
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      SP · Pix Gateway
                    </text>
                  </g>
                )}

                {hub.id === "ny" && (
                  <g
                    transform={`translate(${hub.x - 96}, ${hub.y - 6})`}
                    className="pointer-events-none"
                  >
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
                      x="7"
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
                    {hub.name}
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
                {activeHub.flag} {activeHub.name}: {activeHub.role}
              </strong>
            ) : (
              <>
                Fluxo On-Chain: <strong className="text-ink-900 font-semibold">Pix BRL (BACEN)</strong> → <strong className="text-brand font-semibold">Base USDC</strong>
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
