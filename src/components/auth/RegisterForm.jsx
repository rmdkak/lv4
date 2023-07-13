import React from "react";
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

  const signupMutation = useMutation(signUpUser, {
    onSuccess: (data) => {
      alert(data);
      navigate("/login");
    },
  });

  const signupHandler = (e) => {
    e.preventDefault();

    if (!email) {
      alert("email을 작성해주세요.");
      return;
    } else if (!password) {
      alert("password를 작성해주세요.");
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
          <SignupInput type="text" onChange={onchangeEmailHandler} />
          <label>{`//Password`}</label>
          <SignupInput type="password" onChange={onchangepasswordHandler} />
        </SignupInputBox>
        <Button size="medium" border="true" onClick={signupHandler}>
          회원가입
        </Button>
        <Button size="medium" border="true" onClick={() => navigate("/login")}>
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
