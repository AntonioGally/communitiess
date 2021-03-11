import React from "react";
import QrCode from "../../assets/qr-code.png";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonArrowBack } from "../../elements/Buttons.js";
import {
  Container,
  Header,
  QrContent,
  QrImage,
  TextContent,
  Title,
  Text,
} from "./styles";

const CommuniteQR = ({ route }) => {
  const { fromWhre } = route.params;
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack({ fromWhre })}>
            <ButtonArrowBack />
          </TouchableOpacity>
        </Header>
        <QrContent>
          <QrImage source={QrCode} />
          <TextContent>
            <Title>Compartilhe o QRcode</Title>
            <Text>
              Você pode tirar um print da tela e compartilhar essa comunidade
              com quem quiser!
            </Text>
          </TextContent>
        </QrContent>
      </Container>
    </>
  );
};

export default CommuniteQR;
