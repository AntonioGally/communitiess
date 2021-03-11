import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #fff;
  flex-direction: column;
`;
export const Header = styled.ImageBackground`
  height: 45%;
  padding-top: 12%;
  padding-left: 5%;
`;
export const TextContent = styled.ScrollView`
  height: 45%;
  padding-left: 5%;
  padding-right: 5%;
  background: #fff;
  display: flex;
  flex-direction: column;
`;
export const TitleContent = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;
export const TagContent = styled.View`
  align-self: flex-start;
  padding-left: 16px;
  padding-top: 4px;
  padding-right: 16px;
  padding-bottom: 4px;
  background-color: rgba(37, 104, 239, 0.4);
  border-radius: 100px;
`;
export const Tag = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #2568ef;
`;
export const Title = styled.Text`
  font-family: "WorkSans_600SemiBold";
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin-top: 8px;
`;
export const Subtitle = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 36px;
  color: rgba(0, 0, 0, 0.8);
`;
export const AboutContent = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;
export const Text = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;
  padding-bottom: 5%;
`;
export const ButtonsContent = styled.View`
  height: 10%;
  background-color: #2568ef;
  padding-top: 16px;
`;
export const TextButtonContent = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const TextButton = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  margin-right: 10px;
`;
