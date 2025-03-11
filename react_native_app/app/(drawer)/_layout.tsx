import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

function DrawerRoot () {
  return (
    <GestureHandlerRootView>
      <Drawer />
    </GestureHandlerRootView>
  )
}

export default DrawerRoot;