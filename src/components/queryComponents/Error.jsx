import React from "react";
import { styled } from "styled-components";

function Error({ error }) {
  return (
    <StError>{error !== undefined ? error : "Error is not defined."}</StError>
  );
}

const StError = styled.div`
  display: flex;
  height: 93%;
  padding: 43px;
  font-size: -webkit-xxx-large;
`;

export default Error;
