import React from "react";
import { css, styled } from "styled-components";

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          font-size: 30px;
          padding: 10px 51px 10px 51px;
          position: sticky;
          top: 83%;
        `;
      case "medium":
        return css`
          font-size: 25px;
          padding: 10px;
          @media (max-width: 1300px) {
            font-size: 20px;
            padding: 5px;
          }
          @media (max-width: 1100px) {
            font-size: 15px;
            padding: 5px;
          }
        `;
      case "small":
        return css``;
      default:
        return;
    }
  }}

  ${({ $outlined }) => {
    if ($outlined) {
      return css`
        border: 2px solid;
      `;
    } else {
      return css`
        border: none;
      `;
    }
  }};

  display: ${(props) => props.display};

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
