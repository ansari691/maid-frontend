import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from "react-native";

import { CustomImage } from "../../components";

import { Ionicons } from "@expo/vector-icons";

export default class HkChatArea extends Component {
  render() {

    const { navigation } = this.props;

    return (
      <SafeAreaView style={Styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          {/* header */}
          <View style={Styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("HKTab")}>
              
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <View style={Styles.NameContainer}>
              <CustomImage type="Smallest" />
              <Text style={Styles.Name}>Sherline Armie</Text>
            </View>
          </View>
          {/* Messages Area */}
          <ScrollView></ScrollView>
          {/* input field */}
          <View style={Styles.InputContainer}>
            <TextInput style={Styles.InputArea} placeholder="Aa" />
            <TouchableOpacity>
              <Ionicons name="send-outline" size={30} color="#F86A40" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //header
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E9EB",
  },
  NameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  Name: {
    fontSize: 16,
    fontWeight: "600",
  },
  //Text Input
  InputContainer: {
    flexDirection: "row",
    padding: 10,
    gap: 5,
  },
  InputArea: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#E8E9EB",
    width: "90%",
  },
});
