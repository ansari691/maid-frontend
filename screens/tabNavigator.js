import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";

import { HkDashboard, BookingsScreen, HkChat, Profile } from "./housekeeper";
import { UserDashboard, UserChat, UserServices, UserProfile} from "./user";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

class HkTabNavigator extends Component {
  getTabBarIcon(route, focused) {
    let iconName;

    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Bookings") {
      iconName = "bookmark";
    } else if (route.name === "Chats") {
      iconName = "chatbox";
    } else if (route.name === "Profile") {
      iconName = "person";
    }

    return (
      <Ionicons
        name={iconName}
        size={focused ? 30 : 24}
        color={focused ? "#F86A40" : "gray"}
      />
    );
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            color: "#3B4B21",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HkDashboard}
          options={({ route }) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false,
          })}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={({ route }) => ({
            tabBarLabel: "Bookings",
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false,
          })}
        />

        <Tab.Screen
          name="Chats"
          component={HkChat}
          options={({ route }) => ({
            tabBarLabel: "Chats",
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false,
          })}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarLabel: "Profile",
            tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
            headerShown: false,
          })}
        />
      </Tab.Navigator>
    );
  }
}

class UserTabNavigator extends Component {
  getTabBarIcon(route, focused) {
    let iconName;
    
    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Services") {
      iconName = "bookmark";
    } else if (route.name === "Chats") {
      iconName = "chatbox";
    } else if (route.name === "Profile") {
      iconName = "person";
    }


    return (
      <Ionicons
        name={iconName}
        size={focused ? 30 : 24}
        color={focused ? "#F86A40" : "gray"}
      />
    );
  }

  render() {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          color: "#3B4B21",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={UserDashboard}
        options={({ route }) => ({
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Services"
        component={UserServices}
        options={({ route }) => ({
          tabBarLabel: "Services",
          tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Chats"
        component={UserChat}
        options={({ route }) => ({
          tabBarLabel: "Chats",
          tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => this.getTabBarIcon(route, focused),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
    )
  }
}

export { HkTabNavigator, UserTabNavigator };
