import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/logoProduto.svg'
import CardProduct from '../../components/CardsProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoryMenu,
  ProductsContainer
} from './styles'

function Product() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filtereProducts, sefiltereProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProdcts } = await api.get('products')

      const newProducts = allProdcts.map(product => {
        return {
          ...product,
          formatedPrice: formatCurrency(product.price)
        }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      sefiltereProducts(products)
    } else {
      const newFiltereProducts = products.filter(
        product => product.category_id === activeCategory
      )
      sefiltereProducts(newFiltereProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductImg src={ProductLogo} />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filtereProducts &&
          filtereProducts.map(product => (
            <CardProduct key={products.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

export default Product
