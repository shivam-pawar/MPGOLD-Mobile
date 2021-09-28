import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Home() {
  const [name, setName] = React.useState("");
  const [sampleType, setSampleType] = React.useState("Dhali");
  const [weight, setWeight] = React.useState("");

  const submitDetails = () => {
    Alert.alert(
      "Are your sure?",
      "Customer Name: " +
        name +
        "\r\nSample: " +
        sampleType +
        "\r\nWeight: " +
        weight +
        "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            Alert.alert("Please Note this serial number", "\r\n\r\n\r10034");
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require("../assets/homeBackground.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <Text style={styles.container}>Please enter customer details</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setSampleType}
          value={sampleType}
          placeholder="Sample Name"
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Weight"
          keyboardType="number-pad"
        />
        <Separator />
        <TouchableOpacity
          onPress={submitDetails}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Submit</Text>
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
    marginTop: 30,
    fontSize: 18,
  },
  separator: {
    marginVertical: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#a572f7",
    borderRadius: 10,
    padding: 20,
    margin: 16,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
