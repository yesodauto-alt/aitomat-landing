import React from "react";
import { Zap, Radio, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface AutomationProps {
  onOpenContact?: () => void;
}

export const AutomationSection: React.FC<AutomationProps> = ({ onOpenContact }) => {
  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      {/* Part 1: Automação Conectada */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <Zap className="w-3.5 h-3.5 text-[#f97316]" />
          <span>AUTOMAÇÃO OPERACIONAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Automatize processos sem perder o contexto.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          A máquina executa. O humano volta a pensar. Crie fluxos automáticos que eliminam tarefas repetitivas, mantêm a operação no ritmo certo e garantem que nenhum cliente fique sem acompanhamento.
        </p>
      </div>

      {/* 3 Strategic Automation Attributes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
          <span className="font-mono text-xs font-bold text-[#f97316] block mb-2">01</span>
          <h3 className="text-sm font-bold text-white mb-2">Triagem &amp; Roteamento</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Distribua conversas imediatamente entre atendentes e departamentos por especialidade ou rodízio inteligente.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
          <span className="font-mono text-xs font-bold text-[#f97316] block mb-2">02</span>
          <h3 className="text-sm font-bold text-white mb-2">Lembretes &amp; Follow-ups</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Acione avisos automáticos e reengaje clientes que aguardam retorno, sem depender da memória dos vendedores.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800">
          <span className="font-mono text-xs font-bold text-[#f97316] block mb-2">03</span>
          <h3 className="text-sm font-bold text-white mb-2">Atualização Automática do CRM</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Cada etapa concluída no atendimento movimenta o status do lead no funil, mantendo a gestão informada em tempo real.
          </p>
        </div>
      </div>

      {/* Part 2: WhatsApp & Meta API Cloud */}
      <div className="p-8 sm:p-12 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5" />
            <span>CANAIS OFICIAIS</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            O atendimento acontece onde seu cliente está: no WhatsApp.
          </h3>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            O AITOMat conecta sua empresa diretamente à API Oficial da Meta (WhatsApp Business Platform). Segurança institucional em nuvem, sem risco de bloqueio e com toda a equipe atendendo no mesmo número.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Conexão em nuvem sem risco de bloqueio</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Múltiplos atendentes em um só número</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-full lg:w-auto">
          <button
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold px-7 py-3.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-all border border-orange-400/40 shadow-md cursor-pointer"
          >
            <span>Solicitar Demonstração</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
