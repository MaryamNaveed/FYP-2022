import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { Text, Card, Title, Surface, Paragraph, TextInput, DataTable, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
// import { Grid, Row, Col } from 'react-native-paper-grid';
import { Col, Row, Grid } from 'react-native-easy-grid';
import '../../file';


const DoctorNotesPatient = () => {

  //declaring variables
  var counter = 0;
  const navigation = useNavigation();
  const [elements, setElements] = React.useState([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    counter = 0;
    //handle back button
    const backAction = () => {
      navigation.goBack();
      return true;


    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [])


  React.useEffect(() => {
    counter = 0;
     //if text in search field changes then again find the required files
    getElements();
  }, [search])

  //get files function
  function getElements() {
    var elementsArr = []

    //get all doctornotes files
    for (i = 0; i < global.file.length; i++) {
      if (elementsArr.includes(global.file[i])) {
        console.log('present')

      }
      else if (global.file[i].obj.path === 'doctorNote.json') {
        elementsArr.push(global.file[i])
      }

    }

    console.log(elementsArr)

    var newArr = []


     //get all files having hash that includes text present in search field
    for (var i = 0; i < elementsArr.length; i++) {
      console.log(newArr)
      if (newArr.includes(elementsArr[i].hash)) {

      }
      else if (search === '') {
        newArr.push(elementsArr[i].hash);
      }
      else if (elementsArr[i]?.hash.toLowerCase().includes(search.toLowerCase())) {
        newArr.push(elementsArr[i].hash);
      }

    }

    //set Elements equal to newArr
    setElements(newArr);
  }

  //function called when text of search field is changed
  const changed = (text) => {
    setSearch(text);
    console.log(text);

  }


  return (
    <View style={styles.container}>
      <BackAppBar message={"Doctor Notes"} />
      <ImageBackground source={require('../../images/appBack.jpg')} resizeMode="cover" style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: 70 }}>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>

            <TextInput
              style={styles.texfield}
              placeholder='Search...'
              mode='outlined'
              value={search}
              onChangeText={changed} />

          </View>

          <Grid
            style={{
              marginTop: 30,
              marginHorizontal: 10
            }}>

            <Col>
              {
                elements.map(element => (
                  <Row style={styles.bordered} key={element.toString()}>

                    <Col
                      style={{
                        backgroundColor: 'darkgray',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }} size={1}>

                      <Text
                        style={{
                          padding: 10,
                          fontSize: 18,
                          color: 'white'
                        }}>
                        {++counter}
                      </Text>

                    </Col>

                    <Col
                      style={{
                        height: '100%',
                        justifyContent: 'center'
                      }}
                      size={4}>

                      <TouchableOpacity
                        mode="contained"
                        onPress={() => navigation.navigate("DoctorNoteInfo", { paramKey: element })}>

                        <Text
                          style={{ padding: 10, fontSize: 16 }}>
                          {element}
                        </Text>
                        
                      </TouchableOpacity>

                    </Col>
                  </Row>

                )
                )}
            </Col>

          </Grid>

        </ScrollView>
      </ImageBackground>

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#b0e0e6',
    height: '100%'
  },
  texfield: {
    width: '90%'

  },
  rows: {
    marginTop: 20
  },
  card: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: 10,
    borderRadius: 20,
    textAlign: 'center',

  },
  maincard: {
    borderRadius: 20,
    backgroundColor: 'whitesmoke',

  },
  bordered1: {
    borderColor: 'lightgray',
    minHeight: 60,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    flex: 1

  },
  bordered: {
    minHeight: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',



  },
  bordered2: {
    borderColor: 'lightgray',
    minHeight: 60,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',

    alignItems: 'center'

  }


});
export default DoctorNotesPatient;
