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

        {/* Regulatory & Institutional Compliance Section (Lei 14.478/2022 & BACEN) */}
        <div className="py-8 border-b border-ink-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-offwhite px-3 py-1 text-[11px] font-bold text-ink-700 border border-ink-200">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-emerald" />
              Marco Legal dos Criptoativos (Lei nº 14.478/2022)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-offwhite px-3 py-1 text-[11px] font-bold text-ink-700 border border-ink-200">
              <Zap className="h-3.5 w-3.5 text-brand" />
              SPI / BACEN (Resolução BCB nº 1/2020)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-offwhite px-3 py-1 text-[11px] font-bold text-ink-700 border border-ink-200">
              🔒 Arquitetura Não-Custodial (Self-Custody)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-offwhite px-3 py-1 text-[11px] font-bold text-ink-700 border border-ink-200">
              🛡️ PLD/CFT & Conformidade LGPD
            </span>
          </div>

          <div className="rounded-2xl bg-surface-offwhite/80 p-4 border border-ink-200/70 text-[11px] leading-relaxed text-ink-500 space-y-2">
            <p>
              <strong className="text-ink-700">Aviso Regulatório & Conformidade Institucional:</strong> A <strong>XFIN</strong> atua como provedora de infraestrutura de tecnologia de software para liquidação on-chain em redes públicas. As operações de transferência, liquidação fiduciária e emissão de cobranças em moeda nacional (BRL) via Pix são processadas por meio de instituições parceiras homologadas como participantes do Sistema de Pagamentos Instantâneos (SPI) perante o Banco Central do Brasil (BACEN), em estrito cumprimento à Resolução BCB nº 1/2020 e regulamentações complementares. Beneficiário e emissor do Pix no arranjo de pagamentos: <strong>Pods Finance e Tecnologia S.A.</strong>
            </p>
            <p>
              As transações em ativos digitais observam integralmente as diretrizes da <strong>Lei Federal nº 14.478/2022</strong> (Marco Legal dos Criptoativos) e Decreto nº 11.563/2023, bem como protocolos de Prevenção à Lavagem de Dinheiro e Financiamento do Terrorismo (PLD/CFT) e conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018). Os ativos virtuais entregues são destinados diretamente a carteiras de autocustódia (Smart Accounts ou EOAs) de titularidade e controle exclusivos dos clientes, sem retenção de saldo fiduciário ou custódia de chaves privadas pela XFIN.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-ink-500">
          <div className="space-y-1 text-center md:text-left">
            <p>© 2026 XFIN Financial Technologies Inc. · XFIN Brasil Tecnologia e Serviços Financeiros Ltda.</p>
            <p className="text-[10.5px] text-ink-400">
              Instituição parceira do ecossistema Pix: Pods Finance e Tecnologia S.A. (Homologada no SPI / BACEN)
            </p>
          </div>
          <div className="flex items-center gap-4 font-medium text-ink-600">
            <a href="#termos" className="hover:text-brand transition">Termos de Uso</a>
            <span>·</span>
            <a href="#privacidade" className="hover:text-brand transition">Privacidade & LGPD</a>
            <span>·</span>
            <a href="#compliance" className="hover:text-brand transition">Compliance BACEN</a>
            <span>·</span>
            <a href="https://basescan.org" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition flex items-center gap-1">
              Base Explorer <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
