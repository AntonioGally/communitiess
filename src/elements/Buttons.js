import React from "react";
import styled from "styled-components/native";
import ArrowLeft from "../assets/Svgs/ArrowLeft.svg";
export function ButtonPrimary(props) {
  return (
    <>
      <ContainerPrimary>
        <TextPrimary>{props.text}</TextPrimary>
      </ContainerPrimary>
    </>
  );
}
export function ButtonSecondary(props) {
  return (
    <>
      <ContainerSecondary>
        <TextSecondary>{props.text}</TextSecondary>
      </ContainerSecondary>
    </>
  );
}
export function ButtonArrowBack() {
  return (
    <>
      <ContainerArrowBack>
        <ArrowLeft width={24} height={24} />
      </ContainerArrowBack>
    </>
  );
}

export const ContainerPrimary = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 16px 0px;
  background-color: #2568ef;
`;
export const TextPrimary = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
export const ContainerSecondary = styled.View`
  width: 100%;
  border-radius: 8px;
  padding: 16px 0px;
  background-color: #d8e5ff;
`;
export const TextSecondary = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #2568ef;
`;
export const ContainerArrowBack = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 4px;
  background: rgba(239, 37, 104, 0.4);
`;
