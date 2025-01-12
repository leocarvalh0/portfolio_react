import Subtitle from "../../components/Subtitle"
import { Infos, Texto, Foto, ButtonsContainer, ButtonCustom } from "./Sobre.styles"

const Sobre = () => {
    return (
        <section id="sobre">
            <Subtitle titulo="Sobre mim" />
            <Infos>
                <div>
                    <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus sed velit sint ut voluptates necessitatibus sapiente perferendis voluptate? Distinctio excepturi nostrum corporis, beatae sapiente veniam ut velit eos error? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quam error tenetur vel quia reprehenderit provident beatae libero. Voluptatibus amet vitae voluptas, dolorem quisquam sapiente sit reiciendis itaque nihil quasi.</Texto>
                    <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus sed velit sint ut voluptates necessitatibus sapiente perferendis voluptate? Distinctio excepturi nostrum corporis, beatae sapiente veniam ut velit eos error?</Texto>
                    <ButtonsContainer>
                        <ButtonCustom>Entrar em contato</ButtonCustom>
                        <ButtonCustom>Dowload CV</ButtonCustom>
                    </ButtonsContainer>
                </div>
                <Foto src="/images/eu.jpg" alt="Minha foto" />
            </Infos>
    </section>
    )
}

export default Sobre