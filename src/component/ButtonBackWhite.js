import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ButtonBackCircle extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.pressBack} style={this.props.position == true && {position: 'absolute', zIndex: 100, margin: 16}}>
        <View
          style={{
            backgroundColor: '#FFF',
            width: 55,
            height: 55,
            borderRadius: 100,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Icon name="arrow-back-outline" size={32} color={'#1B141F'} />
        </View>
      </TouchableOpacity>
    );
  }
}
