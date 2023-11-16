import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const ShoppingCartItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const { imageUrl, itemName, quantity, discountPrice, originalPrice } = item;

  return (
    <View style={styles.baseContainer}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageUrl }} style={styles.img} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemNameStyle}>{itemName}</Text>
        <View style={styles.container}>
          <View style={styles.quantityView}>
            <TouchableOpacity onPress={onDecrease}>
              <Text style={styles.itemQuanitity}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={onIncrease}>
              <Text style={styles.itemQuanitity}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.baseDelete}>
            <TouchableOpacity onPress={onDelete} style={styles.deleteView}>
              <Image
                source={require("../../icons/delete.png")}
                style={styles.delete}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>{originalPrice}</Text>
            <Text style={styles.discountPrice}>${discountPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCartItem;

const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: "row",
    // alignItems: "center",
    padding: 10,
  },
  imgContainer: {
    width: 79,
    height: 92,
    backgroundColor: "#ebebee",
    marginTop: 18,
    marginLeft: 16,
  },
  img: {
    width: 55,
    height: 64,
    marginHorizontal: 12,
    marginVertical: 14,
  },
  container: {
    alignItems: "center",
    // borderWidth: 1,
  },
  quantityView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#9e9ea1",
    padding: 3,
    marginTop: 15,
    marginRight: 120,
  },
  itemNameStyle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 27,
    marginTop: 16,
  },
  itemQuanitity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#9e9ea1",
    fontWeight: "600",
  },
  delete: {
    borderColor: "#9e9ea1",
    width: 11,
    height: 13,
  },
  deleteView: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderColor: "#9e9ea1",
  },
  baseDelete: {
    marginTop: -32,
  },
  priceContainer: {
    flexDirection: "row",
    padding: 15,
    marginRight: 120,
  },
  originalPrice: {
    color: "#9e9ea1",
    textDecorationLine: "line-through",
    paddingRight: 8,
    fontSize: 14,
    marginTop: 4,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
