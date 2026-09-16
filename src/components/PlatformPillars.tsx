import React from "react";
import { MessageSquare, Bot, Kanban, Send, Zap, Users, BarChart3, CheckCircle2 } from "lucide-react";

export const PlatformPillars: React.FC = () => {
  const pillars = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Operação Conectada",
      lead: "Atendimento que não termina na conversa.",
      desc: "Centralize conversas, clientes e histórico para que nenhuma informação importante se perca entre mensagens e ferramentas isoladas.",
      tag: "Jornada Completa"
    },
    {
      number: "02",
      icon: Bot,
      title: "Inteligência Aplicada",
      lead: "IA que participa da rotina, não apenas chatbot.",
      desc: "Interprete contexto, qualifique intenções de compra, resuma conversas no CRM e apoie o time comercial com velocidade.",
      tag: "IA Ativa"
    },
    {
      number: "03",
      icon: Kanban,
      title: "Gestão Comercial Unificada",
      lead: "Relacionamento e oportunidades no mesmo lugar.",
      desc: "Acompanhe cada etapa do pipeline, atribua responsáveis e mantenha clareza sobre o andamento das negociações.",
      tag: "Pipeline & CRM"
    },
    {
      number: "04",
      icon: Send,
      title: "WhatsApp & Canais Oficiais",
      lead: "Comunicação corporativa segura e estável.",
      desc: "Integrado à API Oficial da Meta (WhatsApp Business Platform). Múltiplos atendentes em um só número sem riscos operacionais.",
      tag: "Meta API Oficial"
    },
    {
      number: "05",
      icon: Zap,
      title: "Automações com Contexto",
      lead: "Processos que reduzem trabalho manual.",
      desc: "Triagem ágil, distribuição de leads entre equipes e lembretes automáticos para garantir consistência no atendimento.",
      tag: "Fluxos Ágeis"
    },
    {
      number: "06",
      icon: Users,
      title: "Estrutura para Equipes",
      lead: "Pronto para escalar com segurança.",
      desc: "Divisão por departamentos, níveis refinados de permissão e suporte a organizações multitenant para empresas em crescimento.",
      tag: "Governança"
    },
    {
      number: "07",
      icon: BarChart3,
      title: "Visão Operacional & Decisões",
      lead: "Dados reais para guiar a gestão.",
      desc: "Monitore tempos de resposta, volume de atendimentos e desempenho da operação para aprimorar resultados continuamente.",
      tag: "Métricas"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
          <span>PILARIZAÇÃO OPERACIONAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          7 Pilares que sustentam a operação AITOMat
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Princípios arquiteturais desenvolvidos para proporcionar estabilidade, clareza e ritmo ao dia a dia da sua empresa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className="p-6 bg-zinc-900/40 border border-zinc-800/90 rounded-xl hover:border-zinc-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 bg-zinc-800 border border-zinc-700/80 text-[#f97316] rounded-lg flex items-center justify-center group-hover:border-orange-500/40 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] text-zinc-500 font-bold">{pillar.number}</span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-[#f97316] bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                  {pillar.tag}
                </span>

                <h3 className="text-sm font-bold text-white mb-1 mt-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-zinc-300 mb-2">
                  {pillar.lead}
                </p>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f97316]" />
                <span>Totalmente integrado</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
