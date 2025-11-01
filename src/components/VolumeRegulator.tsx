import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";

interface VolumeRegulatorProps {
  seconds: number;
}

const MAX_SECONDS = 10;
const BAR_COUNT = 10;

export default function VolumeRegulator({ seconds }: VolumeRegulatorProps) {
  const filledBars = Math.min(Math.max(seconds, 0), MAX_SECONDS);

  return (
    <View style={styles.container}>
      {Array.from({ length: BAR_COUNT }).map((_, idx) => (
        <View
          key={idx}
          style={[
            styles.bar,
            idx < filledBars ? styles.barFilled : styles.barEmpty,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginVertical: 16,
  },
  bar: {
    width: 16,
    height: 32,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: Colors.foreground,
    borderWidth: 1,
    borderColor: Colors.foreground,
  },
  barFilled: {
    backgroundColor: Colors.button,
    borderColor: Colors.foreground,
  },
  barEmpty: {
    backgroundColor: Colors.foreground,
    borderColor: Colors.foreground,
  },
});
