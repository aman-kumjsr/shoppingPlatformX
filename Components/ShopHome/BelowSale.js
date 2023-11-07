import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BelowSale = () => {
  return (
    <View style={styles.saleContainer}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/8302/d4be/8af06c483fc0cd48f02d9f37e6f24205?Expires=1699228800&Signature=Ejpy-EH2riSJWfmYx1TWVyl-SR6DdQZPBRYosNWxwROQV8-32ac8wl7HqhkQy~qaI22MWO83k4YQR2KnAWv2oyITQ38uYyHSfo2x3apg99BxcgXkARiQWzcOKlwcXJrp9vvJPTU15rhb3Og2DMuXKx5FVedPbMzQS6es3~5WZUMZH-HerF50zbx9L8goMEaVlIsgonVBAjsHfJDu25fQfmKlBMPrAs-g2ocRUQkjeWaRuLGKw~34krRUt89nKBLYMyz-1Eqkl4ky6qZM-w2UWu4i2nJXhfzmMA7ATCDAN7t1-5ja6nUmqosZzzcV6y06DfvaRBwUYLk~n8ioTDPM0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }} // Replace with your background image
        style={styles.backgroundImage}
      />
      <View style={styles.saleContent}>
        <Text style={styles.saleText}>Great</Text>
        <Text style={styles.saleText}>Weekend Sale</Text>
        <Text style={styles.saleText}>50% off</Text>
        <View styles={styles.shopNowBtn}>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saleContainer: {
    height: 256,
    width: 330,
    marginTop: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
    marginLeft: 15,
  },
  saleContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 58,
    marginBottom: 80,
    marginLeft: 23,
  },
  saleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
  },
  shopNowBtn: {
    marginTop: 60,
  },
  shopNowButton: {
    backgroundColor: "black",
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 15,
  },
  shopNowText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});

export default BelowSale;
