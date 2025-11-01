import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Sound } from '../utills/data'
import Colors from '@/constants/Colors'
import Fonts from '@/constants/Fonts'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { saveDashboardItems } from '../utills/functions'

type Props = {
  item: Sound;
  setTracks: React.Dispatch<React.SetStateAction<Sound[]>>;
  playSound: (track: Sound) => Promise<void>;
  pauseSound: (track: Sound) => Promise<void>;
  pausedTracks: Sound[];
  tracks: Sound[];
  favouries: Sound[];
  setFavourites: React.Dispatch<React.SetStateAction<Sound[]>>;
}

const SoundItem: React.FC<Props> = ({item, setTracks, playSound, pauseSound, pausedTracks, tracks, favouries, setFavourites}) => {
  const isThisItemActive = tracks.some(track => track.id === item.id);
  const isThisItemFavourite = favouries.some(fav => fav.id === item.id);
  const isThisItemPaused = pausedTracks.some(track => track.id === item.id);

  const togglePlay = async () => {
    if (isThisItemActive) {
      if (!isThisItemPaused) {
        await pauseSound(item);
      } else {
        await playSound(item);
      }
    } else {
      setTracks((prev) => [...prev, item]);
      await playSound(item);
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
          <AntDesign name={(!isThisItemPaused && isThisItemActive) ? "pause" : "caret-right"} size={30} color={Colors.text} />
        </TouchableOpacity>

        <Text style={styles.text}>{item.name}</Text>

        <TouchableOpacity onPress={toggleFavourite}>
          <FontAwesome name={"music"} size={30} color={isThisItemFavourite ? 'rgb(255, 0, 0)' : Colors.fadeLight} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.foreground,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 6,
    backgroundColor: Colors.fadeLight,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.title,
    fontSize: 20,
  },
})

export default SoundItem