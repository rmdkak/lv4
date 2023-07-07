import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <StHeadbar>
        <LogoImg></LogoImg>
        <CloseImg></CloseImg>
      </StHeadbar>
      <StNav>
        <FakeURL>https://www.fakeblog.com</FakeURL>
      </StNav>
    </StHeader>
  );
};

//헤더
const StHeader = styled.header`
  border-bottom: 2px solid #2ff40a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
//헤더 위에 바
const StHeadbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 2px;
`;

const LogoImg = styled.div`
  border: 2px solid;
  width: 25px;
  height: 25px;
  margin-left: 10px;
`;

const CloseImg = styled.div`
  border: 2px solid;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;
//헤더 nav바
const StNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #2ff40a;
  height: 30px;
`;

const FakeURL = styled.div`
  border: 2px solid #2ff40a;
  width: 1300px;
  padding-left: 50px;
  font-size: 14px;
  line-height: 20px;
`;

export default Header;
