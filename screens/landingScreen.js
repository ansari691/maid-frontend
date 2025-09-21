import React from "react";
import { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default class LandingScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.landingContainer}>
        <ImageBackground
          source={require("../assets/landingPattern.png")}
          resizeMode="cover"
          style={styles.bgImage}
        >
          <Image
            style={styles.image}
            source={require("../assets/landingimg.png")}
          />
          <View style={styles.info}>
            <Text style={styles.h1}>MaidMatch</Text>
            <Text>
              Your Trusted Source
              {"\n"}
              for Finding the
              {"\n"}
              Perfect Housekeeper
            </Text>
          </View>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Register")}
            underlayColor='#fff'>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },

  image: {
    marginTop: 70,
    alignSelf: "center",
  },
  info: {
    margin: 20,
  },

  h1: {
    fontSize: 40,
    fontWeight: "700",
  },
  button: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "#292727",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
  },
});
