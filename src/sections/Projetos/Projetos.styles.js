import styled from "styled-components"
import {Icon} from "../../styles"

export const ContainerBase = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    margin-bottom: 150px;

    @media screen and (max-width: 924px) {
        flex-direction: column;
        margin-bottom: 120px;
    }

    img {
        width: 480px;
        height: 300px;
        box-shadow: 10px 10px rgb(172, 172, 172);
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 20px 20px rgb(11, 131, 95);
        }

        @media screen and (max-width: 670px) {
            width: 380px;
            height: 200px;
        }

        @media screen and (max-width: 424px) {
            width: 340px;
            height: 200px;
        }
    }
`;

export const ProjetoBase = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: ${({ reverse }) => (reverse ? "left" : "right")};
    margin: ${({ reverse }) => (reverse ? "0 0 0 70px" : "0 70px 0 0")};

    @media screen and (max-width: 924px) {
        text-align: left;
        width: 60%;
        margin: 0 auto 30px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 670px) {
        width: 100%;
    }
`;

export const TituloProjeto = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    color: #fff;
`;

export const Descricao = styled.p`
    font-size: 16px;
    color: #ccd6f6;
`;

export const Tecnologias = styled.div`
    display: flex;
    justify-content: ${({ reverse }) => (reverse ? "flex-start" : "flex-end")};
    gap: 16px;

    @media screen and (max-width: 924px) {
        justify-content: flex-start;
    }

    span {
        font-size: 14px;
        color: #fff;
    }
`;

export const IconCustom = styled(Icon)`
    margin-top: 16px;
    transition: transform 0.5s;
    text-align: ${({ reverse }) => (reverse ? "left" : "right")};
    margin: ${({ reverse }) => (reverse ? "0 16px 0 0" : "0 0 0 16px")};

    &:hover {
        transform: translateY(-5px);
    }

    @media screen and (max-width: 970px) {
        margin: 0 16px 0 0;
    }
`

export const Personagem = styled.img`
    height: 112px;
    position: relative;
    top: 220px;
    left: 400px;

    @media screen and (max-width: 580px) {
        left: 280px;
    }

    @media screen and (max-width: 482px) {
        position: absolute;
        left: 300px;
        top: 874px;
    }

    @media screen and (max-width: 442px) {
        display: none;
    }
`