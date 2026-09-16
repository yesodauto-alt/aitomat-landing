import React, { useState } from "react";
import { X, Send, Phone, Building2, User, CheckCircle2, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { WHATSAPP_RAW } from "../constants";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("Serviços / Vendas");
  const [teamSize, setTeamSize] = useState("1 a 5 atendentes");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });

    const text = encodeURIComponent(
      `Olá equipe Yesod! 👋\n\nGostaria de solicitar uma demonstração da plataforma AITOMat para minha empresa:\n\n👤 Nome: ${name}\n🏢 Empresa: ${company}\n📱 Telefone: ${phone}\n📌 Segmento: ${segment}\n👥 Tamanho da Equipe: ${teamSize}\n\nPodemos agendar uma conversa?`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_RAW}?text=${text}`, "_blank");
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090a]/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-[#f97316] border border-orange-500/30 text-xs font-semibold mb-2">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Atendimento Comercial</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">Solicitar Demonstração</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                Preencha os dados abaixo para conversar diretamente com os especialistas da Yesod e conhecer o AITOMat em detalhes.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Seu Nome</label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Nome da Empresa</label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Minha Empresa Ltda"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Seu WhatsApp</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: (11) 99999-9999"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Segmento</label>
                  <select
                    value={segment}
                    onChange={(e) => setSegment(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option>Serviços / Consultoria</option>
                    <option>Saúde / Clínicas</option>
                    <option>Varejo / E-commerce</option>
                    <option>Imobiliária / Construção</option>
                    <option>Educação / Cursos</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Tamanho da Equipe</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option>1 a 3 atendentes</option>
                    <option>4 a 10 atendentes</option>
                    <option>11 a 25 atendentes</option>
                    <option>Mais de 25 atendentes</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-xs rounded-lg transition-all border border-orange-400/40 shadow-md cursor-pointer mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Conversar com a Yesod</span>
              </button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 text-[#f97316] flex items-center justify-center mx-auto border border-orange-500/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Redirecionando para o Atendimento...</h3>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto">
              Caso o aplicativo não abra automaticamente, clique no botão abaixo para iniciar a conversa:
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar com a Yesod</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
