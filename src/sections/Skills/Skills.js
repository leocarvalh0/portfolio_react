import Subtitle from "../../components/Subtitle"
import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { LiaJsSquare } from "react-icons/lia";
import { FaReact, FaSass, FaFigma } from "react-icons/fa";
import { Item, Icon, SkillsContainer } from "./Skills.styles"

const Skills = () => {
    return (
        <section id="skills">
            <Subtitle titulo="Skills" />
            <SkillsContainer>
                <Item>
                    <p>HTML</p>
                    <Icon as={ImHtmlFive2} />
                </Item>
                <Item>
                    <p>CSS</p>
                    <Icon as={SiCss3} />
                </Item>
                <Item>
                    <p>JavaScript</p>
                    <Icon as={LiaJsSquare} />
                </Item>
                <Item>
                    <p>React</p>
                    <Icon as={FaReact} />
                </Item>
                <Item>
                    <p>Sass</p>
                    <Icon as={FaSass} />
                </Item>
                <Item>
                    <p>Figma</p>
                    <Icon as={FaFigma} />
                </Item>         
                <Item>
                    <p>HTML</p>
                    <Icon as={ImHtmlFive2} />
                </Item>
                <Item>
                    <p>CSS</p>
                    <Icon as={SiCss3} />
                </Item>
                <Item>
                    <p>JavaScript</p>
                    <Icon as={LiaJsSquare} />
                </Item>
                <Item>
                    <p>React</p>
                    <Icon as={FaReact} />
                </Item>
                <Item>
                    <p>Sass</p>
                    <Icon as={FaSass} />
                </Item>
                <Item>
                    <p>Figma</p>
                    <Icon as={FaFigma} />
                </Item>         
            </SkillsContainer>
        </section>
    )
}

export default Skills