import styled from "styled-components"

const TituloContainer = styled.div`
    display: flex;
    margin-top: 300px;

    @media screen and (max-width: 482px) {
        margin-top: 100px;
    }
`

const Titulo = styled.h2`
    font-size: 30px;
    margin-bottom: 80px;
    color: #ccd6f6;
    font-family: 'Pixelify Sans', sans-serif;
    
    &::before {
        content: ".";
        width: 2px;
        margin-right: 16px;
        background-color: #06c58c;
    }
`

const Linha = styled.div`
    background-color: rgb(68, 68, 68);
    width: 300px;
    height: 2px;
    margin-top: 20px;
    margin-left: 30px;
`
const Subtitle = (props) => {
    return (
        <TituloContainer>
            <Titulo>{props.titulo}</Titulo>
            <Linha></Linha>
        </TituloContainer>
    )
}

export default Subtitle