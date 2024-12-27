import styled from "styled-components"

import { ImHtmlFive2 } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { LiaJsSquare } from "react-icons/lia";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


const Section = styled.section`
    margin-bottom: 300px;
`

const Header = styled.section`
    display: flex;
`
const Titulo = styled.div`
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
    display: flex;
    justify-content: space-around;
    margin-top: 80px;
`

const Skills = () => {
    return (
        <Section>
        <Header>
            <Titulo>Skills</Titulo>
            <Linha></Linha>
        </Header>
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
        </SkillsContainer>
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
        </SkillsContainer>
    </Section>
    )
}

export default Skills