# Revalida Pro AI

Plataforma educacional avançada desenvolvida para estudantes e profissionais da área médica que estão se preparando para o exame Revalida (Exame Nacional de Revalidação de Diplomas Médicos) e outros exames similares.

## Descrição

O Revalida Pro AI oferece uma experiência de estudo personalizada, com simulados, questões comentadas, análise de desempenho e recursos de inteligência artificial para potencializar o aprendizado.

## Tecnologias

- **Frontend**: React 18, TypeScript, Vite
- **UI/UX**: Shadcn UI (baseado em Tailwind CSS)
- **Gerenciamento de Estado**: Contextos React
- **Roteamento**: React Router v6
- **Formulários**: React Hook Form com validação Zod
- **Consultas e Cache**: TanStack Query (React Query)
- **Backend**: Supabase (PostgreSQL, Autenticação, Storage)

## Funcionalidades Principais

- Sistema de Usuários (registro, login, perfil)
- Banco de Questões com categorização
- Simulados personalizados
- Estatísticas de desempenho
- Estudo de diretrizes do SUS
- Ranking mensal de usuários
- Assistente de estudos baseado em IA
- Painel Administrativo completo

## Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/StormeBD/revalida-pro-ai-estudos-2.git

# Entrar no diretório
cd revalida-pro-ai-estudos-2

# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Crie um arquivo .env com base no .env.example

# Iniciar servidor de desenvolvimento
npm run dev
```

## Estrutura do Projeto

- `/src/pages`: Páginas da aplicação
- `/src/components`: Componentes reutilizáveis
- `/src/contexts`: Contextos React para estado global
- `/src/hooks`: Hooks customizados
- `/src/services`: Serviços para operações de dados
- `/src/integrations`: Integrações com serviços externos (Supabase)
- `/supabase/migrations`: Migrações SQL para o banco de dados

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request