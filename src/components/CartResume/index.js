import React from 'react'

import { Button } from '../Button'
import { Container } from './styles'

export function CartResume() {
  return (
    <div>
      <Container>
        <div className="containe-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">R$10,00</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">R$10,00</p>
        </div>
        <div className="containe-bottom">
          <p>Total</p>
          <p>R$20,00</p>
        </div>
      </Container>
      <Button style={{ width: '100%', maginTop: 30 }}>Finalizar pedido</Button>
    </div>
  )
}
