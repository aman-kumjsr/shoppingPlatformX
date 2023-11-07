import React from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import SearchBox from "../Components/ShopHome/SearchBox";
import { useNavigation, useRoute } from "@react-navigation/native";

const FootHome = () => {
  const route = useRoute();
  // const { width } = Dimensions.get("window");
  const navigation = useNavigation();
  // const height = (width * 100) / 100;
  return (
    <View>
      <SearchBox />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <TouchableOpacity
            style={{ backgroundColor: "#ebebee", marginHorizontal: 14 }}
          >
            <ImageBackground
              style={{
                width: 246,
                height: 246,
                marginTop: 25,
                marginHorizontal: 42,
                resizeMode: "contain",
                backgroundColor: "#ebebee",
              }}
              source={{ uri: item }}
              key={index}
            >
              <View>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgoundColor: "#C60C30",
                    justifyContent: "center",
                    alignItem: "center",
                    flexDirectoin: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    20% off
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FootHome;
