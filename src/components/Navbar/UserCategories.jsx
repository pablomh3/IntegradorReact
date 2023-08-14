
import { useSelector } from 'react-redux'
import { ProductosUl } from "./UserStyles";

import UserCategory from "./UserCategory";


const UserCategories = () => {
    const categories = useSelector(state => state.categories.categories)
  return (
    <ProductosUl>
            {
                    categories.map((category) => (
                        <UserCategory key={category.id} {... category}> 
                            {category.name}
                        </UserCategory>
                    ))
                }
            </ProductosUl>
  )
}

export default UserCategories