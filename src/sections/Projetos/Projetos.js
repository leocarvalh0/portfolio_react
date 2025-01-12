import Subtitle from "../../components/Subtitle"
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import grogu from "../../assets/grogu.gif"
import disney from "../../assets/disney.png"
import restaurante from "../../assets/restaurante.png"
import tarefas from "../../assets/tarefas.png"
import { ContainerBase, ProjetoBase, TituloProjeto, Descricao, Tecnologias, IconCustom, Personagem } from './Projetos.styles'

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
                <IconCustom reverse={reverse} as={GoLinkExternal} />
                <IconCustom as={FaGithub} />
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
            image={disney}
        />
        <Projeto
            title="Site para restaurante"
            description="Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            technologies={["React", "Styled-components"]}
            image={restaurante}
            reverse
        />
        <Projeto
            title="Lista de tarefas"
            description="Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
            technologies={["Vue"]}
            image={tarefas}
        />
    </section>
);

export default Projetos;