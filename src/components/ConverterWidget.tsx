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
    <div className="xfin-card relative w-full max-w-md p-6 sm:p-7">
      
      {/* Widget Header */}
      <div className="flex items-center justify-between pb-4 border-b border-ink-200">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent-green glow-emerald"></span>
          <h3 className="text-xs font-bold tracking-[0.14em] text-ink-900 uppercase">
            Simulador On-Ramp
          </h3>
        </div>
        <span className="rounded-full bg-accent-mint px-2.5 py-0.5 text-[11px] font-bold text-accent-emerald">
          Taxa zero no piloto
        </span>
      </div>

      {!quoteResult ? (
        <div className="mt-5 space-y-4">
          
          {/* Card: Você Paga (BRL) */}
          <div className="rounded-2xl bg-surface-offwhite p-4 border border-ink-200/80 transition focus-within:border-brand/50">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-500">
              <span>Valor do Pix</span>
              <span className="mono-num text-ink-700">BRL (R$)</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-2xl font-bold text-ink-900">R$</span>
              <input
                type="number"
                min="5"
                max="500"
                value={brlAmount || ""}
                onChange={(e) => setBrlAmount(Number(e.target.value))}
                className="w-full bg-transparent text-right mono-num text-3xl font-extrabold text-ink-900 outline-none focus:text-brand"
                placeholder="50"
              />
            </div>

            {/* Quick Chips */}
            <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pt-1">
              {[20, 50, 100, 200, 500].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleQuickAmount(val)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition ${
                    brlAmount === val
                      ? "bg-brand text-white shadow-sm"
                      : "bg-white text-ink-700 border border-ink-200 hover:bg-ink-100"
                  }`}
                >
                  R${val}
                </button>
              ))}
            </div>
          </div>

          {/* Swap Divider Pill */}
          <div className="relative flex items-center justify-center -my-2 z-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white shadow-sm border-2 border-white">
              <ArrowDownUp className="h-4 w-4" />
            </div>
          </div>

          {/* Card: Você Recebe (USDC) */}
          <div className="rounded-2xl bg-surface-offwhite p-4 border border-ink-200/80">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-500">
              <span>Entrega On-Chain</span>
              <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-ink-200">
                <button
                  type="button"
                  onClick={() => setNetwork('base')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                    network === 'base' ? 'bg-brand text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  Base
                </button>
                <button
                  type="button"
                  onClick={() => setNetwork('polygon')}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                    network === 'polygon' ? 'bg-purple-600 text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  Polygon
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  $
                </div>
                <span className="font-extrabold text-ink-900">USDC</span>
              </div>
              <span className="mono-num text-3xl font-extrabold text-brand">
                {calculatedUsdc}
              </span>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[11px] text-ink-500 border-t border-ink-200/60 pt-2 font-medium">
              <span>Cotação de referência:</span>
              <span className="mono-num text-ink-700">1 USDC ≈ R$ {USD_RATE.toFixed(2)}</span>
            </div>
          </div>

          {/* Celular de Notificação */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-ink-700">
              WhatsApp para recebimento do comprovante on-chain:
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="55 11 98128-5808"
              className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm text-ink-900 border border-ink-200 outline-none focus:border-brand transition shadow-sm"
            />
          </div>

          {/* Action CTA Button */}
          <button
            type="button"
            onClick={handleGeneratePix}
            disabled={isGenerating || brlAmount < 5}
            className="w-full mt-2 flex items-center justify-center gap-2 rounded-pill bg-brand py-4 text-sm font-bold text-white glow-green-btn hover:bg-brand-hover transition active:scale-[0.98] disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin"></span>
                Emitindo Cobrança Pix...
              </>
            ) : (
              <>
                <QrCode className="h-4 w-4" />
                Gerar Pix para {calculatedUsdc} USDC
              </>
            )}
          </button>

          <p className="text-center text-[11.5px] text-ink-500 font-medium">
            🔒 Custódia Própria · Entrega direta na Smart Wallet Base
          </p>

        </div>
      ) : (
        /* Pix Pagamento Gerado */
        <div className="mt-5 space-y-4">
          <div className="rounded-2xl bg-accent-mint/60 p-4 border border-accent-green/30 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald font-mono">
              PIX DINÂMICO GERADO COM SUCESSO
            </span>
            <div className="mt-1 text-3xl mono-num font-extrabold text-ink-900">
              {formatBRL(brlAmount)}
            </div>
            <p className="mt-1 text-xs text-ink-700">
              Você receberá <strong className="text-accent-emerald">{quoteResult.amountUsdc} USDC</strong> na sua carteira Base.
            </p>
          </div>

          {/* Pix Copia e Cola Container */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-ink-700">
              Código Pix Copia e Cola:
            </label>
            <div className="relative">
              <textarea
                readOnly
                rows={3}
                value={quoteResult.pixString}
                className="w-full rounded-xl bg-surface-offwhite p-3 font-mono text-[11px] text-ink-700 border border-ink-200 outline-none resize-none shadow-sm"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="absolute right-2.5 bottom-3 flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-brand-hover transition"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* Status Tracker */}
          <div className="rounded-xl bg-surface-offwhite p-3 text-xs text-ink-700 border border-ink-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
              <span>Aguardando liquidação no Pix...</span>
            </div>
            <span className="mono-num font-bold text-amber-600">10:00</span>
          </div>

          <button
            type="button"
            onClick={() => setQuoteResult(null)}
            className="w-full rounded-pill bg-ink-100 py-3 text-xs font-bold text-ink-700 hover:bg-ink-200 transition"
          >
            Voltar / Nova Simulação
          </button>
        </div>
      )}

    </div>
  );
};
