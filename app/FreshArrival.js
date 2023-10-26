import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function FreshArrival() {
  return (
    <View style={Styles.Container}>
      <View style={Styles.FreshArrival}>
        <Text style={Styles.ArrivalTxt}>Fresh Arrival</Text>
        <Text style={Styles.SeeTxt}>See all</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    marginHorizontal: 15,
  },
  FreshArrival: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 38,
  },
  ArrivalTxt: {
    fontSize: 20,
  },
  SeeTxt: {
    fontSize: 12,
    color: "rgb(155, 154, 154)",
  },
});
