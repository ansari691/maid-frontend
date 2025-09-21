import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

import CustomImage from "./customImage";
import ServiceText from "./serviceText";

import { Ionicons } from "@expo/vector-icons";

export default class UserBookingCard extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={Styles.outer}>
          <View style={Styles.container}>
            <CustomImage type="medium" />
            {/* Text Container */}
            <View style={Styles.contentLeft}>
              <View style={Styles.line}>
                <Ionicons name="person-outline" size={18} color="black" />
                <Text style={Styles.text}>Apple Pie</Text>
              </View>
              <View style={Styles.line}>
                <Ionicons name="location-outline" size={18} color="black" />
                <Text>Larlin Philippines</Text>
              </View>
              <ServiceText
                title="Home Cleaning"
                type="small"
                style={Styles.service}
              />

              {/* Reviews Container */}
              <View style={Styles.ratings}>
                <View style={Styles.starsContainer}>
                  <Text>5.0</Text>
                  <View style={Styles.stars}>
                    <Ionicons name="ios-star-outline" size={18} color="black" />
                    <Ionicons name="ios-star-outline" size={18} color="black" />
                    <Ionicons name="ios-star-outline" size={18} color="black" />
                    <Ionicons name="ios-star-outline" size={18} color="black" />
                    <Ionicons name="ios-star-outline" size={18} color="black" />
                  </View>
                </View>
                <Text>10 Reviews</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={Styles.btn} onPress={this.props.onPress}>
            <Text style={Styles.btnTxt}>Create Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  outer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#9C9898",
    borderRadius: 15,
    backgroundColor:"white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
  },
  container: {
    flexDirection: "row",
    padding: 10,
    gap: 15,
  },
  contentLeft: {
    gap: 4,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  stars: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  service: {
    paddingLeft: 23,
    alignSelf: "flex-start",
  },
  btn: {
    backgroundColor: "#FEE1D9",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    marginHorizontal: 18,
    marginBottom: 5,
    borderRadius: 15,
  },
  btnTxt: {
    color: "#F86A40",
    fontWeight: "600",
    letterSpacing: 2,
  },
});
