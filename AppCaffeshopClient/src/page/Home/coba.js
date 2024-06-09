import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput, ScrollView } from 'react-native'
import { 
  Rekomendasi, 
  Header, 
  FiturUtama, 
  ContentHome,
  Search 
} from '../../component';

const {width, height}= Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView 
          
        >
          <View style={{flex: 1, backgroundColor: '#ffff', width: width}}>
            <Header />
            <View style={styles.container}>
              {/* akun user */}
              <View style={styles.akunUser}>
                <View style={styles.akun}>
                  <Text style={{color: '#000', fontSize: 14}}>Hello,</Text>
                  <Text style={{color: '#000', fontSize: 19, fontWeight: '600'}}>Kelompok7</Text>
                </View>
                <View style={styles.user}></View>
              </View>

              <View style={styles.search}>
                <Search />
              </View>
              
              <View style={{width: '100%'}}>
                <Rekomendasi 
                  gambarContent = {require('../../assets/home/rekomendasi.jpeg')}
                  tittle1 = "Buy one get"
                  tittle2 = "one FREE"
                  diskon = "promo"
                />
              </View>
              <View>
                <FiturUtama />
              </View>
              <View>
                <ContentHome />
              </View>

          </View>
          </View>
        </KeyboardAvoidingView>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  akunUser: {
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  akun: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  user: {
    width: 45,
    height: 45,
    backgroundColor: '#000',
    borderRadius: 50
  },
  search: {
    width: '100%',
    marginTop: 30,
    // backgroundColor: 'red'
  },

})