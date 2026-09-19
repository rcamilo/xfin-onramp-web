import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LegalNavbar } from "@/components/LegalNavbar";
import { Footer } from "@/components/Footer";
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  Fingerprint, 
  UserCheck, 
  EyeOff, 
  Clock, 
  Mail, 
  ArrowRight,
  FileCheck2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade & LGPD · XFIN",
  description: "Tratamento de dados pessoais, privacidade por design e conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) na XFIN.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface-offwhite text-ink-900">
      <LegalNavbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 text-center sm:text-left border-b border-ink-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand border border-brand/20 mb-4">
              <Lock className="h-3.5 w-3.5" />
              Privacidade & Proteção de Dados Pessoais
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] text-ink-900">
              Política de Privacidade & LGPD
            </h1>
            <p className="mt-3 text-base text-ink-500 max-w-2xl leading-relaxed">
              Nosso compromisso inegociável com a segurança cibernética, minimização de dados e cumprimento rigoroso da Lei Geral de Proteção de Dados Pessoais (Lei Federal nº 13.709/2018).
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-brand" />
                Vigência: <strong className="text-ink-700">Março de 2026</strong>
              </span>
              <span>·</span>
              <span>Conformidade com a ANPD</span>
              <span>·</span>
              <span className="mono-num text-[11px] bg-white px-2 py-0.5 rounded border border-ink-200 text-ink-700">
                LGPD-LEI-13709-BR
              </span>
            </div>
          </div>

          {/* 3 Pillars Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <Fingerprint className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">Coleta Mínima (Minimization)</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Coletamos apenas o telefone celular para envio de token temporário (OTP) de autenticação transacional.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <EyeOff className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">Hashing & Salt SHA-256</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Identificadores são submetidos a algoritmos criptográficos unidirecionais com salt aleatório antes de qualquer indexação.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 border border-ink-200 shadow-pop">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-brand flex items-center justify-center mb-3">
                <FileCheck2 className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-sm text-ink-900 mb-1">Direitos LGPD Assegurados</h3>
              <p className="text-xs text-ink-500 leading-relaxed">
                Acesso, exclusão, correção e portabilidade simplificados por meio de canal direto com nosso DPO.
              </p>
            </div>
          </div>

          {/* Policy Document Content */}
          <div className="rounded-3xl bg-white p-6 sm:p-10 border border-ink-200 shadow-pop space-y-10 text-ink-700 leading-relaxed text-sm">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">1</span>
                Diretrizes e Princípios de Privacidade
              </h2>
              <p>
                A <strong>XFIN Brasil Tecnologia e Serviços Financeiros Ltda.</strong> (&ldquo;XFIN&rdquo;) valoriza a privacidade como um direito fundamental. Adotamos o princípio internacional de <em>Privacy by Design and by Default</em> (Privacidade desde a Concepção e por Padrão), orientando o desenvolvimento de todas as nossas ferramentas de software e interfaces.
              </p>
              <p>
                Todo o tratamento de dados pessoais no âmbito de nossos serviços atende estritamente às hipóteses legais do Artigo 7º da LGPD, em especial: execução de contrato (inciso V), cumprimento de obrigação legal ou regulatória perante autoridades financeiras (inciso II) e legítimo interesse (inciso IX).
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">2</span>
                Dados Coletados e Princípio da Necessidade
              </h2>
              <p>
                Em conformidade com o princípio da necessidade e da não-retenção excessiva, limitamos a coleta estritamente aos dados indispensáveis para a operacionalização segura do serviço:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">Autenticação Transacional</span>
                  <p className="font-semibold text-xs text-ink-900 mb-1">Número de Telefone Celular</p>
                  <p className="text-xs text-ink-500">
                    Utilizado exclusivamente para a expedição via WhatsApp de senhas temporárias de uso único (OTP) e validação do titular.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80">
                  <span className="text-xs font-bold text-brand uppercase tracking-wider block mb-1">Destino On-Chain</span>
                  <p className="font-semibold text-xs text-ink-900 mb-1">Endereço Público de Carteira (Base)</p>
                  <p className="text-xs text-ink-500">
                    Endereço público (0x...) para o qual os tokens USDC serão transferidos pelo contrato inteligente na rede Base.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-4 text-xs text-emerald-950 space-y-1.5 mt-3">
                <p className="font-bold flex items-center gap-2 text-emerald-900">
                  <ShieldCheck className="h-4 w-4 text-brand shrink-0" />
                  O que a XFIN NUNCA coleta ou armazena:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-emerald-900/80">
                  <li>Chaves privadas (private keys), senhas de carteiras ou palavras-semente (seed phrases).</li>
                  <li>Senhas de contas bancárias, dados de cartão de crédito ou código de segurança (CVV).</li>
                  <li>Dados biométricos sensíveis ou histórico de navegação não correlacionado ao gateway.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">3</span>
                Proteção Criptográfica: Salt Criptográfico & Hash SHA-256
              </h2>
              <p>
                Para assegurar a salvaguarda e a anonimização dos identificadores de usuários em nosso banco de dados analítico e ledger operacional, aplicamos funções criptográficas de dispersão unidirecional (<strong>SHA-256</strong>) combinadas com valores de dispersão pseudoaleatórios únicos (<strong>Cryptographic Salt</strong>).
              </p>
              <div className="p-4 rounded-2xl bg-ink-900 text-ink-100 text-xs font-mono space-y-1">
                <p className="text-brand-vibrant text-[11px]">// Processo de Anonimização Criptográfica</p>
                <p className="text-ink-200">identifier_hash = SHA256(phone_e164 + system_secret_salt)</p>
                <p className="text-[11px] text-ink-500 mt-1">Impossibilita ataques de dicionário e engenharia reversa de bancos relacionais.</p>
              </div>
              <p className="text-xs text-ink-600">
                Essa camada matemática impede que eventuais violações de banco de dados exponham o número de telefone de forma inteligível, garantindo o mais alto nível de anonimização e privacidade técnica.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">4</span>
                Compartilhamento Operacional com Parceiro do SPI / BACEN
              </h2>
              <p>
                Para possibilitar a liquidação fiduciária no arranjo de pagamentos Pix, compartilhamos estritamente os metadados cadastrais e transacionais exigidos por lei com nossa parceira bancária e de liquidação:
              </p>
              <div className="p-4 rounded-2xl bg-surface-offwhite border border-ink-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-ink-900">Pods Finance e Tecnologia S.A.</span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-light text-brand border border-brand/20">
                    Homologada SPI / BACEN
                  </span>
                </div>
                <p className="text-xs text-ink-600">
                  Instituição autorizada perante o Banco Central do Brasil responsável pela emissão das ordens de liquidação Pix, geração do QR Code dinâmico e reporte de conformidade regulatória segundo a Resolução BCB nº 1/2020.
                </p>
              </div>
              <p className="text-xs text-ink-500">
                É vedado a qualquer parceiro o uso dos dados para finalidades publicitárias, comercialização de bases cadastrais ou qualquer finalidade alheia ao processamento estrito da operação contratada.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">5</span>
                Direitos do Titular de Dados (Art. 18 da LGPD)
              </h2>
              <p>
                Você, na condição de titular dos dados pessoais, pode exercer a qualquer momento perante a XFIN os seguintes direitos previstos na legislação:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-offwhite border border-ink-200/70">
                  <UserCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Confirmação da existência de tratamento</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-offwhite border border-ink-200/70">
                  <UserCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Acesso e cópia dos dados tratados</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-offwhite border border-ink-200/70">
                  <UserCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Correção de dados incompletos ou inexatos</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-surface-offwhite border border-ink-200/70">
                  <UserCheck className="h-4 w-4 text-brand shrink-0" />
                  <span>Eliminação de dados desnecessários ou excessivos</span>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 border-t border-ink-200/80 pt-6">
              <h2 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-700 mono-num">6</span>
                Encarregado pelo Tratamento de Dados (DPO)
              </h2>
              <p className="text-xs text-ink-600 leading-relaxed">
                Para exercer seus direitos de titular, registrar dúvidas sobre o tratamento de informações ou notificar incidentes de segurança, contate formalmente nosso Encarregado pelo Tratamento de Dados Pessoais (Data Protection Officer):
              </p>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-offwhite border border-ink-200 max-w-md">
                <div className="w-10 h-10 rounded-full bg-brand-light text-brand flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-ink-900">Encarregado de Proteção de Dados (DPO)</p>
                  <p className="text-xs font-mono text-brand font-semibold">dpo@xfin.financial</p>
                  <p className="text-[11px] text-ink-500">Prazo regulamentar de resposta: até 15 dias úteis.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-ink-200 shadow-pop">
            <div>
              <p className="text-xs font-bold text-ink-900">Conheça nosso programa regulatório</p>
              <p className="text-xs text-ink-500">Conformidade com o BACEN, Marco Legal dos Criptoativos e regras de PLD/CFT.</p>
            </div>
            <Link
              href="/compliance"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition shadow-sm"
            >
              Governança & Compliance
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
