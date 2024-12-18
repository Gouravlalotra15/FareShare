import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AvatarIcon from "./AvatarGenerator";
import { useRouter } from "expo-router";

const GroupList = ({ ele }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="items-center"
      onPress={() => router.replace("/components/GroupExpense")}
    >
      <View className="bg-white shadow-lg rounded-lg p-4 mt-3 w-11/12 ">
        <View className="flex-row items-center mb-3">
          <AvatarIcon></AvatarIcon>
          <View>
            <Text className="text-black font-bold">{ele.title}</Text>
            <Text className="text-gray-500 text-sm">{ele.date}</Text>
          </View>
        </View>
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-gray-400 text-sm">Estimated Budget</Text>
            <Text className="text-black font-bold">${ele.estimatedBudget}</Text>
          </View>
          <View>
            <Text className="text-gray-400 text-sm">Spent Budget</Text>
            <Text className="text-black font-bold">${ele.spentBudget}</Text>
          </View>
        </View>
        {/* Budget Bar */}
        <View className="mt-4">
          <View className="bg-gray-200 h-2 rounded-full">
            <View
              style={{
                width: `${(ele.spentBudget / ele.estimatedBudget) * 100}%`,
              }}
              className="bg-black h-2 rounded-full"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GroupList;
