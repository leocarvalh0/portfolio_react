import EstiloGlobal from "./styles";
import { Container } from "./styles";

import Header from "./sections/Header/Header";
import Home from "./sections/Home/Home";
import Sobre from "./sections/Sobre/Sobre";
import Skills from "./sections/Skills/Skills";
import SocialLinks from "./sections/SocialLinks/SocialLinks";
import Projetos from "./sections/Projetos/Projetos";
import Contatos from "./sections/Contatos/Contatos";

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
