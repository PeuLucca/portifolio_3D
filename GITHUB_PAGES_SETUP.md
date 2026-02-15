# 🚀 Configurar EmailJS no GitHub Pages

Como o GitHub Pages é um site estático, variáveis de ambiente do `.env` não funcionam. Aqui estão as opções:

## ✅ OPÇÃO 1: Hardcode no Código (Mais Simples)

**A Public Key do EmailJS é segura para usar no frontend** - ela é pública por design.

1. Abra o arquivo `src/config/emailjs.js`
2. Substitua os valores vazios pelos seus IDs do EmailJS:

```javascript
export const emailjsConfig = {
  serviceId: 'seu_service_id_aqui',      // Ex: 'service_abc123'
  templateId: 'seu_template_id_aqui',    // Ex: 'template_xyz789'
  publicKey: 'sua_public_key_aqui',      // Ex: 'abcdefghijklmnop'
  toEmail: 'pedroslucca@gmail.com',
  toName: 'Pedro de Lucca',
};
```

3. Faça commit e push:
```bash
git add src/config/emailjs.js
git commit -m "Configure EmailJS for GitHub Pages"
git push
```

4. Faça deploy:
```bash
npm run deploy
```

**Pronto!** O formulário funcionará no GitHub Pages.

## ✅ OPÇÃO 2: GitHub Secrets + Actions (Mais Seguro)

Se preferir não hardcodear (embora seja seguro), use GitHub Secrets:

### 1. Adicionar Secrets no GitHub

1. Vá no seu repositório no GitHub
2. **Settings** → **Secrets and variables** → **Actions**
3. Adicione os seguintes secrets:
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
   - `EMAILJS_PUBLIC_KEY`

### 2. Criar GitHub Action

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Create .env file
        run: |
          echo "VITE_EMAILJS_SERVICE_ID=${{ secrets.EMAILJS_SERVICE_ID }}" >> .env
          echo "VITE_EMAILJS_TEMPLATE_ID=${{ secrets.EMAILJS_TEMPLATE_ID }}" >> .env
          echo "VITE_EMAILJS_PUBLIC_KEY=${{ secrets.EMAILJS_PUBLIC_KEY }}" >> .env
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 3. Atualizar package.json

Remova o script `deploy` manual e use a Action:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    // Remova "deploy": "gh-pages -d dist"
  }
}
```

## 🔒 Segurança

- **Public Key do EmailJS é segura**: Ela é pública por design e pode ser exposta no frontend
- **Service ID e Template ID**: Também podem ser públicos, mas se preferir, use GitHub Secrets
- **Nunca exponha Private Keys**: Mas EmailJS não usa private keys no frontend

## 📝 Recomendação

Para GitHub Pages, **recomendo a OPÇÃO 1** (hardcode):
- ✅ Mais simples
- ✅ Funciona imediatamente
- ✅ Public Key é segura para expor
- ✅ Menos configuração

A Public Key do EmailJS foi feita para ser pública - é assim que o serviço funciona!

## 🎯 Próximos Passos

1. Configure o EmailJS seguindo `EMAILJS_SETUP.md`
2. Adicione os valores em `src/config/emailjs.js`
3. Faça deploy: `npm run deploy`
4. Teste o formulário no site publicado!
