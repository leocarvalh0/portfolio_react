import styled, { css } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Section = styled.section`
    margin-bottom: 300px;
`;

    const Header = styled.header`
    display: flex;
    margin-bottom: 80px;
`;

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

const ContainerBase = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    margin-bottom: 150px;

    img {
        width: 480px;
        height: 300px;
        box-shadow: 10px 10px rgb(172, 172, 172);
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 20px 20px rgb(11, 131, 95);
        }
    }
`;

const ProjetoBase = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: ${({ reverse }) => (reverse ? "left" : "right")};
    margin: ${({ reverse }) => (reverse ? "0 0 0 70px" : "0 70px 0 0")};
`;

const TituloProjeto = styled.h3`
    font-size: 24px;
    letter-spacing: 2px;
    color: #fff;
`;

const Descricao = styled.p`
    font-size: 16px;
    color: #ccd6f6;
`;

const Tecnologias = styled.div`
    display: flex;
    justify-content: ${({ reverse }) => (reverse ? "flex-start" : "flex-end")};
    gap: 16px;

    span {
        font-size: 14px;
        color: #fff;
    }
`;

const Icon = styled.div`
    font-size: 24px;
    fill: #06c58c;
    margin-top: 16px;
    cursor: pointer;
    transition: transform 0.5s;
    text-align: ${({ reverse }) => (reverse ? "left" : "right")};
    margin: ${({ reverse }) => (reverse ? "0 16px 0 0" : "0 0 0 16px")};

    &:hover {
        transform: translateY(-5px);
    }

    @media screen and (max-width: 970px) {
        font-size: 2rem;
    }
`;

const Projeto = ({ title, description, technologies, reverse, image }) => (
    <ContainerBase reverse={reverse}>
        <ProjetoBase reverse={reverse}>
            <TituloProjeto>{title}</TituloProjeto>
            <Descricao>{description}</Descricao>
            <Tecnologias reverse={reverse}>
                {technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </Tecnologias>
            <div>
                <Icon reverse={reverse} as={GoLinkExternal} />
                <Icon as={FaGithub} />
            </div>
        </ProjetoBase>
        <img src={image} alt={`${title} screenshot`} />
    </ContainerBase>
);

const Projetos = () => (
    <Section>
        <Header>
            <Titulo>Projetos</Titulo>
            <Linha />
        </Header>
        <Projeto
            title="Clone Disney+"
            description="Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            technologies={["HTML", "CSS", "JavaScript"]}
            image="images/disney.png"
        />
        <Projeto
            title="Site para restaurante"
            description="Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            technologies={["React", "Styled-components"]}
            image="images/restaurante.png"
            reverse
        />
        <Projeto
            title="Lista de tarefas"
            description="Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            technologies={["Vue"]}
            image="images/tarefas.png"
        />
    </Section>
);

export default Projetos;