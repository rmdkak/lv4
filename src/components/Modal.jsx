import React, { useRef } from "react";
import { styled } from "styled-components";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { deletePosts } from "../api/posts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../config/module/modal";

function DeleteModal({ detailPostId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const modalRef = useRef("");

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const mutation = useMutation(deletePosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("성공?");
    },
  });

  const deletePost = (id) => {
    mutation.mutate(id);
    dispatch(closeModal());
    navigate("/");
  };

  const overlayHandler = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  return (
    <StCover onClick={overlayHandler}>
      <ModalDiv ref={modalRef}>
        <div>삭제하시겠습니까?</div>
        <BtnBox>
          <ModalBTN onClick={closeModalHandler}>취소</ModalBTN>
          <ModalBTN onClick={() => deletePost(detailPostId)}>삭제</ModalBTN>
        </BtnBox>
      </ModalDiv>
    </StCover>
  );
}

const StCover = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
  width: 300px;
  height: 100px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 45px;
`;

const ModalBTN = styled.button`
  border: 2px solid;
  &:hover {
    cursor: pointer;
  }
`;

export default DeleteModal;
