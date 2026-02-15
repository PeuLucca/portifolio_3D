/**
 * Configuração do EmailJS
 * 
 * Para GitHub Pages, você tem duas opções:
 * 
 * OPÇÃO 1: Hardcode aqui (mais simples para GitHub Pages)
 * Substitua os valores abaixo pelos seus IDs do EmailJS
 * 
 * OPÇÃO 2: Usar GitHub Secrets (mais seguro, mas mais complexo)
 * Configure no GitHub Actions (veja .github/workflows/deploy.yml)
 */

export const emailjsConfig = {
  // Substitua pelos seus valores do EmailJS
  // Você pode deixar vazio e usar variáveis de ambiente em desenvolvimento
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wodb4pf',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_zv6fydj',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'OuQttOPP6c9lA_rjb',
  
  // Email de destino
  toEmail: 'pedroslucca@gmail.com',
  toName: 'Pedro de Lucca',
};

// Verifica se está configurado
export const isEmailjsConfigured = () => {
  return !!(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey);
};
