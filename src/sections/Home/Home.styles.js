import styled from "styled-components"
import {Button} from "../../styles"

export const Section = styled.section`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 482px) {
        margin-bottom: 200px;
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
export const Saudacao = styled.p`
    color: #06c58c;
    font-family: 'Pixelify Sans', sans-serif;  
    text-transform: uppercase;
`
export const Titulo = styled.h1`
    font-size: 6.0rem;
    margin-top: 24px;
    color: #ccd6f6;
    font-family: 'Pixelify Sans', sans-serif;
    text-transform: uppercase;
    white-space: nowrap;

    img {
        height: 64px;
        position: relative;
        top: 13px;
        right: 53px;
        background-color: transparent;

        @media screen and (max-width: 1024px) {
            height: 53px;
            right: 45px;
            top: 11px;
        }
            
        @media screen and (max-width: 768px) {
            height: 45px;
            right: 39px;
            top: 10px;
        }

        @media screen and (max-width: 482px) {
            height: 34px;
            right: 29px;
            top: 8px;
        }

    }

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
export const SubTitulo = styled.h2`
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
export const Descricao = styled.p`
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
export const ButtonCustom = styled(Button)`
    width: 320px;
    height: 60px;
    letter-spacing: 2px;
    padding: 18px;

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
`