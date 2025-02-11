import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/(tabs)/TabNavigator"; // Ensure correct import path
import {Text} from 'react-native';
import { View } from "react-native";

export default function App() {
  return (
  <View><Text>Expense Tracker</Text><NavigationContainer>
      <TabNavigator />
    </NavigationContainer></View>
  );
}
