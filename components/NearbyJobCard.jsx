import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function NearbyJobCard({ job, handleNavigate }) {
  return (
    <TouchableOpacity
      onPress={handleNavigate}
      className="flex-1 flex-row items-center justify-between rounded-md p-4 shadow-sm "
    >
      <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-md bg-white ">
        <Image
          source={{
            uri: job.employer_logo
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className=" h-[70%] w-[70%] "
        />
      </TouchableOpacity>

      <View className=" mx-4 flex-1 ">
        <Text className="font-base font-bold text-primary ">
          {job?.job_title}
        </Text>
        <Text className=" mt-1 capitalize text-gray1  ">
          {job?.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
