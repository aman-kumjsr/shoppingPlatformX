import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RatedList = ({ navigation }) => {
  // Assuming you have an array of image URLs and corresponding text
  const data = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/2ee9/8491/b2f3d1faceb789bee74f3415f93c0ec7?Expires=1699228800&Signature=BZ6yoizsgkN5aevUvjtfnpNFSH~xhLQVgeKftWRI7gXPzFcJQhKmQUx75K3snNwfa9TYFEaNhlXsbICYhz59ehDPkJF-nOEsQKhdqPwQTvcLkCo8m2pPO60Xx5SRAEdp5G0ZsjTI0quIkwpNI7-3VIw3UdwmqlYEcgQuTp1rdPJEugJFYnTs0MUY6ySo5ZclDif7LiQXrwcr81Q33Xu5B9Olg9OCd6VFQpoFKNR0ka60p0kJocyeoFh6K4hE6L433K8ZSAz6g43l1q8C6NnkkOfbWC4WGNML89uSkrOmJtMDQ-ihVLE9DfL2ZbYkkrS8jnnJyxxAL~dZwklW63P1Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "HANDBAG",
      text2: "Groove Bag",
      text3: "$ 299.00",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699228800&Signature=nAeZaR35zWe1Zv4Rra0BgVazKeBSpGGXcynp4gdzlzCgVgG0KdXva0JRp8sUbv5ONQmBkmmEUTxPX-oxBt3fATCM7dgbi4ZLqVZKQj-~kf1XLJJ9j4ss~cp7a6HX3N9MTVXzEC~6PaZTJ~BuOz4xjuD2jqEJOi-qVJ-MGcIHF4RMTblKu0vqqtH3UixqbzWBLZTgt79IrQRyOgzVxMqjLsHNv9z69UzXW5oWJwmXLL3FfVgpNPqoEZe6IiwMVqlC9lvDaQCTJNiIjJNlfTPYpuMeRsElV9Dza5h9IFQ79~t4S9Ra7yYRRVuiDW3nWpAAVth1iS1pRbgNZdoPONw1vQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "FOOTWARE",
      text2: "Stylish Black Cap",
      text3: "$ 299.00",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/d589/198c/9c72c09dce83b94e48509189338bbc29?Expires=1699228800&Signature=BVTHQXqr7~pd4BTfjUbCNcVlYQcRkx6A2VHZISI3QHR6d-Zmx9lpE2qeuUA90HdaQsZn1xWj6YohSK-BwHPFfpshp-27QJ3EGpvLD0Kjo~Pmr9BYQHIyEdr8f1lf70bTlsPxENGFc8T~B43V3lInq9LlRPKO7wv6Fb-LzVa65~hTUGQO-Lbnvp-eEL62w~R8whP6ZOb7E3jUS7sSvUSYZ9kwHavoDHqdhCzverQZMs35mTWDI40Q7uYVtHyXQPw5NPSsLY3Tl4SBmk3NQCmM~i5TR8bccPyTdq5GWOf6VWV7a0vr1cq4iAlciVod6RYhdNmFFpE97Hb3a5X0hGRvPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "PERFUME",
      text2: "Royal Perfume",
      text3: "$ 299.00",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/2ee9/8491/b2f3d1faceb789bee74f3415f93c0ec7?Expires=1699228800&Signature=BZ6yoizsgkN5aevUvjtfnpNFSH~xhLQVgeKftWRI7gXPzFcJQhKmQUx75K3snNwfa9TYFEaNhlXsbICYhz59ehDPkJF-nOEsQKhdqPwQTvcLkCo8m2pPO60Xx5SRAEdp5G0ZsjTI0quIkwpNI7-3VIw3UdwmqlYEcgQuTp1rdPJEugJFYnTs0MUY6ySo5ZclDif7LiQXrwcr81Q33Xu5B9Olg9OCd6VFQpoFKNR0ka60p0kJocyeoFh6K4hE6L433K8ZSAz6g43l1q8C6NnkkOfbWC4WGNML89uSkrOmJtMDQ-ihVLE9DfL2ZbYkkrS8jnnJyxxAL~dZwklW63P1Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "HANDBAG",
      text2: "Groove Bag",
      text3: "$ 299.00",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1699228800&Signature=nAeZaR35zWe1Zv4Rra0BgVazKeBSpGGXcynp4gdzlzCgVgG0KdXva0JRp8sUbv5ONQmBkmmEUTxPX-oxBt3fATCM7dgbi4ZLqVZKQj-~kf1XLJJ9j4ss~cp7a6HX3N9MTVXzEC~6PaZTJ~BuOz4xjuD2jqEJOi-qVJ-MGcIHF4RMTblKu0vqqtH3UixqbzWBLZTgt79IrQRyOgzVxMqjLsHNv9z69UzXW5oWJwmXLL3FfVgpNPqoEZe6IiwMVqlC9lvDaQCTJNiIjJNlfTPYpuMeRsElV9Dza5h9IFQ79~t4S9Ra7yYRRVuiDW3nWpAAVth1iS1pRbgNZdoPONw1vQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "FOOTWARE",
      text2: "Stylish Black Cap",
      text3: "$ 299.00",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/d589/198c/9c72c09dce83b94e48509189338bbc29?Expires=1699228800&Signature=BVTHQXqr7~pd4BTfjUbCNcVlYQcRkx6A2VHZISI3QHR6d-Zmx9lpE2qeuUA90HdaQsZn1xWj6YohSK-BwHPFfpshp-27QJ3EGpvLD0Kjo~Pmr9BYQHIyEdr8f1lf70bTlsPxENGFc8T~B43V3lInq9LlRPKO7wv6Fb-LzVa65~hTUGQO-Lbnvp-eEL62w~R8whP6ZOb7E3jUS7sSvUSYZ9kwHavoDHqdhCzverQZMs35mTWDI40Q7uYVtHyXQPw5NPSsLY3Tl4SBmk3NQCmM~i5TR8bccPyTdq5GWOf6VWV7a0vr1cq4iAlciVod6RYhdNmFFpE97Hb3a5X0hGRvPQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      text1: "PERFUME",
      text2: "Royal Pefume",
      text3: "$ 299.00",
    },

    // ... Repeat this for your other images and text data
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Productinfo")}>
            <View style={styles.imgContainer}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
            </View>

            <Text style={styles.titleTxt}>{item.text1}</Text>
            <Text style={styles.nameTxt}>{item.text2}</Text>
            <Text style={styles.costTxt}>{item.text3}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imgContainer: {
    width: 159,
    height: 186,
    marginTop: 24,
    backgroundColor: "#ebebee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  row: {
    width: "50%", // To display 2 items per row
    alignItems: "center",
  },
  image: {
    width: 100, // Set the desired image dimensions
    height: 100,
    // padding: 50,
  },
  titleTxt: {
    fontSize: 12,
    marginTop: 14,
  },
  nameTxt: {
    fontSize: 18,
  },
  costTxt: {
    fontSize: 12,
    color: "rgb(155, 154, 154)",
  },
});

export default RatedList;
