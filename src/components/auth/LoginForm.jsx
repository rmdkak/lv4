import React, { useRef } from "react";
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
  const emailRef = useRef();
  const passwordRef = useRef();
  const regEmail =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const loginpMutation = useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem(
        "token",
        JSON.stringify({ token: data.token, email })
      );
      navigate("/");
    },
    onError: (error) => {
      if (
        error.response.data.message === "존재하지 않는 유저입니다." ||
        error.response.data.message === "비밀번호가 일치하지 않습니다."
      )
        alert(error.response.data.message);
    },
  });

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("email을 작성해주세요.");
      emailRef.current.focus();
      return;
    } else if (!regEmail.test(email)) {
      alert("이메일 형식으로 입력해주세요.");
      emailRef.current.focus();
    } else if (!password) {
      alert("password를 작성해주세요.");
      passwordRef.current.focus();
      return;
    } else if (!regPassword.test(password)) {
      alert("숫자+영문자+특수문자 조합으로 입력해주세요.");
      passwordRef.current.focus();
      return;
    }

    const logInData = {
      id: email,
      password: password,
    };

    loginpMutation.mutate(logInData);
  };

  return (
    <StContainer>
      <StLoginForm>
        <LoginTitle>{`//Log-In`}</LoginTitle>
        <LoginInputBox>
          <label>{`//Email`}</label>
          <LoginInput
            type="text"
            autoComplete="username"
            onChange={onchangeEmailHandler}
            ref={emailRef}
          />
          <label>{`//Password`}</label>
          <LoginInput
            type="password"
            autoComplete="current-password"
            onChange={onchangepasswordHandler}
            ref={passwordRef}
          />
        </LoginInputBox>
        <Button size="medium" $outlined={true} onClick={loginHandler}>
          로그인
        </Button>
        <Button
          size="medium"
          $outlined={true}
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
