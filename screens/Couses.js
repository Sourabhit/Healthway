import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Couses = () => {
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
          Courses
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
          <Icon name="commenting-o" size={20} color="white" />
          <Icon name="bell" size={20} color="white" marginHorizontal={10} />
        </View>
      </View>
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
              shadowColor: '#000',
              shadowOpacity: 0.3,
              shadowRadius: 4,
              elevation: 3,
            }}>
            <Image
              style={{
                height: 69,
                width: 136,
                borderRadius: 10,
              }}
              source={require('../assets/prev.png')}
            />
            <View
              style={{
                backgroundColor: '#045BAA',
                height: 60,
                width: 150,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
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

export default Couses;
