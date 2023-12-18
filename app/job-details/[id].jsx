import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Stack, useGlobalSearchParams, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import Specifics from "../../components/Specifics";
import useFetch from "../../hooks/useFetch";
import { MoveLeft, Share } from "lucide-react-native";
import { ActivityIndicator } from "react-native";
import Company from "../../components/Company";
import Tabs from "../../components/Tabs";
import Footer from "../../components/Footer";
import About from "../../components/About";

const tabs = ["About", "Qualifications", "Responsibilities"];

export default function Details() {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  });

  const displayyTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return <About info={data[0].job_description ?? "No data provided "} />;
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsiblities ?? ["N/A"]}
          />
        );
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "rgb(241 245 249)" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => {
            return (
              <TouchableOpacity className=" h-10 w-10 items-center justify-center rounded-md bg-white ">
                <Share color="black" />
              </TouchableOpacity>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity className=" h-10 w-10 items-center justify-center rounded-md bg-white ">
                <MoveLeft color="black" />
              </TouchableOpacity>
            );
          },
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="black" />
          ) : error ? (
            <Text>Please try again</Text>
          ) : data.length === 0 ? (
            <Text> No data available </Text>
          ) : (
            <View>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayyTabContent()}
            </View>
          )}
        </ScrollView>

        <Footer
          url={
            data[0]?.job_google_link ??
            "https://careers.google.com/jobs/results/"
          }
        />
      </>
    </SafeAreaView>
  );
}
