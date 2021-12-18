import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import KhoridarHome from "../screen/KhoridarHome";
import ListItemDetails from "../screen/ListItemDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={KhoridarHome} />
    <Stack.Screen name="ListingDetails" component={ListItemDetails} />
  </Stack.Navigator>
);

export default FeedNavigator;
