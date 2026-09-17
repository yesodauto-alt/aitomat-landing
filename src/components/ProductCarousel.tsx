import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface Slide {
  id: string;
  number: string;
  title: string;
  badge: string;
  image: string;
  alt: string;
}

export const ProductCarousel: React.FC = () => {
  const slides: Slide[] = [
    {
      id: "inicio",
      number: "01 / 03",
      title: "Painel Geral e Áreas de Trabalho em Tempo Real",
      badge: "70% Autônomo",
      image: "/aitomat-screen-inicio.png",
      alt: "AITOMat - Painel Geral e Áreas de Trabalho"
    },
    {
      id: "prioridades",
      number: "02 / 03",
      title: "Prioridades da Operação e Leads Prontos para Comprar Agora",
      badge: "Prioridades da Operação",
      image: "/aitomat-screen-prioridades.png",
      alt: "AITOMat - Prioridades da Operação, Leads Prontos para Comprar Agora e Último Contato"
    },
    {
      id: "calendario",
      number: "03 / 03",
      title: "Calendário Operacional e Lembretes via WhatsApp",
      badge: "Redução de No-Show",
      image: "/aitomat-screen-calendario.png",
      alt: "AITOMat - Calendário e Agendamentos Integrados"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <div
      className="relative mt-14 sm:mt-20 max-w-6xl mx-auto w-full px-2 sm:px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Cinematic Ambient Glows & Atmosphere (Halo de Luz Posterior) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-gradient-to-tr from-indigo-600/25 via-violet-600/20 to-orange-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-gradient-to-b from-[#f97316]/15 via-indigo-500/10 to-transparent blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* 2. 3D Perspective Stage Container */}
      <div className="relative [perspective:1400px]">
        {/* Luminous Rim / Gradient Border Frame */}
        <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/25 via-indigo-500/30 to-orange-500/25 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95),0_0_50px_-15px_rgba(99,102,241,0.3)] transition-transform duration-700 ease-out sm:[transform:rotateX(2deg)] hover:[transform:rotateX(0deg)]">
          {/* Inner Display Box */}
          <div className="relative rounded-[15px] bg-[#0a0b0e] overflow-hidden">
            {/* Top Bar - Premium Frosted Window Frame */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/90 border-b border-white/[0.07] backdrop-blur-md">
              {/* macOS colored window dots with subtle glow */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
              </div>

              {/* Central Title Pill with Orange Glowing Beacon */}
              <div className="hidden sm:flex items-center gap-2 px-3.5 py-1 bg-zinc-900/90 border border-white/10 rounded-full text-[11px] font-mono text-zinc-300 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#f97316] shadow-[0_0_8px_#f97316] animate-pulse" />
                <span className="truncate max-w-[380px] font-medium">{current.title}</span>
              </div>

              {/* Right Counter [01 / 03] */}
              <div className="flex items-center gap-2">
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded">
                  <Sparkles className="w-3 h-3" />
                  <span>{current.badge}</span>
                </span>
                <span className="text-[11px] font-mono text-zinc-400 font-bold tracking-wider">
                  [{current.number}]
                </span>
              </div>
            </div>

            {/* Viewport: High Definition Screenshot Slides with Crossfade */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#07080a]">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    idx === currentIndex
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[1.01] pointer-events-none z-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-top sm:object-contain bg-[#07080a]"
                  />
                </div>
              ))}

              {/* Subtle glass reflection sheen on top corner */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-transparent z-20" />

              {/* Mobile Title Badge */}
              <div className="sm:hidden absolute top-3 left-3 z-20 px-2.5 py-1 bg-zinc-950/95 border border-white/10 rounded-md text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
                <span className="truncate max-w-[200px]">{current.title}</span>
              </div>

              {/* Left Arrow Button with Glassmorphism */}
              <button
                onClick={handlePrev}
                aria-label="Slide Anterior"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-9 sm:w-11 h-9 sm:h-11 bg-zinc-950/80 hover:bg-[#f97316] text-white hover:text-white border border-white/15 hover:border-orange-400/80 rounded-xl flex items-center justify-center transition-all duration-200 shadow-xl opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Right Arrow Button with Glassmorphism */}
              <button
                onClick={handleNext}
                aria-label="Próximo Slide"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-9 sm:w-11 h-9 sm:h-11 bg-zinc-950/80 hover:bg-[#f97316] text-white hover:text-white border border-white/15 hover:border-orange-400/80 rounded-xl flex items-center justify-center transition-all duration-200 shadow-xl opacity-90 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer backdrop-blur-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Right Pill Indicator */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-5 z-30 flex items-center gap-2 bg-zinc-950/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full shadow-xl">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Ir para slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? "bg-[#f97316] w-6 shadow-[0_0_8px_#f97316]"
                        : "bg-zinc-600 hover:bg-zinc-400 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Stage Base / Horizon Light & Reflection (Base e Suporte Visual) */}
        <div className="w-[85%] h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/50 via-indigo-500/40 to-transparent mx-auto mt-4 blur-[0.5px]" />
        <div className="w-[90%] h-8 bg-gradient-to-r from-transparent via-indigo-500/20 via-[#f97316]/15 to-transparent blur-xl mx-auto -mt-3 pointer-events-none" />
      </div>
    </div>
  );
};
