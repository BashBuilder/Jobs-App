import { LocateIcon } from "lucide-react-native";
import { View, Text, Image } from "react-native";

export default function Company({
  companyLogo,
  jobTitle,
  companyName,
  location,
}) {
  return (
    <View className=" my-4 items-center justify-center ">
      <View className=" h-20 w-20 items-center justify-center rounded-lg bg-white  ">
        <Image
          source={{
            uri: companyLogo
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          className=" h-[80%] w-[80%] "
        />
      </View>

      <View className=" mt-2 ">
        <Text className=" font-bol text-center text-lg text-primary ">
          {jobTitle}
        </Text>
      </View>

      <View className=" mt-2 flex-row items-center justify-center ">
        <Text className=" font-base text-primary "> {companyName} </Text>
        <View className=" flex-row items-center justify-center ">
          <LocateIcon />
          <Text className=" ml-2 text-base text-gray1 "> {location} </Text>
        </View>
      </View>
    </View>
  );
}
