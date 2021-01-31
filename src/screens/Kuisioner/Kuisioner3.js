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
  goToKuis4 = () => {
    this.props.navigation.navigate('Kuisioner4');
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
          <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>Riwayat Pekerjaan</Text>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Nama Tempat Bekerja</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Masukkan Tempat Kerja"
              placeholderTextColor="#767676"
              value={this.state.namalengkap}
              onChangeText={(namalengkap) => this.setState({namalengkap})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Jenis Instansi / Bidang Usaha / Industri</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Jenis Instansi / Bidang Usaha / Industri"
              placeholderTextColor="#767676"
              value={this.state.namalengkap}
              onChangeText={(namalengkap) => this.setState({namalengkap})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Jabatan / Posisi dalam Perusahaan</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Masukkan Jabatan / Posisi"
              placeholderTextColor="#767676"
              value={this.state.tmptlahir}
              onChangeText={(tmptlahir) => this.setState({tmptlahir})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Bulan dan Tahun Mulai Bekerja</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Masukkan Program Studi"
              placeholderTextColor="#767676"
              value={this.state.almtkntr}
              onChangeText={(almtkntr) => this.setState({almtkntr})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Bulan dan Tahun Berhenti Bekerja</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Alasan"
              placeholderTextColor="#767676"
              value={this.state.almtkntr}
              onChangeText={(almtkntr) => this.setState({almtkntr})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Berapa rata-rata pendapatan per bulan Saudara pada pekerjaan terakhir/sekarang?</Text>
          <View style={[LStyles.searchSection, {marginTop: 4}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="< Rp 1.000.000"
              placeholderTextColor="#767676"
              value={this.state.email}
              secureTextEntry={true}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <Text style={{fontSize: 16, marginTop: 10, fontWeight: 'bold'}}>Apa pekerjaan Saudara ini berhubungan dengan bidang ilmu yang Saudara pelajari?</Text>
          <View
            style={[LStyles.searchSection, {marginTop: 4, marginBottom: 18}]}>
            <TextInput
              style={[LStyles.inputTextStyle]}
              placeholder="Alasan"
              placeholderTextColor="#767676"
              value={this.state.email}
              secureTextEntry={true}
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <ButtonGreen title="Selanjutnya" goTo={this.goToKuis4} />
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
