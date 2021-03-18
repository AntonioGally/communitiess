import React from "react";
import PlusCircle from "../../assets/Svgs/PlusCircle.svg";
import CommunitiesButtons from "./Components/CommunitiesButtons/index.js";
import Posts from "./Components/Posts/index.js";
import BottomMenuComponent from "../../elements/BottomMenu";

import {
  Container,
  Header,
  PostArea,
  BottomMenu,
  HeaderButtonPlus,
} from "./styles.js";

export default function HomeFeed() {
  const listPost = [
    {
      userName: "Pedro Emerenciano",
      userCommunitie: "Papo de UX",
      userImage: require("../../assets/SelectCommunities/Image1.png"),
      userDate: "1h",
      postImage: require("../../assets/iron.jpg"),
      description:
        "Incrível esse trabalho que estão fazendo em parceria com a banda Iron Maiden",
      likes: "30",
      comments: "10",
    },
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

  const listButton = [
    {
      image: require("../../assets/SelectCommunities/Image1.png"),
      title: "Papo de UX",
      subtitle: "Design, Produto",
      key: 0,
    },
    {
      image: require("../../assets/SelectCommunities/Image2.png"),
      title: "Papo Produto",
      subtitle: "Produto",
      key: 1,
    },
    {
      image: require("../../assets/SelectCommunities/Image3.png"),
      title: "Mergo",
      subtitle: "Design, Produto",
      key: 2,
    },
    {
      image: require("../../assets/SelectCommunities/Image4.png"),
      title: "How Bootcamps",
      subtitle: "Design, Produto, Dados",
      key: 3,
    },
    {
      image: require("../../assets/iron.jpg"),
      title: "Iron Maiden",
      subtitle: "Banda, Produto",
      key: 4,
    },
    {
      image: require("../../assets/Antonio.png"),
      title: "Antônio Gally",
      subtitle: "O, Mais, Bonito",
      key: 5,
    },
    {
      image: require("../../assets/menina.png"),
      title: "A menina",
      subtitle: "Bonita, Desing",
      key: 6,
    },
    {
      image: require("../../assets/Menino.png"),
      title: "O menino",
      subtitle: "Bonito, Desing",
      key: 7,
    },
  ];

  return (
    <>
      <Container>
        <Header showsHorizontalScrollIndicator={false} horizontal>
          <HeaderButtonPlus>
            <PlusCircle />
          </HeaderButtonPlus>
          {listButton.map((information, index) => (
            <CommunitiesButtons
              onPress={() => console.log("oi")}
              key={information.key}
              image={information.image}
              margin={index == listButton.length - 1 && { marginRight: 32 }}
            />
          ))}
        </Header>
        <PostArea showsVerticalScrollIndicator={false}>
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
        </PostArea>
        {/* <BottomMenu>
          <BottomMenuComponent />
        </BottomMenu> */}
      </Container>
    </>
  );
}
