import React from "react";
import { View, Button, StyleSheet } from "react-native";
export default function ShoppingStart({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Start Your Shopping"
        onPress={() => navigation.navigate("ShopComp")}
      />
      <View style={{ margin: 19 }}>
        <Button
          title="Play Quiz"
          onPress={() => navigation.navigate("Submit")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
