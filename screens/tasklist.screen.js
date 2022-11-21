import { collection, deleteDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../db/firebase";
const { View, Text, TouchableOpacity } = require("react-native");

const tasklistScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  async function getData() {
    const data = collection(firebase.db, "tasks");
    
    onSnapshot(data, (snapshot) => {
        setTasks([])
       snapshot.docs.forEach((doc)=>{
        const data = {id:doc.id,title:doc.data().title,description:doc.data().description}
        setTasks((taskss)=>[...taskss,data])
      });
      
    });

    console.log(tasks);
  }
  async function  deleteTask(id){
    await deleteDoc(doc(firebase.db,"tasks",id))
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <View className="grid flex-1 mt-10">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("task-form");
        }}
        className="absolute bottom-2 right-2 bg-slate-900 w-32 p-4 rounded-2xl"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Agregar
        </Text>
      </TouchableOpacity>
      <Button
        title="Ver"
        onPress={() => {
          console.log(tasks);
        }}
      ></Button>
      {tasks.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={()=>{
            console.log("editar")
            navigation.navigate("task-form",{id:item.id})
        }}>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            color="black"
            onPress={() => {
                deleteTask(item.id)
              console.log(item.id);
            }}
          />
        </ListItem>
      ))}
    </View>
  );
};

export default tasklistScreen;
