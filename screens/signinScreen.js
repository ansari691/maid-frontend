import { Component } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { CustomButtons, CustomInputs } from "../components";

export default class SigninScreen extends Component {
  render() {
    const { navigation } = this.props;

    const handleBtnPress = () => navigation.navigate("Register");

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Text style={Styles.h1}>Welcome Back !</Text>
          <Image
            style={Styles.image}
            source={require("../assets/signupIlustration.png")}
          />
          <CustomInputs title="Email" />
          <View style={Styles.btn}>
            <CustomButtons
              type="primary"
              textColor="white"
              title="Sign In"
            />
          </View>
          <View>
            <CustomButtons title="Sign Up" onPress={handleBtnPress} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  h1: {
    marginTop: 70,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
  },

  image: {
    marginTop: 70,
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    marginTop: 10,
    alignSelf: "center",
  },
  btn: {
    marginVertical: 10,
  },
});
