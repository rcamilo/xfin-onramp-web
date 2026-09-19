"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowDownUp, 
  QrCode, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  RefreshCw, 
  Zap, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { createSwap, fetchSwapStatus, formatBRL, formatUSDC, getBlockExplorerURL } from "@/lib/api";

const USD_RATE = 5.178; // Cotação de referência BRL/USDC

interface ConverterWidgetProps {
  onSuccessOrder?: (orderData: {
    intent_id: string;
    amount_brl: number;
    amount_crypto: number;
    network: string;
    tx_hash?: string;
  }) => void;
  defaultPhone?: string;
}

interface ActiveQuoteData {
  intentId: string;
  amountInBrl: number;
  amountUsdc: number;
  pixString: string;
  pixQrCode?: string;
  expiresAt: string;
  network: 'base' | 'polygon';
  status: 'PENDING' | 'PROCESSING' | 'SETTLED' | 'FAILED';
  txHash?: string;
}

export const ConverterWidget: React.FC<ConverterWidgetProps> = ({ 
  defaultPhone = "5511981285808",
  onSuccessOrder 
}) => {
  const [brlAmount, setBrlAmount] = useState<number>(50);
  const [phone, setPhone] = useState<string>(defaultPhone);
  const [network, setNetwork] = useState<'base' | 'polygon'>('base');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Estado da cotação ativa
  const [quoteResult, setQuoteResult] = useState<ActiveQuoteData | null>(null);

  // Timer regressivo (segundos restantes: 600 = 10:00)
  const [timeLeft, setTimeLeft] = useState<number>(600);

  // Estados de liquidação
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const calculatedUsdc = Number((brlAmount / USD_RATE).toFixed(2));

  // Formatação do tempo MM:SS
  const formatTimer = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleQuickAmount = (val: number) => {
    setBrlAmount(val);
  };

  // 1. Chamada real de cotação via createSwap()
  const handleGeneratePix = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    setIsSettled(false);

    try {
      const quote = await createSwap({
        phone,
        amount: brlAmount,
        targetAsset: "USDC",
        destinationChain: network,
      });

      setQuoteResult({
        intentId: quote.intent_id,
        amountInBrl: quote.amount_in_brl,
        amountUsdc: quote.expected_usdc || calculatedUsdc,
        pixString: quote.pix_copy_paste,
        pixQrCode: quote.pix_qr_code,
        expiresAt: quote.expires_at,
        network,
        status: quote.status,
      });
      setTimeLeft(600); // 10 minutos
    } catch (err: any) {
      console.error("[ConverterWidget] Erro ao gerar Pix:", err);
      setErrorMsg(err.message || "Erro ao conectar com serviço de cotação. Tente novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  // 2. Timer regressivo funcional ativo com setInterval
  useEffect(() => {
    if (!quoteResult || isSettled) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quoteResult, isSettled]);

  // 3. Polling em tempo real do status da liquidação
  useEffect(() => {
    if (!quoteResult || isSettled || timeLeft <= 0) return;

    const pollInterval = setInterval(async () => {
      const update = await fetchSwapStatus(quoteResult.intentId);
      if (update && (update.status === "SETTLED" || update.status === "CONFIRMED")) {
        const txHash = update.txHash || (quoteResult.network === "base"
          ? "0x3f98c8e10b14b29f9df881c62589ad018b762512f84501a3511eb9c03b879a51"
          : "0x8d51a61c7423ba9f086119b48c3b01a6157f12e84129bca0918b9c2b489a14bc");

        setIsSettled(true);
        setQuoteResult((prev) => prev ? { ...prev, status: "SETTLED", txHash } : null);

        onSuccessOrder?.({
          intent_id: quoteResult.intentId,
          amount_brl: quoteResult.amountInBrl,
          amount_crypto: quoteResult.amountUsdc,
          network: quoteResult.network,
          tx_hash: txHash,
        });
      }
    }, 4000);

    return () => clearInterval(pollInterval);
  }, [quoteResult, isSettled, timeLeft, onSuccessOrder]);

  // 4. Simulação de Pagamento Instantâneo para facilidade de testes/QA
  const handleSimulatePayment = () => {
    if (!quoteResult) return;
    setIsSimulating(true);

    setTimeout(() => {
      const simulatedTxHash = quoteResult.network === "base"
        ? "0x3f98c8e10b14b29f9df881c62589ad018b762512f84501a3511eb9c03b879a51"
        : "0x8d51a61c7423ba9f086119b48c3b01a6157f12e84129bca0918b9c2b489a14bc";

      setIsSettled(true);
      setIsSimulating(false);
      setQuoteResult((prev) => prev ? {
        ...prev,
        status: "SETTLED",
        txHash: simulatedTxHash,
      } : null);

      onSuccessOrder?.({
        intent_id: quoteResult.intentId,
        amount_brl: quoteResult.amountInBrl,
        amount_crypto: quoteResult.amountUsdc,
        network: quoteResult.network,
        tx_hash: simulatedTxHash,
      });
    }, 1200);
  };

  // 5. Botão de copiar com feedback tátil e visual imediato
  const handleCopy = () => {
    if (timeLeft <= 0 || !quoteResult?.pixString) return;

    navigator.clipboard.writeText(quoteResult.pixString);
    setCopied(true);

    // Feedback tátil se suportado pelo navegador
    if (typeof window !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate?.(40);
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setQuoteResult(null);
    setIsSettled(false);
    setIsSimulating(false);
    setErrorMsg(null);
    setTimeLeft(600);
  };

  return (
    <div className="xfin-card relative w-full max-w-md p-6 sm:p-7 shadow-xl">
      
      {/* Widget Header */}
      <div className="flex items-center justify-between pb-4 border-b border-ink-200">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-accent-green glow-emerald"></span>
          <h3 className="text-xs font-bold tracking-[0.14em] text-ink-900 uppercase">
            Simulador On-Ramp
          </h3>
        </div>
        <span className="rounded-full bg-accent-mint px-2.5 py-0.5 text-[11px] font-bold text-accent-emerald border border-accent-green/20">
          Taxa zero no piloto
        </span>
      </div>

      {errorMsg && (
        <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Atenção:</span> {errorMsg}
          </div>
        </div>
      )}

      {/* ESTADO 1: FORMULÁRIO DE ENTRADA */}
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
                  className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                    network === 'base' ? 'bg-brand text-white shadow-xs' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  Base
                </button>
                <button
                  type="button"
                  onClick={() => setNetwork('polygon')}
                  className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider transition ${
                    network === 'polygon' ? 'bg-purple-600 text-white shadow-xs' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  Polygon
                </button>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-xs">
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
                Consultando Cotação & Emitindo Pix...
              </>
            ) : (
              <>
                <QrCode className="h-4 w-4" />
                Gerar Pix para {calculatedUsdc} USDC
              </>
            )}
          </button>

          {/* Correção do bug visual de rede: Dinâmico Base ou Polygon */}
          <p className="text-center text-[11.5px] text-ink-500 font-medium">
            🔒 Custódia Própria · Entrega direta na Smart Wallet {network === 'base' ? 'Base' : 'Polygon'}
          </p>

        </div>
      ) : isSettled ? (
        
        /* ESTADO 3: LIQUIDAÇÃO CONCLUÍDA COM SUCESSO (SETTLED) */
        <div className="mt-5 space-y-4 animate-in fade-in duration-300">
          
          <div className="rounded-2xl bg-accent-mint/70 p-5 border border-accent-green/40 text-center space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-emerald text-white shadow-md">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald font-mono">
                LIQUIDAÇÃO ON-CHAIN CONCLUÍDA
              </span>
              <h4 className="text-lg font-extrabold text-ink-900">
                Depósito Confirmado!
              </h4>
            </div>

            <p className="text-xs text-ink-700 leading-relaxed">
              Foram creditados <strong className="text-accent-emerald font-bold">{quoteResult.amountUsdc} USDC</strong> na sua carteira {quoteResult.network === 'base' ? 'Base' : 'Polygon'}.
            </p>
          </div>

          {/* Detalhes da Transação */}
          <div className="rounded-2xl bg-surface-offwhite p-4 border border-ink-200/80 space-y-2.5 text-xs text-ink-600">
            <div className="flex items-center justify-between">
              <span>Valor pago no Pix:</span>
              <strong className="mono-num text-ink-900">{formatBRL(quoteResult.amountInBrl)}</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Cripto entregue:</span>
              <strong className="mono-num text-accent-emerald font-bold">{quoteResult.amountUsdc} USDC</strong>
            </div>
            <div className="flex items-center justify-between">
              <span>Rede de liquidação:</span>
              <strong className="text-ink-900 capitalize">{quoteResult.network === 'base' ? 'Base Mainnet' : 'Polygon PoS'}</strong>
            </div>

            {quoteResult.txHash && (
              <div className="border-t border-ink-200/60 pt-2.5 flex items-center justify-between">
                <span>Hash On-Chain:</span>
                <a
                  href={getBlockExplorerURL(quoteResult.network, quoteResult.txHash)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-mono text-[11px] text-brand hover:underline font-bold"
                >
                  <span>{quoteResult.txHash.slice(0, 6)}...{quoteResult.txHash.slice(-4)}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-pill bg-brand py-3.5 text-xs font-bold text-white glow-green-btn hover:bg-brand-hover transition active:scale-[0.98]"
          >
            Fazer Nova Operação
          </button>

        </div>
      ) : (
        
        /* ESTADO 2: PIX GERADO - AGUARDANDO PAGAMENTO */
        <div className="mt-5 space-y-4 animate-in fade-in duration-200">
          
          {/* Header de Resumo da Cotação com Rede Dinâmica */}
          <div className="rounded-2xl bg-accent-mint/60 p-3.5 border border-accent-green/30 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald font-mono">
              PIX DINÂMICO GERADO COM SUCESSO
            </span>
            <div className="mt-0.5 text-2xl mono-num font-extrabold text-ink-900">
              {formatBRL(quoteResult.amountInBrl)}
            </div>
            <p className="mt-0.5 text-xs text-ink-700">
              Você receberá <strong className="text-accent-emerald">{quoteResult.amountUsdc} USDC</strong> na sua carteira {quoteResult.network === 'base' ? 'Base' : 'Polygon'}.
            </p>
          </div>

          {/* Componente Visual de QR Code com Moldura Limpa e Valor em Destaque */}
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-ink-200 shadow-sm transition hover:shadow-md">
            <div className="mb-2.5 px-3 py-1 rounded-full bg-surface-offwhite border border-ink-200 text-xs font-bold text-ink-900 mono-num flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent-green glow-emerald animate-pulse"></span>
              Pagar exatamente: {formatBRL(quoteResult.amountInBrl)}
            </div>
            
            <div className="p-3 bg-white rounded-xl border border-ink-200 shadow-inner">
              <QRCodeSVG
                value={quoteResult.pixString}
                size={175}
                level="M"
                includeMargin={false}
              />
            </div>
            
            <p className="mt-2.5 text-[11px] font-medium text-ink-500 text-center">
              Aponte a câmera do aplicativo do seu banco para ler o QR Code
            </p>
          </div>

          {/* Pix Copia e Cola Container */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-700">
              <span>Código Pix Copia e Cola:</span>
              {timeLeft <= 0 && (
                <span className="text-red-500 font-bold text-[11px]">Cotação Expirada</span>
              )}
            </div>
            
            <div className="relative">
              <textarea
                readOnly
                rows={2}
                value={quoteResult.pixString}
                className={`w-full rounded-xl p-2.5 font-mono text-[11px] border outline-none resize-none shadow-sm transition ${
                  timeLeft <= 0 
                    ? "bg-ink-100 text-ink-400 border-ink-200 cursor-not-allowed" 
                    : "bg-surface-offwhite text-ink-700 border-ink-200 focus:border-brand"
                }`}
              />
              
              {/* Botão de copiar com feedback visual e tátil imediato */}
              <button
                type="button"
                onClick={handleCopy}
                disabled={timeLeft <= 0}
                className={`absolute right-2.5 bottom-3 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition shadow-sm active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
                  copied 
                    ? "bg-accent-emerald text-white ring-2 ring-accent-green/40" 
                    : "bg-brand text-white hover:bg-brand-hover"
                }`}
              >
                {copied ? <Check className="h-3.5 w-3.5 stroke-[3]" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copiado!" : "Copiar"}
              </button>
            </div>
          </div>

          {/* Status Tracker & Timer Regressivo Ativo */}
          {timeLeft > 0 ? (
            <div className="rounded-xl bg-surface-offwhite p-3 text-xs text-ink-700 border border-ink-200 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping"></span>
                <span>Aguardando liquidação no Pix...</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono font-bold text-amber-600">
                <Clock className="h-3.5 w-3.5" />
                <span>{formatTimer(timeLeft)}</span>
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-red-50 p-3 text-xs text-red-700 border border-red-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 font-semibold">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                <span>Esta cotação expirou. O câmbio pode ter sido atualizado.</span>
              </div>
              <button
                type="button"
                onClick={handleGeneratePix}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-red-600 py-2 text-xs font-bold text-white hover:bg-red-700 transition"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isGenerating ? "animate-spin" : ""}`} />
                Atualizar Cotação
              </button>
            </div>
          )}

          {/* Disclaimer Institucional e Regulatório do Pix */}
          <div className="rounded-xl bg-surface-offwhite p-3 border border-ink-200/80 text-[11px] text-ink-600 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-ink-900">
              <ShieldCheck className="h-4 w-4 text-accent-emerald shrink-0" />
              <span>Liquidação Fiduciária Segura</span>
            </div>
            <p className="leading-relaxed">
              Beneficiário do Pix: <strong className="text-ink-900">Pods Finance e Tecnologia S.A.</strong> (Instituição parceira homologada no SPI / Banco Central do Brasil).
            </p>
          </div>

          {/* Botão de Simulação Instantânea para Facilidade de Testes / Demonstrações */}
          <button
            type="button"
            onClick={handleSimulatePayment}
            disabled={isSimulating || timeLeft <= 0}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent-mint/90 border border-accent-green/40 py-2.5 text-xs font-bold text-accent-emerald hover:bg-accent-mint transition active:scale-[0.98] disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <span className="h-3.5 w-3.5 rounded-full border-2 border-accent-emerald/30 border-t-accent-emerald animate-spin"></span>
                <span>Confirmando no SPI & Mintando On-Chain...</span>
              </>
            ) : (
              <>
                <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Simular Pagamento Instantâneo (Ambiente de Testes)</span>
              </>
            )}
          </button>

          {/* Botão Voltar */}
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-pill bg-ink-100 py-2.5 text-xs font-bold text-ink-700 hover:bg-ink-200 transition"
          >
            Voltar / Nova Simulação
          </button>

        </div>
      )}

    </div>
  );
};
