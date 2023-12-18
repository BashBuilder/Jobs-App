import { View, Text } from "react-native";
import React from "react";

export default function Specifics({ title, points }) {
  return (
    <View className=" mt-6 rounded-md bg-white p-2 ">
      <Text className=" text-lg font-bold text-primary ">{title} </Text>

      <View className=" my-2 ">
        {points.map((item, index) => (
          <View className=" my-2 flex-row items-start justify-start ">
            <View className=" mt-1.5 h-1.5 w-1.5 rounded-[.375rem] bg-gray2  " />
            <Text className=" ml-2 text-gray1 ">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
