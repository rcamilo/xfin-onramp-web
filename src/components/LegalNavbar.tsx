"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ShieldCheck, FileText, Lock } from "lucide-react";

export const LegalNavbar: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      href: "/termos",
      label: "Termos de Uso",
      icon: FileText,
    },
    {
      href: "/privacidade",
      label: "Privacidade & LGPD",
      icon: Lock,
    },
    {
      href: "/compliance",
      label: "Compliance & BACEN",
      icon: ShieldCheck,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ink-200">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Back Button */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-ink-600 hover:text-ink-900 transition text-xs font-semibold px-2.5 py-1.5 rounded-full hover:bg-ink-100"
            title="Voltar para a página inicial"
          >
            <ArrowLeft className="h-4 w-4 text-brand" />
            <span className="hidden sm:inline">Início</span>
          </Link>

          <div className="h-4 w-[1px] bg-ink-200" />

          <Link href="/" className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-[-0.03em] text-ink-900">
                xfin<span className="text-brand">.financial</span>
              </span>
              <span className="hidden sm:inline-block rounded-full bg-brand-light px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand border border-brand/20">
                Legal & Trust
              </span>
            </div>
          </Link>
        </div>

        {/* Center / Right Links */}
        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center gap-1 bg-surface-offwhite p-1 rounded-full border border-ink-200/80 text-xs font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition text-[12px] font-semibold ${
                    isActive
                      ? "bg-white text-brand shadow-sm border border-brand/20"
                      : "text-ink-600 hover:text-ink-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-brand" : "text-ink-500"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <a
            href="https://basescan.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold text-ink-500 hover:text-brand transition ml-3"
          >
            Basescan
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
        </div>

      </div>
    </header>
  );
};
