
import Hero from "../../components/Hero/Hero"
import Productos from "../../components/Products/Products"
import { MainWrapper } from "./MainStyles"

const Main = () => {
    return(
        <>  
        <MainWrapper>
            <Hero/>
            <Productos/>
        </MainWrapper>
             
        </>
        
    )
}

export default Main