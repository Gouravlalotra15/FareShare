import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import GroupList from "../../components/GroupList";
const Groups = () => {
  const [toPay, setToPay] = useState(20);
  const [toCollect, setToCollect] = useState(0);

  const groupDetails = [
    {
      title: "Trip to Mumbai",
      date: "24 Dec 2024",
      estimatedBudget: 3800,
      spentBudget: 1900,
    },
    {
      title: "Trip to Gurgaon",
      date: "02 Jan 2025",
      estimatedBudget: 4500,
      spentBudget: 2000,
    },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-black text-lg font-bold mb-2 px-4 mt-4">
        Group List
      </Text>
      <View>
        {groupDetails.map((ele, idx) => (
          <GroupList key={idx} ele={ele}></GroupList>
        ))}
      </View>
    </View>
  );
};

export default Groups;
