import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "../constants";

interface FaqProps {
  onOpenContact?: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenContact }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "O que significa o AITOMat ser 70% autônomo?",
      a: "Significa que o sistema assume a maior parte do trabalho braçal da operação: atende 24/7, faz a triagem por intenção, resume conversas, atualiza o CRM, organiza as prioridades da operação para sua equipe saber quais leads estão prontos para comprar agora e o tempo do último contato, sugerindo as próximas ações. A sua equipe não perde tempo com rotinas mecânicas e foca onde o humano é indispensável: negociar, tomar decisões e fechar vendas."
    },
    {
      q: "O AITOMat utiliza a API Oficial do WhatsApp?",
      a: "Sim. O AITOMat conecta-se diretamente à API Oficial da Meta (WhatsApp Business Platform). Isso garante infraestrutura estável em nuvem, conformidade total, segurança para o número da sua empresa e zero risco de bloqueio."
    },
    {
      q: "Como múltiplos atendentes trabalham no mesmo número oficial?",
      a: "Toda a sua equipe comercial e de atendimento atende através de um único número oficial. É possível organizar os atendentes por departamentos (Comercial, Suporte, Financeiro), transferir conversas com 1 clique e manter todo o histórico preservado."
    },
    {
      q: "Como a plataforma ajuda no controle de marketing e CAC?",
      a: "O AITOMat centraliza a origem de cada lead, o canal de entrada e o avanço no funil. Isso permite à gestão acompanhar com precisão quais canais trazem vendas reais e qual é o custo real de aquisição de cliente (CAC)."
    },
    {
      q: "O AITOMat é um produto da Yesod Automation?",
      a: "Sim. O AITOMat é um produto proprietário desenvolvido e mantido pela Yesod Automation, empresa especializada em automação e Inteligência Artificial aplicada a operações reais. Nossa equipe acompanha o diagnóstico e a implantação na sua empresa."
    }
  ];

  const handleCtaClick = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <section id="faq" className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#f97316]" />
          <span>DÚVIDAS FREQUENTES</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Perguntas Frequentes
        </h2>
        <p className="mt-3 text-zinc-400 text-xs sm:text-sm">
          Tudo o que você precisa saber sobre a arquitetura e operação do AITOMat.
        </p>
      </div>

      <div className="space-y-3 mb-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="overflow-hidden border border-zinc-800 bg-zinc-900/40 rounded-xl transition-all duration-200"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-zinc-800/60 transition-colors cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-semibold pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#f97316]" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct Contact Banner */}
      <div className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="text-sm font-bold text-white">Ainda tem dúvidas sobre a operação?</h4>
          <p className="text-xs text-zinc-400">Converse diretamente com os especialistas da Yesod.</p>
        </div>
        <button
          onClick={handleCtaClick}
          className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg transition-all border border-orange-400/40 shadow-md flex-shrink-0 cursor-pointer"
        >
          <span>Falar com a Yesod</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
