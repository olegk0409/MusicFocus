import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { categoryImages, SoundCategory } from '../utills/data'
import Colors from '@/constants/Colors'
import Fonts from '@/constants/Fonts'
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  name: SoundCategory;
  setVisibleCategories: React.Dispatch<React.SetStateAction<SoundCategory[]>>;
}

const CategoryItemSmall: React.FC<Props> = ({name, setVisibleCategories}) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    if (isListVisible) {
      setVisibleCategories(prev => prev.filter(cat => cat !== name));
    } else {
      setVisibleCategories(prev => [...prev, name]);
    }
    setIsListVisible(!isListVisible);
  }

  return (
    <View style={[styles.container, isListVisible && {borderBottomWidth: 2, borderColor: Colors.border}]}>
      <TouchableOpacity style={styles.button} onPress={toggleList}>
        <View style={styles.imageContainer}>
          <Image source={categoryImages[name]} style={styles.image}/>
        </View>

        <Text style={styles.text}>{name}</Text>

        <AntDesign name={isListVisible ? "caret-down" : "caret-right"} size={20} color={Colors.button} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.foreground,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: Colors.fadeLight,
    borderRadius: 20,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.title,
    fontSize: 20,
  },
})


export default CategoryItemSmall