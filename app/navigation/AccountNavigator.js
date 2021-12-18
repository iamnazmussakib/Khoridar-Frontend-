import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import KhoridarAccount from "../screen/KhoridarAccount";
import MessageScreen from "../screen/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account Info" component={KhoridarAccount} />
    <Stack.Screen name="Messages" component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
