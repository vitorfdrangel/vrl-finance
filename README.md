# 💼 VRL-Finance — SaaS de Gestão Financeira

O **VRL-Finance** é um **SaaS moderno de gestão financeira pessoal e empresarial**, desenvolvido com **Next.js**, **TailwindCSS**, **MongoDB**, **Prisma**, **Clerk** e **Stripe**.  
A plataforma permite **registrar, visualizar e analisar transações financeiras** — categorizadas como **despesas, depósitos e investimentos** — oferecendo uma **dashboard intuitiva e visual**, com gráficos e indicadores financeiros em tempo real.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **[Next.js](https://nextjs.org/)** — Framework React para construção de aplicações web escaláveis
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** — Framework CSS utilitário para design moderno e responsivo
- 🧩 **[MongoDB](https://www.mongodb.com/)** — Banco de dados NoSQL para armazenamento das transações
- 🔗 **[Prisma](https://www.prisma.io/)** — ORM para comunicação eficiente com o banco de dados
- 🔐 **[Clerk](https://clerk.dev/)** — Autenticação e gerenciamento de usuários (login, registro, perfis, etc.)
- 💳 **[Stripe](https://stripe.com/)** — Integração de pagamentos e planos de assinatura

---

## 💡 Funcionalidades Principais

✅ **Gestão de transações financeiras** — adicione, edite e exclua transações facilmente  
✅ **Classificação inteligente** — categorize suas transações como **Despesa**, **Depósito** ou **Investimento**  
✅ **Dashboard interativa** — visualize gráficos e estatísticas sobre seu desempenho financeiro mensal  
✅ **Resumo financeiro por período** — acompanhe o **saldo**, o **total de depósitos, despesas e investimentos**  
✅ **Gastos por categoria** — veja onde seu dinheiro está sendo gasto  
✅ **Últimas transações** — histórico das movimentações mais recentes  
✅ **Autenticação segura** com **Clerk**  
✅ **Assinaturas e planos premium** com **Stripe**  
✅ **Design moderno e responsivo** com **TailwindCSS**

---

## 📊 Dashboard

A **dashboard** do VRL-Finance apresenta:

- 📈 **Gráfico de barras e pizza** com o resumo do mês selecionado
- 💰 **Indicadores financeiros** de saldo, total de despesas, depósitos e investimentos
- 🗂️ **Tabela com as últimas transações realizadas**
- 🏷️ **Análise de gastos por categoria**
- 🗓️ Filtro de **período/mês** para controle detalhado das finanças

---

## 🧱 Estrutura do Projeto

VRL-Finance/
├── prisma/ # Schema e migrações do Prisma
├── src/
│ ├── app/ # Páginas e rotas (Next.js App Router)
│ ├── components/ # Componentes reutilizáveis (UI, gráficos, formulários)
│ ├── lib/ # Configurações (Stripe, Clerk, Prisma, etc.)
│ ├── styles/ # Estilos globais e configurações do Tailwind
│ └── utils/ # Funções auxiliares e helpers
├── .env.example # Exemplo de variáveis de ambiente
├── package.json
├── tailwind.config.js
└── README.md

---

## ⚙️ Configuração do Ambiente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/VRL-Finance.git
cd VRL-Finance
```

2️⃣ Instalar dependências

```bash
npm install
# ou
yarn install
```

3️⃣ Configurar variáveis de ambiente
Crie um arquivo .env baseado em .env.example:

```bash
DATABASE_URL="sua_url_mongodb"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="sua_clerk_public_key"
CLERK_SECRET_KEY="sua_clerk_secret_key"
STRIPE_SECRET_KEY="sua_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="seu_stripe_webhook_secret"
```

4️⃣ Rodar as migrações

```bash
npx prisma migrate dev
```

5️⃣ Iniciar o servidor

```bash
npm run dev
# ou
yarn dev
```

O projeto será executado em:
👉 http://localhost:3000

💾 Scripts Principais
| Comando | Descrição |
| ------------------- | ------------------------------------ |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run start` | Executa o app em modo de produção |
| `npx prisma studio` | Abre o painel visual do Prisma |

🪪 Licença

Este projeto está licenciado sob a MIT License — veja o arquivo LICENSE
para mais detalhes.

🌐 Contato

📧 Autor: [Seu Nome]
🔗 GitHub: github.com/seu-usuario

💼 LinkedIn: linkedin.com/in/seu-perfil
