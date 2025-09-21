import React from "react";
import { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class FeedbackCard extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.HeadingContainer}>
          <Image
            source={this.props.image}
            style={Styles.image}
          />
          <View>
            <Text>{this.props.name}</Text>
            <View style={Styles.serviceContainer}>
              <Text style={Styles.service}>{this.props.service}</Text>

              <View style={Styles.rating}>
                <Text>5.0</Text>
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
                <Ionicons name="ios-star-outline" size={18} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text>
          {this.props.comment}
          </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 10,
    marginVertical:5,
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
  HeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignSelf: "center",
    margin: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    // backgroundColor: "green",
  },

  service: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#F86A40",
    alignSelf: "center",
    paddingHorizontal: 3,
    fontSize: 12,
    fontWeight: "500",
    color: "#F86A40",
  },
  serviceContainer: {
    flexDirection: "row",
  },
});
