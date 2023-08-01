import React from 'react'

import CartLogo from '../../assets/logo-carinho.svg'
import { CartItems } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo do carrinho" />
      <Wrapper>
        <CartItems />
      </Wrapper>
    </Container>
  )
}
