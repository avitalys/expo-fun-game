import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from 'react-native-game-engine';
import entities from '../entities';
import Physics from '../physics';


export default function () {
  return (
    <View style={{flex: 1}}>
        <GameEngine
          systems={[Physics]}
          entities={entities()}
          style={styles.gameContainer}>    

        </GameEngine>
       <StatusBar style="auto" hidden={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
    gameContainer: {
        backgroundColor: 'white',
        position: 'absolute', 
        top:'0', 
        left:'0', 
        right: '0', 
        bottom:'0'
    }
});

