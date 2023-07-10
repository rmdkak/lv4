import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const WriteForm = () => {
  const navigate = useNavigate();
  return (
    <StContainer>
      <StForm>
        <InputBox>
          <label>{`//TITLE`}</label>
          <TItleInput type="text" />
        </InputBox>
        <InputBox>
          <label>{`//CONTENT`}</label>
          <ContentInput as={"textarea"} />
        </InputBox>
        <BtnBox>
          <Btn type="button" onClick={() => navigate(-1)}>{`type=cancle`}</Btn>
          <Btn>{`type=file`}</Btn>
          <Btn>{`type=submit`}</Btn>
        </BtnBox>
      </StForm>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 93%;
  padding-bottom: 60px;
`;
const StForm = styled.form`
  border: 2px solid;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  gap: 20px;
`;
//인풋창
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-size: xx-large;
  gap: 10px;
`;

const TItleInput = styled.input`
  border: 2px solid;
  width: 400px;
  font-size: x-large;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const ContentInput = styled.input`
  border: 2px solid;
  width: 400px;
  height: 450px;
  font-size: x-large;
  padding: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #2ff40a;
    background-color: #2ff40a;
  }
`;
//버튼창
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Btn = styled.button`
  border: 2px solid #2ff40a;
  padding: 10px;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export default WriteForm;
