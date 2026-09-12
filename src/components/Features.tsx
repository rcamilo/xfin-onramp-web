"use client";

import React from "react";
import { Zap, Scale, Lock, MessageSquareCode, Layers, ShieldCheck, Check } from "lucide-react";

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Liquidação On-Chain em 15s",
      description:
        "Assim que o Pix é pago, nossa engine automatizada interage com a Pods Finance na Base Mainnet, enviando USDC direto para a sua carteira em segundos.",
      tag: "SLA < 15s",
    },
    {
      icon: Scale,
      title: "Ledger de Partida Dobrada",
      description:
        "Contabilidade financeira formal com integridade zero-sum. Todo débito possui crédito correspondente com conciliação tripla e auditoria contínua.",
      tag: "ACID Ledger",
    },
    {
      icon: Lock,
      title: "Conformidade LGPD & Zero Trust",
      description:
        "Seu CPF é validado matematicamente por Módulo 11 e pseudonimizado com salt SHA-256 de 256 bits. Seus dados nunca são armazenados em texto puro.",
      tag: "LGPD Ready",
    },
    {
      icon: MessageSquareCode,
      title: "Omnichannel: Web + WhatsApp",
      description:
        "Você escolhe onde operar: use este dashboard web ou interaja diretamente pelo WhatsApp do bot oficial para cotações e comprovantes na palma da mão.",
      tag: "Multi-canal",
    },
  ];

  return (
    <section id="como-funciona" className="relative py-20 border-t border-white/5 bg-[#0b1430]/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Arquitetura & Confiabilidade
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            A infraestrutura financeira que conecta o Pix ao ecossistema global de Stablecoins.
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Projetada para desenvolvedores, empresas e investidores que exigem conformidade, velocidade e transparência auditável em cada centavo.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-slate-300">
                      {feat.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Proof Section */}
        <div id="seguranca" className="mt-16 rounded-3xl glass-panel p-8 sm:p-10 border border-blue-500/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Transparência On-Chain Radical
              </span>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Cada transação gera um comprovante público e imutável no Basescan.
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Nós não fazemos promessas opacas de corretoras centralizadas. Quando você conclui um Pix no XFIN, a transferência dos tokens USDC na rede Base pode ser verificada instantaneamente pelo explorador oficial de blocos.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-pill bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-fastpix-glow hover:bg-blue-500 transition"
                >
                  Ver Exemplo Real no Basescan
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 rounded-2xl bg-[#08163f] p-5 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
              <div className="text-slate-400 text-[11px] pb-1 border-b border-white/5">
                // On-Chain Proof Specs
              </div>
              <div><span className="text-blue-400">Contract:</span> Base Official USDC</div>
              <div><span className="text-blue-400">Settlement:</span> Pods Finance Solver</div>
              <div><span className="text-blue-400">Custody:</span> 100% Self-Custodial</div>
              <div><span className="text-blue-400">Status:</span> 0x1 (Confirmed)</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
