import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const Screen3 = () => {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <Image
        source={require("../images/lock.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.text}>FORGET PASSWORD</Text>
      <Text style={styles.text2}>
        Provide your account’s email for which you want to reset your password
      </Text>
      <View style={{ flexDirection: "row", width: 305 }}>
        <Image
          source={require("../images/mail.png")}
          style={{ width: 48, height: 45 }}
        ></Image>
        <TextInput style={styles.input} placeholder="email" />
      </View>
      <Text style={styles.button}>NEXT</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: "center",
    
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 700,
    width: 140,
    
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 30
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "yellow",
    height: 48,
    borderColor: "yellow",
    width: 305,
    textAlign: 'center',
    marginTop: 50
  },
  textbottom: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
    flex: 1,
  },
  image: {
    width: 105,
    height: 117,
    marginTop: 100,
    marginBottom: 30
  },
  input: {
    height: 45,
    width: "100%",
    padding: 10,
    backgroundColor: "#C4C4C4",
  },
});

export default Screen3;
