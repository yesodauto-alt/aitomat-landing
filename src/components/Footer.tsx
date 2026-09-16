import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { WHATSAPP_LINK, APP_URL } from "../constants";

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.open(WHATSAPP_LINK, "_blank");
    }
  };

  return (
    <footer className="bg-[#08090a] border-t border-zinc-800/80 py-12 sm:py-16 relative overflow-hidden text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-1 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1">
                <img src="/iconeyesod-9b6b9.png" alt="AITOMat Logo" className="w-5 h-5 object-contain" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                AITO<span className="text-[#f97316]">Mat</span>
              </span>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Plataforma inteligente para operação comercial, atendimento e automação desenvolvida pela Yesod Automation.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Infraestrutura Cloud &amp; Meta API Oficial</span>
            </div>
          </div>

          {/* Col 2: Plataforma Links */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Plataforma
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#plataforma" className="hover:text-white transition-colors">
                  Plataforma
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#inteligencia" className="hover:text-white transition-colors">
                  Inteligência Artificial
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Empresa & Atendimento */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Empresa
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
              <li>
                <span className="text-zinc-300 font-semibold">Yesod Automation</span>
              </li>
              <li>
                <button
                  onClick={handleCtaClick}
                  className="text-left text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Entrar em Contato
                </button>
              </li>
              <li>
                <button
                  onClick={handleCtaClick}
                  className="text-left text-[#f97316] hover:text-orange-400 transition-colors cursor-pointer font-semibold"
                >
                  Solicitar Demonstração
                </button>
              </li>
              <li>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <span>Entrar no Sistema</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Governança & Segurança */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4 font-semibold">
              Segurança &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
              <li>
                <span className="hover:text-zinc-300 transition-colors cursor-pointer">Termos de Uso</span>
              </li>
              <li>
                <span className="hover:text-zinc-300 transition-colors cursor-pointer">Política de Privacidade</span>
              </li>
              <li className="pt-2">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400">
                  <span className="text-zinc-300 font-semibold block mb-0.5">Operação Corporativa</span>
                  Centralize atendimento e CRM em um ecossistema único.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} AITOMat • Yesod Automation. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button onClick={handleCtaClick} className="hover:text-zinc-300 cursor-pointer">
              Atendimento Comercial
            </button>
            <span>•</span>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300">
              Acesso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
