import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  color: white;
`;

const Footer = () => {
  return (
    <Container>
      <p>MyShy</p>
    </Container>
  );
};

export default Footer;
