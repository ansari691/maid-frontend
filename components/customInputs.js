import React from "react";
import { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default class CustomInputs extends React.Component {
  render() {
    return (
      <View style={Styles.inputContainer}>
        <Text>{this.props.title}</Text>
        <TextInput
          style={Styles.textInput}
          placeholder={this.props.placeholder}
          keyboardType={this.props.type}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
  },

  textInput: {
    backgroundColor:"white",
    borderBottomWidth: 1,
    borderColor: "#747070",
    borderTopEndRadius: 10,
    borderTopLeftRadius:10,
    height: 40,
    padding: 10,
    marginTop: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
    
  },
});
