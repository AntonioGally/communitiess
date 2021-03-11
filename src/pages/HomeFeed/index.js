import React from "react";
import PlusCircle from "../../assets/Svgs/PlusCircle.svg";
import CommunitiesButtons from "./Components/CommunitiesButtons/index.js";
import Posts from "./Components/Posts/index.js";
import BottomMenuComponent from "./Components/BottomMenuComponent/index.js";

import {
  Container,
  Header,
  PostArea,
  BottomMenu,
  HeaderButtonPlus,
} from "./styles.js";

export default function HomeFeed() {
  return (
    <>
      <Container>
        <Header showsHorizontalScrollIndicator={false} horizontal>
          <HeaderButtonPlus>
            <PlusCircle />
          </HeaderButtonPlus>
          <CommunitiesButtons onPress={() => console.log("oi")} />
        </Header>
        <PostArea showsVerticalScrollIndicator={false}>
          <Posts />
        </PostArea>
        <BottomMenu>
          <BottomMenuComponent />
        </BottomMenu>
      </Container>
    </>
  );
}
