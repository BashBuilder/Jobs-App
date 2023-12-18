import { View, Text, TouchableOpacity, Image } from "react-native";
// import checkImageURL from "../utils";

export default function PopularJobsCard({
  item,
  selectedJob,
  handleCardPress,
}) {
  return (
    <TouchableOpacity
      className={` mt-4 w-52 justify-between rounded-md p-4 shadow-md ${
        selectedJob === item.job_id ? "bg-primary" : "bg-white"
      } `}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        className={` h-12 w-12 items-center justify-center rounded-md shadow-md ${
          selectedJob === item.job_id ? "bg-[#fff]" : "bg-slate-100"
        } `}
      >
        <Image
          source={{
            uri: item.employer_logo
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className=" h-[70%] w-[70%] rounded-md "
        />
      </TouchableOpacity>

      <Text className=" text-slate-700 mt-2 text-base ">
        {item.employer_name}
      </Text>

      <View className="mt-4">
        <Text
          className={` text-base ${
            selectedJob === item.job_id ? "text-white" : "text-primary"
          } `}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <View className="mt-2 flex-row items-center justify-start ">
          <Text
            className={` text-sm font-bold ${
              selectedJob === item.job_id ? "text-white" : "text-primary"
            } `}
          >
            {item?.job_publisher}
          </Text>
          <Text className=" text-[#B3AEC6] "> {item.job_country} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
