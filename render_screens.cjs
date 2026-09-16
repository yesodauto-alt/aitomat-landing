const fs = require("fs");
const { execSync } = require("child_process");

// 1. Create HTML for Pipeline
const pipelineHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; background: #f8fafc; color: #0f172a; width: 1024px; height: 495px; overflow: hidden; display: flex; }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <aside style="width: 172px; height: 495px; background: #ffffff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 10px; flex-shrink: 0;">
    <div>
      <div style="display: flex; items-center; gap: 6px; padding: 4px 8px; margin-bottom: 12px;">
        <span style="font-size: 16px; font-weight: 800; letter-spacing: -0.5px; color: #0f172a;">AITO<span style="color: #2563eb;">Mat</span></span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 3px; font-size: 10.5px; font-weight: 500; color: #64748b;">
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🚩 Prioridades</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">💬 Conversas <span style="background: #2563eb; color: white; border-radius: 99px; font-size: 9px; padding: 0 4px; margin-left: auto;">1</span></div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">📻 Canais</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px; color: #2563eb; font-weight: 600;">☁️ META API CLOUD</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">👥 Contatos</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🔍 Leads</div>
        <div style="padding: 5px 8px; border-radius: 6px; background: #eff6ff; color: #2563eb; font-weight: 600; display: flex; items-center; gap: 6px;">📊 Pipeline</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🤖 IA Assistente</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🧠 IA Interna</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">⚡ Automações</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">📅 Calendário</div>
      </div>
    </div>
    <div style="background: #f1f5f9; border-radius: 8px; padding: 6px 8px; display: flex; items-center; gap: 6px;">
      <div style="width: 22px; height: 22px; border-radius: 99px; background: #2563eb; color: white; font-size: 9px; font-weight: 700; display: flex; items-center; justify-content: center;">CG</div>
      <div style="overflow: hidden; line-height: 1.1;">
        <div style="font-size: 9px; font-weight: 600; color: #0f172a; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">Cami Goltzman</div>
        <div style="font-size: 8px; color: #64748b;">Yesod Automation</div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main style="flex: 1; height: 495px; display: flex; flex-direction: column; background: #f8fafc;">
    <!-- Topbar -->
    <header style="height: 48px; border-bottom: 1px solid #e2e8f0; background: #ffffff; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; flex-shrink: 0;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 14px; font-weight: 700; color: #0f172a;">Pipeline Comercial</span>
        <span style="font-size: 10px; background: #f1f5f9; color: #64748b; padding: 2px 6px; border-radius: 4px; font-weight: 500;">Funil de Vendas</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 4px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 3px 8px; font-size: 10px; color: #475569;">
          🏢 <span>Yesod Automation</span>
        </div>
        <div style="width: 26px; height: 26px; border-radius: 99px; background: #2563eb; color: white; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;">CG</div>
      </div>
    </header>

    <!-- Content Area: Kanban Board -->
    <div style="padding: 12px 16px; flex: 1; display: flex; flex-direction: column; gap: 10px; overflow: hidden;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <input type="text" placeholder="Buscar oportunidade ou lead..." style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 4px 10px; font-size: 10px; width: 220px; background: #ffffff;" readonly />
          <div style="font-size: 10px; border: 1px solid #cbd5e1; background: #ffffff; padding: 4px 8px; border-radius: 6px; color: #475569;">Todos os responsáveis ▾</div>
        </div>
        <button style="background: #f97316; color: white; border: none; padding: 4px 12px; border-radius: 6px; font-size: 10px; font-weight: 600; display: flex; align-items: center; gap: 4px;">+ Nova Oportunidade</button>
      </div>

      <!-- Kanban Columns -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; flex: 1;">
        <!-- Col 1 -->
        <div style="background: #f1f5f9; border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 4px; border-bottom: 2px solid #3b82f6;">
            <span style="font-size: 11px; font-weight: 700; color: #1e293b;">1. Novos Leads</span>
            <span style="font-size: 9px; background: #ffffff; padding: 1px 5px; border-radius: 4px; font-weight: 600; color: #64748b;">4</span>
          </div>
          <!-- Card -->
          <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Dr. Marcos Oliveira</span>
              <span style="background: #fee2e2; color: #dc2626; font-size: 8.5px; font-weight: 700; padding: 1px 5px; border-radius: 4px;">Quente</span>
            </div>
            <span style="font-size: 9px; color: #64748b;">Clínica São Paulo • WhatsApp Oficial</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 8.5px; color: #94a3b8;">
              <span>Resp: Cami Goltzman</span>
              <span>Hoje, 14:20</span>
            </div>
          </div>
          <!-- Card -->
          <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Juliana Mendes</span>
              <span style="background: #fef3c7; color: #d97706; font-size: 8.5px; font-weight: 700; padding: 1px 5px; border-radius: 4px;">Morno</span>
            </div>
            <span style="font-size: 9px; color: #64748b;">Grupo Alfa • Atendimento IA</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 8.5px; color: #94a3b8;">
              <span>Resp: Gabriel Costa</span>
              <span>Hoje, 11:05</span>
            </div>
          </div>
        </div>

        <!-- Col 2 -->
        <div style="background: #f1f5f9; border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 4px; border-bottom: 2px solid #8b5cf6;">
            <span style="font-size: 11px; font-weight: 700; color: #1e293b;">2. Qualificação</span>
            <span style="font-size: 9px; background: #ffffff; padding: 1px 5px; border-radius: 4px; font-weight: 600; color: #64748b;">3</span>
          </div>
          <!-- Card -->
          <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Mercado Bom Preço</span>
              <span style="background: #fee2e2; color: #dc2626; font-size: 8.5px; font-weight: 700; padding: 1px 5px; border-radius: 4px;">Quente</span>
            </div>
            <span style="font-size: 9px; color: #64748b;">3 lojas • Precisa de 10 atendentes</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 8.5px; color: #94a3b8;">
              <span>Resp: Cami Goltzman</span>
              <span>Ontem</span>
            </div>
          </div>
        </div>

        <!-- Col 3 -->
        <div style="background: #f1f5f9; border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 4px; border-bottom: 2px solid #f59e0b;">
            <span style="font-size: 11px; font-weight: 700; color: #1e293b;">3. Proposta Apresentada</span>
            <span style="font-size: 9px; background: #ffffff; padding: 1px 5px; border-radius: 4px; font-weight: 600; color: #64748b;">2</span>
          </div>
          <!-- Card -->
          <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Escola Futuro Viver</span>
              <span style="background: #fee2e2; color: #dc2626; font-size: 8.5px; font-weight: 700; padding: 1px 5px; border-radius: 4px;">Quente</span>
            </div>
            <span style="font-size: 9px; color: #64748b;">Campanha de Matrículas 2026</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 8.5px; color: #94a3b8;">
              <span>Resp: Mariana Reis</span>
              <span>Há 2 dias</span>
            </div>
          </div>
        </div>

        <!-- Col 4 -->
        <div style="background: #f1f5f9; border-radius: 8px; padding: 8px; display: flex; flex-direction: column; gap: 6px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 4px; border-bottom: 2px solid #10b981;">
            <span style="font-size: 11px; font-weight: 700; color: #1e293b;">4. Fechamento</span>
            <span style="font-size: 9px; background: #ffffff; padding: 1px 5px; border-radius: 4px; font-weight: 600; color: #64748b;">5</span>
          </div>
          <!-- Card -->
          <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #10b981; box-shadow: 0 1px 2px rgba(0,0,0,0.05); display: flex; flex-direction: column; gap: 4px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Hospital Veterinário Vida</span>
              <span style="background: #dcfce7; color: #15803d; font-size: 8.5px; font-weight: 700; padding: 1px 5px; border-radius: 4px;">Ganho ✓</span>
            </div>
            <span style="font-size: 9px; color: #64748b;">Contrato assinado • Implantação ativa</span>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 8.5px; color: #94a3b8;">
              <span>Resp: Cami Goltzman</span>
              <span>Hoje</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
</html>`;

// 2. Create HTML for Automacoes
const automacoesHtml = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; margin: 0; padding: 0; background: #f8fafc; color: #0f172a; width: 1024px; height: 495px; overflow: hidden; display: flex; }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <aside style="width: 172px; height: 495px; background: #ffffff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 10px; flex-shrink: 0;">
    <div>
      <div style="display: flex; items-center; gap: 6px; padding: 4px 8px; margin-bottom: 12px;">
        <span style="font-size: 16px; font-weight: 800; letter-spacing: -0.5px; color: #0f172a;">AITO<span style="color: #2563eb;">Mat</span></span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 3px; font-size: 10.5px; font-weight: 500; color: #64748b;">
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🚩 Prioridades</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">💬 Conversas <span style="background: #2563eb; color: white; border-radius: 99px; font-size: 9px; padding: 0 4px; margin-left: auto;">1</span></div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">📻 Canais</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px; color: #2563eb; font-weight: 600;">☁️ META API CLOUD</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">👥 Contatos</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🔍 Leads</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">📊 Pipeline</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🤖 IA Assistente</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">🧠 IA Interna</div>
        <div style="padding: 5px 8px; border-radius: 6px; background: #eff6ff; color: #2563eb; font-weight: 600; display: flex; items-center; gap: 6px;">⚡ Automações</div>
        <div style="padding: 5px 8px; border-radius: 6px; display: flex; items-center; gap: 6px;">📅 Calendário</div>
      </div>
    </div>
    <div style="background: #f1f5f9; border-radius: 8px; padding: 6px 8px; display: flex; items-center; gap: 6px;">
      <div style="width: 22px; height: 22px; border-radius: 99px; background: #2563eb; color: white; font-size: 9px; font-weight: 700; display: flex; items-center; justify-content: center;">CG</div>
      <div style="overflow: hidden; line-height: 1.1;">
        <div style="font-size: 9px; font-weight: 600; color: #0f172a; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;">Cami Goltzman</div>
        <div style="font-size: 8px; color: #64748b;">Yesod Automation</div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main style="flex: 1; height: 495px; display: flex; flex-direction: column; background: #f8fafc;">
    <!-- Topbar -->
    <header style="height: 48px; border-bottom: 1px solid #e2e8f0; background: #ffffff; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; flex-shrink: 0;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 14px; font-weight: 700; color: #0f172a;">Automações Operacionais</span>
        <span style="font-size: 10px; background: #f1f5f9; color: #64748b; padding: 2px 6px; border-radius: 4px; font-weight: 500;">Workflows & IA</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 4px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 3px 8px; font-size: 10px; color: #475569;">
          🏢 <span>Yesod Automation</span>
        </div>
        <div style="width: 26px; height: 26px; border-radius: 99px; background: #2563eb; color: white; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;">CG</div>
      </div>
    </header>

    <!-- Content Area: Automacoes List with the exact orange button -->
    <div style="padding: 12px 16px; flex: 1; display: flex; flex-direction: column; gap: 12px; overflow: hidden;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h2 style="font-size: 14px; font-weight: 700; color: #0f172a; margin: 0;">Workflows & Chatbots</h2>
          <p style="font-size: 10px; color: #64748b; margin: 2px 0 0 0;">Regras automáticas e inteligência conversacional conectadas à operação.</p>
        </div>
        <!-- Exact orange button from user reference -->
        <button style="background: #f97316; color: #ffffff; font-size: 11px; font-weight: 600; padding: 6px 14px; border-radius: 8px; border: none; display: flex; align-items: center; gap: 5px; box-shadow: 0 1px 3px rgba(249,115,22,0.3);">
          + Criar automação
        </button>
      </div>

      <!-- Overview Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 10px; color: #64748b; font-weight: 600;">Automações Ativas</span>
            <span style="background: #dcfce7; color: #16a34a; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 4px;">12 ativas</span>
          </div>
          <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 4px;">1.428</div>
          <span style="font-size: 8.5px; color: #94a3b8;">Disparos realizados nesta semana</span>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 10px; color: #64748b; font-weight: 600;">Triagem WhatsApp</span>
            <span style="background: #dbeafe; color: #2563eb; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 4px;">API Oficial</span>
          </div>
          <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 4px;">0.8s</div>
          <span style="font-size: 8.5px; color: #94a3b8;">Tempo médio de primeira resposta</span>
        </div>
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px;">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 10px; color: #64748b; font-weight: 600;">Follow-ups no CRM</span>
            <span style="background: #fef3c7; color: #d97706; font-size: 9px; font-weight: 700; padding: 1px 6px; border-radius: 4px;">Automático</span>
          </div>
          <div style="font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 4px;">98.4%</div>
          <span style="font-size: 8.5px; color: #94a3b8;">Taxa de leads acompanhados sem atraso</span>
        </div>
      </div>

      <!-- Automations List Table -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; flex: 1;">
        <table style="width: 100%; border-collapse: collapse; font-size: 10px;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; color: #64748b; text-align: left;">
              <th style="padding: 6px 12px; font-weight: 600;">Nome da Regra</th>
              <th style="padding: 6px 12px; font-weight: 600;">Gatilho</th>
              <th style="padding: 6px 12px; font-weight: 600;">Canal</th>
              <th style="padding: 6px 12px; font-weight: 600;">Ação do Sistema</th>
              <th style="padding: 6px 12px; font-weight: 600;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 7px 12px; font-weight: 700; color: #0f172a;">Triagem & Boas-Vindas 24/7</td>
              <td style="padding: 7px 12px; color: #475569;">Nova mensagem de cliente</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-size: 8.5px; padding: 1px 5px; border-radius: 3px;">WhatsApp</span></td>
              <td style="padding: 7px 12px; color: #475569;">IA faz qualificação e cadastra Lead</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-weight: 700; font-size: 8.5px; padding: 2px 6px; border-radius: 4px;">● Ativa</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 7px 12px; font-weight: 700; color: #0f172a;">Distribuição por Departamento</td>
              <td style="padding: 7px 12px; color: #475569;">Intenção identificada como 'Vendas'</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-size: 8.5px; padding: 1px 5px; border-radius: 3px;">WhatsApp</span></td>
              <td style="padding: 7px 12px; color: #475569;">Direciona para fila comercial em rodízio</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-weight: 700; font-size: 8.5px; padding: 2px 6px; border-radius: 4px;">● Ativa</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 7px 12px; font-weight: 700; color: #0f172a;">Alerta de Lead Quente sem Resposta</td>
              <td style="padding: 7px 12px; color: #475569;">Sem resposta do atendente há 15 min</td>
              <td style="padding: 7px 12px;"><span style="background: #f1f5f9; color: #475569; font-size: 8.5px; padding: 1px 5px; border-radius: 3px;">Interno</span></td>
              <td style="padding: 7px 12px; color: #475569;">Notifica gestor no sino e eleva prioridade</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-weight: 700; font-size: 8.5px; padding: 2px 6px; border-radius: 4px;">● Ativa</span></td>
            </tr>
            <tr>
              <td style="padding: 7px 12px; font-weight: 700; color: #0f172a;">Lembrete de Agendamento (2h antes)</td>
              <td style="padding: 7px 12px; color: #475569;">2 horas antes de reunião no Calendário</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-size: 8.5px; padding: 1px 5px; border-radius: 3px;">WhatsApp</span></td>
              <td style="padding: 7px 12px; color: #475569;">Envia confirmação e link da chamada</td>
              <td style="padding: 7px 12px;"><span style="background: #dcfce7; color: #16a34a; font-weight: 700; font-size: 8.5px; padding: 2px 6px; border-radius: 4px;">● Ativa</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</body>
</html>`;

fs.writeFileSync("pipeline.html", pipelineHtml);
fs.writeFileSync("automacoes.html", automacoesHtml);
console.log("HTML files written successfully.");
