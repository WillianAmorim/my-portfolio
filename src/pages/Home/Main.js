import React from 'react'
import { Container } from '../../styles/Main'
import Image from '../assets/giphy.gif'

import 'animate.css'


const Main = () => {
  return (
    <Container>
      <div className='animate__animated animate__bounceInDown'>
        <img src={Image} alt="" />
      </div>
      <div id='info-home' className='animate__animated animate__bounceInDown'>
        <div>
          <h1>Willian Silva Amorim</h1>
          <p>Desenvolvedor Front-end</p>
        </div>
        <section id='section-links'>
          <div>
            <a href="https://github.com/WillianAmorim" target="_blank" rel="noopener noreferrer">
              <img className='hvr-grow-shadow' src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/willian-s-amorim/" target="_blank" rel="noopener noreferrer">
            <img className='hvr-grow-shadow' src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" />
            </a>
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Main