import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "FastPix · Do seu Pix para USDC na Base em 15 segundos",
  description: "Compre USDC na rede Base direto via Pix sem custódia e com liquidação on-chain instantânea auditada no Basescan.",
  keywords: ["Pix", "USDC", "Base", "Crypto", "On-ramp", "FastPix", "XFIN", "Web3"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased text-[#0b1430] bg-[#f6f9fd] selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

