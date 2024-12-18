import { View, Image } from "react-native";
import React from "react";
import splitwise from "../assets/images/splitwise.png";
import { SafeAreaView } from "react-native-safe-area-context";
const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex h-full justify-center items-center bg-zinc-200">
        <Image source={splitwise} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
