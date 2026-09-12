"use client";

import React from "react";
import { ConverterWidget } from "./ConverterWidget";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Lock } from "lucide-react";

interface HeroProps {
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDashboard }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Decorative Radial Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[130px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Headlines & Value Propositions */}
          <div className="lg:col-span-7">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-pill bg-blue-950/80 px-3.5 py-1.5 text-xs font-semibold text-blue-300 border border-blue-500/25 shadow-fastpix-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              XFIN On-Ramp · Pix ➔ Stablecoins em Tempo Real
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Do seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300">Pix para USDC</span> em 15 segundos.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base text-slate-300 sm:text-lg max-w-2xl leading-relaxed">
              A infraestrutura de On-Ramp de alta performance para o Brasil. Converta Reais diretamente para Dólares Digitais na rede <strong className="text-white">Base</strong> com custódia própria, taxa transparente e comprovante auditável na blockchain.
            </p>

            {/* Proof Points & Backend Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Zero Custódia (Entrega direta na Smart Wallet)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Base Mainnet (Taxas de gas de frações de centavos)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Ledger de Partida Dobrada (Invariante Zero-Sum)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Comprovante oficial Basescan enviado no WhatsApp</span>
              </div>
            </div>

            {/* Secondary Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDashboard}
                className="flex items-center gap-2 rounded-pill bg-white/10 px-6 py-3 text-sm font-semibold text-white border border-white/10 hover:bg-white/15 transition shadow-fastpix-1 active:scale-95"
              >
                Acessar Área do Cliente
                <ArrowRight className="h-4 w-4 text-blue-400" />
              </button>
              <a
                href="#como-funciona"
                className="text-sm font-medium text-slate-400 hover:text-white transition px-3 py-2"
              >
                Conheça nossa arquitetura →
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Converter */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ConverterWidget />
          </div>

        </div>
      </div>
    </section>
  );
};
