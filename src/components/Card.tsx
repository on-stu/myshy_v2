import React, { FC } from "react";
import {
  RiEmotionUnhappyLine,
  RiHeart2Fill,
  RiHeart2Line,
  RiMessage3Line,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type CardProps = {
  imgUrl: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .infoDetail {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    column-gap: 8px;
  }
  cursor: pointer;
  @media screen and (max-width: 768px) {
    cursor: auto;
  }
`;

const Card: FC<CardProps> = ({ imgUrl, title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <img src={imgUrl} />
      <div className="info">
        <h2>{title}</h2>
        <span className="infoDetail">
          <RiHeart2Line size={20} />
          20
          <RiEmotionUnhappyLine size={20} />
          30
          <RiMessage3Line size={20} />
          40
        </span>
      </div>
    </Container>
  );
};

export default Card;
