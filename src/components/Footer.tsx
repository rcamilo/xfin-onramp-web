"use client";

import React from "react";
import { Zap, Shield, ExternalLink, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#08163f]/60 pt-12 pb-16 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/5">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-fastpix-glow">
                <Zap className="h-4 w-4 fill-white" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">FastPix</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              A infraestrutura mais rápida do Brasil para conversão instantânea de Pix para USDC na rede Base.
            </p>
          </div>

          {/* Col 2: Produtos */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Redes Suportadas</h4>
            <ul className="space-y-1.5">
              <li><span className="text-slate-300">Base Mainnet (USDC)</span></li>
              <li><span className="text-slate-300">Polygon POS (USDC / BRLA)</span></li>
              <li><span className="text-slate-400">Monad (Em Breve)</span></li>
            </ul>
          </div>

          {/* Col 3: Segurança */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Auditoria & Segurança</h4>
            <ul className="space-y-1.5">
              <li><a href="https://basescan.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Basescan Explorer</a></li>
              <li><span className="text-slate-300">Conciliação Tripla ACID</span></li>
              <li><span className="text-slate-300">Proteção LGPD SHA-256</span></li>
            </ul>
          </div>

          {/* Col 4: Status do Sistema */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Status da Rede</h4>
            <div className="flex items-center gap-2 rounded-lg bg-emerald-950/40 p-2.5 border border-emerald-500/20 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-xs">Todos os sistemas operacionais</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 FastPix · Infraestrutura Financeira On-Chain. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Construído para velocidade e transparência on-chain.
          </p>
        </div>

      </div>
    </footer>
  );
};
