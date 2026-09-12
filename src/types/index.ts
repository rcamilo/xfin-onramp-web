export interface Wallet {
  id: string;
  address: string;
  chain: string;
  label: string;
  type: 'SMART_ACCOUNT' | 'EOA';
  is_default: boolean;
  created_at?: string;
}

export interface Customer {
  id: string;
  phone: string;
  name: string;
  tax_id_masked: string;
  tax_id_last4?: string;
  kyc_status: 'not_started' | 'pending' | 'approved' | 'rejected';
  default_wallet_id?: string;
  wallets: Wallet[];
  created_at?: string;
}

export interface Balances {
  BRL_cents: number;
  USDC_micro: number;
  USDC_decimal: number;
}

export interface CustomerStatusResponse {
  customer: Customer;
  balances: Balances;
}

export interface SwapQuoteRequest {
  phone: string;
  amount: number; // in Reais (e.g. 50.00)
  targetAsset: 'USDC' | 'USDT';
  destinationChain: 'base' | 'polygon';
  destinationWallet?: string;
}

export interface SwapQuoteResponse {
  intent_id: string;
  amount_in_brl: number;
  expected_usdc: number;
  pix_copy_paste: string;
  pix_qr_code?: string;
  expires_at: string;
  network: string;
  status: 'PENDING' | 'PROCESSING' | 'SETTLED' | 'FAILED';
}

export interface Transaction {
  id: string;
  intent_id: string;
  type: 'BUY' | 'SELL';
  amount_brl: number;
  amount_crypto: number;
  crypto_symbol: string;
  status: 'Aguardando Pix' | 'Processando On-Chain' | 'Confirmado' | 'Falha';
  chain: string;
  wallet_address: string;
  onchain_tx_hash?: string;
  created_at: string;
}
