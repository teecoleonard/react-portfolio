import IMG1 from '../assets/portfolio2.png'
import IMG2 from '../assets/portfolio1.png'
import IMG4 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.png'
import IMG7 from '../assets/portfolio7.png'

// Dados dos projetos do portfólio
export const projects = [
  {
    id: 1,
    image: IMG7,
    title: 'ALG Gestão',
    description: 'Aplicativo Android completo para gestão de contratos, clientes e equipamentos de locação feito para a empresa ALG Equipamentos.',
    github: 'https://github.com/teecoleonard/alg_gestao',
    demo: 'https://github.com/teecoleonard/alg_gestao',
    progress: 100,
    status: 'Concluído',
    category: 'app',
    techs: ['Android', 'Kotlin', 'MySQL', 'MVVM']
  },
  {
    id: 2,
    image: IMG6,
    title: 'PokéAppe',
    description: 'PokéApp é uma Pokédex profissional e completa desenvolvida como resposta ao desafio técnico utilizando a PokéAPI. A aplicação demonstra competências em desenvolvimento mobile multiplataforma com Ionic 8 + Angular 19, integrando APIs REST, testes automatizados e padrões modernos de desenvolvimento.',
    github: 'https://github.com/teecoleonard/pokeapp',
    demo: 'https://github.com/teecoleonard/pokeapp',
    progress: 100,
    status: 'Concluído',
    category: 'app',
    techs: ['Android', 'Typescript', 'Ionic 8', 'Angular 19']
  },
  {
    id: 3,
    image: IMG1,
    title: 'Project Firebase',
    description: 'Sistema de gerenciamento de usuários com autenticação Firebase. Inclui funcionalidades de login social, recuperação de senha e perfis de usuário personalizáveis.',
    github: 'https://github.com/teecoleonard/project-firebase',
    demo: 'https://github.com/teecoleonard/project-firebase',
    progress: 100,
    status: 'Concluído',
    category: 'app',
    techs: ['Android', 'Firebase', 'Java']
  },
  {
    id: 4,
    image: IMG2,
    title: 'Psicologia Website',
    description: 'Website institucional para consultório de psicologia com agendamento online, blog e área administrativa para gerenciamento de conteúdo e pacientes.',
    github: 'https://github.com/teecoleonard/psicoterapia-site',
    demo: 'https://psisaramartins.com/',
    progress: 100,
    status: 'Concluído',
    category: 'web',
    techs: ['HTML/CSS', 'JavaScript', 'PHP']
  },
  {
    id: 5,
    image: IMG4,
    title: 'Projeto TMDB para CSV',
    description: 'Este projeto busca dados do TMDB (The Movie Database) e os salva em arquivos CSV. O objetivo é criar um banco de dados local para análise posterior.',
    github: 'https://github.com/teecoleonard/Projeto',
    demo: 'https://github.com/teecoleonard/Projeto',
    progress: 100,
    status: 'Concluído',
    category: 'api',
    techs: ['Python', 'TMDB', 'CSV']
  }
];

// Categorias disponíveis para filtros
export const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'web', label: 'Web' },
  { id: 'app', label: 'Aplicativos' },
  { id: 'api', label: 'API' }
]; 