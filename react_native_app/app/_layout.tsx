import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Stack>
  );
}

export default RootLayout;
