import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

const Add = () => {
  const { height } = Dimensions.get("window");
  const viewHeight = height * 0.25;

  return (
    <View>
      <View
        className="flex-row justify-between bg-black pt-36"
        style={{ height: viewHeight }}
      >
        <View>
          <Text className="text-white font-bold text-2xl p-36">Groups</Text>
          <Text className="text-md text-regular text-white ">
            Make your groups and split bills easily
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text className="text-white">ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Add;
