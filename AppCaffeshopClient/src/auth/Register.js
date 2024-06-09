import React, { Componetnt, useState, createRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Touchable, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const {width, height} = Dimensions.get('window');
const Register = ({ navigation }) => {
  const [useName, setuseName] = useState(' ');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const handleproses = () => {
    if(!useName){
      Alert('Masukkan Nama, email atau  password');
      return;
    }
    AsyncStorage.setItem('name', useName);
    AsyncStorage.setItem('email', userEmail);
    AsyncStorage.setItem('password', userPassword);
    navigation.replace('Login');

  }
    return (
      <View style={styles.container}>
        <View
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',

            }}
            style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/auth/logo.png')} style={styles.logo}/>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.textlogo}>PUBLIC</Text>
                  <Text style={styles.textlogo}>COFFEE</Text>
                  <Text style={styles.textlogo}>STAND</Text>
                </View>
            </View>
            <View style={{width: '100%'}}>
                <KeyboardAvoidingView enabled>
                    <View style={{ alignItems: 'center', marginBottom: 20}}>
                        <Text style={styles.title}>Create an Account</Text>
                        <Text style={{fontSize:14, color: '#7C7877', marginTop: 10}}>Create your account to access</Text>
                        <Text style={{fontSize:14, color: '#7C7877'}}>exclusive events and offers</Text>
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                            }
                            selectionColor='#846046'
                            placeholder="Enter Username"
                            placeholderTextColor="#BDB8B7"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserEmail) =>
                                setUserEmail(UserEmail)
                            }
                            selectionColor='#846046'
                            placeholder="Enter Email"
                            placeholderTextColor="#BDB8B7"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            returnKeyType="next"
                            underlineColorAndroid="#f000"
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={styles.SectionStyle}>
                        <TextInput
                            style={styles.inputStyle}
                            onChangeText={(UserPassword) =>
                                setUserPassword(UserPassword)
                            }
                            selectionColor= '#846046'
                            placeholder="Enter Password"
                            placeholderTextColor="#BDB8B7"
                            keyboardType="default"

                            blurOnSubmit={false}
                            secureTextEntry={true}
                            underlineColorAndroid="#f000"
                            returnKeyType="next"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={handleproses}
                    >
                        <Text style={styles.buttonTextStyle}>Sign Up</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.opsiLogin}>
                      <View style={styles.garis}></View>
                      <Text style={styles.opsiLoginText}>or</Text>
                      <View style={styles.garis}></View>
                    </View>
                    <View style={styles.mediaLoginOpsi}>
                      <View style={styles.mediaLogin}>
                        <Image  source={require('../assets/auth/hp.jpeg')} style={styles.imgLoginOpsi}/>
                        <Text style={styles.medialogintext}>Sign up with Phone Number </Text>
                      </View>
                      <View style={styles.mediaLogin}>
                        <Image  source={require('../assets/auth/google.png')} style={styles.imgLoginOpsi}/>
                        <Text style={styles.medialogintext}>Sign up with Google</Text>
                      </View>
                      {/* <Image  source={require('../assets/auth/facebook.png')} style={styles.imgLoginOpsi} /> */}
                    </View>
                    <View style={styles.signUp}>
                      <Text style={styles.textSignUp}>Already have an account?</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.linkSignUp}>Login</Text>
                      </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </View>
      </View>
    )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'static'
},
logo: {
  width: 90,
  height: 90,
},
textlogo: {
  color: '#333',
  fontSize: 18,
  fontWeight: 'bold',
  alignItems: 'flex-end'
},
title: {
  color: '#333',
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 10
},
SectionStyle: {
    flexDirection: 'colom',
    height: 60,
    marginHorizontal: 20,
    marginVertical: 10,
},
buttonStyle: {
    backgroundColor: '#000000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 15,
    marginHorizontal: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
},
buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    
},
inputStyle: {
    backgroundColor: "#FFF",
    flex: 1,
    color: '#1e272e',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#dadae8',
},
registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
},
errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
},
opsiLogin: {
  width: width,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  flexDirection: 'row'
},
garis: {
  width: '40%',
  height: 1,
  backgroundColor: '#7C7877'
},
opsiLoginText: {
  color: '#7C7877',
  fontSize: 15,
  paddingHorizontal: 5
},
mediaLoginOpsi: {
  flexDirection: 'colum',
  justifyContent: 'center',
  gap: 20,
  marginTop: 20,
},
mediaLogin: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
},
imgLoginOpsi: {
  width: 20,
  height: 20
},
medialogintext: {
  color: '#262424',
  marginLeft: 10,
  fontSize: 16
},
signUp: {
  width: width,
  height: 'auto',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 40
},
textSignUp: {
  color: '#262424',
  fontSize: 15
},
linkSignUp: {
  color: '#DB8129',
  textDecorationLine: 'underline',
  marginLeft: 5,
  fontSize: 15
}
});