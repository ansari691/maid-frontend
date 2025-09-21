import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Date extends Component {
  render() {
    return (
      <View style={Styles.date}>
        <Text style={Styles.dayText}>{this.props.day}</Text>
        <Text style={Styles.dateText}>{this.props.date}</Text>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  date: {
    width:100,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    backgroundColor: "#F86A40",
    justifyContent:"center",
    alignItems:"center"
  },
  dateText: {
    fontWeight: "700",
    color: "white",
  },
  dayText:{
    color:"white"
  }
});
