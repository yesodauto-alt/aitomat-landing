import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductCarousel } from "./ProductCarousel";
import { WHATSAPP_LINK } from "../constants";

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section id="inicio" className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Category Pill with 70% Autonomous Highlight */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 shadow-inner">
            <span className="flex h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-[#f97316] font-semibold">AITOMat</span>
            <span className="text-zinc-600">|</span>
            <span>Sistema 70% Autônomo de Operação Comercial</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.14]">
            Sua operação comercial,
            <br />
            atendimento e inteligência
            <br />
            <span className="text-[#f97316] font-extrabold underline decoration-[#f97316]/40 underline-offset-8">
              em um só lugar.
            </span>
          </h1>

          {/* Subheadline - Direct Benefit & Outcome */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Atendimento, vendas e IA no mesmo lugar — para você nunca mais perder um lead. O AITOMat opera 70% da rotina de forma autônoma enquanto sua equipe decide e fecha.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-all border border-orange-400/40 shadow-xl shadow-orange-950/40 cursor-pointer"
            >
              <span>Solicitar Demonstração</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#plataforma"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-7 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 rounded-lg transition-all border border-zinc-800 cursor-pointer"
            >
              <span>Conhecer a Plataforma</span>
            </a>
          </div>

          {/* Refined Support Row - 4 Direct Client Outcomes */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
              <span>Atendimento e triagem por intenção 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
              <span>Resumos automáticos e histórico no CRM</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
              <span>Próximas ações e follow-ups sugeridos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#f97316]" />
              <span>Controle comercial e de CAC unificado</span>
            </div>
          </div>
        </div>

        {/* Product Carousel Showcase - Matching TechPro reference effect */}
        <ProductCarousel />
      </div>
    </section>
  );
};
