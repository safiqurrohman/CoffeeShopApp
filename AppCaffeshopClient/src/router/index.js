import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
//landing page aplikasi
import Splashscreen from '../splashscreen/Splashscreen';
import Login from '../auth/Login';
import Register from '../auth/Register';

//halaman fitur aplikasi
import { Home, Favorit, Keranjang, Profile } from '../page';
import { BottomNavigator, Header, Detail, SubContentHome, ComponentCheckOut} from '../component';
// import Header from '../component';

const Stack =createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp(){
    return(
        <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{headerShown: false}}
                />
            <Tab.Screen 
                name='Favorit' 
                component={Favorit} 
                options={({navigation})=> ({
                    headerShown: true,
                    headerTitle: 'Favorit',
                    headerLeft: ()=> (
                        <Icon 
                            name="chevron-back-outline"
                            size={30}
                            color='#000000'
                            onPress={() => navigation.goBack()}
                            style={{marginLeft: 10}}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 800,
                        fontSize: 25
                    }
                })}
            />
            <Tab.Screen 
                name='Keranjang' 
                component={Keranjang} 
                options={({navigation})=> ({
                    headerShown: true,
                    // headerTitle: 'Profil',
                    headerLeft: ()=> (
                        <Icon 
                            name="chevron-back-outline"
                            size={30}
                            color='#000000'
                            onPress={() => navigation.goBack()}
                            style={{marginLeft: 10}}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 800,
                        fontSize: 25
                    }
                })}
                />
            <Tab.Screen 
                name='Profile' 
                component={Profile} 
                options={({navigation})=> ({
                    headerShown: true,
                    headerTitle: 'Profil',
                    headerLeft: ()=> (
                        <Icon 
                            name="chevron-back-outline"
                            size={30}
                            color='#000000'
                            onPress={() => navigation.goBack()}
                            style={{marginLeft: 10}}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 800,
                        fontSize: 25
                    }
                })}
            />
        </Tab.Navigator>
    );

};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splashscreen'>
            <Stack.Screen name='Splashscreen' component={Splashscreen} options={{headerShown: false}}/>
            <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            {/* <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}}/> */}
            <Stack.Screen name='konten' component={SubContentHome} />
            <Stack.Screen name='Header' component={Header} />
            <Stack.Screen 
                name='Detail' 
                component={Detail} 
                options={({navigation}) => ({
                    headerShown: true,
                    headerTitle: 'Deskripsi',
                    headerTransparent: true,
                    headerLeft: ()=> (
                        <Icon 
                            name="chevron-back-outline"
                            size={30}
                            color='#000000'
                            onPress={() => navigation.goBack()}
                            style={{marginLeft: 10}}
                        />
                    ),
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                    
                })} 
            />
            <Stack.Screen 
                name='ComponentCheckOut' 
                component={ComponentCheckOut} 
                options={({navigation}) => ({
                    headerShown: true,
                    headerTitle: 'CheckOut',
                    headerLeft: ()=> (
                        <Icon 
                            name="chevron-back-outline"
                            size={30}
                            color='#000000'
                            onPress={() => navigation.goBack()}
                            style={{marginLeft: 10}}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#FFFFFF',
            
                    },
                    headerTitleAlign: 'center'
                })} />
        </Stack.Navigator>
    );
};

export default Router;