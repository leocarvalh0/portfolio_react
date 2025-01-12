import {styled, createGlobalStyle} from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 62.5%;
        font-family: "Raleway", serif;
        background-color: #17183B;
        color: #8892b0;
    }
`

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    height: 100vh;

    @media screen and (max-width: 1420px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        padding: 40px;
        width: 100%;
    }
    
    @media screen and (max-width: 482px) {
        padding: 20px;
        width: 100%;
    }
`

export const Button = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: #06c58c;     
    cursor: pointer; 
    border: 1px solid #06c58c;
    border-radius: 10px;

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 5px 5px 0 #06c58c;
    }
`

export const Icon = styled.div`
    font-size: 24px;
    cursor: pointer;
    fill: ${(props) => props.padrao ? '#ccd6f6' : '#06c58c'};

    @media screen and (max-width: 970px) {
        font-size: 2.0rem;
    }
`

export default EstiloGlobal