import { useState } from "react"

import { Cabecalho, Logo, NavList, NavItem, Toggle } from "./Header.styles"

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