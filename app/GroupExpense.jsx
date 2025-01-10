import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import AvatarIcon from "./components/AvatarGenerator";
const GroupExpense = () => {
  const router = useRouter();
  const expenses = [
    {
      id: 1,
      title: "Cafe",
      description: "Trip to Mumbai - Paid by Dinkar",
      date: "18 Dec 2024, 10:30 Am",
      amount: "Rs 600",
    },
    {
      id: 2,
      title: "Breakfast At Hotel",
      description: "Trip to Mumbai - Paid by You",
      date: "19 Dec 2024, 08:45 PM",
      amount: "Rs 500",
    },
    {
      id: 3,
      title: "Auto",
      description: "Trip to Mumbai - Paid by You",
      date: "19 Dec 2024, 04:02 PM",
      amount: "Rs 300",
    },
  ];
  return (
    <SafeAreaView>
      <View className="p-4 ">
        <TouchableOpacity onPress={() => router.replace("/(tabs)/Add")}>
          <Text>go back</Text>
        </TouchableOpacity>
        <View className="mt-6 flex ">
          <View className="flex flex-row items-center ">
            <AvatarIcon size={30} text={"M"}></AvatarIcon>
            <View>
              <Text className="text-lg font-black">Hi Gourav </Text>
              <Text className="text-sm text-gray-400">
                Make your groups and split bills easily
              </Text>
            </View>
          </View>

          <View className="bg-zinc-700 rounded-lg shadow-md mt-4">
            <View className=" p-5">
              <Text className="text-white text-lg font-bold mb-4">
                Trip to Mumbai
              </Text>
              <View className="flex-row justify-between">
                <View>
                  <Text className="text-white text-sm">Total</Text>
                  <Text className="text-white text-xl font-bold">Rs 3800</Text>
                </View>
                <View>
                  <Text className="text-white text-sm">To Collect</Text>
                  <Text className="text-white text-xl font-bold">Rs 900</Text>
                </View>
              </View>
            </View>
            <View className="bg-white h-1 w-11/12 ms-3"></View>
            <View className="flex-row justify-between h-20 p-5 items-center">
              <View>
                <Text className="text-white">Split To</Text>
                <View className="flex-row mt-2">
                  <AvatarIcon size={22} text={"Z"}></AvatarIcon>
                  <AvatarIcon size={22} text={"Z"}></AvatarIcon>
                </View>
              </View>
              <View className="bg-white w-1/4 h-7 flex-row items-center justify-center rounded-lg">
                <TouchableOpacity>
                  <Text className="text-black">View Split</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-black font-bold text-lg">
              Expense History
            </Text>
          </View>

          {/* Expense List */}
          {expenses.map((item) => (
            <View
              key={item.id}
              className="bg-gray-50 shadow-md p-5 py-4 rounded-lg mt-1 flex-row items-center "
            >
              <AvatarIcon size={30}></AvatarIcon>
              <View className="flex-1 ms-2">
                <Text className="text-black font-bold">{item.title}</Text>
                <Text className="text-gray-500 text-sm">
                  {item.description}
                </Text>
                <Text className="text-gray-400 text-xs">{item.date}</Text>
              </View>
              <Text className="text-green-500 font-bold">{item.amount}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GroupExpense;
