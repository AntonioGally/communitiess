import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonArrowBackWhite } from "../../elements/Buttons.js";
import ArrowSquareRight from "../../assets/Svgs/ArrowSquareRight.svg";
import Iron from "../../assets/iron.jpg";
import Antonio from "../../assets/Antonio.png";
import {
  Container,
  Header,
  TextContent,
  TitleContent,
  TagContent,
  Tag,
  Title,
  Subtitle,
  AboutContent,
  Text,
  ButtonsContent,
  TextButtonContent,
  TextButton,
  CreatorContent,
  ProfileContent,
  Photo,
  Name,
  ButtonQrCode,
} from "./styles";
import QrCode from "../../assets/Svgs/QrCode.svg";

export default function communitiesProfile({ route }) {
  const navigation = useNavigation();
  const { information, fromWhre } = route.params;

  return (
    <>
      <Container>
        <Header source={Iron}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingRight: "5%",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack({ fromWhre })}>
              <ButtonArrowBackWhite />
            </TouchableOpacity>
            <ButtonQrCode
              onPress={() =>
                navigation.navigate("CommuniteQR", {
                  fromWhre: "CommunitiesProfile",
                })
              }
            >
              <QrCode />
            </ButtonQrCode>
          </View>
        </Header>
        <TextContent showsVerticalScrollIndicator={false}>
          <TitleContent>
            <TagContent>
              <Tag>Comunidade</Tag>
            </TagContent>
            <Title>{information.title}</Title>
            <Subtitle>{information.subtitle}</Subtitle>
          </TitleContent>
          <AboutContent>
            <TagContent>
              <Tag>Sobre</Tag>
            </TagContent>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </AboutContent>
          <CreatorContent>
            <TagContent>
              <Tag>Criador</Tag>
            </TagContent>
            <ProfileContent>
              <Photo source={Antonio} />
              <Name>Antônio Gally</Name>
            </ProfileContent>
          </CreatorContent>
        </TextContent>
        <ButtonsContent>
          <TextButtonContent onPress={() => navigation.navigate("HomeFeed")}>
            <TextButton>Participar dessa comunidade</TextButton>
            <ArrowSquareRight />
          </TextButtonContent>
        </ButtonsContent>
      </Container>
    </>
  );
}
