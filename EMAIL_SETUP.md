# Configuração de Email para THyPE Technology

Este documento explica como configurar o envio de emails para o formulário de contato.

## Variáveis de Ambiente Necessárias

Para que o sistema de envio de emails funcione corretamente, você precisa configurar as seguintes variáveis de ambiente:

### EMAIL_PASSWORD (OBRIGATÓRIO)
Senha de aplicativo do Gmail. **Não use sua senha normal do Gmail!**

#### Como criar uma senha de aplicativo no Gmail:

1. Acesse sua conta Google em https://myaccount.google.com
2. Vá em "Segurança" no menu lateral
3. Ative a "Verificação em duas etapas" (se ainda não estiver ativada)
4. Após ativar, volte em "Segurança"
5. Procure por "Senhas de app" (App Passwords)
6. Selecione "Email" e "Outro dispositivo personalizado"
7. Digite "THyPE Website" como nome
8. Clique em "Gerar"
9. Copie a senha de 16 caracteres gerada

### EMAIL_USER (OPCIONAL)
Email da empresa. Se não configurado, usa `thypeappthech@gmail.com` por padrão.

## Como Configurar no Replit

1. No painel lateral do Replit, clique em "Secrets" (ícone de cadeado)
2. Adicione uma nova secret:
   - Key: `EMAIL_PASSWORD`
   - Value: Cole a senha de aplicativo de 16 caracteres (sem espaços)
3. (Opcional) Adicione outra secret se quiser usar um email diferente:
   - Key: `EMAIL_USER`
   - Value: `thypeappthech@gmail.com`

## Testando

Após configurar, reinicie o servidor e teste enviando um formulário de contato. Você deverá ver no console:

```
Email de contato enviado com sucesso
```

Se houver erro, verifique:
- A senha de aplicativo está correta
- A verificação em duas etapas está ativada no Gmail
- O email `thypeappthech@gmail.com` está correto
- Não há bloqueios de segurança na conta Google

## Funcionamento

Quando alguém preenche o formulário de contato no site:
1. Os dados são salvos no storage local
2. Um email é enviado para `thypeappthech@gmail.com` com os detalhes do contato
3. O email contém: nome, email, telefone (se fornecido) e mensagem

## Segurança

- **NUNCA** commite a senha de aplicativo no código
- Use sempre a variável de ambiente `EMAIL_PASSWORD`
- A senha de aplicativo pode ser revogada a qualquer momento em sua conta Google
