import { Stack } from "expo-router";

function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="scrollMap" />
      <Stack.Screen name="leaderboard" />
    </Stack>
  );
}

export default RootLayout;
