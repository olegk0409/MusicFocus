import Colors from "@/constants/Colors";
import withScreenLayout from "@/src/hoc/withScreenLayout";
import { Sound, SoundCategory, soundsCategories, soundsList } from "@/src/utills/data";
import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CustomSlider from "@/src/components/CustomSlider";
import Header from "@/src/components/Header";
import { loadDashboardItems } from "@/src/utills/functions";
import CategoryItemSmall from "@/src/components/CategoryItemSmall";
import SoundItemSmall from "@/src/components/SoundItemSmall";
import { useMultiMusic } from "@/src/hooks/useMultiMusic";
import FontAwesome from '@expo/vector-icons/FontAwesome';

const MixerScreen = () => {
  const [tracks, setTracks] = useState<Sound[]>([]);
  const { play, pause, pausedTracks, volume, setVolume } = useMultiMusic({ tracks });
  const [favouries, setFavourites] = useState<Sound[]>([]);
  const [visibleCategories, setVisibleCategories] = useState<SoundCategory[]>([]);

  const categoryMap = useMemo(() => ({
    Focus: soundsList.filter(item => item.category === 'Focus'),
    Relax: soundsList.filter(item => item.category === 'Relax'),
    Sleep: soundsList.filter(item => item.category === 'Sleep'),
    Nature: soundsList.filter(item => item.category === 'Nature'),
    Instrumental: soundsList.filter(item => item.category === 'Instrumental'),
    Cinematic: soundsList.filter(item => item.category === 'Cinematic'),
    Game: soundsList.filter(item => item.category === 'Game'),
  }), [soundsList]);

  const stopAllMusic = () => setTracks([]);

  useEffect(() => {
    loadDashboardItems('favourites', setFavourites);
  }, [])

  return (
    <View style={styles.container}>
      <Header title="Mix your sounds" />

      <TouchableOpacity onPress={stopAllMusic} style={styles.stopButton}>
        <FontAwesome name="stop" size={20} color={Colors.foreground} />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {soundsCategories.map((category) => (
            <View key={category} style={styles.categoryContainer}>
              <CategoryItemSmall name={category} setVisibleCategories={setVisibleCategories}/>
              {visibleCategories.includes(category) && (
                <View>
                  {categoryMap[category].map((sound) => (
                    <SoundItemSmall
                      key={sound.id} 
                      item={sound} 
                      setTracks={setTracks} 
                      playSound={play} 
                      pauseSound={pause} 
                      pausedTracks={pausedTracks} 
                      tracks={tracks}
                      favouries={favouries}
                      setFavourites={setFavourites}
                    />
                  ))}
                </View>
              )}
            </View>
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
    paddingTop: 20,
    paddingBottom: 80,
  },
  stopButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    padding: 10,
    backgroundColor: Colors.fadeLight,
    borderRadius: 50
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    gap: 20
  },
  categoryContainer: {
    width: '100%',
    backgroundColor: Colors.foreground,
    borderRadius: 20,
    overflow: 'hidden',
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

export default withScreenLayout(MixerScreen)
