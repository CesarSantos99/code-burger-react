import React, { useEffect } from 'react'

import Category from '../../assets/category.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories')
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt="Logo da categoria" />
    </Container>
  )
}

export default CategoryCarousel
