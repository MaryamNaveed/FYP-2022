import * as React from 'react';
import { BackHandler, StyleSheet, TouchableOpacity, View, ScrollView, ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from 'react-native-paper';
import BackAppBar from '../BackAppBar';


const GrantPermissionPatient = ({ route }) => {
    const navigation = useNavigation();
    const [doctor, setDoctor] = React.useState();

    React.useEffect(() => {

        const backAction = () => {
            navigation.goBack();
            return true;
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove();
    }, [])


    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../images/appBack.jpg')}
                resizeMode="cover"
                style={{ height: '100%' }}>
                <ScrollView
                    style={{ marginTop: 20 }}>
                    <Image
                        source={require('../../images/access.jpg')}
                        style={styles.image}
                    />

                    <TouchableOpacity
                        style={{
                            margin: 20,
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
                        <Text style={{ padding: 10 }}>
                            {route.params.paramKey.name}
                        </Text>

                    </TouchableOpacity>
                    <TextInput
                        placeholder="Doctor"
                        value={doctor}
                        onChangeText={doctor => setDoctor(doctor)}
                        style={styles.textfield}

                    />

                    <Button
                        buttonColor='royalblue'
                        style={styles.button}
                        mode="contained"
                        onPress={() => { }}>
                        <Text>
                            Grant Access
                        </Text>
                    </Button>

                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white'
                        }}>
                        OR
                    </Text>

                    <Button
                        buttonColor='royalblue'
                        style={styles.button}
                        mode="contained"
                        onPress={() => navigation.goBack()}>
                        <Text>
                            Back
                        </Text>
                    </Button>
                    
                </ScrollView>
            </ImageBackground>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        // backgroundColor: '#b0e0e6'
    },
    image: {
        height: 180,
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        marginBottom: 10,
    },
    textfield: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'whitesmoke',
        textAlign: 'center'
    },
    button: {
        margin: 20
    },
    linktext: {
        color: 'white',
        fontSize: 16,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10
    },
    rowline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});


export default GrantPermissionPatient;