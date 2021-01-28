import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default class Alumni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      listAlumni: [
        {
          imageUrl: require('./../../assets/images/avatar1.png'),
          name: 'Mochamad Imam Mahudi',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
      ],
      searchKeyword: [
        {
          title: '2014',
        },
        {
          title: '2015',
        },
        {
          title: '2016',
        },
        {
          title: '2017',
        },
        {
          title: '2018',
        },
        {
          title: '2019',
        },
        {
          title: '2020',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#37B7C9', height: 120}}>
        <Text
            style={{
              alignSelf: 'center',
              marginTop: 28,
              color: '#fff',
              fontSize: 24,
            }}>
            Detail Alumni
          </Text>
        </View>

      

        <View
          style={{
            backgroundColor: '#fff',
            height: 30,
            width: '100%',
            position: 'absolute',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            zIndex: 99,
            top: 90,
          }}
        />
        

        {/* <View style={{marginTop: 120, flexDirection: 'row', marginHorizontal: 24}}>
          <Text style={{fontWeight: 'bold'}}>Alumni di angkatan anda</Text>
          <Text style={{marginLeft: 'auto', color: '#46BCCC'}}>Lihat Semua</Text>
        </View> */}
        
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{marginTop: 16, marginBottom: 16}}
          data={this.state.listAlumni}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  marginBottom: 1,
                  paddingVertical: 45,
                  paddingHorizontal: 1,
                  marginHorizontal: 16,
                  borderRadius: 10,
                }}>
                
                <Image
                  source={item.imageUrl}
                  style={{
                    position: 'absolute',
                    width: 68,
                    height: 68,
                  }}
                />
                <Text
                  style={{
                  marginTop: 30,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 18, marginTop: 4}}>UI / UX Designer Gojek Indonesia</Text>

                <View
                  style={{
                    marginTop: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                  }}
                />
              <Text
              style={{
              marginTop: 8,
              color: 'black',
              fontSize: 15,
            }}>
            <Text style={{fontWeight: 'bold', marginTop: 4}}>Universitas Dinamika</Text>
          </Text>
          <Text style={{marginTop: 4}}>- Angkatan {item.angkatan}</Text>
          <Text style={{marginTop: 4}}>- S1 {item.jurusan}</Text>

          <View
                  style={{
                    marginTop: 10,
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                  }}
                />
                <Text style={{fontWeight: 'bold', marginTop: 4}}>Organisasi</Text>
                <Text style={{marginTop: 4}}>- Stikom Java Network {"\n"}   Anggota</Text>
                <Text style={{marginTop: 4}}>- Himpunan Mahasiswa Sistem Informasi {"\n"}   Divisi Humas</Text>
              </TouchableOpacity>
              
            );
          }}
        />
        
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
