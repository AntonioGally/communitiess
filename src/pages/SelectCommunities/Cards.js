import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
export default function Cards(props) {
  return (
    <Container onPress={props.onPress}>
      <ImageContent>
        <Image source={props.image} />
      </ImageContent>
      <TextContent>
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
      </TextContent>
    </Container>
  );
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;
export const ImageContent = styled.View`
  width: 30%;
  display: flex;
  justify-content: center;
`;
export const TextContent = styled.View`
  width: 70%;
`;
export const Title = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #000;
`;
export const SubTitle = styled.Text`
  font-family: "WorkSans_400Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.8);
`;
