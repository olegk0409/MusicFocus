import { AudioSource } from "expo-audio";
import { ImageSourcePropType } from "react-native";

export const soundsCategories = [
  'Focus',
  'Relax',
  'Sleep',
  'Nature',
  'Instrumental',
  'Cinematic',
  'Game',
] as const;

export type SoundCategory = typeof soundsCategories[number];

export const categoryImages: Record<SoundCategory, ImageSourcePropType> = {
  'Focus': require('@/assets/images/categories/Focus.png'),
  'Relax': require('@/assets/images/categories/Relax.png'),
  'Sleep': require('@/assets/images/categories/Sleep.png'),
  'Nature': require('@/assets/images/categories/Nature.png'),
  'Instrumental': require('@/assets/images/categories/Instrumental.png'),
  'Cinematic': require('@/assets/images/categories/Cinematic.png'),
  'Game': require('@/assets/images/categories/Game.png'),
};

export interface Sound {
  id: string;
  name: string;
  category: SoundCategory;
  source: AudioSource;
}

export const soundsList: Sound[] = [
  {
    id: '1',
    name: 'An eye for details',
    category: 'Focus',
    source: require('@/assets/music/focus/an-eye-for-details.mp3'),
  },
  {
    id: '2',
    name: 'Blissful Serenity',
    category: 'Focus',
    source: require('@/assets/music/focus/blissful-serenity.mp3'),
  },
  {
    id: '3',
    name: 'Lumen Lofi',
    category: 'Focus',
    source: require('@/assets/music/focus/lumen-lofi.mp3'),
  },
  {
    id: '4',
    name: 'Puddles in the Sky',
    category: 'Focus',
    source: require('@/assets/music/focus/puddles-in-the-sky.mp3'),
  },
  {
    id: '5',
    name: 'ChillHop',
    category: 'Relax',
    source: require('@/assets/music/relax/chillhop.mp3'),
  },
  {
    id: '6',
    name: 'Midnight Whispers',
    category: 'Relax',
    source: require('@/assets/music/relax/midnight-whispers.mp3'),
  },
  {
    id: '7',
    name: 'Night Street',
    category: 'Relax',
    source: require('@/assets/music/relax/night-street.mp3'),
  },
  {
    id: '8',
    name: 'Relaxing',
    category: 'Relax',
    source: require('@/assets/music/relax/relaxing.mp3'),
  },
  {
    id: '9',
    name: 'Ambient Sleep',
    category: 'Sleep',
    source: require('@/assets/music/sleep/ambient-sleep.mp3'),
  },
  {
    id: '10',
    name: 'Calm Sleep',
    category: 'Sleep',
    source: require('@/assets/music/sleep/calm-sleep.mp3'),
  },
  {
    id: '11',
    name: 'Midnight Pulse',
    category: 'Sleep',
    source: require('@/assets/music/sleep/midnight-pulse.mp3'),
  },
  {
    id: '12',
    name: 'Fire',
    category: 'Nature',
    source: require('@/assets/music/nature/fire.mp3'),
  },
  {
    id: '13',
    name: 'Morning Rain',
    category: 'Nature',
    source: require('@/assets/music/nature/morning-rain.mp3'),
  },
  {
    id: '14',
    name: 'Rain in the city',
    category: 'Nature',
    source: require('@/assets/music/nature/rain-in-the-city.mp3'),
  },
  {
    id: '15',
    name: 'River',
    category: 'Nature',
    source: require('@/assets/music/nature/river.mp3'),
  },
  {
    id: '16',
    name: 'Spring Forest',
    category: 'Nature',
    source: require('@/assets/music/nature/spring-forest.mp3'),
  },
  {
    id: '17',
    name: 'Tawny Owl',
    category: 'Nature',
    source: require('@/assets/music/nature/tawny-owl.mp3'),
  },
  {
    id: '18',
    name: 'Kiss of Autumn',
    category: 'Instrumental',
    source: require('@/assets/music/instrumental/kiss-of-autumn.mp3'),
  },
  {
    id: '19',
    name: 'My Life',
    category: 'Instrumental',
    source: require('@/assets/music/instrumental/my-life.mp3'),
  },
  {
    id: '20',
    name: 'Smile',
    category: 'Instrumental',
    source: require('@/assets/music/instrumental/smile.mp3'),
  },
  {
    id: '21',
    name: 'Day of Eve',
    category: 'Cinematic',
    source: require('@/assets/music/cinematic/day-of-eve.mp3'),
  },
  {
    id: '22',
    name: 'Path to the top',
    category: 'Cinematic',
    source: require('@/assets/music/cinematic/path-to-the-top.mp3'),
  },
  {
    id: '23',
    name: 'Unbreakable',
    category: 'Cinematic',
    source: require('@/assets/music/cinematic/unbreakable.mp3'),
  },
  {
    id: '24',
    name: 'Arcade',
    category: 'Game',
    source: require('@/assets/music/game/arcade.mp3'),
  },
  {
    id: '25',
    name: 'Mystery',
    category: 'Game',
    source: require('@/assets/music/game/mystery.mp3'),
  },
  {
    id: '26',
    name: 'Pirates',
    category: 'Game',
    source: require('@/assets/music/game/pirates.mp3'),
  }
]