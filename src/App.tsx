import { DropDown } from './components/DropDown';
import { Container } from './styles';
import { GlobalStyle } from './global/global';

function App() {
  return (
    <>
      <Container>
        <DropDown />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
