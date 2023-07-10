import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const DetailForm = () => {
  const navigate = useNavigate();
  const deletePost = () => {};
  return (
    <StContainer>
      <StBox>
        <TitleBox>title</TitleBox>
        <ContentBox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quis
          et deleniti recusandae distinctio alias quam praesentium iusto autem
          optio magni adipisci, labore repellendus! Alias quaerat velit
          exercitationem odit dignissimos.
        </ContentBox>
        <BtnBox>
          <Btn onClick={() => navigate(-1)}>{`type=cancle`}</Btn>
          <Btn onClick={() => navigate("/edit:id")}>{`type=edit`}</Btn>
          <Btn onClick={deletePost}>{`type=delete`}</Btn>
        </BtnBox>
      </StBox>
    </StContainer>
  );
};

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 93%;
  padding-bottom: 60px;
`;

const StBox = styled.div`
  border: 2px solid;
  width: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 10px;
  gap: 10px;
`;

const TitleBox = styled.div`
  width: 600px;
  font-size: xx-large;
  padding-bottom: 10px;
  border-bottom: 2px dashed;
`;

const ContentBox = styled.div`
  width: 600px;
  height: 560px;
  font-size: xx-large;
  line-height: 45px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  &::-webkit-scrollbar-thumb {
    border: 2px solid #2ff40a;
    background-color: #2ff40a;
  }
`;
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
export default DetailForm;
