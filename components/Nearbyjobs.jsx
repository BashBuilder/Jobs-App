import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import useFetch from "../hooks/useFetch";
import NearbyJobCard from "./NearbyJobCard";

export default function Nearbyjobs() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View className=" mt-4">
      <View className=" flex-row items-center justify-between ">
        <Text className=" text-xl text-primary ">Nearby jobs</Text>
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
              className=" rounded-2xl bg-red-300 px-4 py-2 "
              onPress={refetch}
            >
              <Text className=" italic "> Try again </Text>
            </TouchableOpacity>
          </View>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              key={`nearby-job-${job.job_id}`}
              job={job}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
}
