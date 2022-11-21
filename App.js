import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import loginScreen from './screens/login.screen';
import registerScreen from './screens/register.screen';
import taskformScreen from './screens/taskform.screen';
import tasklistScreen from './screens/tasklist.screen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='login'
    screenOptions={{headerMode:'none'}}
    >
    <Stack.Screen  name="register" component={registerScreen}/>
    <Stack.Screen name="login" component={loginScreen}/>
      <Stack.Screen name="tasks" component={tasklistScreen}/>
      <Stack.Screen name="task-form" component={taskformScreen}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}


