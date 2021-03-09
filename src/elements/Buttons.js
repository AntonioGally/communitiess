import React from "react";
import styled from "styled-components/native";
import ArrowLeft from "../assets/Svgs/ArrowLeft.svg";
import Linkedin from "../assets/Svgs/linkedin.svg";

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
export function ButtonOutline(props) {
  return (
    <>
      <ContainerButtonOutline>
        {props.icon ? (
          <Linkedin
            width={30}
            height={30}
            style={{ position: "absolute", left: "10%" }}
          />
        ) : (
          ""
        )}
        <TextButtonOutline>{props.text}</TextButtonOutline>
      </ContainerButtonOutline>
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
export const ContainerButtonOutline = styled.View`
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  padding: 16px 0px;
  border: 1px solid #0077b7;
`;
export const TextButtonOutline = styled.Text`
  font-family: "WorkSans_500Medium";
  color: #0077b7;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

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
