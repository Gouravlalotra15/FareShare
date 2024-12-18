import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import SplashScreen from "./SplashScreen";
import "../global.css";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/Home");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <SplashScreen />;
}
