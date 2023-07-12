import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, ...rest }) => {
  return (
    // <></>
    <ButtonStyle {...rest}>{children}</ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          font-size: 30px;
          padding: 10px 51px 10px 51px;
        `;
      case "medium":
        return css`
          font-size: 25px;
          padding: 10px;
        `;
      case "small":
        return css``;
      default:
        return;
    }
  }}
  ${({ outlined }) => {
    if (outlined) {
      return css`
        border: 2px solid;
      `;
    } else {
      return css`
        border: none;
      `;
    }
  }}
    &:hover {
    cursor: pointer;
  }
`;

export default Button;
