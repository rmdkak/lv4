import React, { useRef } from "react";
import { css, styled } from "styled-components";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { addCategory, deleteCategory, deletePosts } from "../api/posts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../config/module/modal";
import Button from "./Button";
import useInput from "../hooks/useInput";
import uuid from "react-uuid";

function Modal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { isOpen, type, payload } = useSelector((state) => state.modal);
  const [category, onChangecategoryHandler] = useInput();
  const modalRef = useRef("");
  const categoryRef = useRef("");

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const deletePostMutation = useMutation(deletePosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const createCategoryMutation = useMutation(addCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categorys");
    },
  });

  const deleteCategoryMutation = useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries("categorys");
    },
  });

  const deletePost = (id) => {
    deletePostMutation.mutate(id);
    dispatch(closeModal());
    navigate("/");
  };

  const deleteCategorys = (id) => {
    deleteCategoryMutation.mutate(id);
    dispatch(closeModal());
    navigate("/");
  };

  const overlayHandler = (e) => {
    if (e.currentTarget === e.target) {
      dispatch(closeModal());
    }
  };

  const CategoryAddHandler = () => {
    if (!category) {
      alert("카테고리 명을 작성해주세요.");
      categoryRef.current.focus();
      return;
    }

    const newCategory = {
      category: category,
      id: uuid(),
    };

    createCategoryMutation.mutate(newCategory);
    dispatch(closeModal());
  };

  if (isOpen) {
    switch (type) {
      // 게시물 삭제
      case "delete":
        return (
          <StCover onClick={overlayHandler}>
            <ModalDiv ref={modalRef}>
              <div>삭제하시겠습니까?</div>
              <BtnBox>
                <Button
                  size="small"
                  outlined={true}
                  onClick={closeModalHandler}
                >
                  취소
                </Button>
                <Button
                  size="small"
                  outlined={true}
                  onClick={() => deletePost(payload)}
                >
                  삭제
                </Button>
              </BtnBox>
            </ModalDiv>
          </StCover>
        );
      // 카테고리 생성
      case "createCategory":
        return (
          <StCover onClick={overlayHandler}>
            <NewModalDiv ref={modalRef}>
              <label>생성하실 카테고리명을 작성해주세요.</label>
              <ModalInput
                type="text"
                value={category}
                onChange={onChangecategoryHandler}
                ref={categoryRef}
              />
              <BtnBox>
                <Button
                  size="small"
                  outlined={true}
                  onClick={closeModalHandler}
                >
                  취소
                </Button>
                <Button
                  size="small"
                  outlined={true}
                  onClick={CategoryAddHandler}
                >
                  생성
                </Button>
              </BtnBox>
            </NewModalDiv>
          </StCover>
        );
      //카테고리 삭제
      case "deleteCategory":
        return (
          <StCover onClick={overlayHandler}>
            <ModalDiv ref={modalRef}>
              <div>삭제하시겠습니까?</div>
              <BtnBox>
                <Button
                  size="small"
                  outlined={true}
                  onClick={closeModalHandler}
                >
                  취소
                </Button>
                <Button
                  size="small"
                  outlined={true}
                  onClick={() => deleteCategorys(payload)}
                >
                  삭제
                </Button>
              </BtnBox>
            </ModalDiv>
          </StCover>
        );
      default:
        return;
    }
  }
}
const commonStyle = css`
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

const NewModalDiv = styled.div`
  ${commonStyle}
  height: 200px;
`;
const ModalInput = styled.input`
  padding: 5px;
  width: 250px;
  outline: none;
  border: 2px solid;
`;

export default Modal;
