import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { Text, Card, Title, Surface, Paragraph, TextInput, DataTable, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
import { Col, Row, Grid } from 'react-native-easy-grid';


const PermissionDoctor = () => {

  const navigation = useNavigation();
  const [elements, setElements] = React.useState([]);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [])



  React.useEffect(() => { getElements(); }, [search])

  function getElements() {
    var elementsArr = [
      { key: 1, name: 'file1', patient: { name: 'abc' } },
      { key: 2, name: 'file2', patient: { name: 'def' } },
      { key: 3, name: 'file3', patient: { name: 'ghi' } },
      { key: 4, name: 'file4', patient: { name: 'jkl' } },
      { key: 5, name: 'file5', patient: { name: 'mno' } },
      { key: 6, name: 'file6', patient: { name: 'abc' } },
      { key: 7, name: 'file7', patient: { name: 'def' } },
      { key: 8, name: 'file8', patient: { name: 'ghi' } },
      { key: 9, name: 'file9', patient: { name: 'jkl' } },
      { key: 10, name: 'file10', patient: { name: 'mno' } },

    ]
    var newArr = []

    for (var i = 0; i < elementsArr.length; i++) {
      if (search === '') {
        newArr.push(elementsArr[i]);
      }
      else if (elementsArr[i]?.name.toLowerCase().includes(search.toLowerCase())) {
        newArr.push(elementsArr[i]);
      }
      else if (elementsArr[i]?.patient.name.toLowerCase().includes(search.toLowerCase())) {
        newArr.push(elementsArr[i]);

      }
    }

    setElements(newArr);



  }

  const changed = (text) => {
    setSearch(text);
    console.log(text);

  }


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/appBack.jpg')}
        resizeMode="cover"
        style={{ height: '100%' }}>
        <ScrollView
          style={{ marginTop: 10 }}>

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
              marginHorizontal: 10,
              marginTop: 30
            }}>

            <Col>
              <Row style={styles.bordered2}>
                <Text style={{ fontWeight: 'bold' }}>
                  File
                </Text>
              </Row>
              
              {
                elements.map(element => (
                  <Row style={styles.bordered1} key={element.name}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'whitesmoke',
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 30,
                        width: '90%'
                      }}
                      mode="contained" >
                      <Text
                        style={{ padding: 10 }}>
                        {element.name}
                      </Text>
                    </TouchableOpacity>
                  </Row>



                )
                )}
            </Col>

            <Col>
              <Row
                style={styles.bordered2}>
                <Text
                  style={{ fontWeight: 'bold' }}>
                  Patient
                </Text>
              </Row>
              {
                elements.map(element => (

                  <Row
                    style={styles.bordered1}
                    key={element.name}>
                    <Text>{element.patient.name}</Text>
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
  bordered2: {
    borderColor: 'lightgray',
    minHeight: 60,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',

    alignItems: 'center'

  }


});

export default PermissionDoctor;
