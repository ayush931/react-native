import MyButton from "@/app-example/components/MyButton";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

function Index() {
  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login")
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
      <Link href={"/about"}>Go to about</Link>
      <Link href={"/(tab)"}>Go to tab</Link>
      <Link href={"/(drawer)"}>Go to Drawer</Link>
      <MyButton title={"continue"} onPress={onContinue} />
    </View>
  );
}

export default Index;
