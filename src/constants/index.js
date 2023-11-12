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
      name: "library_name",
      description: "library_description",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "xaamp_server",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: "https://www.skoolbeep.com/blog/wp-content/uploads/2020/12/HOW-DO-YOU-DESIGN-A-LIBRARY-MANAGEMENT-SYSTEM-min.png",
      source_code_link: "https://github.com/PeuLucca/sistema_biblioteca_fullStack/tree/master/peticon_library",
    },
    {
      name: "terraverde_name",
      description: "terraverde_description",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "https://www.terraverdeagro.com.br/sites/terraverdeagro.com.br/files/2021-03/Imagem-site.png",
      source_code_link: "https://github.com/PeuLucca/terraverde",
    },
    {
      name: "spotify_name",
      description: "spotify_description",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: "https://macmagazine.com.br/wp-content/uploads/2017/09/08-spotify-safari.png",
      source_code_link: "https://github.com/PeuLucca/Spotify",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };