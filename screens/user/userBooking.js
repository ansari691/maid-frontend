import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { CustomImage, Time, Date, ServiceText } from "../../components";

export default class UserBooking extends Component {
  render() {
    const dateDATA = [
      {
        id: "1",
        day: "Tuesday",
        title: "02-JAN",
      },
      {
        id: "2",
        day: "Wednesday",
        title: "03-JAN",
      },
      {
        id: "3",
        day: "Thursday",
        title: "04-JAN",
      },
      {
        id: "4",
        day: "Friday",
        title: "05-JAN",
      },
    ];

    const timeDATA = [
      {
        id: "1",
        title: "8:00 AM",
      },
      {
        id: "2",
        title: "9:00 AM",
      },
      {
        id: "3",
        title: "10:00 AM",
      },
      {
        id: "4",
        title: "11:00 AM",
      },
    ];

    const serviceDATA = [
        {
          id: "1",
          title: "Home Cleaning",
        },
        {
          id: "2",
          title: "Laundry",
        },
        {
          id: "3",
          title: "Gardening",
        },
      ];

    const TimeItem = ({ title }) => <Time timeContent={title} />;
    const DateItem = ({title, day}) => <Date date={title} day={day} />
    const ServiceItem = ({ title }) => <ServiceText title={title} type="big" style={Styles.service} />;


    return (
      <SafeAreaView>
        <View>
          {/**Header */}
          <View style={Styles.header}>
            <CustomImage type="big" />
            <View style={Styles.description}>
              <Text style={Styles.name}>Sherline Armie</Text>
              <Text style={Styles.light}>example@email.com</Text>
              <Text numberOfLines={1} style={Styles.light}>
                Larlin Village, Brgy. Sampaloc, Apalit Pampanga
              </Text>
              <TouchableOpacity
                style={Styles.edit}
                onPress={() => navigate("updateprofile")}
              >
                <Ionicons name="ios-open-outline" size={20} color="black" />
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/** Available Day */}
          <View style={Styles.contentContainer}>
            <Text style={Styles.textTitle}>Available Day</Text>
            <FlatList
            style={Styles.flatlist}
            data={dateDATA}
            renderItem={({ item }) => <DateItem title={item.title} day={item.day}/>}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          </View>
          {/**Available Time */}
          <View style={Styles.contentContainer}>
            <Text style={Styles.textTitle}>Available Time</Text>
            <FlatList
            style={Styles.flatlist}
            data={timeDATA}
            renderItem={({ item }) => <TimeItem title={item.title}/>}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          </View>
          {/**Service */}
               {/**Services */}
        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>Services</Text>
          </View>
          <FlatList
            style={Styles.flatlist}
            data={serviceDATA}
            renderItem={({ item }) => <ServiceItem title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  //header Styles
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  description: {
    alignSelf: "center",
    width: 200,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    color: "blue",
  },
  name: {
    fontWeight: "600",
    fontSize: 15,
  },
  light: {
    color: "#686060",
    fontSize: 13,
    marginTop: 1,
  },
  //Day & Time & Service
  contentContainer: {
    margin: 10,
    justifyContent: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "F86A40",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1F1F29",
  },
  flatlist:{
    marginVertical: 10,
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  service:{
    marginHorizontal:5
  }
});
