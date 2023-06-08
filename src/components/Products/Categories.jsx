import React from 'react'
import { ProductsCategories } from './ProductsStyles'
import Category from './Category'
import { useSelector } from 'react-redux'

const Categories = () => {
    const categories = useSelector(state => state.categories.categories)
  return (
    <ProductsCategories>
            {
                    categories.map((category) => (
                        <Category key={category.id} {... category}> 
                            {category.name}
                        </Category>
                    ))
                }
            </ProductsCategories>
  )
}

export default Categories