# FastPix Web · Landing Page & Dashboard On-Chain

Interface web moderna e de alta conversão para troca instantânea de **Pix ↔ USDC na rede Base**, desenvolvida com **Next.js 15**, **TypeScript** e **Tailwind CSS**, implementando com fidelidade os tokens de design do **Design System FastPix** (`fastpix.vc`).

---

## 🎨 Identidade Visual & Design System

* **Paleta Midnight Dark:** Fundo profundo em `#0b1430`, superfícies de elevação em `#08163f` e toques em preto absoluto (`#000000`).
* **Glow & Destaques em Azul Cobalto:** Cores de ação em `rgba(11, 58, 168, ...)` e gradientes elétricos para chamadas de ação.
* **Vidro Lapidado (Glassmorphism):** Cards com backdrop blur de 16px e bordas vítreas de 1px com sutis highlights internos.
* **Tipografia Nítida:** Escala funcional compacta com dados tabulares monospaçados para cotações e comprovantes on-chain.

---

## 🏗️ Estrutura do Projeto

```text
fastpix-web/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tokens do FastPix, gradientes e estilos glassmorphic
│   │   ├── layout.tsx           # Metadados de SEO, fontes e viewport
│   │   └── page.tsx             # Gerenciamento de abas (Landing vs Dashboard) e modal de autenticação
│   ├── components/
│   │   ├── Navbar.tsx           # Cabeçalho com logo, status da rede Base e CTA
│   │   ├── Hero.tsx             # Seção principal com proposta de valor e conversor
│   │   ├── ConverterWidget.tsx  # Calculadora interativa Pix/USDC com cópia de chave
│   │   ├── Features.tsx         # 4 pilares: 15s SLA, Zero Custódia, LGPD e WhatsApp
│   │   ├── DashboardView.tsx    # Área do cliente: saldos, carteiras e histórico com Basescan
│   │   └── Footer.tsx           # Rodapé institucional e status operacional
│   ├── lib/
│   │   └── api.ts               # Cliente tipado de integração com o Cloud Run backend
│   └── types/
│       └── index.ts             # Modelos de domínio (Customer, Wallet, Intent, Transaction)
├── tailwind.config.ts           # Extensões com os tokens de cores, raios e sombras
└── package.json
```

---

## 🚀 Como Executar Localmente

### 1. Instalar Dependências
```bash
pnpm install
# ou
npm install
# ou
bun install
```

### 2. Rodar o Servidor de Desenvolvimento
```bash
pnpm dev
```
Acesse no navegador: [http://localhost:3000](http://localhost:3000)

### 3. Conexão com o Backend
O projeto já está pré-configurado em `src/lib/api.ts` para consumir diretamente os dados da infraestrutura em produção no Google Cloud Run:
`https://financial-infrastructure-api-asfbne2rqq-rj.a.run.app`

---

## 🔗 Transações On-Chain Reais
Todas as ordens liquidadas geram comprovantes diretos para o explorer oficial da Base:
* Exemplo real auditado: [Transação no Basescan](https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75)
