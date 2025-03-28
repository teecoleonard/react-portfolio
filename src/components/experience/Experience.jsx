import React from 'react'
import './experience.css'
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaDocker, FaFileExcel } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiPandas } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience__container">
        <div className="section__header">
          <h5>Minhas Habilidades</h5>
          <h2>Minha Experiência</h2>
          
          <p className="section__subtitle">
            Minhas competências técnicas atualizadas e tecnologias com as quais trabalho regularmente.
          </p>
        </div>

        <div className="experience__grid">
          <div className="experience__frontend">
            <h3>Desenvolvimento FullStack</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaReact />
                </div>
                <div className="experience__skill-info">
                  <h4>React</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "100%"}}></div>
                  </div>
                  <small>Avançado</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaNodeJs />
                </div>
                <div className="experience__skill-info">
                  <h4>Node.js</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "75%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiJavascript />
                </div>
                <div className="experience__skill-info">
                  <h4>JavaScript</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
                  <small>Avançado</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaDocker />
                </div>
                <div className="experience__skill-info">
                  <h4>Docker</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "45%"}}></div>
                  </div>
                  <small>Básico</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiTypescript />
                </div>
                <div className="experience__skill-info">
                  <h4>TypeScript</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "80%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiFirebase />
                </div>
                <div className="experience__skill-info">
                  <h4>Firebase</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "75%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Análise de Dados</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaFileExcel />
                </div>
                <div className="experience__skill-info">
                  <h4>Excel</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "100%"}}></div>
                  </div>
                  <small>Avançado</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMongodb />
                </div>
                <div className="experience__skill-info">
                  <h4>MongoDB</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "45%"}}></div>
                  </div>
                  <small>Básico</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaPython />
                </div>
                <div className="experience__skill-info">
                  <h4>Python</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "75%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMysql />
                </div>
                <div className="experience__skill-info">
                  <h4>MySQL/SQL</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiPandas />
                </div>
                <div className="experience__skill-info">
                  <h4>Pandas</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "60%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaDatabase />
                </div>
                <div className="experience__skill-info">
                  <h4>Power BI</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
                  <small>Avançado</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience