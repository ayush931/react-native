import { Image, TextInput, View } from "react-native";
import React from "react";
import MyButton from "@/app-example/components/MyButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  function onLogin() {
    router.navigate("/signup");
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("@/assets/images/images.png")}
        style={{
          height: 400,
          width: "100%",
        }}
        resizeMode="cover"
      />
      <View style={{ padding: 20, gap: 20 }}>
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
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;
