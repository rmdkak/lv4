import React, { useRef } from "react";
import { styled } from "styled-components";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { deleteCategory } from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../config/module/modal";
import Button from "../elem/Button";

function DeleteCategoryModal({ payload }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const modalRef = useRef("");

  const deleteCategoryMutation = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categorys");
    },
  });

  const deleteCategorys = (id) => {
    deleteCategoryMutation.mutate(id);
    dispatch(closeModal());
    navigate("/");
  };

  const closeModalHandler = () => {
    dispatch(closeModal());
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
          <Button size="small" border="true" onClick={closeModalHandler}>
            취소
          </Button>
          <Button
            size="small"
            border="true"
            onClick={() => deleteCategorys(payload)}
          >
            삭제
          </Button>
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
  font-size: 20px;
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

export default DeleteCategoryModal;
