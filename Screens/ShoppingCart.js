import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Heading from "../Components/ShopHome/Heading";
// import ShopCartItem from "../Components/cart/shopCart";
import ShoppingCartItem from "../Components/cart/cart";
import EllipseCheckbox from "../Components/cart/EipseCheckbox";
// import ShopCartItem from "../components/cart/shopCart";

export default function ShoppingCart() {
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
    {
      id: 2,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/d589/198c/9c72c09dce83b94e48509189338bbc29?Expires=1701043200&Signature=pBeuo1DrfjRyBAHULmstT5-WLROmWu05wz7~NlwEaXR3GdsY2bBGD-moQ9hG1xPls7lPtqdKooNftKxv04c8nJKHJW-pbGe6YqeSqaSXKGyGGMtyAdTfMNBwu9963pKrwzxlR0mubWsJhLsrRVmplZlCFcfAPTWS1X-2028S-LjieDxDaIiAjYX8IFE81Vi-FL5DusE4W8m23Xxk8LoBnmw4ECUd33oiKKzEq4uSIUY~P~2qCUgB1EyfGkgd8VI7vGFRb-Yn8UsiDzjDwxxU69sv9dsLYBCoQ5ivhDCHrsL7m7V7wRxdBfZ3UiKKfuEo9Dnu4VLrWRyHGbqmz1nrDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      itemName: "Beardo Origin Perfume For men, 100 ml",
      quantity: 1,
      originalPrice: "$399.00",
      discountPrice: 299.0,
    },
    {
      id: 3,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/19f3/9ce4/c9215105fa28e84de6a3487854cd5863?Expires=1701043200&Signature=WEWs35BUDhMCgmyfNW64lKXZeAa6LiwdbvHzis3adjk8qcAsxWrptync2zgWlBdjY0k3TXZ9c~DhWbau8yhn6LS2QefJl1UctLNAwiE950uk1k-b9EQ8ClN3RKkX7~MGXLbol28byl0e4HsHus3egfusdXeeqdv3lfK8W8hr~aTY6AI5uDRefGxtIO8ssfPxnGGxDYjbuc-nKQuyatd74wdYwJWG23Mo2lnBwMdcQQ-HDvCeqsSGJIeWJaLixsyIcBdink6XB4JIHCc74E4UNmbxPZZnSMgg0yOinP9c3WziLnQRNQM1oNp2wJNGAaodbtF9Z89y~9irySGFBR5ceg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      itemName: "Michael Kors Mercer Pebbled Leather Cross",
      quantity: 1,
      originalPrice: "$399.00",
      discountPrice: 299.0,
    },
    // {
    //   id: 4,
    //   imageUrl:
    //     "https://s3-alpha-sig.figma.com/img/19f3/9ce4/c9215105fa28e84de6a3487854cd5863?Expires=1701043200&Signature=WEWs35BUDhMCgmyfNW64lKXZeAa6LiwdbvHzis3adjk8qcAsxWrptync2zgWlBdjY0k3TXZ9c~DhWbau8yhn6LS2QefJl1UctLNAwiE950uk1k-b9EQ8ClN3RKkX7~MGXLbol28byl0e4HsHus3egfusdXeeqdv3lfK8W8hr~aTY6AI5uDRefGxtIO8ssfPxnGGxDYjbuc-nKQuyatd74wdYwJWG23Mo2lnBwMdcQQ-HDvCeqsSGJIeWJaLixsyIcBdink6XB4JIHCc74E4UNmbxPZZnSMgg0yOinP9c3WziLnQRNQM1oNp2wJNGAaodbtF9Z89y~9irySGFBR5ceg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //   itemName: "Michael Kors Mercer Pebbled Leather Cross",
    //   quantity: 1,
    //   originalPrice: "$399.00",
    //   discountPrice: 299.0,
    // },

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
      <Heading dataIndex={2} />
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
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
        ListFooterComponent={
          <>
            <TouchableOpacity>
              <Text style={styles.address}>Continue to Adderess</Text>
            </TouchableOpacity>
            <View style={styles.shippingDetail}>
              <Text style={styles.cartTotal}>Cart Total</Text>
              <View style={styles.subTotalView}>
                <Text style={styles.subtotalTxt}>Sub total:</Text>
                <Text style={styles.subtotalTxt}>${calculateTotalprice()}</Text>
              </View>
              <Text style={styles.shippingTxt}>Shipping</Text>
              <EllipseCheckbox />
              <Text style={styles.addAddress}>Add address</Text>

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
              <TouchableOpacity style={styles.checkoutbtn}>
                <Text style={styles.checkoutTxt}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shippingDetail: {
    backgroundColor: "rgb(234, 234, 234)",
    marginBottom: 85,
  },
  address: {
    textAlign: "center",
    borderWidth: 1,
    paddingHorizontal: 45,
    paddingVertical: 16,
    marginHorizontal: 67,
    marginTop: 51,
    marginBottom: 49,
  },

  cartTotal: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 24,
    marginLeft: 16,
    marginTop: 31,
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
  shippingTxt: {
    fontSize: 16,
    color: "rgb(136, 133, 133)",
    marginLeft: 16,
    marginBottom: 22,
  },
  addAddress: {
    fontSize: 16,
    marginBottom: 59,
    marginLeft: 16,
    textDecorationLine: "underline",
    marginTop: 10,
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
    marginBottom: 18,
  },
});
