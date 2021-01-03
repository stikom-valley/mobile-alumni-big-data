import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ButtonGreen extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.goTo}
        style={{backgroundColor: '#46BCCC', borderRadius: 100, paddingVertical: 16}}>
        <Text style={{alignSelf: 'center', color: '#fff'}}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}
