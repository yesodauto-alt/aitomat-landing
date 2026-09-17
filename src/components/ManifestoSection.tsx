import React from "react";
import { Shield } from "lucide-react";

export const ManifestoSection: React.FC = () => {
  const shortPhrases = [
    {
      number: "01",
      phrase: "A máquina executa. O humano volta a pensar."
    },
    {
      number: "02",
      phrase: "IA não é custo. É tempo devolvido."
    },
    {
      number: "03",
      phrase: "O AITOMat conduz a operação. A equipe decide e fecha."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      {/* 3 Impact Phrases Grid */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold block mb-2">
            Visão &amp; Propósito
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Como Pensamos a Operação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {shortPhrases.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <span className="font-mono text-xs text-[#f97316] font-bold mb-3">{item.number}</span>
              <p className="text-sm sm:text-base text-white font-semibold leading-snug">{item.phrase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Manifesto Box */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-zinc-900/30 border border-zinc-800 relative">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#f97316] font-semibold">
          <Shield className="w-4 h-4" />
          <span>YESOD AUTOMATION • VISÃO OPERACIONAL</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <p className="font-semibold text-white text-sm sm:text-base">
            O AITOMat é um produto desenvolvido pela Yesod Automation para eliminar operações fragmentadas.
          </p>
          <p className="text-zinc-400">
            Muitas empresas perdem vendas e sobrecarregam suas equipes usando WhatsApp em celulares individuais, planilhas soltas e IAs que respondem mensagens mas não alimentam o CRM.
          </p>
          <p className="text-zinc-200 font-medium pt-1">
            Nossa solução unifica atendimento oficial da Meta, CRM, automações e Inteligência Artificial em um único sistema 70% autônomo: a máquina conduz a rotina comercial com precisão para que sua equipe tenha tempo e clareza para negociar e fechar.
          </p>
        </div>
      </div>
    </section>
  );
};
