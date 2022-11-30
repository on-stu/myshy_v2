import { Outlet } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import styled from "styled-components";
import Footer from "./Footer";
const Container = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  color: white;
  font-size: 32px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

const Headers = () => {
  return (
    <Container>
      <IconContainer>
        <RiUserLine />
      </IconContainer>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Headers;
