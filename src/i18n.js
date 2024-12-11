import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      ola: "Hi, I'm",
      nome: "Pedro",
      coder: "Dev",
      subtitle_1: "I develop user-friendly web, desktop",
      subtitle_2: "and mobile applications",
      translate: "Translate",
      about: "About",
      work: "Work",
      contact: "Contact",
      introduction: "Introduction",
      overview: "Overview.",
      about_me: "I'm a skilled software developer since the age of 13 years old, with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
      web_development: "Web Development",
      mobile_development: "Mobile Development",
      react_development: "React Development",
      desktop_apps_development: "Desktop Development",
      done_so_far: "What I have done so far",
      work_experience: "Work Experience.",
      // ifsp
      ifsp_tools: "PHP, HTML/CSS",
      ifsp_points_1: "Developing web applications using PHP and web related technologies.",
      ifsp_points_2: "Collaborating with cross-functional teams, with front-end, back-end and other developers to create high-quality product.",
      ifsp_points_3: "Participating in code reviews and providing constructive feedback to other developers.",
      // mobile
      mobile_tools: "Android Mobile App",
      mobile_points_1: "Developing an Android app with over +1000 downloads, featuring note functionalities.",
      mobile_points_2: "Completing my first freelance project, successfully publishing it on the Play Store.",
      mobile_points_3: "Gained a deep understanding of various methodologies and coding techniques through the development process (game changer project).",
      // superior
      superior_tools: "React.js Development",
      superior_points_1: "Developing new features and screens for Vantage system.",
      superior_points_2: "Implementing bug fixes following technical guidelines.",
      superior_points_3: "Collaborating closely with the development team for efficient code integration.",
      superior_points_4: "Also improving mobile systems (react-native)",
      // dentist
      dentist_tools: "React.js + Node.js",
      dentist_points_1: "Dental clinic management system using the best tools available in the market.",
      dentist_points_2: "Utilization of AWS servers and its complexities",
      dentist_points_3: "Implementation of agile work methodologies with sprints and well-organized tasks among team members",
      // catagua
      catagua_tools: "React + PHP",
      catagua_points_1: "Driving the upgrade of the company's legacy ERP system to a modern, secure, and scalable platform.",
      catagua_points_2: "Leading the migration of internal systems to online repositories like GitLab for better version control and collaboration.",
      catagua_points_3: "Engaging with clients daily to gather requirements and provide technical solutions tailored to their needs.",
      catagua_points_4: "Collaborating in requirement meetings and ensuring proactive delivery of system improvements.",
      my_work: "My Work",
      projects: "Projects.",
      work_text: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
      // listify
      listify_name: "Listify - Shopping list app",
      listify_description: "Mobile application that organizes grocery and other shopping lists and products.",
      // whatsapp
      whatsapp_name: "Whatsapp Clone",
      whatsapp_description: "Mobile clone of the main features of Whatsapp.",
      // note
      note_name: "Note",
      note_description: "Notepad app with +1000 downloads in several countries. With several display features, such as creating a password, favorites and others.",
      // odontoHelper
      odonto_name: "OdontoHelper - Dental clinic management software",
      odonto_description: "Freelance project that developed a product, people, customer, scheduling, financial and other management system from scratch.",
      // library
      library_name: "Library management application",
      library_description: "Full stack system for managing books ordered by customers.",
      get_in_touch: "GET IN TOUCH",
      contact_: "Contact.",
      your_name: "Your Name",
      your_name_placeholder: "Type your full name",
      your_email: "Your email",
      your_email_placeholder: "What's your email address?",
      your_message: "Your Message",
      your_message_placeholder: "What do you want to say?",
      send: "Send",
      sending: "Sending...",
      feedback_react: "React is by far preferred technology for its versatility and strong community support, its efficiency and intuitive design elevate the development process consistently.",
      feedback_javascript: "JavaScript has won my programming heart with its dynamic flair and great usability.",
      feedback_mobile: "Mobile coding appeals to me for its practical challenges, the artistry involved in creating sleek interfaces, and the supportive community atmosphere.",
      favorite_tech: "My favorites technologies",
      personal: "Personal.",
    },

  },
  pt: {
    translation: {
        ola: "Olá, sou",
        nome: "Pedro",
        coder: "Dev",
        subtitle_1: "Eu crio aplicativos web, desktop",
        subtitle_2: "e mobile, com interfaces amigáveis",
        translate: "Traduzir",
        about: "Sobre",
        work: "Trabalho",
        contact: "Contato",
        introduction: "Introdução",
        overview: "Visão Geral.",
        about_me: "Sou um desenvolvedor de software qualificado desde os meus 13 anos de idade, com experiência em TypeScript e JavaScript, e expertise em frameworks como React, Node.js e Three.js. Aprendo rápido e colaboro de perto com clientes para criar soluções eficientes, escaláveis e amigáveis ao usuário, que resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!",
        web_development: "Desenvolvimento Web",
        mobile_development: "Desenvolvimento Mobile",
        react_development: "Desenvolvimento React",
        desktop_apps_development: "Desenvolvimento Desktop",
        done_so_far: "O que fiz até hoje",
        work_experience: "Experiência.",
        // ifsp
        ifsp_tools: "PHP, HTML/CSS",
        ifsp_points_1: "Desenvolvendo aplicações web utilizando PHP e tecnologias relacionadas à web.",
        ifsp_points_2: "Colaborando com equipes multifuncionais, incluindo desenvolvedores de front-end, back-end e outros, para criar produtos de alta qualidade.",
        ifsp_points_3: "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores.",
        // mobile
        mobile_tools: "Aplicativo Android mobile",
        mobile_points_1: "Desenvolvimento de um aplicativo Android com mais de 1000 downloads, com funcionalidades de notas.",
        mobile_points_2: "Conclusão do meu primeiro projeto freelancer, com sucesso na publicação na Play Store.",
        mobile_points_3: "Adquiri um entendimento aprofundado metodologias e técnicas de codificação ao longo do processo de desenvolvimento (projeto divisor de águas).",
        // superior
        superior_tools: "Desenvolvimento React.js",
        superior_points_1: "Desenvolvimento de novas funcionalidades e telas para o sistema Vantage.",
        superior_points_2: "Implementação de correções de bugs seguindo diretrizes técnicas.",
        superior_points_3: "Colaboração próxima com a equipe de desenvolvimento para integração eficiente do código.",
        superior_points_4: "Também o aprimoramento de sistemas mobile (react-native)",
        // dentista
        dentist_tools: "React.js + Node.js",
        dentist_points_1: "Sistema de gestão clínica odontológica utilizando as melhores ferramentas disponíveis no mercado.",
        dentist_points_2: "Utilização de servidores AWS e suas complexidades.",
        dentist_points_3: "Implementação de metodologias de trabalho ágeis com sprints e tarefas bem organizadas entre os membros da equipe.",
        // catagua
        catagua_tools: "React + PHP",
        catagua_points_1: "Conduzindo o upgrade do sistema ERP legado da empresa para uma plataforma moderna, segura e escalável.",  
        catagua_points_2: "Liderando a migração dos sistemas internos para repositórios online, como o GitLab, para melhorar o controle de versão e a colaboração.",  
        catagua_points_3: "Interagindo diariamente com clientes para levantar requisitos e oferecer soluções técnicas personalizadas.",  
        catagua_points_4: "Participando de reuniões de requisitos e garantindo a entrega proativa de melhorias no sistema.",
        my_work: "Meu trabalho",
        projects: "Projetos.",
        work_text: "Os projetos a seguir mostram minhas habilidades e experiência através exemplos do mundo real do meu trabalho. Cada projeto é brevemente descrito com links para repositórios de código e demonstrações ao vivo nele. Isso reflete meu capacidade de resolver problemas complexos, trabalhar com diferentes tecnologias, e gerenciar projetos de forma eficaz.",
        // listify
        listify_name: "Listify - App de Listas para Compras",
        listify_description: "Aplicativo mobile que organiza as listas e produtos de compras de supermercado e outros.",
        // whatsapp
        whatsapp_name: "Clone WhatsApp",
        whatsapp_description: "Criação do clone do app Whatsapp, com as principais características do original.",
        // note
        note_name: "Note - Bloco de Notas",
        note_description: "Criação de uma app de bloco de notas com +1000 downloads em diversos países. Com diversas funcionalidades de exibição, como criação de senha, favoritar e outros.",
        // odontoHelper
        odonto_name: "OdontoHelper - Software de gestão clínica odontológica",
        odonto_description: "Projeto freelancer que desenvolveu um sistema de gestão de produtos, pessoas, clientes, agendamentos, financeiro e outros do zero.",
        // library
        library_name: "Software de gerenciamento de livros da biblioteca",
        library_description: "Sistema full stack de gestão de livros pedidos pelos clientes.",
        get_in_touch: "ENTRE EM CONTATO",
        contact_: "Contato.",
        your_name: "Seu Nome",
        your_name_placeholder: "Digite seu nome completo",
        your_email: "Seu email",
        your_email_placeholder: "Qual é o seu endereço de e-mail?",
        your_message: "Sua mensagem",
        your_message_placeholder: "O que você quer falar?",
        send: "Enviar",  
        sending: "Enviando...",
        feedback_react: "React é de longe a tecnologia preferida por sua versatilidade e forte suporte da comunidade, sua eficiência e design intuitivo elevam o processo de desenvolvimento de forma consistente.",
        feedback_javascript: "JavaScript conquistou meu coração de programação com seu talento dinâmico e excelente usabilidade.",
        feedback_mobile: "A codificação mobile me atrai pelas suas desafiadoras nuances práticas, a arte envolvida na criação de interfaces elegantes, e a atmosfera colaborativa da comunidade.",
        favorite_tech: "Minhas tecnologias favoritas",
        personal: "Pessoal.",
      },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
