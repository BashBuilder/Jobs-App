import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Heart } from "lucide-react-native";

export default function Footer({ url }) {
  return (
    <View className=" absolute bottom-0 left-0 right-0 flex-row items-center justify-between bg-white p-2 ">
      <TouchableOpacity className=" h-14 w-14 items-center justify-center rounded-md border-[1px] border-[#F37453] ">
        <Heart color="#F37453" />
      </TouchableOpacity>

      <TouchableOpacity className="ml-4 h-full flex-1 items-center justify-center rounded-md bg-[#FE7654]">
        <Text className=" font-bold text-white ">Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
}
