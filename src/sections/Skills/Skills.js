import styled from "styled-components"
import Subtitle from "../../components/Subtitle"
import cat from "../../assets/nian-cat.gif"

import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { LiaJsSquare } from "react-icons/lia";
import { FaReact, FaSass, FaFigma } from "react-icons/fa";

const Item = styled.div`
    background-color: #202142;
    width: 120px;
    height: 120px;
    border-bottom: 4px solid #06c58c; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .3s ease;
    margin-bottom: 80px;

    @media screen and (max-width: 440px) {
        width: 100px;
        height: 100px;
    }

    &:hover {
        transform: scale(1.1);
        color: #06c58c;
    }

    p {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
`

const Icon = styled.div`
    background-color: transparent;
    font-size: 40px;
    fill: #fff;
    margin-top: 16px;

    @media screen and (max-width: 970px) {
        font-size: 2.0rem;
    }
`

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;

    @media screen and (max-width: 440px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
    }
`

// const Gato = styled.img`
//     position: relative;
//     bottom: 200px;
//     left: 820px;

//     @media screen and (max-width: 1200px) {
//         display: none;
//     }
// `

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
            {/* <Gato src={cat} alt="Gato voando com balão" /> */}
        </section>
    )
}

export default Skills