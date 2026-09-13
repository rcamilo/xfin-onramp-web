"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-ink-200 bg-white pt-14 pb-16 text-ink-500 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-ink-200">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-[-0.03em] text-ink-900">
                xfin<span className="text-brand">.financial</span>
              </span>
            </div>
            <p className="text-ink-500 leading-relaxed text-xs max-w-xs">
              Infraestrutura corporativa para liquidação cambial instantânea de Pix para USDC na rede Base.
            </p>
            <span className="inline-block text-[9px] font-bold uppercase tracking-[0.16em] text-ink-500">
              Institutional On-Ramp · Base Mainnet
            </span>
          </div>

          {/* Col 2: Redes Suportadas */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900">Redes Suportadas</h4>
            <ul className="space-y-2 text-ink-700">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                Base Mainnet (USDC)
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                Polygon PoS (USDT)
              </li>
              <li className="text-ink-500">Solana & Monad (Em Breve)</li>
            </ul>
          </div>

          {/* Col 3: Auditoria & Segurança */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900">Auditoria & Segurança</h4>
            <ul className="space-y-2 text-ink-700">
              <li>
                <a 
                  href="https://basescan.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1 hover:text-brand transition"
                >
                  Basescan Explorer
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>Ledger de Partida Dobrada (Zero-Sum)</li>
              <li>Privacidade LGPD com Salt SHA-256</li>
            </ul>
          </div>

          {/* Col 4: Status Operacional */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900">Status Operacional</h4>
            <div className="flex items-center gap-2.5 rounded-2xl bg-surface-offwhite p-3 border border-ink-200 text-ink-700 shadow-pop">
              <span className="h-2 w-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
              <span className="font-semibold text-xs">Sistemas 100% Operacionais</span>
            </div>
            <p className="text-[11px] text-ink-500">
              Tempo médio de liquidação: <strong className="mono-num text-ink-900 font-bold">14.8s</strong>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-500">
          <p>© 2026 XFIN · Financial Infrastructure. Todos os direitos reservados.</p>
          <p className="font-medium text-ink-700">
            Arquitetura institucional de alta precisão.
          </p>
        </div>

      </div>
    </footer>
  );
};
