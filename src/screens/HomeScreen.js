import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Image,
  View,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
const ghost = require("../../assets/ghost.png");
import * as Animatable from "react-native-animatable";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
//screens
import BooksScreen from "../Navigation/screens/BooksScreen";
import AppScreen from "../Navigation/screens/AppScreen";
import  MotivationScreen  from "../Navigation/screens/MotivationScreen";
import  PersonalSpaceScreen  from "../Navigation/screens/PersonalSpaceScreen";

const booksName = "Libros";
const appName = "Home";
const motivationName = "Motivación";
const personalSpaceName = "Personal";

const Tab = createBottomTabNavigator();

export default function HomeScreen({ setIsAuthenticated }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="appName"
       screenOptions={ ({route})=> ({
        tabBarActiveTintColor: "#c6daf1",
        tabBarInactiveTintColor: "#a4a4a4",
        tabBarStyle:{
          
          backgroundColor: "#1d395d",
          paddingBottom: 5,
          paddingTop: 5,
          paddingLeft: 5,
          paddingRight: 5,
          height: 60,
          fontSize: 20,
        },
        headerTitleStyle: {
          fontSize: 20,
          color: "#c6daf1",
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#1d426f",
        },
        tabBarLabelStyle:{
          fontSize: 12,
        },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name;
            if (rn === booksName) {
              iconName = focused ? 'book' : 'book-outline'
            }
            else if (rn === appName) {
              iconName = focused ? 'home' : 'home-outline'
            }
            else if (rn === motivationName) {
              iconName = focused ? 'heart' : 'heart-outline'
            }
            else if (rn === personalSpaceName) {
              iconName = focused ? 'person' : 'person-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
       })}
       >
        <Tab.Screen  name={appName} component={AppScreen} />
        <Tab.Screen name={booksName} component={BooksScreen} />
        <Tab.Screen name={motivationName} component={MotivationScreen} />
        <Tab.Screen name={personalSpaceName} component={PersonalSpaceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1f4e85",
  },
  homeContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#00000010",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  btn: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 15,
    paddingBottom: 20,
  },
});
