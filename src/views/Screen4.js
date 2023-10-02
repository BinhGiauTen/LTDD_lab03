import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-web";

const Screen4 = () => {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <Text style={styles.text}>CODE</Text>
      <Text style={styles.text1}>VERIFICATION</Text>
      <Text style={styles.text2}>
      Enter ontime password sent on ++849092605798
      </Text>
      <View style={{ flexDirection: "row", width: 305 }}>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
        <TextInput style={styles.input}/>
      </View>
      <Text style={styles.button}>VERIFY CODE</Text>
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
  text1: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 700,
    width: 302,
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 100,
    marginBottom: 30
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 30,
    width: 302,
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
    height: 50,
    width: "100%",
    padding: 10,
    borderWidth: 1
  },
});

export default Screen4;
