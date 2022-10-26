import React from 'react';
import { ScrollView, View, StyleSheet, Image, BackHandler, ImageBackground } from 'react-native';
import { Text, Portal, TextInput, Provider, Modal, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';

// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DocumentPicker from 'react-native-document-picker';
import '../../file';
import {HTTP_CLIENT_URL} from '../../url';
// import {create, CID, IPFSHTTPClient} from 'ipfs-http-client';

// import * as IPFS from 'ipfs-mini';
import { create } from 'ipfs-http-client';


// // connect to the default API address http://localhost:5001




const AddMedications = () => {

  const navigation = useNavigation();

  const [medicine, setMedicine] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);

  const [patient, setPatient] = React.useState("");
  const [days, setDays] = React.useState();

  const [diagnosis, setDiagnosis] = React.useState("");
  const [dosage, setDosage] = React.useState("");

  const [date, setDate] = React.useState('');
  const [dateInput, setDateInput] = React.useState('');

  const [fileResponse, setFileResponse] = React.useState([]);

  // let ipfss=[];


 
  async function add(){

    // const client = await create()

    // const IPFS = require('ipfs-mini');

    // try {
    //   ipfss = create({
    //     host: "10.0.2.2",
    //           port: 5001,
    //           protocol: "http"
  
    //   });
    // } catch (error) {
    //   console.error("IPFS error ", error);
    //   ipfss = [];
    // }

    
// console.log(ipfs);

    // console.log(JSON.stringify({ patient, medicine, dosage, days, diagnosis, date, file: 'medication.json' }))
    const response = fetch(`${HTTP_CLIENT_URL}/uploadFile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ patient, medicine, dosage, days, diagnosis, date, file: 'medication.json' }),
    }).then(async res => {

      const d = await res.json();

      h=d.hashValue;
    
      
    if(d.status=="ok"){
      console.log(d);
      newFile={hash: d.hashValue, obj: d.result}
      global.file.push(newFile);
      console.log(global.file)

      setModalVisible(true);
    }
    else{
      console.log(d)
    }


    });

  }



  const ok = () => {
    setModalVisible(false);
    navigation.navigate('MainDoctor');
  }

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate('');
    hideDatePicker();
    console.log(date);

    if (date !== "") {
      console.log(date);
      let newDate = new Date(date).toString();
      setDate(newDate);
      console.log(newDate);
      setDateInput(newDate);
    }
    else {
      setDateInput('');
    }
  };


  React.useEffect(() => {



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
        <Modal visible={modalVisible} onDismiss={ok} contentContainerStyle={styles.modalAge}>
          <View>

            <Text style={{ margin: 10, textAlign: 'center' }}>Medication added successfully!</Text>


            <Button mode='contained' buttonColor='#00ced1' style={styles.okbutton} onPress={ok}>Ok</Button>
          </View>


        </Modal>
      </Portal>

      <View style={styles.container}>
        <BackAppBar message={"Add Medications"} />
        <ImageBackground source={require('../../images/appBack.jpg')} resizeMode="cover" style={{ height: '100%' }}>
          <ScrollView style={{ marginTop: 60 }}>

            <Image
              source={require('../../images/medication.jpg')}
              style={styles.image}
            />
            <TextInput
              label="Patient"
              value={patient}
              onChangeText={text => setPatient(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Medicine Name"
              value={medicine}
              onChangeText={text => setMedicine(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Dosage"
              value={dosage}
              onChangeText={text => setDosage(text)}
              style={styles.textfield}
            />

            <TextInput
              label="Days"
              value={days}
              keyboardType='numeric'
              onChangeText={text => setDays(text)}
              style={styles.textfield}
            />


            <TextInput
              label="Diagnosis"
              value={diagnosis}
              onChangeText={text => setDiagnosis(text)}
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
    // backgroundColor: '#b0e0e6',
    height: '100%'
  },
  rows: {
    marginTop: 80
  },
  uri: {
    marginTop: 20
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
    width: '50%',
    alignSelf: 'flex-start',
    marginStart: 20,
    marginTop: 10


  },

});

export default AddMedications;
