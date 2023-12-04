
import Hero from "../../components/Hero/Hero"
import Productos from "../../components/Products/Products"
import Contacto from "../Contacto/Contacto"
import { MainWrapper } from "./MainStyles"

const Main = () => {
    return(
        <>  
        <MainWrapper>
            <Hero/>
            <Productos/>
            <Contacto/>
        </MainWrapper>
             
        </>
        
    )
}

export default Main