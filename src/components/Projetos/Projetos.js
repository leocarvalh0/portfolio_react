import styled from "styled-components"
import { FaGithub  } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

const Projetos = () => {
    
const Section = styled.section`
    margin-bottom: 300px;
    background-color: #fff;
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

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
`

const Card = styled.div`
    width: 350px;
    padding: 24px;
    background-color: #141532;

    img {
        width: 302px;
        height: 180px;
        margin: 0 auto;
        margin-bottom: 32px;
    }
`

const CardTitulo = styled.h4`
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 2px;
    color: #fff;
    margin-bottom: 32px;
    background-color: #141532;
`

const Descricao = styled.p`
    font-size: 16px;
    margin-bottom: 24px;
    letter-spacing: 3px;
    line-height: 20px;
    background-color: #141532;
`

const Mais = styled.p`
    font-size: 12px;
    text-align: right;
    margin-bottom: 24px;
    background-color: #141532;
`

const CardLinha = styled.div`
    background-color: rgb(68, 68, 68);
    width: 302px;
    height: 2px;
    margin-bottom: 40px;
`

const CardLinks = styled.div`
    display: flex;
    background-color: #141532;
`

const Item = styled.div`
    font-size: 16px;
    color: #fff;
    display: flex;
    margin-right: 80px;
    background-color: #141532;
`

const Icon = styled.div`
    font-size: 24px;
    fill: #06c58c;
    margin-right: 16px;
`

    return (
        <Section>
            <Header>
                <Titulo>Projetos</Titulo>
                <Linha></Linha>
            </Header>
            <Container>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
                <Card>
                    <img src="images/image.png" alt="Clone Disney+" />
                    <CardTitulo># Clone Disney+</CardTitulo>
                    <Descricao>Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada.</Descricao>
                    <Mais>Saiba mais...</Mais>
                    <CardLinha></CardLinha>
                    <CardLinks>
                        <Item>
                            <Icon as={FaGithub} />                  
                            Github
                        </Item>
                        <Item>
                            <Icon as={IoLogoVercel} />                  
                            Github
                        </Item>
                    </CardLinks>
                </Card>
            </Container>
        </Section>
    )
}

export default Projetos