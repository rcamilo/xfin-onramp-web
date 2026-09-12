import { CustomerStatusResponse, SwapQuoteRequest, SwapQuoteResponse } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://financial-infrastructure-api-asfbne2rqq-rj.a.run.app";

export async function fetchCustomerStatus(phone: string): Promise<CustomerStatusResponse | null> {
  const cleanPhone = phone.replace(/\D/g, "");
  try {
    const res = await fetch(`${API_BASE_URL}/api/v1/customers/${cleanPhone}/status`, {
      method: "GET",
      headers: { "Accept": "application/json" },
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Falha ao carregar dados do cliente: HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("fetchCustomerStatus error:", err);
    return null;
  }
}

export async function createSwap(req: SwapQuoteRequest): Promise<SwapQuoteResponse> {
  const cleanPhone = req.phone.replace(/\D/g, "");
  const amountCents = Math.round(req.amount * 100);

  const res = await fetch(`${API_BASE_URL}/api/v1/swaps`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customer_phone: cleanPhone,
      amount: amountCents,
      source_currency: "BRL",
      target_currency: req.targetAsset,
      origin_chain: "fiat",
      destination_chain: req.destinationChain,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error || `Erro ao gerar cotação: HTTP ${res.status}`);
  }

  const data = await res.json();
  return {
    intent_id: data.intent?.id || data.id,
    amount_in_brl: req.amount,
    expected_usdc: (data.intent?.expected_amount_out || 0) / 1000000,
    pix_copy_paste: data.payment_instructions?.pix_string || "",
    pix_qr_code: data.payment_instructions?.pix_qr_code || "",
    expires_at: data.payment_instructions?.expires_at || new Date(Date.now() + 10 * 60000).toISOString(),
    network: req.destinationChain,
    status: data.intent?.state || "PROCESSING",
  };
}

export function formatMaskedWallet(address: string): string {
  if (!address || address.length < 10) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatBRL(amountReais: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amountReais);
}

export function formatUSDC(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(amount) + " USDC";
}

export function getBlockExplorerURL(chain: string, txHash: string): string {
  const clean = txHash.trim();
  switch (chain.toLowerCase()) {
    case "base":
      return `https://basescan.org/tx/${clean}`;
    case "polygon":
      return `https://polygonscan.com/tx/${clean}`;
    default:
      return `https://basescan.org/tx/${clean}`;
  }
}
