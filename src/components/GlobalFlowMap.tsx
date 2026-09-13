"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { ShieldCheck, Zap, ArrowRight, ExternalLink } from "lucide-react";

interface Hub {
  id: string;
  city: string;
  country: string;
  role: string;
  flag: string;
  lat: number;
  lng: number;
  isPrimary?: boolean;
}

const HUBS: Hub[] = [
  {
    id: "sp",
    city: "São Paulo",
    country: "Brasil",
    role: "Pix Gateway · Origem BRL",
    flag: "🇧🇷",
    lat: -23.5505,
    lng: -46.6333,
    isPrimary: true,
  },
  {
    id: "ny",
    city: "Nova York",
    country: "EUA",
    role: "Base USDC · Settlement",
    flag: "🇺🇸",
    lat: 40.7128,
    lng: -74.006,
    isPrimary: true,
  },
  {
    id: "ldn",
    city: "Londres",
    country: "Reino Unido",
    role: "Cross-Border Liquidity",
    flag: "🇬🇧",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: "fra",
    city: "Frankfurt",
    country: "Alemanha",
    role: "EU Node",
    flag: "🇩🇪",
    lat: 50.1109,
    lng: 8.6821,
  },
  {
    id: "sin",
    city: "Singapura",
    country: "Singapura",
    role: "APAC Routing",
    flag: "🇸🇬",
    lat: 1.3521,
    lng: 103.8198,
  },
  {
    id: "tyo",
    city: "Tóquio",
    country: "Japão",
    role: "Treasury Node",
    flag: "🇯🇵",
    lat: 35.6762,
    lng: 139.6503,
  },
];

export const GlobalFlowMap: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0.5;
    let width = 0;
    let animationFrameId: number;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: (width || 260) * 2,
      height: (width || 260) * 2,
      phi: 0.5,
      theta: 0.2,
      dark: 0,
      diffuse: 1.4,
      mapSamples: 16000,
      mapBrightness: 5.5,
      baseColor: [0.93, 0.97, 0.94],
      markerColor: [0, 208 / 255, 132 / 255],
      glowColor: [0.88, 0.97, 0.92],
      markers: HUBS.map((hub) => ({
        location: [hub.lat, hub.lng],
        size: hub.isPrimary ? 0.08 : 0.045,
        color: hub.isPrimary ? [0, 0.82, 0.52] : [0.02, 0.58, 0.41],
      })),
      arcs: [
        // São Paulo -> Nova York (Pix -> Base USDC On-Ramp)
        {
          from: [-23.5505, -46.6333],
          to: [40.7128, -74.006],
          color: [0, 0.82, 0.52],
        },
        // Nova York -> Londres
        {
          from: [40.7128, -74.006],
          to: [51.5074, -0.1278],
          color: [0.02, 0.6, 0.4],
        },
        // São Paulo -> Londres
        {
          from: [-23.5505, -46.6333],
          to: [51.5074, -0.1278],
          color: [0.02, 0.6, 0.4],
        },
        // Londres -> Frankfurt
        {
          from: [51.5074, -0.1278],
          to: [50.1109, 8.6821],
          color: [0, 0.82, 0.52],
        },
        // Frankfurt -> Singapura
        {
          from: [50.1109, 8.6821],
          to: [1.3521, 103.8198],
          color: [0.02, 0.6, 0.4],
        },
        // Singapura -> Tóquio
        {
          from: [1.3521, 103.8198],
          to: [35.6762, 139.6503],
          color: [0, 0.82, 0.52],
        },
      ],
      arcColor: [0, 0.82, 0.52],
      arcWidth: 1.6,
      arcHeight: 0.35,
    });

    const renderLoop = () => {
      if (!pointerInteracting.current) {
        phi += 0.0035;
      }
      globe.update({
        phi: phi + pointerInteractionMovement.current,
        width: (width || 260) * 2,
        height: (width || 260) * 2,
      });
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full max-w-[620px] mb-6 rounded-3xl border border-ink-200/90 bg-white/95 p-3.5 sm:p-5 shadow-lift relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-brand/40">
      {/* Background Emerald Mesh Halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 208, 132, 0.35) 0%, rgba(5, 150, 105, 0.08) 60%, transparent 70%)",
        }}
      />

      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-2 border-b border-ink-200/70 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
          </span>
          <span className="text-[11.5px] font-extrabold tracking-tight text-ink-900 uppercase">
            Rede Global de Liquidação XFIN
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
            Base Mainnet
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-ink-500">
          <span className="inline-flex items-center gap-1 font-bold text-ink-900 bg-surface-offwhite border border-ink-200 px-2 py-0.5 rounded-full">
            <Zap className="h-3 w-3 text-amber-500" />
            14.8s SLA
          </span>
        </div>
      </div>

      {/* Grid: 3D Interactive Globe + Corridor Info */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Left Column: 3D Interactive Globe Canvas */}
        <div className="sm:col-span-6 relative flex items-center justify-center">
          <div className="relative w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing">
            {/* Atmospheric Subtle Border */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-brand/25 shadow-[0_0_24px_rgba(0,208,132,0.18)]" />

            <canvas
              ref={canvasRef}
              className="w-full h-full contain-strict"
              onPointerDown={(e) => {
                pointerInteracting.current =
                  e.clientX - pointerInteractionMovement.current;
                if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = "grab";
              }}
              onPointerOut={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = "grab";
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta * 0.005;
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta = e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta * 0.005;
                }
              }}
            />

            {/* Micro Drag Hint */}
            <div className="pointer-events-none absolute bottom-1.5 inset-x-0 flex justify-center">
              <span className="text-[9px] font-mono text-ink-500/80 bg-white/85 px-2 py-0.5 rounded-full backdrop-blur-sm border border-ink-200/60 shadow-xs">
                Arraste o globo 3D ↺
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Key Corridor & Active Hubs */}
        <div className="sm:col-span-6 flex flex-col justify-center space-y-2.5">
          {/* Corridor Box: SP -> NY */}
          <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/[0.04] to-surface-offwhite p-3 shadow-xs">
            <div className="flex items-center justify-between text-[11px] font-mono font-bold text-ink-900">
              <span className="inline-flex items-center gap-1.5 text-brand">
                <span className="w-2 h-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
                ROTA EM TEMPO REAL
              </span>
              <span className="text-[10px] text-ink-500 font-normal">SLA 15s</span>
            </div>

            <div className="mt-2 flex items-center justify-between gap-1 text-xs">
              <div className="flex flex-col">
                <span className="font-bold text-ink-900 flex items-center gap-1 text-[11.5px]">
                  🇧🇷 São Paulo
                </span>
                <span className="text-[10px] text-ink-500 font-mono">Pix BRL In</span>
              </div>

              <div className="flex flex-col items-center px-1">
                <span className="text-[9px] font-mono text-brand font-bold">On-Chain</span>
                <span className="text-brand font-black text-sm">➔</span>
              </div>

              <div className="flex flex-col text-right">
                <span className="font-bold text-ink-900 flex items-center justify-end gap-1 text-[11.5px]">
                  🇺🇸 Nova York
                </span>
                <span className="text-[10px] text-brand font-mono font-semibold">Base USDC</span>
              </div>
            </div>
          </div>

          {/* Connected Hubs Chips */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-ink-500">
              Capitais Conectadas na Malha:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {HUBS.slice(2).map((hub) => (
                <div
                  key={hub.id}
                  className="flex items-center gap-1.5 rounded-lg border border-ink-200/80 bg-surface-offwhite/80 px-2 py-1 text-[11px] text-ink-700 transition hover:border-brand/40"
                >
                  <span className="text-xs">{hub.flag}</span>
                  <span className="font-semibold text-ink-900 text-[10.5px] truncate">
                    {hub.city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info Ribbon */}
      <div className="mt-3.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-700 pt-2.5 border-t border-ink-200/60">
        <div className="flex items-center gap-1.5 font-medium truncate">
          <ShieldCheck className="h-3.5 w-3.5 text-brand shrink-0" />
          <span className="truncate">
            Liquidação instantânea via <strong className="text-brand font-bold">Smart Contract</strong> na rede Base.
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono shrink-0">
          <span className="text-ink-500">Zero Custódia</span>
          <span className="text-ink-300">•</span>
          <span className="text-brand font-bold">Auditável On-Chain</span>
        </div>
      </div>
    </div>
  );
};
