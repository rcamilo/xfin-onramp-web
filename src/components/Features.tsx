"use client";

import React from "react";
import { Zap, Scale, Lock, MessageSquareCode, ArrowUpRight, ShieldCheck, Check, QrCode } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <div>
      {/* 1. How it works (Como Opera) - Crisp Light Section with Green Touches */}
      <section id="como-opera" className="relative py-20 lg:py-28 bg-surface-offwhite border-t border-ink-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="max-w-2xl mb-14">
            <span className="eyebrow">
              FLUXO OPERACIONAL EM 4 ETAPAS
            </span>
            <h2 className="display-lg mt-4 text-ink-900">
              Como a infraestrutura XFIN opera
            </h2>
            <p className="body-lg mt-4 text-ink-700">
              Elimine intermediários e lentidão bancária. Uma ponte direta e segura entre sua conta corrente no Brasil e seu saldo em dólares digitais on-chain.
            </p>
          </header>

          {/* 4 Cards Grid with Rich Visual Previews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-emerald-50/40 to-green-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    ETAPA 01
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    1
                  </span>
                </div>
                
                {/* Visual Preview: Network & Asset */}
                <div className="w-full rounded-2xl bg-white p-3 border border-ink-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand text-white flex items-center justify-center text-xs font-bold">
                      B
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">REDE</p>
                      <p className="text-xs font-bold text-ink-900 leading-tight">Base Mainnet</p>
                    </div>
                  </div>
                  <span className="w-5 h-5 rounded-full bg-accent-mint text-accent-emerald flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="display-md text-ink-900">
                    Cotação & Ativo
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Escolha Base USDC ou Polygon USDT. Simule a paridade cambial em reais com transparência e sem taxas ocultas.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 2 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-teal-50/40 to-emerald-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    ETAPA 02
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    2
                  </span>
                </div>
                
                {/* Visual Preview: EVM Address */}
                <div className="w-full rounded-2xl bg-white p-3 border border-ink-200 shadow-sm">
                  <span className="text-[9px] font-bold text-ink-500 uppercase tracking-wider">ENDEREÇO EVM</span>
                  <p className="mono-num text-xs font-bold text-ink-900 truncate mt-0.5">
                    0x3769...589D
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="display-md text-ink-900">
                    Destino Smart Wallet
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Informe sua carteira compatível com EVM. Não há custódia intermediária; você mantém o controle exclusivo das suas chaves.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 3 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-emerald-50/40 to-green-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    ETAPA 03
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    3
                  </span>
                </div>
                
                {/* Visual Preview: Dynamic Pix QR */}
                <div className="w-full rounded-2xl bg-white p-2.5 border border-ink-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-accent-mint flex items-center justify-center text-accent-emerald">
                      <QrCode className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-ink-900">Pix Dinâmico</span>
                  </div>
                  <span className="mono-num text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                    10:00
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="display-md text-ink-900">
                    Pagamento via Pix
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Pague o QR Code emitido pelo Banco Central no app do seu banco. A conciliação e compensação ocorrem em tempo real.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 4 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-green-50/40 to-emerald-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    ETAPA 04
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    4
                  </span>
                </div>
                
                {/* Visual Preview: Settlement */}
                <div className="w-full rounded-2xl bg-white p-2.5 border border-ink-200 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
                    <span className="text-xs font-bold text-accent-emerald">Liquidado</span>
                  </div>
                  <span className="mono-num text-xs font-bold text-ink-900">14.8s SLA</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="display-md text-ink-900">
                    Liquidação On-Chain
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    O Pods Solver liquida a ordem no mesmo bloco na Base e você recebe o comprovante imutável direto no seu WhatsApp.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* 2. Deep Midnight Forest Section: Architecture, Ledger & Proof */}
      <section 
        id="arquitetura" 
        className="relative py-20 lg:py-28 overflow-hidden text-white"
        style={{ background: "radial-gradient(ellipse at center, #05261d 0%, #031812 70%, #010d0a 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand/20 text-emerald-300 border border-brand/40">
              <ShieldCheck className="h-4 w-4 text-accent-green" />
              Arquitetura Institucional & Risco Zero
            </span>
            <h2 className="display-lg mt-4 text-white font-extrabold">
              Engenharia financeira de alta precisão com auditoria on-chain contínua.
            </h2>
            <p className="body-lg mt-4 text-emerald-100/70">
              Cada transação é regida por contabilidade formal de partida dobrada, privacidade Zero-Trust e conciliação tripla com nós RPC da Base.
            </p>
          </div>

          {/* 3 High-Impact Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-accent-green flex items-center justify-center mb-6 border border-emerald-400/30">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Ledger de Partida Dobrada
              </h3>
              <p className="text-sm text-emerald-100/70 mt-3 leading-relaxed">
                Invariante contábil Zero-Sum obrigatório. Toda operação de câmbio gera lançamentos simétricos entre passivo bancário, contas clearing e liquidação em stablecoins.
              </p>
            </div>

            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-accent-green flex items-center justify-center mb-6 border border-emerald-400/30">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Conformidade LGPD & Zero-Trust
              </h3>
              <p className="text-sm text-emerald-100/70 mt-3 leading-relaxed">
                Validação matemática rigorosa de CPF via Módulo 11 com hashing irreversível SHA-256 e salts secretos. Nenhum dado do cliente é armazenado em texto puro.
              </p>
            </div>

            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-accent-green flex items-center justify-center mb-6 border border-emerald-400/30">
                <MessageSquareCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Omnichannel WhatsApp & APIs
              </h3>
              <p className="text-sm text-emerald-100/70 mt-3 leading-relaxed">
                Opere pela interface web ou conecte seus sistemas via API Cloud Run com notificações instantâneas e envio de comprovantes via WhatsApp corporativo.
              </p>
            </div>
          </div>

          {/* Basescan Audit Proof Banner */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-emerald-900/40 to-green-950/50 p-8 sm:p-10 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent-green font-bold">
                AUDITORIA PÚBLICA ON-CHAIN
              </span>
              <h4 className="text-2xl font-bold text-white">
                Consulte o comprovante real executado na Base Mainnet.
              </h4>
              <p className="text-sm text-emerald-100/70 max-w-xl">
                Transação piloto processada com sucesso através do solver institucional da Pods Finance. Hash on-chain confirmado na blockchain da Base.
              </p>
            </div>

            <a
              href="https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white glow-green-btn hover:bg-brand-hover transition"
            >
              Ver Transação no Basescan
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
