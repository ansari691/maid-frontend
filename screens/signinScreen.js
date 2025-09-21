import React, { useState } from "react";
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
  Alert,
  ActivityIndicator,
} from "react-native";

import { CustomButtons, CustomInputs } from "../components";
import authService from "../services/authService";
import { useAuth } from '../contexts/AuthContext';

export const SigninScreen = ({ navigation }) => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      const result = await authService.login(email, password);
      
      if (result.token && result.user) {
        await signIn(result.token, result.user);
      } else {
        Alert.alert('Error', 'Invalid response from server');
      }
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Text style={Styles.h1}>Quick Clean</Text>
        <Text style={{ textAlign: 'center'}}>Online Maid Service</Text>
        <Image
          style={Styles.image}
          source={require("../assets/signupIlustration.png")}
        />
        <CustomInputs 
          title="Email" 
          placeholder="example@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <CustomInputs 
          title="Password" 
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={Styles.btn}>
          <CustomButtons
            type="primary"
            textColor="white"
            title={loading ? "Signing In..." : "Sign In"}
            onPress={handleSignIn}
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
        
        <View>
          <CustomButtons 
            title="Sign Up" 
            onPress={() => navigation.navigate("Register")} 
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  loader: {
    marginVertical: 10,
  },
  h1: {
    marginTop: 30,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "500",
  },

  image: {
    marginTop: 30,
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
