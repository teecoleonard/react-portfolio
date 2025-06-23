// Conteúdo textual da aplicação
export const content = {
  header: {
    name: "Leonardo Henrique",
    title: "Desenvolvedor Fullstack / Analista de Dados",
    description: "Desenvolvo aplicações web e móveis modernas com foco na experiência do usuário e análise com visualização de dados para transformar informações em insights estratégicos.",
    scrollText: "ROLAR PARA BAIXO"
  },
  
  about: {
    sectionTitle: "Conheça",
    title: "Sobre Mim",
    experience: {
      label: "Experiência",
      value: "1+ Anos"
    },
    projects: {
      label: "Projetos",
      value: "5+ Completados"
    },
    biography: {
      title: "Um pouco da minha trajetória",
      paragraphs: [
        "Começei no desenvolvimento muito novo, quando eu era pequeno gostava muito de fazer servidor privado de jogos gratuitos e com isso fui me aprimorando e aprendendo cada vez mais, mas apenas recentemente consegui entrar na Faculdade de Sistemas de Informação.",
        "Aprender e aplicar meu conhecimento para ajudar as pessoas é uma das minhas maiores motivações. Atualmente, estou cursando Sistemas de Informação na Universidade Descomplica. Com experiência sólida em React, Node.js e bases de dados SQL/NoSQL, busco constantemente aprender novas tecnologias e aplicar meu conhecimento para resolver problemas reais e ajudar pessoas.",
        "Após a graduação, meu objetivo é explorar ainda mais o mundo da programação ou banco de dados, continuando a aprender e evoluir todos os dias."
      ]
    }
  },
  
  portfolio: {
    sectionTitle: "Meus Trabalhos Recentes",
    title: "Portfólio",
    subtitle: "Conheça alguns dos projetos que desenvolvi utilizando as mais recentes tecnologias de desenvolvimento web",
    filters: {
      all: "Todos",
      web: "Web",
      app: "Aplicativos",
      api: "API"
    }
  },
  
  navigation: {
    logo: (
      <>
        leonardo<span>.jsx</span>
      </>
    ),
    links: [
      { href: "#", label: "Início" },
      { href: "#about", label: "Sobre" },
      { href: "#experience", label: "Skills" },
      { href: "#work", label: "Trabalho" },
      { href: "#portfolio", label: "Projetos" },
      { href: "#contact", label: "Contato" }
    ]
  }
}; 