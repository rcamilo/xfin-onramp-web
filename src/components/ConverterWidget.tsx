"use client";

import React, { useState } from "react";
import { ArrowDownUp, QrCode, Copy, Check, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { formatBRL, formatUSDC } from "@/lib/api";

const USD_RATE = 5.178; // Cotação de referência BRL/USDC

interface ConverterWidgetProps {
  onSuccessOrder?: (orderData: any) => void;
  defaultPhone?: string;
}

export const ConverterWidget: React.FC<ConverterWidgetProps> = ({ defaultPhone = "5511981285808" }) => {
  const [brlAmount, setBrlAmount] = useState<number>(50);
  const [phone, setPhone] = useState<string>(defaultPhone);
  const [network, setNetwork] = useState<'base' | 'polygon'>('base');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [quoteResult, setQuoteResult] = useState<{
    pixString: string;
    expiresIn: number;
    amountUsdc: number;
  } | null>(null);

  const calculatedUsdc = Number((brlAmount / USD_RATE).toFixed(2));

  const handleQuickAmount = (val: number) => {
    setBrlAmount(val);
  };

  const handleGeneratePix = async () => {
    setIsGenerating(true);
    // Simula chamada rápida para obter Pix Copia e Cola oficial da Woovi/Pods
    setTimeout(() => {
      setQuoteResult({
        pixString: "00020101021226810014br.gov.bcb.pix2559qr.woovi.com/qr/v2/cob/d4d0deca-84f7-4433-9f1f-8e27229eb6a25204000053039865405" + brlAmount + ".005802BR5925PODS FINANCE E TECNOLOGIA6009SAO PAULO6229052526ff986637ad43b0919e9567d630440DF",
        expiresIn: 600,
        amountUsdc: calculatedUsdc,
      });
      setIsGenerating(false);
    }, 600);
  };

  const handleCopy = () => {
    if (quoteResult?.pixString) {
      navigator.clipboard.writeText(quoteResult.pixString);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="glass-panel relative w-full max-w-md rounded-2xl p-6 shadow-fastpix-card">
      
      {/* Header Widget */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">Cotação Instantânea</h3>
        </div>
        <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-400 border border-blue-500/20">
          Taxa zero no piloto
        </span>
      </div>

      {!quoteResult ? (
        <div className="mt-5 space-y-4">
          {/* Card: Você Envia (BRL) */}
          <div className="rounded-xl bg-[#08163f]/90 p-4 border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Você paga via Pix</span>
              <span className="font-mono text-slate-300">BRL (R$)</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-white">R$</span>
              <input
                type="number"
                min="5"
                max="500"
                value={brlAmount || ""}
                onChange={(e) => setBrlAmount(Number(e.target.value))}
                className="w-full bg-transparent text-right font-mono text-2xl font-bold text-white outline-none focus:text-blue-400"
                placeholder="50"
              />
            </div>
            {/* Quick chips */}
            <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pt-1">
              {[20, 50, 100, 200, 500].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleQuickAmount(val)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                    brlAmount === val
                      ? "bg-blue-600 text-white shadow-fastpix-glow"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  R${val}
                </button>
              ))}
            </div>
          </div>

          {/* Swap Indicator Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white shadow-fastpix-glow">
              <ArrowDownUp className="h-4 w-4" />
            </div>
          </div>

          {/* Card: Você Recebe (USDC) */}
          <div className="rounded-xl bg-[#08163f]/90 p-4 border border-white/5">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Você recebe na carteira</span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setNetwork('base')}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                    network === 'base' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Base
                </button>
                <button
                  type="button"
                  onClick={() => setNetwork('polygon')}
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                    network === 'polygon' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Polygon
                </button>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-[11px] font-bold text-white">
                  $
                </div>
                <span className="font-semibold text-white">USDC</span>
              </div>
              <span className="font-mono text-2xl font-bold text-emerald-400">
                {calculatedUsdc}
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
              <span>Cotação estimada:</span>
              <span className="font-mono text-slate-300">1 USDC ≈ R$ {USD_RATE.toFixed(2)}</span>
            </div>
          </div>

          {/* Celular de Notificação */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-300">
              WhatsApp para Comprovante On-Chain
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="55 11 98128-5808"
              className="w-full rounded-xl bg-[#08163f]/60 px-3.5 py-2.5 text-sm text-white border border-white/10 outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Action CTA Button */}
          <button
            type="button"
            onClick={handleGeneratePix}
            disabled={isGenerating || brlAmount < 5}
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-blue-600 to-blue-700 py-3.5 text-sm font-bold text-white shadow-fastpix-glow transition hover:from-blue-500 hover:to-blue-600 active:scale-[0.98] disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                Gerando Chave Pix na Pods...
              </>
            ) : (
              <>
                <QrCode className="h-4 w-4" />
                Gerar Pix para {calculatedUsdc} USDC
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-400">
            🔒 Liquidação direta na Smart Wallet Base · Sem intermediários
          </p>
        </div>
      ) : (
        /* Tela de Pagamento do Pix Gerado */
        <div className="mt-5 space-y-4">
          <div className="rounded-xl bg-emerald-950/40 p-4 border border-emerald-500/20 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Pix Gerado com Sucesso
            </span>
            <div className="mt-1 text-2xl font-mono font-bold text-white">
              {formatBRL(brlAmount)}
            </div>
            <p className="mt-1 text-xs text-slate-300">
              Você receberá <strong className="text-emerald-300">{quoteResult.amountUsdc} USDC</strong> na sua carteira Base.
            </p>
          </div>

          {/* Pix Copia e Cola Container */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">
              Código Pix Copia e Cola:
            </label>
            <div className="relative">
              <textarea
                readOnly
                rows={3}
                value={quoteResult.pixString}
                className="w-full rounded-xl bg-[#08163f] p-2.5 font-mono text-[11px] text-slate-300 border border-white/10 outline-none resize-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2 bottom-3 flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-fastpix-glow transition hover:bg-blue-500"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* Status Tracker */}
          <div className="rounded-xl bg-[#08163f]/60 p-3 text-xs text-slate-300 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Aguardando confirmação bancária...</span>
            </div>
            <span className="font-mono text-amber-300">10:00</span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setQuoteResult(null)}
              className="w-full rounded-pill bg-white/5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition"
            >
              Voltar / Nova Cotação
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
