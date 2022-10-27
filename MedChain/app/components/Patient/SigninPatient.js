import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const SigninPatient = () => {
    const navigation = useNavigation();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const signin = () => {
        console.log(email, ' ', password)
        console.log('Sign in')
        navigation.navigate('MainPatient');
    }

    const navigateToSignup = () => {
        navigation.navigate('SignupPatient');
    }

    const navigateToForgetPassword = () => {
        navigation.navigate('ForgotPasswordPatient');
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../images/appBack.jpg')}
                resizeMode="cover"
                style={{ height: '100%' }}>
                <Image
                    source={require('../../images/patient.jpg')}
                    style={styles.image}
                />

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    style={styles.textfield}
                    keyboardType='email-address'
                />

                <TextInput
                    label="Password"
                    secureTextEntry
                    style={styles.textfield}
                    value={password}
                    onChangeText={password => setPassword(password)}
                />

                <Button
                    buttonColor='royalblue'
                    style={styles.button}
                    mode="contained"
                    onPress={signin}>
                    <Text>
                        Sign in
                    </Text>
                </Button>

                <View style={styles.rowline}>
                    <Text
                        style={styles.linktext}
                        onPress={navigateToSignup}>
                        Sign up
                    </Text>

                    <Text
                        style={styles.linktext}
                        onPress={navigateToForgetPassword}>
                        Forgot Password?
                    </Text>
                </View>

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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        marginBottom: 10,
    },
    textfield: {
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10
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

export default SigninPatient;
