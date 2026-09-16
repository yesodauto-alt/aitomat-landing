import React from "react";
import { Bot, Sparkles, BrainCircuit, CheckCircle2 } from "lucide-react";

export const IntelligenceSection: React.FC = () => {
  return (
    <section id="inteligencia" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
          <span>INTELIGÊNCIA APLICADA</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          IA aplicada à operação,
          <br />
          <span className="text-[#f97316]">não isolada dela.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          No AITOMat, a Inteligência Artificial pode apoiar o atendimento, organizar contexto, contribuir para processos e trabalhar junto com a operação da empresa.
        </p>
      </div>

      {/* Two Mature Intelligence Layers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Layer 1: IA Assistente */}
        <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#f97316] flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50">
                Camada 01 • Atendimento Ativo
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">IA Assistente</h3>
            <p className="text-xs font-semibold text-[#f97316] mb-4">
              Atua na linha de frente do relacionamento com o cliente.
            </p>

            <ul className="space-y-3 text-xs text-zinc-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Interpreta conversas em linguagem natural e identifica contexto e intenção.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Realiza triagem ágil e qualificação de acordo com as regras da sua empresa.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Encaminha atendimentos para o setor ou atendente correto com histórico preservado.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 font-mono">
            Objetivo: Resposta rápida com contexto humano preservado
          </div>
        </div>

        {/* Layer 2: IA Interna */}
        <div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-[#f97316] flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/50">
                Camada 02 • Inteligência Operacional
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">IA Interna</h3>
            <p className="text-xs font-semibold text-[#f97316] mb-4">
              Atua nos bastidores alimentando a gestão comercial.
            </p>

            <ul className="space-y-3 text-xs text-zinc-400 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Gera resumos automáticos das conversas e atualiza o histórico do lead no CRM.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Avalia temperatura comercial e sugere ações prioritárias para a equipe de vendas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                <span>Alimenta automações e follow-ups estratégicos sem exigir tarefas manuais repetitivas.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-zinc-800/80 text-[11px] text-zinc-500 font-mono">
            Objetivo: Visão estratégica e ganho de tempo para os vendedores
          </div>
        </div>
      </div>
    </section>
  );
};
