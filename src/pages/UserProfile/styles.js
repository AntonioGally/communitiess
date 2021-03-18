import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;
export const Header = styled.View`
  height: 120px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 16px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`;
export const UserPhoto = styled.Image`
  width: 65px;
  height: 65px;
  border-radius: 50px;
`;
export const Name = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.9);
  margin-left: 16px;
`;
export const PostContent = styled.ScrollView`
  padding-left: 5%;
  padding-right: 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
