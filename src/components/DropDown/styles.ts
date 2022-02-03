import styled from "styled-components";
import { RightArrow } from '@styled-icons/boxicons-solid'
import { Plus } from '@styled-icons/evil'
import { User } from '@styled-icons/boxicons-regular'
import { Settings2Outline } from '@styled-icons/evaicons-outline'
import { LogOut } from '@styled-icons/entypo'

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 200px;
  max-height: 20px;            
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  padding: 15px;
  justify-content: space-between;
  background-color: #fe4d55;  

  h1 {
    font-size: 15px;
    color: #FFFFFF;
    font-weight: 600;
  }
`;

export const Main = styled.ul`
  display: flex;
  width: 14.4rem;
  animation: fadeIn 0.4s ease-in-out;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(2rem);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }  
  
  border-radius: 5px;
  flex-direction: column;
  background-color: #fe4d55;    

  li {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    transition: 0.2s;            

    flex-direction: row;
    justify-content: space-between;

    &:hover {
      filter: brightness(0.2);
    }

    h2 {
      font-size: 15px;
      color: #FFFFFF;
      font-weight: 600;
      cursor: pointer;
    }

    img {
      width: 10px;
    }
  }
`; 

export const Button = styled.button``;

export const ArrowIcon = styled(RightArrow)`
  width: 15px;
  color: #FFFFFF;
  cursor: pointer;

  overflow: hidden;
  transition-duration: 0.4s;
  transition-property: transform;

  &:hover {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }
`;

export const PlusIcon = styled(Plus)`
  width: 25px;  
  color: #FFFFFF;
`;

export const UserIcon = styled(User)`
  width: 20px;
  color: #FFFFFF;
`;

export const SettingsIcon = styled(Settings2Outline)`
  width: 20px;
  color: #FFFFFF;
`;

export const LogOutIcon = styled(LogOut)`
  width: 20px;
  color: #FFFFFF;
`;