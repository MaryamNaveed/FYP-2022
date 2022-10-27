import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, BackHandler, Image } from 'react-native';
import { Text, Card, Title, Surface, Paragraph, TextInput, DataTable, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';
import { useNavigation } from '@react-navigation/native';
import { Grid, Row, Col } from 'react-native-paper-grid';
import '../../file';
import { HTTP_CLIENT_URL } from '../../url';


const LabResultsInfo = ({ route }) => {


  const [element, setElement] = React.useState();
  const [elementt, setElementt] = React.useState("{}");

  const navigation = useNavigation();

  React.useEffect(() => {
    fetch(`${HTTP_CLIENT_URL}/getFile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ h: route.params.paramKey }),
    }).then(async res => {
      const d1 = await res.json();

      if (d1.status == "ok") {
        console.log("D: ", d1.data);
        const newElement = d1.data;
        setElementt(newElement);

      }
    });

  }, [route]);

  React.useEffect(() => {
    setElement(JSON.parse(elementt));
  }, [elementt])


  React.useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    return () => backHandler.remove();
  }, [])


  console.log("Element: ", element)

  return (
    <View style={styles.container}>
      <BackAppBar message={"Lab Result Details"} />
      <ImageBackground
        source={require('../../images/appBack.jpg')}
        resizeMode="cover"
        style={{ height: '100%' }}>
        <ScrollView style={{ marginTop: 70 }}>
          <View
            style={{ marginLeft: 20, marginRight: 20 }}>

            <Image
              source={require('../../images/labResult.jpg')}
              style={styles.image}
              resizeMode='contain'
            />

            <Grid style={{ borderRadius: 20 }}>

              <Row style={styles.bordercolum}>
                <Col>
                  <Text style={{ fontWeight: 'bold' }}>
                    Name:
                  </Text>
                </Col>
                <Col>
                  <Text>
                    {element?.testName}
                  </Text>
                </Col>
              </Row>

              <Row style={styles.bordercolum}>
                <Col>
                <Text style={{ fontWeight: 'bold' }}>
                  Result:
                  </Text>
                  </Col>
                <Col>
                <Text>
                  {element?.result}
                  </Text>
                </Col>
              </Row>

              <Row style={styles.bordercolum}>
                <Col>
                <Text style={{ fontWeight: 'bold' }}>
                  Remark:
                  </Text>
                  </Col>
                <Col>
                <Text>
                  {element?.remark}
                  </Text>
                </Col>
              </Row>

              <Row style={styles.bordercolum}>
                <Col>
                  <Text style={{ fontWeight: 'bold' }}>
                    Date of Test:
                  </Text>
                </Col>
                <Col>
                  <Text>
                    {element?.date}
                  </Text>
                </Col>
              </Row>

            </Grid>
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
  texfield: {
    width: 220,
    marginEnd: 10,

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
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    width: 180,
    height: 180
  },
  bordercolum: {
    borderColor: 'black',
    minHeight: 70,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
  },
  borderRight: {
    borderRightColor: 'black',
    minHeight: 70,
    borderRightWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  borderLeft: {
    borderLeftColor: 'black',
    minHeight: 70,
    borderLeftWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',

  }


});

export default LabResultsInfo;
