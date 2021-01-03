import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonGreen from './../../component/ButtonGreen';
import ButtonBackCircle from './../../component/ButtonBackWhite';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OnBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  goToSignIn = () => {
    this.props.navigation.navigate('Home');
  };
  goToSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  goBack = () => {
    this.props.navigation.goBack();
    return true;
  };
  render() {
    return (
      <View style={{backgroundColor: '#EBEBF4', height: '100%'}}>
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
          <Text style={{fontSize: 24, marginTop: 36}}>
            Selamat datang!{'\n'}
            <Text style={{fontSize: 16}}>Dinamikawan</Text>
          </Text>
          <View style={[LStyles.searchSection, {marginTop: 54}]}>
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
          <View
            style={[LStyles.searchSection, {marginTop: 18, marginBottom: 24}]}>
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
          <ButtonGreen title="Sign In" goTo={this.goToSignIn} />
          <Text
            style={{
              alignSelf: 'center',
              color: '#595959',
              marginTop: 8,
              flexDirection: 'row',
            }}>
            Already have an account ?{' '}
            <TouchableOpacity style={{top: 4}} onPress={this.goToSignUp}>
              <Text style={{color: '#46BCCC'}}>SIGN UP</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
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
