import { TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

type Props = {
  isSettings?: boolean,
  press: () => void
}

const MenuSmallButton: React.FC<Props> = ({isSettings = true, press}) => {
  return (
    <TouchableOpacity 
      style={{padding: 10, backgroundColor: Colors.fadeLight, borderRadius: 8}}
      onPress={press}>
      {isSettings ? (
        <Ionicons name="settings-sharp" size={40} color={Colors.text} />
      ) : (
        <Ionicons name="musical-notes" size={40} color={Colors.text} />
      )}
    </TouchableOpacity>
  )
}

export default MenuSmallButton