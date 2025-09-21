import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";

import { UserBookingCard, ServiceText } from "../../components";

export default class UserServices extends Component {
  render() {
    const DATA = [
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

    const Item = ({ title }) => (
      <ServiceText title={title} style={Styles.service} />
    );

    return (
      <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,}}>
        <TextInput placeholder="Search" style={Styles.search} />

          <FlatList
            style={Styles.flatlist}
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
            horizontal
          />

        <ScrollView style={Styles.scroll}>
          <UserBookingCard style={Styles.bkngCard} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  scroll: {
    height: "100%",
  },
  bkngCard: {
    margin: 10,
  },
  search: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 15,
    borderColor:"#E8E9EB"
  },
  flatlist:{
    marginHorizontal:15,
    marginVertical:5,
  },
  service:{
    marginHorizontal:3,
  }
});
