import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import EntryScreen from './src/screens/EntryScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  return (
    <View style={styles.container} scrollEnabled={false}>
      <StatusBar style="auto" />
      {/* <EntryScreen/> */}
      <GameScreen style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
});
