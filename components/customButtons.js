import React from "react";
import { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Feather } from '@expo/vector-icons';

export default class CustomButtons extends React.Component {
  render() {
    const selectedType = this.props.type == 'primary' ? Styles.primary : Styles.secondary;
    const selectedSize = this.props.size == 'small' ? Styles.small : Styles.big;
    const selectedTextColor = this.props.textColor == 'white' ? Styles.white : Styles.black;
    const { navigation } = this.props;



    return (
      <View style={selectedSize}>
        <TouchableOpacity style={selectedType} 
        onPress={this.props.onPress}
        >
          <Text style={selectedTextColor}>{this.props.title}</Text>
          <View>
          {this.props.icon}
          </View> 
        </TouchableOpacity>
      </View>
    );
  }
}


const Styles = StyleSheet.create({
 primary:{
    backgroundColor: "#1F1F29",
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    flexDirection:"row",
    gap:10,
    color: "white",

 },

 white :{
  color: "white",
  fontSize: 15,
  fontWeight: "600",
 },
 black :{
  color: "#1F1F29",
  fontSize: 15,
  fontWeight: "600",
 },


 secondary:{
  borderWidth: 2,
  borderColor: "#1F1F29",
  height:"100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  flexDirection:"row",
  gap:10

},
small :{
  height:40,
  width:250,
  justifyContent:"center",
  alignSelf:"center",
},
big :{
  height:50,
  width:300,
  justifyContent:"center",
  alignSelf:"center",
}
 
})
