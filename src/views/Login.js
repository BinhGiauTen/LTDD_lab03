import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
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
          marginBottom: 40
        }}
        placeholder="Email"
      />
      <View
        style={{
          flexDirection: "row",
          width: 339,
          backgroundColor: "rgba(196, 196, 196, 0.30)",
          alignItems: 'center'
        }}
      >
        <TextInput style={styles.input} placeholder="Password" />
        <Image
          source={require("../images/eye.png")}
          style={{ width: 38, height: 26, marginRight: 20 }}
        ></Image>
      </View>
      <Text style={styles.btnLogin}>LOGIN</Text>
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
      <Text
        style={{
          fontSize: 14,
          width: 260,
          fontWeight: 400,
          height: 20,
          color: "#5D25FA",
          textAlign: "center",
          marginBottom: 15,
          marginTop: 15
        }}
      >
        For got your password?
      </Text>
      <Text
        style={{
          fontSize: 14,
          width: 260,
          fontWeight: 400,
          height: 20,
          textAlign: "center",
        }}
      >
        Or login with
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: 'center',
          width: 339,
          height: 50,
          marginTop: 30
        }}
      >
        <View style={{backgroundColor: '#25479B', width: '33%', height: '100%',alignItems: 'center',justifyContent: 'center'}}>
          <Image
            source={require("../images/facebook.png")}
            style={{ width: 35, height: 35 }}
          ></Image>
        </View>
        <View style={{backgroundColor: '#0F8EE0',  width: '33%',alignItems: 'center'}}>
          <Text style={{ fontSize: 35, color: "white", fontWeight: 700, lineHeight: 50 }}>
            Z
          </Text>
        </View>
        <View style={{backgroundColor: '#fff',  width: '33%', borderWidth: 1, borderColor: '#0F8EE0',alignItems: 'center',height: '100%',justifyContent: 'center'}}>
          <Image
            source={require("../images/Group.png")}
            style={{ width: 35, height: 35 }}
          ></Image>
        </View>
      </View>
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
    marginTop: 70
  },
});

export default Login;
