import React from "react";
import { Flag, Clock, Flame, CheckCircle2, Sparkles } from "lucide-react";

export const PrioritiesSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <Flag className="w-3.5 h-3.5 text-[#f97316]" />
          <span>DIFERENCIAL OPERACIONAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Não basta saber o que aconteceu.
          <br />
          <span className="text-[#f97316]">É preciso saber onde agir agora.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          O AITOMat organiza sinais da operação para destacar o que exige atenção: respostas pendentes, oportunidades em andamento, tarefas, recência, temperatura comercial e próximos passos.
        </p>
      </div>

      {/* Hero Visual Card for Priorities with Cinematic Showcase */}
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Top Discreet Callout Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#f97316] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Respostas Pendentes</span>
              <span className="text-[11px] text-zinc-400">Tempo de espera controlado sem clientes esquecidos.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Temperatura Comercial</span>
              <span className="text-[11px] text-zinc-400">Identificação instantânea de leads quentes e prontos.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Próxima Ação Definida</span>
              <span className="text-[11px] text-zinc-400">Cada conversa tem um responsável e uma tarefa clara.</span>
            </div>
          </div>
        </div>

        {/* Real Screenshot Preview with Premium Product Showcase Frame */}
        <div className="relative [perspective:1400px]">
          {/* Backlight Halo behind the panel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-gradient-to-tr from-orange-500/20 via-indigo-600/20 to-violet-600/20 blur-[110px] rounded-full pointer-events-none -z-10" />

          {/* Luminous Rim Gradient Frame */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-orange-500/30 to-indigo-500/20 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.95),0_0_40px_-10px_rgba(249,115,22,0.25)]">
            <div className="relative rounded-[15px] bg-[#0a0b0e] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/90 border-b border-white/[0.07] backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
                </div>

                <div className="flex items-center gap-2 px-3 py-0.5 bg-zinc-900/90 border border-white/10 rounded-full text-[11px] font-mono text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
                  <span>Painel Operacional de Prioridades &amp; Temperatura Comercial</span>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 rounded">
                  <Sparkles className="w-3 h-3" />
                  <span>Score Ativo</span>
                </div>
              </div>

              {/* High Definition Screenshot */}
              <div className="relative overflow-hidden bg-[#07080a]">
                <img
                  src="/aitomat-screen-prioridades.png"
                  alt="Painel de Prioridades do AITOMat com Temperatura Comercial"
                  className="w-full h-auto object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Horizon Line & Contact Shadow */}
          <div className="w-[85%] h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/40 via-indigo-500/40 to-transparent mx-auto mt-4 blur-[0.5px]" />
          <div className="w-[90%] h-8 bg-gradient-to-r from-transparent via-[#f97316]/15 via-indigo-500/15 to-transparent blur-xl mx-auto -mt-3 pointer-events-none" />
        </div>

        {/* Impact Banner */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-orange-950/30 via-zinc-900/60 to-zinc-950 border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#f97316] block mb-1">
              Foco &amp; Produtividade
            </span>
            <p className="text-base sm:text-lg font-bold text-white">
              Menos tempo procurando informação. Mais tempo tomando ação.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800">
            Operação Orientada a Ação
          </span>
        </div>
      </div>
    </section>
  );
};
