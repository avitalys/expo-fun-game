import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import EntryScreen from './src/screens/EntryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <EntryScreen/>
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
