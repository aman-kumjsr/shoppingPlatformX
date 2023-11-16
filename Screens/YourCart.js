import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Heading from "../Components/ShopHome/Heading";
import ShoppingCartItem from "../Components/cart/cart";

export default function YourCart({ navigation }) {
  const initialCartItems = [
    {
      id: 1,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0b4f/076f/9049e286962efc9a50cc7aac1638676c?Expires=1700438400&Signature=HYMQ-n~I14EQ-G1NJp8j4gqMMIrt0UVeOqdehwUkdrrDhfdNiR6r7x~D8TQ5IMd7BLZiy85EZopjgLxaVXAggvoUQB-gcWekzFtSoLObyRJsgU3U35yFhN6Gl8FCh3PPJ5iQegW7p4eBeHJPkhjGqhwctkgOYwRGjAX4bpP~Rpdkiir9LBu9JyIW0W01dJP8F~NkIPNc5bjfTCsrhNL0HbT~Tb3gmyBC0SbgxzUhwOzux3RkJKxpS5jFaYNZIHWV3x~wuH8V9CCQC7rshK5AObX~r-5gD~GYPnJuXsfJ1uVgGTgIrdH-wTQdJWL~cd0F44xVRiAJkEuzVeTSKkpQsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      itemName: "Galliano Donna Women's Olsen Gem",
      quantity: 1,
      originalPrice: "$399.00",
      discountPrice: 299.0,
    },

    // ... add more items as needed
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrease = (index) => {
    // Implement logic to increase quantity for the item at the given index
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  const handleDecrease = (index) => {
    // Implement logic to decrease quantity for the item at the given index
    const updatedCartItems = [...cartItems];
    // Ensure the quantity does not go below 0
    updatedCartItems[index].quantity = Math.max(
      1,
      updatedCartItems[index].quantity - 1
    );
    setCartItems(updatedCartItems);
  };

  const handleDelete = (index) => {
    // Implement logic to delete the item at the given index
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Remove the item at the specified index
    setCartItems(updatedCartItems);
  };

  const calculateTotalprice = () => {
    return cartItems.reduce(
      (total, item) => total + item.discountPrice * item.quantity,
      0
    );
  };
  return (
    <View>
      <Heading dataIndex={1} />
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ShoppingCartItem
            item={item}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
            onDelete={() => handleDelete(index)}
          />
        )}
      />
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
      <View style={styles.subTotalView}>
        <Text style={styles.subtotalTxt}>Sub total:</Text>
        <Text style={styles.subtotalTxt}>${calculateTotalprice()}</Text>
      </View>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
      <TouchableOpacity>
        <Text
          style={styles.cartTxt}
          onPress={() => navigation.navigate("ShoppingCart")}
        >
          View cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.checkoutbtn}>
        <Text style={styles.checkoutTxt}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 296,
  },
  subTotalView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 31,
  },
  subtotalTxt: {
    fontSize: 16,
  },
  lineContainer: {
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: "rgb(192, 191, 191)",
  },
  cartTxt: {
    fontSize: 14,
    borderWidth: 1,
    textAlign: "center",
    paddingVertical: 16,
    marginBottom: 13,
    marginHorizontal: 15,
  },
  checkoutTxt: {
    fontSize: 14,
    borderWidth: 1,
    textAlign: "center",
    paddingVertical: 16,
    backgroundColor: "#343539",
    color: "#fff",
    // marginHorizontal: 15,
  },
  checkoutbtn: {
    marginHorizontal: 15,
  },
});
