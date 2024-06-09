import React, { Component } from 'react'
import { 
  Text, 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Dimensions, 
  TextInput, 
  ScrollView, 
  TouchableOpacity,
  Image
} from 'react-native'
import { 
  Rekomendasi, 
  Header, 
  FiturUtama, 
  ContentHome,
  Search 
} from '../../component';

const {width, height}= Dimensions.get('window');

const Home = ({navigation}) => {
    return (
      <View>
        <View style={{width: width, height: 25, backgroundColor: '#FFFFFF'}}>
        </View>
        <ScrollView>
          <View style={{flex: 1, backgroundColor: '#ffff', width: width}}>
            {/* <Header /> */}
            <View style={styles.container}>
              {/* akun user */}
              <View style={styles.akunUser}>
                <View style={styles.akun}>
                  <Text style={{color: '#000', fontSize: 14}}>Hello,</Text>
                  <Text style={{color: '#000', fontSize: 19, fontWeight: '600'}}>Kelompok7</Text>
                </View>
                <TouchableOpacity style={{elevation: 5,}}>
                    <Image source={require('../../assets/home/icon/defaultprofile.png')} style={styles.profileUser} />
                </TouchableOpacity>
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
                <ContentHome navigation={navigation}/>
              </View>

          </View>
          </View>
        </ScrollView>
      </View>
    )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 7
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
  profileUser: {
    width: 65,
    height: 65,
    borderRadius: 50,
    // backgroundColor: '#000'
  },
  search: {
    width: '100%',
    marginTop: 30,
    // backgroundColor: 'red'
  },

})