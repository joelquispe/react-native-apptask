import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const { View, Text, TouchableOpacity } = require("react-native");

const loginScreen = ({navigation}) => {
  const [user, setUser] = useState({ username: "", password: "" });
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="font-semibold text-4xl mb-20">App Mis Tareas</Text>
      <TextInput
        className="p-4 w-80  font-semibold rounded-xl border mb-5 "
        onChangeText={(value) => {
          user.username = value;
        }}
        placeholder="username"
      ></TextInput>
      <TextInput
        className="p-4 text-cyan-700 w-80 font-semibold rounded-xl border mb-14"
        onChangeText={(value) => {
          user.password = value;
        }}
        placeholder="password"
      ></TextInput>
      <TouchableOpacity className="p-4 bg-slate-900 w-56 rounded-xl " onPress={()=>{
        console.log(user)
        navigation.navigate("tasks");
      }}>
        <Text className="text-center text-white text-lg">Iniciar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default loginScreen;
