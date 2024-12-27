import styled from "styled-components"

const Section = styled.section`
    margin-bottom: 300px;
`

const TituloContainer = styled.div`
    display: flex;
`

const Titulo = styled.h2`
    font-size: 30px;
    margin-bottom: 80px;
    color: #ccd6f6;
    font-family: 'Pixelify Sans', sans-serif;
    
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

const Infos = styled.div`
    display: flex;
`

const Texto = styled.p`
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
`

const Foto = styled.img`
    height: 500px;
    margin-left: 50px;
    box-shadow: 10px 10px rgb(11, 131, 95);
`

const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 60px;
`
const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #06c58c;
    color: #06c58c;
    margin-right: 42px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px) translateX(-5px);
        box-shadow: 5px 5px 0 #06c58c;
    }
`

const Sobre = () => {
    return (
        <Section>
        <TituloContainer>
            <Titulo>Sobre mim</Titulo>
            <Linha></Linha>
        </TituloContainer>
        <Infos>
            <div>
                <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus sed velit sint ut voluptates necessitatibus sapiente perferendis voluptate? Distinctio excepturi nostrum corporis, beatae sapiente veniam ut velit eos error? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quam error tenetur vel quia reprehenderit provident beatae libero. Voluptatibus amet vitae voluptas, dolorem quisquam sapiente sit reiciendis itaque nihil quasi.</Texto>
                <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus sed velit sint ut voluptates necessitatibus sapiente perferendis voluptate? Distinctio excepturi nostrum corporis, beatae sapiente veniam ut velit eos error?</Texto>
                <ButtonsContainer>
                    <Button>Entrar em contato</Button>
                    <Button>Dowload CV</Button>
                </ButtonsContainer>
            </div>
            <Foto src="/images/eu.jpg" alt="Minha foto" />
        </Infos>
    </Section>
    )
}

export default Sobre