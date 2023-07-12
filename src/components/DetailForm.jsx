import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../api/posts";
import { openModal } from "../config/module/modal";
import { useDispatch } from "react-redux";
import Button from "./Button";

const DetailForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, data } = useQuery("posts", getPosts);

  const showModal = (id) => {
    dispatch(openModal({ type: "delete", id }));
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }

  const detailPost = data.find((obj) => obj.id === params.id);

  return (
    <StContainer>
      <StBox>
        <TitleBox>{detailPost.title}</TitleBox>
        <ContentBox>{detailPost.content}</ContentBox>
        <BtnBox>
          <Button
            size="medium"
            outlined={true}
            onClick={() => navigate(-1)}
          >{`type=cancle`}</Button>
          <Button
            size="medium"
            outlined={true}
            onClick={() => navigate(`/edit/${detailPost.id}`)}
          >{`type=edit`}</Button>
          <Button
            size="medium"
            outlined={true}
            onClick={() => showModal(detailPost.id)}
          >{`type=delete`}</Button>
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

// const Btn = styled.button`
//   border: 2px solid #2ff40a;
//   padding: 10px;
//   font-size: 25px;
//   &:hover {
//     cursor: pointer;
//   }
// `;
export default DetailForm;
