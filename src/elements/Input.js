import React from "react";
import styled from "styled-components/native";

export function PrimaryInput() {
  return <Container />;
}

export const Container = styled.TextInput`
  width: 100%;
  height: 56px;
  background-color: #eeeeee;
  font-family: "WorkSans_400Regular";
  border-radius: 4px;
`;
