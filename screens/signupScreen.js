import React, { useState } from "react";
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
  ActivityIndicator,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomButtons, CustomInputs } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../contexts/AuthContext";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    value: null,
    isFocus: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    address: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const data = [
    { id: 1, label: "Housekeeper" },
    { id: 2, label: "Client" },
  ];

  const handlePress = (item) => {
    setFormData(prev => ({ ...prev, value: item.label, isFocus: false }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const { value, firstName, lastName, email, phoneNumber, password, address } = formData;

    if (!value) {
      Alert.alert("Error", "Please select a user type before registering.");
      return;
    }

    if (!firstName || !lastName || !email || !phoneNumber || !password || !address) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long");
      return;
    }

    // Basic phone number validation
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert("Error", "Please enter a valid phone number (10-14 digits)");
      return;
    }

    try {
      setLoading(true);
      
      const userData = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        address,
        userType: value
      };

      const result = await register(userData);
      
      if (result && result.token) {
        setShowVerificationModal(true);
        setTimeout(() => {
          setShowVerificationModal(false);
          // Navigate based on the userType from the server response
          const userType = result.user?.userType || value;
          if (userType === "Housekeeper") {
            navigation.navigate("HKTab");
          } else if (userType === "Client") {
            navigation.navigate("UserTab");
          }
        }, 2000);
      }
    } catch (error) {
      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10}}>
      <View>
        <View style={Styles.Tabheader}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={[Styles.h1, { marginBottom: 20 }]}>Create Account</Text>

        <View style={Styles.inputsContainer}>
          <CustomInputs 
            title="First Name" 
            placeholder="John" 
            value={formData.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          <CustomInputs 
            title="Last Name" 
            placeholder="Doe" 
            value={formData.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
          <CustomInputs 
            title="Email" 
            placeholder="example@email.com"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <CustomInputs 
            title="Phone Number"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChangeText={(text) => handleInputChange('phoneNumber', text)}
          />
          <CustomInputs 
            title="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry={true}
          />
          <CustomInputs 
            title="Address" 
            value={formData.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
        </View>
        
        <TouchableOpacity
          style={Styles.dropdownButton}
          onPress={() => setFormData(prev => ({ ...prev, isFocus: !prev.isFocus }))}
        >
          <Text>{formData.value || "Select an option"}</Text>
        </TouchableOpacity>
        {formData.isFocus && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={Styles.option}
                onPress={() => handlePress(item)}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        <View style={{ marginTop: 20 }}>
          <CustomButtons
            type="primary"
            size="small"
            title={loading ? "Registering..." : "Register"}
            textColor="white"
            onPress={handleSubmit}
            disabled={loading}
          />
        </View>

        {loading && (
          <ActivityIndicator 
            style={Styles.loader} 
            size="large" 
            color="#000" 
          />
        )}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showVerificationModal}
          onRequestClose={() => setShowVerificationModal(false)}
        >
          <View style={Styles.modalContainer}>
            <View style={Styles.modalContent}>
              <Text>Email Verification</Text>
              <Text>A code has been sent to your email.</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  Tabheader: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  loader: {
    marginTop: 10,
  },
  h1: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
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

export default SignupScreen;