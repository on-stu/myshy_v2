import { useContainer } from "../hooks/useContainer";
import { RiUploadCloud2Line } from "react-icons/ri";
import styled from "styled-components";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import { colors } from "../lib/colors";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../lib/api";
import { SingType } from "../lib/types";
import { useNavigate } from "react-router-dom";

const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .title {
    font-size: xxx-large;
  }
  .headers {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    row-gap: 12px;
  }
  .list {
    margin-top: 24px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 12px;
    column-gap: 12px;
  }
  .categoryName {
    margin-top: 24px;
    font-size: xx-large;
    font-weight: 700;
  }
  #ex_file {
    display: none;
  }
  .button {
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
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .list {
      display: flex;
      flex-direction: column;
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
    }
    .categoryName {
      padding-left: 12px;
      padding-right: 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      text-align: center;
    }
    .button {
      cursor: auto;
    }
  }
`;

const MainPage = () => {
  const Container = useContainer();
  const thumbnailUrl = "https://storage.minsu.info/files/1.png";
  const navigate = useNavigate();

  const [sings, setSings] = useState<SingType[]>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${API}/songs`);
      setSings(response.data);
    })();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <div className="headers">
          <h1 className="title">MyShy</h1>
          <input
            type="file"
            id="ex_file"
            accept="video/*"
            multiple={false}
            onChange={(e) =>
              console.log(e?.target?.files ? e.target.files : "sadf")
            }
          />
          <label htmlFor="ex_file" className="button">
            <span>Upload</span>
            <RiUploadCloud2Line />
          </label>
        </div>
        <SearchBar />
        <h2 className="categoryName">최신 영상</h2>
        <div className="list">
          {sings?.map((sing, i) => (
            <Card
              imgUrl={thumbnailUrl}
              title={sing.title}
              key={i}
              onClick={() => navigate(`/${sing.id}`)}
            />
          ))}
        </div>
      </InnerContainer>
    </Container>
  );
};

export default MainPage;
