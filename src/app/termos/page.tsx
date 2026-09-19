import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalNavbar } from "@/components/LegalNavbar";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  KeyRound, 
  Coins, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso · XFIN",
  description: "Termos Gerais de Uso da infraestrutura de liquidação cambial e software on-ramp da XFIN.",
};

export default function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-offwhite text-ink-900">
      <LegalNavbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 text-center sm:text-left border-b border-ink-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand border border-brand/20 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              Contrato de Licenciamento & Uso de Software
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] text-ink-900">
              Termos Gerais de Uso
            </h1>
            <p className="mt-3 text-base text-ink-500 max-w-2xl leading-relaxed">
              Diretrizes de utilização da infraestrutura tecnológica da XFIN para conversão cambial fiduciária e liquidação instantânea de stablecoins em redes blockchain.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand" />
                Última atualização: <strong className="text-ink-700">Março de 2026</strong>
              </span>
              <span>·</span>
              <span>Versão 2.4</span>
              <span>·</span>
              <span className="mono-num text-[11px] bg-white px-2 py-0.5 rounded border border-ink-200 text-ink-700">
                XFIN-TERMS-BR-2026
              </span>
            </div>
          </div>

          {/* Highlights summary bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <KeyRound className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">100% Não-Custodial</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Você mantém o controle total. A XFIN jamais tem acesso ou custódia às suas chaves privadas ou fundos.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <Coins className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">Paridade & Transparência</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Cotação cambial BRL/USDC transparente e garantida durante a janela de validade da cobrança Pix.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <Layers className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">Liquidação Direta Base</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Tokens USDC oficiais entregues diretamente no endereço informado, auditáveis on-chain no Basescan.
              </p>
            </div>
          </div>

          {/* Legal Document Content */}
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-ink-200 shadow-pop space-y-10 text-ink-700 leading-relaxed text-sm">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">1</span>
                Objeto e Âmbito de Aplicação
              </h2>
              <p>
                Os presentes Termos de Uso regulam o acesso e a utilização dos serviços e da plataforma tecnológica disponibilizada pela <strong>XFIN Financial Technologies Inc.</strong> e sua afiliada operacional nacional <strong>XFIN Brasil Tecnologia e Serviços Financeiros Ltda.</strong> (&ldquo;XFIN&rdquo;).
              </p>
              <p>
                A XFIN opera como desenvolvedora e provedora de infraestrutura de software proprietária de roteamento e liquidação cambial instantânea. O protocolo permite a conversão de moeda fiduciária brasileira (BRL) para ativos virtuais estáveis (especificamente USDC emitido pela Circle Internet Financial) e a entrega direta nas carteiras de autocustódia dos usuários na rede descentralizada Base Mainnet.
              </p>
              <p className="text-xs bg-surface-offwhite p-3 rounded-xl border border-ink-200/80 text-ink-600">
                Ao utilizar a plataforma XFIN, gerar cobranças Pix ou conectar qualquer carteira, você declara ter capacidade civil plena e expressa sua concordância integral com estes Termos e com nossa Política de Privacidade.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">2</span>
                Natureza de Software Não-Custodial (Self-Custody)
              </h2>
              <p>
                O usuário reconhece e aceita categoricamente que a arquitetura tecnológica da XFIN é de natureza <strong>estritamente não-custodial</strong>.
              </p>
              <ul className="space-y-2 list-none pl-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Ausência de custódia de chaves privadas:</strong> A XFIN não cria, não armazena, não gerencia e não tem capacidade técnica de recuperar chaves privadas, frases-semente (seed phrases) ou senhas das carteiras dos usuários.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Sem custódia de saldos fiduciários:</strong> A XFIN não mantém contas de depósito fiduciário, nem retém recursos em reais de usuários. Toda liquidação fiduciária é processada instantaneamente de ponta a ponta.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span><strong>Titularidade exclusiva:</strong> O usuário é o detentor integral e exclusivo dos ativos digitais a partir do momento de sua liquidação no livro contábil da rede blockchain.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">3</span>
                Regras de Uso do On-Ramp e Paridade Cambial BRL/USDC
              </h2>
              <p>
                A liquidação cambial via Pix para USDC submete-se às seguintes regras operacionais:
              </p>
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-surface-offwhite border border-ink-200/80">
                  <h4 className="font-semibold text-xs text-ink-900 mb-1">Fixação de Cotação e Spread Cambial</h4>
                  <p className="text-xs text-ink-600">
                    A taxa de conversão cotada na interface reflete a paridade de mercado no instante da solicitação e é garantida durante a janela de validade expressa no QR Code Pix (geralmente entre 10 e 15 minutos).
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-offwhite border border-ink-200/80">
                  <h4 className="font-semibold text-xs text-ink-900 mb-1">Titularidade Obrigatória da Conta Bancária</h4>
                  <p className="text-xs text-ink-600">
                    Por determinação dos normativos de Prevenção à Lavagem de Dinheiro (PLD/CFT) e conformidade BACEN, o pagamento Pix deve ser originado impreterivelmente de conta bancária de mesma titularidade do solicitante cadastrado na operação.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-offwhite border border-ink-200/80">
                  <h4 className="font-semibold text-xs text-ink-900 mb-1">Processamento de Moeda Fiduciária</h4>
                  <p className="text-xs text-ink-600">
                    A emissão dos códigos Pix e o recebimento dos fundos em reais são operados por intermédio da instituição parceira <strong>Pods Finance e Tecnologia S.A.</strong>, participante devidamente homologada no Sistema de Pagamentos Instantâneos (SPI) do Banco Central do Brasil.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">4</span>
                Responsabilidades de Autocustódia e Irreversibilidade
              </h2>
              <div className="rounded-2xl bg-amber-50/60 border border-amber-200/80 p-4 text-xs text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  Irreversibilidade de Transações On-Chain
                </div>
                <p>
                  As transações validadas em blockchains públicas são definitivas e imutáveis. Uma vez executado o envio de USDC para o endereço informado pelo usuário, a transação não pode ser estornada, pausada ou cancelada pela XFIN nem por qualquer autoridade central.
                </p>
              </div>
              <p>
                O usuário assume a responsabilidade exclusiva por:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-600">
                <li>Garantir a exatidão do endereço de carteira (public address) fornecido para o recebimento dos tokens.</li>
                <li>Garantir que a carteira informada seja compatível com a rede de envio selecionada (rede Base Mainnet, padrão ERC-20).</li>
                <li>Manter a segurança física e digital dos dispositivos utilizados, senhas e credenciais de acesso.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">5</span>
                Riscos de Rede Blockchain e Força Maior
              </h2>
              <p>
                O usuário declara estar ciente de que as tecnologias de redes distribuídas e ativos digitais envolvem riscos operacionais intrínsecos, incluindo:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-ink-600">
                <li><strong>Oscilações e Congestionamento de Rede:</strong> Variações temporárias no tempo de propagação de blocos e custos de gás na rede Base ou no ecossistema Ethereum L2.</li>
                <li><strong>Falhas de Provedores Terceiros:</strong> Indisponibilidade temporária de nós RPC públicos, interrupções no Sistema de Pagamentos Instantâneos (SPI) ou instabilidades nas APIs de mensageria.</li>
                <li><strong>Ataques Cibernéticos Externos:</strong> Riscos inerentes à segurança de dispositivos de usuários finais, como malwares de clipboard e phishing.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">6</span>
                Atendimento, Suporte e Auditoria
              </h2>
              <p>
                A XFIN provê canal de suporte para verificação e diagnóstico de conciliações operacionais. Cada transação executada no gateway gera um identificador unívoco de liquidação (TX Hash e End-to-End ID), verificável publicamente através do Basescan Explorer.
              </p>
              <p className="text-xs text-ink-500">
                Canal de suporte e ouvidoria operacional: <strong className="text-ink-700">suporte@xfin.financial</strong>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3 border-t border-ink-200/80 pt-6">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">7</span>
                Foro e Legislação Aplicável
              </h2>
              <p className="text-xs text-ink-600 leading-relaxed">
                Estes Termos de Uso são regidos e interpretados em conformidade com as leis da República Federativa do Brasil, em particular o Marco Civil da Internet (Lei nº 12.965/2014), a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e o Marco Legal dos Criptoativos (Lei nº 14.478/2022). Fica eleito o Foro da Comarca de São Paulo/SP como competente para dirimir quaisquer controvérsias decorrentes deste instrumento.
              </p>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-ink-200 shadow-pop">
            <div>
              <p className="text-xs font-bold text-ink-900">Consulte também nossa política de privacidade</p>
              <p className="text-xs text-ink-500">Saiba como protegemos seus dados sob as diretrizes da LGPD.</p>
            </div>
            <Link
              href="/privacidade"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition shadow-sm"
            >
              Política de Privacidade
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
