import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextButton from './component/TextButton';
import Swiper from 'react-native-swiper';
import Button from './component/Button';

const AboutUs = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#045BAA',
          height: 80,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            flex: 1,
            textAlign: 'center',
          }}>
          About Us
        </Text>
        <Icon name="bell" size={20} color="white" margin={10} />
      </View>
      <View>
        <Icon style={styles.btn} name="bell" size={15} />
        <TextButton placeholder={'Search video'} />
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
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#045BAA',
          textAlign: 'center',
        }}>
        {' '}
        Health Way{' '}
      </Text>
      <Button title={'SEE MORE'} />
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
});
