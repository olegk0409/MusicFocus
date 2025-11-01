import Colors from "@/constants/Colors";
import SoundItem from "@/src/components/SoundItem";
import withScreenLayout from "@/src/hoc/withScreenLayout";
import { useMusic } from "@/src/hooks/useMusic";
import { Sound } from "@/src/utills/data";
import { AudioSource } from "expo-audio";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import CustomSlider from "@/src/components/CustomSlider";
import Header from "@/src/components/Header";
import { loadDashboardItems } from "@/src/utills/functions";


const FavouritesScreen = () => {
  const [trackPath, setTrackPath] = useState<AudioSource>(require('@/assets/music/focus/lumen-lofi.mp3'));
  const { play, pause, stop, isPlaying, volume, setVolume } = useMusic({ trackPath });
  const [favouries, setFavourites] = useState<Sound[]>([]);

  useEffect(() => {
    loadDashboardItems('favourites', setFavourites);
  }, [])

  return (
    <View style={styles.container}>
      <Header title="Play your sound" />

      <View style={styles.contentContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {favouries.map((sound, index) => (
            <SoundItem 
              key={sound.name + index} 
              item={sound} 
              setPath={setTrackPath} 
              playSound={play} 
              stopSound={stop} 
              pauseSound={pause} 
              isPlaying={isPlaying} 
              trackPath={trackPath}
              favouries={favouries}
              setFavourites={setFavourites}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <View style={{width: '80%'}}>
          <CustomSlider val={volume} setVal={setVolume}/>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: '30%',
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    gap: 20
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    paddingVertical: 10,
    borderColor: Colors.border,
    backgroundColor: Colors.foreground
  },
});

export default withScreenLayout(FavouritesScreen)
