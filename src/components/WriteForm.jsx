import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { addPosts } from "../api/posts";
import { useMutation, useQueryClient } from "react-query";
import uuid from "react-uuid";

const WriteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const titleRef = useRef("");
  const contentRef = useRef("");

  const mutation = useMutation(addPosts, {
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

    const newPost = {
      title,
      content,
      id: uuid(),
    };

    mutation.mutate(newPost);
    setTitle("");
    setContent("");
    navigate("/");
  };

  return (
    <StContainer>
      <StForm>
        <InputBox>
          <label>{`//TITLE`}</label>
          <TItleInput
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
          />
        </InputBox>
        <InputBox>
          <label>{`//CONTENT`}</label>
          <ContentInput
            onChange={(e) => setContent(e.target.value)}
            ref={contentRef}
          />
        </InputBox>
        <BtnBox>
          <Btn type="button" onClick={() => navigate(-1)}>{`type=cancle`}</Btn>
          <Btn>{`type=file`}</Btn>
          <Btn onClick={postSubmitHandler}>{`type=submit`}</Btn>
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

const Btn = styled.button`
  border: 2px solid #2ff40a;
  padding: 10px;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

export default WriteForm;
