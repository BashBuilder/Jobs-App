import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Search } from "lucide-react-native";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full time");

  return (
    <View>
      {/* The header text welcome section */}
      <View>
        <Text className=" text-2xl text-secondary ">Hello Adrian</Text>
        <Text className="mt-2 text-2xl font-bold text-primary">
          Find your perfect job
        </Text>
      </View>

      {/* The input box section */}
      <View className=" mt-4 h-12 flex-row items-center justify-center ">
        <View className="align-center mr-1 h-full flex-1 justify-center rounded-md bg-white ">
          <TextInput
            className=" h-full w-full px-4 text-base "
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for"
          />
        </View>
        <TouchableOpacity
          className=" h-12 w-12 items-center justify-center rounded-md bg-tertiary "
          onPress={handleClick}
        >
          <Search color="white" size={30} />
        </TouchableOpacity>
      </View>

      {/* the top list scoll section */}
      <View className=" mt-4 ">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className={` rounded-md border-[1px] px-4 py-2 text-gray2 ${
                activeJobType === item ? "border-secondary" : "border-gray2"
              }  `}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text
                className={` font-lg ${
                  activeJobType === item ? " text-secondary " : "text-gray2"
                } `}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 10 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
