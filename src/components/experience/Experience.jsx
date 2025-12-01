import React from 'react'
import './experience.css'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaAndroid } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiPandas, SiKotlin, SiIonic } from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience__container">
        <div className="section__header">
          <h5>Minha Expertise</h5>
          <h2>Tecnologias & Ferramentas</h2>
          
          <p className="section__subtitle">
            Competências técnicas e tecnologias com as quais trabalho regularmente.
          </p>
        </div>

        <div className="experience__grid">
          <div className="experience__frontend">
            <h3>Linguagens de Programação</h3>
            
            <div className="experience__content">
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
                  <FaJava />
                </div>
                <div className="experience__skill-info">
                  <h4>Java</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "70%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiKotlin />
                </div>
                <div className="experience__skill-info">
                  <h4>Kotlin</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "70%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__backend">
            <h3>Front-end & Mobile</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaReact />
                </div>
                <div className="experience__skill-info">
                  <h4>React.js</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "100%"}}></div>
                  </div>
                  <small>Avançado</small>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiIonic />
                </div>
                <div className="experience__skill-info">
                  <h4>Ionic & Angular</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "75%"}}></div>
                  </div>
                  <small>Intermediário</small>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaAndroid />
                </div>
                <div className="experience__skill-info">
                  <h4>Android Studio</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "70%"}}></div>
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

          <div className="experience__databases">
            <h3>Back-end & Dados</h3>
            
            <div className="experience__content">
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
                  <SiPandas />
                </div>
                <div className="experience__skill-info">
                  <h4>Pandas & Power BI</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience