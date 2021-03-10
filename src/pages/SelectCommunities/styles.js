import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  position: relative;
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

export const CardsContent = styled.ScrollView`
  height: 55%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
export const ButtonsContent = styled.View`
  width: 90%;
  height: 15%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3%;
`;
export const TextJumpContent = styled.TouchableOpacity`
  padding: 16px 0px;
  width: 100%;
`;
export const TextJump = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ef2568;
  text-align: center;
`;
