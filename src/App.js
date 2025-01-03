import EstiloGlobal from "./styles";
import { Container } from "./styles";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Skills from "./components/Skills/Skills";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Projetos from "./components/Projetos/Projetos";
import Contatos from "./components/Contatos/Contatos";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Home />
        <Sobre />
        <Skills />
        <Projetos />
        <SocialLinks />
        <Contatos />
      </Container>
    </>
  );
}

export default App;
