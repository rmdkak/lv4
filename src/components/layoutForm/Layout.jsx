import React from "react";
import { styled } from "styled-components";
// import Header from "./Header";
import Footer from "./Footer";
import Modal from "../modalForm/Modal";
import AuthCheck from "../auth/AuthCheck";

const Layout = ({ children }) => {
  return (
    <StLayout>
      <Container>
        <AuthCheck />
        <Modal />
        {children}
        <Footer />
      </Container>
    </StLayout>
  );
};

//layout
const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//container
const Container = styled.div`
  position: absolute;
  top: 30px;
  width: 80%;
  height: 900px;
  border: 3px solid #2ff40a;
`;

export default Layout;
