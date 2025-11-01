import GradientButton from "@/src/components/GradientButton";
import Header from "@/src/components/Header";
import withScreenLayout from "@/src/hoc/withScreenLayout";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from "react-native";
import WebView from "react-native-webview";


const SettingsScreen = () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);

  if (isWebViewVisible) {
    return (
      <View style={{ flex: 1, position: "relative" }}>
        <StatusBar
          hidden={false}
          backgroundColor="#000"
          barStyle="light-content"
        />
        <TouchableOpacity
          onPress={() => setIsWebViewVisible(false)}
          style={{
            position: "absolute",
            top: "2.5%",
            right: "6%",
            zIndex: 10,
            width: 60,
            height: 35,
            backgroundColor: "#1B1B1B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white" }}>Close</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, backgroundColor: "white", paddingTop: "5%" }}>
          <WebView
            source={{ uri: "https://github.com/olegk0409" }}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Settings" />

      <View style={styles.contentContainer}>
        <GradientButton press={() => setIsWebViewVisible(true)} title={'Privacy Policy'}/>
        <GradientButton press={() => setIsWebViewVisible(true)} title={'Terms of Use'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 20,
    alignItems: 'center',
    flex: 1,
  },
});

export default withScreenLayout(SettingsScreen)
