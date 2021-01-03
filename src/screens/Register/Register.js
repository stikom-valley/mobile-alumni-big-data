import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonGreen from './../../component/ButtonGreen';
import ButtonBackCircle from './../../component/ButtonBackWhite';

export default class OnBoard extends Component {
  goToSignIn = () => {
    this.props.navigation.navigate('Login');
  };
  goToSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  render() {
    return (
      <View style={{backgroundColor: '#EBEBF4'}}>
        <Image
          source={require('./../../assets/images/background-two.png')}
          style={{width: 144, height: 150, position: 'absolute', alignSelf: 'flex-end'}}
        />
        <View style={{padding: 24}}>
            <ButtonBackCircle />
        </View>
      </View>
    );
  }
}
