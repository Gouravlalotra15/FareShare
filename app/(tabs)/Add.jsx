import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import GroupList from "../components/GroupList";

const Add = () => {
  const { height } = Dimensions.get("window");
  const { openAddModal, setOpenModal } = useState(false);
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
  const viewHeight = height * 0.12;

  return (
    <SafeAreaView>
      <View
        className="flex-row justify-between bg-black mt-3 h-full"
        style={{ height: viewHeight, padding: 10, paddingTop: 20 }}
      >
        <View>
          <Text className="text-white font-bold text-2xl ">Groups</Text>
          <Text className="text-md text-regular text-white ">
            Make your groups and split bills easily
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setOpenModal(true);
            }}
          >
            <Text className="text-white">ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex bg-white h-full ">
        <Text className="text-black text-lg font-bold mb-2 px-4 mt-4">
          Group List
        </Text>
        <ScrollView>
          <View>
            {groupDetails.length > 0 ? (
              groupDetails.map((ele, idx) => (
                <GroupList key={idx} ele={ele}></GroupList>
              ))
            ) : (
              <Text className="text-gray-500 text-center mt-4">
                No groups available. Click "ADD" to create one.
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Add;
