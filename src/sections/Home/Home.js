import coin from "../../assets/coin.gif"
import { Section, Saudacao, Titulo, SubTitulo, Descricao, ButtonCustom } from "./Home.styles"

const Home = () => {
    return (
        <Section>
            <Saudacao>Olá, meu nome é</Saudacao>
            <Titulo>Leonardo Carvalh
                <img src={coin} alt="Moeda girando" />
                </Titulo>
            <SubTitulo>Sou desenvolvedor Front End.</SubTitulo>
            <Descricao>Especializado em criar interfaces atraentes e funcionais com HTML, CSS e JavaScript. Com experiência em frameworks modernos como React e Vue.js, busco sempre transformar ideias em experiências digitais envolventes. Vamos fazer algo incrível juntos!</Descricao>
            <ButtonCustom>Conheça meu trabalho!</ButtonCustom>
        </Section>
    )
}

export default Home