import { View, Text } from "react-native";
import React from "react";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function index() {
  // const local = useLocalSearchParams();
  const glob = useGlobalSearchParams();

  console.log(glob);
  return (
    <View>
      <Text className=" text-tertiary ">This is the local </Text>
      <Text className=" text-yellow  ">This is the global {glob.id} </Text>
    </View>
  );
}
