import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import { CustomButtons } from "../components";

import { Feather, Ionicons } from "@expo/vector-icons";

export default class UserVerifyScreen extends Component {
  state = {
    otpDigits: ["", "", "", "", ""],
    timer: null,
    timerDuration: 30, // Timer duration in seconds
    isResendDisabled: false, // Track if the Resend button should be disabled
    otpExpiration: null,
  };

  otpInputRefs = this.state.otpDigits.map(() => React.createRef());

  handleOtpInputChange = (index, value) => {
    const newOtpDigits = [...this.state.otpDigits];
    newOtpDigits[index] = value;

    if (index < newOtpDigits.length - 1 && value !== "") {
      this.otpInputRefs[index + 1].current.focus();
    }

    this.setState({ otpDigits: newOtpDigits });
  };

  startTimer = () => {
    const timer = setInterval(() => {
      const { timerDuration } = this.state;
      if (timerDuration > 30) {
        this.setState({ timerDuration: timerDuration - 1 });
      } else {
        // Clear the timer and disable the Resend button
        this.clearTimer();
        this.setState({ isResendDisabled: true });

        // Enable the Resend button after 1 minute (60 seconds)
        setTimeout(() => {
          this.setState({ isResendDisabled: false });
        }, 60000);
      }
    }, 1000);

    this.setState({ timer });
  };

  clearTimer = () => {
    // Clear the timer and reset the duration
    clearInterval(this.state.timer);
    this.setState({ timer: null, timerDuration: 30 });
  };

  render() {
    const { timerDuration, isResendDisabled } = this.state;
    const { navigation } = this.props;

    handleVerifyOTP = () => {
      const enteredOTP = this.state.otpDigits.join("");

      const correctOTP = "";
      if (enteredOTP === correctOTP) {
        Alert.alert("OTP Verified", "You are successfully logged in!");
        this.clearTimer();

        navigation.navigate("HkTab");
      } else {
        Alert.alert("Invalid OTP", "Please enter the correct OTP.");
      }
    };

    return (
      <SafeAreaView>
        {/* Tab Header */}
        <View style={Styles.Tabheader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={Styles.arrow}
          >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <View style={Styles.TabTxtContainer}>
            <Text style={Styles.TabTxt}>Verification</Text>
          </View>
        </View>

        {/* OTP text */}
        <View style={Styles.txtContainer}>
          <Text style={Styles.h1Txt}>OTP Verification</Text>
          <Text style={Styles.pTxt}>
            Enter the code that we sent {"\n"} {"  "} to
            <Text style={Styles.etxt}> email@example.com</Text>
          </Text>
        </View>

        {/* OTP Boxes */}
        <View style={Styles.boxContainer}>
          {this.state.otpDigits.map((digit, index) => (
            <TextInput
              key={index}
              style={Styles.box}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(text) => this.handleOtpInputChange(index, text)}
              ref={this.otpInputRefs[index]}
            />
          ))}
        </View>

        {/* Buttons */}

        <View style={Styles.resendContainer}>
          <Text>Didn't receive OTP?</Text>
          <TouchableOpacity
            onPress={this.handleResendOTP}
            disabled={isResendDisabled || timerDuration > 30}
          >
            <Text style={Styles.resendTxt}>RESEND</Text>
          </TouchableOpacity>
        </View>

        <CustomButtons
          type="primary"
          title="Submit"
          textColor="white"
          size="small"
          onPress={() => navigation.navigate("UserTab")}
        />
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  //Tabheader
  Tabheader: {
    flexDirection: "row",
    paddingHorizontal: 10,
    padding: 5,
    marginBottom: 50,
  },
  arrow: {
    alignSelf: "flex-start",
  },
  TabTxtContainer: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  TabTxt: {
    marginEnd: 59,
    fontWeight: "600",
    fontSize: 16,
  },

  //OTP text
  txtContainer: {
    alignItems: "center",
    gap: 10,
  },
  h1Txt: {
    fontWeight: "700",
    fontSize: 18,
    letterSpacing: 1,
  },
  pTxt: {
    color: "#686060",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  etxt: {
    color: "#F86A40",
  },

  //Boxes
  boxContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },

  box: {
    flexDirection: "row",
    height: 40,
    width: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 5,
    textAlign: "center",
  },

  //Buttons
  resendContainer: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
    marginBottom: 50,
  },
  resendTxt: {
    color: "#F86A40",
    fontWeight: "600",
  },
});
