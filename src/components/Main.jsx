import React from "react";
import { styled } from "styled-components";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <StMainContainer>
      <Sidebar />
      <StSection>
        <MainList>
          {`//TITLE`}
          <LinkPost>{`<a herf=name/>`}</LinkPost>
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
  height: 90%;
  padding-bottom: 42px;
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
  font-size: xxx-large;
  gap: 10px;
`;
const LinkPost = styled.li`
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
