import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Equipments = () => {
  const Array = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <View>
      <View
        style={{
          backgroundColor: '#045BAA',
          height: 80,
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View />
        <Text
          style={{
            flex: 1,
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Equipments
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Icon name="commenting-o" size={20} color="white" />
          <Icon name="bell" size={20} color="white" marginHorizontal={10} />
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: '#045BAA',
          height: 80,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          
        </Text>
      </View> */}
      <FlatList
        style={{
          marginBottom: 100,
          shadowColor: '#000',
          shadowOpacity: 0.25,
          shadowRadius: 5,
          elevation: 5,
        }}
        numColumns={2}
        data={Array}
        renderItem={({item, index}) => (
          <View
            style={{
              margin: 15,
              marginBottom: 20,
            }}>
            <Image
              style={{height: 69, width: 136, borderRadius: 10}}
              source={require('../../../assets/image.png')}
            />
            <View
              style={{
                backgroundColor: '#045BAA',
                height: 60,
                width: 150,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontWeight: '400', padding: 5}}>
                Academia Healthway
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Equipments;
