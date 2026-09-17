<h1 align="center" style="font-weight: bold">Leonardo Henrique - Portfólio Profissional</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-Concluído-green?style=flat-square)](https://teecoleonard.github.io/react-portfolio/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

<img width="1889" height="892" alt="image" src="https://github.com/user-attachments/assets/ec99cba8-2ea4-465d-9044-4f5e4cdec89e" />


**Software Engineer | QA Engineer | Automation | AI**

[Visite o Site](https://teecoleonard.github.io/react-portfolio/) • [Entre em Contato](#entre-em-contato)

</div>

---

## Sobre

Sou Software Engineer e QA Engineer, com experiência em desenvolvimento Full Stack, automação de testes, APIs, dados e integração de sistemas. Atualmente atuo como Analista de Qualidade na NTT DATA, trabalhando com Salesforce, Java, Selenium, APIs REST e automação de processos.

Desenvolvo aplicações web e mobile e soluções com IA e LLMs, aplicando práticas de arquitetura, testes automatizados, CI/CD e qualidade de software. Este portfólio apresenta meus projetos e competências em português e inglês.

---

## Competências Técnicas

### CRM e Sistemas de Gestão

Plataformas com Java/Spring Boot, React/Next.js, MySQL e Docker, com arquitetura modular, isolamento de dados, APIs REST e controle de qualidade.

**Tecnologias e práticas:** Java / Spring Boot, React / Next.js, MySQL, Docker, REST APIs.

### Arquitetura e Engenharia

Aplicação de DDD, Spec-Driven Development, ADRs, critérios de aceitação e rastreabilidade, integrando testes, cobertura, análise estática e segurança por meio de quality gates.

**Tecnologias e práticas:** DDD, SDD, ADRs, Quality gates, Sonar, CI/CD.

### Automação e QA

Testes com Playwright, Vitest, Selenium e APIs para validar regras de negócio e fluxos críticos, com estratégias de execução automatizada.

**Tecnologias e práticas:** Playwright, Vitest, Selenium, API Testing, Supertest, Testcontainers.

### Aplicações Mobile e Local-First

Desenvolvimento com Kotlin, React, TypeScript, IndexedDB e PWA, priorizando persistência local, funcionamento offline e testes de fluxos mobile.

**Tecnologias e práticas:** Kotlin, React, TypeScript, Room, IndexedDB, PWA.

### IA e Salesforce

Soluções com Salesforce, LWC, APIs e integração com LLMs, aplicando IA em automação e funcionalidades de negócio.

**Tecnologias e práticas:** Salesforce, LWC, Node.js, LLMs, REST APIs.

### ERP e Processamento Financeiro

Sistemas para gestão, contratos, documentos, boletos e processamento CNAB, com automação de rotinas e integração entre sistemas.

**Tecnologias e práticas:** Electron, React / TypeScript, NestJS, SQLite, CNAB 240.

---

## Projetos em Destaque

Os cinco projetos abaixo são apresentados em cards sem fotos, em português e inglês. Os links apontam apenas para repositórios ou documentação públicos.

### ALG Gestão — Sistema de gestão de locação

Android nativo em Kotlin com MVVM/Repository, operação offline com Room e API REST em Node.js/Express, Sequelize e MySQL para gerenciar o ciclo de locação.

- Gestão de clientes, contratos, equipamentos e devoluções, com autenticação JWT, perfis de acesso e isolamento de banco.
- Geração de PDFs e captura de assinaturas nos fluxos de contratos.
- Dashboards financeiros e rotinas de backup.
- Estratégia de testes unitários e instrumentados.

Aplicativo com repositório público.

[Repositório](https://github.com/teecoleonard/alg_gestao)

### ERP Anduril — Gestão Financeira

Sistema desktop com Electron, React, TypeScript e NestJS para gestão de clientes, contratos, terrenos, documentos e boletos.

- SQLite com transações e backup automático para operação local.
- Integração bancária CNAB 240 com geração de remessas e processamento de retornos.
- Exportação de dados para Excel e automação de rotinas financeiras.
- Validação em múltiplas camadas, logging estruturado e tratamento global de erros.

Código privado · documentação pública.

[Repositório de docs](https://github.com/teecoleonard/anduril-docs) · [Documentação](https://teecoleonard.github.io/anduril-docs/)

### CRM SaaS — Plataforma de Gestão Comercial

Plataforma multi-tenant com Java 21, Spring Boot, Next.js, MySQL e Docker, com isolamento de dados e separação entre API, frontend e control plane.

- Gestão de leads, empresas, oportunidades, visitas e pipeline comercial.
- Migrations com Flyway e validação de schema com ddl-auto=validate.
- Quality gates com testes, cobertura, Sonar e CI/CD.
- DDD, ADRs, Spec-Driven Development e critérios de aceite testáveis para orientar a evolução do sistema.

Repositório privado.

### Plataforma de Serviços em Tempo Real

Plataforma em desenvolvimento com backend NestJS, PostgreSQL, Redis e Socket.IO, integrada a uma aplicação mobile React Native/Expo.

- Geolocalização, matching de profissionais e notificações para conectar clientes a prestadores de serviço.
- Chat e tracking em tempo real durante o atendimento.
- Redis para geolocalização, locks e processamento assíncrono.
- Testes de unidade, integração e aceitação com Vitest, Supertest e Testcontainers.

Repositório privado · em desenvolvimento.

### Aplicações com IA e Salesforce

Backend Node.js e componentes Salesforce/LWC para integrar aplicações, APIs, dados corporativos e serviços de IA.

- Backend de integração entre aplicações e serviços de IA.
- Componentes LWC integrados ao ecossistema Salesforce.
- Exploração de LLMs em fluxos de automação e sistemas corporativos.
- Desenvolvimento orientado à integração entre APIs, dados e funcionalidades de negócio.

Repositórios públicos de backend e LWC.

[Backend Node.js](https://github.com/teecoleonard/salesforce-llm-backend) · [Salesforce / LWC](https://github.com/teecoleonard/lwc-salesforce-ia)

---

## Arquitetura do Portfólio

O site utiliza **React 19**, JavaScript e CSS, com componentes organizados por seção. React Router controla as rotas, Framer Motion oferece animações e os contextos de tema e consultas organizam responsabilidades compartilhadas.

- **Página principal:** `src/pages/Home.jsx` reúne as seções de apresentação, competências, QA, arquitetura, projetos e contato.
- **Conteúdo PT/EN:** `src/i18n/pt.json` e `src/i18n/en.json` armazenam os textos traduzidos e os dados exibidos nos cards de projetos.
- **Internacionalização:** i18next e react-i18next fornecem as traduções. O `I18nSynchronizer`, em `src/App.jsx`, sincroniza o idioma com a URL.
- **Rotas de idioma:** `/pt` e `/en`, relativas ao caminho base `/react-portfolio`, resultam em `/react-portfolio/pt` e `/react-portfolio/en`.
- **Competências e projetos:** as áreas de atuação, tecnologias, resumos e links públicos ficam nos arquivos de tradução. Os componentes renderizam esses dados sem imagens ou percentuais de domínio/conclusão.

As competências profissionais listadas acima abrangem diferentes projetos; a implementação deste portfólio usa a stack descrita nesta seção.

## Desenvolvimento Local

```bash
npm install
npm start
```

O projeto usa `react-helmet-async` 3 para compatibilidade com React 19. Há um `override` de TypeScript 5 restrito ao `react-scripts`, pois o i18next requer essa versão e o Create React App declara suporte apenas até TypeScript 4. Este portfólio usa JavaScript/JSX, sem compilação TypeScript; o ajuste deve ser reavaliado se forem adicionados arquivos TypeScript ou se a ferramenta de build mudar.

Para reproduzir exatamente as versões do `package-lock.json`, use `npm ci`.

Build de produção:

```bash
npm run build
```

Os testes de componentes com Testing Library verificam os cinco projetos, as seis áreas de atuação, os links públicos, os filtros e a troca de idioma.

```bash
npm test -- --watchAll=false --runInBand
```

Uma suíte dedicada de acessibilidade, responsividade e E2E, além da configuração de CI/CD do portfólio, fica para uma etapa específica de implementação.

---

## Entre em Contato

Está interessado em colaborar? Vamos conversar!

- **Email:** [leonardo4q@gmail.com](mailto:leonardo4q@gmail.com)
- **LinkedIn:** [linkedin.com/in/leonardohenriquedejesussilva/](https://www.linkedin.com/in/leonardohenriquedejesussilva/)
- **GitHub:** [github.com/teecoleonard](https://github.com/teecoleonard)
- **Portfólio:** [teecoleonard.github.io/react-portfolio](https://teecoleonard.github.io/react-portfolio/)

---

<div align="center">

**© 2025 Leonardo Henrique** • Todos os direitos reservados

</div>
