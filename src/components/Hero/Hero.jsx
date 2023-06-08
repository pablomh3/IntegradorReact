import { H1Hero, H3Hero, HeroContainer, HeroData, HeroFoto } from "./HeroStyles"

const Hero = () => {

    return(
    <HeroContainer>
        <HeroData>
            <H1Hero> <h1> Bienvenido al mundo gamer</h1></H1Hero>
            <H3Hero> <h3> Juegues en PC, consola old o new gen, <span> Game Over</span>  te proveerá del más completo catálogo de productos vinculado a videojuegos para que la diversión no termine nunca. Además, registrate en nuestro club exclusivo y recibí beneficios imperdibles.</h3></H3Hero>
        </HeroData>
        <HeroFoto>
            <img src="https://integradorjavascript-taupe.vercel.app/img/istockphoto-1313854295-612x612.jpg" alt="hero" />
        </HeroFoto>
    </HeroContainer>

    ) 
    
}

export default Hero;