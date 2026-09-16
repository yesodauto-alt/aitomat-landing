import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface FinalCtaProps {
  onOpenContact?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ onOpenContact }) => {
  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-16 text-center overflow-hidden shadow-2xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-[#f97316]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERAÇÃO CONECTADA</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Sua operação já gera informação todos os dias.
            <br />
            <span className="text-[#f97316]">Agora transforme essa informação em ação.</span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Conheça uma plataforma criada para conectar atendimento, gestão comercial, automação e Inteligência Artificial dentro da mesma operação.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
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
        </div>
      </div>
    </section>
  );
};
