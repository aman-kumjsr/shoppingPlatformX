import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingStart from "./ShoppingStart";
import ShopComp from "./ShopComp";
export default function ShoppingHome() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ShoppingStart"
          component={ShoppingStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShopComp"
          component={ShopComp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
