import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  
} from "react-native";

import { BookingCard, ServiceText, ScheduleCard } from "../../components";

import { Ionicons } from "@expo/vector-icons";

export default class HkDashboard extends Component {
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
    const ServiceItem = ({ title }) => <ServiceText title={title} type="big" style={Styles.service}/>;

    const {navigation} = this.props;
    const handleCheckBookingBtn = () => navigation.navigate("CheckAcceptedBooking");

    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar  barStyle="light-content" translucent={true} />

        <ScheduleCard
          style={Styles.schedCard}
          onPress={handleCheckBookingBtn}
        />

        {/* Available Time */}
        <View style={Styles.bgwhite}>

        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>Available Time</Text>
            <TouchableOpacity style={Styles.addButton}>
              <Text>Add Time</Text>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            style={Styles.flatlist}
            data={timeDATA}
            renderItem={({ item }) => <TimeItem title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/**Services */}
        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>Services</Text>
            <TouchableOpacity style={Styles.addButton}>
              <Text>Add Service</Text>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
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
        {/**Jobs Status Done, Accepted, Pending */}
        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>My Jobs</Text>
          </View>
          <View style={Styles.jobsContainer}>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Accepted</Text>
            </View>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Pending</Text>
            </View>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Done</Text>
            </View>
          </View>
        </View>
        </View>
      </SafeAreaView>
    );
  }
}

class Time extends Component {
  render() {
    return (
      <View style={Styles.time}>
        <Text style={Styles.timeText}>{this.props.timeContent}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.curentHeight : 0,
    backgroundColor: "blue",
  },
  container:{
    backgroundColor:"#1D272F",
    height:"100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
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
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flatlist: {
    marginVertical: 10,
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
  },
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
  jobs: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: 100,
    height: 70,
    alignItems: "center",
    borderRadius: 15,
  },
  number: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1F1F29",
  },
  jobsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bgwhite:{
    backgroundColor:"white",
    marginTop:15,
    height:"100%",
    marginHorizontal:10,
    borderTopRightRadius:25,
    borderTopLeftRadius:25
  },
  schedCard:{
    marginHorizontal:10
  },
  service:{
    marginHorizontal:5
  }
});
