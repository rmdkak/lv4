import React from "react";
import Header from "../layoutForm/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getUser } from "../../api/posts";
import { openModal } from "../../config/module/modal";

function AuthCheck() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { isLoading, isError, data } = useQuery("user", getUser, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) {
    return <Header />;
  }
  if (isError) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return <Header props={false} />;
    } else {
      navigate("/login");
      dispatch(openModal({ type: "logoutAlert" }));
      return <Header props={false} />;
    }
  }
  if (data) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate("/");
      dispatch(openModal({ type: "loginAlert" }));
    }
    return <Header props={true} />;
  }
}

export default AuthCheck;
