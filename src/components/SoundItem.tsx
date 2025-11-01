import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Sound } from '../utills/data'
import Colors from '@/constants/Colors'
import Fonts from '@/constants/Fonts'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AudioSource } from 'expo-audio'
import { saveDashboardItems } from '../utills/functions'

type Props = {
  item: Sound;
  setPath: React.Dispatch<React.SetStateAction<AudioSource>>;
  playSound: () => Promise<void>;
  pauseSound: () => Promise<void>;
  stopSound: () => void;
  isPlaying: boolean;
  trackPath: AudioSource;
  favouries: Sound[];
  setFavourites: React.Dispatch<React.SetStateAction<Sound[]>>;
}

const SoundItem: React.FC<Props> = ({item, setPath, playSound, pauseSound, stopSound, isPlaying, trackPath, favouries, setFavourites}) => {
  const isThisItemActive = trackPath === item.source;
  const isThisItemFavourite = favouries.some(fav => fav.id === item.id);

  const togglePlay = async () => {
    if (isThisItemActive) {
      if (isPlaying) {
        await pauseSound();
      } else {
        await playSound();
      }
    } else {
      stopSound();
      setPath(item.source);
      await playSound();
    }
  };

  const toggleFavourite = () => {
    if (isThisItemFavourite) {
      setFavourites(prev => {
        const filtredFavourites = prev.filter(fav => fav.id !== item.id);
        saveDashboardItems('favourites', filtredFavourites);
        return filtredFavourites;
      });
    } else {
      setFavourites(prev => {
        const updatedFavourites = [...prev, item];
        saveDashboardItems('favourites', updatedFavourites);
        return updatedFavourites;
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={togglePlay}>
          <AntDesign name={(isPlaying && isThisItemActive) ? "pause" : "caret-right"} size={30} color={Colors.text} />
        </TouchableOpacity>

        <Text style={styles.text}>{item.name}</Text>

        <TouchableOpacity onPress={toggleFavourite}>
          <FontAwesome name={"music"} size={30} color={isThisItemFavourite ? Colors.buttonGradient : Colors.fadeLight} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.foreground,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    backgroundColor: Colors.fadeLight,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.title,
    fontSize: 24,
  },
})

export default SoundItem