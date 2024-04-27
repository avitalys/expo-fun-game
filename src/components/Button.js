import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, theme, onPress, iconName }) {

    const isPrimary = theme === "primary";
    const isSecondary = theme === "secondary";

    return (
        <View style={[styles.buttonContainer, (isPrimary || isSecondary)&& { borderWidth: 2, borderColor: "#ffd33d", borderRadius: 12 }]}>
          <Pressable
            style={[styles.button, isPrimary && { backgroundColor: "#fff" }]}
            onPress={onPress}
          >
            {iconName &&
              <FontAwesome 
                name={iconName} size={24} color={isPrimary ? "black" : "#fff"} style={styles.buttonIcon}
              />
            }
            <Text style={[styles.buttonLabel, isPrimary && { color: "#25292e" }]}>{label}</Text>
          </Pressable>
        </View>
      );
  }

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 52,
    marginHorizontal: 20,
    marginVertical: 4, 
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
