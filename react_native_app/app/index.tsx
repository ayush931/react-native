import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import "@/global.css";
import { useFonts, Poppins_700Bold_Italic, Poppins_300Light } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function Index() {
  const [loaded, error] = useFonts({
    Poppins_700Bold_Italic,
    Poppins_300Light
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded])

  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login");
  };

  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          // fontWeight: "800",
          color: "white",
          fontFamily: 'Poppins_700Bold_Italic'
        }}
      >
        Welcome to react-native
      </Text>
      <Link style={{ padding: 10 }} href={"/about"}>
        Go to about
      </Link>
      <Link style={{ padding: 10 }} href={"/(tab)"}>
        Go to tab
      </Link>
      <Link style={{ padding: 10 }} href={"/(drawer)"}>
        Go to Drawer
      </Link>
      <MyButton title={"continue"} onPress={onContinue} />
      <Link style={{ padding: 10 }} href={"/scrollMap"}>
        Scroll, Map view
      </Link>
      <Link href={"/leaderboard"} className="pt-4">Leader Board</Link>
      <Link className="p-4" href={"/model"}>
        Models
      </Link>
    </View>
  );
}

export default Index;
