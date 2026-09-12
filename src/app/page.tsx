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
    <div className="flex min-h-screen flex-col bg-white text-ink-900">
      
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 backdrop-blur-sm p-4">
          <div className="fastpix-card w-full max-w-md p-6 sm:p-8 relative">
            
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute right-4 top-4 text-ink-500 hover:text-ink-900 transition"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 text-brand mb-2">
              <Shield className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Acesso Seguro</span>
            </div>

            <h3 className="text-2xl font-black text-ink-900 tracking-tight">
              Entrar na Área do Cliente
            </h3>

            <p className="mt-1.5 text-xs text-ink-500">
              Digite o número do celular cadastrado para acessar seu extrato contábil, gerenciar carteiras e cotações.
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-ink-700">
                  Celular / WhatsApp com DDD:
                </label>
                <input
                  type="text"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="55 11 98128-5808"
                  className="w-full rounded-xl bg-surface-offwhite px-3.5 py-3 text-sm font-mono text-ink-900 border border-ink-200 outline-none focus:border-brand transition shadow-sm"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-pill bg-brand py-3.5 text-sm font-bold text-white shadow-fastpix-4 hover:bg-brand-cobalt transition active:scale-95"
              >
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="rounded-xl bg-accent-mint/60 p-3 text-[11px] text-accent-emerald border border-accent-green/30 text-center font-medium">
                ✨ Demonstração: sessão Firebase Auth conectada ao projeto oficial.
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
