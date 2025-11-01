import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Fonts from "@/constants/Fonts";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const router = useRouter();

  return (
    <View style={styles.topContainer}>
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="caret-left" size={40} color={Colors.buttonGradient} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.secondary,
    padding: 16,
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: 24,
    color: Colors.text,
  },
});

export default Header;
