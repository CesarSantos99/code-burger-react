import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice
} from '../CardsProduct/styles'

export function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button> Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.prototype = {
  product: PropTypes.object
}
