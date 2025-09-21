import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";


export default class Time extends Component {
    render() {
      return (
        <View style={Styles.time}>
          <Text style={Styles.timeText}>{this.props.timeContent}</Text>
        </View>
      );
    }
  }

  const Styles=StyleSheet.create({
    time: {
        borderRadius: 20,
        padding: 10,
        margin: 5,
        backgroundColor: "#F86A40",
      },
      timeText: {
        fontWeight: "700",
        color: "white",
      },
  })