import React from "react";
import { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { BookingTabNavigator } from "./bookingNavigator";

export default class BookingsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={Styles.container}>
      <StatusBar  barStyle="default" translucent={true} />

        <View style={Styles.tabBar}>
        <BookingTabNavigator/>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({

  container:{
    flex:1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight - 10 : 10,
  },
  tabBar: {
    width: "100%",
    height: "100%",
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: "white",
  },
});
