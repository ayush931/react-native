import { Image, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import MyButton from "@/components/MyButton";

const Login = () => {
  // const [value, setValue] = useState("");
  // const [value1, setValue1] = useState("");

  const [value, setValue] = useState({
    value1: "",
    value2: "",
  });

  useEffect(() => {
    console.log("Calling...");
  }, [value?.value1]);

  const router = useRouter();
  function onLogin() {
    router.navigate("/signup");
    // console.log(Number(value) + Number(value1));
    console.log(Number(value?.value1) + Number(value?.value2));
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
            borderRadius: 10,
          }}
          // onChangeText={(e) => setValue(e)}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value1: e }))}
        />
        <TextInput
          placeholder="Enter your password"
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
          // onChangeText={(e) => setValue1(e)}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
        />
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  );
};

export default Login;
