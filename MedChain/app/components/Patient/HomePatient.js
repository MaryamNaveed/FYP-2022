import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Text, Card, Title, Surface } from 'react-native-paper';
import AppBar from '../AppBar';
import { useNavigation } from '@react-navigation/native';



const HomePatient = () => {

  const navigation = useNavigation();
  const [elements, setElements] = React.useState([]);

  React.useEffect(() => { getElements(); }, [])

  function getElements() {
    var elementsArr = [
      { key: 1, name: 'Medications', uri: require('../../images/medication.jpg'), click: 'MedicationsPatient' },
      { key: 2, name: 'Doctor Notes', uri: require('../../images/doctorNote.jpg'), click: 'DoctorNotesPatient' },
      { key: 3, name: 'Lab Results', uri: require('../../images/labResult.jpg'), click: 'LabResultsPatient' },
      { key: 4, name: 'Vital Signs', uri: require('../../images/vital.jpg'), click: 'Vitals' },
      { key: 5, name: 'Exercise', uri: require('../../images/running.jpg'), click: 'Exercise' }
    ]
    setElements(elementsArr);
  }

  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('../../images/appBack.jpg')}
        resizeMode="cover"
        style={{ height: '100%' }}>
        <ScrollView>

          <Text
            style={{
              marginTop: 20,
              marginStart: 30,
              color: 'white'
            }}
            variant="headlineMedium">
            Hi Patient!
          </Text>
          <View style={styles.rows}>
            {
              elements.map(element => (
                <Surface
                  key={element.key}
                  style={styles.card}
                  elevation={5} >

                  <Card
                    style={styles.maincard}
                    onPress={() => navigation.navigate(element.click)}>

                    <Card.Cover
                      style={{
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        height: 100
                      }}
                      resizeMode="contain"
                      source={element.uri} />

                    <Card.Content
                      style={{
                        height: 60,
                        justifyContent: 'center'
                      }} >

                      <Title
                        style={{
                          color: 'white',
                          alignSelf: 'center'
                        }}>
                        {element.name}
                      </Title>

                    </Card.Content>
                  </Card>
                </Surface>

              ))
            }

          </View>
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
  rows: {

    margin: 10,
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  card: {
    height: 160,
    width: 165,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 30,
    textAlign: 'center'

  },
  maincard: {
    borderRadius: 30,
    backgroundColor: 'cornflowerblue'

  },


});

export default HomePatient;
