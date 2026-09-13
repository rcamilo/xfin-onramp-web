import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XFIN · Infraestrutura On-Ramp de Pix para USDC na Base",
  description: "Liquidação cambial instantânea de Pix para USDC na rede Base. Sem custódia de terceiros, com reconciliação tripla e auditoria pública no Basescan.",
  keywords: ["XFIN", "On-Ramp", "Pix", "USDC", "Base", "Stablecoins", "Fintech", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased text-[#051c14] bg-[#f6faf8] selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
