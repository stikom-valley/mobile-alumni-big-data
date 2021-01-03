import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonGreen from './../../component/ButtonGreen';

export default class OnBoard extends Component {
  goToSignIn = () => {
    this.props.navigation.navigate('Login');
  };
  goToSignUp = () => {
    this.props.navigation.navigate('Register');
  };
  render() {
    return (
      <View style={{backgroundColor: '#EBEBF4', height: '100%'}}>
        <Image
          source={require('./../../assets/images/background-one.png')}
          style={{width: '100%', height: 250, position: 'absolute'}}
        />
        <Image
          source={require('./../../assets/images/logo-tracer.png')}
          style={{
            width: 192,
            height: 76,
            marginTop: 200,
            marginBottom: 16,
            alignSelf: 'center',
          }}
        />
        <View style={{padding: 24, height: '50%'}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#595959',
            }}>
            Tracer study adalah penelitian mengenai situasi alumni khususnya
            dalam hal pencarian kerja, situasi kerja, dan pemanfaatan
            pemerolehan kompetensi selama perkuliahan
          </Text>
          <View style={{marginTop: 'auto'}}>
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
        </View>
      </View>
    );
  }
}
