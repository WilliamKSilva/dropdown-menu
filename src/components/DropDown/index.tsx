import { ReactChildren, useState } from "react";
import { ArrowIcon, Container, Header, LogOutIcon, Main, PlusIcon, SettingsIcon, UserIcon } from "./styles";

interface Props {
  itemTitle: string;
  icon?: string;
  content: ReactChildren;
}

export function DropDown() {
  const [ isVisible, setIsVisible ] = useState(false);
  
  return (
    <Container>
      <Header>
        <h1>CALL TO ACTION</h1>
        <ArrowIcon onClick={() => setIsVisible(!isVisible)}/>
      </Header>
      {isVisible && (
        <Main>
          <li>
            <h2>NEW PROJECT</h2>
            <PlusIcon />
          </li>
          <li>
            <h2>VIEW PROFILE</h2>
            <UserIcon />
          </li>        
        </Main>
      )}
    </Container>
  )
}