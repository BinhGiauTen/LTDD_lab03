import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const XMEye = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/GroupEye.png")}
        style={{ width: 112, height: 107,marginVertical: 40}}
      ></Image>
      <View
        style={{
          flexDirection: "row",
          width: 339,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#c4c4c4",
        }}
      >
        <Image
          source={require("../images/Group 3.png")}
          style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}
        ></Image>
        <TextInput style={styles.input} placeholder="Please input user name" />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 339,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#c4c4c4",
          marginTop: 20
        }}
      >
        <Image
          source={require("../images/Group 5.png")}
          style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}
        ></Image>
        <TextInput style={styles.input} placeholder="Please input password" />
      </View>
      <Text style={styles.btnLogin}>LOGIN</Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "85%",
        }}
      >
        <Text style={styles.options}>Register</Text>
        <Text style={styles.options}>Forgot Password</Text>
      </View>
      <View style={{ flexDirection: "row", width: "85%" ,marginVertical: 30}}>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#386FFC",
            flex: 1,
            marginBottom: 10,
            marginRight: 5,
          }}
        ></View>
        <Text style={styles.options}>Other Login Methods</Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#386FFC",
            flex: 1,
            marginBottom: 10,
            marginLeft: 5,
          }}
        ></View>
      </View>
      <View style={{ flexDirection: "row", width: "85%", justifyContent: "space-between" }}>
        <Image
          source={require("../images/Group 8.png")}
          style={{ width: 74, height: 74 }}
        ></Image>
        <Image
          source={require("../images/Group 9.png")}
          style={{ width: 74, height: 74 }}
        ></Image>
        <View style={{backgroundColor: "#3A579C", width: 74, height: 74,borderRadius: 5, alignItems: 'center',justifyContent: 'center' }}>
          <Image
            source={require("../images/facebook2.png")}
            style={{ width: 32, height: 45, backgroundColor: "#3A579C" }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 14,
    fontWeight: 400,
    color: "#c4c4c4",
    borderWidth: 0,
  },
  btnLogin: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 400,
    width: 330,
    textAlign: "center",
    backgroundColor: "#386FFC",
    padding: 10,
    marginBottom: 20,
    marginTop: 50,
    height: 48,
    borderRadius: 10,
  },
  options: {
    fontSize: 18,
    fontWeight: 400,
  },
});

export default XMEye;
