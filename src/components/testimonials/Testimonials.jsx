import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Dados dos depoimentos
const data = [
  {
    avatar: AVTR1,
    name: 'Camila Rodrigues',
    review: 'Leonardo é um profissional excepcional. Ele transformou nossa ideia em um site incrível, com excelente usabilidade e design moderno. Altamente recomendado para qualquer projeto web!'
  },
  {
    avatar: AVTR2,
    name: 'Ricardo Almeida',
    review: 'Trabalhei com Leonardo em um projeto complexo de e-commerce e fiquei impressionado com sua habilidade técnica e capacidade de resolver problemas. Entregou tudo dentro do prazo e com qualidade impecável.'
  },
  {
    avatar: AVTR3,
    name: 'Fernanda Lima',
    review: 'Contratamos o Leonardo para renovar nosso site institucional e o resultado superou nossas expectativas. Além de um design elegante, ele implementou funcionalidades que melhoraram significativamente a experiência do usuário.'
  },
  {
    avatar: AVTR4,
    name: 'André Santos',
    review: 'Leonardo é um desenvolvedor extremamente dedicado e talentoso. Seu conhecimento técnico é vasto e sua comunicação é clara e eficiente. Já estamos planejando novos projetos com ele.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>O Que Meus Clientes Dizem</h5>
      <h2>Depoimentos</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials