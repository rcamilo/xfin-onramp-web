"use client";

import React, { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  ExternalLink, 
  RefreshCw,
  LogOut,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Plus
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
  const [showNewSwapModal, setShowNewSwapModal] = useState(false);

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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      
      {/* Top Header Card */}
      <div className="glass-panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Olá, {customer.name}! 👋
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-3 w-3" />
              KYC Aprovado
            </span>
          </div>
          <p className="mt-1 text-sm text-slate-400 font-mono">
            CPF: <strong className="text-slate-200">{customer.tax_id_masked}</strong> · Telefone: <strong className="text-slate-200">+{customer.phone}</strong> · Firebase Auth Session
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-center">
          <button
            onClick={loadData}
            disabled={loading}
            className="flex items-center gap-1.5 rounded-pill bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 border border-white/10 hover:bg-white/10 transition"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
            Atualizar
          </button>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 rounded-pill bg-red-950/40 px-3.5 py-2 text-xs font-semibold text-red-300 border border-red-500/20 hover:bg-red-900/40 transition"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sair
          </button>
        </div>
      </div>

      {/* Grid: Balances & Primary Wallet */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Balance USDC */}
        <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-blue-500">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Saldo On-Chain na Base (USDC)
          </span>
          <div className="mt-2 text-3xl font-bold font-mono text-white">
            10.62 <span className="text-sm font-sans font-medium text-blue-400">USDC</span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            ≈ {formatBRL(55.00)} · Confirmado e entregue na sua carteira
          </p>
        </div>

        {/* Balance BRL */}
        <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-emerald-500">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Saldo Interno em Reais
          </span>
          <div className="mt-2 text-3xl font-bold font-mono text-white">
            {formatBRL(balances.BRL_cents / 100)}
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Conciliado no Ledger Interno de Partida Dobrada
          </p>
        </div>

        {/* Primary Smart Wallet */}
        <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-indigo-500">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Smart Wallet Base
            </span>
            <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-300">
              PADRÃO
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="font-mono text-lg font-bold text-slate-100">
              {formatMaskedWallet(customer.wallets[0]?.address || "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D")}
            </span>
            <button
              onClick={() => copyWallet(customer.wallets[0]?.address || "0x3769C37f3296Ee75EA74427E7336D89cc0b8589D")}
              className="text-xs text-blue-400 hover:text-blue-300 transition"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Multi-Wallet: Base & Polygon integradas
          </p>
        </div>

      </div>

      {/* Histórico de Transações Recentes */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white tracking-tight">
            Extrato Contábil & Comprovantes On-Chain
          </h2>
          <span className="text-xs font-medium text-slate-400">
            Auditado pelo Ledger de Partida Dobrada
          </span>
        </div>

        <div className="glass-panel overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-[#08163f]/90 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-white/5">
                <tr>
                  <th scope="col" className="px-6 py-4">Data & Ordem</th>
                  <th scope="col" className="px-6 py-4">Operação</th>
                  <th scope="col" className="px-6 py-4">Valor Pix (BRL)</th>
                  <th scope="col" className="px-6 py-4">Recebido (USDC)</th>
                  <th scope="col" className="px-6 py-4">Status</th>
                  <th scope="col" className="px-6 py-4 text-right">Comprovante On-Chain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono text-xs">
                
                {/* Real Transaction Row */}
                <tr className="hover:bg-white/[0.02] transition">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-white">{realTransaction.date}</div>
                    <div className="text-[11px] text-slate-400 font-mono">#{realTransaction.id.slice(0, 10)}...</div>
                  </td>
                  <td className="px-6 py-4 font-sans font-medium text-slate-200">
                    Pix ➔ USDC (Base)
                  </td>
                  <td className="px-6 py-4 text-white font-bold">
                    {formatBRL(realTransaction.amountBRL)}
                  </td>
                  <td className="px-6 py-4 text-emerald-400 font-bold">
                    +{realTransaction.amountUSDC} USDC
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 border border-emerald-500/20">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Liquidado On-Chain
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href={getBlockExplorerURL("base", realTransaction.txHash)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-lg bg-blue-600/20 px-3 py-1.5 text-xs font-semibold text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition shadow-fastpix-1"
                    >
                      Basescan
                      <ExternalLink className="h-3 w-3" />
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
