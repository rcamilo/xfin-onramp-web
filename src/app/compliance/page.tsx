import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalNavbar } from "@/components/LegalNavbar";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  Scale, 
  Building2, 
  FileSpreadsheet, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Mail, 
  ArrowRight,
  Landmark,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Governança & Compliance BACEN · XFIN",
  description: "Conformidade regulatória com o Banco Central do Brasil (BACEN), Marco Legal dos Criptoativos (Lei 14.478/2022) e arquitetura não-custodial da XFIN.",
};

export default function CompliancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-offwhite text-ink-900">
      <LegalNavbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 text-center sm:text-left border-b border-ink-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand border border-brand/20 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              Governança Corporativa & Regulação
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] text-ink-900">
              Compliance & Segurança Regulatória
            </h1>
            <p className="mt-3 text-base text-ink-500 max-w-2xl leading-relaxed">
              Estrutura de conformidade jurídica, alinhamento às diretrizes do Banco Central do Brasil (BACEN), Marco Legal dos Criptoativos e padrões internacionais de PLD/CFT.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand" />
                Vigência Regulatória: <strong className="text-ink-700">2026</strong>
              </span>
              <span>·</span>
              <span>Auditoria On-Chain Contínua</span>
              <span>·</span>
              <span className="mono-num text-[11px] bg-white px-2 py-0.5 rounded border border-ink-200 text-ink-700">
                BACEN-SPI-LEI-14478
              </span>
            </div>
          </div>

          {/* 4 Pillars Highlight Badges Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            
            {/* Pilar 1: Marco Legal */}
            <div className="rounded-2xl bg-white p-6 border border-ink-200 shadow-pop relative overflow-hidden group hover:border-brand/40 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand flex items-center justify-center shrink-0">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-light px-2 py-0.5 rounded border border-brand/20">
                    Legislação Federal
                  </span>
                  <h3 className="text-base font-bold text-ink-900 mt-1">Marco Legal dos Criptoativos</h3>
                </div>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed">
                Total conformidade com a <strong>Lei Federal nº 14.478/2022</strong> e Decreto nº 11.563/2023, observando governança corporativa, transparência operacional e segregação patrimonial.
              </p>
            </div>

            {/* Pilar 2: SPI / BACEN */}
            <div className="rounded-2xl bg-white p-6 border border-ink-200 shadow-pop relative overflow-hidden group hover:border-brand/40 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand flex items-center justify-center shrink-0">
                  <Landmark className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-light px-2 py-0.5 rounded border border-brand/20">
                    Sistema Financeiro Nacional
                  </span>
                  <h3 className="text-base font-bold text-ink-900 mt-1">SPI / BACEN (Resolução BCB nº 1/2020)</h3>
                </div>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed">
                Liquidação fiduciária em BRL operada via arranjo Pix com participante homologada no Sistema de Pagamentos Instantâneos: <strong>Pods Finance e Tecnologia S.A.</strong>
              </p>
            </div>

            {/* Pilar 3: Autocustódia */}
            <div className="rounded-2xl bg-white p-6 border border-ink-200 shadow-pop relative overflow-hidden group hover:border-brand/40 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand flex items-center justify-center shrink-0">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-light px-2 py-0.5 rounded border border-brand/20">
                    Soberania & Criptografia
                  </span>
                  <h3 className="text-base font-bold text-ink-900 mt-1">Arquitetura Não-Custodial</h3>
                </div>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed">
                Sem retenção de depósitos fiduciários ou posse de chaves privadas. Liquidação direta na carteira de autocustódia do usuário na rede pública descentralizada Base Mainnet.
              </p>
            </div>

            {/* Pilar 4: PLD / CFT */}
            <div className="rounded-2xl bg-white p-6 border border-ink-200 shadow-pop relative overflow-hidden group hover:border-brand/40 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-brand-light px-2 py-0.5 rounded border border-brand/20">
                    Mitigação de Riscos
                  </span>
                  <h3 className="text-base font-bold text-ink-900 mt-1">Prevenção a Crimes Financeiros (PLD/CFT)</h3>
                </div>
              </div>
              <p className="text-xs text-ink-500 leading-relaxed">
                Monitoramento transacional em tempo real, checagem contra listas restritivas internacionais (OFAC/ONU) e cumprimento da <strong>Lei nº 9.613/1998</strong>.
              </p>
            </div>

          </div>

          {/* Compliance & Regulatory Deep Dive */}
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-ink-200 shadow-pop space-y-10 text-ink-700 leading-relaxed text-sm">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">1</span>
                Papel Institucional da XFIN no Ecossistema
              </h2>
              <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80 leading-relaxed text-xs text-ink-600 space-y-2">
                <p>
                  A <strong>XFIN</strong> atua estritamente como desenvolvedora e operadora de infraestrutura de tecnologia de software para liquidação descentralizada on-chain em redes públicas.
                </p>
                <p>
                  As operações de transferência, liquidação fiduciária e emissão de cobranças em moeda nacional (BRL) via Pix são processadas por meio de instituições parceiras devidamente autorizadas e homologadas como participantes do Sistema de Pagamentos Instantâneos (SPI) perante o <strong>Banco Central do Brasil (BACEN)</strong>, em cumprimento irrestrito à <strong>Resolução BCB nº 1/2020</strong> e atos normativos correlatos.
                </p>
                <p className="font-semibold text-ink-800">
                  Emissor e beneficiário fiduciário do Pix no arranjo de pagamentos: <span className="text-brand">Pods Finance e Tecnologia S.A.</span>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">2</span>
                Marco Legal dos Criptoativos (Lei Federal nº 14.478/2022)
              </h2>
              <p>
                A plataforma está estruturada em harmonia com os princípios basilares da legislação brasileira de ativos virtuais:
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-offwhite border border-ink-200/60">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-ink-900 block">Livre iniciativa e concorrência justa</strong>
                    <span className="text-xs text-ink-500">Garantia de acesso transparente aos trilhos de conversão e livre escolha pelo usuário das carteiras de destino.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-offwhite border border-ink-200/60">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-ink-900 block">Segregação Patrimonial Rigorosa</strong>
                    <span className="text-xs text-ink-500">Inexistência de mistura entre os ativos em trânsito dos clientes e o balanço corporativo da empresa ou de seus provedores parceiros.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-offwhite border border-ink-200/60">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-ink-900 block">Transparência de Preços e Sem Taxas Ocultas</strong>
                    <span className="text-xs text-ink-500">Exibição clara e prévia do valor exato de USDC a ser recebido na carteira antes da efetivação do pagamento Pix.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">3</span>
                Ledger de Partida Dobrada & Auditoria Pública
              </h2>
              <p>
                A integridade financeira de cada conversão é validada matematicamente por nosso motor de liquidação:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80">
                  <FileSpreadsheet className="h-4 w-4 text-brand mb-2" />
                  <h4 className="font-semibold text-xs text-ink-900 mb-1">Double-Entry Zero-Sum Ledger</h4>
                  <p className="text-xs text-ink-500">
                    Cada transação requer créditos e débitos perfeitamente balanceados, impedindo criação artificial de liquidez ou descompassos contábeis.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80">
                  <ExternalLink className="h-4 w-4 text-brand mb-2" />
                  <h4 className="font-semibold text-xs text-ink-900 mb-1">Verificação Pública Basescan</h4>
                  <p className="text-xs text-ink-500">
                    O contrato do USDC utilizado é o token oficial da Circle emitido nativamente na Base, inspecionável em tempo real por qualquer auditor independente.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 border-t border-ink-200/80 pt-6">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">4</span>
                Prevenção à Lavagem de Dinheiro (PLD/CFT)
              </h2>
              <p className="text-xs text-ink-600 leading-relaxed">
                Em consonância com as recomendações internacionais do Grupo de Ação Financeira contra a Lavagem de Dinheiro e o Financiamento do Terrorismo (GAFI/FATF) e com a Lei nº 9.613/1998, implementamos:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-600">
                <li>Triagem automatizada de endereços de carteira contra listas de sanções (OFAC, ONU e União Europeia).</li>
                <li>Verificação de mesma titularidade entre o pagador do Pix e o usuário autenticado.</li>
                <li>Mecanismos de bloqueio preventivo contra fracionamento artificial de quantias ou movimentações atípicas.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 border-t border-ink-200/80 pt-6">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">5</span>
                Contato com a Diretoria de Compliance
              </h2>
              <p className="text-xs text-ink-600 leading-relaxed">
                Para esclarecimentos sobre auditoria, relatórios institucionais, parcerias reguladas ou comunicação com autoridades judiciais e regulatórias:
              </p>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-offwhite border border-ink-200 max-w-md">
                <div className="w-10 h-10 rounded-full bg-brand-light text-brand flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900">Departamento Jurídico & Compliance</p>
                  <p className="text-xs font-mono text-brand font-semibold">compliance@xfin.financial</p>
                  <p className="text-[11px] text-ink-500">São Paulo, SP · Atendimento institucional exclusivo.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-ink-200 shadow-pop">
            <div>
              <p className="text-xs font-bold text-ink-900">Consulte os Termos Gerais de Uso</p>
              <p className="text-xs text-ink-500">Regras contratuais, cotação cambial e modelo de licenciamento de software.</p>
            </div>
            <Link
              href="/termos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition shadow-sm"
            >
              Termos de Uso
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
