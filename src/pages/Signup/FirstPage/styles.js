import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  background: #ffffff;
  flex-direction: column;
`;
export const Header = styled.View`
  height: 30%;
  padding-top: 12%;
  padding-left: 5%;
`;
export const TextHeader = styled.Text`
  font-family: "WorkSans_600SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #000;
`;
export const FormContent = styled.View`
  padding-top: 15%;
  height: 50%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const ButtonsContent = styled.View`
  width: 90%;
  height: 23%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
