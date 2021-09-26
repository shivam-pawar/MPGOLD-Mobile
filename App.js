import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./Components/Login";

export default function App() {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="auto" />
      </SafeAreaView>
      <Login />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
