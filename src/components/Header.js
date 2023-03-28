import React from 'react'
import { Container } from '../styles/Header'

const Header = () => {
  return (
    <Container>
      <div>Portifólio</div>
      <ul>
        <li>Home</li>
        <li>Sobre Mim</li>
        <li>Projetos</li>
        <li>Contate-me</li>
      </ul>
    </Container>
  )
}

export default Header