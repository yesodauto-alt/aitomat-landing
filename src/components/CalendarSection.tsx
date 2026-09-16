import React from "react";
import { Calendar, BellRing, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface CalendarSectionProps {
  onOpenContact?: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onOpenContact }) => {
  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
          <span>AGENDA &amp; EXECUÇÃO</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          O próximo passo também faz parte da operação.
          <br />
          <span className="text-[#f97316]">Agenda integrada ao atendimento.</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          No AITOMat, a agenda não é isolada do CRM. Cada reunião, demonstração ou retorno comercial fica atrelado ao histórico de conversa do cliente e ao responsável pela ação.
        </p>
      </div>

      {/* Showcase Stage */}
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Top 3 Strategic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-[#f97316] flex items-center justify-center flex-shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Vinculado ao Cliente</span>
              <span className="text-[11px] text-zinc-400">Compromisso visível na timeline de atendimento do contato.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <BellRing className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Redução de No-Show</span>
              <span className="text-[11px] text-zinc-400">Lembretes automáticos via WhatsApp antes de cada reunião.</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">Continuidade Operacional</span>
              <span className="text-[11px] text-zinc-400">Após a reunião, registre o desfecho e avance o funil comercial.</span>
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
                  <span>Calendário Operacional &amp; Gestão de Agendamentos</span>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 rounded">
                  <span>Sincronizado</span>
                </div>
              </div>

              {/* High Definition Screenshot */}
              <div className="relative overflow-hidden bg-[#07080a]">
                <img
                  src="/aitomat-screen-calendario.png"
                  alt="Calendário Operacional do AITOMat com agendamentos e horários disponíveis"
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

        {/* Action Button */}
        <div className="text-center pt-2">
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 text-xs font-semibold px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg border border-zinc-700/80 transition-all hover:border-orange-500/50 cursor-pointer shadow-sm"
          >
            <span>Ver Como Funciona a Agenda</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f97316]" />
          </button>
        </div>
      </div>
    </section>
  );
};
