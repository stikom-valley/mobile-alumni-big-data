import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ButtonGreen from './../../component/ButtonGreen';
import ButtonBackCircle from './../../component/ButtonBackWhite';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      haveLinkedIn: false,
    };
  }
  goToProfile = () => {
    this.props.navigation.navigate('Profile');
  };
  goBack = () => {
    this.props.navigation.goBack();
    return true;
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#EBEBF4', height: '100%'}}>
        <Image
          source={require('./../../assets/images/background-two.png')}
          style={{
            width: 144,
            height: 150,
            position: 'absolute',
            alignSelf: 'flex-end',
          }}
        />
        <View style={{padding: 24}}>
          <ButtonBackCircle pressBack={this.goBack} />
          <Text style={{fontSize: 24, marginTop: 36, fontWeight: 'bold'}}>Kuisioner</Text>
          <Text style={{fontSize: 12, marginTop: 4}}>
            Isilah Pertanyaan Dibawah Ini Sesuai{'\n'}
            <Text style={{fontSize: 12}}>Dengan Data Aslimu</Text>
          </Text>
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Relevansi Pendidikan Dengan Pekerjaan</Text>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Apakah pendidikan yang Saudara dapat UNDIKA relevan dengan pekerjaan Saudara?</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Alasan"
              placeholderTextColor="#767676"
              value={this.state.namalengkap}
              onChangeText={(namalengkap) => this.setState({namalengkap})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Dari pengalaman Saudara bekerja, apa saran praktis Saudara untuk pendidikan di UBD dalam rangka meningkatkan kesesuaian antara pendidikan dengan lapangan pekerjaan?</Text>
          <View style={[LStyles.searchSection, {marginTop: 4, height: 120}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder=""
              placeholderTextColor="#767676"
              value={this.state.namalengkap}
              onChangeText={(namalengkap) => this.setState({namalengkap})}
            />
          </View>
          <View
            style={[LStyles.searchSection, {marginTop: 4, marginBottom: 18}]}>
          </View>
          <ButtonGreen title="Selanjutnya" goTo={this.goToProfile} />
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
  },
  searchIcon: {
    paddingLeft: 16,
    paddingRight: 8,
  },
});
