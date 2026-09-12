"use client";

import React from "react";
import { ConverterWidget } from "./ConverterWidget";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles, ExternalLink } from "lucide-react";

interface HeroProps {
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDashboard }) => {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      {/* Subtle Luminous Radial Gradients like fastpix.vc */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -z-10 top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(ellipse, rgba(0, 99, 229, 0.08) 0%, rgba(0, 192, 118, 0.04) 40%, transparent 70%)" }}
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -z-10 bottom-0 right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, rgba(0, 99, 229, 0.07) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* FastPix Eyebrow */}
            <span className="eyebrow">
              <span className="w-2 h-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
              RÁPIDO DE VERDADE · 15 SEGUNDOS
            </span>

            {/* Display Headline with FastPix Italic Typography */}
            <h1 className="display-xl mt-6 max-w-[15ch]">
              Pix para USDC <span className="text-brand italic font-black tracking-[-0.05em]">(BASE)</span> na hora
            </h1>

            {/* Subheadline */}
            <p className="body-lg mt-6 max-w-[46ch]">
              Faça transações sem burocracia. Pague via Pix no seu banco e receba USDC direto na sua Smart Wallet da rede Base com liquidação instantânea e zero custódia.
            </p>

            {/* Quick Flow Selection Pills (fastpix.vc style) */}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-surface-offwhite/80 p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200 cursor-pointer">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Pix <span className="text-brand">→</span> USDC
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Base Mainnet instantânea.
                </span>
                <span className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                  ✓
                </span>
              </div>

              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-white p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200 cursor-pointer">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Pix <span className="text-purple-600">→</span> USDT
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Polygon PoS com taxa zero.
                </span>
              </div>

              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-white p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200 cursor-pointer">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Smart Wallet
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Custódia 100% própria.
                </span>
              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-8 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                Pague em 3 etapas
              </span>
              <span className="w-px h-3.5 bg-ink-200"></span>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Auditoria on-chain no Basescan
              </span>
              <span className="w-px h-3.5 bg-ink-200"></span>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <Zap className="h-4 w-4 text-amber-500" />
                SLA médio de 14.8s
              </span>
            </div>

            {/* Secondary Link to Dashboard */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-cobalt transition"
              >
                Acessar Extrato & Minha Carteira →
              </button>
            </div>
          </div>

          {/* Right Column: Converter Widget + Real Receipt */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <ConverterWidget />

            {/* FastPix Live Receipt Card Proof */}
            <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white border border-ink-200 shadow-lift transition-all hover:border-brand/30">
              <div className="fastpix-receipt-header px-5 py-4">
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, rgba(0, 192, 118, 0.8) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-accent-green">
                    ÚLTIMA LIQUIDAÇÃO CONFIRMADA
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-brand/20 text-blue-200 border border-brand/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green glow-emerald"></span>
                    On-Chain
                  </span>
                </div>
                <p className="mono-num mt-2 text-xl font-bold tracking-tight text-white">
                  R$ 50,00 → 9.66 USDC
                </p>
              </div>

              <div className="p-4 sm:p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-ink-500 font-medium">Smart Wallet (Base):</span>
                  <span className="mono-num font-semibold text-ink-900 bg-ink-100 px-2 py-0.5 rounded">
                    0x3769...589D
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-500 font-medium">Rede & Protocolo:</span>
                  <span className="font-semibold text-brand">Base Mainnet · Pods Solver</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-ink-200">
                  <span className="text-ink-500 font-medium">Comprovante:</span>
                  <a
                    href="https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-brand hover:underline"
                  >
                    0xbb0d...2a75
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
