import { useAudioPlayer } from 'expo-audio';
import { useEffect, useState } from 'react';
import { Sound, soundsList } from '../utills/data';

type useMultiMusicProps = {
  tracks: Sound[];
};

export const useMultiMusic = ({ tracks }: useMultiMusicProps) => {
  const [volume, setVolume] = useState<number>(1);
  const [pausedTracks, setPausedTracks] = useState<Sound[]>([]);

  const players = soundsList.map(track => ({
    ...track,
    player: useAudioPlayer(track.source),
  }));

  useEffect(() => {
    players.forEach(({ player, id }) => {
      const isPlayerInPlay = tracks.some(track => track.id === id);
      const isPlyaerPaused = pausedTracks.some(track => track.id === id);

      if (!player) return;

      player.loop = true;
      player.volume = volume;

      if (isPlayerInPlay && !isPlyaerPaused) {
        player.play()
      } else if (isPlyaerPaused) {
        player.pause()
      } else {
        player.pause();
      }
    });
  }, [tracks, pausedTracks]);

  useEffect(() => {
    if (volume <= 0) {
    players.forEach(({ player, id }) => {
      if (!player) return;

      player.muted = true;
    });
    } else {
    players.forEach(({ player, id }) => {
      if (!player) return;

      player.muted = false;
      player.volume = volume;
    });
    }
  }, [volume]);

  const play = async (track: Sound) => {
    setPausedTracks(prev => prev.filter(prevTrack => prevTrack.id !== track.id))
  };

  const pause = async (track: Sound) => {
    setPausedTracks(prev => [...prev, track]);
  };

  return { play, pause, pausedTracks, volume, setVolume };
};
