import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import Firebase from "../firebase";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const auth = Firebase.auth();

  const checkCredentials = async () => {
    await auth.signInWithEmailAndPassword(username, password).then(
      function (result) {
        ToastAndroid.show("Logged in successfully", ToastAndroid.SHORT);
        navigation.navigate("Home");
      },
      function (error) {
        ToastAndroid.show("Invalid Login or Password", ToastAndroid.SHORT);
        navigation.navigate("Login");
        if (error.code === "auth/account-exists-with-different-credential") {
          auth
            .fetchSignInMethodsForEmail(username)
            .then(function (providers) {});
        }
      }
    );
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.container}>
        Hi, Welcome To M. P. Gold Employee Portal
      </Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Username"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
        />
        <Separator />
        <TouchableOpacity
          onPress={checkCredentials}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: "center",
    color: "black",
    margin: 10,
    fontSize: 20,
    padding: 10,
    lineHeight: 30,
    alignItems: "center",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 50,
    fontSize: 18,
  },
  separator: {
    marginVertical: 14,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    padding: 10,
    margin: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
