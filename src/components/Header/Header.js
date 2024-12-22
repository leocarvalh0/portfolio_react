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
        display: none;
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
                
    a {
        color: #ffffff;
                    
        span {
            color: #06c58c;
        }

        &:hover {
            color: #06c58c;
        }
    }
`

const Header = () => {
    return (
        <Cabecalho>
        <Logo href="#">L</Logo>
        <nav>
            <NavList>
                <NavItem>
                    <a href="#">
                        <span>I. </span>
                        Sobre
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <span>II. </span>
                        Skills
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <span>III. </span>
                        Projetos
                    </a>
                </NavItem>
                <NavItem>
                    <a href="#">
                        <span>IV. </span>
                        Contato
                    </a>
                </NavItem>
            </NavList>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            </nav>
        </Cabecalho>

    )
}

export default Header