import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SaleSection = () => {
  return (
    <View style={styles.saleContainer}>
      <Image
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/4192/c71a/e6fe39e21528205015439bb42144b630?Expires=1699228800&Signature=ZL7C1Hunw8x8n771bDeeGC9RxqrU49h33pbeJJft3DB9TyzJlS1B1l5ltuJLUPEICryx0Dq1BNdFrB7GE3V3LGsKPF3x~qXiyeBBov6Os~dicgzNxtjnSZ4P0ACQt7H-wgKTu2Rg1mgPy8nYKnNVz71wdirZ~FZauKse--JTkZplCbyoI0OSiQ48j~FaFje-f~9T7cbM4Vwxx333JI6TnnELNfteHFMFKIcBYgv0oJmQo6I8fLaJdVNRn2IWidGkYF2KoWRxjEsWATL6JxCXIN~PKuSmnq6WSwpXRQnlk4ZgA0o0xAWBala2-Wla0tKtgR9ttyf9F6iLXPH0E5PHZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }}
        style={styles.backgroundImage}
      />
      <View style={styles.saleContent}>
        <Text style={styles.saleText}>Great</Text>
        <Text style={styles.saleText}>Weekend Sale</Text>
        <Text style={styles.saleText}>50% off</Text>
        <TouchableOpacity style={styles.shopNowButton}>
          <Text style={styles.shopNowText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  saleContainer: {
    height: 256,
    width: 330,
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
    marginTop: 28,
    marginBottom: 73,
    marginLeft: 23,
  },
  saleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
  },
  shopNowButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
  },
  shopNowText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default SaleSection;
