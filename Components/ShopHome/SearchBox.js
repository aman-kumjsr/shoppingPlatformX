import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
export default function SearchBox() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Image
          source={require("../../icons/Search.jpg")}
          style={styles.searchLogo}
        />

        <TextInput style={styles.searchInput} placeholder="Search" />
        <Image
          source={require("../../icons/Configure.jpg")}
          style={styles.ConfigureLogo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    margin: 15,
  },

  searchBox: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingLeft: 16,
  },
  searchLogo: {
    width: 20,
    height: 20,
  },
  ConfigureLogo: {
    width: 20,
    height: 20,
    marginLeft: "auto",
  },
});
