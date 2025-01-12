import styled from "styled-components"
import Subtitle from "../../components/Subtitle"
import grogu from "../../assets/grogu.gif"

const Infos = styled.div`
    display: flex;

    @media screen and (max-width: 770px) {
        display: grid;
    }
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
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 20px 20px rgb(11, 131, 95);
    }

    @media screen and (max-width: 770px) {
        margin: 80px auto;
    }
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

    @media screen and (max-width: 440px) {
        padding: 10px;
        margin-right: 24px;
    }
`

const Personagem = styled.img`
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
        left: 240px;
    }
`

const Sobre = () => {
    return (
        <section id="sobre">
            <Personagem src={grogu} alt="" />
            <Subtitle titulo="Sobre mim" />
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
    </section>
    )
}

export default Sobre