# 📧 Configuração do EmailJS - Envio Direto de Emails

Este guia vai te ajudar a configurar o EmailJS para que o formulário de contato envie emails **diretamente para seu email** sem precisar abrir o cliente de email.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS (Grátis)

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email

1. No dashboard do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado se você usa Gmail)
   - **Outlook** (se você usa Outlook/Hotmail)
   - Ou outro provedor disponível
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** que será gerado (ex: `service_abc123`)

### 3. Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template como base:

```
Subject: Nova Mensagem do Portfólio - {{from_name}}

Olá Pedro,

Você recebeu uma nova mensagem através do formulário de contato do seu portfólio:

Nome: {{from_name}}
Email: {{from_email}}
Mensagem:
{{message}}

---
Você pode responder diretamente para: {{reply_to}}
```

4. Configure o **"To Email"** como: `pedroslucca@gmail.com`
5. Configure o **"From Name"** como: `{{from_name}}`
6. **Anote o Template ID** que será gerado (ex: `template_xyz789`)

### 4. Obter Public Key

1. Vá em **"Account"** → **"General"**
2. Encontre a seção **"API Keys"**
3. **Anote sua Public Key** (ex: `abcdefghijklmnop`)

### 5. Configurar Variáveis de Ambiente

1. Na raiz do projeto, crie um arquivo chamado `.env` (se não existir)
2. Adicione as seguintes linhas:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

**Exemplo:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

### 6. Reiniciar o Servidor

Após criar o arquivo `.env`:

```bash
# Pare o servidor (Ctrl+C)
# E inicie novamente
npm run dev
```

## ✅ Testar

1. Preencha o formulário de contato no site
2. Clique em "Enviar"
3. Você deve receber o email diretamente em `pedroslucca@gmail.com`!

## 🔒 Segurança

- **NUNCA** commite o arquivo `.env` no Git
- O arquivo `.env` já está no `.gitignore`
- A Public Key do EmailJS é segura para uso no frontend

## 🐛 Problemas Comuns

### "Erro ao enviar email"
- Verifique se todas as variáveis de ambiente estão corretas
- Confirme que o Service ID e Template ID estão corretos
- Verifique se o template tem o campo "To Email" configurado

### "Não recebo emails"
- Verifique a pasta de spam
- Confirme que o "To Email" no template está como `pedroslucca@gmail.com`
- Verifique os logs no dashboard do EmailJS

## 📝 Notas

- O plano gratuito do EmailJS permite **200 emails/mês**
- Para mais emails, considere um plano pago
- O EmailJS é seguro e confiável, usado por milhares de desenvolvedores

## 🎉 Pronto!

Depois de configurar, o formulário enviará emails **diretamente para seu inbox** sem precisar abrir o cliente de email!
