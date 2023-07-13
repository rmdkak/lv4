import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { addPosts, getCategorys } from "../../api/posts";
import { useMutation, useQuery, useQueryClient } from "react-query";
import uuid from "react-uuid";
import useInput from "../../hooks/useInput";
import Button from "../elem/Button";

const WriteForm = () => {
  const { isLoading, isError, data } = useQuery("categorys", getCategorys);
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangecontentHandler] = useInput();
  const [category, onChangecategoryHandler] = useInput();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const titleRef = useRef("");
  const contentRef = useRef("");
  const categoryRef = useRef("");

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
    } else if (!category) {
      alert("카테고리를 선택해주세요.");
      categoryRef.current.focus();
      return;
    }

    const newPost = {
      title,
      content,
      category,
      id: uuid(),
    };

    mutation.mutate(newPost);
    navigate("/");
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러</div>;
  }
  return (
    <StContainer>
      <StForm>
        <StSelect onChange={onChangecategoryHandler} ref={categoryRef}>
          <option hidden>
            --------------------select category--------------------
          </option>
          {data.map((item) => (
            <option key={item.id} value={item.category}>
              {item.category}
            </option>
          ))}
        </StSelect>
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
            border="true"
            type="button"
            onClick={() => navigate(-1)}
          >{`type=cancle`}</Button>
          <Button
            size="medium"
            border="true"
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

const StSelect = styled.select`
  width: 400px;
  font-size: large;
  padding: 10px;
  border: 2px solid;
  outline: none;
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
  height: 400px;
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

export default WriteForm;
