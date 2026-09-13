"use client";

import React from "react";
import { ConverterWidget } from "./ConverterWidget";
import { GlobalFlowMap } from "./GlobalFlowMap";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, ExternalLink } from "lucide-react";

interface HeroProps {
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDashboard }) => {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-white">
      {/* Subtle Luminous Emerald Radial Gradients */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -z-10 top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[650px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(ellipse, rgba(5, 150, 105, 0.09) 0%, rgba(0, 208, 132, 0.04) 40%, transparent 70%)" }}
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -z-10 bottom-0 right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-35"
        style={{ background: "radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Headlines & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Minimalist World Map with Blockchain Settlement Traffic */}
            <GlobalFlowMap />

            {/* XFIN Eyebrow */}
            <span className="eyebrow">
              <span className="w-2 h-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
              LIQUIDAÇÃO CAMBIAL INSTANTÂNEA · REDE BASE
            </span>

            {/* Display Headline with Tech Typography */}
            <h1 className="display-xl mt-6 max-w-[15ch] text-ink-900 font-extrabold">
              Conecte o Pix a <span className="text-brand font-black tracking-[-0.04em]">USDC</span> com entrega on-chain em 15s.
            </h1>

            {/* Subheadline */}
            <p className="body-lg mt-6 max-w-[46ch] text-ink-700">
              A infraestrutura de On-Ramp de alta performance para a nova economia digital. Converta reais direto para dólares na rede <strong className="text-ink-900 font-bold">Base</strong> com custódia própria, taxa transparente e integridade contábil auditável.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-surface-offwhite/80 p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Pix Direto <span className="text-brand">→</span> USDC
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Base Mainnet instantânea.
                </span>
                <span className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-brand text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                  ✓
                </span>
              </div>

              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-white p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Zero Custódia
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Tokens na sua Smart Account.
                </span>
              </div>

              <div className="group relative flex flex-col items-start rounded-2xl border border-ink-200 bg-white p-4 shadow-pop hover:shadow-lift hover:border-brand/40 transition-all duration-200">
                <span className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-ink-900">
                  Double-Entry
                </span>
                <span className="text-[11px] mt-1 text-ink-500">
                  Ledger formal Zero-Sum.
                </span>
              </div>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-8 hidden sm:flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <span className="w-2 h-2 rounded-full bg-accent-green"></span>
                Operação em 4 etapas diretas
              </span>
              <span className="w-px h-3.5 bg-ink-200"></span>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Auditoria pública no Basescan
              </span>
              <span className="w-px h-3.5 bg-ink-200"></span>
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-700">
                <Zap className="h-4 w-4 text-amber-500" />
                SLA médio de 14.8s
              </span>
            </div>

            {/* Link to Dashboard */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenDashboard}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand hover:text-brand-hover transition"
              >
                Consultar Extrato & Saldos On-Chain →
              </button>
            </div>
          </div>

          {/* Right Column: Converter Widget + Real On-chain Receipt */}
          <div className="lg:col-span-5 flex flex-col items-center gap-6">
            <ConverterWidget />

            {/* XFIN Live Receipt Card Proof */}
            <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white border border-ink-200 shadow-lift transition-all hover:border-brand/30">
              <div className="xfin-receipt-header px-5 py-4">
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40"
                  style={{ background: "radial-gradient(circle, rgba(0, 208, 132, 0.8) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-accent-green font-mono">
                    COMPROVANTE ON-CHAIN REAL
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-brand/20 text-emerald-300 border border-brand/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green glow-emerald"></span>
                    Base Mainnet
                  </span>
                </div>
                <p className="mono-num mt-2 text-xl font-bold tracking-tight text-white">
                  R$ 55,00 → 10.62 USDC
                </p>
              </div>

              <div className="p-4 sm:p-5 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-ink-500 font-medium">Smart Wallet de Destino:</span>
                  <span className="mono-num font-bold text-ink-900 bg-ink-100 px-2 py-0.5 rounded">
                    0x3769...589D
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-500 font-medium">Protocolo de Liquidação:</span>
                  <span className="font-semibold text-brand">Pods Finance Solver · Base</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-ink-200">
                  <span className="text-ink-500 font-medium">Tx Hash Auditada:</span>
                  <a
                    href="https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-brand hover:underline"
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
