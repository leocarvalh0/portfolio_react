import { useState } from "react"
import styled from "styled-components"

const Cabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 50px;
    transition: .5s;

    @media (max-width: 768px) {
        padding: 30px 20px;
        transition: .5s;
    }
`

const Logo = styled.a`
    font-family: 'Pixelify Sans', sans-serif;
    color: #06c58c;
    border: 4px solid #06c58c;
    font-size: 2.4rem;
    font-weight: bold;
    border-radius: 20%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 45px;
        height: 45px;
    }

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 5px 5px 0 #06c58c;
    }
`

const NavList = styled.ul`
    display: flex;
    letter-spacing: 4px;
    padding: 10px;
            
    @media screen and (max-width: 970px) {
        display: ${({ estaAtivo }) => estaAtivo ? "flex" : "none"};
        position: absolute;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        right: 0;
        top: 0;
        background-color: #1b1d49;
        width: 80%;
        height: 100%;
    }
`

const NavItem = styled.li`
    font-size: 22px;
    margin-right: 40px;
    padding-top: 10px;

    &:hover {
        cursor: pointer;
        color: #06c58c;
        transition: .3s;
        transform: translateY(-5px);
    }
    
    @media screen and (max-width: 375px) {
        margin-bottom: 20px;
        font-size: 26px;
    }

    @media screen and (max-width: 970px) {
        margin-bottom: 20px;
        font-size: 30px;
        background-color: #1b1d49;
    }

    a {
        color: #ffffff;

        @media screen and (max-width: 970px) {
            background-color: #1b1d49;
        }
        
        span {
            color: #06c58c;
        
            @media screen and (max-width: 970px) {
                background-color: #1b1d49;
            }
        }
        
        &:hover {
            color: #06c58c;
        }
    }
`

const Toggle = styled.div`
    div {
        width: 30px;
        height: 2px;
        background-color: #fff;
        margin-top: 8px;
        transition: transform .5s ease;
    }

    :nth-child(1) {
        transform: ${({ estaAtivo }) => estaAtivo ? "rotate(45deg)            translate(7px, 7px)" : "none"};
    }

    :nth-child(2) {
        opacity: ${({ estaAtivo }) => estaAtivo ? 0 : 1 };
    }

    :nth-child(3) {
        transform: ${({ estaAtivo }) => estaAtivo ? "rotate(-45deg) translate(7px, -7px)" : "none"};
    }

    @media screen and (min-width: 970px) {
        display: none;
    }
`


const Header = () => {
    const [estaAtivo, setEstaAtivo] = useState(false);

    function menuToggle() {
        setEstaAtivo(!estaAtivo)
        console.log(estaAtivo);
    }

    return (
        <Cabecalho>
        <Logo href="#">L</Logo>
        <nav>
            <NavList estaAtivo={estaAtivo}>
                <NavItem>
                    <a href="#sobre">
                        <span>I. </span>
                        Sobre
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#skills">
                        <span>II. </span>
                        Skills
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#projetos">
                        <span>III. </span>
                        Projetos
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#contato">
                        <span>IV. </span>
                        Contato
                    </a>
                </NavItem>
            </NavList>
            <Toggle onClick={menuToggle} estaAtivo={estaAtivo}>
                <div></div>
                <div></div>
                <div></div>
            </Toggle>
            </nav>
        </Cabecalho>

    )
}

export default Header