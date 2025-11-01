import { AudioSource, useAudioPlayer } from 'expo-audio';
import { useEffect, useState } from 'react';

type UseMusicProps = {
  trackPath: AudioSource;
};

export const useMusic = ({ trackPath }: UseMusicProps) => {
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const player = useAudioPlayer(trackPath);
  player.loop = true;
  player.volume = volume;

  useEffect(() => {
    if (!player || !trackPath) return;

    if (player) {
      if (isPlaying) {
        player.play();
      } else {
        player.pause();
      }
    }
  }, [trackPath, isPlaying]);

  useEffect(() => {
    if (volume <= 0) {
      player.muted = true;
    } else {
      player.muted = false;
      player.volume = volume;
    }
  }, [volume]);

  const play = async () => {
    if (!player) return;
    setIsPlaying(true);
  };

  const pause = async () => {
    if (!player) return;
    setIsPlaying(false);
  };

  const stop = async () => {
    if (!player) return;
    setIsPlaying(false);
  };

  return { play, pause, stop, isPlaying, volume, setVolume };
};
