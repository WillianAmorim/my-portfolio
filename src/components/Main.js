import React from 'react'
import { Container } from '../styles/Main'
import Image from '../assets/giphy.gif'


const Main = () => {
  return (
    <Container>
      <div>
        <img src={Image} alt="" />
      </div>
      <div id='info-home'>
        <h1>Desenvolvedor Front-end</h1>
        <section id='section-links'>
          <div>
            <a href="https://github.com/WillianAmorim" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/willian-s-amorim/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
            </a>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Main