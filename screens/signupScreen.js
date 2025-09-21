import React from "react";
import { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert,
  Modal,
} from "react-native";

import { CustomButtons, CustomInputs } from "../components";
import { Ionicons } from "@expo/vector-icons";

export default class SignupScreen extends Component {
  /** User Type Client & Houskeeper */

  state = {
    value: null,
    isFocus: false,
  };

  data = [
    { id: 1, label: "Housekeeper" },
    { id: 2, label: "Client" },
  ];

  handlePress = (item) => {
    this.setState({ value: item.label, isFocus: false });
  };

  showVerificationModal = () => {
    this.setState({ showVerificationModal: true });
  };

  hideVerificationModal = () => {
    this.setState({ showVerificationModal: false });
  };

  render() {
    const { value, isFocus } = this.state;

    const { navigation } = this.props;

  

    HandleBtnPress = () => {
      const { value } = this.state;

      if (!value) {
        Alert.alert("Please select a user type before registering.");
        return;
      }

      this.showVerificationModal();

      
      setTimeout(() => {
        this.hideVerificationModal();
        if (value === "Housekeeper") {
          this.props.navigation.navigate("HKTab");
        } else if (value === "Client") {
          this.props.navigation.navigate("UserTab");
        }
      },); 
    };

    return (
      <SafeAreaView>
        <View>
        <View style={Styles.Tabheader}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </TouchableOpacity>
        
          </View>
          <Text style={Styles.h1}>Create Account</Text>

          <Image
            source={require("../assets/createaccount-icon.png")}
            style={Styles.image}
          />

          <View style={Styles.inputsContainer}>
            <CustomInputs title="First Name" placeholder="John" />
            <CustomInputs title="Last Name" placeholder="Doe" />
            <CustomInputs title="Email" placeholder="example@email.com" />
            <CustomInputs title="Address" />
          </View>
          <TouchableOpacity
            style={Styles.dropdownButton}
            onPress={() => this.setState({ isFocus: !isFocus })}
          >
            <Text>{value || "Select an option"}</Text>
          </TouchableOpacity>
          {isFocus && (
            <FlatList
              data={this.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={Styles.option}
                  onPress={() => this.handlePress(item)}
                >
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          <Text style={Styles.bottomText}>
            I Agree to MaidMatch Terms and Conditions
          </Text>

          <View>
            <CustomButtons
              type="primary"
              size="small"
              title="Register"
              textColor="white"
              onPress={HandleBtnPress}
            />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.showVerificationModal}
            onRequestClose={this.hideVerificationModal}
          >
            <View style={Styles.modalContainer}>
              <View style={Styles.modalContent}>
                <Text>Email Verification</Text>
                <Text>A code has been sent to your email.</Text>
                {/* You may include a text input for entering the verification code */}
                {/* Add any additional UI or components as needed */}
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  h1: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 40,
  },
  image: {
    alignSelf: "center",
    marginVertical: 15,
  },
  inputsContainer: {
    rowGap: 5,
  },
  dropdownButton: {
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    marginHorizontal: 20,
  },
  bottomText: {
    alignSelf: "center",
    marginTop: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});
