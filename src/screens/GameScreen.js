import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from '../entities';
import Physics from '../physics';

export default function () {
  const [running, setRunning] = useState(false);
  const [gameEngineRef, setGameEngineRef] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <>
      {/* <Text style={styles.score}>{currentScore}</Text> */}
      {
        <GameEngine
          rer={(ref) => {
            setGameEngineRef(ref);
          }}
          systems={[Physics]}
          entities={entities()}
          running={running}
          style={styles.gameContainer}
          onEvent={(e) => {
            switch (e.type) {
              case 'game_over':
                setRunning(false);
                gameEngineRef?.stop();
                setCurrentScore(0);
              case 'point_scored':
                setCurrentScore(currentScore + 1);
              default:
                break;
            }
          }}
        ></GameEngine>
      }
      <StatusBar style="auto" hidden={true} />
    </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  score: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 18,
  },
});
