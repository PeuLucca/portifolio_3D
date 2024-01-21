import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "translate",
      title: "translate",
    },
    {
      id: "about",
      title: "about",
    },
    {
      id: "work",
      title: "work",
    },
    {
      id: "contact",
      title: "contact",
    },
  ];
  
  const services = [
    {
      title: "web_development",
      icon: web,
    },
    {
      title: "mobile_development",
      icon: mobile,
    },
    {
      title: "react_development",
      icon: backend,
    },
    {
      title: "desktop_apps_development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "ifsp_tools",
      company_name: "IFSP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg/2383px-Instituto_Federal_de_S%C3%A3o_Paulo_-_Marca_Vertical_2015.svg.png",
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Jul 2022",
      points: [
        "ifsp_points_1",
        "ifsp_points_2",
        "ifsp_points_3",
      ],
    },
    {
      title: "mobile_tools",
      company_name: "Play Store",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mobile-Smartphone-icon.png",
      iconBg: "#4A8CAC",
      date: "Ago 2021 - Mar 2022",
      points: [
        "mobile_points_1",
        "mobile_points_2",
        "mobile_points_3",
      ],
    },
    {
      title: "superior_tools",
      company_name: "Superior Industries",
      icon: "https://d1.awsstatic.com/customer-references-case-studies-logos/superior-logo%402x.bd2229864b69dad7e308c4813dd1562fd3076942.png",
      iconBg: "#0e1111",
      date: "Jun 2022 - April 2023",
      points: [
        "superior_points_1",
        "superior_points_2",
        "superior_points_3",
        "superior_points_4",
      ],
    },
    {
      title: "dentist_tools",
      company_name: "Pedro e Davi de Lucca",
      icon: "https://cdn-icons-png.flaticon.com/512/2751/2751651.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - ",
      points: [
        "dentist_points_1",
        "dentist_points_2",
        "dentist_points_3",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "feedback_react",
      name: "React",
      image: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      testimonial: "feedback_mobile",
      name: "Mobile Coding",
      image: "https://cdn1.iconfinder.com/data/icons/programming-filled-line/64/app__code__coding__development__mobile__smartphone_icon0-512.png",
    },
    {
      testimonial: "feedback_javascript",
      name: "JavaScript",
      image: "https://logospng.org/download/javascript/logo-javascript-1024.png",
    },
  ];
  
  const projects = [
    {
      name: "odonto_name",
      description: "odonto_description",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "postman",
          color: "orange-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
      ],
      image: "https://cdn.dribbble.com/userupload/4658677/file/still-3809ed159e89026e6ff2c3672e54ee6c.png",
      source_code_link: "https://odontohelper.com.br",
    },
    {
      name: "note_name",
      description: "note_description",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
        {
          name: "OOP",
          color: "blue-text-gradient",
        },
      ],
      image: "https://pics.craiyon.com/2023-08-05/c4ea0dd479df4495a22ab47667fe6e06.webp",
      source_code_link: "https://github.com/PeuLucca/note",
    },
    {
      name: "whatsapp_name",
      description: "whatsapp_description",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "android",
          color: "green-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: "https://img.freepik.com/vetores-premium/conceito-de-icone-do-whatsapp_23-2147897840.jpg",
      source_code_link: "https://github.com/PeuLucca/Whatsapp-Clone",
    },
    {
      name: "listify_name",
      description: "listify_description",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "noSql",
          color: "pink-text-gradient",
        },
      ],
      image: "https://play-lh.googleusercontent.com/n1m9G0rnP3Tu3lipjUpVxR-7Nz2RTRhD9DLqwCPTASwmHKD-CJbX1uwpEh8N3lDFUKh0=w240-h480-rw",
      source_code_link: "https://github.com/PeuLucca/listify",
    },
    {
      name: "library_name",
      description: "library_description",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
        {
          name: "sql",
          color: "green-text-gradient",
        },
        {
          name: "xampp",
          color: "pink-text-gradient",
        },
      ],
      image: "https://graduate.northeastern.edu/resources/wp-content/uploads/sites/4/2020/05/iStock-1187114666.jpg",
      source_code_link: "https://github.com/PeuLucca/sistema_biblioteca_fullStack",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };