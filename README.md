# 🚀 Portfólio React - Leonardo Henrique

<div align="center">

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modules-1572B6?logo=css3)
![Licença](https://img.shields.io/badge/licença-MIT-green)

</div>

![image](https://github.com/user-attachments/assets/54b11fe8-d62a-4329-9db3-18bc99721306)

## 📋 Sobre o Projeto

Site de portfólio profissional desenvolvido com React que apresenta projetos, habilidades e experiências profissionais de forma moderna e interativa. A aplicação foi construída com foco em:

- ✅ **Performance** - Otimização de carregamento e renderização
- ✅ **Acessibilidade** - Código semântico e navegação inclusiva
- ✅ **Responsividade** - Experiência consistente em qualquer dispositivo
- ✅ **UX/UI** - Interface moderna com animações e transições fluidas

## 🌐 Demonstração

Acesse a versão em produção do portfólio: [leonardohenrique.dev](https://teecoleonard.github.io/react-portfolio/)

## ✨ Funcionalidades Principais

<table>
  <tr>
    <td>
      <h3>🖼️ Galeria de Projetos</h3>
      <ul>
        <li>Sistema de filtros por categorias</li>
        <li>Detalhes expandidos por projeto</li>
        <li>Tags de tecnologias utilizadas</li>
      </ul>
    </td>
    <td>
      <h3>📊 Indicadores de Progresso</h3>
      <ul>
        <li>Status visual de cada projeto</li>
        <li>Barras de progresso percentual</li>
        <li>Indicadores de conclusão</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🔄 Loading Otimizado</h3>
      <ul>
        <li>Lazy loading de imagens</li>
        <li>Placeholders durante carregamento</li>
        <li>Tratamento elegante de erros</li>
      </ul>
    </td>
    <td>
      <h3>📱 Design Responsivo</h3>
      <ul>
        <li>Adaptação para desktop, tablet e mobile</li>
        <li>Navegação otimizada para touch</li>
        <li>Layout fluido</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <h3>🌓 Modo Escuro</h3>
      <ul>
        <li>Alternância entre temas claro e escuro</li>
        <li>Persistência de preferência do usuário</li>
        <li>Design adaptativo por tema</li>
      </ul>
    </td>
    <td>
      <h3>💫 Animações e Transições</h3>
      <ul>
        <li>Animações de entrada e saída</li>
        <li>Transições suaves entre seções</li>
        <li>Efeitos de hover e foco</li>
      </ul>
    </td>
  </tr>
</table>

## 🛠️ Tecnologias Utilizadas

### Front-end
- **React 18+** - Biblioteca para construção de interfaces
- **CSS Modules** - Estilização com escopo local
- **React Icons** - Biblioteca de ícones integrada
- **Intersection Observer API** - Detecção de elementos no viewport

### Desenvolvimento
- **JavaScript ES6+** - Código moderno e recursos avançados
- **React Hooks** - useState, useEffect, useRef, useContext
- **Git & GitHub** - Controle de versão e hospedagem do código

### Arquitetura
- **Componentização** - Estrutura modular e reutilizável
- **Contexto Global** - Gerenciamento de estado via Context API
- **Design Responsivo** - Media queries adaptativas

## ⚙️ Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/teecoleonard/react-portfolio.git

# Entre no diretório do projeto
cd react-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

O site estará disponível em: `http://localhost:3000`

## 📁 Estrutura do Projeto

```
react-portfolio/
├── public/                # Arquivos estáticos e HTML de entrada
├── src/                   # Código-fonte da aplicação
│   ├── assets/            # Recursos estáticos (imagens, fontes)
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── about/         # Seção "Sobre Mim" 
│   │   ├── contact/       # Seção de formulário de contato
│   │   ├── experience/    # Seção de habilidades técnicas
│   │   ├── footer/        # Rodapé do site
│   │   ├── header/        # Cabeçalho e hero section
│   │   ├── nav/           # Navegação principal
│   │   ├── portifolio/    # Galeria de projetos
│   │   └── work/          # Experiência profissional
│   ├── App.jsx            # Componente principal
│   ├── index.js           # Ponto de entrada da aplicação
│   └── index.css          # Estilos globais e variáveis CSS
└── package.json           # Dependências e scripts
```

## 📄 Camadas da Aplicação

### 1. Apresentação (UI)
- Componentes React organizados por seção
- Estilos CSS modulares com variáveis de tema
- Animações e transições controladas por classes

### 2. Lógica de Componentes
- Hooks personalizados para funcionalidades específicas
- Gerenciamento de estado local para interatividade
- Integração de APIs e serviços externos (contato, etc.)

### 3. Infraestrutura
- Sistema de navegação entre seções
- ScrollObserver para detecção de posição na página
- Gestão de temas (claro/escuro)

## 🔧 Personalização

Para adicionar um novo projeto ao portfólio, edite o array de projetos em `src/components/portifolio/Portifolio.jsx`:

```jsx
const projects = [
  {
    id: 4, // Incremente este ID
    image: NovaImagem,
    title: 'Nome do Projeto',
    description: 'Descrição detalhada do projeto...',
    github: 'https://github.com/seu-usuario/nome-repositorio',
    demo: 'https://endereco-da-demo.com',
    progress: 100, // Percentual de conclusão (0-100)
    status: 'Concluído', // ou 'Em progresso'
    category: 'web', // Categoria: 'web', 'app', 'api', etc
    techs: ['React', 'Node.js', 'MongoDB'] // Tecnologias utilizadas
  },
];
```
---

<div align="center">
  <p>Desenvolvido com 💚 por Leonardo Henrique</p>
</div>
