import MyButton from "@/app-example/components/MyButton";
import { useRouter } from "expo-router";
import { Image, TextInput, View } from "react-native";

const Signup = () => {
  const router = useRouter();
  function onRegister () {
    router.navigate("/login");
  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/download.png")}
        style={{
          height: 400,
          width: "100%",
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
      <TextInput
          placeholder="Enter your name"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10
          }}
        />
        <TextInput
          placeholder="Enter your email"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10
          }}
          onChangeText={e => console.log(e)}
        />
        <TextInput
          placeholder="Enter your password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10
          }}
        />
        <TextInput
          placeholder="Re-Enter your password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10
          }}
        />
        <MyButton title={"Register"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default Signup;
