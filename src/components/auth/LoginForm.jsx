import React from "react";
import useInput from "../../hooks/useInput";
import { styled } from "styled-components";
import Button from "../elem/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser } from "../../api/posts";

function LoginForm() {
  const navigate = useNavigate();
  const [email, onchangeEmailHandler] = useInput();
  const [password, onchangepasswordHandler] = useInput();

  const loginpMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/");
    },
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("email을 작성해주세요.");
      return;
    } else if (!password) {
      alert("password를 작성해주세요.");
      return;
    }

    const logInData = {
      id: email,
      password: password,
    };
    // 게시물 매칭을 위해서 로그인한 email도 로컬 스토리지에 같이 저장
    loginpMutation.mutate(logInData);
  };

  return (
    <StContainer>
      <StLoginForm>
        <LoginTitle>{`//Log-In`}</LoginTitle>
        <LoginInputBox>
          <label>{`//Email`}</label>
          <LoginInput type="text" onChange={onchangeEmailHandler} />
          <label>{`//Password`}</label>
          <LoginInput type="password" onChange={onchangepasswordHandler} />
        </LoginInputBox>
        <Button size="medium" border="true" onClick={loginHandler}>
          로그인
        </Button>
        <Button
          size="medium"
          border="true"
          onClick={() => navigate("/register")}
        >
          회원가입
        </Button>
      </StLoginForm>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 93%;
  padding-bottom: 60px;
`;

const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LoginTitle = styled.h1`
  font-size: xxx-large;
`;

const LoginInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LoginInput = styled.input`
  border: 2px solid;
  width: 400px;
  font-size: x-large;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export default LoginForm;
