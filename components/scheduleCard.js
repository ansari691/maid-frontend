import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default class ScheduleCard extends Component {
  render() {
    return (
      <View style={this.props.style}>
      <TouchableOpacity style={Styles.container} onPress={this.props.onPress}>

          <View style={Styles.headerContainer}>
            {/**Image */}
            <Image
              source={require("./../assets/profilepic.png")}
              style={Styles.image}
            />
            {/** Name,Icon & Service */}
            <View style={Styles.header}>
              <View style={Styles.textContainer}>
                <Text style={Styles.text}>Sherline Armie</Text>
                <Ionicons name="chatbubble-outline" size={24} color="#F8F5F2" />
              </View>
              <View style={Styles.service}>
                <View>
                  <Text style={Styles.small}>Home Cleaning</Text>
                </View>
              </View>
            </View>
          </View>
          {/**Date & Time */}
          <View style={Styles.timeContainer}>
            <Feather name="calendar" size={18} color="#F8F5F2" />
            <Text style={Styles.text}>October 17, 2023</Text>
            <MaterialCommunityIcons
              name="clock-time-two-outline"
              size={20}
              color="#F8F5F2"
            />
            <Text style={Styles.text}>10:00 AM</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#F86A40",
  },
  headerContainer: {
    flexDirection: "row",
    gap: 10,
  },
  header: {
    gap: 5,
    alignContent: "center",
    padding: 5,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    alignSelf: "center",
    margin: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 250,
  },
  timeContainer: {
    backgroundColor: "#EC663F",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
    alignSelf: "center",
    width: 300,
  },
  service: {
    alignSelf: "flex-start",
  },
  text: {
    color: "#F8F5F2",
  },
  small: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#F8F5F2",
    alignSelf: "center",
    paddingHorizontal: 3,
    fontSize: 12,
    // fontFamily: 'San Francisco',
    fontWeight: "500",
    color: "#F8F5F2",
  },
});
