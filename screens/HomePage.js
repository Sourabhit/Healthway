import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import TextButton from './component/TextButton';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const HomePage = ({navigation}) => {
  const Dimensiotn = useWindowDimensions();
  const [showmodel, setShowModel] = useState(true);

  const Users = [
    {
      id: 1,
      name: 'WE WISH YOU A MERRY..',
      text: 'VIEW MORE',
    },
    {
      id: 2,
      name: 'WE WISH YOU A MERRY..',
      text: 'VIEW MORE',
    },
    {
      id: 3,
      name: 'WE WISH YOU A MERRY..',
      text: 'VIEW MORE',
    },
    {
      id: 4,
      name: 'WE WISH YOU A MERRY..',
      text: 'VIEW MORE',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            Feed
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Icon name="commenting-o" size={20} color="white" />
            <Icon name="bell" size={20} color="white" marginHorizontal={10} />
          </View>
        </View>
        <View>
          <Icon style={styles.btn} name="search" size={15} />
          <TextButton placeholder={' Search video'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            marginHorizontal: 20,
          }}>
          <Text
            style={{flex: 1, fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            About Company
          </Text>
          <Text
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 18,
              color: 'blue',
              marginLeft: 50,
            }}>
            View more
          </Text>
        </View>
        <View style={{height: 250, width: 335}}>
          <Swiper>
            <Image
              style={{
                height: 210,
                width: 320,
                marginLeft: 15,
                borderRadius: 20,
              }}
              source={require('../assets/Stock.jpg')}
            />
            <Image
              style={{
                height: 210,
                width: 320,
                marginLeft: 15,
                borderRadius: 20,
              }}
              source={require('../assets/Stock.jpg')}
            />
            <Image
              style={{
                height: 210,
                width: 320,
                marginLeft: 15,
                borderRadius: 20,
              }}
              source={require('../assets/Stock.jpg')}
            />
          </Swiper>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            marginHorizontal: 20,
          }}>
          <Text
            style={{flex: 1, fontWeight: 'bold', fontSize: 18, color: 'black'}}>
            Related News
          </Text>
          <Text
            style={{
              flex: 1,
              fontWeight: 'bold',
              fontSize: 18,
              color: 'blue',
              marginLeft: 50,
            }}>
            View more
          </Text>
        </View>
        <View>
          <FlatList
            data={Users}
            renderItem={({item, index}) => (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <Image
                  source={require('../assets/Rectangless.png')}
                  style={{height: 96, width: 131}}
                />
                <View style={{margin: 15}}>
                  <Text style={{color: '#045BAA', fontWeight: '600'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: '#26B6A6', fontWeight: '900'}}>
                    {item.text}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <Modal isVisible={showmodel}>
        <View
          style={{
            // position: 'absolute',
            backgroundColor: 'white',
            alignSelf: 'center',
            width: Dimensiotn.width - 50,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Icon
            name="close"
            size={20}
            color="black"
            alignSelf={'flex-end'}
            margin={10}
            onPress={() => setShowModel(false)}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '800',
              color: 'black',
            }}>
            Dr.Cooper Stanton
          </Text>
          <Image
            style={{
              alignSelf: 'center',
              height: 50,
              width: 50,
              marginLeft: 15,
              borderRadius: 20,
              margin: 10,
            }}
            source={require('../assets/Stock.jpg')}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: '800',
              color: 'black',
              margin: 10,
            }}>
            As such, meeting the needs and expectations of professionals from
            various areas of knowledge, institutions with responsibility{' '}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
});
