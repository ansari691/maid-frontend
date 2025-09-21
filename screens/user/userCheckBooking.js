import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { CustomImage, ServiceText, CustomButtons } from "../../components";

import { Ionicons, Feather } from "@expo/vector-icons";

import { SafeAreaProvider } from "react-native-safe-area-context";

export default class UserCheckBooking extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <View style={Styles.Tabheader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserTab")}
            style={Styles.arrow}
          >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <View style={Styles.TabTxtContainer}>
            <Text style={Styles.TabTxt}>My Booking</Text>
          </View>
        </View>
        {/* header */}
        <View>
          <CustomImage type="medium" />
          <View style={Styles.buttonContainer}>
            <TouchableOpacity
              style={Styles.edit}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicons name="ios-open-outline" size={18} color="black" />
              <Text>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Styles.edit}
              onPress={() => navigation.navigate("updateprofile")}
            >
              <Ionicons name="heart-outline" size={18} color="black" />
              <Text>Rate Housekeeper</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Content */}
        <View style={Styles.contentContainer}>
          {/* Customer Name */}
          <View style={Styles.subContainer}>
            <Text style={Styles.h1}>Housekeeper Name</Text>
            <View style={Styles.title}>
              <Ionicons name="person-outline" size={18} color="black" />
              <Text>John Doe</Text>
            </View>
          </View>
          {/* Address */}
          <View style={Styles.subContainer}>
            <Text style={Styles.h1}>Address</Text>
            <View style={Styles.title}>
              <Ionicons name="location-outline" size={18} color="black" />
              <Text numberOfLines={1}>
                Larlin Village, Brgy. Sampaloc, Apalit Pampanga
              </Text>
            </View>
          </View>
          {/* Service type */}
          <View style={Styles.subContainer}>
            <Text style={Styles.h1}>Service</Text>
            <View style={Styles.title}>
              <Ionicons name="bookmark-outline" size={18} color="black" />
              <ServiceText title="Home Cleaning" type="small" />
            </View>
          </View>
          {/* Date */}
          <View style={Styles.subContainer}>
            <Text style={Styles.h1}>Date</Text>
            <View style={Styles.title}>
              <Feather name="calendar" size={18} color="black" />
              <Text>October 17, 2023</Text>
            </View>
          </View>
          {/* Time */}
          <View style={Styles.subContainer}>
            <Text style={Styles.h1}>Time</Text>
            <View style={Styles.title}>
              <Feather name="clock" size={18} color="black" />
              <Text>10:00 AM</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={Styles.acceptDeclineContainer}>
          <CustomButtons
            type="primary"
            size="small"
            title="Mark as Done"
            textColor="white"
            icon={<Feather name="check-circle" size={18} color="white" />}
          />
          <CustomButtons
            type="secondary"
            size="small"
            title="Go to Chat"
            icon={
              <Ionicons name="chatbubble-outline" size={18} color="#1F1F29" />
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  Tabheader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    padding: 5,
    marginBottom: 10,
  },
  arrow: {
    alignSelf: "flex-start",
  },
  TabTxtContainer: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  TabTxt: {
    marginEnd: 59,
    fontWeight: "600",
    fontSize: 16,
  },
  edit: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    color: "blue",
    gap: 3,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#F86A40",
    backgroundColor: "white",
    shadowColor: "#F86A40",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
  },
  subContainer: {
    marginVertical: 5,
    gap: 5,
    paddingEnd: 10,
  },
  h1: {
    fontWeight: "500",
  },
  acceptDeclineContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
  },
});
