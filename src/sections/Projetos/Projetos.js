import styled, { css } from "styled-components";
import Subtitle from "../../components/Subtitle"
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import grogu from "../../assets/grogu.gif"

const ContainerBase = styled.div`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
    margin-bottom: 150px;

    @media screen and (max-width: 924px) {
        flex-direction: column;
        margin-bottom: 120px;
    }

    img {
        width: 480px;
        height: 300px;
        box-shadow: 10px 10px rgb(172, 172, 172);
        transition: box-shadow 0.3s ease;

        &:hover {
            box-shadow: 20px 20px rgb(11, 131, 95);
        }

        @media screen and (max-width: 670px) {
            width: 380px;
            height: 200px;
        }

        @media screen and (max-width: 424px) {
            width: 340px;
            height: 200px;
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

    @media screen and (max-width: 924px) {
        text-align: left;
        width: 60%;
        margin: 0 auto 30px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    @media screen and (max-width: 670px) {
        width: 100%;
    }
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

    @media screen and (max-width: 924px) {
        justify-content: flex-start;
    }

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
        margin: 0 16px 0 0;
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
        display: none;
    }
`

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
    <section id="projetos">
        <Personagem src={grogu} alt="" />
        <Subtitle titulo="Projetos" />
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
    </section>
);

export default Projetos;