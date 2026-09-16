import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface StepsProps {
  onOpenContact?: () => void;
}

export const StepsSection: React.FC<StepsProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: "Passo 1",
      action: "Conecte",
      desc: "Centralize os pontos de contato e organize sua estrutura operacional."
    },
    {
      number: "Passo 2",
      action: "Organize",
      desc: "Relacione clientes, oportunidades, equipe e informações em um mesmo contexto."
    },
    {
      number: "Passo 3",
      action: "Evolua",
      desc: "Use prioridades, automações e Inteligência Artificial para dar mais ritmo à operação."
    }
  ];

  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section id="como-funciona" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
          <span>IMPLANTAÇÃO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Como o AITOMat entra na operação.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Sem complexidade técnica excessiva. Três etapas claras para colocar sua operação conectada em prática.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-all"
          >
            <div>
              <span className="font-mono text-xs font-bold text-[#f97316] bg-orange-500/10 border border-orange-500/30 px-2.5 py-1 rounded-md inline-block mb-4">
                {s.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{s.action}</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-xs text-zinc-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Etapa estruturada</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleCtaClick}
          className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-8 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-all border border-orange-400/40 shadow-md cursor-pointer"
        >
          <span>Solicitar Demonstração</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
