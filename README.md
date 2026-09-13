# XFIN Web · Plataforma On-Ramp & Dashboard On-Chain

Interface web moderna e institucional para liquidação instantânea de **Pix ↔ USDC na rede Base**, desenvolvida com **Next.js 15**, **TypeScript**, **Tailwind CSS**, tipografia corporativa **Plus Jakarta Sans** e paleta **Emerald Tech Green**.

---

## 🎨 Identidade Visual & Design System

* **Tipografia Tech:** Fonte geométrica **Plus Jakarta Sans** para títulos e display de alta precisão, combinada com **JetBrains Mono** para figuras tabulares e dados on-chain.
* **Paleta Emerald Tech Green:** Tons vibrantes em `#00B368` e `#059669`, superfícies profundas de segurança em midnight forest (`#022c22` e `#041f17`) e canvas claro `#f6faf8`.
* **Vidro Lapidado & Sombras:** Cards elevados com bordas suaves (`#d7e6df`), highlights internos brutos e sombras multicamada.
* **Transparência On-Chain:** Comprovantes reais auditáveis diretamente no explorador oficial da Base.

---

## 🏗️ Estrutura do Projeto

```text
xfin-web/
├── src/
│   ├── app/
│   │   ├── globals.css          # Tokens do XFIN, fontes Plus Jakarta Sans e sombras
│   │   ├── layout.tsx           # Metadados de SEO, fontes e viewport
│   │   └── page.tsx             # Gerenciamento de abas (Landing vs Dashboard) e modal de autenticação
│   ├── components/
│   │   ├── Navbar.tsx           # Cabeçalho com logo XFIN, status da Base Mainnet e CTA
│   │   ├── Hero.tsx             # Seção principal institucional e simulador on-ramp
│   │   ├── ConverterWidget.tsx  # Calculadora interativa Pix/USDC com Pix Copia e Cola
│   │   ├── Features.tsx         # 4 etapas operacionais e pilares de engenharia financeira
│   │   ├── DashboardView.tsx    # Área do cliente: saldos, carteiras e extrato com Basescan
│   │   └── Footer.tsx           # Rodapé institucional e status operacional
│   ├── lib/
│   │   ├── api.ts               # Cliente de integração com o Cloud Run backend
│   │   └── firebase.ts          # Inicialização do Firebase Auth para o projeto oficial
│   └── types/
│       └── index.ts             # Modelos de domínio (Customer, Wallet, Intent, Transaction)
├── tailwind.config.ts           # Configuração de temas, cores emerald e fontes
└── package.json
```

---

## 🚀 Como Executar Localmente

### 1. Instalar Dependências
```bash
pnpm install
```

### 2. Rodar o Servidor de Desenvolvimento
```bash
pnpm dev
```
Acesse no navegador: [http://localhost:3000](http://localhost:3000)

### 3. Conexão com o Backend
O projeto já está conectado à API em produção no Google Cloud Run:
`https://financial-infrastructure-api-asfbne2rqq-rj.a.run.app`

---

## 🔗 Transações On-Chain Reais
Todas as ordens liquidadas geram comprovantes diretos para o explorer oficial da Base:
* Exemplo real auditado: [Transação no Basescan](https://basescan.org/tx/0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75)
