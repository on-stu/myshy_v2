import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../lib/colors";

const StyledButton = styled.button`
  font-size: 20px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: none;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 10px;
  width: 150px;
  justify-content: center;
  background-color: ${colors.blue};
  color: white;

  @media screen and (min-width: 1024px) {
    cursor: pointer;
  }
`;

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
