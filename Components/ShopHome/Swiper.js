import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import CustomSlide from "./CustomSlide";

const SwiperComp = () => {
  return (
    <View style={styles.saleContainer}>
      <Swiper
        loop
        autoplay
        dot={
          <View
            style={{
              backgroundColor: "grey",
              width: 8,
              height: 8,
              borderRadius: 4,
              margin: 5,
            }}
          ></View>
        }
        activeDot={
          <View
            style={{
              backgroundColor: "grey",
              width: 12,
              height: 12,
              borderRadius: 6,
              margin: 5,
              backgroundColor: "black",
            }}
          ></View>
        }
      >
        <CustomSlide
          imageSource={require("../../icons/slider1.jpg")}
          buttonText="Shop Now"
          onButtonPress={() => {
            // Handle button 1 press
          }}
          slideText1="Great"
          slideText2="Weekend Sale"
          slideText3="50% off"
        />
        <CustomSlide
          imageSource={require("../../icons/slider2.jpg")}
          buttonText="Shop Now"
          onButtonPress={() => {
            // Handle button 2 press
          }}
          slideText1="Great"
          slideText2="Weekend Sale"
          slideText3="50% off"
        />
        <CustomSlide
          imageSource={require("../../icons/slider1.jpg")}
          buttonText="Shop Now"
          onButtonPress={() => {
            // Handle button 3 press
          }}
          slideText1="Great"
          slideText2="Weekend Sale"
          slideText3="50% off"
        />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  saleContainer: {
    height: 256,
    marginLeft: 15,
    width: 330,
  },
});

export default SwiperComp;
