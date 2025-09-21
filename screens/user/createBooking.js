import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";

import { CustomImage, Time, Date } from "../../components";

import { Feather, Ionicons } from "@expo/vector-icons";

export default class CreateBooking extends Component {
  render() {
    const timeDATA = [
      {
        id: "1",
        title: "8:00AM",
      },
      {
        id: "2",
        title: "9:00AM",
      },
      {
        id: "3",
        title: "10:00AM",
      },
      {
        id: "4",
        title: "11:00AM",
      },
      {
        id: "5",
        title: "12:00PM",
      },
    ];

    const dateDATA = [
      {
        id: "1",
        day: "Monday",
        date: "January 1",
      },
      {
        id: "2",
        day: "Tuesday",
        date: "January 1",
      },
      {
        id: "3",
        day: "Friday",
        date: "January 1",
      },
      {
        id: "4",
        day: "Sunday",
        date: "January 1",
      },
    ];

    const TimeItem = ({ title }) => <Time timeContent={title} />;
    const DateItem = ({ day, date }) => <Date day={day} date={date} />;

    const { navigation } = this.props;

    return (
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10}}>
        <View style={Styles.Tabheader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserTab")}
            style={Styles.arrow}
          >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <View style={Styles.TabTxtContainer}>
            <Text style={Styles.TabTxt}>Create Booking</Text>
          </View>
        </View>
        {/* Header */}
        <View style={Styles.header}>
          <CustomImage type="big" />
          <View style={Styles.description}>
            <Text style={Styles.name}>Sherline Armie</Text>
            <Text style={Styles.light}>example@email.com</Text>
            <Text numberOfLines={1} style={Styles.light}>
              Larlin Village, Brgy. Sampaloc, Apalit Pampanga
            </Text>
            <View style={Styles.btnProfile}>
              <TouchableOpacity
                style={Styles.edit}
                onPress={() => navigation.navigate("UpdateProfile")}
              >
                <Ionicons name="open-outline" size={18} color="black" />
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Available Day */}
        <View style={Styles.flatlistContainer}>
          <Text style={Styles.title}>Available Day</Text>
          <FlatList
            style={Styles.flatlist}
            data={dateDATA}
            renderItem={({ item }) => <Date day={item.day} date={item.date} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Available Time */}
        <View style={Styles.flatlistContainer}>
          <Text style={Styles.title}>Available Time</Text>
          <FlatList
            style={Styles.flatlist}
            data={timeDATA}
            renderItem={({ item }) => <TimeItem title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnTxt}>Create Booking</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  Tabheader: {
    flexDirection: "row",
    paddingHorizontal:10,
    padding:5,
    marginBottom:10
  
  },
  arrow:{
    alignSelf:"flex-start",
  },
  TabTxtContainer:{
    width: "100%",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  TabTxt: {
    marginEnd:59,
    fontWeight:"600",
    fontSize:16
  },
  header: {
    alignItems: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#9C9898",
    marginBottom:30
  },
  description: {
    alignSelf: "center",
    width: 200,
  },
  btnProfile: {
    flexDirection: "row",
    gap: 25,
  },
  light: {
    color: "#686060",
    fontSize: 13,
    marginTop: 1,
  },
  edit: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 15,
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
  flatlistContainer: {
    margin: 10,
    padding: 5,
  },
  title: {
    fontWeight: "600",
    fontSize: 15,
    letterSpacing: 0.8,
  },
});
