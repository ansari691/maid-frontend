import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';

import AcceptedScreen from "./acceptedScreen";
import PendingScreen from "./pendingScreen";
import CheckBooking from "./checkBooking";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

class BookingTabNavigator extends Component {
  render() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accepted') {
              iconName = focused
                ? 'checkmark-circle-outline'
                : 'checkmark-circle-outline';
            } else if (route.name === 'Pending') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })} >
          <Tab.Screen name="Accepted" component={AcceptedScreen} />
          <Tab.Screen name="Pending" component={PendingScreen} />
        </Tab.Navigator>
    );
  }
}

class BookingStackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Test"
          component={CheckBooking}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}

export { BookingTabNavigator, BookingStackNavigator  };
