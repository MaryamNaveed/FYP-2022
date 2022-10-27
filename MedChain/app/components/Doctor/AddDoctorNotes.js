import React from 'react';
import { ScrollView, View, StyleSheet, Image, BackHandler, ImageBackground } from 'react-native';
import { Text, Portal, TextInput, Provider, Modal, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import '../../file';
import { HTTP_CLIENT_URL } from '../../url';


const AddDoctorNotes = () => {

  // declaring variables
  const navigation = useNavigation();
  const [patient, setPatient] = React.useState('');
  const [doctorNote, setDoctorNote] = React.useState('');
  const [visitReason, setVisitReason] = React.useState('');
  const [date, setDate] = React.useState('');
  const [dateInput, setDateInput] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  //function to be called on pressing add button
  const add = () => {
    //calling API for uploading File and passing details to be added to file in body
    const response = fetch(`${HTTP_CLIENT_URL}/uploadFile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ patient, doctorNote, visitReason, date, file: 'doctorNote.json' }),
    }).then(async res => {

      //On Sucessufully returning from API collect response
      const d = await res.json();
      h = d.hashValue;

      //checking if the response has status ok  
      if (d.status == "ok") {
        console.log(d);
        //if response is ok then create an object of the hash value of file returned
        newFile = { hash: d.hashValue, obj: d.result }
        // add the object to file array
        global.file.push(newFile);
        console.log(global.file)
        //making ModalVisible true to display the modal that doctor note is added
        setModalVisible(true);
      }
      else {
        console.log(d)
      }


    });

  }

  //function to be called on closing modal displaying doctor note is added
  const ok = () => {
    //making ModalVisible false to hide the modal that doctor note is added
    setModalVisible(false);
    //navigates to doctor home page
    navigation.navigate('MainDoctor');
  }


  //function to be called on pressing in the date text field
  const showDatePicker = () => {
    //making DatePickerVisibility true to display the modal for selecting date and time
    setDatePickerVisibility(true);
  };

  //function to be called on cancelling the date modal
  const hideDatePicker = () => {
    //making DatePickerVisibility false to hide the modal for selecting date and time
    setDatePickerVisibility(false);
  };

  //function to be called after selecting the date
  const handleConfirm = (date) => {
    setDate('');
    hideDatePicker();
    console.log(date);

    //check if the date is selected or not
    if (date !== "") {
      console.log(date);
      //if date is selected convert date to string
      let newDate = new Date(date).toString();
      setDate(newDate);
      console.log(newDate);
      //set the string date in text field
      setDateInput(newDate);
    }
    else {
      // if date is not selected then set string '' in date text field
      setDateInput('');
    }
  };


  React.useEffect(() => {
    //handle back button pressed
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [])

  return (
    <Provider>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={ok}
          contentContainerStyle={styles.modalAge}>
          <View>

            <Text
              style={{ margin: 10, textAlign: 'center' }}>
              Doctor Note added successfully!
            </Text>

            <Button
              mode='contained'
              buttonColor='#00ced1'
              style={styles.okbutton}
              onPress={ok}>
              Ok
            </Button>

          </View>
   
        </Modal>
      </Portal>

      <View style={styles.container}>
        <BackAppBar message={"Add Doctor Notes"} />
        <ImageBackground source={require('../../images/appBack.jpg')} resizeMode="cover" style={{ height: '100%' }}>
          <ScrollView style={{ marginTop: 60 }}>

            <Image
              source={require('../../images/doctorNote.jpg')}
              style={styles.image}
            />

            <TextInput
              label="Patient"
              value={patient}
              onChangeText={text => setPatient(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Doctor Note"
              multiline
              numberOfLines={4}
              value={doctorNote}
              onChangeText={text => setDoctorNote(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Visit Reason"
              multiline
              numberOfLines={4}
              value={visitReason}
              onChangeText={text => setVisitReason(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Date"
              style={styles.textfield}
              value={dateInput}
              onPressIn={showDatePicker}

            />

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='datetime'
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />

            <Button buttonColor='royalblue' style={styles.button} mode="contained" onPress={add}>
              <Text style={{ color: 'white' }}>Add</Text>
            </Button>

          </ScrollView>
        </ImageBackground>

      </View>

    </Provider>
  );

};

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  rows: {
    marginTop: 80
  },
  card: {
    width: '90%',
    height: 90,
    margin: '5%',
    borderRadius: 20,
    textAlign: 'center'

  },
  maincard: {
    borderRadius: 20,
    height: 90,
    backgroundColor: 'whitesmoke',

  },
  uri: {
    marginTop: 20
  },
  okbutton: {
    margin: 10,

  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 20,
    width: 180,
    height: 180
  },
  linktext: {
    color: '#8964cf',
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 'auto',


  },
  modalAge: {
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20,
    borderRadius: 10

  },
  textfield: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    margin: 20
  },

  alignRight: {
    width: '35%',
    alignSelf: 'flex-end',
    marginHorizontal: 5,
    marginTop: 10
  },
  alignLeft: {
    width: '60%',
    alignSelf: 'flex-start',
    marginStart: 20,
    marginTop: 10


  },

});

export default AddDoctorNotes;
