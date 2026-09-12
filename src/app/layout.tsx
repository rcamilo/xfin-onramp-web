import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastPix · Do seu Pix para USDC na Base em 15 segundos",
  description: "Compre USDC na rede Base direto via Pix sem custódia e com liquidação on-chain instantânea auditada no Basescan.",
  keywords: ["Pix", "USDC", "Base", "Crypto", "On-ramp", "FastPix", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
