import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  position: relative;
`;
export const Header = styled.View`
  height: 25%;
  padding-top: 3%;
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

export const IntrestContent = styled.ScrollView`
  max-height: 55%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
export const RowButton = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
`;
export const ButtonOption = styled.TouchableOpacity`
  width: 47%;
  height: 190px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TextButton = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #000;
`;
export const ButtonsContent = styled.View`
  width: 90%;
  height: 18%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: flex-end;
  margin-right: auto;
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
export const ButtonPrimary = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  padding: 16px 0px;
  background-color: #2568ef;
`;
export const ButtonDisable = styled.TouchableHighlight`
  width: 100%;
  border-radius: 8px;
  padding: 16px 0px;
  background-color: #707070;
`;
export const TextPrimary = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-align: center;
`;
