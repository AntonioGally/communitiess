import React, { memo } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { HeaderButton } from "./styles.js";

const CommunitiesButtons = ({ props }) => {
  const list = [
    {
      image: require("../../../../assets/SelectCommunities/Image1.png"),
      title: "Papo de UX",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../../../assets/SelectCommunities/Image2.png"),
      title: "Papo Produto",
      subtitle: "Produto",
    },
    {
      image: require("../../../../assets/SelectCommunities/Image3.png"),
      title: "Mergo",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../../../assets/SelectCommunities/Image4.png"),
      title: "How Bootcamps",
      subtitle: "Design, Produto, Dados",
    },
    {
      image: require("../../../../assets/iron.jpg"),
      title: "Iron Maiden",
      subtitle: "Banda, Produto",
    },
    {
      image: require("../../../../assets/Antonio.png"),
      title: "Antônio Gally",
      subtitle: "O, Mais, Bonito",
    },
    {
      image: require("../../../../assets/menina.png"),
      title: "A menina",
      subtitle: "Bonita, Desing",
    },
    {
      image: require("../../../../assets/Menino.png"),
      title: "O menino",
      subtitle: "Bonito, Desing",
    },
  ];
  return (
    <>
      {list.map((information, index) => (
        <TouchableWithoutFeedback key={index} {...props}>
          <HeaderButton
            source={information.image}
            imageStyle={{ borderRadius: 100 }}
            style={index == list.length - 1 && { marginRight: 32 }} //Aplicando uma margem maior pro ultimo item
          />
        </TouchableWithoutFeedback>
      ))}
    </>
  );
};

export default memo(CommunitiesButtons);
