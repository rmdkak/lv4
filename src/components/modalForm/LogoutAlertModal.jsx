import React, { useRef } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { closeModal } from "../../config/module/modal";
import Button from "../elem/Button";

function LogoutAlertModal() {
  const dispatch = useDispatch();
  const modalRef = useRef("");

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
        <div>이미 로그인한 상태입니다.</div>
        <BtnBox>
          <Button size="small" border="true" onClick={closeModalHandler}>
            확인
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

export default LogoutAlertModal;
