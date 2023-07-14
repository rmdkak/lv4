import React from "react";
import { styled } from "styled-components";
import Button from "../elem/Button";
import { useLocation, useNavigate } from "react-router-dom";
// 내가 생각한 방법
// 그냥 포기하고 초기 화면에 로그인이 안되어있으면 로그인 페이지로 안내

// 창영님 생각
// 토큰을 스테이트로 관리해서 토큰이 존재할 때 로그아웃을 누르면 토큰이 삭제되고 셋스테이트를 null로 리렌더링 유도
// 로그인할 땐 저장된 스토리지를 스테이트의 초기값으로 설정

const Header = ({ props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const logOut = () => {
    localStorage.removeItem("token");
    if (location.pathname === "/") {
      window.location.reload();
    }
    navigate("/");
  };

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
        {props ? (
          <Button size="small" onClick={logOut}>
            Log-out
          </Button>
        ) : (
          <Button size="small" onClick={() => navigate("/login")}>
            Log-in
          </Button>
        )}
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
