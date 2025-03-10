import { Text, View } from "react-native";

function Index () {
  return (
    <View style={{
      backgroundColor: 'red',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: '800',
        color: 'white'
      }}>Welcome to react-native</Text>
    </View>
  )
}

export default Index;