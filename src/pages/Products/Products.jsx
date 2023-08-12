import { useSelector } from "react-redux";
import Cards from "../../components/Products/Card";
import { ProductsContainer, ProductsRender, ProductsTitle, VerMas, VerMasButton, VerMenosButton } from "../../components/Products/ProductsStyles"
import Categories from "../../components/Products/Categories";
import { useEffect, useState } from "react";
import { INITIAL_LIMIT } from "../../constants/constants";
import { FelicitacionesWrapper } from "../Felicitaciones/FelicitacionesStyles";


const Products = () => {

const [limit, setLimit] = useState(INITIAL_LIMIT)
let products = useSelector(state => state.productos.products)

const selectedCategory = useSelector(state => state.categories.selectedCategory)
const totalProducts = useSelector(state => state.productos.totalProducts)

if (selectedCategory) {
    products = {
        [selectedCategory]: products[selectedCategory]
    }
}
    useEffect (() => setLimit (INITIAL_LIMIT), [selectedCategory])
    return(
        <FelicitacionesWrapper>
             <ProductsContainer>
            <ProductsTitle> <img src="https://integradorjavascript-taupe.vercel.app/img/fuego.png" alt="fuego"/> 
            Productos en stock 
            <img src="https://integradorjavascript-taupe.vercel.app/img/fuego.png" alt="fuego" /> 
            </ProductsTitle>
            <Categories>

            </Categories>
            <ProductsRender>

                { Object.entries(products).map(([_category, items]) =>
                items.map(product => {
                    if (limit >= product.id || selectedCategory){
                        return <Cards key={product.id} {...product}/>
                    } else return null
                })
                )
                } 
            
            </ProductsRender>
                {
                    !selectedCategory &&
                    <VerMas>
                         <VerMasButton
                          onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
                          disabled={totalProducts <= limit }>
                             + Productos
                        </VerMasButton>   

                        <VerMenosButton
                          onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
                          disabled={limit === INITIAL_LIMIT}>
                             - Productos
                        </VerMenosButton>  
                    </VerMas>
                }
            
        </ProductsContainer>
        </FelicitacionesWrapper>
       
        
    )
}
 export default Products;

