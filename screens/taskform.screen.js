import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../db/firebase";

const { View, Text, TextInput, TouchableOpacity } = require("react-native");

const taskformScreen = ({route,navigation}) => {
    const [id,setId]= useState()
    const [task,setTask] = useState({"id":"","title":"","description":""})
    async function createTask(){
        console.log(task)
        const docRef = await addDoc(collection(firebase.db,"tasks"),task)

    }
    useEffect(()=>{
        if(route.params != "undefined"){
            setId(route.params.id)
            console.log("===================params sssssssssssssssss")
            console.log(route.params.id)
            console.log(id)
            editTask(route.params.id)
            // editTask()
        }
        
    },[])

    async function editTask (pid){
        
        const docref =  doc(firebase.db,'tasks',pid) 
        const docs = await getDoc(docref);
        const data = docs.data()
        setTask(data)
        
        
        
    }
    async function updateTask(){
        const docref = doc(firebase.db,"tasks",route.params.id);
        await updateDoc(docref,{
            title:task.title,
            description: task.description
        })
    }
  return (
    <View className="flex flex-1 justify-center items-center bg-slate-900 ">
    <Text className="font-semibold text-3xl mb-8 text-white">Creando mi tarea</Text>
      <TextInput
        placeholder="Tarea"
        defaultValue={task.title}
        onChangeText={(value)=>{
            task.title = value
        }}
        className="bg-white p-4 w-80 text-gray-700 font-semibold rounded-xl border mb-5 "

      ></TextInput>
      <TextInput
        placeholder="Descripción"
        numberOfLines={8}
        defaultValue={task.description}
        onChangeText={(value)=>{
            task.description= value
        }}
        className="bg-white p-4 w-80 text-gray-700 font-semibold rounded-xl border mb-5 "
      ></TextInput>
      <TouchableOpacity className="p-4 bg-slate-100 w-56 rounded-xl " onPress={async()=>{
        if(route.params != "undefined"){
            updateTask()
            navigation.navigate("tasks");
        }else{
            await createTask();
        navigation.navigate("tasks");
        }
       
      }}>
        <Text className="text-center text-slate-900 font-semibold text-lg">Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default taskformScreen;
