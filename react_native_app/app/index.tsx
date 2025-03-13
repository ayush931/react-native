import MyButton from "@/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

function Index() {
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
          fontWeight: "800",
          color: "white",
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
      <Link href={"/leaderboard"}>Leader Board</Link>
    </View>
  );
}

export default Index;
