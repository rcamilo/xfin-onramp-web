"use client";

import React from "react";
import { Zap, ShieldCheck, ExternalLink, UserCheck, LayoutDashboard, Coins } from "lucide-react";

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
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b1430]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentTab('landing')}
          className="flex cursor-pointer items-center gap-2.5 transition hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 shadow-fastpix-glow">
            <Coins className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">XFIN</span>
            <span className="ml-1.5 rounded bg-blue-500/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-400 border border-blue-500/20">
              On-Ramp
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button 
            onClick={() => setCurrentTab('landing')}
            className={`transition hover:text-white ${currentTab === 'landing' ? 'text-blue-400 font-semibold' : ''}`}
          >
            Início
          </button>
          <a href="#como-funciona" className="transition hover:text-white">
            Como Funciona
          </a>
          <a href="#seguranca" className="transition hover:text-white">
            Segurança & Ledger
          </a>
          <a 
            href="https://basescan.org/token/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition hover:text-white"
          >
            USDC na Base
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </nav>

        {/* Right CTA / Auth */}
        <div className="flex items-center gap-3">
          {/* Status Badge */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-blue-950/60 px-3 py-1 text-xs font-medium text-blue-300 border border-blue-800/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Base Mainnet
          </div>

          {isAuthenticated ? (
            <button
              onClick={() => setCurrentTab(currentTab === 'dashboard' ? 'landing' : 'dashboard')}
              className="flex items-center gap-2 rounded-pill bg-surface-raised px-4 py-2 text-xs font-semibold text-white border border-blue-500/30 shadow-fastpix-2 transition hover:bg-blue-900/40"
            >
              <LayoutDashboard className="h-4 w-4 text-blue-400" />
              {currentTab === 'dashboard' ? 'Ver Início' : 'Área Logada'}
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 rounded-pill bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-fastpix-glow transition hover:from-blue-500 hover:to-blue-600 active:scale-95"
            >
              <UserCheck className="h-4 w-4" />
              Área do Cliente (Firebase)
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
