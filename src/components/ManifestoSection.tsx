import React from "react";
import { Shield } from "lucide-react";

export const ManifestoSection: React.FC = () => {
  const shortPhrases = [
    "Sua operação. Mais inteligente.",
    "Do atendimento à venda, tudo conectado.",
    "Inteligência Artificial aplicada à operação de verdade.",
    "Menos ferramentas. Mais integração.",
    "Transforme conversas em dados. Dados em ações. E ações em resultados.",
    "Automatize processos sem perder o contexto humano.",
    "CRM, atendimento e IA trabalhando juntos.",
    "Sua equipe trabalha. A inteligência acompanha. O AITOMat conecta."
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      {/* Short Impact Phrases Grid */}
      <div className="mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold block mb-2">
            Visão &amp; Propósito
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Como Pensamos a Operação</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
          {shortPhrases.map((phrase, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-start gap-3 hover:border-zinc-700 transition-colors"
            >
              <span className="font-mono text-xs text-[#f97316] font-bold mt-0.5">0{idx + 1}</span>
              <p className="text-xs text-zinc-300 font-medium leading-relaxed">{phrase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Manifesto Box */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-zinc-900/30 border border-zinc-800 relative">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#f97316] font-semibold">
          <Shield className="w-4 h-4" />
          <span>POSICIONAMENTO DA MARCA</span>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed">
          <p className="font-semibold text-white text-sm sm:text-base">
            O AITOMat nasceu para resolver uma das maiores dores das empresas modernas: operações fragmentadas.
          </p>
          <p className="text-zinc-400">
            Muitas empresas usam uma ferramenta para conversar no WhatsApp, outra para controlar clientes, planilhas para registrar dados e soluções isoladas de Inteligência Artificial que não conversam com o resto do negócio.
          </p>
          <p className="text-zinc-400">
            O resultado disso são informações perdidas, lentidão no atendimento, falta de acompanhamento comercial e equipes sobrecarregadas com tarefas manuais.
          </p>
          <p className="text-zinc-200 font-medium pt-1">
            O AITOMat conecta esses pontos. Criamos um ecossistema onde atendimento, gestão comercial, processos e inteligência trabalham juntos, permitindo que as empresas atendam melhor, organizem seus processos e tenham mais clareza para crescer.
          </p>
        </div>
      </div>
    </section>
  );
};
