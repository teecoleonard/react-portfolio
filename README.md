# Portfólio Profissional React

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![React](https://img.shields.io/badge/React-18.x-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)

## 📋 Sobre o Projeto

Este portfólio é uma aplicação web construída com React que apresenta meus projetos, habilidades e experiências profissionais de forma moderna e interativa. O site foi desenvolvido com foco em performance, acessibilidade e responsividade para oferecer a melhor experiência possível aos visitantes.

## ✨ Demonstração

[Link para o site em produção](https://teecoleonard.github.io/react-portfolio/)

## 🚀 Funcionalidades

- **Galeria de Projetos** com sistema de filtragem e detalhamento
- **Indicadores de Progresso** para cada projeto, mostrando status e porcentagem de conclusão
- **Sistema de Carregamento de Imagens** otimizado com placeholders e tratamento de erros
- **Design Responsivo** para todos os tamanhos de dispositivos
- **Animações e Transições** suaves para melhorar a experiência do usuário

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [CSS Puro](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Para estilização com escopo local
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones populares para React
- [JavaScript ES6+](https://www.ecma-international.org/) - Recursos modernos do JavaScript
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - useState, useRef para gerenciamento de estado
- [GitHub](https://github.com/) - Hospedagem de código
- Sistema personalizado de componentes como o PortfolioImage com lazy loading
- Layout totalmente responsivo com media queries para diferentes tamanhos de tela
  
## 📦 Instalação e Execução

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/react-portfolio.git

# Entre no diretório
cd react-portfolio

# Instale as dependências
npm install

# Execute a aplicação em modo de desenvolvimento
npm start
```

O site estará disponível em http://localhost:3000

## 📂 Estrutura do Projeto

```
src/
├── assets/         # Imagens e recursos estáticos
├── components/     # Componentes reutilizáveis
│   ├── header/     
│   ├── footer/
│   ├── portfolio/  # Componentes relacionados ao portfólio
│   └── ...
├── context/        # Context API (se utilizado)
├── pages/          # Páginas do site
├── styles/         # Estilos globais
└── App.js          # Componente principal
```

## 🔧 Personalização

Para adicionar ou modificar projetos no portfólio, edite o array de dados no arquivo `src/components/portfolio/Portfolio.jsx`:

```jsx
const data = [
  {
    id: 1,
    image: ImagePath,
    title: 'Título do Projeto',
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://link-para-demo.com',
    progress: 75, // Porcentagem de conclusão
    status: 'Em progresso' // ou 'Concluído'
  },
  // Adicione mais projetos aqui
];
```

## 📞 Contato

- Email: leonardo4q@gmail.com
- LinkedIn: [Link](www.linkedin.com/in/leonardohenriquedejesussilva)
- GitHub: [Link](https://github.com/teecoleonard/)

---

Desenvolvido por Leonardo Henrique
