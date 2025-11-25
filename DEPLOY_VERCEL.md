# 🚀 Deploy no Vercel - Guia Passo a Passo

## 📋 Pré-requisitos

✅ Projeto já está no GitHub: https://github.com/thyemimello/thype-technology-website

## 🔧 Passos para Deploy

### 1. Acessar o Vercel

1. Acesse https://vercel.com
2. Faça login com sua conta do GitHub
3. Clique em **"Add New..."** → **"Project"**

### 2. Importar o Repositório

1. Na tela de importação, procure por: `thype-technology-website`
2. Clique em **"Import"** no repositório correto

### 3. Configurar o Projeto

O Vercel vai detectar automaticamente que é um projeto Vite. Configure:

#### **Build & Development Settings:**
- **Framework Preset**: Vite
- **Build Command**: `npm run build` (já vem preenchido)
- **Output Directory**: `dist/public` (já configurado no vercel.json)
- **Install Command**: `npm install` (deixe padrão)

#### **Root Directory:**
- Deixe em branco (raiz do projeto)

### 4. Configurar Variáveis de Ambiente

**IMPORTANTE**: Se você quiser que o formulário de contato funcione em produção, adicione:

1. Clique em **"Environment Variables"**
2. Adicione as seguintes variáveis:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `EMAIL_PASSWORD` | [Senha de app do Gmail] | Production |
| `EMAIL_USER` | thypeappthech@gmail.com | Production |
| `SESSION_SECRET` | [String aleatória segura] | Production |

**Como gerar SESSION_SECRET:**
```bash
# No terminal, execute:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

⚠️ **Nota**: Sem essas variáveis, o site funcionará normalmente, mas o envio de emails do formulário de contato não funcionará.

### 5. Deploy

1. Clique em **"Deploy"**
2. Aguarde o processo de build (1-3 minutos)
3. Quando aparecer confetes 🎉, seu site está no ar!

### 6. Acessar o Site

Após o deploy, você receberá uma URL como:
```
https://thype-technology-website.vercel.app
```

Você pode configurar um domínio customizado depois em: **Settings** → **Domains**

## 🔄 Atualizações Futuras

Cada vez que você fizer push de novas alterações no GitHub, o Vercel automaticamente:
1. Detecta as mudanças
2. Faz o build
3. Atualiza o site

## ⚙️ Configurações Avançadas (Opcional)

### Domínio Customizado

1. No dashboard do Vercel, vá em **Settings** → **Domains**
2. Adicione seu domínio (ex: thype.com.br)
3. Siga as instruções para configurar o DNS

### Analytics

O Vercel oferece analytics grátis:
1. Vá em **Analytics** no menu do projeto
2. Ative o **Web Analytics**

### Preview Deployments

- Toda branch nova gera automaticamente uma URL de preview
- Pull requests recebem URLs exclusivas para teste

## 🆘 Troubleshooting

### Erro de Build

Se o build falhar:
1. Verifique os logs no Vercel
2. Confirme que o build funciona localmente: `npm run build`
3. Verifique se todas as dependências estão no package.json

### Site em branco

Se o site aparecer em branco:
1. Verifique o console do navegador (F12)
2. Confirme que o Output Directory está como `dist/public`

### Formulário de contato não funciona

1. Verifique se adicionou as variáveis de ambiente
2. Confirme que EMAIL_PASSWORD é uma senha de app do Gmail (não a senha normal)
3. Veja EMAIL_SETUP.md para mais detalhes

## 📞 Suporte

- Documentação Vercel: https://vercel.com/docs
- Dashboard: https://vercel.com/dashboard

---

✨ **Seu site THyPE Technology estará online em poucos minutos!**
