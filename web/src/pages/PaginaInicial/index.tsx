import styled from "styled-components";
import Atividades from "./../../components/Atividades";
import Banner from "./../../components/Banner";
import Depoimentos from "./../../components/Depoimentos";
import Pesquisa from "./../../components/Pesquisa";

const Container = styled.section`
display:flex;
flex-direction:column;
alingn-itens:center;
`

export default function PaginaInicial(){
    return(
        <>
        <Banner />
        <Container>
            <Pesquisa />
            <Atividades />
            <Depoimentos />
        </Container>
        </>
    )
}