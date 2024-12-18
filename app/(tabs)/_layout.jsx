import { View, Text, Image } from "react-native";
import React from "react";
import icon from "../../constant/icon";
import { Tabs } from "expo-router";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center gap-1 mt-5">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-8 h-8"
      />
    </View>
  );
};

export default TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#5D5C58",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 74,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Add"
        options={{
          title: "Add",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.add}
              color={color}
              focused={focused}
              name="add"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icon.group}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};
