import React, { Componetnt, useState, createRef } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Touchable, 
  Dimensions, 
  Image 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './Register';
import { Detail } from '../component';

const {width, height} = Dimensions.get('window');
const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const handleproses = () => {
        if(!userEmail && userPassword){
          alert('Silahkan Masukkan Email!');
          return;
        }else if(!userPassword){
          alert('Silahkan Masukkan Password!');
          return;
        }else if(!userEmail){
          alert('Silahkan masukkan Email dan Password!');
            return;
        }

     // CURL CALL API LOGIN
        //if true login 
        AsyncStorage.setItem('username', userEmail);
        AsyncStorage.setItem('usepassword', userPassword);
        navigation.replace('MainApp');
        //end if true login

     //END CALL API LOGIN
    
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
                            <Text style={styles.title}>Welcome Back!</Text>
                            <Text style={{fontSize:14, color: '#7C7877', marginTop: 10}}>Use Credentials to acees your account</Text>
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
                        <View style={styles.forgotPass}>
                          <Text style={styles.forgotText}>Forgot Password?</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleproses}
                        >
                            <Text style={styles.buttonTextStyle}>LOGIN</Text>
                        </TouchableOpacity>
                        
                        <View style={styles.opsiLogin}>
                          <View style={styles.garis}></View>
                          <Text style={styles.opsiLoginText}>or</Text>
                          <View style={styles.garis}></View>
                        </View>
                        <View style={styles.mediaLoginOpsi}>
                          <View style={styles.mediaLogin}>
                            <Image  source={require('../assets/auth/hp.jpeg')} style={styles.imgLoginOpsi}/>
                            <Text style={styles.medialogintext}>Login with Phone Number </Text>
                          </View>
                          <View style={styles.mediaLogin}>
                            <Image  source={require('../assets/auth/google.png')} style={styles.imgLoginOpsi}/>
                            <Text style={styles.medialogintext}>Login with Google</Text>
                          </View>
                          {/* <Image  source={require('../assets/auth/facebook.png')} style={styles.imgLoginOpsi} /> */}
                        </View>
                        <View style={styles.signUp}>
                          <Text style={styles.textSignUp}>Don’t have a account?</Text>
                          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.linkSignUp}>Signup</Text>
                          </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    )
}

export default Login;

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
      marginTop: 20
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
    forgotPass: {
      width: width,
      justifyContent: 'center'
    },
    forgotText: {
      color: '#2454F8',
      fontSize: 16,
      textAlign: 'right',
      paddingRight: 20,
      paddingTop: 10
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