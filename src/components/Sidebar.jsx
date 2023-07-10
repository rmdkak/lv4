import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <StSidebar>
      <SidebarTitle>{`//KETEGORIE`}</SidebarTitle>
      <KetegorieBox>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
        <KetegorieList>{`<li name/>`}</KetegorieList>
      </KetegorieBox>
      <WriteBtn onClick={() => navigate("/write")}>{`//WRITE`}</WriteBtn>
    </StSidebar>
  );
};

//사이드바
const StSidebar = styled.aside`
  border-right: 2px solid #2ff40a;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SidebarTitle = styled.div`
  font-size: 37px;
  padding: 20px;
`;
const KetegorieBox = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid #2ff40a;
  width: 220px;
  max-height: 492px;
  padding: 20px 20px 20px 25px;
  gap: 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #2ff40a;
    background-color: #2ff40a;
  }
`;

const KetegorieList = styled.li`
  font-size: xx-large;
`;
const WriteBtn = styled.button`
  border: 2px solid #2ff40a;
  padding: 10px 51px 10px 51px;
  font-size: 30px;
  position: sticky;
  top: 83%;
  &:hover {
    cursor: pointer;
  }
`;

export default Sidebar;
