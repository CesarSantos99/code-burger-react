import PropTypes from 'prop-types'
import React from 'react'

import { useCart } from '../../hooks/CartContentx'
import { Button } from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice
} from '../CardsProduct/styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}> Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.prototype = {
  product: PropTypes.object
}
