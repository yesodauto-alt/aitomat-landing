import React from "react";
import { ArrowRight, MessageSquare, HeartHandshake, TrendingUp, Flag, CheckSquare, RefreshCw } from "lucide-react";

export const ConnectedFlowSection: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Atendimento",
      desc: "Primeiro contato, triagem ágil e escuta ativa multicanal."
    },
    {
      icon: HeartHandshake,
      title: "Relacionamento",
      desc: "Identificação do perfil, dados cadastrais e histórico completo."
    },
    {
      icon: TrendingUp,
      title: "Oportunidade",
      desc: "Registro no pipeline comercial e contextualização da demanda."
    },
    {
      icon: Flag,
      title: "Prioridade",
      desc: "Sinalização por temperatura comercial, urgência e recência."
    },
    {
      icon: CheckSquare,
      title: "Próxima Ação",
      desc: "Atribuição de responsável, tarefas e follow-up estratégico."
    },
    {
      icon: RefreshCw,
      title: "Acompanhamento",
      desc: "Visão contínua da jornada até a conclusão da negociação."
    }
  ];

  return (
    <section id="plataforma" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
          <span>FLUXO OPERACIONAL UNIFICADO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Uma plataforma para conduzir a operação inteira.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          O AITOMat conecta atendimento, relacionamento, oportunidades, automação e inteligência para que cada parte da operação trabalhe com o mesmo contexto.
        </p>
      </div>

      {/* Modern Conceptual Connected Flow Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-16">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors relative group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/80 text-[#f97316] flex items-center justify-center mb-3 group-hover:border-orange-500/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-zinc-500 font-bold block mb-1">0{idx + 1}</span>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-[11px] text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Benefit Highlight: Atendimento + Comercial + Contexto */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-950 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3 text-left">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#f97316] font-semibold">
            Contexto Operacional Sem Ruídos
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Atendimento e vendas trabalhando dentro do mesmo contexto.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Quando a conversa acontece em um lugar e a oportunidade é acompanhada em outro, parte da operação se perde. No AITOMat, atendimento, relacionamento e jornada comercial funcionam conectados, garantindo que o vendedor saiba exatamente o que foi conversado e a gestão tenha controle dos resultados.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto flex-shrink-0">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-xl sm:text-2xl font-bold text-white block">100%</span>
            <span className="text-[11px] text-zinc-400">Histórico Preservado</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-xl sm:text-2xl font-bold text-[#f97316] block">Tempo Real</span>
            <span className="text-[11px] text-zinc-400">Contexto Compartilhado</span>
          </div>
        </div>
      </div>
    </section>
  );
};
