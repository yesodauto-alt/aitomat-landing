import React from "react";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

export const ProblemSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider font-semibold block mb-3">
          O Desafio Operacional
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          Sua operação não deveria depender de informações espalhadas.
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
          Conversas desconectadas, clientes em bases separadas, oportunidades sem acompanhamento, tarefas dependendo de memória e falta de contexto entre atendimento, comercial e gestão. O AITOMat resolve isso ao centralizar a operação e transformar dados em ação.
        </p>
      </div>

      {/* Conceptual Contrast Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card: Operação Fragmentada */}
        <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-6">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Quando a operação está fragmentada</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span>Atendimentos distribuídos em celulares individuais sem visibilidade da gestão.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span>Oportunidades comerciais esquecidas por falta de priorização e prazos claros.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span>Ferramentas isoladas de IA que respondem mensagens mas não atualizam o CRM.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                <span>Dados de clientes perdidos entre planilhas, notas soltas e históricos apagados.</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-zinc-800/60 text-[11px] text-zinc-500 font-mono">
            Resultado: Lentidão, perda de receita e sobrecarga da equipe
          </div>
        </div>

        {/* Card: Operação Conectada com AITOMat */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 border border-orange-500/30 flex flex-col justify-between shadow-xl shadow-orange-950/20">
          <div>
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#f97316] flex items-center justify-center mb-6">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Com o AITOMat unificando tudo</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                <span>Atendimento, clientes e histórico integrados em um único ambiente seguro.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                <span>Prioridades claras destacando exatamente onde agir para fechar mais vendas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                <span>Inteligência Artificial que participa da rotina, gerando resumos e triagem.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 flex-shrink-0" />
                <span>Equipe com contexto compartilhado em tempo real para tomar decisões rápidas.</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 pt-4 border-t border-orange-500/20 text-[11px] text-[#f97316] font-mono">
            Resultado: Processos consistentes, clientes acompanhados e mais eficiência
          </div>
        </div>
      </div>
    </section>
  );
};
