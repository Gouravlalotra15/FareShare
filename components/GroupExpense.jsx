import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
const GroupExpense = () => {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity onPress={() => router.replace("/(tabs)/Groups")}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupExpense;
