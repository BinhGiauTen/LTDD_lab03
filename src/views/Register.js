import { View, Text, StyleSheet, Image } from "react-native";
import React, { useMemo, useState } from "react";
import { TextInput } from "react-native-web";
import RadioGroup from "react-native-radio-buttons-group";

const Register = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Male",
        value: "Male",
      },
      {
        id: "2",
        label: "Female",
        value: "Female",
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>
      <TextInput
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          height: 50,
          width: 339,
          padding: 10,
          fontSize: 18,
          fontWeight: 500,
          color: "#000",
        }}
        placeholder="Name"
      />
      <TextInput
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          height: 50,
          width: 339,
          padding: 10,
          fontSize: 18,
          fontWeight: 500,
          color: "#000",
          marginTop: 20,
          marginBottom: 20,
        }}
        placeholder="Phone"
      />
      <TextInput
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          height: 50,
          width: 339,
          padding: 10,
          fontSize: 18,
          fontWeight: 500,
          color: "#000",
        }}
        placeholder="Email"
      />
      <View
        style={{
          flexDirection: "row",
          width: 339,
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput style={styles.input} placeholder="Password" />
        <Image
          source={require("../images/eye.png")}
          style={{ width: 38, height: 26, marginRight: 20 }}
        ></Image>
      </View>
      <TextInput
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          height: 50,
          width: 339,
          padding: 10,
          fontSize: 18,
          fontWeight: 500,
          color: "#000",
          marginTop: 20,
          marginBottom: 20,
        }}
        placeholder="Birthday"
      />
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        layout='row'
      />
      <Text style={styles.btnLogin}>Register</Text>
      <Text
        style={{
          fontSize: 14,
          width: 260,
          fontWeight: 400,
          height: 20,
          textAlign: "center",
        }}
      >
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 40,
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#E3C000",
    height: 48,
    borderColor: "#E3C000",
    width: 339,
    textAlign: "center",
    marginTop: 50,
  },
  image: {
    width: 105,
    height: 117,
    marginTop: 100,
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: 339,
    padding: 10,
    fontSize: 18,
    fontWeight: 500,
    color: "#000",
  },
  btnLogin: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    width: 339,
    textAlign: "center",
    backgroundColor: "#E53935",
    padding: 10,
    marginBottom: 20,
    marginTop: 20
  },
});

export default Register;
