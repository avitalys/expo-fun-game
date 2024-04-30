import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from '../entities';
import Physics from '../physics';

export default function () {
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <>
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running={running}
        style={styles.gameContainer}
      ></GameEngine>
      <StatusBar style="auto" hidden={true} />
    </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
});
