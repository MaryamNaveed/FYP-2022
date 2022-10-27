import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, BackHandler, TouchableOpacity } from 'react-native';
import { Text, Card, Title, Surface, Paragraph, TextInput, DataTable, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
// import { Grid, Row, Col } from 'react-native-paper-grid';
import { Col, Row, Grid } from 'react-native-easy-grid';


const AddPermissionsPatient = () => {

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
      { key: 1, name: 'file1' },
      { key: 2, name: 'file2' },
      { key: 3, name: 'file3' },
      { key: 4, name: 'file4' },
      { key: 5, name: 'file5' },
      { key: 6, name: 'file6' },
      { key: 7, name: 'file7' },
      { key: 8, name: 'file8' },
      { key: 9, name: 'file9' },
      { key: 10, name: 'file10' },
      { key: 11, name: 'file11' },
      { key: 12, name: 'file12' },
      { key: 13, name: 'file13' },
      { key: 14, name: 'file14' },
      { key: 15, name: 'file15' }


    ]
    var newArr = []

    for (var i = 0; i < elementsArr.length; i++) {
      if (search === '') {
        newArr.push(elementsArr[i]);
      }
      else if (elementsArr[i]?.name.toLowerCase().includes(search.toLowerCase())) {
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
              marginTop: 30,
              marginHorizontal: 10
            }}>

            <Col>

              <Row
                style={styles.bordered2}>
                <Text style={{ fontWeight: 'bold' }}>
                  File
                </Text>
              </Row>

              {
                elements.map(element => (

                  <Row
                    style={styles.bordered1}
                    key={element.name}>
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
                      mode="contained">
                      <Text style={{ padding: 10 }}>
                        {element.name}
                      </Text>
                    </TouchableOpacity>
                  </Row>

                )
                )}
            </Col>

            <Col>
              <Row style={styles.bordered2}><Text style={{ fontWeight: 'bold' }}>Access</Text></Row>
              {
                elements.map(element => (
                  <Row
                    style={styles.bordered1}
                    key={element.name}>

                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: 30,
                        width: '90%'
                      }}
                      mode="contained"
                      onPress={() => navigation.navigate('GrantPermissionPatient', { paramKey: element })}>

                      <Text
                        style={{
                          color: 'blue',
                          padding: 10
                        }}>
                        Grant Access
                      </Text>
                      
                    </TouchableOpacity>
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

export default AddPermissionsPatient;
