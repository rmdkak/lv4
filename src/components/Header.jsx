import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Button from "./Button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <StHeadbar>
        <LogoImg></LogoImg>
        <CloseImg></CloseImg>
      </StHeadbar>
      <StNav>
        <NavBtnBox>
          <NextBtn size="small" onClick={() => navigate(-1)}></NextBtn>
          <PrevBtn size="small" onClick={() => navigate(+1)}></PrevBtn>
        </NavBtnBox>
        <FakeURL>https://www.fakeblog.com</FakeURL>
        <Button size="small">Login</Button>
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

const NavBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const PrevBtn = styled(Button)`
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 15px;
    border-color: transparent transparent transparent #2ff40a;
    vertical-align: middle;
    content: "";
  }
`;
const NextBtn = styled(Button)`
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 15px 8px 0;
    border-color: transparent #2ff40a transparent transparent;
    vertical-align: middle;
    content: "";
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
