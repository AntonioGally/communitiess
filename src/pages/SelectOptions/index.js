import React, { useState } from "react";

import Stack from "../../assets/Svgs/SelectOptions/Stack_Dark.svg";
import Code from "../../assets/Svgs/SelectOptions/Code_Dark.svg";
import Database from "../../assets/Svgs/SelectOptions/Database_Dark.svg";
import Cube from "../../assets/Svgs/SelectOptions/Cube_Dark.svg";
import SmileySticker from "../../assets/Svgs/SelectOptions/SmileySticker_Dark.svg";
import Hash from "../../assets/Svgs/SelectOptions/Hash_Dark.svg";

import Stack_Light from "../../assets/Svgs/SelectOptions/Stack_Light.svg";
import Code_Light from "../../assets/Svgs/SelectOptions/Code_Light.svg";
import Database_Light from "../../assets/Svgs/SelectOptions/Database_Light.svg";
import Cube_Light from "../../assets/Svgs/SelectOptions/Cube_Light.svg";
import SmileySticker_Light from "../../assets/Svgs/SelectOptions/SmileySticker_Light.svg";
import Hash_Light from "../../assets/Svgs/SelectOptions/Hash_Light.svg";

import {
  Container,
  Header,
  TextHeader,
  IntrestContent,
  RowButton,
  ButtonOption,
  TextButton,
  ButtonsContent,
  TextJumpContent,
  TextJump,
  ButtonPrimary,
  TextPrimary,
  ButtonDisable,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function SelectOptions() {
  const navigation = useNavigation();
  const [clickDesign, setClickDesign] = useState(false);
  const [clickDev, setClickDev] = useState(false);
  const [clickDados, setClickDados] = useState(false);
  const [clickProduto, setClickProduto] = useState(false);
  const [clickRH, setClickRH] = useState(false);
  const [clickOutros, setClickOutros] = useState(false);
  return (
    <>
      <Container>
        <Header>
          <TextHeader style={{ marginTop: "10%" }}>
            Perfil criado, conta pra
          </TextHeader>
          <TextHeader>gente seus interesses</TextHeader>
        </Header>
        <IntrestContent showsVerticalScrollIndicator={false}>
          <RowButton>
            <ButtonOption
              onPress={() => {
                setClickDesign(!clickDesign);
              }}
              style={clickDesign ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickDesign ? <Stack /> : <Stack_Light />}
              <TextButton style={clickDesign ? { color: "#fff" } : {}}>
                Design
              </TextButton>
            </ButtonOption>
            <ButtonOption
              onPress={() => {
                setClickDev(!clickDev);
              }}
              style={clickDev ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickDev ? <Code /> : <Code_Light />}
              <TextButton style={clickDev ? { color: "#fff" } : {}}>
                Dev
              </TextButton>
            </ButtonOption>
          </RowButton>
          <RowButton>
            <ButtonOption
              onPress={() => {
                setClickDados(!clickDados);
              }}
              style={clickDados ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickDados ? <Database /> : <Database_Light />}
              <TextButton style={clickDados ? { color: "#fff" } : {}}>
                Dados
              </TextButton>
            </ButtonOption>
            <ButtonOption
              onPress={() => {
                setClickProduto(!clickProduto);
              }}
              style={clickProduto ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickProduto ? <Cube /> : <Cube_Light />}
              <TextButton style={clickProduto ? { color: "#fff" } : {}}>
                Produto
              </TextButton>
            </ButtonOption>
          </RowButton>
          <RowButton>
            <ButtonOption
              onPress={() => {
                setClickRH(!clickRH);
              }}
              style={clickRH ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickRH ? <SmileySticker /> : <SmileySticker_Light />}
              <TextButton style={clickRH ? { color: "#fff" } : {}}>
                RH e Pessoas
              </TextButton>
            </ButtonOption>
            <ButtonOption
              onPress={() => {
                setClickOutros(!clickOutros);
              }}
              style={clickOutros ? { backgroundColor: "#2568EF" } : {}}
            >
              {!clickOutros ? <Hash /> : <Hash_Light />}
              <TextButton style={clickOutros ? { color: "#fff" } : {}}>
                Outros
              </TextButton>
            </ButtonOption>
          </RowButton>
        </IntrestContent>
        <ButtonsContent>
          {!clickDesign &&
          !clickDev &&
          !clickDados &&
          !clickProduto &&
          !clickRH &&
          !clickOutros ? (
            <ButtonDisable disable={true}>
              <TextPrimary>Prosseguir</TextPrimary>
            </ButtonDisable>
          ) : (
            <ButtonPrimary
              onPress={() => navigation.navigate("SelectCommunities")}
            >
              <TextPrimary>Prosseguir</TextPrimary>
            </ButtonPrimary>
          )}
          <TextJumpContent
            onPress={() => navigation.navigate("SelectCommunities")}
          >
            <TextJump>Quero pular essa parte</TextJump>
          </TextJumpContent>
        </ButtonsContent>
      </Container>
    </>
  );
}
//TouchableWithoutFeedback
