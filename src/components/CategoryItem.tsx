import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { categoryImages, SoundCategory } from '../utills/data'
import Colors from '@/constants/Colors'
import Fonts from '@/constants/Fonts'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCatalogStore } from '@/store/catalogStore'
import { useRouter } from 'expo-router'

type Props = {
  name: SoundCategory
}

const CategoryItem: React.FC<Props> = ({name}) => {
  const router = useRouter();
  const setCategory = useCatalogStore((state) => state.setCategory);

  const navigateToPlayer = () => {
    setCategory(name);
    router.push('/player');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigateToPlayer}>
        <View style={styles.imageContainer}>
          <Image source={categoryImages[name]} style={styles.image}/>
        </View>

        <Text style={styles.text}>{name}</Text>

        <AntDesign name="caret-right" size={40} color={Colors.button} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: Colors.foreground,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    padding: 10,
    backgroundColor: Colors.fadeLight,
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  text: {
    color: Colors.text,
    fontFamily: Fonts.title,
    fontSize: 24,
  },
})


export default CategoryItem