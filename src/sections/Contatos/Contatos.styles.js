import styled from "styled-components";
import {Icon} from "../../styles"

export const Section = styled.section`
    margin-top: 200px;
    padding-bottom: 200px;
    text-align: center;

    @media screen and (max-width: 769px) {
        padding-bottom: 50px;
    }

    h2 {
        font-size: 40px;
        margin-bottom: 80px;
        color: #ccd6f6;
        font-family: 'Pixelify Sans', sans-serif;
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center; 
        row-gap: 40px;
    }

    @media screen and (max-width: 510px) {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 100%);
        justify-items: center; 
        row-gap: 20px;
    }
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;

    p {
        font-size: 20px;
        color: #fff;
        margin-bottom: 8px;
    }

    a {
        font-size: 16px;
    }
`
export const IconDiv = styled.div`
    background-color: #202142;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 16px;

    &:hover {
        transform: scale(1.1);
        color: #06c58c;
    }
`
export const IconCustom = styled(Icon)`
    font-size: 30px;
`