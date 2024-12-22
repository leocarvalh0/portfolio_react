import styled from "styled-components"

const Section = styled.section`
    margin-bottom: 300px;
`

const Header = styled.section`
    display: flex;
`
const Titulo = styled.div`
    font-size: 30px;
    margin-bottom: 80px;
    color: #ccd6f6;

    &::before {
        content: ".";
        width: 2px;
        margin-right: 16px;
        background-color: #06c58c;
    }
`
const Linha = styled.div`
    background-color: rgb(68, 68, 68);
    width: 300px;
    height: 2px;
    margin-top: 20px;
    margin-left: 30px;
`
const SubTitulo = styled.h3`
    font-size: 20px;
`
const ListaPrincipais = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 80px;
`
const PrincipaisItem = styled.li`
    margin-right: 16px;

    img {
        width: 60px;
        
        &:hover {
            transform: translateY(-5px);
            transition: .3s;
        }
    }
`
const ListaOutros = styled.ul`
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const OutrosItem = styled.li`
    font-size: 18px;
    margin-bottom: 16px;

    &:hover {
        color: #06c58c;
        transform: translateY(-2px);
    }
`

const Skills = () => {
    return (
        <Section>
        <Header>
            <Titulo>Skills</Titulo>
            <Linha></Linha>
        </Header>
        <SubTitulo>Principais conhecimentos:</SubTitulo>
        <ListaPrincipais>
            <PrincipaisItem>
                <img src="images/html.png" alt=""/>
            </PrincipaisItem>
            <PrincipaisItem>
                <img src="images/css.png" alt=""/>
            </PrincipaisItem>
            
            <PrincipaisItem>
                <img src="images/folder.png" alt=""/>
            </PrincipaisItem>
            <PrincipaisItem>
                <img src="images/physics.png" alt=""/>
            </PrincipaisItem>
        </ListaPrincipais>
        <SubTitulo>Outros conhecimentos:</SubTitulo>
        <ListaOutros>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Bootstrap
            </OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                APIs
            </OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                TypeScript
            </OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Gulp e Grunt</OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Git
            </OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Redux
            </OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Sass e Less</OutrosItem>
            <OutrosItem>
                <ion-icon name="caret-forward-outline"></ion-icon>
                Jquery
            </OutrosItem>
        </ListaOutros>
    </Section>
    )
}

export default Skills