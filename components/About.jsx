import { View, Text } from "react-native";
import React from "react";

export default function About({ info }) {
  return (
    <View className=" rounded-md bg-white p-4 text-lg ">
      <Text className=" text-lg font-bold text-primary ">About the job:</Text>

      <View className=" my-2 ">
        <Text className=" my-2 text-base text-gray1 "> {info} </Text>
      </View>
    </View>
  );
}
