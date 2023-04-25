import { Container } from "./styles";
import imagem from '../../assets/imagem.jpg' 

export function PageLft(){
    return(
        <Container><img src={imagem} alt="" /></Container>
    )
}