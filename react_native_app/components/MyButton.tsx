import { StyleSheet, Text, TouchableOpacity } from "react-native";

function MyButton ({ title, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button}>
      <Text style={styles.text} onPress={onPress}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'orange',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default MyButton;