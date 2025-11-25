# THyPE Technology - Website Institucional

Website institucional da THyPE Technology com suporte completo a internacionalização (i18n) em Português, Inglês e Espanhol.

## 🌐 Sobre o Projeto

A THyPE Technology é uma empresa especializada em soluções digitais sob medida, focada em transformar dados e processos em sistemas inteligentes de alto desempenho.

Este website apresenta:
- **Design futurista** com elementos 3D, glassmorphism e efeitos neon
- **Internacionalização completa** (PT, EN, ES)
- **Seções**: Hero, Quem Somos, Produtos, Diferenciais, Portfólio, Depoimentos, Equipe e Contato
- **3 Projetos em destaque**: Cíclica, Radar e Otimizador

## 🚀 Tecnologias

- **React 18** com TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Wouter** - Roteamento
- **React Query** - Gerenciamento de estado
- **Spline** - Elementos 3D
- **Nodemailer** - Envio de emails
- **Express** - Backend

## 🌍 Internacionalização

O site suporta 3 idiomas:
- 🇧🇷 **Português** (padrão)
- 🇺🇸 **Inglês**
- 🇪🇸 **Espanhol**

A tradução é feita através de um sistema i18n customizado com contexto React e arquivos de tradução organizados.

## 📦 Estrutura do Projeto

```
├── client/               # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── pages/       # Páginas da aplicação
│   │   ├── i18n/        # Sistema de internacionalização
│   │   └── lib/         # Utilitários
├── server/              # Backend Express
│   ├── routes.ts        # Rotas da API
│   └── storage.ts       # Interface de armazenamento
├── shared/              # Código compartilhado
│   └── schema.ts        # Schemas do banco de dados
└── attached_assets/     # Assets estáticos
```

## 🎨 Identidade Visual

- **Cores**: Gradiente roxo-azul (#5C00AB, #532CB8, #2D67CE, #1C8DDB, #7CC7D8)
- **Fundo**: Dark (#040A14) com grid tecnológico
- **Fonte**: Cascadia Code (monospace) para todo o site
- **Efeitos**: Glassmorphism, neon glow, animações 3D

## 📧 Configuração de Email

Para o formulário de contato funcionar, configure:

1. **EMAIL_PASSWORD**: Senha de aplicativo do Gmail
2. **EMAIL_USER** (opcional): Email da empresa (padrão: thypeappthech@gmail.com)

Veja [EMAIL_SETUP.md](./EMAIL_SETUP.md) para instruções detalhadas.

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📄 Licença

© 2024 THyPE Technology. Todos os direitos reservados.

## 🔗 Links

- **Website**: Em breve
- **Email**: thypeappthech@gmail.com
- **Instagram**: [@thype_aisolutions](https://www.instagram.com/thype_aisolutions)
- **WhatsApp**: +55 47 988140013

---

Desenvolvido com ❤️ pela equipe THyPE Technology
