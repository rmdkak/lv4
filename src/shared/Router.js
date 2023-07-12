import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Write from "../pages/Write";
import EditDetail from "../pages/EditDetail";
import Category from "../pages/Category";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/edit/:id" element={<EditDetail />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
