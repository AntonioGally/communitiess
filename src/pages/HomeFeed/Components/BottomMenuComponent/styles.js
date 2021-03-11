import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const ButtonContent = styled.TouchableOpacity`
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #707070;
`;
