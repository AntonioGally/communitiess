import React, { useContext } from "react";
import { BottomMenuContext } from "../../../../context/BottomMenu.js";

import { Container, ButtonContent, Text } from "./styles.js";

import House from "../../../../assets/Svgs/BottomMenu/House.svg";
import MagnifyingGlass from "../../../../assets/Svgs/BottomMenu/MagnifyingGlass.svg";
import Bell from "../../../../assets/Svgs/BottomMenu/Bell.svg";
import UserCircle from "../../../../assets/Svgs/BottomMenu/UserCircle.svg";

import House_Active from "../../../../assets/Svgs/BottomMenu/House_Active.svg";
import MagnifyingGlass_Active from "../../../../assets/Svgs/BottomMenu/MagnifyingGlass_Active.svg";
import Bell_Active from "../../../../assets/Svgs/BottomMenu/Bell_Active.svg";
import UserCircle_Active from "../../../../assets/Svgs/BottomMenu/UserCircle_Active.svg";

import { useNavigation } from "@react-navigation/native";

const BottomMenuComponent = () => {
  const navigation = useNavigation();
  const { page, setPage } = useContext(BottomMenuContext);
  return (
    <>
      <Container>
        <ButtonContent
          onPress={() => {
            setPage("HomeFeed");
          }}
        >
          {page === "HomeFeed" ? <House_Active /> : <House />}
          <Text style={page === "HomeFeed" && { color: "#2568EF" }}>Home</Text>
        </ButtonContent>
        <ButtonContent>
          {page === "Search" ? <MagnifyingGlass_Active /> : <MagnifyingGlass />}
          <Text style={page === "Search" && { color: "#2568EF" }}>
            Pesquisar
          </Text>
        </ButtonContent>
        <ButtonContent>
          {page === "Notifications" ? <Bell_Active /> : <Bell />}
          <Text style={page === "Notifications" && { color: "#2568EF" }}>
            Notificações
          </Text>
        </ButtonContent>
        <ButtonContent style={{ marginRight: 0 }}>
          {page === "Profile" ? <UserCircle_Active /> : <UserCircle />}
          <Text style={page === "Profile" && { color: "#2568EF" }}>Perfil</Text>
        </ButtonContent>
      </Container>
    </>
  );
};

export default BottomMenuComponent;
