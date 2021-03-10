import React from "react";
import { Text, View } from "react-native";
export default function communitiesProfile({ route }) {
  const { information } = route.params;
  return (
    <>
      <View>
        <Text>{information.title}</Text>
      </View>
    </>
  );
}
