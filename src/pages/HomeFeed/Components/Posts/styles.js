import styled from "styled-components/native";

export const Container = styled.View`
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;

  display: flex;
  flex-direction: column;
`;
export const CreatorContent = styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Photo = styled.ImageBackground`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;
export const TextCreatorContent = styled.View`
  display: flex;
  flex-direction: column;
`;
export const NameCreator = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.85);
`;
export const CommunitieCreator = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.8);
`;
export const DateCreator = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.75);
`;

export const TextContent = styled.View`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const DescriptionText = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.8);
`;
export const MyImageBackground = styled.ImageBackground`
  width: 100%;
  min-height: 350px;
`;
export const ButtonsContent = styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  margin-bottom: 16px;
`;
export const LikeContent = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: 24px;
`;
export const ComentContent = styled.View`
  display: flex;
  flex-direction: row;
`;
export const TextButton = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
`;
