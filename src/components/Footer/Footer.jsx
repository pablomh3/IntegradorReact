import { FooterContainer, FooterImg, FooterName, FooterText } from "./FooterStyles"

const Footer =() => {
    return(
        <FooterContainer>
            <FooterImg>
                <img src="https://integradorjavascript-taupe.vercel.app/img/logosolo.png" alt="logo" />
            </FooterImg>
            <FooterName> game over</FooterName>
            <FooterText>
                <p>Todos los derechos reservados © 2023</p>
            </FooterText>
        </FooterContainer>
    )
}

export default Footer