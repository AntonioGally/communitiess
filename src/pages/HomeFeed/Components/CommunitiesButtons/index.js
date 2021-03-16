import React, { memo } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { HeaderButton } from "./styles.js";

const CommunitiesButtons = (props) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <HeaderButton
          source={props.image}
          imageStyle={{ borderRadius: 100 }}
          style={props.margin} //Aplicando uma margem maior pro ultimo item
        />
      </TouchableWithoutFeedback>
    </>
  );
};

export default memo(CommunitiesButtons);
