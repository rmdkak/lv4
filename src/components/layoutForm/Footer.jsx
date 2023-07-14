import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <div>
        <a
          href="https://huu-oong.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/rmdkak"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
      <p>
        <span>developer: Huung</span>
        <br />
        <span>Copyright 2023. Huung. ALL Rights reserved.</span>
      </p>
    </StFooter>
  );
};

//푸터
const StFooter = styled.footer`
  height: 70px;
  border-top: 2px solid #2ff40a;
  position: relative;
  padding: 10px;
  transform: translateY(-100%);
`;

export default Footer;
