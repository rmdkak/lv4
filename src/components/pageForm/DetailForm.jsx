import React from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPosts } from "../../api/posts";
import { openModal } from "../../config/module/modal";
import { useDispatch } from "react-redux";
import Button from "../elem/Button";
import Loading from "../queryComponents/Loading";
import Error from "../queryComponents/Error";

const DetailForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, error, data } = useQuery("posts", getPosts);

  const showModal = (id) => {
    dispatch(openModal({ type: "delete", id }));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error?.response.data.message} />;
  }

  const detailPost = data.find((obj) => obj.id === params.id);
  const email = JSON.parse(localStorage.getItem("token"))?.email;
  const display = email === detailPost.email ? "block" : "none";

  return (
    <StContainer>
      <StBox>
        <CategoryBox>{detailPost.category}</CategoryBox>
        <TitleBox>{detailPost.title}</TitleBox>
        <ContentBox>{detailPost.content}</ContentBox>
        <BtnBox>
          <Button
            size="medium"
            $outlined={true}
            // $outlined={true}
            onClick={() => navigate(-1)}
          >{`type=cancle`}</Button>
          <Button
            size="medium"
            $outlined={true}
            // $outlined={true}
            display={display}
            onClick={() => navigate(`/edit/${detailPost.id}`)}
          >{`type=edit`}</Button>
          <Button
            size="medium"
            $outlined={true}
            // $outlined={true}
            display={display}
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
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  border: 2px solid;
  margin: 20px;
  padding: 10px;
  gap: 10px;
`;

const CategoryBox = styled.div`
  width: 100%;
  text-align: start;
`;

const TitleBox = styled.div`
  width: 100%;
  text-align: start;
  font-size: xx-large;
  padding-bottom: 10px;
  border-bottom: 2px dashed;
`;

const ContentBox = styled.div`
  width: 100%;
  text-align: start;
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
  @media (max-width: 1600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default DetailForm;
