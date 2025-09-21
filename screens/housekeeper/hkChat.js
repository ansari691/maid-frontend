import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import { CustomImage } from "../../components";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class HkChat extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          {/* Touchable Chats */}
          <TouchableOpacity 
          style={Styles.chatContainer}
          onPress={() => navigation.navigate('HKChatArea')}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.chatContainer}>
            {/* Image Container */}
            <View>
              <CustomImage type="smaller" />
            </View>
            {/* Name & Time Container */}
            <View style={Styles.contentContainer}>
              <View style={Styles.nameContainer}>
                <Text style={Styles.name}>Sherline Armie</Text>
                <Text>11:00 AM</Text>
              </View>
              <Text>latest message ..</Text>
            </View>
          </TouchableOpacity>
          
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const Styles = StyleSheet.create({
  //chat
  chatContainer: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 10,
    alignSelf: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#E8E9EB",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },

  contentContainer: {
    padding: 10,
    margin: 10,
    width: "70%",
    gap: 10,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
  },
});
