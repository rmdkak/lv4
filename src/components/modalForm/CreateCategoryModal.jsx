import React, { useRef } from "react";
import Button from "../elem/Button";
import { styled } from "styled-components";
import useInput from "../../hooks/useInput";
import uuid from "react-uuid";
import { closeModal } from "../../config/module/modal";
import { addCategory } from "../../api/posts";
import { useDispatch } from "react-redux";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";

function CreateCategoryModal() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [category, onChangecategoryHandler] = useInput();
  const modalRef = useRef("");
  const categoryRef = useRef("");

  const createCategoryMutation = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categorys");
    },
  });

  const CategoryAddHandler = () => {
    const email = JSON.parse(localStorage.getItem("token"))?.email;
    if (!category) {
      alert("카테고리 명을 작성해주세요.");
      categoryRef.current.focus();
      return;
    }

    const newCategory = {
      category,
      email,
      id: uuid(),
    };

    createCategoryMutation.mutate(newCategory);
    dispatch(closeModal());
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
        <label>생성하실 카테고리명을 작성해주세요.</label>
        <ModalInput
          type="text"
          value={category}
          onChange={onChangecategoryHandler}
          ref={categoryRef}
        />
        <BtnBox>
          <Button size="small" $outlined={true} onClick={closeModalHandler}>
            취소
          </Button>
          <Button size="small" $outlined={true} onClick={CategoryAddHandler}>
            생성
          </Button>
        </BtnBox>
      </ModalDiv>
    </StCover>
  );
}

const StCover = styled.div`
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
  width: 400px;
  height: 200px;
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

const ModalInput = styled.input`
  padding: 5px;
  width: 300px;
  outline: none;
  border: 2px solid;
`;

export default CreateCategoryModal;
