import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/logoProduto.svg'
import api from '../../services/api'
import { Container, ProductImg, CategoryButton, CategoryMenu } from './styles'

function Product() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()
  }, [])
  return (
    <Container>
      <ProductImg src={ProductLogo} />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton type="button" key={category.id}>
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
    </Container>
  )
}

export default Product
