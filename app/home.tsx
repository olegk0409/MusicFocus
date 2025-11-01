import Colors from "@/constants/Colors";
import GradientButton from "@/src/components/GradientButton";
import MenuSmallButton from "@/src/components/MenuSmallButton";
import withScreenLayout from "@/src/hoc/withScreenLayout";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container} >
      <View style={styles.contentContainer}>
        <GradientButton press={() => router.push('/catalog')} title={'Play Sound'}/>
        <GradientButton press={() => router.push('/mixer')} title={'Mix Sounds'}/>
      </View>

        <View style={styles.bottomContainer}>
          <MenuSmallButton press={() => router.push('/favourites')} isSettings={false}/>
          <MenuSmallButton press={() => router.push('/settings')}/>
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
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.foreground,
    padding: 10
  },
});

export default withScreenLayout(HomeScreen)
