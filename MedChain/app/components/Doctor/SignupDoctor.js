import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const SignupDoctor = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmpassword, setConfirmPassword] = React.useState("");
    const navigation = useNavigation()

    const signup = () => {
        console.log(name, ' ', email, ' ', password, ' ', confirmpassword)
        console.log('Sign up')
        navigation.navigate('MainDoctor');
    }

    const navigateToSignin = () => {
        navigation.navigate('SigninDoctor');
    }

    const navigateToForgetPassword = () => {
        navigation.navigate('ForgotPasswordDoctor');
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../images/appBack.jpg')}
                resizeMode="cover"
                style={{ height: '100%' }}>
                <Image
                    source={require('../../images/doctor.jpg')}
                    style={styles.image}
                />
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.textfield}
                    keyboardType='email-address'
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

                <TextInput
                    label="Confirm Password"
                    secureTextEntry
                    style={styles.textfield}
                    value={confirmpassword}
                    onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
                />

                <Button
                    buttonColor='royalblue'
                    style={styles.button}
                    mode="contained"
                    onPress={signup}>
                    <Text>Sign up</Text>
                </Button>

                <View style={styles.rowline}>
                    <Text
                        style={styles.linktext}
                        onPress={navigateToSignin}>
                        Sign in
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
        marginBottom: 10
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
        margin: 20
    },
    rowline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    }
});

export default SignupDoctor;
