import React from "react";
import Header from "../layoutForm/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../../api/posts";

function AuthCheck() {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading, isError, data } = useQuery("user", getUser, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) {
    return <Header props={false} />;
  }
  if (isError) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return <Header props={false} />;
    } else {
      navigate("/login");
      return <Header props={false} />;
    }
  }
  if (data) {
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate("/");
    }
    return <Header props={data} />;
  }
  if (location.pathname === "/login" || location.pathname === "/register") {
    return <Header props={false} />;
  } else {
    navigate("/login");
    return <Header props={false} />;
  }
}

export default AuthCheck;
