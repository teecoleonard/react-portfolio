import React from 'react'
import './experience.css'
import { useTranslation } from 'react-i18next'
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaAndroid, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiFirebase, SiPandas, SiKotlin, SiIonic, SiNestjs, SiSwagger } from 'react-icons/si'

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id='experience'>
      <div className="container experience__container">
        <div className="section__header">
          <h5>{t('experience.sectionTitle')}</h5>
          <h2>{t('experience.title')}</h2>
          
          <p className="section__subtitle">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="experience__grid">
          <div className="experience__frontend">
            <h3>{t('experience.languages')}</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiJavascript />
                </div>
                <div className="experience__skill-info">
                  <h4>JavaScript</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "95%"}}></div>
                  </div>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiTypescript />
                </div>
                <div className="experience__skill-info">
                  <h4>TypeScript</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaPython />
                </div>
                <div className="experience__skill-info">
                  <h4>Python</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaJava />
                </div>
                <div className="experience__skill-info">
                  <h4>Java</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiKotlin />
                </div>
                <div className="experience__skill-info">
                  <h4>Kotlin</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMysql />
                </div>
                <div className="experience__skill-info">
                  <h4>SQL</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
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
                    <div className="experience__skill-progress" style={{width: "95%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiIonic />
                </div>
                <div className="experience__skill-info">
                  <h4>Ionic & Angular</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>
              
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaAndroid />
                </div>
                <div className="experience__skill-info">
                  <h4>Android Studio</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiFirebase />
                </div>
                <div className="experience__skill-info">
                  <h4>Tailwind CSS</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiFirebase />
                </div>
                <div className="experience__skill-info">
                  <h4>Flutter</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "75%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__databases">
            <h3>Back-end & APIs</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaNodeJs />
                </div>
                <div className="experience__skill-info">
                  <h4>Node.js</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiNestjs />
                </div>
                <div className="experience__skill-info">
                  <h4>NestJS</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiSwagger />
                </div>
                <div className="experience__skill-info">
                  <h4>RESTful APIs</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "95%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiSwagger />
                </div>
                <div className="experience__skill-info">
                  <h4>Swagger</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMongodb />
                </div>
                <div className="experience__skill-info">
                  <h4>Microservices</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="experience__databases">
            <h3>Dados & DevOps</h3>
            
            <div className="experience__content">
              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMysql />
                </div>
                <div className="experience__skill-info">
                  <h4>MySQL/SQL Server</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiMongodb />
                </div>
                <div className="experience__skill-info">
                  <h4>MongoDB</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "80%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiFirebase />
                </div>
                <div className="experience__skill-info">
                  <h4>Firebase</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <SiPandas />
                </div>
                <div className="experience__skill-info">
                  <h4>Pandas & Power BI</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaDocker />
                </div>
                <div className="experience__skill-info">
                  <h4>Docker & Git</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "85%"}}></div>
                  </div>
                </div>
              </div>

              <div className="experience__skill">
                <div className="experience__skill-icon">
                  <FaGitAlt />
                </div>
                <div className="experience__skill-info">
                  <h4>Postman & API Testing</h4>
                  <div className="experience__skill-bar">
                    <div className="experience__skill-progress" style={{width: "90%"}}></div>
                  </div>
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