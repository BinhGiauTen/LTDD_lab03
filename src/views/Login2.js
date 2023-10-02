import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const Login2 = () => {
  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <View
        style={{
          flexDirection: "row",
          width: 339,
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../images/avatar_user 1.png")}
          style={{ width: 32, height: 32, marginRight: 10, marginLeft: 10 }}
        ></Image>
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 339,
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          alignItems: "center",
          marginTop: 20
        }}
      >
        <Image
          source={require("../images/lock.png")}
          style={{ width: 32, height: 32, marginRight: 10, marginLeft: 10 }}
        ></Image>
        <TextInput style={styles.input} placeholder="Password" />
        <Image
          source={require("../images/eye.png")}
          style={{ width: 32, height: 32, marginRight: 20 }}
        ></Image>
      </View>
      <Text style={styles.btnLogin}>LOGIN</Text>
      <Text
        style={{
          fontSize: 20,
          width: 260,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        CREATE ACCOUNT
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: 700,
    marginTop: 70,
    marginBottom: 70,
    textAlign: "left",
    width: "100%",
    marginLeft: 50,
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
    height: 54,
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
    width: 330,
    textAlign: "center",
    backgroundColor: "#060000",
    padding: 10,
    marginBottom: 20,
    marginTop: 70,
    height: 45,
    borderRadius: 2
  },
});

export default Login2;
