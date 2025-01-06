import styled from "styled-components"

const Section = styled.section`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 300px;

    @media screen and (max-width: 482px) {
        margin-top: 6px;
    }

    p {
        font-size: 18px;

        @media screen and (max-width: 375px) {
            font-size: 16px;
        }

        @media screen and (max-width: 970px) {
            font-size: 18px;
        }
    }
`

const Saudacao = styled.p`
    color: #06c58c;
    font-family: 'Pixelify Sans', sans-serif;  
    text-transform: uppercase;
`
const Titulo = styled.h1`
    font-size: 6.0rem;
    margin-top: 24px;
    color: #ccd6f6;
    font-family: 'Pixelify Sans', sans-serif;
    text-transform: uppercase;

    @media screen and (max-width: 1024px) {
        font-size: 5.0rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 4.0rem;
    }

    @media screen and (max-width: 482px) {
        font-size: 3.0rem;
        margin-top: 16px;
    }
`
const SubTitulo = styled.h2`
    font-size: 60px;
    margin-top: 24px;
    font-family: 'Pixelify Sans', sans-serif;
    text-transform: uppercase;
    color: #8892b0;
    margin-bottom: 40px;

    @media screen and (max-width: 1024px) {
        font-size: 50px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 482px) {
        font-size: 31px;
        margin-top: 16px;
    }

    @media screen and (max-width: 375px) {
        margin-bottom: 30px;
    }
`
const Descricao = styled.p`
    max-width: 720px;
    line-height: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 482px) {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 375px) {
        width: 100%;
    } 
`
const Botao = styled.button`
    width: 320px;
    height: 60px;
    border-radius: 8px;
    border: 1px solid #06c58c;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    padding: 18px;
    background-color: transparent;
    color: #06c58c;     
    cursor: pointer; 

    @media screen and (max-width: 375px) {
        width: 100%;
        height: 60px;
        margin-top: 40px;
        font-size: 14px;
        padding: 10px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        font-size: 14px;
        height: 60px;
        width: 300px;
    }

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 5px 5px 0 #06c58c;
    }
`

const Home = () => {
    return (
        <Section>
            <Saudacao>Olá, meu nome é</Saudacao>
            <Titulo>Leonardo Carvalho.</Titulo>
            <SubTitulo>Sou desenvolvedor Front End.</SubTitulo>
            <Descricao>Especializado em criar interfaces atraentes e funcionais com HTML, CSS e JavaScript. Com experiência em frameworks modernos como React e Vue.js, busco sempre transformar ideias em experiências digitais envolventes. Vamos fazer algo incrível juntos!</Descricao>
            <Botao>Conheça meu trabalho!</Botao>
        </Section>
    )
}

export default Home