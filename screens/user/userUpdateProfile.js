import React, { Component } from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";

import { CustomImage, CustomInputs, CustomButtons } from "../../components";

import { Ionicons } from '@expo/vector-icons';

export default class UserUpdateProfile extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={Styles.mainContainer}>
            <StatusBar  barStyle="default" translucent={true} />

         <View style={Styles.Tabheader}>
            <TouchableOpacity onPress={() => navigation.navigate("UserTab")}>
              
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
        
          </View>
     
        <View style={Styles.header}>
          <CustomImage type="big" />
          <Text style={Styles.name}>Sherline Armie</Text>
          <Text style={Styles.light}>example@email.com</Text>
          <Text style={Styles.light}>
            Larlin Village, Brgy. Sampaloc, Apalit Pampanga
          </Text>
        </View>
        <View style={Styles.container}>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="First Name" 
            placeholder="Sherline"
            type="default" />
    
          </View>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="Last Name" 
            placeholder="Armie" />
          </View>
          <View style={Styles.inputs}>
            <CustomInputs 
            title="Email" 
            placeholder="example@email.com" />
          </View>
          <View style={Styles.inputs}>
            <CustomInputs
              title="Address"
              placeholder="Larlin Village, Brgy. Sampaloc, Apalit Pampanga"
            />
          </View>
        </View>
        <CustomButtons
            title="Update Profile"
            type="primary"
            textColor="white"
        />
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
mainContainer:{
    backgroundColor:"#F9F4F4"
},
  header: {
    alignItems: "center",
  },
  name: {
    fontWeight: "600",
  },
  light: {
    color: "#686060",
  },
  container: {
    flexDirection: "column",
    marginVertical:15,
  },
  inputs: {
    marginTop: 10,
  },
  Tabheader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E9EB",
  },
});
