import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { BookingCard } from "../../components";

export default class PendingScreen extends Component {
  render() {
    const { navigation } = this.props;

    const handleBtnPress = () => navigation.navigate("CheckBooking");
    return (
      <ScrollView style={Styles.container}>
        <BookingCard
          name="Sherline Armie"
          address="Larlin Village, Brgy. Sampaloc, Apalit Pampanga"
          service="Home Cleaning"
          date="October 1 2023"
          time="10:00 AM"
          onPress={handleBtnPress}
        />
      </ScrollView>
    );
  }
}

const Styles=StyleSheet.create({
    container:{
        marginTop:10
    }
})

