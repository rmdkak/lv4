import React from "react";
import { useSelector } from "react-redux";
import DeletePostModal from "./DeletePostModal";
import CreateCategoryModal from "./CreateCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import LoginAlertModal from "./LoginAlertModal";
import LogoutAlertModal from "./LogoutAlertModal";

function Modal() {
  const { isOpen, type, payload } = useSelector((state) => state.modal);

  if (isOpen) {
    switch (type) {
      // 게시물 삭제
      case "delete":
        return <DeletePostModal payload={payload} />;
      // 카테고리 생성
      case "createCategory":
        return <CreateCategoryModal />;
      //카테고리 삭제
      case "deleteCategory":
        return <DeleteCategoryModal payload={payload} />;
      // 로그아웃 상태일 때 경고창
      case "logoutAlert":
        return <LoginAlertModal />;
      // 로그인 상태일 때 경고창
      case "loginAlert":
        return <LogoutAlertModal />;
      default:
        return;
    }
  }
}

export default Modal;
