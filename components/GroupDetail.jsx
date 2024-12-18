import { View, Text } from "react-native";
import React from "react";

const GroupDetail = () => {
  return (
    <View className="flex-row px-4 py-4">
      <View className="flex-1 bg-teal-500 p-4 mr-2 rounded-lg">
        <Text className="text-white text-sm mb-1">To Pay</Text>
        <Text className="text-white text-xl font-bold">
          ${toPay.toFixed(2)}
        </Text>
      </View>
      <View className="flex-1 bg-yellow-400 p-4 ml-2 rounded-lg">
        <Text className="text-black text-sm mb-1">To Collect</Text>
        <Text className="text-black text-xl font-bold">
          ${toCollect.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default GroupDetail;
