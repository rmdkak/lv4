import React from "react";
import { styled } from "styled-components";

const Sidebar = () => {
  return (
    <StSidebar>
      <SidebarTitle>{`//KETEGORIE`}</SidebarTitle>
      <KetegorieBox>
        <KetegorieList>{`<li name/>`}</KetegorieList>
      </KetegorieBox>
      <WriteBtn>{`//WRITE`}</WriteBtn>
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
  padding: 20px;
  gap: 20px;
  overflow: hidden;
`;

const KetegorieList = styled.li`
  font-size: xx-large;
`;
const WriteBtn = styled.button`
  border: 2px solid #2ff40a;
  width: 220px;
  height: 80px;
  font-size: 30px;
  position: sticky;
  top: 83%;
  &:hover {
    cursor: pointer;
  }
`;

export default Sidebar;
