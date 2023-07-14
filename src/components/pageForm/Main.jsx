import React from "react";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { getPosts } from "../../api/posts";
import { useQuery } from "react-query";
import Loading from "../queryComponents/Loading";
import Error from "../queryComponents/Error";

const Main = () => {
  const { isLoading, isError, error, data } = useQuery("posts", getPosts);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error?.response.data.message} />;
  }

  return (
    <StMainContainer>
      <Sidebar />
      <StSection>
        <MainList>
          {`//TITLE`}
          {data.map((item) => (
            <LinkPost
              key={item.id}
              to={`/${item.id}`}
            >{`<a herf=${item.title}/>`}</LinkPost>
          ))}
        </MainList>
        <MaskImg src="/pixelMask.png" alt="" />
      </StSection>
    </StMainContainer>
  );
};

//메인
const StMainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 93%;
  padding-bottom: 50px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #2ff40a;
    background-color: #2ff40a;
  }
`;

//
const StSection = styled.section`
  display: flex;
  padding: 20px 10px 20px 50px;
`;
const MainList = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  font-size: xxx-large;
  gap: 10px;
`;

const LinkPost = styled(Link)`
  font-size: 45px;
  padding: 10px 20px 10px 100px;
`;

const MaskImg = styled.img`
  margin-left: auto;
  width: 200px;
  height: 200px;
  position: sticky;
  top: 40px;
`;

export default Main;
