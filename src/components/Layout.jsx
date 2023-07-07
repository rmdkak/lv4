import React from "react";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <StLayout>
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </StLayout>
  );
};

//layout
const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//container
const Container = styled.div`
  width: 80%;
  height: 80%;
  border: 3px solid #2ff40a;
`;

export default Layout;
