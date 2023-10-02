import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Screen2 = () => {
  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <View style={styles.wrapper1}>
        <View style={styles.top1}></View>
      </View>
      <View style={styles.wrapper2}>
        <Text style={styles.text}>GROW</Text>
        <br />
        <Text style={styles.text}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.wrapper3}>
        <Text style={styles.text2}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.wrapper4}>
        <View style={styles.wrapperButton}>
          <Text style={styles.button}>LOGIN</Text>
          <Text style={styles.button}>SIGN UP</Text>
        </View>
        <Text style={styles.textbottom}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      "linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)",
    alignItems: "center",
    justifyContent: "center",
  },
  top1: {
    width: 140,
    height: 140,
    borderColor: "black",
    borderWidth: 15,
    borderRadius: 70,
    marginTop: 100,
  },
  wrapper1: {
    flex: 1,
  },
  wrapper2: {
    flex: 1,
    marginTop: 150,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 700,
  },
  wrapper3: {
    flex: 1,
  },
  text2: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: 700,
  },
  wrapperButton: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "yellow",
    height: 48,
    borderColor: 'yellow'
    
  },
  wrapper5: {
    flex: 1,
  },
  wrapper4: {
    flex: 1,
    width: "100%",
  },
  textbottom: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
    flex: 1,
  },
});

export default Screen2;
