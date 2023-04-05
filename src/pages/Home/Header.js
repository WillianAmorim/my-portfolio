import React from 'react'
import { Container } from '../../styles/Header'

const Header = () => {
  return (
    <Container>
      <div>Portifólio</div>
      <ul>
        <li className='hvr-underline-from-left'>Home</li>
        <li className='hvr-underline-from-left'>Sobre Mim</li>
        <li className='hvr-underline-from-left'>Projetos</li>
        <li className='hvr-underline-from-left'>Contate-me</li>
      </ul>
    </Container>
  )
}

export default Header