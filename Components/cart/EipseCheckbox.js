import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const EllipseCheckboxGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePress = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress("Free Shipping in City")}
      >
        <View
          style={[
            styles.checkbox,
            selectedOption === "Free Shipping in City" && styles.checked,
          ]}
        >
          {selectedOption === "Free Shipping in City" && (
            <Text style={styles.optionText}>✓</Text>
          )}
        </View>
        <Text style={styles.optionNameText}>Free Shipping in City</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress("Pickup")}
      >
        <View
          style={[
            styles.checkbox,
            selectedOption === "Pickup" && styles.checked,
          ]}
        >
          {selectedOption === "Pickup" && (
            <Text style={styles.optionText}>✓</Text>
          )}
        </View>
        <Text style={styles.optionNameText}>Pickup</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.rowContainer}
        onPress={() => handlePress("Courier Charge $5")}
      >
        <View
          style={[
            styles.checkbox,
            selectedOption === "Courier Charge $5" && styles.checked,
          ]}
        >
          {selectedOption === "Courier Charge $5" && (
            <Text style={styles.optionText}>✓</Text>
          )}
        </View>
        <Text style={styles.optionNameText}>Courier Charge $5</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",

    justifyContent: "space-around",
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "rgb(192, 191, 191)", // Change this to your desired border color
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: "#3498db", // Change this to your desired filled color
  },
  optionText: {
    color: "#ffffff", // Change this to your desired text color
  },
  optionNameText: {
    marginLeft: 12,
    marginVertical: 21,
  },
});

export default EllipseCheckboxGroup;
