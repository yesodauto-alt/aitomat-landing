import React from "react";

export const HeroVideo: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto pt-8 sm:pt-12 px-2 sm:px-0">
      {/* Ambient Backlight Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-gradient-to-tr from-orange-500/15 via-orange-600/10 to-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Sleek Luminous Window Frame */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-orange-500/25 to-zinc-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-10px_rgba(249,115,22,0.2)]">
        <div className="relative rounded-[15px] bg-[#090a0d] overflow-hidden">
          {/* Subtle Window Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-950/95 border-b border-white/[0.07] backdrop-blur-md select-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.5)]" />
            </div>

            <div className="flex items-center gap-2 px-3 py-0.5 bg-zinc-900/90 border border-white/10 rounded-full text-[11px] font-mono text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              <span>AITOMat — Demonstração Operacional</span>
            </div>

            {/* Spacer to keep center title balanced */}
            <div className="w-10" />
          </div>

          {/* 16:9 Video Canvas */}
          <div className="relative aspect-video w-full bg-black overflow-hidden">
            <video
              src="/AITOMat_Site.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain bg-black"
            />
          </div>
        </div>
      </div>

      {/* Ground Contact Shadow */}
      <div className="w-[75%] h-[1px] bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent mx-auto mt-3 blur-[0.5px]" />
      <div className="w-[85%] h-6 bg-gradient-to-r from-transparent via-[#f97316]/10 to-transparent blur-xl mx-auto -mt-2 pointer-events-none" />
    </div>
  );
};
