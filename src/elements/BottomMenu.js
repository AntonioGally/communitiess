import React, { useContext } from "react";
import styled from "styled-components/native";
import { BottomMenuContext } from "../context/BottomMenu.js";

import House from "../assets/Svgs/BottomMenu/House.svg";
import MagnifyingGlass from "../assets/Svgs/BottomMenu/MagnifyingGlass.svg";
import Bell from "../assets/Svgs/BottomMenu/Bell.svg";
import UserCircle from "../assets/Svgs/BottomMenu/UserCircle.svg";

import House_Active from "../assets/Svgs/BottomMenu/House_Active.svg";
import MagnifyingGlass_Active from "../assets/Svgs/BottomMenu/MagnifyingGlass_Active.svg";
import Bell_Active from "../assets/Svgs/BottomMenu/Bell_Active.svg";
import UserCircle_Active from "../assets/Svgs/BottomMenu/UserCircle_Active.svg";

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
            navigation.navigate("HomeFeed");
          }}
        >
          {page === "HomeFeed" ? <House_Active /> : <House />}
          <Text style={page === "HomeFeed" && { color: "#2568EF" }}>Home</Text>
        </ButtonContent>
        <ButtonContent
          onPress={() => {
            setPage("Search");
            navigation.navigate("Search");
          }}
        >
          {page === "Search" ? <MagnifyingGlass_Active /> : <MagnifyingGlass />}
          <Text style={page === "Search" && { color: "#2568EF" }}>
            Pesquisar
          </Text>
        </ButtonContent>
        <ButtonContent
          onPress={() => {
            setPage("Notifications");
            navigation.navigate("Notifications");
          }}
        >
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

export const Container = styled.View`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const ButtonContent = styled.TouchableOpacity`
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Text = styled.Text`
  font-family: "WorkSans_500Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #707070;
`;
export default BottomMenuComponent;
