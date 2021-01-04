import React, {Component} from 'react';
import {Text, View, Dimensions, Image, FlatList} from 'react-native';
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
        {
          imageUrl: require('./../../assets/images/avatar2.png'),
          name: 'Shindu',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
        {
          imageUrl: require('./../../assets/images/avatar3.png'),
          name: 'Kusuma Ningayu',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
        {
          imageUrl: require('./../../assets/images/avatar4.png'),
          name: 'Jhonatan Butar Butar',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
        {
          imageUrl: require('./../../assets/images/avatar1.png'),
          name: 'Denandra Prasetya',
          angkatan: '2017',
          jurusan: 'Sistem Informasi',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView style={{height: '100%', backgroundColor: '#EBEBF4'}}>
        <View style={{backgroundColor: '#37B7C9', height: 200}}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', margin: 16}}>
            <Image
              source={require('./../../assets/images/avatar3.png')}
              style={{width: 64, height: 64, marginRight: 16}}
            />
            <Text style={{color: '#fff'}}>
              Halo, {'\n'}
              <Text>Denandra Prasetya</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 16,
            paddingHorizontal: 24,
            margin: 16,
            width: deviceWidth - 32,
            borderRadius: 10,
            top: 100,
            position: 'absolute',
            zIndex: 100,
          }}>
          <Text style={{color: '#4F4F4F'}}>
            Alumni{' '}
            <Text style={{fontWeight: 'bold', color: '#161719'}}>S1 Sistem Informasi 2018</Text>
          </Text>
          <Text style={{marginTop: 14, color: '#4F4F4F'}}>Perusahaan</Text>
          <Text style={{fontWeight: 'bold', marginTop: 4}}>
            Gojek Indonesia
          </Text>
          <Text style={{marginTop: 14, color: '#4F4F4F'}}>Pekerjaan</Text>
          <Text style={{fontWeight: 'bold', marginTop: 4}}>Designer</Text>
          <Image
            source={require('./../../assets/images/company-logo.png')}
            style={{
              width: 120,
              height: 30,
              position: 'absolute',
              alignSelf: 'flex-end',
              top: 70,
              right: 10,
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#EBEBF4',
            height: 100,
            width: '100%',
            position: 'absolute',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            zIndex: 99,
            top: 160,
          }}
        />

        <View style={{marginTop: 100, flexDirection: 'row', marginHorizontal: 16}}>
          <Text>Alumni di angkatan anda</Text>
          <Text style={{marginLeft: 'auto', color: '#46BCCC'}}>Lihat Semua</Text>
        </View>
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
                  marginBottom: 16,
                  paddingVertical: 36,
                  paddingHorizontal: 16,
                  marginHorizontal: 16,
                  borderRadius: 10,
                }}>
                <Text>{item.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 4,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#91919F',
                      height: 5,
                      width: 5,
                      borderRadius: 90,
                      marginRight: 8,
                    }}
                  />
                  <Text style={{color: '#91919F', fontSize: 12}}>
                    {item.jurusan}
                  </Text>
                  <View
                    style={{
                      backgroundColor: '#91919F',
                      height: 5,
                      width: 5,
                      borderRadius: 90,
                      marginRight: 4,
                      marginLeft: 8,
                    }}
                  />
                  <Text style={{color: '#91919F', fontSize: 12}}>
                    {item.angkatan}
                  </Text>
                </View>
                <Image
                  source={item.imageUrl}
                  style={{
                    position: 'absolute',
                    width: 68,
                    height: 68,
                    alignSelf: 'flex-end',
                    right: 24,
                    top: 24,
                  }}
                />
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
