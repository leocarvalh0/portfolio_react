import { FaGithub, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Section, Container, Item, IconDiv, IconCustom } from "./Contatos.styles"

const Contatos = () => {
    return (
        <Section id="contato">
            <h2>Contatos</h2>
            <Container>
                <Item>
                    <IconDiv >
                        <IconCustom as={MdEmail} />
                    </IconDiv>
                    <p>E-mail</p>
                    <a>0leonardocarvalho@gmail.com</a>
                </Item>
                <Item>
                    <IconDiv>
                        <IconCustom as={FaPhoneSquareAlt} />
                    </IconDiv>
                    <p>Telefone</p>
                    <a>(11) 98293-5925</a>
                </Item>
                <Item>
                    <a href="https://www.linkedin.com/in/leonardo-carvalho-ramos/" target="_blank">
                        <IconDiv>
                            <IconCustom as={FaLinkedin} />
                        </IconDiv>
                    </a>
                    <p>Linkedin</p>
                    <a>Leonardo Carvalho</a>
                </Item>
                <Item>
                    <a href="https://github.com/leocarvalh0" target="_blank">
                        <IconDiv>
                            <a href="https://github.com/leocarvalh0" />
                            <IconCustom as={FaGithub} />
                        </IconDiv>
                    </a>
                    <p>Github</p>
                    <a>@leocarvalh0</a>
                </Item>
            </Container>
        </Section>
    )
}

export default Contatos