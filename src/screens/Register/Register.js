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
  goToSignIn = () => {
    this.props.navigation.navigate('Login');
  };
  goToSignUp = () => {
    this.props.navigation.navigate('Home');
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
          <Text style={{fontSize: 16, marginTop: 36}}>
            Yuk daftar{'\n'}
            <Text style={{fontSize: 14}}>cari teman alumni anda</Text>
          </Text>
          <View style={[LStyles.searchSection, {marginTop: 32}]}>
            <Icon
              name="mail-outline"
              size={23}
              color={'#333'}
              style={LStyles.searchIcon}
            />
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Email"
              placeholderTextColor="#767676"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View style={[LStyles.searchSection, {marginTop: 18}]}>
            <Icon
              name="person-outline"
              size={24}
              color={'#333'}
              style={LStyles.searchIcon}
            />
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Nama"
              placeholderTextColor="#767676"
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View style={[LStyles.searchSection, {marginTop: 18}]}>
            <Icon
              name="lock-closed-outline"
              size={24}
              color={'#333'}
              style={LStyles.searchIcon}
            />
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Password"
              placeholderTextColor="#767676"
              value={this.state.email}
              secureTextEntry={true}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View
            style={[LStyles.searchSection, {marginTop: 18, marginBottom: 18}]}>
            <Icon
              name="lock-closed-outline"
              size={24}
              color={'#333'}
              style={LStyles.searchIcon}
            />
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Retype Password"
              placeholderTextColor="#767676"
              value={this.state.email}
              secureTextEntry={true}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: !this.state.haveLinkedIn ? 24 : 0,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (this.state.haveLinkedIn) {
                  this.setState({haveLinkedIn: false});
                } else {
                  this.setState({haveLinkedIn: true});
                }
              }}>
              <View
                style={{
                  height: 24,
                  width: 24,
                  backgroundColor: this.state.haveLinkedIn ? '#46BCCC' : '#FFF',
                  borderRadius: 5,
                }}
              />
            </TouchableOpacity>
            <Text style={{marginLeft: 8, color: '#898989'}}>
              Saya memiliki akun Linkedin
            </Text>
          </View>
          {this.state.haveLinkedIn && (
            <View
              style={[
                LStyles.searchSection,
                {marginTop: 18, marginBottom: 24},
              ]}>
              <Icon
                name="logo-linkedin"
                size={24}
                color={'#333'}
                style={LStyles.searchIcon}
              />
              <TextInput
                style={[LStyles.inputTextStyle]}
                placeholder="Masukkan url linkedin anda"
                placeholderTextColor="#767676"
                value={this.state.email}
                secureTextEntry={true}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
          )}
          <ButtonGreen title="Sign Up" goTo={this.goToSignUp} />
          <Text
            style={{
              alignSelf: 'center',
              color: '#595959',
              marginTop: 8,
              flexDirection: 'row',
            }}>
            Already have an account ?{' '}
            <TouchableOpacity style={{top: 4}} onPress={this.goToSignIn}>
              <Text style={{color: '#46BCCC'}}>SIGN IN</Text>
            </TouchableOpacity>
          </Text>
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
