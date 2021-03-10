import React, { useState, useContext } from "react";
import { SignupContext } from "../../context/Signup.js";
import { Text } from "react-native";
import styled from "styled-components/native";
import FirstPage from "./FirstPage/index.js";
import SecondPage from "./SecondPage/index.js";
import ThirdPage from "./ThirdPage/index.js";

export default function App() {
  const { page } = useContext(SignupContext);
  return (
    <>
      <Container>
        {page === "FirstPage" ? <FirstPage /> : <Text></Text>}
        {page === "SecondPage" ? <SecondPage /> : <Text></Text>}
        {page === "ThirdPage" ? <ThirdPage /> : <Text></Text>}
        <ButtonsContent>
          {page === "FirstPage" ? (
            <ButtonActive style={{ marginRight: 6 }} />
          ) : (
            <Button style={{ marginRight: 6 }} />
          )}
          {page === "SecondPage" ? (
            <ButtonActive style={{ marginRight: 6 }} />
          ) : (
            <Button style={{ marginRight: 6 }} />
          )}
          {page === "ThirdPage" ? <ButtonActive /> : <Button />}
        </ButtonsContent>
      </Container>
    </>
  );
}
export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
`;
export const ButtonsContent = styled.View`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 3%;
`;
export const Button = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: rgba(239, 37, 104, 0.6);
`;
export const ButtonActive = styled.View`
  width: 16px;
  height: 8px;
  border-radius: 100px;
  background-color: #ef2568;
`;
