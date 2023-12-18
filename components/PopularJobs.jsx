import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import PopularJobsCard from "./PopularJobsCard";

export default function PopularJobs() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  const [selectedJob, setSelectedJob] = useState("");

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View className=" mt-4">
      <View className=" flex-row items-center justify-between ">
        <Text className=" text-xl text-primary ">Popular jobs</Text>
        <TouchableOpacity>
          <Text className=" text-gray1">Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : error ? (
          <View>
            <Text>Something went wrong</Text>
            <TouchableOpacity
              className=" bg-red-300 rounded-2xl px-4 py-2 "
              onPress={refetch}
            >
              <Text className=" italic "> Try again </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobsCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}
