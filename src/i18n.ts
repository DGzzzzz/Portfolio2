import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      about_me: 'About me',
      description:
        'Hello! My name is Douglas Winter, and I am a developer passionate about technology. I am currently studying Systems Analysis and Development at the Federal Institute of RS and I am also specializing in Java with the Full Stack Java Developer course at EBAC.',
      join_discord: 'Discord community',
      community_discord:
        'Join the community Im building on Discord. There we can exchange ideas, clear up doubts, and connect with other people. Click on the Discord icon in the sidebar to join.',
      change_theme: 'Change theme',
      developer: 'Developer Full-Stack',
      projects: 'Projects',
      project_descriptions: {
        efood:
          'Restaurant e-commerce, where we can view the menu and place orders. Developed with React, Redux, styled-components, and TypeScript.',
        focalpoint:
          'Developed with React, SCSS, NextJS, and TypeScript. State management for task registration, deletion, and marking as completed.',
        todo_fullstack:
          'Task list web application, with a backend in Node.js and a frontend using HTML, CSS, and JS. Docker was used to generate a MySQL image.',
        exoplanets:
          'Web application that consumes NASA API to display information about exoplanets. Built with the Three.js library.',
        discord_bot:
          'Bot para Discord, desenvolvido com Node.js e a lib discord.js. Possui comandos básicos, como mensagem de boas-vindas. Deploy na Render.',
        api_ncm:
          'Web application that consumes the Brasil.io API to display information about NCMs. Built with HTML, Bootstrap, and JS.'
      },
      title_projects: {
        exoplanets: 'Exoplanets Exploration - NASA hackathon project'
      }
    }
  },
  pt: {
    translation: {
      about_me: 'Sobre mim',
      description:
        'Olá! Meu nome é Douglas Winter, e sou um desenvolvedor apaixonado por tecnologia. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no Instituto Federal do RS e também estou me especializando em Java, com o curso de Desenvolvedor Full Stack Java na EBAC.',
      join_discord: 'Comunidade do Discord',
      community_discord:
        'Junte-se na comunidade que estou construíndo no discord. Lá podemos trocar uma ideia, tirar dúvidas e se conectar com outras pessoas. Clique no ícone do discord na sidebar para entrar.',
      change_theme: 'Trocar tema',
      developer: 'Desenvolvedor Full-Stack',
      projects: 'Projetos',
      project_descriptions: {
        efood:
          'E-commerce de restaurantes, onde podemos visualizar o cardápio e fazer pedidos. Desenvolvido com React, Redux, styled-components e typescript.',
        focalpoint:
          'Desenvolvido com React, SCSS, NextJS e typescript. Gerenciamento de estado, para cadastro de tarefas, exclusão e marcar como concluída.',
        todo_fullstack:
          'Aplicação web de lista de tarefas, com backend em Node.js e frontend com HTML, CSS e JS. Utilizado docker para gerar imagem do MySQL.',
        exoplanets:
          'Aplicação web que consome a API da NASA para exibir informações sobre exoplanetas. Construida com a lib Three.js.',
        discord_bot:
          'Bot para Discord, desenvolvido com Node.js e a lib discord.js. Possui comandos básicos, como mensagem de boas-vindas. Deploy na Render.',
        api_ncm:
          'Aplicação web que consome a API Brasil.io para exibir informações sobre NCMs. Construida com HTML, Bootstrap e JS.'
      },
      title_projects: {
        exoplanets: 'Exoplanets Exploration - Projeto para hackathon NASA'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // default language
  interpolation: {
    escapeValue: false
  }
})

export default i18n
