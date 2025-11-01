import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import VolumeRegulator from "@/src/components/VolumeRegulator";
import withScreenLayout from "@/src/hoc/withScreenLayout";

const PreLoader = () => {
  const [time, setTime] = useState(0);
  const router = useRouter();


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    setTimeout(() => router.replace('/home'), 5000)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require("@/assets/images/icon.png")} style={styles.icon} />

        <Text style={styles.text}>Investigate the world of sounds</Text>

        <View style={styles.bottomContainer}>
          <VolumeRegulator seconds={time} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  text: {
    color: Colors.text,
    fontSize: 20,
    fontFamily: Fonts.title,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
});

export default withScreenLayout(PreLoader);
