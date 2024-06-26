import { StyleSheet, Text } from 'react-native';

export default function Title({ text }) {
  return <Text style={styles.title}>{text}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 20,
    padding: 8,
  },
});
