import EstiloGlobal from "./styles";
import { Container } from "./styles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/Sobre";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Home />
        <Sobre />
        <Skills />
      </Container>
    </>
  );
}

export default App;
