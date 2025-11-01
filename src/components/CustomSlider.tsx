import { StyleSheet } from "react-native";
import React from "react";
import { Slider } from '@miblanchard/react-native-slider';
import Colors from "@/constants/Colors";

type Props = {
  val: number;
  setVal: (value: number) => void;
}

const CustomSlider: React.FC<Props> = ({val, setVal}) => {
  return (
    <Slider
      value={val}
      onValueChange={(value) => setVal(value[0])}
      minimumValue={0}
      maximumValue={1}
      step={0.01}
      minimumTrackTintColor={Colors.buttonGradient}
      maximumTrackTintColor={Colors.fadeLight}
      thumbTintColor={Colors.text}
      thumbStyle={styles.thumb}
      trackStyle={styles.track}
      animateTransitions={true}
      animationType="timing"
    />
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 26,
    height: 26,
    borderRadius: 26,
    borderColor: '#FFF'
  },
  track: {
    height: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.fadeLight,
  },
})

export default CustomSlider;
