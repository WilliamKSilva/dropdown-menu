import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-color: #242423;       
`;

export const Content = styled.main`     
    display: flex;
    align-items: center;
    padding: 0.8rem;            

    flex-direction: row;
    justify-content: space-between;

    h2 {
      font-size: 15px;
      color: #FFFFFF;
      font-weight: 600;
    }
`;