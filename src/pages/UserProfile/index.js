import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DotsThreeCircle from "../../assets/Svgs/UserProfile/DotsThreeCircle.svg";
import Posts from "./Posts/index.js";

import { Container, Header, UserPhoto, Name, PostContent } from "./styles";

const UserProfile = () => {
  const listPost = [
    {
      userName: "Antônio Gally",
      userCommunitie: "Papo de FrontEnd",
      userImage: require("../../assets/Antonio.png"),
      userDate: "2h",
      postImage: require("../../assets/menina.png"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "35",
      comments: "20",
    },
    {
      userName: "Antônio Gally",
      userCommunitie: "Papo de Design",
      userImage: require("../../assets/Antonio.png"),
      userDate: "1h",
      postImage: require("../../assets/Menino.png"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "20",
      comments: "5",
    },
  ];
  return (
    <>
      <Container>
        <Header>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <UserPhoto source={require("../../assets/Antonio.png")} />
              <Name>Antônio Gally</Name>
            </View>
            <TouchableOpacity>
              <DotsThreeCircle />
            </TouchableOpacity>
          </View>
        </Header>
        <PostContent showsVerticalScrollIndicator={false}>
          {listPost.map((information, index) => (
            <Posts
              key={index}
              userImage={information.userImage}
              userName={information.userName}
              userCommunitie={information.userCommunitie}
              description={information.description}
              postImage={information.postImage}
              likes={information.likes}
              comments={information.comments}
            />
          ))}
        </PostContent>
      </Container>
    </>
  );
};

export default UserProfile;
