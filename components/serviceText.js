import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";


export default class ServiceText extends Component{
    render(){
        const selectedStyle = this.props.type === 'big' ? Styles.big : Styles.small;

        return(
            
            <View style={this.props.style}>
                <Text style={selectedStyle}>
                {this.props.title}
                </Text>
            </View>
        )
    }
}




const Styles=StyleSheet.create({
    small: {
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: "#F86A40",
        alignSelf: "center",
        paddingHorizontal: 3,
        fontSize: 12,
        // fontFamily: 'San Francisco',
        fontWeight: "500",
        color: "#F86A40",
      },
      big: {
        borderWidth: 1.5,
        borderRadius: 5,
        borderColor: "#F86A40",
        alignSelf: "center",
        paddingHorizontal: 3,
        fontSize: 14,
        // fontFamily: 'San Francisco',
        fontWeight: "600",
        color: "#F86A40",
      },
})