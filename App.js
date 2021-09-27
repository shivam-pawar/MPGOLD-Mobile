import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar style="auto" />
      </SafeAreaView>
      <HomeStack.Navigator initialRouteName="Login">
        <HomeStack.Screen name="Login" component={Login} />
        <HomeStack.Screen name="Home" component={Home} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
