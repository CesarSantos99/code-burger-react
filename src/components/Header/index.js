import React from 'react'

import Cart from '../../assets/carrinho.png'
import Person from '../../assets/usuario.png'
import {
  Container,
  ContainerLeft,
  PageLink,
  Line,
  ContainerRight,
  ContainerText,
  PageLinkExit
} from './styles'

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <PageLink>Home</PageLink>
        <PageLink>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="usuario" />
        </PageLink>

        <ContainerText>
          <p>Olá, César</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
