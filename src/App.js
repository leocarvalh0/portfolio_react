import EstiloGlobal from "./styles";
import { Container } from "./styles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
