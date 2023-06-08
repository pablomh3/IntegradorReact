import React from 'react'
import { ProductsCategory } from './ProductsStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/Categories/CategoriesSlice'


const Category = ({id, name, category}) => {

const selectedCategory = useSelector(state => state.categories.selectedCategory)
const dispatch = useDispatch()

  return (
    <ProductsCategory selected={category === selectedCategory}
   onClick={() => dispatch(selectCategory(category))}
    > 
    <h2>{ name }</h2>
    </ProductsCategory>
  )
}

export default Category

//onClick={() => dispatch (selectCategory(category))}