import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import icons from "../constants/icons";
import images from "../constants/images";
import Welcome from "../components/Welcome";
import { Menu } from "lucide-react-native";
import PopularJobs from "../components/PopularJobs";
import Nearbyjobs from "../components/Nearbyjobs";

export default function index() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView className=" flex-1 bg-slate-100 ">
      {/* the upper screen menu */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(241 245 249)" },
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <TouchableOpacity
                className=" h-10 w-10 items-center justify-center rounded-md bg-white "
                // onPress={handlePress}
              >
                <Menu color="black" />
              </TouchableOpacity>
            );
          },
          headerTitle: "",
          headerRight: () => {
            return (
              <TouchableOpacity
                className=" h-10 w-10 items-center justify-center rounded-md bg-white "
                // onPress={handlePress}
              >
                <Image
                  source={images.profile}
                  resizeMode="cover"
                  className={` h-full w-full rounded-md`}
                />
              </TouchableOpacity>
            );
          },
        }}
      />
      {/* the scrollable section */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className=" flex-1 p-4 ">
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
