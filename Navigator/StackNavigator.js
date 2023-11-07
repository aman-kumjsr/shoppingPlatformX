import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingStart from "../Screens/ShoppingStart";
import ShopComp from "../Screens/ShopComp";
import FootHome from "../Screens/FootHome";
import Productinfo from "../Screens/Productinfo";
import Submit from "../app/Submit";

export default function StackNavigator() {
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
        <Stack.Screen name="Shopping" component={FootHome} />
        <Stack.Screen name="Productinfo" component={Productinfo} />
        <Stack.Screen
          name="Submit"
          component={Submit}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={ShoppingStart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
