import React, {Component} from 'react';
import ButtonGreen from './../../component/ButtonGreen';
import {Text, View, Dimensions, Image, FlatList, StyleSheet, TextInput} from 'react-native';
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
  goToLogout = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#EBEBF4'}}>
        <View style={{backgroundColor: '#37B7C9', height: 240}}>
          <View
            style={{alignItems: 'center', margin: 16}}>
            <Text style={{alignSelf: 'center', fontSize: 24, color: '#fff', marginTop: 30, fontWeight: 'bold',}}>Edit Profil</Text>
            <Image
              source={require('./../../assets/images/avatar4.png')}
              style={{width: 100, height: 100, marginTop: 10}}
            />
              <Text style={{alignSelf: 'center', fontSize: 12, color: '#fff', marginTop: 10}}>Ubah Foto Profil</Text>
          </View>
        </View>
        

        <View
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 16,
                  paddingVertical: 26,
                  paddingHorizontal: 16,
                }}>
                <Text>Nama Lengkap</Text>
                <TextInput
                  style={[LStyles.inputTextStyle, {marginTop: 13, marginBottom: 16}]}
                  placeholder="Nama Lengkap"
                  placeholderTextColor="#fff"
                  backgroundColor="#767676"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({name})}
                />
                <Text>Jenis Kelamin</Text>
                <Text>Radio Button</Text>
                <Text>Tempat Tanggal Lahir</Text>
                <TextInput
                  style={[LStyles.inputTextStyle, {marginTop: 13, marginBottom: 16}]}
                  placeholder="Surabaya"
                  placeholderTextColor="#fff"
                  backgroundColor="#767676"
                  value={this.state.kota}
                  onChangeText={(kota) => this.setState({kota})}
                />
              </View>
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