import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { API } from "../lib/api";
import { SingType } from "../lib/types";
import { MdOutlineArrowBack } from "react-icons/md";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: white;
  }
  .icon {
    font-size: 40px;
    color: white;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .icon {
      cursor: auto;
    }
  }
`;

const DetailPage = () => {
  let { songId } = useParams();
  const [song, setSong] = useState<SingType>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(API + `/songs/${songId}`);
      setSong(response.data);
    })();
  }, []);

  return (
    <Container>
      <header>
        <MdOutlineArrowBack
          className="icon"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>{song?.title}</h3>
      </header>
      {song?.url && (
        <video
          controls
          width={
            window.innerWidth < 768
              ? window.innerWidth * 0.75
              : window.innerWidth * 0.5
          }
          playsInline
        >
          <source src={song?.url} type="video/mp4" />
        </video>
      )}
    </Container>
  );
};

export default DetailPage;
