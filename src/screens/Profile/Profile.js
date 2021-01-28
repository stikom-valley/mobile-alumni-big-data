import React, {Component} from 'react';
import ButtonGreen from './../../component/ButtonGreen';
import {Text, View, Dimensions, Image, FlatList, StyleSheet,} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listAlumni: [
        {
          imageUrl: require('./../../assets/images/avatar1.png'),
          name: 'Mochamad Imam Mahudi',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
      ],
    };
  }
  goToEditProfile = () => {
    this.props.navigation.navigate('EditProfile');
  };
  goToKuisinoer = () => {
    this.props.navigation.navigate('Kuisioner');
  };
  goToLogout = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#EBEBF4'}}>
        <View style={{backgroundColor: '#37B7C9', height: 240}}>
          <View
            style={{alignItems: 'center', margin: 16}}>
            <Image
              source={require('./../../assets/images/avatar4.png')}
              style={{width: 80, height: 80, marginTop: 40}}
            />
            <Text style={{alignSelf: 'center', fontSize: 24, color: '#fff', marginTop: 4}}>Mochamad Imam Mahudi</Text>
              <Text style={{alignSelf: 'center', fontSize: 16, color: '#fff', marginTop: 4}}>UI / UX Designer Gojek Indonesia</Text>
          </View>
        </View>

        <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 16,
                  paddingVertical: 26,
                  paddingHorizontal: 16,
                }}>
                <Text>Kuesioner</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                    }}>
                </View>
                <Text style={{alignSelf: 'flex-end'}}>
                    50%
                  </Text>
                <TouchableOpacity onPress={this.goToKuisinoer}
                style={[
                  LStyles.checkButton,
                  {
                    marginTop: 8,
                    width: 120,
                    // zIndex: 100,
                  },
                ]}>
                  <Text
                  style={{
                    color: '#FFF',
                    alignSelf: 'center'
                  }}>
                  {/* {item.title} */}
                  isi Kuesioner
                </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={this.goToEditProfile}
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 16,
                  paddingVertical: 20,
                  paddingHorizontal: 16,
                }}>
                <Text>Edit Profil</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.goToLogout}
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 16,
                  paddingVertical: 20,
                  paddingHorizontal: 16,
                }}>
                <Text>Keluar</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                </View>
              </TouchableOpacity>
        {/* <View
          style={{
            backgroundColor: '#EBEBF4',
            height: deviceHeight - 270,
            width: '100%',
            marginTop: 'auto',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingTop: 102,
          }}>
          
        </View> */}
      </ScrollView>
    );
  }
}

const LStyles = StyleSheet.create({
  inputTextStyle: {
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  searchIcon: {
    paddingLeft: 16,
    paddingRight: 8,
    marginLeft: 'auto',
  },
  checkButton: {
    borderColor: '#46BCCC',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginRight: 16,
    backgroundColor: '#46BCCC',
  },
});