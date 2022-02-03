import { useState } from "react";
import { ArrowIcon, Container, Header, LogOutIcon, Main, PlusIcon, SettingsIcon, UserIcon } from "./styles";

interface Props {
  title: string;
  itemTitle: string;
  icon: string;
}

export function DropDown({}: Props) {
  const [ isVisible, setIsVisible ] = useState(false);
  
  return (
    <Container>
      <Header>
        <h1>CALL TO ACTION</h1>
        <ArrowIcon onClick={() => setIsVisible(!isVisible)}/>
      </Header>
      {isVisible && (
        <Main>
          <section>
            <h2>NEW PROJECT</h2>
            <PlusIcon />
          </section>        
        </Main>
      )}
    </Container>
  )
}