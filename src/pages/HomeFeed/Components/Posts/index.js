import React, { memo } from "react";
import { View } from "react-native";
import ThumbsUp from "../../../../assets/Svgs/ThumbsUp.svg";
import ChatDots from "../../../../assets/Svgs/ChatDots.svg";

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

const Posts = () => {
  const list = [
    {
      userName: "Pedro Emerenciano",
      userCommunitie: "Papo de UX",
      userImage: require("../../../../assets/SelectCommunities/Image1.png"),
      userDate: "1h",
      postImage: require("../../../../assets/iron.jpg"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "30",
      comments: "10",
    },
    {
      userName: "Antônio Gally",
      userCommunitie: "Papo de FrontEnd",
      userImage: require("../../../../assets/Antonio.png"),
      userDate: "2h",
      postImage: require("../../../../assets/menina.png"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "35",
      comments: "20",
    },
    {
      userName: "Antônio Gally",
      userCommunitie: "Papo de Design",
      userImage: require("../../../../assets/Antonio.png"),
      userDate: "1h",
      postImage: require("../../../../assets/Menino.png"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "20",
      comments: "5",
    },
  ];
  return (
    <>
      {list.map((information, index) => (
        <Container key={index}>
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
                source={information.userImage}
              />
              <TextCreatorContent>
                <NameCreator>{information.userName}</NameCreator>
                <CommunitieCreator>
                  {information.userCommunitie}
                </CommunitieCreator>
              </TextCreatorContent>
            </View>
            <DateCreator>{information.userDate}</DateCreator>
          </CreatorContent>
          <TextContent>
            <DescriptionText>{information.description}</DescriptionText>
          </TextContent>
          <MyImageBackground
            imageStyle={{ borderRadius: 8 }}
            source={information.postImage}
          />
          <ButtonsContent>
            <LikeContent>
              <ThumbsUp />
              <TextButton>{information.likes}</TextButton>
            </LikeContent>
            <ComentContent>
              <ChatDots />
              <TextButton>{information.comments}</TextButton>
            </ComentContent>
          </ButtonsContent>
        </Container>
      ))}
    </>
  );
};

export default memo(Posts);
