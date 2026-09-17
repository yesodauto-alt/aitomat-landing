import React from "react";
import { ArrowRight, MessageSquare, HeartHandshake, TrendingUp, Flag, CheckSquare } from "lucide-react";

export const ConnectedFlowSection: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Atendimento",
      desc: "Triagem ágil e classificação por intenção para responder ao cliente na hora."
    },
    {
      icon: HeartHandshake,
      title: "Relacionamento",
      desc: "Histórico completo e dados cadastrais sem perder o contexto da conversa."
    },
    {
      icon: TrendingUp,
      title: "Oportunidade",
      desc: "Conversas transformadas em demandas comerciais sem retrabalho manual."
    },
    {
      icon: Flag,
      title: "Prioridade",
      desc: "Destaque automático de quais leads estão prontos para comprar agora."
    },
    {
      icon: CheckSquare,
      title: "Próxima Ação",
      desc: "Tarefas e follow-ups sugeridos para o vendedor fechar com rapidez."
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
          O AITOMat conecta atendimento, CRM, automações e Inteligência Artificial para que cada parte da sua empresa trabalhe com o mesmo contexto.
        </p>
      </div>

      {/* 5-Step Connected Flow Visual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-16">
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
                <span className="font-mono text-[10px] text-zinc-500 font-bold block mb-1">Passo 0{idx + 1}</span>
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

      {/* Central Outcome Box: O AITOMat conduz, a equipe decide e fecha */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/40 to-zinc-950 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3 text-left">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#f97316] font-semibold">
            MENSAGEM CENTRAL
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            O AITOMat conduz a operação. Sua equipe decide e fecha.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            A máquina executa o operacional repetitivo para o seu time voltar a pensar. Quando atendimento, CRM e IA trabalham juntos, o vendedor recebe o contato pronto com resumo, contexto e próxima ação sugerida.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto flex-shrink-0">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-xl sm:text-2xl font-bold text-[#f97316] block">70%</span>
            <span className="text-[11px] text-zinc-400">Rotina Autônoma</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-center">
            <span className="text-xl sm:text-2xl font-bold text-white block">100%</span>
            <span className="text-[11px] text-zinc-400">Contexto Preservado</span>
          </div>
        </div>
      </div>
    </section>
  );
};
