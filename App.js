import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import MainLogin from "./src/pages/loginPage/main"
import MainContatos from "./src/pages/cttEmergenciaPage/main"
import MainPermissions from "./src/pages/permissionsPage/main"
import MainProfile from "./src/pages/profilePage/main"
import MainNotification from "./src/pages/notificationPage/main"
import Create from "./src/pages/createPage/main"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={MainLogin} options={{headerShown: false}}/>
      <Stack.Screen name="Pages" component={Pages} options={{}}/>
      <Stack.Screen name="CriarConta" component={Create} options={{}}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

function Pages() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component={MainContatos} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="contacts" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen name="Permissões" component={MainPermissions} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="shield-checkmark-outline" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen name="Perfil" component={MainProfile} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}/>
        <Tab.Screen name="Notificações" component={MainNotification} 
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
