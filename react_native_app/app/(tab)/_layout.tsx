import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

function TabRoot() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          )
        }} />
      <Tabs.Screen 
      name="profile" 
      options={{
        title: "Profile",
        tabBarIcon: ({ color, size }) => {
          return(
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: "#e4f0d4",
              bottom: 15,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <FontAwesome name="user" size={24} color={"black"} />
            </View>
          )
        }
      }} />
      <Tabs.Screen 
      name="about" 
      options={{
        title: "About us",
        tabBarIcon: ({ color, size }) => {
          return (
            <View >
              <FontAwesome name="user-circle-o" size={24} color={"black"} />
            </View>
          )
        }
      }} />
    </Tabs>
  );
}

export default TabRoot;
