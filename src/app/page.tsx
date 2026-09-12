"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DashboardView } from "@/components/DashboardView";
import { Footer } from "@/components/Footer";
import { UserCheck, X, Shield, ArrowRight } from "lucide-react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState<'landing' | 'dashboard'>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [phoneInput, setPhoneInput] = useState<string>("55 11 98128-5808");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setCurrentTab('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentTab('landing');
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0b1430] text-slate-100">
      
      {/* Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isAuthenticated={isAuthenticated}
        onOpenAuth={() => setShowAuthModal(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'landing' ? (
          <>
            <Hero onOpenDashboard={() => {
              if (isAuthenticated) {
                setCurrentTab('dashboard');
              } else {
                setShowAuthModal(true);
              }
            }} />
            <Features />
          </>
        ) : (
          <DashboardView onLogout={handleLogout} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal (WhatsApp Phone / OTP) */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="glass-panel w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-fastpix-card border border-white/10 relative">
            
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5 text-blue-400 mb-2">
              <Shield className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Acesso Seguro</span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">
              Entrar na Área do Cliente
            </h3>

            <p className="mt-1.5 text-xs text-slate-300">
              Digite o número do celular cadastrado para acessar seu extrato, gerenciar suas carteiras e emitir cotações.
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Celular / WhatsApp com DDD:
                </label>
                <input
                  type="text"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="55 11 98128-5808"
                  className="w-full rounded-xl bg-[#08163f] px-3.5 py-3 text-sm font-mono text-white border border-white/10 outline-none focus:border-blue-500 transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-pill bg-gradient-to-r from-blue-600 to-blue-700 py-3 text-sm font-bold text-white shadow-fastpix-glow hover:from-blue-500 hover:to-blue-600 transition active:scale-95"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="rounded-xl bg-blue-950/40 p-3 text-[11px] text-blue-300 border border-blue-800/30 text-center">
                ✨ Usuário de demonstração com saldo e transações reais carregadas.
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
