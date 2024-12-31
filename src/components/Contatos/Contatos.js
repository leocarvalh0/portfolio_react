import styled from "styled-components"
import { FaGithub  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";import { MdEmail } from "react-icons/md";


const Section = styled.section`
    padding-bottom: 300px;
    text-align: center;

    h2 {
        font-size: 40px;
        margin-bottom: 80px;
        color: #ccd6f6;
        font-family: 'Pixelify Sans', sans-serif;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;

    p {
        font-size: 20px;
        color: #fff;
        margin-bottom: 8px;
    }

    a {
        font-size: 16px;
    }
`

const IconDiv = styled.div`
    background-color: #202142;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 16px;

    &:hover {
        transform: scale(1.1);
        color: #06c58c;
    }
`

const Icon = styled.div`
    background-color: transparent;
    font-size: 30px;
    fill: #06c58c;

    @media screen and (max-width: 970px) {
        font-size: 2.0rem;
    }
`

const Contatos = () => {
    return (
        <Section>
            <h2>Contatos</h2>
            <Container>
                <Item>
                    <IconDiv>
                        <Icon as={MdEmail} />
                    </IconDiv>
                    <p>E-mail</p>
                    <a>0leonardocarvalho@gmail.com</a>
                </Item>
                <Item>
                    <IconDiv>
                        <Icon as={FaPhoneSquareAlt} />
                    </IconDiv>
                    <p>Telefone</p>
                    <a>(11) 98293-5925</a>
                </Item>
                <Item>
                    <IconDiv>
                        <Icon as={FaLinkedin} />
                    </IconDiv>
                    <p>Linkedin</p>
                    <a>leocarvalh0</a>
                </Item>
                <Item>
                    <IconDiv>
                        <Icon as={FaGithub} />
                    </IconDiv>
                    <p>Github</p>
                    <a>@leocarvalh0</a>
                </Item>
            </Container>
        </Section>
    )
}

export default Contatos