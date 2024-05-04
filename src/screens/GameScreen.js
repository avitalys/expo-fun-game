import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from '../entities';
import Physics from '../physics';
import Consts from '../consts';

export default function () {
  const [running, setRunning] = useState(false);
  const [gameEngineRef, setGameEngineRef] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <>
      {/* <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" /> */}
      <GameEngine
        ref={(ref) => {
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
              gameEngineRef.stop();
              break;
            case 'point_scored':
              setCurrentScore(currentScore + 1);
              break;
            default:
              break;
          }
        }}
      >
        <StatusBar style="auto" hidden={true} />
      </GameEngine>

      <Text style={styles.score}>{currentScore}</Text>

      {!running ? (
        <View style={styles.newGameView}>
          <Pressable
            style={styles.newGameButton}
            onPress={() => {
              setCurrentScore(0);
              setRunning(true);
              gameEngineRef?.swap(entities());
            }}
          >
            <Text style={styles.newGameText}>New Game</Text>
          </Pressable>
        </View>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Consts.SCREEN_WIDTH,
    height: Consts.SCREEN_HEIGHT,
  },
  gameContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  score: {
    position: 'fixed',
    top: 0,
    left: 0,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 18,
  },
  newGameView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newGameButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  newGameText: {
    fontSize: 30,
    color: 'white',
    fontStyle: 'bold',
  },
});
