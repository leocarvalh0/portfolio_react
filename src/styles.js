import {styled, createGlobalStyle} from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
        background-color: #17183B;
        color: #8892b0;
    }
`

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    height: 100vh;
    margin-bottom: 300px;

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

export default EstiloGlobal