import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>End of Summer!</Text>
      <Text style={styles.head}>Up to 40% off on all items.</Text>
      <Text style={styles.subHead}>Last chance to take advantage of our</Text>
      <Text style={styles.subHead}>discounts!</Text>
      <TextInput style={styles.emailInput} placeholder="Email address" />
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupTxt}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.subHeadContainer}>
        <Text style={styles.subHead}>
          Sign up to our Newsletter and get the{" "}
        </Text>
        <Text style={styles.subHead}>discount code!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    marginVertical: 25,
    marginHorizontal: 15,
    alignItems: "center",
    // justifyContent: "center",
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subHead: {
    fontSize: 16,
    color: "rgb(155, 154, 154)",
    // marginTop: 5,
  },
  emailInput: {
    width: "100%",
    height: 40,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  signupBtn: {
    height: 40,
    backgroundColor: "rgb(108, 123, 134)",
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 15,
  },
  signupTxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  subHeadContainer: {
    marginVertical: 25,
    alignItems: "center",
  },
});
