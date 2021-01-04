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
      <ScrollView style={{height: '100%', backgroundColor: '#EBEBF4'}}>
        <View style={{backgroundColor: '#37B7C9', height: 120}}>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 28,
              color: '#fff',
              fontSize: 24,
            }}>
            Alumni
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#EBEBF4',
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
        <View
          style={[LStyles.searchSection, {marginTop: 0, marginHorizontal: 16}]}>
          <TextInput
            style={[LStyles.inputTextStyle]}
            placeholder="Cari nama alumni"
            placeholderTextColor="#767676"
            value={this.state.keyword}
            secureTextEntry={true}
            onChangeText={(email) => this.setState({email})}
          />
          <Icon
            name="search-outline"
            size={24}
            color={'#333'}
            style={LStyles.searchIcon}
          />
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: deviceWidth-24,
            marginTop: 16,
            marginHorizontal: 16
          }}
          data={this.state.searchKeyword}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  LStyles.checkButton,
                  {
                    marginTop: 8,
                    // zIndex: 100,
                  },
                ]}>
                <Text
                  style={{
                    color: '#FFF',
                  }}>
                  {/* {item.title} */}
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{marginTop: 16, flexDirection: 'row', marginHorizontal: 16}}>
          <Text style={{fontWeight: 'bold'}}>Daftar Alumni</Text>
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
