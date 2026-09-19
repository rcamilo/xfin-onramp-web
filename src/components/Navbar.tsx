"use client";

import React from "react";
import { ArrowUpRight, UserCheck, LayoutDashboard, ShieldCheck } from "lucide-react";

interface NavbarProps {
  currentTab: 'landing' | 'dashboard';
  setCurrentTab: (tab: 'landing' | 'dashboard') => void;
  isAuthenticated: boolean;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  isAuthenticated,
  onOpenAuth,
}) => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-200 bg-white/90 backdrop-blur-md border-b border-ink-200">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* XFIN Brand Logo */}
        <button 
          type="button"
          onClick={() => setCurrentTab('landing')}
          className="flex cursor-pointer flex-col items-start gap-0.5 transition hover:opacity-95 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded"
          aria-label="Ir para a página inicial da XFIN"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-[-0.03em] text-ink-900">
              xfin<span className="text-brand">.financial</span>
            </span>
            <span className="rounded-full bg-brand-light px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand border border-brand/20">
              On-Ramp
            </span>
          </div>
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-ink-500">
            Institutional Base Gateway · Mainnet
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-medium text-ink-700">
          <button 
            onClick={() => setCurrentTab('landing')}
            className={`transition hover:text-brand ${currentTab === 'landing' ? 'text-brand font-semibold' : ''}`}
          >
            Visão Geral
          </button>
          <a href="#como-opera" className="transition hover:text-brand">
            Como Opera
          </a>
          <a href="#arquitetura" className="transition hover:text-brand">
            Segurança & Ledger
          </a>
          <a 
            href="https://basescan.org/token/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-brand"
          >
            USDC Base
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </nav>

        {/* Right CTA / Auth & Languages */}
        <div className="flex items-center gap-3">
          {/* Base Mainnet status badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-ink-100/70 px-3 py-1 text-[11px] font-semibold text-ink-700">
            <span className="h-2 w-2 rounded-full bg-accent-green glow-emerald"></span>
            Base Mainnet
          </div>

          {/* Languages Selector */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-ink-200 bg-white/70 p-1">
            <span className="rounded-full bg-brand-dark px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              pt
            </span>
            <span className="rounded-full px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500 hover:text-ink-900 cursor-pointer">
              en
            </span>
          </div>

          {isAuthenticated ? (
            <button
              onClick={() => setCurrentTab(currentTab === 'dashboard' ? 'landing' : 'dashboard')}
              className="flex items-center gap-2 rounded-pill bg-brand-dark px-4 py-2 text-xs font-semibold text-white shadow-pop transition hover:bg-ink-900 active:scale-95"
            >
              <LayoutDashboard className="h-3.5 w-3.5 text-accent-green" />
              {currentTab === 'dashboard' ? 'Ver Site' : 'Painel do Cliente'}
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 rounded-pill bg-brand px-4 py-2 text-xs font-semibold text-white glow-green-btn transition hover:bg-brand-hover active:scale-95"
            >
              <UserCheck className="h-3.5 w-3.5" />
              Área do Cliente
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
