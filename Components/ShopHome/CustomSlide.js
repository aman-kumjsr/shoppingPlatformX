import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomSlide = ({
  imageSource,
  buttonText,
  onButtonPress,
  slideText1,
  slideText2,
  slideText3,
}) => {
  return (
    <View style={styles.slideContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.slideText}>{slideText1}</Text>
        <Text style={styles.slideText}>{slideText2}</Text>
        <Text style={styles.slideText}>{slideText3}</Text>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "",
  },
  image: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
  contentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  slideText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
    padding: 3,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomSlide;
