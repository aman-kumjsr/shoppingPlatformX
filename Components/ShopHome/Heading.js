import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Heading({ dataIndex }) {
  const navigation = useNavigation();
  const headingData = ["Shopping", "Your Cart", "Shopping Cart"];
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../../icons/back.jpg")} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.heading}>{headingData[dataIndex]}</Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  back: {
    marginTop: 18,
    marginLeft: 15,
  },
  lineContainer: {
    width: "100%",
  },
  line: {
    height: 1,
    backgroundColor: "rgb(192, 191, 191)",
  },
});
