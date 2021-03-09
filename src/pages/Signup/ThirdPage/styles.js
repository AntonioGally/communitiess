import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  background: #ffffff;
  flex-direction: column;
`;
export const Header = styled.View`
  height: 30%;
  padding-top: 5%;
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
export const ImageContent = styled.View`
  height: 53.75%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
export const ButtonsContent = styled.View`
  width: 90%;
  height: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonPhoto = styled.TouchableOpacity`
  width: 50%;
  background-color: #ef2568;
  border-radius: 100px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  bottom: 5%;
`;
export const TextButton = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: white;
`;
