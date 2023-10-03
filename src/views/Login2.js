import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const Login2 = () => {
  const login = {
    username: 'binhpro',
    password: '123456'
  }
  const [getUsername, setUsername] = useState('')
  const [getPassword, setPassword] = useState('')
  const checkLogin = () => {
    if (getUsername === login.username && getPassword === login.password) {
      // Authentication successful
      Alert.alert('Login Successful', 'You have successfully logged in.');
    } else {
      // Authentication failed
      Alert.alert('Login Failed', 'Incorrect username or password. Please try again.');
    }
  }
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
        <TextInput style={styles.input} placeholder="Name" value={getUsername}
          onChangeText={(text) => setUsername(text)} />
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
        <TextInput style={styles.input} placeholder="Password" value={getPassword}
          onChangeText={(text) => setPassword(text)} />
        <Image
          source={require("../images/eye.png")}
          style={{ width: 32, height: 32, marginRight: 20 }}
        ></Image>
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={checkLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
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
  loginButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
  },
});

export default Login2;
