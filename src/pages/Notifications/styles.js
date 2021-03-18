import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const Header = styled.View`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`;
export const Title = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgba(0, 0, 0, 0.85);
`;
export const NotificationsContent = styled.ScrollView`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Card = styled.TouchableOpacity`
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Text = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin-left: 16px;
`;
