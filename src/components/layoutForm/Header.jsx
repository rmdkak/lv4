import React from "react";
import { styled } from "styled-components";
import Button from "../elem/Button";
import { useNavigate } from "react-router-dom";
import Xbox from "../elem/Xbox";

const Header = ({ props }) => {
  const navigate = useNavigate();

  const logOut = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <StHeader>
      <StHeadbar>
        <Logo>B</Logo>
        <Xbox />
      </StHeadbar>
      <StNav>
        <NavBtnBox>
          <NextBtn size="small" onClick={() => navigate(-1)}></NextBtn>
          <PrevBtn size="small" onClick={() => navigate(+1)}></PrevBtn>
        </NavBtnBox>
        <FakeURL>https://www.fakeblog.com</FakeURL>
        <NavBtnBox>
          {props ? (
            <LogInOut size="small" onClick={logOut}>
              Log-out
            </LogInOut>
          ) : (
            <LogInOut size="small" onClick={() => navigate("/login")}>
              Log-in
            </LogInOut>
          )}
        </NavBtnBox>
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
  padding: 2px 10px 2px 10px;
`;

const Logo = styled.div`
  padding-top: 2px;
  font-size: x-large;
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
  padding: 4px 0 0 50px;
  font-size: 14px;
  margin: 2px;
`;

const LogInOut = styled(Button)`
  width: 50px;
  padding: 0;
`;

export default Header;
