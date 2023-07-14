import React, { useRef } from "react";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-query";
import { signUpUser } from "../../api/posts";
import { styled } from "styled-components";
import Button from "../elem/Button";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const [email, onchangeEmailHandler] = useInput();
  const [password, onchangepasswordHandler] = useInput();
  const regEmail =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const regPassword = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  const emailRef = useRef();
  const passwordRef = useRef();

  const signupMutation = useMutation(signUpUser, {
    onSuccess: () => {
      alert("회원가입이 정상적으로 이뤄졌습니다.");
      navigate("/login");
    },
    onError: (error) => {
      if (error.response.data.message === "이미 존재하는 유저 id입니다.")
        alert("이미 존재하는 유저 id입니다.");
    },
  });

  const signupHandler = (e) => {
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

    const signUpData = {
      id: email,
      password: password,
    };
    signupMutation.mutate(signUpData);
  };

  return (
    <StContainer>
      <SignupForm>
        <SignupTitle>{`//Sign-Up`}</SignupTitle>
        <SignupInputBox>
          <label>{`//Email`}</label>
          <SignupInput
            type="text"
            autoComplete="username"
            onChange={onchangeEmailHandler}
            ref={emailRef}
          />
          <label>{`//Password`}</label>
          <SignupInput
            type="password"
            autoComplete="current-password"
            onChange={onchangepasswordHandler}
            ref={passwordRef}
          />
        </SignupInputBox>
        <Button size="medium" $outlined={true} onClick={signupHandler}>
          회원가입
        </Button>
        <Button
          size="medium"
          $outlined={true}
          onClick={() => navigate("/login")}
        >
          로그인
        </Button>
      </SignupForm>
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

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SignupTitle = styled.h1`
  font-size: xxx-large;
`;

const SignupInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignupInput = styled.input`
  border: 2px solid;
  width: 400px;
  font-size: x-large;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export default RegisterForm;
