import React from 'react'
import { ProductosLi } from './UserStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/Categories/CategoriesSlice'
import { useNavigate } from 'react-router-dom'


const UserCategory = ({id, name, category}) => {

const selectedCategory = useSelector(state => state.categories.selectedCategory)
const dispatch = useDispatch()
const navigate = useNavigate ()
  return (
    <ProductosLi selected={category === selectedCategory}
   onClick={() => dispatch(selectCategory(category))}
    > 
    <h2 onClick={() => navigate('/productos')}> + { name } </h2>
    </ProductosLi>
  )
}

export default UserCategory