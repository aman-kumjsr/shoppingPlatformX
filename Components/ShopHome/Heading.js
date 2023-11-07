import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Heading() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Shopping</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  lineContainer: {
    width: "100%",
  },
  line: {
    height: 1,
    backgroundColor: "rgb(192, 191, 191)",
  },
});
