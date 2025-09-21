import React, {Component} from "react";
import { Image, View, StyleSheet } from "react-native";

export default class CustomImage extends React.Component {
    render (){

        const selectedStyle = this.props.type === 'big' ? Styles.big : this.props.type === 'medium' ?  Styles.medium : this.props.type === 'small' ?  Styles.small :  this.props.type === 'smaller' ? Styles.smaller : Styles.smallest;


        return (
            <View style={this.props.style}>
                <Image
                    source={require('../assets/profilepic.png')}
                    style={selectedStyle}
                />
            </View>
        )
    }
}
 

const Styles= StyleSheet.create({
    small: {
        height: 90,
        width: 90,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
      },

      smaller: {
        height: 60,
        width: 60,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
      },

      smallest: {
        height: 45,
        width: 45,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
      },
      medium:{
        height: 75,
        width: 75,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
    },
    big:{
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        margin: 10,
    }
})

