import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { patchPosts } from "../api/posts";
import { useMutation, useQueryClient } from "react-query";
import Button from "./Button";
import useInput from "../hooks/useInput";

const EditForm = () => {
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangecontentHandler] = useInput();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const params = useParams();
  const titleRef = useRef("");
  const contentRef = useRef("");

  const mutation = useMutation(patchPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const postSubmitHandler = (event) => {
    event.preventDefault();

    if (!title) {
      alert("제목을 입력해주세요.");
      titleRef.current.focus();
      return;
    } else if (!content) {
      alert("내용을 작성해주세요.");
      contentRef.current.focus();
      return;
    }

    const editPost = {
      title,
      content,
    };

    mutation.mutate({ id: params.id, editPost });
    navigate("/");
  };

  return (
    <StContainer>
      <StForm>
        <InputBox>
          <label>{`//TITLE`}</label>
          <TItleInput
            type="text"
            value={title}
            onChange={onChangeTitleHandler}
            ref={titleRef}
          />
        </InputBox>
        <InputBox>
          <label>{`//CONTENT`}</label>
          <ContentInput
            value={content}
            onChange={onChangecontentHandler}
            ref={contentRef}
          />
        </InputBox>
        <BtnBox>
          <Button
            size="medium"
            outlined={true}
            type="button"
            onClick={() => navigate(-1)}
          >{`type=cancle`}</Button>
          <Button
            size="medium"
            outlined={true}
            onClick={postSubmitHandler}
          >{`type=submit`}</Button>
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

const ContentInput = styled.textarea`
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

// const Btn = styled.button`
//   border: 2px solid #2ff40a;
//   padding: 10px;
//   font-size: 25px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

export default EditForm;
