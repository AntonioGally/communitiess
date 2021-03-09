import React from "react";
import styled from "styled-components/native";

export function PrimaryInput(props) {
  return <Container {...props} />;
}

export const Container = styled.TextInput`
  width: 100%;
  height: 56px;
  background-color: #eeeeee;
  font-family: "WorkSans_400Regular";
  font-size: 16px;
  border-radius: 4px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
`;
