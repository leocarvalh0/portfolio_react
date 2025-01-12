import styled from "styled-components"
import {Button} from '../../styles'

export const Infos = styled.div`
    display: flex;

    @media screen and (max-width: 770px) {
        display: grid;
    }
`

export const Texto = styled.p`
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
`

export const Foto = styled.img`
    height: 500px;
    margin-left: 50px;
    box-shadow: 10px 10px rgb(11, 131, 95);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 20px 20px rgb(11, 131, 95);
    }

    @media screen and (max-width: 770px) {
        margin: 80px auto;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 60px;
`
export const ButtonCustom = styled(Button)`
    padding: 10px 20px;
    margin-right: 42px;

    @media screen and (max-width: 440px) {
        padding: 10px;
        margin-right: 24px;
    }
`