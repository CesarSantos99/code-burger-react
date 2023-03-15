import React from 'react'

import CartLogo from '../../assets/logo-carinho.svg'
import { CartItems } from '../../components'
import { Container, CartImg } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="Logo do carrinho" />
      <CartItems />
    </Container>
  )
}