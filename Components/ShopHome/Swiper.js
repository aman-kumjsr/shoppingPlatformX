import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const data = [
  {
    imageSource: require("../../icons/slider1.jpg"),
    buttonText: "Shop Now",
    slideText1: "Great",
    slideText2: "Weekend Sale",
    slideText3: "50% off",
  },
  {
    imageSource: require("../../icons/slider2.jpg"),
    buttonText: "Shop Now",
    slideText1: "Great",
    slideText2: "Weekend Sale",
    slideText3: "50% off",
  },
  {
    imageSource: require("../../icons/slider1.jpg"),
    buttonText: "Shop Now",
    slideText1: "Great",
    slideText2: "Weekend Sale",
    slideText3: "50% off",
  },
];

const Swiper = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      let newIndex = (selectedImageIndex + 1) % data.length;
      setSelectedImageIndex(newIndex);
      scrollViewRef.current.scrollTo({
        x: newIndex * 340, // Adjust the width as per your image width
        animated: true,
      });
    }, 3000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, [selectedImageIndex]);

  const handlePageChange = (event) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / 340); // Adjust the width as per your image width

    setSelectedImageIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handlePageChange}
        ref={scrollViewRef}
      >
        {data.map((item, index) => (
          <ImageBackground
            key={index}
            source={item.imageSource}
            style={styles.imageBackground}
          >
            <View style={styles.overlay}>
              <Text style={styles.slideText}>{item.slideText1}</Text>
              <Text style={styles.slideText}>{item.slideText2}</Text>
              <Text style={styles.slideText}>{item.slideText3}</Text>
              <TouchableOpacity
                style={styles.shopNowButton}
                onPress={item.onButtonPress}
              >
                <Text style={styles.shopNowText}>{item.buttonText}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dotContainer}>
              {data.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      backgroundColor:
                        selectedImageIndex === index ? "black" : "gray",
                    },
                  ]}
                />
              ))}
            </View>
          </ImageBackground>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  imageBackground: {
    width: 330, // Adjust the width to your desired size
    height: 256,
  },
  overlay: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 28,
  },
  slideText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 23,
    padding: 3,
  },
  shopNowButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginLeft: 23,
    marginTop: 20,
  },
  shopNowText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    margin: 5,
  },
});

export default Swiper;
