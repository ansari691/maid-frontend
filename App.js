import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoadingScreen from './screens/LoadingScreen';

const Stack = createStackNavigator();

import LandingScreen from "./screens/landingScreen";
import {SigninScreen} from "./screens/signinScreen";
import SignupScreen from "./screens/signupScreen";
import VerifyScreen from "./screens/verifyScreen";
import UserVerifyScreen from "./screens/userVerifyScreen";

import { HkTabNavigator, UserTabNavigator } from "./screens/tabNavigator";
import {
  CheckBooking,
  UpdateProfile,
  HkChat,
  HkChatArea,
  UserUpdateProfile,
  UserChatArea,
  UserServices,
  CreateBooking,
  UserDashboard,
  UserCheckBooking,
  CheckAcceptedBooking
} from "./screens";

const Navigation = () => {
  const { isLoading, userToken, userType } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={userToken ? (userType === "Housekeeper" ? "HKTab" : "UserTab") : "LandingScreen"}>
        {userToken == null ? (
          // Auth screens
          <>
            <Stack.Screen
              name="LandingScreen"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={SigninScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HkVerify"
              component={VerifyScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserVerify"
              component={UserVerifyScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          // App screens based on user type
          <>
            {userType === "Housekeeper" ? (
              <>
                <Stack.Screen
                  name="HKTab"
                  component={HkTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HKChatArea"
                  component={HkChatArea}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UpdateProfile"
                  component={UpdateProfile}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CheckBooking"
                  component={CheckBooking}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CheckAcceptedBooking"
                  component={CheckAcceptedBooking}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="UserTab"
                  component={UserTabNavigator}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="CreateBooking"
                  component={CreateBooking}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UserChatArea"
                  component={UserChatArea}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UserCheckBooking"
                  component={UserCheckBooking}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UserUpdateProfile"
                  component={UserUpdateProfile}
                  options={{ headerShown: false }}
                />
              </>
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <StatusBar style="auto" />
    </AuthProvider>
  );
};

export default App;