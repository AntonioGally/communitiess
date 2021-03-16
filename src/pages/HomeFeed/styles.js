import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
  height: 100%;
`;
export const Header = styled.ScrollView`
  padding-left: 5%;
  padding-top: 70px;
  display: flex;
  flex-direction: row;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`;
export const HeaderButtonPlus = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #2568ef;
  border-radius: 100px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const PostArea = styled.ScrollView`
  padding-left: 5%;
  padding-right: 5%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
`;
export const BottomMenu = styled.View`
  width: 100%;
  display: flex;
  background-color: #fff;
  height: 90px;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
