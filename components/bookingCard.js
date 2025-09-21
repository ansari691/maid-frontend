import React, { cloneElement } from "react";
import { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default class BookingCard extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={Styles.cardContainer}
        onPress={this.props.onPress}>
          <View style={Styles.container}>
            <Image source={require("../assets/profilepic.png")} style={Styles.image} />

            {/* Content Container */}
            <View style={Styles.rightContainer}>
            
            {/* Name */}
              <View style={Styles.textContainer}>
                <Text>{this.props.name}</Text>
                <Ionicons
                  name={this.props.statusIcon}
                  size={24}
                  color="#F86A40"
                  style={Styles.cardIcon}
                />
              </View>
            
            {/* Address */}
              <View style={Styles.textContainer}>
                <Ionicons name="location-outline" size={20} color="black" />
                <Text style={Styles.address} numberOfLines={2}>
                  {this.props.address}
                </Text>
              </View>
            
            {/* Service */}
              <View style={Styles.serviceContainer}>
                <Text style={Styles.service}>{this.props.service}</Text>
              </View>

            {/* Date & Time */}
              <View style={Styles.timeContainer}>
                <Feather name="calendar" size={18} color="#2F2E41" />
                <Text style={Styles.text}>{this.props.date}</Text>
                <MaterialCommunityIcons
                  name="clock-time-two-outline"
                  size={20}
                  color="#2F2E41"
                />
                <Text style={Styles.text}>{this.props.time}</Text>
              </View>

            {/* Ratings */}
              <View style={Styles.ratings}>
                <Text>Ratings</Text>
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const Styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    height: 140,
    marginHorizontal: 10,
    padding: 5,
    borderWidth: 1,
    borderColor:"#9C9898",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
  },

  container: {
    flexDirection: "row",
    // backgroundColor: "gray",
    height: "100%",
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
    alignSelf: "center",
    margin: 10,
  },
  rightContainer: {
    rowGap: 2,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1,
    width: 215,
  },
  cardIcon: {
    position: "absolute",
    right: -20,
  },

  text: {
    fontSize: 12,
    // fontFamily: 'NotoSans',
    fontWeight: "400",
  },

  address: {
    width: 165,
    fontSize: 12,
    // fontFamily: 'NotoSans',
    fontWeight: "400",
  },
  timeContainer: {
    backgroundColor: "#FCC3B3",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  serviceContainer: {
    alignSelf: "flex-start",
  },
  service: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#F86A40",
    marginLeft: 24,
    alignSelf: "center",
    paddingHorizontal: 3,
    fontSize: 12,
    // fontFamily: 'San Francisco',
    fontWeight: "500",
    color: "#F86A40",
  },
  ratings: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    columnGap: 5,
  },
});
