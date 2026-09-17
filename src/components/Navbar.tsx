import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090a]/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1 group-hover:border-orange-500/40 transition-colors">
                <img src="/iconeyesod-9b6b9.png" alt="AITOMat Logo" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-bold tracking-tight text-white font-sans">
                  AITO<span className="text-[#f97316]">Mat</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-400 font-medium uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-900/80 border border-zinc-800">
                  um produto Yesod
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              Início
            </a>
            <a href="#plataforma" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              Plataforma
            </a>
            <a href="#como-funciona" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#inteligencia" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              Inteligência
            </a>
            <a href="#faq" className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            {/* Primary Commercial CTA Button in Orange */}
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-all border border-orange-400/40 shadow-md shadow-orange-950/40 cursor-pointer"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleCtaClick}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-[#f97316] text-white rounded-lg cursor-pointer"
            >
              <span>Demonstração</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#08090a] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
          >
            Início
          </a>
          <a
            href="#plataforma"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
          >
            Plataforma
          </a>
          <a
            href="#como-funciona"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
          >
            Como Funciona
          </a>
          <a
            href="#inteligencia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
          >
            Inteligência
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg cursor-pointer"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
