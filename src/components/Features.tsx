"use client";

import React from "react";
import { Zap, Scale, Lock, MessageSquareCode, ArrowUpRight, ShieldCheck, Check, QrCode } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <div>
      {/* 1. How it works (Como funciona) - Crisp Light Section like FastPix */}
      <section id="como-funciona" className="relative py-20 lg:py-28 bg-surface-offwhite border-t border-ink-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <header className="max-w-2xl mb-14">
            <span className="eyebrow">
              04 PASSOS · 15 SEGUNDOS
            </span>
            <h2 className="display-lg mt-4 text-ink-900">
              Como funciona o On-Ramp
            </h2>
            <p className="body-lg mt-4 text-ink-700">
              Comprar stablecoins nunca foi tão simples. Sem custódia de terceiros, sem formulários cansativos. Você define o valor, paga o Pix e recebe dólares digitais na sua carteira.
            </p>
          </header>

          {/* 4 Cards Grid with Rich Visual Previews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-blue-50/40 to-blue-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    STEP 01
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    1
                  </span>
                </div>
                
                {/* Mini Visual Preview: Network Select */}
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
                    Rede e Valor
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Selecione Base (USDC) ou Polygon (USDT). Digite o valor em Reais e veja a cotação do dólar atualizada em tempo real.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 2 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-purple-50/40 to-indigo-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    STEP 02
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    2
                  </span>
                </div>
                
                {/* Mini Visual Preview: Wallet input */}
                <div className="w-full rounded-2xl bg-white p-3 border border-ink-200 shadow-sm">
                  <span className="text-[9px] font-bold text-ink-500 uppercase tracking-wider">CARTEIRA EVM</span>
                  <p className="mono-num text-xs font-bold text-ink-900 truncate mt-0.5">
                    0x3769...589D
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-2 flex-1 justify-between">
                <div>
                  <h3 className="display-md text-ink-900">
                    Informe a Carteira
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Sua Smart Wallet EVM (0x...) de destino. Não exigimos custódia; os tokens são entregues diretamente na sua conta.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 3 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-emerald-50/40 to-teal-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    STEP 03
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    3
                  </span>
                </div>
                
                {/* Mini Visual Preview: QR Code & Pix */}
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
                    Pague via Pix
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Pague o QR Code ou Copia e Cola em qualquer banco brasileiro. O sistema reconhece o pagamento em milissegundos.
                  </p>
                </div>
              </div>
            </article>

            {/* Step 4 */}
            <article className="group relative rounded-3xl bg-white border border-ink-200 flex flex-col overflow-hidden shadow-pop transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand/40">
              <div className="relative h-[180px] overflow-hidden bg-gradient-to-br from-surface-offwhite via-blue-50/40 to-emerald-100/30 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="mono-num text-[11px] font-bold text-brand uppercase tracking-wider">
                    STEP 04
                  </span>
                  <span className="w-7 h-7 rounded-full bg-brand/10 text-brand flex items-center justify-center text-xs font-black">
                    4
                  </span>
                </div>
                
                {/* Mini Visual Preview: On-chain settlement */}
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
                    USDC na Conta
                  </h3>
                  <p className="body-sm mt-2 text-ink-500">
                    Em menos de 15 segundos, o Pods Solver executa a liquidação on-chain na Base e você recebe o comprovante no WhatsApp.
                  </p>
                </div>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* 2. Deep Midnight Section: Architecture, Ledger & Proof (Diferenciais) */}
      <section 
        id="diferenciais" 
        className="relative py-20 lg:py-28 overflow-hidden text-white"
        style={{ background: "radial-gradient(ellipse at center, #081a4a 0%, #06112e 70%, #0a0114 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand/20 text-blue-300 border border-brand/40">
              <ShieldCheck className="h-4 w-4 text-accent-green" />
              Engenharia Financeira e Segurança
            </span>
            <h2 className="display-lg mt-4 text-white font-extrabold">
              Arquitetura de missão crítica para operações de câmbio digital.
            </h2>
            <p className="body-lg mt-4 text-slate-300">
              Cada centavo processado obedece a regras formais de contabilidade de partida dobrada, privacidade LGPD e conciliação tripla on-chain.
            </p>
          </div>

          {/* 3 High-Impact Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 border border-blue-400/30">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Ledger de Partida Dobrada
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Invariante contábil Zero-Sum permanente. Todo débito possui crédito simétrico entre as contas de custódia, clearing e saldo on-chain, prevenindo qualquer inconsistência.
              </p>
            </div>

            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-accent-green flex items-center justify-center mb-6 border border-emerald-400/30">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                LGPD Zero-Trust
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Validação matemática do CPF via Módulo 11 oficial com pseudonimização irreversível por salt criptográfico SHA-256 de 256 bits. Seus dados nunca vazam em texto puro.
              </p>
            </div>

            <div className="rounded-3xl bg-white/[0.05] p-8 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 border border-purple-400/30">
                <MessageSquareCode className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                WhatsApp + Dashboard
              </h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                Opere pela web ou converse com o bot oficial no WhatsApp. O comprovante com o link do explorer da blockchain chega instantaneamente na conversa.
              </p>
            </div>
          </div>

          {/* Basescan Audit Proof Banner */}
          <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-950/60 via-blue-900/30 to-emerald-950/40 p-8 sm:p-10 border border-blue-400/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-accent-green font-bold">
                AUDITORIA PÚBLICA EM TEMPO REAL
              </span>
              <h4 className="text-2xl font-bold text-white">
                Verifique a última transação real executada na Base Mainnet.
              </h4>
              <p className="text-sm text-slate-300 max-w-xl">
                Transação real de piloto processada com sucesso via Pods Finance. Hash on-chain auditado e confirmado no explorer oficial da Base.
              </p>
            </div>

            <a
              href="https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 rounded-pill bg-brand px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-fastpix-4 hover:bg-brand-cobalt transition"
            >
              Abrir Transação no Basescan
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
