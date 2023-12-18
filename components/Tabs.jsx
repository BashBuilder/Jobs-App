import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      className={`ml-1 rounded-md px-8 py-4 shadow-md  ${
        name === activeTab ? "text-primary" : "#F3F4F8"
      } `}
      onPress={onHandleSearchType}
    >
      <Text
        className={` ${
          name === activeTab ? "text-[#C3BFCC]" : "text-[#AAA9B8]"
        } `}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <View className="mb-2 mt-4">
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: 10 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
}
