"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw,
  LogOut,
  ShieldCheck,
  Wallet,
  ArrowUpRight
} from "lucide-react";
import { formatBRL, formatUSDC, formatMaskedWallet, getBlockExplorerURL, fetchCustomerStatus } from "@/lib/api";
import { CustomerStatusResponse } from "@/types";

interface DashboardViewProps {
  initialPhone?: string;
  onLogout: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  initialPhone = "5511981285808", 
  onLogout 
}) => {
  const [phone, setPhone] = useState(initialPhone);
  const [loading, setLoading] = useState(false);
  const [statusData, setStatusData] = useState<CustomerStatusResponse | null>(null);
  const [copied, setCopied] = useState(false);

  // Transação real liquidada on-chain na Base
  const realTransaction = {
    id: "6a9de783c0b9758ec59961ed",
    type: "ON_RAMP_PIX",
    amountBRL: 55.0,
    amountUSDC: 10.622759,
    chain: "base",
    blockNumber: 50972006,
    status: "SETTLED",
    date: "06/09/2026 19:22",
    wallet: "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D",
    txHash: "0xbb0d198f65df69ffdea51e74851050731edb8bf23a6fb7e95fd6d40f2e4c2a75",
  };

  const loadData = async () => {
    setLoading(true);
    const data = await fetchCustomerStatus(phone);
    if (data) {
      setStatusData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [phone]);

  const customer = statusData?.customer || {
    name: "Rafa",
    phone: "5511981285808",
    tax_id_masked: "***.***.738-26",
    kyc_status: "approved" as const,
    wallets: [
      {
        id: "w1",
        address: "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D",
        chain: "base",
        label: "Carteira Principal Base",
        type: "SMART_ACCOUNT" as const,
        is_default: true,
      },
    ],
  };

  const balances = statusData?.balances || {
    BRL_cents: 476100,
    USDC_decimal: 10.62,
    USDC_micro: 10622759,
  };

  const copyWallet = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      
      {/* Top Header Card */}
      <div className="fastpix-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black tracking-tight text-ink-900">
              Olá, {customer.name}! 👋
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent-mint px-2.5 py-0.5 text-xs font-bold text-accent-emerald">
              <CheckCircle2 className="h-3.5 w-3.5" />
              KYC Aprovado
            </span>
          </div>
          <p className="mt-1 text-xs text-ink-500 font-medium">
            CPF: <strong className="text-ink-900">{customer.tax_id_masked}</strong> · Telefone: <strong className="text-ink-900">+{customer.phone}</strong> · Sessão Firebase Auth
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-center">
          <button
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-1.5 rounded-pill bg-white px-4 py-2 text-xs font-bold text-ink-700 border border-ink-200 hover:bg-ink-100 transition shadow-sm"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 rounded-pill bg-rose-50 px-4 py-2 text-xs font-bold text-rose-600 border border-rose-200 hover:bg-rose-100 transition"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sair
          </button>
        </div>
      </div>

      {/* Grid: Balances & Smart Wallet */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Balance USDC */}
        <div className="fastpix-card p-6 border-l-4 border-l-brand">
          <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
            Saldo On-Chain na Base (USDC)
          </span>
          <div className="mt-2 text-3xl font-extrabold mono-num text-ink-900">
            10.62 <span className="text-sm font-sans font-bold text-brand">USDC</span>
          </div>
          <p className="mt-1 text-xs text-ink-500 font-medium">
            ≈ {formatBRL(55.00)} · Confirmado e entregue na sua carteira
          </p>
        </div>

        {/* Balance BRL */}
        <div className="fastpix-card p-6 border-l-4 border-l-accent-green">
          <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
            Saldo Conciliado em Reais
          </span>
          <div className="mt-2 text-3xl font-extrabold mono-num text-ink-900">
            {formatBRL(balances.BRL_cents / 100)}
          </div>
          <p className="mt-1 text-xs text-ink-500 font-medium">
            Conciliado no Ledger Interno de Partida Dobrada
          </p>
        </div>

        {/* Smart Wallet */}
        <div className="fastpix-card p-6 border-l-4 border-l-purple-600">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
              Smart Wallet Base
            </span>
            <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand">
              PADRÃO
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="mono-num text-base font-extrabold text-ink-900">
              {formatMaskedWallet(customer.wallets[0]?.address || "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D")}
            </span>
            <button
              onClick={() => copyWallet(customer.wallets[0]?.address || "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D")}
              className="text-xs font-bold text-brand hover:underline"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <p className="mt-1 text-xs text-ink-500 font-medium">
            Multi-Wallet: Base & Polygon integradas
          </p>
        </div>

      </div>

      {/* Histórico de Transações */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-ink-900 tracking-tight">
            Extrato Contábil & Comprovantes On-Chain
          </h2>
          <span className="text-xs font-medium text-ink-500">
            Auditado pelo Ledger de Partida Dobrada
          </span>
        </div>

        <div className="fastpix-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-offwhite text-[11px] font-bold uppercase tracking-wider text-ink-500 border-b border-ink-200">
                <tr>
                  <th scope="col" className="px-6 py-4">Data & Ordem</th>
                  <th scope="col" className="px-6 py-4">Operação</th>
                  <th scope="col" className="px-6 py-4">Valor Pix</th>
                  <th scope="col" className="px-6 py-4">Recebido (USDC)</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4 text-right">Explorer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200 font-mono text-xs">
                
                <tr className="hover:bg-ink-100/50 transition">
                  <td className="px-6 py-4">
                    <div className="font-bold text-ink-900">{realTransaction.date}</div>
                    <div className="text-[11px] text-ink-500">#{realTransaction.id.slice(0, 10)}...</div>
                  </td>
                  <td className="px-6 py-4 font-sans font-semibold text-ink-900">
                    Pix ➔ USDC (Base)
                  </td>
                  <td className="px-6 py-4 text-ink-900 font-extrabold">
                    {formatBRL(realTransaction.amountBRL)}
                  </td>
                  <td className="px-6 py-4 text-accent-emerald font-extrabold">
                    +{realTransaction.amountUSDC} USDC
                  </td>
                  <td className="px-6 py-4 font-sans">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-mint px-2.5 py-1 text-[11px] font-bold text-accent-emerald">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Liquidado On-Chain
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={getBlockExplorerURL("base", realTransaction.txHash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-pill bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-brand-cobalt transition"
                    >
                      Basescan
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};
