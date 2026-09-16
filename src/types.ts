export interface Lead {
  id: string;
  name: string;
  company: string;
  phone: string;
  channel: "whatsapp" | "instagram" | "email";
  stage: "novos" | "qualificados" | "agendados" | "proposta" | "ganhos";
  tag: string;
  tagColor: string;
  lastContact: string;
  aiSummary: string;
  temperature: "Alta / Quente" | "Média / Morno" | "Frio";
  responsible: string;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "ai" | "agent";
  senderName: string;
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

export interface AutomationFlow {
  id: string;
  title: string;
  trigger: string;
  action: string;
  active: boolean;
  executions: number;
  category: string;
}