import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Alert,
  Modal,
  TextInput,
  ActivityIndicator
} from "react-native";

import { BookingCard, ServiceText, ScheduleCard } from "../../components";

import { Ionicons } from "@expo/vector-icons";

import housekeeperService from '../../services/housekeeperService';

export default class HkDashboard extends Component {
  parseTimeRange = (timeRange) => {
    // Expected format: "8AM - 12PM"
    const [start, end] = timeRange.split('-').map(t => t.trim());
    if (!start || !end) return null;

    const parseTime = (time) => {
      const isPM = time.toLowerCase().includes('pm');
      let hour = parseInt(time.replace(/[^0-9]/g, ''));
      if (isPM && hour !== 12) hour += 12;
      if (!isPM && hour === 12) hour = 0;
      return hour;
    };

    const startHour = parseTime(start);
    const endHour = parseTime(end);
    
    if (isNaN(startHour) || isNaN(endHour)) return null;

    const timeSlots = [];
    for (let hour = startHour; hour <= endHour; hour++) {
      let displayHour = hour % 12 || 12;
      const period = hour >= 12 ? 'PM' : 'AM';
      timeSlots.push(`${displayHour}${period}`);
    }
    
    return timeSlots;
  };

  state = {
    timeSlots: [],
    services: [],
    loading: false,
    showTimePickerModal: false,
    showServiceModal: false,
      newTimeSlot: '',
      selectedServices: [], // for multiple dropdown selection
    availableServices: [
      'House Cleaning',
      'Baby Sitting',
      'Cooking',
      'Gardening',
      'Laundry'
    ]
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({ loading: true });
      const [timeSlots, services] = await Promise.all([
        housekeeperService.getTimeSlots(),
        housekeeperService.getServices()
      ]);
      this.setState({
        timeSlots: timeSlots || [],
        services: services || []
      });
    } catch (error) {
      Alert.alert('Error loadData', error.message);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleAddTime = async () => {
    try {
      const timeSlots = this.parseTimeRange(this.state.newTimeSlot);

      // console.log(timeSlots);
      // return;
      
      if (!timeSlots || timeSlots.length === 0) {
        Alert.alert('Invalid Format', 'Please enter time range in format: 8AM - 12PM');
        return;
      }
      
      await housekeeperService.addTimeSlot(timeSlots);

      await this.loadData(); // Reload the data
      this.setState({ showTimePickerModal: false, newTimeSlot: '' });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  handleAddService = async () => {
    try {
      // Add all selected services
      await housekeeperService.addService(this.state.selectedServices);
      await this.loadData(); // Reload the data
      this.setState({ showServiceModal: false, selectedServices: [] });
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  render() {
    const handleCheckBookingBtn = () => this.props.navigation.navigate("CheckAcceptedBooking");
  const { timeSlots, services, loading, showTimePickerModal, showServiceModal, availableServices, selectedServices } = this.state;

    return (
      <SafeAreaView style={Styles.container}>
        <StatusBar  barStyle="light-content" translucent={true} />

        <ScheduleCard
          style={Styles.schedCard}
          onPress={handleCheckBookingBtn}
        />

        {/* Available Time */}
        <View style={Styles.bgwhite}>

        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>Available Time</Text>
            <TouchableOpacity 
              style={Styles.addButton}
              onPress={() => this.setState({ showTimePickerModal: true })}
            >
              <Text>Add Time</Text>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="small" color="#F86A40" />
          ) : (
            <FlatList
              style={Styles.flatlist}
              data={timeSlots}
              renderItem={({ item }) => <Time timeContent={item} />}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        {/**Services */}
        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>Services</Text>
            <TouchableOpacity 
              style={Styles.addButton}
              onPress={() => this.setState({ showServiceModal: true })}
            >
              <Text>Add Service</Text>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size="small" color="#F86A40" />
          ) : (
            <FlatList
              style={Styles.flatlist}
              data={services}
              renderItem={({ item }) => (
                <ServiceText title={item} type="big" style={Styles.service}/>
              )}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        {/**Jobs Status Done, Accepted, Pending */}
        <View style={Styles.contentContainer}>
          <View style={Styles.title}>
            <Text style={Styles.textTitle}>My Jobs</Text>
          </View>
          <View style={Styles.jobsContainer}>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Accepted</Text>
            </View>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Pending</Text>
            </View>
            <View style={Styles.jobs}>
              <Text style={Styles.number}>0</Text>
              <Text>Done</Text>
            </View>
          </View>
        </View>
        </View>

        {/* Time Picker Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showTimePickerModal}
          onRequestClose={() => this.setState({ showTimePickerModal: false })}
        >
          <View style={Styles.modalContainer}>
            <View style={Styles.modalContent}>
              <Text style={Styles.modalTitle}>Add Available Time</Text>
              <TextInput
                style={Styles.input}
                placeholder="Enter time range (e.g., 8AM - 12PM)"
                value={this.state.newTimeSlot}
                onChangeText={(text) => this.setState({ newTimeSlot: text })}
              />
              <View style={Styles.modalButtons}>
                <TouchableOpacity 
                  style={[Styles.modalButton, Styles.cancelButton]}
                  onPress={() => this.setState({ showTimePickerModal: false })}
                >
                  <Text style={Styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[Styles.modalButton, Styles.saveButton]}
                  onPress={this.handleAddTime}
                >
                  <Text style={Styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Service Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showServiceModal}
          onRequestClose={() => this.setState({ showServiceModal: false })}
        >
          <View style={Styles.modalContainer}>
            <View style={Styles.modalContent}>
              <Text style={Styles.modalTitle}>Add New Service</Text>
              {/* Multiple dropdown select for services */}
              <View style={{ width: '100%', marginBottom: 15 }}>
                {availableServices.map((service) => (
                  <TouchableOpacity
                    key={service}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                      padding: 10,
                      borderRadius: 8,
                      backgroundColor: selectedServices.includes(service) ? '#F86A40' : '#eee',
                    }}
                    onPress={() => {
                      if (selectedServices.includes(service)) {
                        this.setState({ selectedServices: selectedServices.filter(s => s !== service) });
                      } else {
                        this.setState({ selectedServices: [...selectedServices, service] });
                      }
                    }}
                  >
                    <Text style={{ color: selectedServices.includes(service) ? 'white' : '#333', fontWeight: '600', flex: 1 }}>{service}</Text>
                    {selectedServices.includes(service) && (
                      <Ionicons name="checkmark-circle" size={20} color="white" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <View style={Styles.modalButtons}>
                <TouchableOpacity 
                  style={[Styles.modalButton, Styles.cancelButton]}
                  onPress={() => this.setState({ showServiceModal: false, selectedServices: [] })}
                >
                  <Text style={Styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[Styles.modalButton, Styles.saveButton]}
                  onPress={this.handleAddService}
                  disabled={selectedServices.length === 0}
                >
                  <Text style={Styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

class Time extends Component {
  render() {
    return (
      <View style={Styles.time}>
        <Text style={Styles.timeText}>{this.props.timeContent}</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.curentHeight : 0,
    backgroundColor: "blue",
  },
  container:{
    backgroundColor:"#1D272F",
    height:"100%",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1F1F29",
  },
  contentContainer: {
    margin: 10,
    justifyContent: "center",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "F86A40",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    // Add elevation for Android
    elevation: 5,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  flatlist: {
    marginVertical: 10,
    alignContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  time: {
    borderRadius: 20,
    padding: 10,
    margin: 5,
    backgroundColor: "#F86A40",
  },
  timeText: {
    fontWeight: "700",
    color: "white",
  },
  jobs: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: 100,
    height: 70,
    alignItems: "center",
    borderRadius: 15,
  },
  number: {
    fontWeight: "600",
    fontSize: 30,
    color: "#1F1F29",
  },
  jobsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bgwhite:{
    backgroundColor:"white",
    marginTop:15,
    height:"100%",
    marginHorizontal:10,
    borderTopRightRadius:25,
    borderTopLeftRadius:25
  },
  schedCard:{
    marginHorizontal:10
  },
  service:{
    marginHorizontal:5
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    padding: 10,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#F86A40',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  }
});
