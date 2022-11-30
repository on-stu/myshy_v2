import React from "react";
import styled from "styled-components";
import { colors } from "../lib/colors";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.midnight};
  color: white;
`;

export const useContainer = () => {
  return Container;
};
