import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { ConnectedFlowSection } from "./components/ConnectedFlowSection";
import { PrioritiesSection } from "./components/PrioritiesSection";
import { CalendarSection } from "./components/CalendarSection";
import { IntelligenceSection } from "./components/IntelligenceSection";
import { AutomationSection } from "./components/AutomationSection";
import { ArchitectureSection } from "./components/ArchitectureSection";
import { StepsSection } from "./components/StepsSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { FinalCtaSection } from "./components/FinalCtaSection";
import { FaqSection } from "./components/FaqSection";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./constants";

export function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => {
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-white relative antialiased">
      {/* Subtle 32px Grid Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

      {/* Top Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Narrative Flow */}
      <main className="flex-1 w-full relative z-10">
        {/* 1. Hero: Strategic Value & Real Product Carousel Showcase */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. O Problema: Operação fragmentada vs Operação conectada */}
        <ProblemSection />

        {/* 3 & 5. Fluxo Operacional: Atendimento + Comercial + Contexto */}
        <ConnectedFlowSection />

        {/* 4. Prioridades: Diferencial operacional de ação imediata com tela real */}
        <PrioritiesSection />

        {/* 5. Agenda & Calendário Operacional com tela real */}
        <CalendarSection onOpenContact={handleOpenContact} />

        {/* 7. Inteligência Artificial: IA Assistente & IA Interna */}
        <IntelligenceSection />

        {/* 7 & 10. Automação & Canais Oficiais (WhatsApp Meta API Oficial) */}
        <AutomationSection onOpenContact={handleOpenContact} />

        {/* 8. Ecossistema: Arquitetura Operacional Unificada (4 blocos) */}
        <ArchitectureSection />

        {/* 9. Como Funciona: Implantação em 3 etapas claras */}
        <StepsSection onOpenContact={handleOpenContact} />

        {/* Posicionamento da Marca & Frases de Impacto */}
        <ManifestoSection />

        {/* 12. CTA Final */}
        <FinalCtaSection onOpenContact={handleOpenContact} />

        {/* 13. Perguntas Frequentes */}
        <FaqSection onOpenContact={handleOpenContact} />
      </main>

      {/* Footer Institucional */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Modal de Contato & Diagnóstico */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Floating Action Button (FAB) in Orange - Direct Yesod Specialist Contact */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-3 text-xs font-semibold text-white bg-[#f97316] hover:bg-[#ea580c] rounded-full shadow-2xl shadow-orange-950/80 hover:shadow-orange-900/90 transition-all hover:scale-105 border border-orange-400/40 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>Falar com a Yesod</span>
        </a>
      </div>
    </div>
  );
}

export default App;
