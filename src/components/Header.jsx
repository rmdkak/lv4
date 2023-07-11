import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <StHeadbar>
        <LogoImg></LogoImg>
        <CloseImg></CloseImg>
      </StHeadbar>
      <StNav>
        <NavMoveBtnBox>
          <NavMoveBtn onClick={() => navigate(-1)}>{`<`}</NavMoveBtn>
          <NavMoveBtn onClick={() => navigate(+1)}>{`>`}</NavMoveBtn>
        </NavMoveBtnBox>
        <FakeURL>https://www.fakeblog.com</FakeURL>
        <NavMoveBtn>Login</NavMoveBtn>
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
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  border-top: 2px solid #2ff40a;
  height: 30px;
`;

const NavMoveBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavMoveBtn = styled.button`
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const FakeURL = styled.div`
  border: 2px solid #2ff40a;
  padding-left: 50px;
  font-size: 14px;
  line-height: 20px;
  margin: 2px;
`;

export default Header;
