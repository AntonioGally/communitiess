import React, { memo } from "react";
import { View } from "react-native";
import ThumbsUp from "../../../assets/Svgs/ThumbsUp.svg";
import ChatDots from "../../../assets/Svgs/ChatDots.svg";

import {
  Container,
  CreatorContent,
  Photo,
  TextCreatorContent,
  NameCreator,
  CommunitieCreator,
  DateCreator,
  TextContent,
  DescriptionText,
  MyImageBackground,
  ButtonsContent,
  LikeContent,
  TextButton,
  ComentContent,
} from "./styles";

const Posts = (props) => {
  return (
    <>
      <Container>
        <CreatorContent>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Photo
              imageStyle={{ borderRadius: 100 }}
              source={props.userImage}
            />
            <TextCreatorContent>
              <NameCreator>{props.userName}</NameCreator>
              <CommunitieCreator>{props.userCommunitie}</CommunitieCreator>
            </TextCreatorContent>
          </View>
          <DateCreator>{props.userDate}</DateCreator>
        </CreatorContent>
        <TextContent>
          <DescriptionText>{props.description}</DescriptionText>
        </TextContent>
        <MyImageBackground
          imageStyle={{ borderRadius: 8 }}
          source={props.postImage}
        />
        <ButtonsContent>
          <LikeContent>
            <ThumbsUp />
            <TextButton>{props.likes}</TextButton>
          </LikeContent>
          <ComentContent>
            <ChatDots />
            <TextButton>{props.comments}</TextButton>
          </ComentContent>
        </ButtonsContent>
      </Container>
    </>
  );
};

export default memo(Posts);
