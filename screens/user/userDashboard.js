import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";

import { ScheduleCard, ServiceText, UserBookingCard } from "../../components";

import { Ionicons } from "@expo/vector-icons";

export default class UserDashboard extends Component {
  render() {
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

    const ServiceItem = ({ title }) => (
      <ServiceText title={title} type="big" style={Styles.service} />
    );

    const { navigation } = this.props;

    const handleBtnCheckBooking = () => navigation.navigate("UserCheckBooking");
    const handleBtnCreateBooking = () => navigation.navigate("CreateBooking");


    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar barStyle="default" translucent={true} />

        <View>
          {/**Schedule Card */}
          <View style={Styles.schedContainer}>
            <View style={Styles.title}>
              <Text style={Styles.whiteText}>Bookings</Text>
              <TouchableOpacity style={Styles.addButton}>
                <Text style={Styles.whiteButton}>See All</Text>
                <Ionicons name="ios-open-outline" size={20} color="white" />
              </TouchableOpacity>
            </View>
            <ScheduleCard 
              onPress={handleBtnCheckBooking}
            />
          </View>

          {/** Services */}
          <View View style={Styles.bgwhite}>
            <View style={Styles.contentContainer}>
              <View style={Styles.title}>
                <Text style={Styles.textTitle}>Services</Text>
                <TouchableOpacity style={Styles.addButton}>
                  <Text>See All</Text>
                  <Ionicons name="ios-open-outline" size={20} color="black" />
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

            {/* Top Houskeeper */}
            <View style={Styles.titleContainer}>
              <Text style={Styles.textTitle}>Top Housekeepers</Text>
            </View>
            <ScrollView style={Styles.scroll}>
              <UserBookingCard style={Styles.bookingCard} 
                onPress={handleBtnCreateBooking}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  schedContainer: {
    margin: 10,
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#1D272F",
    shadowColor: "F86A40",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
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
    alignItems: "baseline",
    gap: 10,
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1F1F29",
  },
  whiteText: {
    fontWeight: "700",
    fontSize: 16,
    color: "white",
  },
  whiteButton: {
    color: "white",
  },
  flatlist: {
    marginVertical: 10,
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  bgwhite: {
    backgroundColor: "white",
    marginTop: 15,
    height: "100%",
    marginHorizontal: 10,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  container: {
    backgroundColor: "#1D272F",
    height: "100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },

  service: {
    marginHorizontal: 5,
  },

  //scroll
  titleContainer:{
    margin:13
  },
  bookingCard: {
    marginHorizontal: 10,
  },
});
