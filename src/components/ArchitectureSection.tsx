import React from "react";
import { MessageSquare, Kanban, Sparkles, Building2, Layers, CheckCircle2 } from "lucide-react";

export const ArchitectureSection: React.FC = () => {
  const blocks = [
    {
      icon: MessageSquare,
      title: "Atendimento & Relacionamento",
      desc: "Comunicação centralizada em múltiplos canais com histórico integrado.",
      items: [
        "Inbox unificado multiagente",
        "WhatsApp integrado via API Oficial Meta",
        "Base consolidada de contatos e contexto 360°"
      ],
      tag: "Relacionamento"
    },
    {
      icon: Kanban,
      title: "Gestão Comercial",
      desc: "Acompanhamento transparente de cada etapa do processo de vendas.",
      items: [
        "Funil de vendas visual em Kanban",
        "Triagem ágil e qualificação de leads",
        "Painel operacional de prioridades por temperatura",
        "Gestão de produtos e propostas comerciais"
      ],
      tag: "Vendas"
    },
    {
      icon: Sparkles,
      title: "Inteligência & Execução",
      desc: "Tecnologia que auxilia ativamente o trabalho da sua equipe.",
      items: [
        "IA Assistente para atendimento e qualificação",
        "IA Interna para resumos e contexto do CRM",
        "Automações de triagem, notificações e retorno",
        "Tarefas, lembretes e controle de calendário"
      ],
      tag: "Produtividade"
    },
    {
      icon: Building2,
      title: "Estrutura Operacional",
      desc: "Governança e escala para empresas de diferentes portes.",
      items: [
        "Gestão de múltiplos atendentes e equipes",
        "Controle refinado de permissões e acessos",
        "Arquitetura em nuvem de alta disponibilidade",
        "Suporte multitenant para diferentes operações"
      ],
      tag: "Governança"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <Layers className="w-3.5 h-3.5 text-[#f97316]" />
          <span>ECOSSISTEMA INTEGRADO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          A arquitetura operacional do AITOMat
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Mais do que ferramentas isoladas, um ecossistema completo onde cada camada fortalece as demais dentro do mesmo fluxo de trabalho.
        </p>
      </div>

      {/* 4 Strategic Blocks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {blocks.map((block, idx) => {
          const Icon = block.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#f97316] border border-zinc-700/80 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold px-2 py-0.5 rounded bg-zinc-800/50 border border-zinc-700/50">
                    {block.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">{block.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{block.desc}</p>

                <ul className="space-y-2.5 text-xs text-zinc-300">
                  {block.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 text-[11px] font-mono text-zinc-500">
                Totalmente integrado à mesma base de dados
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
