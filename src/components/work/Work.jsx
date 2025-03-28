import React from 'react'
import './work.css'
import { FaBriefcase, FaBuilding, FaCalendarAlt } from 'react-icons/fa'

const Work = () => {
  return (
    <section id="work">
      <div className="container work__container">
        <div className="section__header">
          <h5>Experiência Profissional</h5>
          <h2>Experiência & Serviços</h2>
          <p className="section__subtitle">
            Minha jornada profissional e os serviços que ofereço.
          </p>
        </div>
        
        <div className="work__content">
          <div className="work__experiences">
            <h3>Experiências Profissionais</h3>
            
            <div className="work__timeline">
              <div className="work__item">
                <div className="work__item-header">
                  <div className="work__item-icon">
                    <FaBriefcase />
                  </div>
                  <h4>Analista de Processos</h4>
                  <div className="work__item-company">
                    <FaBuilding /> <span>NTT DATA</span>
                  </div>
                  <div className="work__item-period">
                    <FaCalendarAlt /> <span>Jul 2023 - Atual</span>
                  </div>
                </div>
                <div className="work__item-content">
                  <p>
                  Utilizo minhas habilidades especializadas para extrair, transformar e visualizar dados cruciais do banco de dados. Isso me permite traduzir informações em painéis interativos e relatórios para várias equipes.
                  </p>
                  <ul>
                    <li>Mantenho o banco de dados de clientes atualizado no CRM, garantindo a integridade dos dados, contribuindo para a comunicação de informações de desempenho a partes internas interessadas, matriz e gerência.</li> 
                    <li>Realizo o monitoramento mensal das matrículas ativas e sou responsável pelos relatórios de atendimento, informações de lojas e relatórios de carga.</li>
                    <li>Desenvolvo e gerencio indicadores-chave de desempenho, fornecendo insights para aprimorar a eficiência operacional.</li>
                    <li>Realizo a utilização em sistemas de gestão empresarial, com foco especializado na ferramenta SAP. Minha jornada inclui a implementação bem-sucedida e a customização de soluções SAP para otimizar operações em diversas áreas, como finanças, recursos humanos e logística.</li>
                  </ul>
                </div>
              </div>
              
              <div className="work__item">
                <div className="work__item-header">
                  <div className="work__item-icon">
                    <FaBriefcase />
                  </div>
                  <h4>Analista de Operações</h4>
                  <div className="work__item-company">
                    <FaBuilding /> <span>NTT DATA</span>
                  </div>
                  <div className="work__item-period">
                    <FaCalendarAlt /> <span>Jun 2023 - Jul 2023</span>
                  </div>
                </div>
                <div className="work__item-content">
                  <p>
                  Especialista em otimização de processos, melhoria de eficiência e obtenção de resultados. Experiência em monitorar e analisar fluxos de trabalho, identificar oportunidades de aprimoramento e implementar mudanças estratégicas.
                  </p>
                  <ul>
                    <li>Coleta e analisa dados operacionais para identificar tendências e insights. Desenvolvimento e implemenção de processos, garantindo alta qualidade e conformidade.</li>
                    <li>Colabora com equipes internas, promovendo coordenação e alcançando metas operacionais. Prepara relatórios e apresentações impactantes.</li>
                    <li>Excelentes habilidades de comunicação e tomada de decisões.</li>
                    <li>Impulsiona o sucesso operacional e contribui para o crescimento da organização.</li>
                  </ul>
                </div>
              </div>

              <div className="work__item">
                <div className="work__item-header">
                  <div className="work__item-icon">
                    <FaBriefcase />
                  </div>
                  <h4>BackOffice</h4>
                  <div className="work__item-company">
                    <FaBuilding /> <span>Algar Tech</span>
                  </div>
                  <div className="work__item-period">
                    <FaCalendarAlt /> <span>Jun 2023 - Jul 2023</span>
                  </div>
                </div>
                <div className="work__item-content">
                  <p>
                  Realizo análise crítica de contas com valores de alto risco para a devolução de saldos residuais em contas relacionadas ao Bradesco. 
                  </p>
                  <ul>
                    <li>Meu trabalho visa garantir a conformidade e a segurança das operações, sempre mantendo o compromisso com a integridade do cliente e a transparência nos processos financeiros.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="work__services">
            <h3>Serviços Oferecidos</h3>
            
            <div className="work__services-grid">
              <div className="work__service-card">
                <div className="work__service-icon">🖥️</div>
                <h4>Desenvolvimento Frontend</h4>
                <p>
                  Criação de interfaces de usuário modernas, responsivas e de alta performance utilizando React, TypeScript e CSS avançado.
                </p>
                <ul className="work__service-features">
                  <li>Single Page Applications (SPAs)</li>
                  <li>Interfaces responsivas</li>
                  <li>Animações e interações</li>
                  <li>Performance otimizada</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">⚙️</div>
                <h4>Desenvolvimento Backend</h4>
                <p>
                  Desenvolvimento de APIs robustas, sistemas de banco de dados e lógica de servidor com Node.js, Express e MySQL/SQL.
                </p>
                <ul className="work__service-features">
                  <li>APIs RESTful</li>
                  <li>Autenticação e segurança</li>
                  <li>Modelagem de dados</li>
                  <li>Integração com serviços</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">🚀</div>
                <h4>Aplicações Fullstack</h4>
                <p>
                  Desenvolvimento completo de aplicações web do conceito à implementação, incluindo arquitetura, frontend e backend.
                </p>
                <ul className="work__service-features">
                  <li>Aplicações web completas</li>
                  <li>PWAs (Progressive Web Apps)</li>
                  <li>E-commerce e plataformas</li>
                  <li>Painéis administrativos</li>
                </ul>
              </div>
              
              <div className="work__service-card">
                <div className="work__service-icon">🔍</div>
                <h4>Consultoria Técnica</h4>
                <p>
                  Análise e consultoria para projetos existentes, melhorias de performance, refatoração e revisão de código.
                </p>
                <ul className="work__service-features">
                  <li>Análise de código</li>
                  <li>Otimização de performance</li>
                  <li>Arquitetura de software</li>
                  <li>Melhores práticas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
